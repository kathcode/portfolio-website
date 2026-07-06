'use client';

import { useState } from 'react';

type Project = {
  title: string;
  description: string;
  tech: string[];
  impact: string;
  url?: string;
};

const workProjects: Project[] = [
  {
    title: 'IBM IPC Wire Service',
    description:
      'Full-stack development and cloud infrastructure work on the IBM Payments Center Wire Service platform, including AWS environment management, CI/CD automation with Jenkins and OnePipeline, and React/Next.js feature development.',
    tech: ['React', 'Next.js', 'Python', 'AWS', 'Jenkins', 'CI/CD'],
    impact: 'Cloud & Full-Stack',
  },
  {
    title: 'IBM Payments Platform',
    description:
      'Spearheaded the development of a new UI platform from scratch for IBM Payments Center, supporting critical financial infrastructure for Payments Canada RTR C&S and Open Payments Marketplace initiatives.',
    tech: ['React', 'Vite', 'TypeScript', 'Redux'],
    impact: 'Platform Leadership & Architecture',
  },
  {
    title: 'IoT Dashboard & Monitoring',
    description:
      'Developed core features for an Internet of Things platform including real-time dashboard visualizations, notification systems, and geofencing-enabled mapping modules.',
    tech: ['React', 'Vue.js', 'AngularJS'],
    impact: 'Real-time Data Visualization',
  },
  {
    title: 'Learning Management System',
    description:
      'Contributed to the development of a modular LMS, building comprehensive administrative and end-user modules designed for integration across multiple educational projects.',
    tech: ['React', 'Node.js'],
    impact: 'Educational Technology',
  },
];

const personalProjects: Project[] = [
  {
    title: 'Andromeda Notes',
    description:
      'A personal note-taking web app built with Next.js, React 19, TypeScript, and Tailwind CSS. Designed for speed and simplicity, with a clean interface for organizing thoughts and todos.',
    tech: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS'],
    impact: 'Personal Project',
    url: 'https://www.andromedanotes.com',
  },
];

type Tab = 'work' | 'personal';

export default function Projects() {
  const [activeTab, setActiveTab] = useState<Tab>('work');

  const projects = activeTab === 'work' ? workProjects : personalProjects;

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Featured Projects
        </h2>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-xl shadow p-1 gap-1">
            <button
              onClick={() => setActiveTab('work')}
              className={`px-6 py-2 rounded-lg text-sm font-semibold transition-colors ${
                activeTab === 'work'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab('personal')}
              className={`px-6 py-2 rounded-lg text-sm font-semibold transition-colors ${
                activeTab === 'personal'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Personal Projects
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col"
            >
              <div className="mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                  {project.impact}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                >
                  Visit site
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
