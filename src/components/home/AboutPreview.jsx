import { Link } from "react-router-dom";

function AboutPreview() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}

          <div>

            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              About Our School
            </h2>

            <p className="text-gray-600 leading-8 mb-4">
              ABC Public School has been providing quality education for
              more than 25 years. We believe every child has unique
              potential and deserves an environment that encourages
              learning, creativity, leadership, and discipline.
            </p>

            <p className="text-gray-600 leading-8 mb-8">
              Our experienced teachers, modern classrooms, and
              student-focused approach help prepare children for future
              academic and personal success.
            </p>

            <Link
              to="/about"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Read More
            </Link>

          </div>

          {/* Right Side */}

          <div className="bg-gray-200 h-80 rounded-xl flex items-center justify-center">

            <p className="text-gray-500 text-xl">
              School Image
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutPreview;