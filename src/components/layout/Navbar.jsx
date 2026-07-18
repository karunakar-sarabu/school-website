import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl font-bold text-blue-700">
            ABC Public School
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">

          <li><NavLink to="/">Home</NavLink></li>

          <li><NavLink to="/about">About</NavLink></li>

          <li><NavLink to="/admissions">Admissions</NavLink></li>

          <li><NavLink to="/academics">Academics</NavLink></li>

          <li><NavLink to="/faculty">Faculty</NavLink></li>

          <li><NavLink to="/facilities">Facilities</NavLink></li>

          <li><NavLink to="/gallery">Gallery</NavLink></li>

          <li><NavLink to="/news">News</NavLink></li>

          <li><NavLink to="/contact">Contact</NavLink></li>

        </ul>

        {/* Desktop Button */}

        <Link
          to="/admissions"
          className="hidden lg:block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Apply Now
        </Link>

        {/* Mobile Menu Button */}

        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </nav>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="lg:hidden bg-white border-t">

          <ul className="flex flex-col p-5 space-y-4">

            <li><NavLink to="/" onClick={()=>setMenuOpen(false)}>Home</NavLink></li>

            <li><NavLink to="/about" onClick={()=>setMenuOpen(false)}>About</NavLink></li>

            <li><NavLink to="/admissions" onClick={()=>setMenuOpen(false)}>Admissions</NavLink></li>

            <li><NavLink to="/academics" onClick={()=>setMenuOpen(false)}>Academics</NavLink></li>

            <li><NavLink to="/faculty" onClick={()=>setMenuOpen(false)}>Faculty</NavLink></li>

            <li><NavLink to="/facilities" onClick={()=>setMenuOpen(false)}>Facilities</NavLink></li>

            <li><NavLink to="/gallery" onClick={()=>setMenuOpen(false)}>Gallery</NavLink></li>

            <li><NavLink to="/news" onClick={()=>setMenuOpen(false)}>News</NavLink></li>

            <li><NavLink to="/contact" onClick={()=>setMenuOpen(false)}>Contact</NavLink></li>

            <Link
              to="/admissions"
              onClick={()=>setMenuOpen(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded text-center"
            >
              Apply Now
            </Link>

          </ul>

        </div>

      )}

    </header>
  );
}

export default Navbar;