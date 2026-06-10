import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Viral Inflatable Buddy India";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #05050a 0%, #1a0b2e 50%, #05050a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 100, marginBottom: 24, display: "flex" }}>🥊🎈</div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            padding: "0 80px",
            display: "flex",
            lineHeight: 1.2,
          }}
        >
          The Viral Inflatable Buddy
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            backgroundImage: "linear-gradient(90deg, #c6f24a, #ff4d8d, #8b5cf6)",
            backgroundClip: "text",
            color: "transparent",
            display: "flex",
          }}
        >
          Is Coming To India
        </div>
        <div style={{ fontSize: 32, color: "#9ca3af", marginTop: 24, display: "flex" }}>
          Join the waitlist for early access
        </div>
      </div>
    ),
    { ...size }
  );
}
