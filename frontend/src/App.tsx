import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.tsx"
import Navbar from "./components/Navbar.tsx"
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";


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

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
