import React, { useState, useRef, useEffect } from 'react';
import { Send, Upload, MessageCircle, X, Minimize2, Maximize2, Trash2 } from 'lucide-react';
import { chatService } from '../services/chatService';
import { pdfService } from '../services/pdfService';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  type?: 'text' | 'pdf';
  fileName?: string;
}

interface Chat {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chats, setChats] = useState<Chat[]>([]);
  const [activeChat, setActiveChat] = useState<Chat | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Initialize chats
  useEffect(() => {
    const savedChats = localStorage.getItem('portfolio-chats');
    if (savedChats) {
      const parsedChats = JSON.parse(savedChats).map((chat: any) => ({
        ...chat,
        createdAt: new Date(chat.createdAt),
        messages: chat.messages.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp),
        })),
      }));
      setChats(parsedChats);
      if (parsedChats.length > 0) setActiveChat(parsedChats[0]);
    } else {
      createNewChat();
    }
  }, []);

  // Save chats to localStorage
  useEffect(() => {
    localStorage.setItem('portfolio-chats', JSON.stringify(chats));
  }, [chats]);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeChat?.messages]);

  const createNewChat = () => {
    const newChat: Chat = {
      id: Date.now().toString(),
      title: 'New Chat',
      messages: [
        {
          id: Date.now().toString(),
          role: 'assistant',
          content:
            "Hello! I'm your portfolio assistant. I can help you learn about my projects, skills, and experience, or assist with general questions. Feel free to upload PDFs for analysis too!",
          timestamp: new Date(),
          type: 'text',
        },
      ],
      createdAt: new Date(),
    };
    setChats((prev) => [newChat, ...prev]);
    setActiveChat(newChat);
  };

  const updateChatTitle = (chat: Chat) => {
    if (chat.messages.length > 1) {
      const userMessage =
        chat.messages.find((msg) => msg.role === 'user')?.content || 'New Chat';
      const title =
        userMessage.length > 30
          ? userMessage.substring(0, 30) + '...'
          : userMessage;

      const updatedChat = { ...chat, title };
      setChats((prev) => prev.map((c) => (c.id === chat.id ? updatedChat : c)));
      setActiveChat(updatedChat);
    }
  };

  const sendMessage = async () => {
    if (!message.trim() || isLoading || !activeChat) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: message.trim(),
      timestamp: new Date(),
      type: 'text',
    };

    const updatedChat = {
      ...activeChat,
      messages: [...activeChat.messages, userMessage],
    };

    setActiveChat(updatedChat);
    setChats((prev) => prev.map((c) => (c.id === activeChat.id ? updatedChat : c)));
    setMessage('');
    setIsLoading(true);

    try {
      const response = await chatService.sendMessage(
        message.trim(),
        activeChat.messages.map((m) => ({ role: m.role, content: m.content }))
      );

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date(),
        type: 'text',
      };

      const finalChat = {
        ...updatedChat,
        messages: [...updatedChat.messages, assistantMessage],
      };

      setActiveChat(finalChat);
      setChats((prev) => prev.map((c) => (c.id === activeChat.id ? finalChat : c)));

      if (finalChat.title === 'New Chat') updateChatTitle(finalChat);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !activeChat) return;

    if (file.type !== 'application/pdf') {
      alert('Please upload only PDF files.');
      return;
    }

    setIsLoading(true);

    try {
      const extractedText = await pdfService.extractTextFromPDF(file);

      const userMessage: Message = {
        id: Date.now().toString(),
        role: 'user',
        content: `Uploaded PDF: ${file.name}`,
        timestamp: new Date(),
        type: 'pdf',
        fileName: file.name,
      };

      const updatedChat = {
        ...activeChat,
        messages: [...activeChat.messages, userMessage],
      };

      setActiveChat(updatedChat);
      setChats((prev) => prev.map((c) => (c.id === activeChat.id ? updatedChat : c)));

      const response = await chatService.sendMessage(
        `Please analyze this PDF content and provide a summary:\n\n${extractedText}`,
        activeChat.messages.map((m) => ({ role: m.role, content: m.content }))
      );

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date(),
        type: 'text',
      };

      const finalChat = {
        ...updatedChat,
        messages: [...updatedChat.messages, assistantMessage],
      };

      setActiveChat(finalChat);
      setChats((prev) => prev.map((c) => (c.id === activeChat.id ? finalChat : c)));
    } catch (error) {
      console.error('Error processing PDF:', error);
      alert('Error processing PDF. Please try again.');
    } finally {
      setIsLoading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const deleteChat = (chatId: string) => {
    const updatedChats = chats.filter((chat) => chat.id !== chatId);
    setChats(updatedChats);

    if (activeChat?.id === chatId) {
      if (updatedChats.length > 0) setActiveChat(updatedChats[0]);
      else createNewChat();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-green-600 
                     text-white p-4 rounded-full shadow-xl hover:scale-110 transition-all z-50"
        >
          <MessageCircle size={26} />
        </button>
      )}

      {/* Chat Interface */}
      {isOpen && (
        <div
          className={`fixed bottom-0 right-0 sm:bottom-8 sm:right-8 
                      bg-gray-950/95 backdrop-blur-xl rounded-t-2xl sm:rounded-2xl 
                      shadow-2xl border border-gray-700/50 z-50 transition-all duration-500
                      ${isMinimized ? 'h-16' : 'h-[70vh] sm:h-[600px]'}
                      w-full sm:w-[420px] flex flex-col overflow-hidden`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700/50 bg-gray-900/80">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div className="flex flex-col">
                <span className="font-semibold text-white text-sm sm:text-base">
                  Portfolio Assistant
                </span>
                {/* <span className="text-xs text-gray-400">Kshitiz Sikriwal</span> */}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-2 text-gray-300 hover:text-white"
              >
                {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-300 hover:text-white"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <div className="flex h-full">
              {/* Sidebar */}
              <div className="w-24 sm:w-32 bg-gray-900/80 border-r border-gray-700/50 flex flex-col">
                <button
                  onClick={createNewChat}
                  className="p-2 m-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg text-xs hover:from-green-600 hover:to-green-700"
                >
                  + New Chat
                </button>
                <div className="flex-1 overflow-y-auto space-y-2 p-2">
                  {chats.map((chat) => (
                    <div
                      key={chat.id}
                      className={`p-2 rounded-lg text-xs cursor-pointer truncate relative group ${
                        activeChat?.id === chat.id
                          ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                          : 'hover:bg-gray-800/60 text-gray-400 hover:text-gray-200'
                      }`}
                      onClick={() => setActiveChat(chat)}
                    >
                      <div className="truncate pr-4">{chat.title}</div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteChat(chat.id);
                        }}
                        className="absolute top-1 right-1 text-red-400 opacity-0 group-hover:opacity-100"
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat Area */}
              <div className="flex-1 flex flex-col min-w-0">
                <div className="flex-1 overflow-y-auto p-3 space-y-3">
                  {activeChat?.messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                          msg.role === 'user'
                            ? 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                            : 'bg-gray-800/90 text-gray-100 border border-gray-700/50'
                        }`}
                      >
                        {msg.type === 'pdf' ? (
                          <div className="flex items-center space-x-2">
                            <Upload size={16} className="text-green-400" />
                            <div className="text-xs">{msg.fileName}</div>
                          </div>
                        ) : (
                          <div>{msg.content}</div>
                        )}
                        <div className="text-xs mt-1 opacity-60">
                          {msg.timestamp.toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="text-gray-400 text-xs">Assistant is typing...</div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-3 border-t border-gray-700/50 bg-gray-900/50">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                      placeholder="Ask about Kshitiz's portfolio..."
                      className="flex-1 min-w-0 px-3 py-2 border border-gray-600/50 rounded-lg 
                                 bg-gray-800/80 text-gray-100 text-sm placeholder-gray-400"
                      disabled={isLoading}
                    />
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="flex-shrink-0 p-2 bg-gray-700/80 text-gray-300 rounded-lg"
                    >
                      <Upload size={18} />
                    </button>
                    <button
                      onClick={sendMessage}
                      disabled={isLoading || !message.trim()}
                      className="flex-shrink-0 p-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg"
                    >
                      <Send size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Chatbot;
