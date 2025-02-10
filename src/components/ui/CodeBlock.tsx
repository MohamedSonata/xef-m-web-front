import React from 'react';

interface CodeBlockProps {
  children: React.ReactNode;
  language?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ children, language }) => {
  return (
    <pre className="bg-[var(--background-darker)] p-4 rounded-lg overflow-x-auto whitespace-pre-wrap break-words">
      <code
        className={language ? `language-${language}` : ''}
        style={{ color: '#E9B037FF' }}
      >
        {children}
      </code>
    </pre>
  );
}; 