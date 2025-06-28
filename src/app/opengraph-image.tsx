import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Image Converter - Free Online Image Conversion Tools"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background: "linear-gradient(to bottom, #4F46E5, #7C3AED)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        padding: "40px",
      }}
    >
      <div style={{ fontSize: "72px", fontWeight: "bold", marginBottom: "20px" }}>Image Converter</div>
      <div style={{ fontSize: "36px", opacity: 0.8 }}>Free Online Image Conversion Tools</div>
    </div>,
    {
      ...size,
    },
  )
}
