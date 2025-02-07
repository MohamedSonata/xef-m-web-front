import React from 'react';

interface CodeBlockProps {
  children: React.ReactNode;
  language?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ children, language }) => {
  return (
    <pre className="bg-[var(--background-darker)] p-4 rounded-lg overflow-x-auto">
      <code className={language ? `language-${language}` : ''}>
        {children}
      </code>
    </pre>
  );
}; 