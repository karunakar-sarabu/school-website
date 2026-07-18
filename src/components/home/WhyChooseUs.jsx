function WhyChooseUs() {
  const features = [
    "Experienced Teachers",
    "Smart Classrooms",
    "Modern Computer Labs",
    "Sports & Games",
    "Safe Campus",
    "Excellent Results",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Why Choose Our School?
        </h2>

        <p className="text-center text-gray-600 mb-12">
          We provide a complete learning environment for every student.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {item}
              </h3>

              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Students receive quality education and holistic development.
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;