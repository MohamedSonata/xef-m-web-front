import { MessageContentProps } from '../types/chat';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const MessageContent = ({ content }: MessageContentProps) => {
  let parsedContent = content;
  try {
    if (content.startsWith('{')) {
      const parsed = JSON.parse(content);
      parsedContent = parsed.message;
    }

    parsedContent = parsedContent
      .replace(/\n{3,}/g, '\n\n')
      .replace(/```(\w+)\n/g, '\n```$1\n')
      .replace(/```\n/g, '\n```\n')
      .replace(/^\s*[-*]\s+/gm, '- ')
      .replace(/^\s*(\d+)\.\s+/gm, '$1. ')
      .replace(/`([^`]+)`/g, '`$1`')
      .replace(/[ \t]+$/gm, '')
      .replace(/\n*(```[^`]+```)\n*/g, '\n\n$1\n\n')
      .replace(/[ ]{2,}/g, ' ')
      .trim();

  } catch (e) {
    console.error('Failed to parse response:', e);
  }

  return (
    <div className="prose max-w-none 
      prose-headings:text-gray-900 
      prose-p:text-gray-700 
      prose-strong:text-gray-900 
      prose-ul:text-gray-700 
      prose-ol:text-gray-700 
      prose-li:my-0 
      prose-li:text-gray-700 
      prose-pre:my-2 
      prose-pre:bg-[#1a1a1a] 
      prose-pre:rounded-lg 
      prose-blockquote:border-l-4 
      prose-blockquote:border-gray-300 
      prose-blockquote:pl-4 
      prose-blockquote:italic 
      prose-blockquote:my-4 
      prose-blockquote:text-gray-600 
      [&>*]:text-gray-700
      [&_p>code]:bg-blue-50
      [&_p>code]:text-blue-700
      [&_p>code]:font-semibold
      [&_p>code]:px-1.5
      [&_p>code]:py-0.5
      [&_p>code]:rounded-md
      [&_p>code]:whitespace-nowrap
      [&_li>code]:bg-blue-50
      [&_li>code]:text-blue-700
      [&_li>code]:font-semibold
      [&_li>code]:px-1.5
      [&_li>code]:py-0.5
      [&_li>code]:rounded-md
      [&_li>code]:whitespace-nowrap"
    >
      <ReactMarkdown
        components={{
          code({ className, children }) {
            const match = /language-(\w+)/.exec(className || '');
            const language = match ? match[1] : '';
            
            if (language) {
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
            }
            
            return (
              <code className="!bg-blue-50 !text-blue-700 !font-semibold !px-1.5 !py-0.5 !rounded-md !whitespace-nowrap">
                {children}
              </code>
            );
          }
        }}
      >
        {parsedContent}
      </ReactMarkdown>
    </div>
  );
}; 