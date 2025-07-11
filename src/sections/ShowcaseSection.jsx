import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/Titleheader";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((project, index) => {
      gsap.fromTo(
        project,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: project,
            start: "top bottom-=100",
          },
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <TitleHeader title="Personal Work" sub="Hands-on projects" />
        <div className="showcaselayout mt-20">
          {/* Left */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/jobPortall.png" alt="ryde" />
            </div>
            <div className="text-content">
              <h2>RAG based QABOT</h2>
              <p className="text-white-50md:text-xl">
                A conversational retrieval chain to answer
                users questions about the PDFs.
              </p>
            </div>
          </div>

          {/* Right */}
          <div
            className="project-list-wrapper overflow-hidden"
            ref={project2Ref}
          >

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/jobPortal.png" alt="project3" className="w-full h-full"/>
              </div>
              <h2>Hiredd - A Job Portal</h2>
            </div>

            <div className="project">
              <div className="image-wrapper bg-[#ffebdf]">
                <img src="/images/expenseTracker.png" alt="project2" className="object-cover"/>
              </div>
              <h2>Expense Tracker</h2>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
