"use client"

import { Plus } from "lucide-react"
import { useState } from "react"

interface FaqItem {
  id: number
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    id: 1,
    question: "How is Mono HR different from Toptal or Upwork?",
    answer:
      "Upwork is a race to the bottom. We use a proprietary AI engine to vet engineers specifically for modern backend architecture and AI workflows. We only represent the top 1%.",
  },
  {
    id: 2,
    question: "What specific roles do you place?",
    answer:
      "We place frontend, backend, full stack, AI/ML, DevOps, data, product, and design talent with a focus on high-impact technical roles.",
  },
  {
    id: 3,
    question: "How fast can we get an engineer?",
    answer:
      "Most teams receive qualified, interview-ready matches within 48 to 72 hours after role calibration.",
  },
  {
    id: 4,
    question: "Is our company data secure?",
    answer:
      "Yes. We use strict access controls, encrypted data handling, and controlled candidate visibility across the hiring lifecycle.",
  },
]

export function FAQSection() {
  const [openItemId, setOpenItemId] = useState<number | null>(faqItems[0].id)

  const handleToggle = (id: number) => {
    setOpenItemId((current) => (current === id ? null : id))
  }

  return (
    <section className="px-4 py-24 bg-background lg:px-[75px]">
      <div className="mx-auto grid w-full max-w-323 grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="space-y-6">
          <span className="inline-flex rounded-full bg-foreground/5 border border-foreground/10 px-4 py-1.5 text-[14px] font-medium leading-6 tracking-wide text-foreground uppercase">
            Support
          </span>
          <h2
            className="text-[40px] font-bold leading-tight tracking-tight text-foreground lg:text-[56px]"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-[18px] text-muted max-w-md">
            Everything you need to know about our vetting process, hiring timelines, and platform security.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item) => {
            const isOpen = openItemId === item.id

            return (
              <article
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen 
                    ? "bg-foreground/[0.02] border-foreground/10 shadow-sm" 
                    : "bg-transparent border-transparent hover:bg-foreground/[0.01]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => handleToggle(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left focus:outline-none"
                >
                  <span className={`text-[18px] font-semibold leading-tight tracking-tight transition-colors lg:text-[22px] ${isOpen ? "text-foreground" : "text-foreground/80"}`}>
                    {item.question}
                  </span>

                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? "bg-foreground text-background border-foreground" : "bg-transparent text-foreground/40 border-foreground/10"}`}>
                    <Plus size={20} className={`transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`} />
                  </div>
                </button>

                <div
                  className={`grid overflow-hidden transition-[grid-template-rows,opacity,transform,margin-top] duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 translate-y-0"
                      : "grid-rows-[0fr] opacity-0 -translate-y-2"
                  }`}
                >
                  <div className="min-h-0">
                    <p
                        id={`faq-panel-${item.id}`}
                        aria-hidden={!isOpen}
                        className="px-6 pb-8 text-[16px] leading-relaxed text-muted lg:text-[18px]"
                    >
                        {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
