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
        <section className="px-4 pb-18 lg:px-11.75" aria-labelledby="open-roles-heading">
            <div className="mx-auto w-full max-w-323 space-y-5">
                <div className="flex items-center justify-between gap-3">
                    <h2 className="text-[24px] leading-7 ">
                        Open Roles
                    </h2>

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            aria-label="Previous jobs"
                            onClick={handlePrevious}
                            disabled={isPrevDisabled}
                            className={`inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#1F2937] ${isPrevDisabled ? "cursor-not-allowed opacity-45" : "hover:bg-[#F4F5F7]"}`}
                        >
                            <ChevronLeft size={14} />
                        </button>
                        <button
                            type="button"
                            aria-label="Next jobs"
                            onClick={handleNext}
                            disabled={isNextDisabled}
                            className={`inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#1F2937] ${isNextDisabled ? "cursor-not-allowed opacity-45" : "hover:bg-[#F4F5F7]"}`}
                        >
                            <ChevronRight size={14}/>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                    {homepageJobs.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>

                <div className="mt-10 flex justify-center">
                    <button
                        type="button"
                        className="inline-flex items-center rounded-full bg-[#1E293B] px-3.5 py-1.5 text-[16px] leading-6 tracking-[-0.56px] text-white hover:bg-[#162033]"
                    >
                        View all
                    </button>
                </div>
            </div>
        </section>
    )
}
