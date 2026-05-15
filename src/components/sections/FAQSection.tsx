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
    <section className="px-4 pb-18 lg:px-[75px] lg:pb-24">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-[0.92fr_1.28fr] lg:gap-14">
        <div>
          <h2
            className="text-[36px] font-[450] leading-[130%] tracking-[-0.05%] text-foreground lg:max-w-[395px] lg:text-[48px]"
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          {faqItems.map((item) => {
            const isOpen = openItemId === item.id

            return (
              <article
                key={item.id}
                className="rounded-2xl bg-[#FFFFFF] px-4 py-4 lg:py-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => handleToggle(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
                    className="text-left text-[18px] leading-[110%] tracking-[-0.05%] text-[#00235C] lg:text-[24px]"
                  >
                    {item.question}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleToggle(item.id)}
                    aria-label={isOpen ? "Collapse answer" : "Expand answer"}
                    className=" "
                  >
                    <Plus size={20} className={`transition-all duration-300 text-[#1C1C1E] ${isOpen ? "rotate-45" : "rotate-0"}`}/>
                  </button>
                </div>

                <div
                  className={`grid overflow-hidden transition-[grid-template-rows,opacity,transform,margin-top] duration-400 ease-out ${
                    isOpen
                      ? "mt-3 grid-rows-[1fr] opacity-100 translate-y-0"
                      : "mt-0 grid-rows-[0fr] opacity-0 -translate-y-1"
                  }`}
                >
                  <p
                    id={`faq-panel-${item.id}`}
                    aria-hidden={!isOpen}
                    className="min-h-0 text-[16px] leading-[135%] tracking-[-0.05%] text-[#000000]/75 lg:text-[20px]"
                  >
                    {item.answer}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
