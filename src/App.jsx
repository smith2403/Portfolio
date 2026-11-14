import React from "react";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Showcase />
    </main>
  );
};

export default App;
