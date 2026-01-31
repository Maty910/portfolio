/**
 * Custom hook for copying text to clipboard with feedback
 * @param timeout - Duration in ms to show "copied" state (default: 2000ms)
 * @returns Object with copied state and copy function
 */

import { useState, useCallback } from 'react';

export const useCopyToClipboard = (timeout = 2000) => {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async (text: string): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), timeout);
      return true;
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
      return false;
    }
  }, [timeout]);

  return { copied, copy };
};
