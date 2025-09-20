import TitleHeader from "../components/Titleheader";
import { abilities } from "../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import Contact from "./Contact";
import { Code } from "lucide-react";
import Marquee from "react-fast-marquee";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const FeaturedCards = () => {
  const workList = [
    "Development",
    "Marketing",
    "Video Editing",
    "Branding",
    "Web Design",
    "SEO",
    "Product Strategy",
    "Copywriting",
    "E-commerce Solutions",
    "Social Media Management",
  ];
  useGSAP(() => {}, []);

  return (
    <div className="w-full mt-20 bg-black py-20">
      <div className="flex flex-col justify-center gap-8">
        <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-t from-black to-gray-100/99 bg-clip-text text-center text-9xl font-extrabold leading-none text-transparent ">Work</h1>
        
        <Marquee gradient={false} speed={50} className="w-full">
          {workList.map((item, index) => (
            <span
              key={index}
              className="mx-8 text-3xl font-semibold md:text-4xl text-gray-400 whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default FeaturedCards;
