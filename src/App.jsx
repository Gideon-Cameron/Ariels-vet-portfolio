// import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Work from "./Components/Work";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero / About Section */}
      <Hero />
      <About />
      <Services />
      <Work />
      <Contact />

      {/*
        Future sections will go here:
        - About
        - Services
        - Portfolio
        - Testimonials
        - Contact
      */}
    </div>
  );
};

export default App;
