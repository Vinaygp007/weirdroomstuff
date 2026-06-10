"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

const EMBED_SCRIPT_SRC = "https://www.instagram.com/embed.js";
const EMBED_SCRIPT_ID = "instagram-embed-script";

interface InstagramEmbedProps {
  url: string;
  className?: string;
}

/** Embeds an Instagram post/reel using Instagram's official embed widget. */
export function InstagramEmbed({ url, className }: InstagramEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const process = () => window.instgrm?.Embeds.process();

    if (window.instgrm) {
      process();
      return;
    }

    const existingScript = document.getElementById(EMBED_SCRIPT_ID);
    if (existingScript) {
      existingScript.addEventListener("load", process);
      return () => existingScript.removeEventListener("load", process);
    }

    const script = document.createElement("script");
    script.id = EMBED_SCRIPT_ID;
    script.src = EMBED_SCRIPT_SRC;
    script.async = true;
    script.addEventListener("load", process);
    document.body.appendChild(script);

    return () => script.removeEventListener("load", process);
  }, [url]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-2xl border border-border bg-black [&_.instagram-media]:!absolute [&_.instagram-media]:!inset-0 [&_.instagram-media]:!h-full [&_.instagram-media]:!w-full [&_.instagram-media]:!min-w-0 [&_.instagram-media]:!max-w-none [&_iframe]:!absolute [&_iframe]:!inset-0 [&_iframe]:!h-full [&_iframe]:!w-full [&_iframe]:!min-w-0 [&_iframe]:!max-w-none ${className ?? ""}`}
    >
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ margin: 0, background: "#000" }}
      />
    </div>
  );
}
