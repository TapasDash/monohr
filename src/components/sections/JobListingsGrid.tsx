"use client"

import { useEffect, useRef, useState } from "react"
import jobs from "@/data/jobs.json"
import { JobCard } from "../common/JobCard"
import { ChevronLeft, ChevronRight } from "lucide-react"

const SCROLL_STEP = 332

export function JobListingsGrid() {
    const scrollRef = useRef<HTMLDivElement | null>(null)
    const [canScrollPrev, setCanScrollPrev] = useState(false)
    const [canScrollNext, setCanScrollNext] = useState(true)

    const updateScrollState = () => {
        const container = scrollRef.current
        if (!container) return

        const maxScrollLeft = container.scrollWidth - container.clientWidth
        const threshold = 4

        setCanScrollPrev(container.scrollLeft > threshold)
        setCanScrollNext(container.scrollLeft < maxScrollLeft - threshold)
    }

    useEffect(() => {
        const container = scrollRef.current
        if (!container) return

        updateScrollState()

        const handleResize = () => updateScrollState()

        container.addEventListener("scroll", updateScrollState)
        window.addEventListener("resize", handleResize)

        return () => {
            container.removeEventListener("scroll", updateScrollState)
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    const handlePrevious = () => {
        const container = scrollRef.current
        if (!container || !canScrollPrev) return
        container.scrollBy({ left: -SCROLL_STEP, behavior: "smooth" })
    }

    const handleNext = () => {
        const container = scrollRef.current
        if (!container || !canScrollNext) return
        container.scrollBy({ left: SCROLL_STEP, behavior: "smooth" })
    }

    const handleWheelScroll: React.WheelEventHandler<HTMLDivElement> = (event) => {
        const container = scrollRef.current
        if (!container) return

        if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return

        event.preventDefault()
        container.scrollBy({ left: event.deltaX, behavior: "auto" })
    }

    return (
        <section className="px-4 pb-18 lg:px-11.75 lg:pb-24" aria-labelledby="open-roles-heading">
            <div className="mx-auto w-full max-w-323 space-y-6">
                <div className="flex items-center justify-between gap-3">
                    <h2 className="text-[28px] font-bold leading-tight tracking-tight text-foreground lg:text-[36px]">
                        Open Roles
                    </h2>

                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            aria-label="Previous jobs"
                            onClick={handlePrevious}
                            disabled={!canScrollPrev}
                            className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-foreground transition-all ${!canScrollPrev ? "opacity-30 cursor-not-allowed" : "hover:bg-foreground hover:text-background hover:border-foreground active:scale-90"}`}
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            type="button"
                            aria-label="Next jobs"
                            onClick={handleNext}
                            disabled={!canScrollNext}
                            className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-foreground transition-all ${!canScrollNext ? "opacity-30 cursor-not-allowed" : "hover:bg-foreground hover:text-background hover:border-foreground active:scale-90"}`}
                        >
                            <ChevronRight size={18}/>
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    onWheel={handleWheelScroll}
                    className="overflow-x-auto pb-4 scrollbar-none [&::-webkit-scrollbar]:hidden"
                >
                    <div className="grid w-max grid-flow-col grid-rows-2 gap-6 px-1">
                    {jobs.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))}
                    </div>
                </div>

                <div className="mt-12 flex justify-center">
                    <button
                        type="button"
                        className="inline-flex items-center rounded-full bg-foreground px-8 py-3 text-[16px] font-semibold leading-none text-background transition-all hover:scale-105 active:scale-95"
                    >
                        View all listings
                    </button>
                </div>
            </div>
        </section>
    )
}
