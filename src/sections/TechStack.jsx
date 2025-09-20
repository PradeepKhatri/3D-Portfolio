import { useGSAP } from "@gsap/react";
import TechIcon from "../components/Models/TechLogos/TechIcon";
import TitleHeader from "../components/Titleheader";
import { techStackIcons, techStackImgs } from "../constants";
import { gsap } from "gsap";
import { useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: "#skills",
      start: "bottom bottom",
      end: "top top",
      endTrigger: "#contact",
      pin: true,
      pinSpacing: false,
      markers: false,
    });
    // gsap.fromTo(
    //   ".tech-card",
    //   { y: 50, opcaity: 0 },
    //   {
    //     y: 0,
    //     opcaity: 1,
    //     duration: 1,
    //     ease: "power2.inOut",
    //     stagger: 0.2,
    //     scrollTrigger: {
    //       trigger: "#skills",
    //       start: "top center",
    //     },
    //   }
    // );

    // ScrollTrigger.create({
    //   trigger: "#skills",
    //   start: "bottom bottom",
    //   end: "top top",
    //   endTrigger: "#contact",
    //   pin: true,
    //   pinSpacing: false,
    //   markers: true,
    // });
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <section
        id="skills"
        className="relative flex-center section-padding pb-20"
      >
        <div className="w-full h-full md:px-10 px-5">
          <TitleHeader
            title="My Preferred Tech Stack"
            sub="The Skills I Bring to the Tabel!"
          />

          <div className="tech-grid">
            {techStackImgs.map((icon) => (
              <div
                key={icon.name}
                className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
              >
                {/* <div className="tech-card-animated-bg" /> */}
                <div className="tech-card-content">
                  <div className="tech-icon-wrapper">
                    <img src={icon.imgPath} alt={icon.name} />
                  </div>
                  <div className="padding-x w-full mb-5">
                    <p>{icon.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative flex-center section-padding bg-[#FFFDF6] text-black-100 pt-15"
      >
        <div className="w-full h-full md:px-10 px-5">
          <TitleHeader title="Get In Touch With Me" sub="Contact Information" />

          <div className="mt-16 grid-12-cols">
            {/* left side */}
            {/* <div className="xl:col-span-5">
              <div className="flex-center card-border rounded-xl p-6">
                <form
                  onSubmit={handleSubmit}
                  className="w-full flex flex-col gap-5"
                >
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>

                  <button type="submit">
                    <div className="cta-button group">
                      <div className="bg-circle" />
                      <p className="text">Send Message</p>
                      <div className="arrow-wrapper">
                        <img src="/images/arrow-down.svg" alt="arrow" />
                      </div>
                    </div>
                  </button>
                </form>
              </div>
            </div> */}

            {/* right side */}
            <div className="xl:col-span-6 min-h-96">
              <div className="bg-[#cd7c2e] w-full h-[30%] hover:cursor-grab rounded-3xl overflow-hidden">
                {/* <ContactExperience /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechStack;
