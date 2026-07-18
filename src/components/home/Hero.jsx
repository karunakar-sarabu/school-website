import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}

          <div>

            <p className="text-blue-600 font-semibold uppercase mb-2">
              Welcome to
            </p>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
              ABC Public School
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-8">
              Empowering young minds with quality education,
              innovation, discipline and leadership for a brighter
              tomorrow.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <Link
                to="/admissions"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Apply Now
              </Link>

              <Link
                to="/about"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
              >
                Learn More
              </Link>

            </div>

          </div>

          {/* Right Image */}

          <div>

            <img
              src="/images/hero.jpg"
              alt="ABC Public School"
              className="w-full rounded-xl shadow-lg"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;