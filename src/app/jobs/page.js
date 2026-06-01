'use client';

import { useState } from 'react';
import JobFilters from '@/app/jobs/Model/JobFilters';
import RecentJobs from '@/app/jobs/Model/RecentJobs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedJobType, setSelectedJobType] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSalary, setSelectedSalary] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const handleApplyFilters = () => {
    // This will trigger re-render in RecentJobs with the updated filter values
  };


  return (
    <><Header /><div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex gap-8">
          <JobFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedJobType={selectedJobType}
            setSelectedJobType={setSelectedJobType}
            selectedExperience={selectedExperience}
            setSelectedExperience={setSelectedExperience}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            selectedSalary={selectedSalary}
            setSelectedSalary={setSelectedSalary}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            onApplyFilters={handleApplyFilters}
          />

          <main className="flex-1">
            <RecentJobs
              isJobsPage={true}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedJobType={selectedJobType}
              setSelectedJobType={setSelectedJobType}
              selectedExperience={selectedExperience}
              setSelectedExperience={setSelectedExperience}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              selectedSalary={selectedSalary}
              setSelectedSalary={setSelectedSalary}
              selectedTags={selectedTags}
              setSelectedTags={setSelectedTags}
            />

          </main>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}