import Navbar from "../components/layout/Navbar";
 import Hero from "../components/home/Hero";
 import AboutPreview from "../components/home/AboutPreview";
 import WhyChooseUs from "../components/home/WhyChooseUs";
 import Courses from "../components/home/Courses";
import Facilities from "../components/home/Facilities";
 import Statistics from "../components/home/Statistics";
 import PrincipalMessage from "../components/home/PrincipalMessage";
 import NewsPreview from "../components/home/NewsPreview";
 import GalleryPreview from "../components/home/GalleryPreview";
 import Testimonials from "../components/home/Testimonials";
 import AdmissionCTA from "../components/home/AdmissionCTA";
 import ContactPreview from "../components/home/ContactPreview";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero /> 
      <AboutPreview />
      <WhyChooseUs />
      <Courses />
      <Facilities />
      <Statistics />
      <PrincipalMessage />
      <NewsPreview />
      <GalleryPreview />
      <Testimonials />
      <AdmissionCTA />
      <ContactPreview />
      <Footer />
    </>
  );
}

export default Home;