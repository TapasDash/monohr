import type { Job } from "@/types/job"
import { CircleDollarSign, Layers, MapPin, MoveRight } from "lucide-react"

interface JobCardProps {
    job: Job
    highlighted?: boolean
}

export function JobCard({ job, highlighted = false }: JobCardProps) {
    return (
        <div
            className="group relative flex flex-col justify-between rounded-xl border border-border bg-background p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-foreground/20"
        >
            <div>
                <h3 className="text-[16px] font-semibold leading-tight tracking-tight text-foreground lg:text-[18px]">
                    {job.title}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2 text-[12px] font-medium text-muted">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-muted/10 px-2.5 py-1">
                        <Layers size={14} className="opacity-70" />
                        {job.employmentType}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-muted/10 px-2.5 py-1">
                        <MapPin size={14} className="opacity-70" />
                        {job.workMode}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-muted/10 px-2.5 py-1">
                        <CircleDollarSign size={14} className="opacity-70" />
                        {job.salaryRange}
                    </span>
                </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
                <button
                    type="button"
                    className="inline-flex items-center gap-2 text-[14px] font-medium text-muted transition-colors group-hover:text-foreground"
                >
                    <span>Apply Now</span>
                    <MoveRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
            </div>
        </div>
    )
}
