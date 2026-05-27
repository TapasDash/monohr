'use client';

import { cn } from '@/lib/utils';

interface PillTabOption {
  label: string;
  value: string;
}

interface PillTabProps {
  options: PillTabOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function PillTab({ options, value, onChange, className }: PillTabProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-1 rounded-md border border-[#D1D5DB] bg-[#FFFFFF] px-1 py-[3px]',
        className
      )}
    >
      {options.map(option => {
        const isActive = option.value === value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={cn(
              'rounded px-3 py-1 text-xs leading-4.5 font-medium text-nowrap transition-colors',
              isActive
                ? 'bg-[#3649C7] text-white'
                : 'hover:text-foreground text-[#6B7280]'
            )}
            aria-pressed={isActive}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
