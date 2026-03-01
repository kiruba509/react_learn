function Home() {
  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Build Modern Web Applications
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          We create scalable, high-performance websites and applications
          using the latest technologies like React and Tailwind CSS.
        </p>
        <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Get Started
        </button>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
            <p className="text-gray-600">
              Responsive and interactive UI using React, Tailwind, and modern frameworks.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Backend Solutions</h3>
            <p className="text-gray-600">
              Secure and scalable backend systems using Node.js and APIs.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
            <p className="text-gray-600">
              Clean and modern user experiences focused on usability and performance.
            </p>
          </div>

        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-indigo-600 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="mb-8">
          Let’s build something amazing together.
        </p>
        <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Contact Us
        </button>
      </section>

    </main>
  );
}

export default Home;