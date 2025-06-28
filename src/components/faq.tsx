"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "What image formats do you support?",
      answer:
        "We support a wide range of image formats including PNG, JPG, JPEG, WebP, GIF, BMP, TIFF, and more. You can convert between any of these formats using our tools.",
    },
    {
      question: "Is there a file size limit?",
      answer:
        "Yes, we currently have a 10MB file size limit per image. This is to ensure fast processing and optimal performance for all users.",
    },
    {
      question: "Are my images stored on your servers?",
      answer:
        "No, we do not permanently store your images. All uploaded images are processed in memory and automatically deleted after conversion or within 24 hours, whichever comes first.",
    },
    {
      question: "Do I need to create an account to use the converter?",
      answer: "No, our image conversion tools are completely free to use without any registration or account creation.",
    },
    {
      question: "Will the conversion affect the quality of my images?",
      answer:
        "Our conversion process aims to maintain the highest possible quality while optimizing for the target format. However, some formats like JPG use lossy compression which may slightly reduce quality compared to lossless formats like PNG.",
    },
    {
      question: "Can I convert multiple images at once?",
      answer:
        "Yes, our batch processing feature allows you to convert multiple images simultaneously, saving you time and effort.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Find answers to common questions about our image conversion tools.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
