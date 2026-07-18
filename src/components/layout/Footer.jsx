import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* School */}

          <div>

            <h2 className="text-3xl font-bold mb-4">
              ABC Public School
            </h2>

            <p className="text-gray-300 leading-7">
              Providing quality education and shaping future leaders
              through innovation, discipline and excellence.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li><Link to="/">Home</Link></li>

              <li><Link to="/about">About</Link></li>

              <li><Link to="/academics">Academics</Link></li>

              <li><Link to="/gallery">Gallery</Link></li>

              <li><Link to="/contact">Contact</Link></li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <p className="flex items-center gap-3 mb-3">
              <FaPhone />
              +91 9876543210
            </p>

            <p className="flex items-center gap-3 mb-3">
              <FaEnvelope />
              info@abcschool.com
            </p>

            <p className="flex items-center gap-3">
              <FaMapMarkerAlt />
              Hyderabad, Telangana
            </p>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Follow Us
            </h3>

            <div className="flex gap-5 text-2xl">

              <FaFacebook className="hover:text-blue-500 cursor-pointer" />

              <FaInstagram className="hover:text-pink-500 cursor-pointer" />

              <FaYoutube className="hover:text-red-500 cursor-pointer" />

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-gray-700 text-center py-5">

        © 2026 ABC Public School | All Rights Reserved

      </div>

    </footer>
  );
}

export default Footer;