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

  useGSAP(
    () => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 },
      );

      const animateProjects = [
        project1Ref.current,
        project2Ref.current,
        project3Ref.current,
      ];

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
          },
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section id="work" className="app-showcase" ref={sectionRef}>
      <div className="w-full">
        <div className="showcaselayout">
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="AI Waste Object Detection" />
            </div>

            <div className="text-content">
              <h2>
                DL System for Multi-Class Waste Object Detection
                with Confusion-Guided Loss and Long-Tail Aware Augmentation
              </h2>

              <p className="text-white-50 md:text-xl">
                Developed an enhanced YOLOv8s object detection system using CBAM
                attention, Confusion-Guided Loss and Long-Tail Aware
                Augmentation to improve waste classification across 10 classes.
                Evaluated seven model configurations, achieving 0.945 mAP50 and
                0.815 mAP50-95 using Python, PyTorch and Ultralytics.
              </p>

              <p className="text-white-50 mt-4">
                Python · PyTorch · YOLOv8 · Deep Learning · Computer Vision
              </p>
            </div>
          </div>

          {/* Secondary Projects */}
          <div className="project-list-wrapper overflow-hidden">
            {/* Food Chatbot */}
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="Food Ordering Chatbot" />
              </div>

              <h2>Food Ordering Chatbot</h2>

              <p className="text-white-50 mt-3">
                Developed a food ordering website with menu browsing, order
                placement, payment confirmation and order tracking. Integrated a
                Python and Dialogflow chatbot to handle customer queries.
              </p>

              <p className="text-white-50 mt-3">
                Python · NLP · Dialogflow · PHP · HTML · CSS
              </p>

              <a
                href="https://github.com/smith2403/Vision_ChatBot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline mt-3 inline-block"
              >
                View on GitHub ↗
              </a>
            </div>

            {/* Travel Blog */}
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.png" alt="MERN Stack Travel Blog" />
              </div>

              <h2>Travel Blog</h2>

              <p className="text-white-50 mt-3">
                Built a responsive travel blog using the MERN stack, featuring
                CRUD functionality for creating, editing and managing blog posts
                with input validation.
              </p>

              <p className="text-white-50 mt-3">
                MongoDB · Express.js · React · Node.js
              </p>

              <a
                href="https://github.com/smith2403/TravelBlog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline mt-3 inline-block"
              >
                View on GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
