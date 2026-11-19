
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    // Animate timeline lines as you scroll
    gsap.utils.toArray(".gradient-line").forEach((line) => {
      gsap.from(line, {
        scaleY: 0,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: line,
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        },
      });
    });

    // Animate experience cards
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        x: -40,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          subtitle="💼 My Career Overview"
        />

        <div className="mt-20 md:mt-32 relative">
          <div className="relative z-10 flex flex-col gap-12 md:gap-20">
            {expCards.map((card, index) => (
              <div
                key={card.title}
                className="timeline-card relative flex gap-6 md:gap-10"
              >
                {/* Timeline and company logo */}
                <div className="relative flex flex-col items-center shrink-0 w-12 md:w-16">
                  <div className="timeline-logo relative z-10">
                    <img
                      src={card.logoPath}
                      alt={`${card.title} logo`}
                    />
                  </div>

                  {index !== expCards.length - 1 && (
                    <div className="gradient-line w-1 flex-1 mt-4" />
                  )}
                </div>

                {/* Experience details */}
                <div className="expText flex-1 pb-12">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <h2 className="font-semibold text-2xl md:text-3xl">
                      {card.title}
                    </h2>

                    <p className="text-white-50 text-sm">
                      🗓️ {card.date}
                    </p>
                  </div>

                  <p className="text-[#839CB5] italic mt-6">
                    Responsibilities
                  </p>

                  <ul className="list-disc ms-5 mt-5 flex flex-col gap-4 text-white-50">
                    {card.responsibilities.map(
                      (responsibility, index) => (
                        <li
                          key={index}
                          className="text-base md:text-lg leading-relaxed"
                        >
                          {responsibility}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
