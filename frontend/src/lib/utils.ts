import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const CALENDLY_URL =
  // prefer Vite env var, fall back to the existing hard-coded URL
  (import.meta.env as { VITE_CALENDLY_URL?: string }).VITE_CALENDLY_URL ??
  'https://calendly.com/tessera-studios-info/consultation?&hide_gdpr_banner=1&primary_color=933eff';
