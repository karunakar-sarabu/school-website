import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function Admissions() {
  return (
    <>
      <Navbar />

      {/* Banner */}

      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">Admissions</h1>
          <p className="mt-4 text-lg">
            Join Our School Family
          </p>
        </div>
      </section>

      {/* Admission Process */}

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Admission Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="shadow rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold mb-4">Step 1</h3>
              <p>Collect the admission application form.</p>
            </div>

            <div className="shadow rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold mb-4">Step 2</h3>
              <p>Submit the completed application with documents.</p>
            </div>

            <div className="shadow rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold mb-4">Step 3</h3>
              <p>Attend the interaction or entrance assessment.</p>
            </div>

            <div className="shadow rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold mb-4">Step 4</h3>
              <p>Complete fee payment and confirm admission.</p>
            </div>

          </div>

        </div>
      </section>

      {/* Required Documents */}

      <section className="bg-gray-100 py-16">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-10">
            Required Documents
          </h2>

          <ul className="space-y-4 text-lg">

            <li>✅ Birth Certificate</li>

            <li>✅ Previous School Transfer Certificate</li>

            <li>✅ Passport Size Photographs</li>

            <li>✅ Aadhaar Card Copy</li>

            <li>✅ Previous Academic Records</li>

          </ul>

        </div>

      </section>

      {/* CTA */}

      <section className="py-16">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Admissions Open for 2026–27
          </h2>

          <p className="mt-6 text-gray-600">
            Contact our admission office for more information.
          </p>

          <button className="mt-8 bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800">
            Apply Now
          </button>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Admissions;