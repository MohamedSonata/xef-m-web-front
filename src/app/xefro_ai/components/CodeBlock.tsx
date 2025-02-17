import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  language: string;
  children: string;
}

export const CodeBlock = ({ language, children }: CodeBlockProps) => {
  return (
    <div className="relative group my-4">
      <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => navigator.clipboard.writeText(String(children))}
          className="bg-gray-700 text-white px-2 py-1 rounded text-sm hover:bg-gray-600"
        >
          Copy
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