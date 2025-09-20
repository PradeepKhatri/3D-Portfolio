import Button from "../components/Button";
import HeroExperience from "../components/Models/HeroModel/HeroExperience";
import { words } from "../constants";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import AnimatedCounter from "../components/AnimatedCounter";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: "#beforeHero",
      start: "bottom bottom",
      end: "top top",
      endTrigger: "#hero",
      pin: true,
      pinSpacing: false,
      markers: false,
    });

    gsap.fromTo(
      ".beforeHeroHeading",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.7, duration: 1.5, ease: "power2.inOut" }
    );

    const zoomIn = document.getElementById("zoomIn");
    const mainHeading = document.querySelector(".mainHeading");

    function refreshAnimation() {
      const zoomInRect = zoomIn.getBoundingClientRect();
      const mainHeadingRect = mainHeading.getBoundingClientRect();

      const distanceToScroll = zoomInRect.left - mainHeadingRect.left + 10;

      // Reduce the scroll distances for a "lil less" scroll
      const horizontalScrollDistance =
        distanceToScroll + window.innerWidth * 0.7;
      const zoomScrollDistance = window.innerHeight;
      const totalScroll = horizontalScrollDistance + zoomScrollDistance;

      const zoomPosPercent =
        ((zoomInRect.left - mainHeadingRect.left) / mainHeadingRect.width) *
        100;

      gsap.set(".div", {
        transformOrigin: `${zoomPosPercent}% left`,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero",
          pin: true,
          scrub: true,
          start: "top top",
          end: () => `+=${distanceToScroll + window.innerHeight * 0.8}`,
          markers: false,
        },
      });

      tl.to(".mainHeading", {
        x: -distanceToScroll,
        ease: "none",
      });

      tl.to(
        ".div",
        {
          scale: 80,
          ease: "none",
        },
        "+=0"
      );

      tl.from(
        ".extraBox",
        {
          scaleX: 0,
          ease: "none",
        },
        "-=0.4"
      );
    }

    refreshAnimation();

    // Recalculate on resize
    window.addEventListener("resize", () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      refreshAnimation();
      ScrollTrigger.refresh();
    });
  });

  return (
    <>
      {/* <section
        id="beforeHero"
        className="bg-black w-full min-h-screen overflow-hidden xl:px-32 flex items-center justify-center"
        
      >
        <div className="beforeHeroHeading lg:-mt-10 tracking-wide text-center">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#f8f8f8]">
            Beyond Pixels, the art of engaging.
          </h2>
        </div>

      </section> */}

      <section
        id="beforeHero"
        className="bg-black w-full min-h-screen overflow-hidden xl:px-32 flex items-center justify-center relative"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="https://res.cloudinary.com/dh2vwyyqj/video/upload/v1756739153/7565822-hd_2048_1080_25fps_xcqs28.mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="beforeHeroHeading lg:-mt-10 tracking-wide text-center relative z-10">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#f8f8f8]">
            Beyond Pixels, the art of engaging.
          </h2>
        </div>
      </section>

      <section
        id="hero"
        className="relative bg-[#f8f8f8] w-full overflow-hidden xl:px-32"
      >
        <div className="hero-layout text-black">
          <div className="div  lg:-mt-10 text-6xl tracking-wide">
            <h2 className=" mainHeading text-5xl md:text-7xl lg:text-9xl whitespace-nowrap font-extrabold relative z-10">
              Shaping Designs & {/* Wrap 'I' in span for zooming */}
              <span id="zoomIn" className="inline-block origin-left">
                I
              </span>
              deas Into Tangible Results.
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
