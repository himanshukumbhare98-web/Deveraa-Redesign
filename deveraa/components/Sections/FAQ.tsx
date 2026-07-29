"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      value: "item-1",
      question: "What is your typical development timeline?",
      answer: "The timeline depends on the project's complexity. A standard web application takes about 8-12 weeks from discovery to deployment, while complex enterprise SaaS platforms can take 4-6 months."
    },
    {
      value: "item-2",
      question: "Do you provide post-launch maintenance and support?",
      answer: "Absolutely. We offer comprehensive post-launch support packages that include security updates, server monitoring, bug fixes, and feature enhancements to ensure your product scales smoothly."
    },
    {
      value: "item-3",
      question: "Which technologies do you specialize in?",
      answer: "We specialize in modern, high-performance tech stacks. For frontend, we use React and Next.js. For backend, we use Node.js, Python, and scalable cloud infrastructure like AWS and Google Cloud."
    }
  ];

  return (
    <section className="w-full py-24 bg-muted/20 border-t">
      <div className="max-w-3xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about our services, process, and billing.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-background rounded-2xl border p-6 shadow-sm">
          <Accordion type="single" collapsible="true" className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.value} value={faq.value} className="border-b last:border-0">
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
}