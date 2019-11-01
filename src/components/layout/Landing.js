import React from "react";
import Hero from "../sections/Hero";
import Offer from "../sections/Offer";
import Portfolio from "../sections/Portfolio";
import Contact from "../sections/Contact";

const Landing = () => {
  const myDivToFocus = React.createRef();

  const handleOnClick = () => {
    if (myDivToFocus.current) {
      myDivToFocus.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }
  };

  return (
    <div>
      <Hero handleOnClick={handleOnClick} />
      <div ref={myDivToFocus}>
        <Offer />
      </div>
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Landing;
