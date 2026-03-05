import Header from '../dashboard/components/Header';
import CandidateSettings from '../settings';

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <CandidateSettings />
    </div>
  );
}
