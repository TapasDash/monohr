'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

import { cn } from '@/lib/utils';

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({
  page,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const isPrevDisabled = page === 0;
  const isNextDisabled = page === totalPages - 1;
  const pages = Array.from({ length: totalPages }, (_, index) => index);

  return (
    <div
      className={cn(
        'flex items-center justify-center gap-2 text-[14px] text-[#6B7280]',
        className
      )}
    >
      <button
        type="button"
        onClick={() => onPageChange(page - 1)}
        disabled={isPrevDisabled}
        className={cn(
          'inline-flex items-center gap-1 rounded px-2 py-1 transition-colors',
          isPrevDisabled
            ? 'cursor-not-allowed opacity-45'
            : 'hover:text-[#111827]'
        )}
      >
        <ChevronLeft size={14} />
        Previous
      </button>

      {pages.map(pageIndex => {
        const isActive = pageIndex === page;

        return (
          <button
            key={pageIndex}
            type="button"
            onClick={() => onPageChange(pageIndex)}
            className={cn(
              'inline-flex h-8 min-w-8 items-center justify-center rounded px-2 transition-colors',
              isActive
                ? 'bg-white text-[#111827] shadow-[0_1px_1px_rgba(17,24,39,0.1)]'
                : 'text-[#111827] hover:bg-white/70'
            )}
            aria-current={isActive ? 'page' : undefined}
          >
            {pageIndex + 1}
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => onPageChange(page + 1)}
        disabled={isNextDisabled}
        className={cn(
          'inline-flex items-center gap-1 rounded px-2 py-1 text-[#111827] transition-colors',
          isNextDisabled
            ? 'cursor-not-allowed opacity-45'
            : 'hover:text-[#1D4ED8]'
        )}
      >
        Next
        <ChevronRight size={14} />
      </button>
    </div>
  );
}
