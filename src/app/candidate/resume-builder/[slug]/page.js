'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/app/candidate/dashboard/components/Header';
import ResumeBuilder from './ResumeBuilder';

export default function ResumeBuilderSlugPage() {
  const params = useParams();
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      fullName: 'Alex Rivera',
      title: 'Frontend Engineer',
      email: 'alex.rivera@email.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      website: 'https://yourportfolio.com',
      linkedin: 'linkedin.com/in/alexrivera'
    },
    summary: 'Passionate frontend engineer with 5+ years of experience building scalable web applications. Expert in React, TypeScript, and modern CSS frameworks. Strong focus on user experience and performance optimization.',
    experience: [
      {
        id: 1,
        title: 'Senior Frontend Engineer',
        company: 'TechFlow Inc.',
        location: 'San Francisco, CA',
        startDate: 'Jan 2025',
        endDate: 'Present',
        current: true,
        description: 'Leading frontend development for enterprise applications using React and TypeScript. Mentoring junior developers and establishing best practices.'
      },
      {
        id: 2,
        title: 'Frontend Developer',
        company: 'Digital Solutions Ltd.',
        location: 'Remote',
        startDate: 'Jun 2022',
        endDate: 'Dec 2024',
        current: false,
        description: 'Developed responsive web applications and improved user experience across multiple projects. Reduced bundle size by 40% through optimization.'
      }
    ],
    education: [
      {
        id: 1,
        degree: 'Bachelor of Science in Computer Science',
        school: 'University of California, Berkeley',
        location: 'Berkeley, CA',
        startDate: '2018',
        endDate: '2022',
        current: false,
        gpa: '3.8'
      }
    ],
    skills: [
      {
        category: 'Technical Skills',
        items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Node.js', 'Git', 'Webpack']
      },
      {
        category: 'Tools & Technologies',
        items: ['VS Code', 'Figma', 'Jest', 'React Testing Library', 'Docker', 'AWS']
      },
      {
        category: 'Soft Skills',
        items: ['Team Leadership', 'Problem Solving', 'Communication', 'Project Management', 'Agile/Scrum']
      }
    ],
    projects: [
      {
        id: 1,
        title: 'E-commerce Platform',
        description: 'Full-stack e-commerce solution with real-time inventory management and payment processing.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
        link: 'https://github.com/alexrivera/ecommerce'
      },
      {
        id: 2,
        title: 'Task Management App',
        description: 'Collaborative task management tool with real-time updates and team collaboration features.',
        technologies: ['React', 'Firebase', 'Tailwind CSS'],
        link: 'https://github.com/alexrivera/taskmanager'
      }
    ]
  });

  const [activeSection, setActiveSection] = useState('personal');
  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const handleDataChange = (section, field, value) => {
    setResumeData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleArrayDataChange = (section, index, field, value) => {
    setResumeData(prev => ({
      ...prev,
      [section]: prev[section].map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const addNewItem = (section) => {
    const newItem = section === 'experience' 
      ? { id: Date.now(), title: '', company: '', location: '', startDate: '', endDate: '', current: false, description: '' }
      : section === 'education'
      ? { id: Date.now(), degree: '', school: '', location: '', startDate: '', endDate: '', current: false, gpa: '' }
      : { id: Date.now(), title: '', description: '', technologies: [], link: '' };

    setResumeData(prev => ({
      ...prev,
      [section]: [...prev[section], newItem]
    }));
  };

  const removeItem = (section, index) => {
    setResumeData(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index)
    }));
  };

  const sections = [
    { id: 'personal', label: 'Personal Info', icon: '👤' },
    { id: 'summary', label: 'Summary', icon: '📝' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'projects', label: 'Projects', icon: '🚀' }
  ];

  return (
    <>
      <Header />
      <ResumeBuilder
        resumeData={resumeData}
        activeSection={activeSection}
        selectedTemplate={selectedTemplate}
        isPreviewMode={isPreviewMode}
        sections={sections}
        onSetActiveSection={setActiveSection}
        onSetSelectedTemplate={setSelectedTemplate}
        onSetIsPreviewMode={setIsPreviewMode}
        OnHandleDataChange={handleDataChange}
        OnHandleArrayDataChange={handleArrayDataChange}
        OnAddNewItem={addNewItem}
        OnRemoveItem={removeItem}
      />
    </>
  );
}
