import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.tsx"
import Navbar from "./components/Navbar.tsx"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from './components/Footer.tsx';
import About from './pages/About.tsx';
import Services from './pages/Services.tsx';
import Contact from './pages/Contact.tsx';
import ContactSuccess from './pages/ContactSuccess.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';
import Error from './pages/Error.tsx';



function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,       // default animation duration (ms)
      easing: "ease-in-out", // default easing
      once: true,           // whether animation happens only once
    });
  }, []);


  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-success" element={<ContactSuccess />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App
