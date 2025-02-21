'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useChatLogic } from './hooks/useChatLogic';
import { MessageContent } from './components/MessageContent';



export default function ChatPage() {
  const {
    messages,
    input,
    isLoading,
    error,
    setInput,
    handleSubmit
  } = useChatLogic();

  const [showScrollButton, setShowScrollButton] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Handle scroll position and show/hide scroll button
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const isNearBottom = 
      container.scrollHeight - container.scrollTop - container.clientHeight < 100;
    setShowScrollButton(!isNearBottom);
  };

  // Scroll to bottom function
  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  // Auto scroll when new messages arrive
  useEffect(() => {
    if (messagesContainerRef.current) {
      const container = messagesContainerRef.current;
      const isNearBottom = 
        container.scrollHeight - container.scrollTop - container.clientHeight < 100;
      
      if (isNearBottom) {
        scrollToBottom();
      }
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] w-full bg-gray-50 overflow-hidden">
      {/* Header */}
      <div className="flex-none p-4 border-b border-gray-200 bg-white w-full">
        <h1 className="text-2xl font-bold text-gray-900">
          Chat with Xefro AI Assistant
        </h1>
      </div>

      {/* Messages Container */}
      <div 
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 messages-container chat-container w-full max-w-none"
        onScroll={handleScroll}
      >
        {messages.map((message, index) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={index}
            className={`p-4 rounded-xl shadow-sm ${
              message.role === 'user'
                ? 'bg-[#1a1a1a] text-white max-w-[85%] ml-auto'
                : 'bg-white text-gray-700 w-full border border-gray-100'
            }`}
          >
            {message.role === 'assistant' ? (
              <div className="w-full">
                <MessageContent content={message.content} />
              </div>
            ) : (
              <div className="whitespace-pre-wrap w-full">{message.content}</div>
            )}
          </motion.div>
        ))}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-[#f5f5f5] p-4 rounded-xl shadow-sm"
          >
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-[#1a1a1a] rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-[#1a1a1a] rounded-full animate-bounce delay-100" />
              <div className="w-2 h-2 bg-[#1a1a1a] rounded-full animate-bounce delay-200" />
            </div>
          </motion.div>
        )}
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-red-50 text-red-600 p-4 rounded-xl"
          >
            {error}
          </motion.div>
        )}
      </div>

      {/* Scroll button - Updated positioning */}
      {showScrollButton && (
        <button
          onClick={scrollToBottom}
          className="absolute bottom-24 left-1/2 transform -translate-x-1/2 
            bg-black hover:bg-blue-700 
            text-white rounded-full px-4 py-2 shadow-lg transition-all duration-200 
            hover:scale-105 z-[100] flex items-center justify-center
            gap-2"
          aria-label="Scroll to bottom"
        >
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      )}

      {/* Input Form */}
      <div className="flex-none p-4 border-t border-gray-200 bg-white w-full">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <textarea
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              e.target.style.height = 'auto';
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
            onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e as unknown as React.FormEvent<Element>);
              }
            }}
            className="flex-1 p-3 border border-gray-200 rounded-xl bg-gray-50 
              text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]
              resize-none overflow-hidden min-h-[52px] max-h-[200px]
              placeholder:text-gray-500 mobile-placeholder
              text-sm sm:text-base
              placeholder:text-sm sm:placeholder:text-base"
            placeholder="Type your message..."
            data-long-placeholder="Type your message... (Press Shift + Enter for new line)"
            disabled={isLoading}
            rows={1}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#1a1a1a] text-white px-6 py-3 rounded-xl 
              hover:bg-[#2a2a2a] disabled:opacity-50 disabled:cursor-not-allowed 
              transition-all duration-200 h-[52px]"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
