import React from "react";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import Navbar from "./components/Navbar";
import Experiences from "./sections/Experiences";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Showcase />
      <Experiences />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
