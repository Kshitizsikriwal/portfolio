import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';

// Set up PDF.js worker
if (typeof window !== 'undefined') {
  GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;
}

class PDFService {
  async extractTextFromPDF(file: File): Promise<string> {
    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await getDocument({ data: arrayBuffer }).promise;
      
      let fullText = '';
      const numPages = pdf.numPages;

      for (let pageNum = 1; pageNum <= numPages; pageNum++) {
        const page = await pdf.getPage(pageNum);
        const textContent = await page.getTextContent();
        
        const pageText = textContent.items
          .map((item: any) => item.str)
          .join(' ');
        
        fullText += `\n--- Page ${pageNum} ---\n${pageText}\n`;
      }

      return this.cleanExtractedText(fullText);
    } catch (error) {
      console.error('Error extracting text from PDF:', error);
      throw new Error('Failed to extract text from PDF. Please ensure the file is not corrupted and try again.');
    }
  }

  private cleanExtractedText(text: string): string {
    return text
      // Remove excessive whitespace
      .replace(/\s+/g, ' ')
      // Remove unnecessary line breaks
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      // Trim whitespace
      .trim()
      // Limit length to prevent token overflow (roughly 4000 characters)
      .substring(0, 4000);
  }

  async validatePDF(file: File): Promise<boolean> {
    if (file.type !== 'application/pdf') {
      throw new Error('File must be a PDF');
    }

    if (file.size > 10 * 1024 * 1024) { // 10MB limit
      throw new Error('PDF file is too large. Please upload a file smaller than 10MB.');
    }

    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await getDocument({ data: arrayBuffer }).promise;
      return pdf.numPages > 0;
    } catch (error) {
      throw new Error('Invalid PDF file. Please check the file and try again.');
    }
  }

  getFileInfo(file: File): { name: string; size: string; type: string } {
    return {
      name: file.name,
      size: this.formatFileSize(file.size),
      type: file.type
    };
  }

  private formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  // Extract metadata from PDF
  async extractMetadata(file: File): Promise<any> {
    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await getDocument({ data: arrayBuffer }).promise;
      const metadata = await pdf.getMetadata();
      const info = metadata.info as any;
      
      return {
        title: info?.Title || 'Untitled',
        author: info?.Author || 'Unknown',
        subject: info?.Subject || '',
        creator: info?.Creator || '',
        producer: info?.Producer || '',
        creationDate: info?.CreationDate || null,
        modificationDate: info?.ModDate || null,
        numPages: pdf.numPages
      };
    } catch (error) {
      console.error('Error extracting metadata:', error);
      return {
        title: file.name,
        author: 'Unknown',
        numPages: 0
      };
    }
  }

  // Create a summary of the PDF content for better context
  createSummaryPrompt(extractedText: string, metadata: any): string {
    return `Please analyze this PDF document and provide a comprehensive summary:

**Document Information:**
- Title: ${metadata.title}
- Author: ${metadata.author}
- Pages: ${metadata.numPages}
- File: ${metadata.fileName || 'Uploaded PDF'}

**Content:**
${extractedText}

**Please provide:**
1. A brief overview of the document's main purpose
2. Key topics or sections covered
3. Important insights or findings
4. Any actionable information or recommendations
5. Relevance to software development or professional context (if applicable)

Format your response in a clear, organized manner using markdown formatting.`;
  }
}

export const pdfService = new PDFService();