'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import JobDetails from '@/app/components/Jobs/JobDetails';

function JobPageContent() {
  const searchParams = useSearchParams();
  const jobId = searchParams.get('id');
  
  return <JobDetails jobId={jobId} />;
}

export default function JobPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <JobPageContent />
    </Suspense>
  );
}
