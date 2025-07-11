import { useRef } from "react";

const GlowCard = ({ card, children, index }) => {
//   const cardRefs = useRef([]);

//   const handleMouseMove = (index) => (e) => {
//     const card = cardRefs.current[index];

//     if (!card) return;

//     // calculate mouse position
//     const rect = card.getBoundingClientRect();
//     const mouseX = e.clientX - rect.left - rect.width / 2;
//     const mouseY = e.clientY - rect.top - rect.height / 2;

//     // calculate the angle from centre of card
//     let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

//     angle = (angle + 360) % 360;

//     card.style.setProperty("--start", angle + 60);
//   };

  return (
    // <div ref={(el) => (cardRefs.current[index] = el)}
    // onMouseMove={handleMouseMove(index)} className="card items-center justify-center timeline-card rounded-xl p-10">
    <div className="card items-center justify-center timeline-card rounded-xl p-10">
      {/* <div className="glow" /> */}
      <div className="">
        <h1 className="font-semibold text-4xl">{card.company}</h1>
        {/* <p className="text-white-50 text-lg">{card.review}</p> */}
      </div>
      {/* {children} */}
    </div>
  );
};

export default GlowCard;
