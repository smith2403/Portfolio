import React from "react";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import Navbar from "./components/Navbar";
import FeatureCards from "./sections/FeatureCards";
import Experiences from "./sections/Experiences";
import TechStack from "./sections/TechStack";
const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Showcase />
      <FeatureCards />
      <Experiences />
      <TechStack />
    </main>
  );
};

export default App;
