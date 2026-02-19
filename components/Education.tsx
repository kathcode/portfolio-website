export default function Education() {
  const education = [
    {
      degree: 'Informatics Engineering',
      institution: 'CATÓLICA DEL NORTE FUNDACIÓN UNIVERSITARIA',
      period: '2017 - 2025',
      description: 'Comprehensive engineering program focused on software development, systems design, and technology innovation.',
    },
    {
      degree: 'Software Developer',
      institution: 'CESDE',
      period: 'January 2011 - December 2014',
      description: 'Technical program providing foundational skills in software development and programming.',
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Education
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {edu.degree}
                  </h3>
                  <div className="text-lg text-blue-600 font-semibold mb-3">
                    {edu.institution}
                  </div>
                  <p className="text-gray-700">{edu.description}</p>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <span className="inline-block px-4 py-2 bg-white text-gray-700 rounded-lg font-medium shadow-sm">
                    {edu.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
