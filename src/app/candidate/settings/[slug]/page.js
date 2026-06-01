'use client';

import Header from '@/app/candidate/dashboard/Model/Header';
import CandidateSettings from '@/app/candidate/settings/Model/CandidateSettings';

export default function CandidateSettingsSlugPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <CandidateSettings />
    </div>
  );
}
