import { Link } from "react-router-dom";

function Courses() {
  const courses = [
    "Pre Primary",
    "Primary School",
    "Middle School",
    "High School",
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Academic Programs
        </h2>

        <p className="text-center text-gray-600 mb-12">
          We provide quality education from Nursery to Grade X.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {courses.map((course, index) => (
            <div
              key={index}
              className="border rounded-xl p-8 text-center hover:bg-blue-600 hover:text-white transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {course}
              </h3>

              <p>
                Quality education with experienced teachers and
                practical learning.
              </p>

              <Link
                to="/academics"
                className="inline-block mt-6 font-semibold"
              >
                Learn More →
              </Link>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Courses;