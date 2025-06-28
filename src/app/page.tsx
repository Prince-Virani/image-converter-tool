import type { Metadata } from "next"
import Hero from "@/components/hero"
import ConversionTools from "@/components/conversion-tools"
import Features from "@/components/features"
import FAQ from "@/components/faq"
import CTA from "@/components/cta"

export const metadata: Metadata = {
  title: "Image Converter - Convert Images Online for Free",
  description:
    "Free online image converter. Convert between PNG, JPG, JPEG, WebP, and more formats instantly. No registration required.",
  keywords: "image converter, png to jpg, jpg to png, webp converter, image format conversion, free image tools",
  openGraph: {
    title: "Image Converter - Convert Images Online for Free",
    description:
      "Free online image converter. Convert between PNG, JPG, JPEG, WebP, and more formats instantly. No registration required.",
    url: "https://pngimageconverter.com",
    siteName: "Image Converter",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Image Converter - Convert Images Online for Free",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Image Converter - Convert Images Online for Free",
    description:
      "Free online image converter. Convert between PNG, JPG, JPEG, WebP, and more formats instantly. No registration required.",
    images: ["/og-image.png"],
  },
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <ConversionTools />
      <Features />
      <FAQ />
      <CTA />
    </main>
  )
}
