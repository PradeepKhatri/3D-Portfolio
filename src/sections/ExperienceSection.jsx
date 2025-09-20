import GlowCard from "../components/GlowCard";
import TitleHeader from "../components/Titleheader";
import { expCards } from "../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const ExperienceSection = () => {
  useGSAP(() => {


    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -50,
        opacity: 0.1,
        transformOrigin: "left left",
        duration: 0.6,
        ease: "power2.inOut",
        
        scrollTrigger: {
          trigger: card,
          start: "top 60%",
          once: true,
          // scrub: true,
        },
      });
    });

    gsap.to(".timeline", {
      scaleY: 0, // or target value
      transformOrigin: "bottom bottom",
      duration: 0.6,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top centre",
        end: "40% center",
        scrub: true, // this smoothly ties animation progress to scroll
        //   once: true,
      },
    });

    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        xPercent: 0,
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
          // scrub: true,
          once: true,
        },
      });
    });
  }, []);

  return (
    <section
      id="experience"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="Work Experience" />

        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card, index) => (
              <div
                key={card.title}
                className="exp-card-wrapper flex xl:items-center"
              >
                <div className="xl:w-2/6 flex justify-center">
                  <GlowCard card={card} index={index}>
                    <div>

                    <img src={card.imgPath} alt={card.title} />
                    </div>
                  </GlowCard>
                </div>

                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>

                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo bg-[#F9F6EE] w-18 h-18 rounded-full">
                        <img
                          src={card.logoPath}
                          alt="logo"
                          className=" rounded-full"
                        />
                      </div>

                      <div className="leading-8">
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        <p className="my-5 text-white-50">{card.date}</p>
                        <p className="text-[#839cb5] italic">
                          Responsibilities
                        </p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map((responsibility) => (
                            <li key={responsibility} className="text-lg">
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
