"use client";

import { useState, useCallback } from "react";

/** Copies text to the clipboard and exposes a transient "copied" flag. */
export function useCopyToClipboard(resetDelayMs = 2000) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), resetDelayMs);
      } catch (error) {
        console.error("Failed to copy to clipboard:", error);
      }
    },
    [resetDelayMs]
  );

  return { copied, copy };
}
