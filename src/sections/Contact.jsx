import { useState } from "react";
import TitleHeader from "../components/Titleheader";
import ContactExperience from "../components/Models/contact/ContactExperience";

const Contact = () => {
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
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="Get In Touch With Me" sub="Contact Information" />

        <div className="mt-16 grid-12-cols">
          {/* left side */}
          <div className="xl:col-span-5">
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
          </div>

          {/* right side */}
          <div className="xl:col-span-6 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-[90%] hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Contact;
