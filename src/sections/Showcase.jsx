
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = React.useRef(null);
  const project1Ref = React.useRef(null);
  const project2Ref = React.useRef(null);
  const project3Ref = React.useRef(null);

  useGSAP(() => {
    // Fade in the whole section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );

    // Store all project elements in an array
    const animateProjects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    // Animate each project when it enters the screen
    animateProjects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "bottom top",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <section id="work" className="app-showcase" ref={sectionRef}>
      <div className="w-full">
        <div className="showcaselayout">
          {/* left */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Project 1" />
            </div>
            <div className="text-content">
              <h2>Project 1 Title</h2>
              <p className="text-white-50 md:text-xl">
                Project 1 description goes here. It provides an overview of the
                project, its features, and any other relevant information that
                would be useful for the viewer to know.
              </p>
            </div>
          </div>

          {/* right */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="Project 2" />
              </div>
              <h2>Project 2 Title</h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.png" alt="Project 3" />
              </div>
              <h2>Project 3 Title</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
