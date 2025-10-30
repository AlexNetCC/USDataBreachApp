
import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {

  const parseMarkdown = (text: string): string => {
    const lines = text.split('\n');
    const result: string[] = [];
    let inList = false;
    let inParagraph = false;
    let paragraphBuffer: string[] = [];

    const flushParagraph = () => {
      if (paragraphBuffer.length > 0) {
        const content = paragraphBuffer.join(' ').trim();
        if (content) {
          result.push(`<p class="mb-4 leading-relaxed text-text-secondary">${processInlineMarkdown(content)}</p>`);
        }
        paragraphBuffer = [];
        inParagraph = false;
      }
    };

    const processInlineMarkdown = (line: string): string => {
      let processed = line;

      // Bold
      processed = processed.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-text-primary">$1</strong>');

      // Links
      processed = processed.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-accent hover:text-accent-hover font-medium underline">$1</a>');

      // Inline code
      processed = processed.replace(/`(.*?)`/g, '<code class="bg-gray-100 text-text-primary text-sm rounded px-1.5 py-0.5 font-mono border border-gray-200">$1</code>');

      return processed;
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();

      // Empty line
      if (trimmedLine === '') {
        flushParagraph();
        if (inList) {
          result.push('</ul>');
          inList = false;
        }
        continue;
      }

      // H1
      if (trimmedLine.startsWith('# ') && !trimmedLine.startsWith('## ')) {
        flushParagraph();
        if (inList) {
          result.push('</ul>');
          inList = false;
        }
        const headerText = trimmedLine.substring(2).trim();
        result.push(`<h1 class="text-3xl font-bold font-display text-text-primary mt-8 mb-4 first:mt-0">${processInlineMarkdown(headerText)}</h1>`);
        continue;
      }

      // H2
      if (trimmedLine.startsWith('## ') && !trimmedLine.startsWith('### ')) {
        flushParagraph();
        if (inList) {
          result.push('</ul>');
          inList = false;
        }
        const headerText = trimmedLine.substring(3).trim();
        result.push(`<h2 class="text-2xl font-semibold font-display text-text-primary mt-8 mb-3 first:mt-0 pb-2 border-b border-border-light">${processInlineMarkdown(headerText)}</h2>`);
        continue;
      }

      // H3
      if (trimmedLine.startsWith('### ')) {
        flushParagraph();
        if (inList) {
          result.push('</ul>');
          inList = false;
        }
        const headerText = trimmedLine.substring(4).trim();
        result.push(`<h3 class="text-xl font-semibold font-display text-text-primary mt-6 mb-2 first:mt-0">${processInlineMarkdown(headerText)}</h3>`);
        continue;
      }

      // List item
      if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ')) {
        flushParagraph();
        if (!inList) {
          result.push('<ul class="mb-4 space-y-2">');
          inList = true;
        }
        const itemText = trimmedLine.substring(2).trim();
        result.push(`<li class="ml-6 pl-2 text-text-secondary leading-relaxed list-disc">${processInlineMarkdown(itemText)}</li>`);
        continue;
      }

      // Regular line - accumulate into paragraph
      if (trimmedLine) {
        paragraphBuffer.push(trimmedLine);
        inParagraph = true;
      }
    }

    // Flush any remaining paragraph
    flushParagraph();
    if (inList) {
      result.push('</ul>');
    }

    return result.join('\n');
  };

  return (
    <div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }} />
  );
};

export default MarkdownRenderer;
