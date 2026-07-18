import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function Contact() {

  return (

    <>
      <Navbar />

      <section className="bg-blue-700 text-white py-16">

        <div className="max-w-7xl mx-auto text-center px-6">

          <h1 className="text-5xl font-bold">
            Contact Us
          </h1>

        </div>

      </section>

      <section className="py-16">

        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

          <div>

            <h2 className="text-3xl font-bold mb-6">
              Get In Touch
            </h2>

            <p className="mb-4">
              📍 Hyderabad, Telangana
            </p>

            <p className="mb-4">
              📞 +91 9876543210
            </p>

            <p className="mb-8">
              ✉ info@abcschool.com
            </p>

            <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center">
              Google Map
            </div>

          </div>

          <form className="shadow rounded-lg p-8">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded mb-4"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded mb-4"
            />

            <textarea
              rows="5"
              placeholder="Message"
              className="w-full border p-3 rounded mb-4"
            />

            <button
              className="bg-blue-700 text-white px-8 py-3 rounded"
            >
              Send Message
            </button>

          </form>

        </div>

      </section>

      <Footer />

    </>

  );

}

export default Contact;