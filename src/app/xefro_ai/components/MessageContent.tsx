/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect, useRef } from 'react';
import { MessageContentProps } from '../types/chat';
import ReactMarkdown from 'react-markdown';
import { CodeBlock } from './CodeBlock';

export const MessageContent = ({ content }: MessageContentProps) => {
  const [streamedContent, setStreamedContent] = useState('');
  const [isStreaming, setIsStreaming] = useState(true);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const messageRef = useRef<HTMLDivElement>(null);

  // Handle scroll position and show/hide scroll button
  const handleScroll = () => {
    const chatContainer = messageRef.current?.closest('.chat-container');
    if (!chatContainer) return;
    
    const scrollPosition = chatContainer.scrollTop + chatContainer.clientHeight;
    const bottomPosition = chatContainer.scrollHeight;
    const isNearBottom = bottomPosition - scrollPosition < 100;
    setShowScrollButton(!isNearBottom);
  };

  // Scroll to bottom function
  const scrollToBottom = () => {
    const chatContainer = messageRef.current?.closest('.chat-container');
    if (!chatContainer) return;
    
    chatContainer.scrollTo({
      top: chatContainer.scrollHeight,
      behavior: 'smooth'
    });
  };

  // Auto-scroll effect with improved behavior
  useEffect(() => {
    if (isStreaming) {
      requestAnimationFrame(() => {
        const chatContainer = messageRef.current?.closest('.chat-container');
        if (!chatContainer) return;
        
        chatContainer.scrollTo({
          top: chatContainer.scrollHeight,
          behavior: 'smooth'
        });
      });
    }
  }, [streamedContent, isStreaming]);

  // Add scroll event listener to the chat container instead of window
  useEffect(() => {
    const chatContainer = messageRef.current?.closest('.chat-container');
    if (!chatContainer) return;
    
    chatContainer.addEventListener('scroll', handleScroll);
    return () => chatContainer.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let newContent = content;
    try {
      if (content.startsWith('{')) {
        const parsed = JSON.parse(content);
        newContent = parsed.message;
      }

      if (isStreaming) {
        // Replace content instead of appending during streaming
        setStreamedContent(newContent);
      } else {
        // Format content when streaming is complete
        newContent = newContent
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
        setStreamedContent(newContent);
      }
    } catch (e) {
      console.error('Failed to parse response:', e);
      setStreamedContent(content);
    }
  }, [content, isStreaming]);

  // Add a blinking cursor effect when streaming
  const displayContent = isStreaming 
    ? streamedContent + '▋' 
    : streamedContent;

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
              
              if (language) {
                return <CodeBlock language={language}>{String(children)}</CodeBlock>;
              }
              
              return (
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

    
    </>
  );
}; 