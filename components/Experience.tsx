export default function Experience() {
  const experiences = [
    {
      title: 'Senior Application Developer & Tech Lead',
      company: 'IBM Payments Center',
      period: 'October 2022 - Present',
      location: 'Toronto, Canada',
      highlights: [
        'Spearheaded the development of a new UI platform from scratch for the IBM Payments Center, supporting the Payments Canada RTR C&S and Open Payments Marketplace (OPM) initiatives',
        'Made critical decisions regarding architecture, frameworks (React.js, Vite), and technologies to ensure scalability and high performance',
        'Acted as Tech Lead, providing guidance to developers and resolving technical blockers',
        'Established and enforced UI standards across multiple platforms to ensure consistency and usability',
        'Led the full feature lifecycle from conception to deployment',
      ],
      tech: ['React', 'Vite', 'TypeScript', 'Redux', 'Vitest'],
    },
    {
      title: 'Software Engineer',
      company: 'EPAM',
      period: 'October 2021 - July 2022',
      location: 'Remote',
      highlights: [
        'Maintained and developed new requirements for a US-based client\'s Next.js platform',
        'Engineered Python scripts to automate manual workflows, reducing human error',
        'Authored detailed runbooks and technical documentation',
        'Provided end-to-end production support, identifying root causes and resolving complex system bugs',
      ],
      tech: ['Next.js', 'Python'],
    },
    {
      title: 'Senior Web UI Developer',
      company: 'GLOBANT',
      period: 'October 2019 - October 2021',
      location: 'Colombia',
      highlights: [
        'Collaborated with cross-functional international teams to develop high-quality products for major clients in Financial and Education sectors',
        'Engineered complex frontend solutions using React (Hooks, Redux) and Angular (RxJS, NgRx)',
        'Designed and led technical Bootcamps on Angular fundamentals, mentoring junior developers',
        'Acted as a key technical interviewer for Web UI roles',
        'Voluntarily served as a public speaker to inspire young women to pursue careers in technology',
      ],
      tech: ['React', 'Angular', 'TypeScript', 'Redux', 'RxJS', 'NgRx'],
    },
    {
      title: 'Software Developer',
      company: 'CONDORLABS',
      period: 'February 2019 - October 2019',
      location: 'Colombia',
      highlights: [
        'Contributed to the development of a modular Learning Management System (LMS)',
        'Engineered new features for student and teacher interfaces using React.js and Node.js',
        'Developed reusable components and modules consumed by various internal platforms',
      ],
      tech: ['React', 'Node.js'],
    },
    {
      title: 'Frontend Developer',
      company: 'UBIDOTS',
      period: 'January 2016 - December 2018',
      location: 'Colombia',
      highlights: [
        'Developed core features for an Internet of Things (IoT) platform, including real-time dashboard visualizations and notification systems',
        'Led the transition of the core platform from AngularJS to React.js, significantly improving frontend performance',
        'Orchestrated the migration of the company website from Swig to Vue.js',
        'Provided direct technical support to platform users',
      ],
      tech: ['React', 'Vue.js', 'AngularJS'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Professional Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {exp.title}
                    </h3>
                    <div className="text-lg text-blue-600 font-semibold">
                      {exp.company}
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0 text-gray-600 md:text-right">
                    <div className="font-medium">{exp.period}</div>
                    <div className="text-sm">{exp.location}</div>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1.5">•</span>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {index < experiences.length - 1 && (
                <div className="absolute left-1/2 -bottom-6 w-0.5 h-6 bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
