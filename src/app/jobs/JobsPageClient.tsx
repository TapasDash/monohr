'use client';

import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';

import { JobCard } from '@/components/common/JobCard';
import { Pagination } from '@/components/ui/Pagination';
import { PillTab } from '@/components/ui/PillTab';
import jobs from '@/data/jobs.json';

const JOBS_PER_PAGE = 12;
const FILTER_OPTIONS = [
  { label: 'Full Time', value: 'full-time' },
  { label: 'Hybrid', value: 'hybrid' },
  { label: 'Remote', value: 'remote' },
];

export const JobsPageClient = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<string>('full-time');
  const [page, setPage] = useState(0);

  const filteredJobs = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return jobs.filter(job => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        job.title.toLowerCase().includes(normalizedQuery);

      if (!matchesQuery) return false;

      if (filter === 'full-time') {
        return job.employmentType.toLowerCase() === 'full-time';
      }

      if (filter === 'hybrid') {
        return job.workMode.toLowerCase() === 'hybrid';
      }

      return job.workMode.toLowerCase() === 'remote';
    });
  }, [filter, searchQuery]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredJobs.length / JOBS_PER_PAGE)
  );
  const safePage = Math.min(page, totalPages - 1);

  const paginatedJobs = useMemo(() => {
    const start = safePage * JOBS_PER_PAGE;
    return filteredJobs.slice(start, start + JOBS_PER_PAGE);
  }, [filteredJobs, safePage]);

  const handleFilterChange = (nextFilter: string) => {
    setFilter(nextFilter);
    setPage(0);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setPage(0);
  };

  const handlePageChange = (nextPage: number) => {
    if (nextPage < 0 || nextPage > totalPages - 1) return;
    setPage(nextPage);
  };

  return (
    <section className="relative px-4 pb-16 lg:px-11.75 lg:pb-18.5">
      <div className="mx-auto w-full max-w-323 space-y-5">
        <h2 className="text-foreground text-[24px] leading-[110%] font-[450] tracking-[0.05%]">
          Explore opportunities
        </h2>

        <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
          <div className="flex h-8 w-full max-w-[500px] grow items-center gap-2 rounded-md border border-[#E2E8F0] bg-[#FFFFFF] px-3 py-2">
            <Search className="h-4 w-4 text-[#6B7280]" />
            <input
              type="text"
              value={searchQuery}
              onChange={event => handleSearchChange(event.target.value)}
              className="text-content-loud m-0 h-fit w-full border-none bg-transparent p-0 text-sm placeholder:align-middle placeholder:leading-[100%] placeholder:text-[#6B7280] focus:outline-none"
              placeholder="Search job"
            />
          </div>

          <PillTab
            options={FILTER_OPTIONS}
            value={filter}
            onChange={handleFilterChange}
          />
        </div>

        <div className="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {paginatedJobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        <Pagination
          page={safePage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          className="pt-4"
        />
      </div>
    </section>
  );
};
