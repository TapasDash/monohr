"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface Testimonial {
  id: number
  quote: string
  companyLogo: string
  companyAlt: string
  person: {
    name: string
    avatar: string
  }
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Mono HR helped us quickly connect with top talent, allowing us to fill critical skill gaps and keep our project on track.",
    companyLogo: "/assets/partner_logos/simplified.png",
    companyAlt: "Simplified",
    person: {
      name: "Arjun Malhotra",
      avatar: "/assets/images/person1.jpg",
    },
  },
  {
    id: 2,
    quote:
      "The hiring workflow was seamless. We reduced our hiring cycle time and onboarded highly skilled engineers in less than a week.",
    companyLogo: "/assets/partner_logos/otto.png",
    companyAlt: "Otto",
    person: {
      name: "Nina Verma",
      avatar: "/assets/images/person2.jpg",
    },
  },
  {
    id: 3,
    quote:
      "From sourcing to technical validation, Mono HR made the entire process transparent and reliable for our distributed teams.",
    companyLogo: "/assets/partner_logos/livspace.png",
    companyAlt: "Livspace",
    person: {
      name: "Kabir Rao",
      avatar: "/assets/images/person3.jpg",
    },
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const totalTestimonials = testimonials.length

  const getWrappedIndex = (index: number) => {
    return (index + totalTestimonials) % totalTestimonials
  }

  const activeTestimonial = testimonials[activeIndex]
  
  const profileIndices = [
    getWrappedIndex(activeIndex - 1),
    activeIndex,
    getWrappedIndex(activeIndex + 1),
  ]

  return (
    <section className="px-4 py-28 bg-background lg:px-11.75" aria-labelledby="testimonials-heading">
      <div className="mx-auto flex w-full max-w-323 flex-col items-center text-center">
        
        <span className="inline-flex rounded-full border border-border bg-background px-4 py-1.5 text-[14px] font-medium leading-6 tracking-wide text-foreground uppercase">
          Success Stories
        </span>

        <div className="mt-16 flex items-center justify-center gap-4">
          {profileIndices.map((idx, pos) => {
            const testimonial = testimonials[idx]
            const isActive = idx === activeIndex

            return (
              <motion.button
                key={`${testimonial.id}-${pos}`}
                layout
                onClick={() => setActiveIndex(idx)}
                className={`relative flex items-center justify-center rounded-full border-4 border-background shadow-xl overflow-hidden transition-opacity ${
                  isActive ? "z-10 w-24 h-24 ring-4 ring-foreground/5" : "w-16 h-16 opacity-40 hover:opacity-100"
                }`}
                initial={false}
                animate={{
                  scale: isActive ? 1.2 : 0.9,
                }}
              >
                <Image
                  src={testimonial.person.avatar}
                  alt={testimonial.person.name}
                  fill
                  className="object-cover object-top"
                />
              </motion.button>
            )
          })}
        </div>

        <div className="relative mt-12 min-h-[200px] flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <blockquote className="max-w-4xl text-[32px] font-medium italic leading-tight tracking-tight text-foreground lg:text-[44px]">
                &quot;{activeTestimonial.quote}&quot;
              </blockquote>
              
              <div className="mt-10 flex flex-col items-center gap-4">
                <Image
                  src={activeTestimonial.companyLogo}
                  alt={activeTestimonial.companyAlt}
                  width={140}
                  height={36}
                  className="h-9 w-auto object-contain opacity-80"
                />
                <span className="text-[16px] font-semibold text-foreground">
                  {activeTestimonial.person.name}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-12 bg-foreground" : "w-2 bg-muted/30 hover:bg-muted"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
