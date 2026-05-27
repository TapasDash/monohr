'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import jobs from '@/data/jobs.json';

import { JobCard } from '../common/JobCard';
const SCROLL_STEP = 332;

export function JobListingsGrid() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateScrollState = () => {
    const container = scrollRef.current;
    if (!container) return;

    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const threshold = 4;

    setCanScrollPrev(container.scrollLeft > threshold);
    setCanScrollNext(container.scrollLeft < maxScrollLeft - threshold);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    updateScrollState();

    const handleResize = () => updateScrollState();

    container.addEventListener('scroll', updateScrollState);
    window.addEventListener('resize', handleResize);

    return () => {
      container.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePrevious = () => {
    const container = scrollRef.current;
    if (!container || !canScrollPrev) return;
    container.scrollBy({ left: -SCROLL_STEP, behavior: 'smooth' });
  };

  const handleNext = () => {
    const container = scrollRef.current;
    if (!container || !canScrollNext) return;
    container.scrollBy({ left: SCROLL_STEP, behavior: 'smooth' });
  };

  const handleWheelScroll: React.WheelEventHandler<HTMLDivElement> = event => {
    const container = scrollRef.current;
    if (!container) return;

    if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;

    event.preventDefault();
    container.scrollBy({ left: event.deltaX, behavior: 'auto' });
  };

  return (
    <section
      className="px-4 pb-18 lg:px-11.75"
      aria-labelledby="open-roles-heading"
    >
      <div className="mx-auto w-full max-w-323 space-y-5">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-[24px] leading-7">Open Roles</h2>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous jobs"
              onClick={handlePrevious}
              disabled={!canScrollPrev}
              className={`inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#1F2937] ${!canScrollPrev ? 'cursor-not-allowed opacity-45' : 'hover:bg-[#F4F5F7]'}`}
            >
              <ChevronLeft size={14} />
            </button>
            <button
              type="button"
              aria-label="Next jobs"
              onClick={handleNext}
              disabled={!canScrollNext}
              className={`inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#1F2937] ${!canScrollNext ? 'cursor-not-allowed opacity-45' : 'hover:bg-[#F4F5F7]'}`}
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          onWheel={handleWheelScroll}
          className="scrollbar-none overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden"
        >
          <div className="grid w-max grid-flow-col grid-rows-2 gap-4">
            {jobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
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
  );
}
