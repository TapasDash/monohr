"use client"

import { useMemo, useState } from "react"
import jobs from "@/data/jobs.json"
import { JobCard } from "../common/JobCard"
import { ChevronLeft, ChevronRight } from "lucide-react"

const JOBS_PER_PAGE = 8

export function JobListingsGrid() {
    const [page, setPage] = useState(0)
    const totalPages = Math.ceil(jobs.length / JOBS_PER_PAGE)

    const homepageJobs = useMemo(() => {
        const start = page * JOBS_PER_PAGE
        return jobs.slice(start, start + JOBS_PER_PAGE)
    }, [page])

    const isPrevDisabled = page === 0
    const isNextDisabled = page === totalPages - 1

    const handlePrevious = () => {
        if (isPrevDisabled) return
        setPage((currentPage) => currentPage - 1)
    }

    const handleNext = () => {
        if (isNextDisabled) return
        setPage((currentPage) => currentPage + 1)
    }

    return (
        <section className="px-4 py-20 lg:px-11.75 lg:py-24" aria-labelledby="open-roles-heading">
            <div className="mx-auto w-full max-w-323 space-y-8">
                <div className="flex items-center justify-between gap-3">
                    <h2 className="text-[28px] font-bold leading-tight tracking-tight text-foreground lg:text-[36px]">
                        Open Roles
                    </h2>

                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            aria-label="Previous jobs"
                            onClick={handlePrevious}
                            disabled={isPrevDisabled}
                            className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-foreground transition-all ${isPrevDisabled ? "opacity-30 cursor-not-allowed" : "hover:bg-foreground hover:text-background hover:border-foreground"}`}
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            type="button"
                            aria-label="Next jobs"
                            onClick={handleNext}
                            disabled={isNextDisabled}
                            className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-foreground transition-all ${isNextDisabled ? "opacity-30 cursor-not-allowed" : "hover:bg-foreground hover:text-background hover:border-foreground"}`}
                        >
                            <ChevronRight size={18}/>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {homepageJobs.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))}
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
