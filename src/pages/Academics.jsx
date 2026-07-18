import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function Academics() {
  const programs = [
    {
      title: "Pre Primary",
      description: "Building a strong foundation through fun and interactive learning."
    },
    {
      title: "Primary School",
      description: "Developing reading, writing, mathematics, and communication skills."
    },
    {
      title: "Middle School",
      description: "Preparing students with practical knowledge and analytical thinking."
    },
    {
      title: "High School",
      description: "Focused academic excellence with competitive exam preparation."
    }
  ];

  return (
    <>
      <Navbar />

      {/* Banner */}

      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">Academics</h1>
          <p className="mt-4 text-lg">
            Quality Education for Every Stage
          </p>
        </div>
      </section>

      {/* Programs */}

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Academic Programs
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {programs.map((program, index) => (
              <div
                key={index}
                className="shadow rounded-lg p-8"
              >
                <h3 className="text-2xl font-bold mb-4">
                  {program.title}
                </h3>

                <p className="text-gray-700">
                  {program.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Teaching Methodology */}

      <section className="bg-gray-100 py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Our Teaching Methodology
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white shadow rounded-lg p-6 text-center">
              <h3 className="font-bold text-xl mb-3">
                Smart Learning
              </h3>
              <p>Interactive classrooms with digital learning tools.</p>
            </div>

            <div className="bg-white shadow rounded-lg p-6 text-center">
              <h3 className="font-bold text-xl mb-3">
                Practical Activities
              </h3>
              <p>Hands-on learning through projects and experiments.</p>
            </div>

            <div className="bg-white shadow rounded-lg p-6 text-center">
              <h3 className="font-bold text-xl mb-3">
                Student Development
              </h3>
              <p>Academic excellence along with personality development.</p>
            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Academics;