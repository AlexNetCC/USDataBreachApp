
import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  
  const parseMarkdown = (text: string) => {
    let html = text;
    
    // Headers
    html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold font-display mt-6 mb-3">$1</h1>');
    html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold font-display mt-5 mb-2 border-b border-border-light pb-1">$1</h2>');
    html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold font-display mt-4 mb-1">$1</h3>');
    
    // Bold
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-text-primary">$1</strong>');
    
    // Lists
    html = html.replace(/^\s*[-*] (.*)/gim, '<li class="ml-6">$1</li>');
    html = html.replace(/<li>/g, '<ul><li class="list-disc">');
    html = html.replace(/<\/li>\n<ul>/g, '</li><li>');
    html = html.replace(/<\/li>(?!<li)/g, '</li></ul>');

    // Links
     html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">$1</a>');

    // Code
    html = html.replace(/`(.*?)`/g, '<code class="bg-gray-200 text-sm rounded px-1 py-0.5 font-mono">$1</code>');

    // Paragraphs
    html = html.split('\n').map(p => p.trim() === '' ? '' : `<p class="mb-3 leading-relaxed text-text-secondary">${p}</p>`).join('');
    
    // Cleanup list structure issues
    html = html.replace(/<\/p>(\s*<ul>)/g, '$1');
    html = html.replace(/(<\/ul>\s*)<p>/g, '$1');

    return html;
  };
  
  return (
    <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }} />
  );
};

export default MarkdownRenderer;