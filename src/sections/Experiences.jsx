import React from "react";
import TitleHeader from "../components/TitleHeader.jsx";
import { expCards } from "../constants/index.js";

const Experiences = () => {
  return (
    <section
      id="experience"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="Experience" sub="My Career" />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card)=>(
                <div className="exp-card-wrapper" key={card.title}>
                    <div className="xl:w-2/6">

                    </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
