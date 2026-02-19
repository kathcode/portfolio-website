export default function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Python'],
    },
    {
      category: 'Frameworks & Libraries',
      skills: ['React', 'Vite', 'Next.js', 'Vue', 'Angular', 'Redux', 'RxJS', 'NgRx'],
    },
    {
      category: 'Testing & Tooling',
      skills: ['Jest', 'React Testing Library', 'Vitest', 'Vite'],
    },
    {
      category: 'Back-end',
      skills: ['Node.js', 'ExpressJS'],
    },
    {
      category: 'Soft Skills',
      skills: [
        'Technical Decision Making',
        'Problem Solving',
        'Stakeholder Communication',
        'Team Leadership',
        'Mentorship',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Skills & Expertise
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-white text-gray-700 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                  >
                    {skill}
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
