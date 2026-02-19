export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I am a Software Engineer with over nine years of experience building
              high-quality products in close collaboration with customers. I&apos;ve
              worked across diverse sectors, including{' '}
              <span className="font-semibold text-blue-600">EdTech</span>,{' '}
              <span className="font-semibold text-blue-600">FinTech</span>,{' '}
              <span className="font-semibold text-blue-600">HealthTech</span>, and{' '}
              <span className="font-semibold text-blue-600">monitoring systems</span>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I am passionate about bringing new ideas to life and building solutions
              that solve real-world problems and improve lives. Throughout my career,
              I&apos;ve had the opportunity to lead platform development, mentor teams,
              and drive technical innovation across multiple organizations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">9+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
              <div className="text-gray-600 font-medium">Companies</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-gray-600 font-medium">Industries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
