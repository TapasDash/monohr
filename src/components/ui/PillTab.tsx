"use client"

import { cn } from "@/lib/utils"

interface PillTabOption {
  label: string
  value: string
}

interface PillTabProps {
  options: PillTabOption[]
  value: string
  onChange: (value: string) => void
  className?: string
}

export function PillTab({ options, value, onChange, className }: PillTabProps) {
  return (
    <div className={cn("inline-flex items-center gap-1 rounded-md border border-[#D1D5DB] bg-[#FFFFFF] py-[3px] px-1", className)}>
      {options.map((option) => {
        const isActive = option.value === value

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={cn(
              "rounded px-3 py-1 text-xs font-medium leading-4.5 transition-colors text-nowrap",
              isActive ? "bg-[#3649C7] text-white" : "text-[#6B7280] hover:text-foreground",
            )}
            aria-pressed={isActive}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
