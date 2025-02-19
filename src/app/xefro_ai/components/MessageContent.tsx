/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef } from 'react';
import { MessageContentProps } from '../types/chat';
import ReactMarkdown from 'react-markdown';
import { CodeBlock } from './CodeBlock';
import { useContentStreaming } from '../hooks/useContentStreaming';
import { useScrollManagement } from '../hooks/useScrollManagement';

export const MessageContent = ({ content }: MessageContentProps) => {
  const messageRef = useRef<HTMLDivElement>(null);
  const { streamedContent, displayContent } = useContentStreaming(content);
  const { showScrollButton, scrollToBottom } = useScrollManagement(messageRef);

  return (
    <>
      <div 
        ref={messageRef}
        className="prose max-w-none overflow-x-hidden
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
              
              return language ? (
                <CodeBlock language={language}>{String(children)}</CodeBlock>
              ) : (
                <code className="!bg-blue-50 !text-blue-700 !font-semibold !px-1.5 !py-0.5 !rounded-md !whitespace-nowrap">
                  {children}
                </code>
              );
            }
          }}
        >
          {displayContent}
        </ReactMarkdown>
      </div>

      {showScrollButton && (
        <button
          onClick={scrollToBottom}
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg"
        >
          ↓
        </button>
      )}
    </>
  );
}; 