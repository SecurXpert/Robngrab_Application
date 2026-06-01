'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function InterviewManagementRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/candidate/interview-management/Alex-Rivera');
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-gray-500 font-medium">Redirecting to interview management...</div>
    </div>
  );
}
