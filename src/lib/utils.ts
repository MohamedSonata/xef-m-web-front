import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import path from 'path';

// Ensure paths are properly resolved
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const resolvePath = (p: string) => path.resolve(process.cwd(), p);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
} 