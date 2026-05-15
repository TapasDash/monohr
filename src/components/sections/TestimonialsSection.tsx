"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

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
  const visibleProfiles = [
    {
      index: getWrappedIndex(activeIndex - 1),
      positionClass:
        "mt-[10px] h-14 w-14 scale-95 hover:opacity-100 hover:scale-100 right-5",
    },
    {
      index: activeIndex,
      positionClass: "h-18 w-18 scale-110 shadow-[0_8px_24px_rgba(15,23,42,0.2)]",
    },
    {
      index: getWrappedIndex(activeIndex + 1),
      positionClass:
        "mt-[10px] h-14 w-14 scale-95 hover:opacity-100 hover:scale-100 left-5",
    },
  ]

  return (
    <section className="px-4 py-18 lg:px-11.75 lg:py-24" aria-labelledby="testimonials-heading">
      <div className="mx-auto flex w-full max-w-260 flex-col items-center text-center">

        <span className="inline-flex rounded-full border border-[#EAEAE2] bg-white px-3.5 py-1.5 text-[16px] leading-6 tracking-[-0.56px] align-middle text-foreground">
          Trusted by Industry Leaders
        </span>

        <div className="mt-16 relative flex items-start justify-center">
          {visibleProfiles.map((profile) => {
            const testimonial = testimonials[profile.index]
            const isActive = profile.index === activeIndex

            return (
              <button
                key={testimonial.id}
                type="button"
                onClick={() => setActiveIndex(profile.index)}
                aria-label={`Show testimonial from ${testimonial.person.name}`}
                aria-current={isActive}
                className={`absolute top-0 inline-flex items-center justify-center rounded-full border-2 border-white transition-all duration-300 ${profile.positionClass} ${isActive ? "z-10" : "z-0"}`}
              >
                <Image
                  src={testimonial.person.avatar}
                  alt={testimonial.person.name}
                  fill
                  className={`rounded-full object-cover object-top ${isActive ? "w-[75px] h-[75px]" : "w-[60px] h-[60px]"}`}
                />
              </button>
            )
          })}
        </div>

        <blockquote className="mt-28 max-w-[1120px] text-[36px] leading-[130%] tracking-[-0.05%] text-[#191919] lg:text-[48px] text-center">
          &quot;{activeTestimonial.quote}&quot;
        </blockquote>

        <div className="mt-10">
          <Image
            src={activeTestimonial.companyLogo}
            alt={activeTestimonial.companyAlt}
            width={160}
            height={40}
            className="h-10 w-auto object-contain"
          />
        </div>

        <div className="mt-8 flex items-center gap-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`h-2 rounded-full transition-all ${index === activeIndex ? "w-8 bg-[#1E293B]" : "w-2 bg-[#CBD5E1] hover:bg-[#94A3B8]"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
