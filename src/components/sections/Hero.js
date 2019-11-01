import React from "react";

const Hero = () => {
  const primary = {
    fill: "#81e6d9"
  };

  return (
    <div className="flex flex-col items-center justify-center bg-teal-300 text-center h-screen">
      <h1 className="lg:text-6xl md:text-6xl text-white lg:pb-8  md:pb-8 font-semibold">
        I'm Lucas Alley
      </h1>
      <h2 className="text-5xl text-white pb-32">A Full Stack Web Developer</h2>
      <button className="shadow py-4 px-4 flex flex-row text-4xl items-center text-white bg-teal-900  rounded">
        <p className="mr-4">Lets Work</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-8 mr-4 icon-arrow-thin-down-circle block w-10"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            className="primary"
            style={primary}
          ></circle>
          <path
            className="secondary"
            d="M11 14.59V7a1 1 0 0 1 2 0v7.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.42l2.3 2.3z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Hero;
