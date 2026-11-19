import React from "react";
import { counterItems } from "../constants/index.js";

const AnimatedCouter = () => {
  return (
    <div className="padding-x-lg xl:mt-0 mt-32" id="counter">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {counterItems.map((item) => (
          <div
            key={item.title}
            className="bg-zinc-900 rounded-xl p-8 flex flex-col gap-5 border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-4xl">
                {item.icon}
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-white text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-white-50 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCouter;