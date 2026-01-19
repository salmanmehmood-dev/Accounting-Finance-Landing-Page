import * as React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What types of businesses do you work with?",
    a: "We support small businesses, startups, and entrepreneurs with accounting, bookkeeping, advisory, and compliance-focused services.",
  },
  {
    q: "Do you offer remote accounting services?",
    a: "Yes. We can work remotely with secure, modern workflows while keeping your reporting accurate and up to date.",
  },
  {
    q: "Can you help with IFRS adoption?",
    a: "Absolutely. We guide you through IFRS advisory and implementation to make the transition smooth and compliant.",
  },
  {
    q: "How do we get started?",
    a: "Start with a consultation. We’ll understand your goals, assess your current setup, and propose a tailored plan.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground">
            FAQ
          </h2>
          <p className="mt-3 text-muted-foreground">
            Quick answers to common questions.
          </p>
        </div>

        <div className="mt-10 max-w-3xl">
          <Accordion type="single" collapsible className="grid gap-4">
            {faqs.map((f) => (
              <AccordionItem
                key={f.q}
                value={f.q}
                className="rounded-2xl border border-border/50 bg-card/50 shadow-sm backdrop-blur-sm"
              >
                <AccordionTrigger className="text-foreground">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
