'use client';

import React from "react";
import { FiArrowRight } from 'react-icons/fi';
import headerStyles from '@/app/Model/FeaturedJobsHeader.module.css';
import { useRouter } from 'next/navigation';

const jobs = [
  {
    title: "Email Marketing",
    company: "Revolut",
    location: "Madrid, Spain",
    description: "Revolut is looking for Email Marketing to help team ma ...",
    tags: ["Marketing", "Design"],
  },
  {
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Francisco, US",
    description: "Dropbox is looking for Brand Designer to help the team t ...",
    tags: ["Design", "Business"],
  },
  {
    title: "Email Marketing",
    company: "Pitch",
    location: "Berlin, Germany",
    description: "Pitch is looking for Customer Manager to join marketing t ...",
    tags: ["Marketing"],
  },
  {
    title: "Visual Designer",
    company: "Blinkist",
    location: "Granada, Spain",
    description: "Blinkist is looking for Visual Designer to help team desi ...",
    tags: ["Design"],
  },
  {
    title: "Product Designer",
    company: "ClassPass",
    location: "Manchester, UK",
    description: "ClassPass is looking for Product Designer...",
    tags: ["Marketing", "Design"],
  },
  {
    title: "Lead Designer",
    company: "Canva",
    location: "Ontario, Canada",
    description: "Canva is looking for Lead Engineer to help develop n ...",
    tags: ["Design", "Business"],
  },
  {
    title: "Brand Strategist",
    company: "GoDaddy",
    location: "Marseille, France",
    description: "GoDaddy is looking for Brand Strategist to join the team...",
    tags: ["Marketing"],
  },
  {
    title: "Data Analyst",
    company: "Twitter",
    location: "San Diego, US",
    description: "Twitter is looking for Data Analyst to help team desi ...",
    tags: ["Technology"],
  },
];

const Tag = ({ text }) => {
  const colors = {
    Marketing: "bg-orange-100 text-orange-600",
    Design: "bg-green-100 text-green-600",
    Business: "bg-blue-100 text-blue-600",
    Technology: "bg-red-100 text-red-600",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${colors[text]}`}
    >
      {text}
    </span>
  );
};

const EmailMarketingIcon = () => (
  <img 
    src="/Assets/Home/Emailmarketing.svg" 
    alt="Email Marketing" 
    className="w-10 h-10"
  />
);

const BrandDesignerIcon = () => (
  <img 
    src="/Assets/Home/Branddesigner.svg" 
    alt="Brand Designer" 
    className="w-10 h-10"
  />
);

const VisualDesignerIcon = () => (
  <img 
    src="/Assets/Home/Blikist.png" 
    alt="Visual Designer" 
    className="w-10 h-10"
  />
);

const ProductDesignerIcon = () => (
  <img 
    src="/Assets/Home/Productdesigner.svg" 
    alt="Product Designer" 
    className="w-10 h-10"
  />
);

const LeadDesignerIcon = () => (
  <img 
    src="/Assets/Home/Leaddesigner.svg" 
    alt="Lead Designer" 
    className="w-10 h-10"
  />
);

const BrandStrategistIcon = () => (
  <img 
    src="/Assets/Home/Godaddy.svg" 
    alt="Brand Strategist" 
    className="w-10 h-10"
  />
);

const DataAnalystIcon = () => (
  <img 
    src="/Assets/Home/Twitter.svg" 
    alt="Data Analyst" 
    className="w-10 h-10"
  />
);

const PitchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="40" height="40">
    <circle cx="50" cy="50" r="48" fill="#111111"/>
    <text
      x="50"
      y="57"
      textAnchor="middle"
      fontFamily="Georgia, serif"
      fontSize="24"
      fontWeight="400"
      fill="#ffffff"
      letterSpacing="0.5"
    >Pitch</text>
  </svg>
);

const DefaultIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 text-blue-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4v16m8-8H4"
    />
  </svg>
);

const Icon = ({ job }) => {
  if (job.title.toLowerCase().includes('email Marketing'.toLowerCase()) && job.company.toLowerCase().includes('pitch'.toLowerCase())) {
    return <PitchIcon />;
  }
  if (job.title.toLowerCase().includes('email Marketing'.toLowerCase())) {
    return <EmailMarketingIcon />;
  }
  if (job.title.toLowerCase().includes('brand Designer'.toLowerCase())) {
    return <BrandDesignerIcon />;
  }
  if (job.title.toLowerCase().includes('visual Designer'.toLowerCase())) {
    return <VisualDesignerIcon />;
  }
  if (job.title.toLowerCase().includes('product Designer'.toLowerCase())) {
    return <ProductDesignerIcon />;
  }
  if (job.title.toLowerCase().includes('lead Designer'.toLowerCase())) {
    return <LeadDesignerIcon />;
  }
  if (job.title.toLowerCase().includes('brand strategist'.toLowerCase())) {
    return <BrandStrategistIcon />;
  }
  if (job.title.toLowerCase().includes('data analyst'.toLowerCase())) {
    return <DataAnalystIcon />;
  }
  return <DefaultIcon />;
};

const JobCard = ({ job, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="border rounded p-3  w-[280px] h-[220px]  bg-white shadow-sm hover:shadow-md transition cursor-pointer" 
      style={{ border: '1.11px solid #D6DDEB' }}
    >
      <div className="flex justify-between items-center mb-4">
        <Icon job={job} />
        <span className="border border-blue-500 text-blue-500 text-xs px-2 py-1">
          Full Time
        </span>
      </div>

      <h3 className="font-semibold text-base mb-2">{job.title}</h3>
      <p className="text-sm text-gray-500 mb-2">
        {job.company} • {job.location}
      </p>

      <p className="text-sm text-gray-400 mb-2">{job.description}</p>

      <div className="flex gap-2 flex-wrap">
        {job.tags.map((tag, i) => (
          <Tag key={i} text={tag} />
        ))}
      </div>
    </div>
  );
};

export default function FeaturedJobs() {
  const router = useRouter();

  return (
    <section className="max-w-6xl mx-auto py-10 mt-1">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-3xl font-bold">Featured jobs</h2>
        <button 
          onClick={() => router.push('/jobs')}
          className="flex items-center gap-3 text-[#1D4ED8] text-lg font-semibold hover:gap-4 transition-all ml-6 cursor-pointer border-none bg-transparent"
        >
          Show all jobs
          <FiArrowRight className="w-10 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2  sm:grid-cols-4 gap-x-10 gap-y-5 ">
        {jobs.map((job, index) => (
          <JobCard 
            key={index} 
            job={job} 
            onClick={() => router.push(`/jobs?title=${encodeURIComponent(job.title)}`)}
          />
        ))}
      </div>
    </section>
  );
}
