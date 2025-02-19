import { useState, useEffect } from 'react';

export const useContentStreaming = (content: string) => {
  const [streamedContent, setStreamedContent] = useState('');
  const [isStreaming, setIsStreaming] = useState(true);

  useEffect(() => {
    let newContent = content;

    try {
      if (content.startsWith('{')) {
        const parsed = JSON.parse(content);
        newContent = parsed.message;
      }

      if (isStreaming) {
        setStreamedContent(newContent);
      } else {
        const formattedContent = formatContent(newContent);
        setStreamedContent(formattedContent);
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      setStreamedContent(content);
    }
  }, [content, isStreaming]);

  return {
    streamedContent,
    isStreaming,
    setIsStreaming,
    displayContent: isStreaming ? streamedContent + '▋' : streamedContent
  };
};

const formatContent = (content: string): string => {
  return content
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
}; 