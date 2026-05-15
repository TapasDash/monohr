import type { Job } from "@/types/job"
import { CircleDollarSign, Layers, MapPin, MoveRight } from "lucide-react"

interface JobCardProps {
    job: Job
    highlighted?: boolean
}

const StackIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-3.5 w-3.5"
        aria-hidden="true"
    >
        <path d="M12 3 2.5 8 12 13 21.5 8 12 3Z" />
        <path d="m2.5 12 9.5 5 9.5-5" />
    </svg>
)

const PinIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-3.5 w-3.5"
        aria-hidden="true"
    >
        <path d="M12 13.25a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5Z" />
        <path d="M19.25 10.9c0 6.8-7.25 10.35-7.25 10.35S4.75 17.7 4.75 10.9a7.25 7.25 0 1 1 14.5 0Z" />
    </svg>
)

const DollarIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-3.5 w-3.5"
        aria-hidden="true"
    >
        <circle cx="12" cy="12" r="9" />
        <path d="M14.8 9.2c0-.95-1.25-1.7-2.8-1.7s-2.8.75-2.8 1.7S10.45 11 12 11s2.8.75 2.8 1.7S13.55 14.4 12 14.4s-2.8-.75-2.8-1.7" />
        <path d="M12 6.6v10.8" />
    </svg>
)

export function JobCard({ job, highlighted = false }: JobCardProps) {
    return (
        <div
            className="group w-79 h-34 rounded-md border border-[#E2E8F0] bg-[#FFFFFF] py-4 px-3 shadow-[0_1px_0_rgba(16,24,40,0.02)] transition-colors"
        >
            <h3 className="text-[14px] font-medium leading-5 tracking-normal text-foreground lg:text-[18px]">
                {job.title}
            </h3>

            <div className="mt-3 flex flex-wrap gap-2 text-[12px] leading-4 text-[#36394A]">
                <span className="inline-flex items-center gap-1 rounded bg-[#F6F7F9] px-1.5 py-1">
                    <Layers size={12} />
                    {job.employmentType}
                </span>
               <span className="inline-flex items-center gap-1 rounded bg-[#F6F7F9] px-1.5 py-1">
                    <MapPin size={12} />
                    {job.workMode}
                </span>
               <span className="inline-flex items-center gap-1 rounded bg-[#F6F7F9] px-1.5 py-1">
                    <CircleDollarSign size={12} />
                    {job.salaryRange}
                </span>
            </div>

            <button
                type="button"
                className="mt-8 inline-flex items-center justify-end gap-2 text-[14px] leading-4 text-[#36394A] group-hover:text-foreground"
            >
                <span>Apply</span>
                <MoveRight size={16}/>
            </button>
        </div>
    )
}
