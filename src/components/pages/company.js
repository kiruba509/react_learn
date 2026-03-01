function Company() {
  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">About Our Company</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We build scalable and modern digital solutions for growing businesses.
        </p>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Who We Are</h2>
        <p className="text-gray-600 text-center text-lg leading-relaxed">
          We are a passionate team of developers and designers focused on 
          creating high-quality web applications using modern technologies 
          like React and Tailwind CSS.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          
          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              Deliver efficient, scalable, and innovative digital products 
              that help businesses grow.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              Become a globally trusted technology partner known for 
              excellence and innovation.
            </p>
          </div>

        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Team</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h4 className="font-semibold text-lg">John Doe</h4>
            <p className="text-gray-500">Frontend Developer</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h4 className="font-semibold text-lg">Jane Smith</h4>
            <p className="text-gray-500">Backend Developer</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h4 className="font-semibold text-lg">Alex Brown</h4>
            <p className="text-gray-500">UI/UX Designer</p>
          </div>

        </div>
      </section>

    </main>
  );
}

export default Company;