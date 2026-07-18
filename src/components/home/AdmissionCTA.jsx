import { Link } from "react-router-dom";

function AdmissionCTA() {

  return (

    <section className="py-20 bg-blue-700 text-white text-center">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-5xl font-bold">
          Admissions Open
        </h2>

        <p className="mt-6 text-lg">
          Join ABC Public School and provide your child with the best
          educational experience.
        </p>

        <Link
          to="/admissions"
          className="inline-block mt-10 bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Apply Today
        </Link>

      </div>

    </section>

  );

}

export default AdmissionCTA;