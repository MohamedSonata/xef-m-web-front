export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface MessageContentProps {
  content: string;
} 