export default function Projects() {
  const projects = [
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

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Featured Projects
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                  {project.impact}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
