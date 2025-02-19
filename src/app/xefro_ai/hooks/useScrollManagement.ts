import { useState, useEffect, RefObject, useCallback } from 'react';

export const useScrollManagement = (messageRef: RefObject<HTMLDivElement | null>) => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = useCallback(() => {
    const chatContainer = messageRef.current?.closest('.chat-container');
    if (!chatContainer) return;
    
    const scrollPosition = chatContainer.scrollTop + chatContainer.clientHeight;
    const bottomPosition = chatContainer.scrollHeight;
    const isNearBottom = bottomPosition - scrollPosition < 100;
    setShowScrollButton(!isNearBottom);
  }, [messageRef]);

  const scrollToBottom = () => {
    const chatContainer = messageRef.current?.closest('.chat-container');
    if (!chatContainer) return;
    
    chatContainer.scrollTo({
      top: chatContainer.scrollHeight,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const chatContainer = messageRef.current?.closest('.chat-container');
    if (!chatContainer) return;
    
    chatContainer.addEventListener('scroll', handleScroll);
    return () => chatContainer.removeEventListener('scroll', handleScroll);
  }, [messageRef, handleScroll]);

  return {
    showScrollButton,
    scrollToBottom
  };
}; 