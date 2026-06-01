'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import JobDetails from '@/app/jobs/Model/JobDetails';

function JobPageContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  
  // Support both slug-based routing /jobs/1 and query-param fallback /jobs/job-details?id=1
  const jobId = params.slug && params.slug !== 'job-details' ? params.slug : searchParams.get('id');

  return <JobDetails jobId={jobId} />;
}

export default function JobPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <JobPageContent />
    </Suspense>
  );
}
