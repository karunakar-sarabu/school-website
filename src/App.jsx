import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Admissions from "./pages/Admissions";
import Academics from "./pages/Academics";
import Faculty from "./pages/Faculty";
import Facilities from "./pages/Facilities";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/admissions" element={<Admissions />} />

        <Route path="/academics" element={<Academics />} />

        <Route path="/faculty" element={<Faculty />} />

        <Route path="/facilities" element={<Facilities />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/news" element={<News />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;