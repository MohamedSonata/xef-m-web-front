import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';

interface CodeBlockProps {
  language: string;
  children: string;
}

export const CodeBlock = ({ language, children }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    // Clean up the code content by removing any trailing newlines
    const cleanContent = String(children).trim();
    
    try {
      await navigator.clipboard.writeText(cleanContent);
      setCopied(true);
      
      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className="relative group my-4">
      <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={handleCopy}
          className="bg-gray-700 text-white px-2 py-1 rounded text-sm hover:bg-gray-600 transition-colors"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div className="text-xs text-gray-400 bg-[#2d2d2d] px-4 py-1 rounded-t-lg border-b border-gray-700">
        {language}
      </div>
      <SyntaxHighlighter
        language={language}
        style={nightOwl}
        customStyle={{
          margin: 0,
          borderRadius: '0 0 0.5rem 0.5rem',
        }}
        showLineNumbers
        useInlineStyles={true}
        wrapLines={true}
        wrapLongLines={true}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    </div>
  );
}; 