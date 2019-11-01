import React from "react";

const Offer = () => {
  const primary = {
    fill: "#81e6d9"
  };
  const secondary = {
    fill: "#0C717A"
  };
  return (
    <div className="bg-teal-100  h-screen flex flex-col justify-center items-center">
      <h1 className="lg:text-6xl md:text-5xl text-teal-800 font-bold xl:mb-56 md:mb-10">
        What I Offer
      </h1>
      <div className="xl:flex xl:flex-row xl:w-full xl:justify-around lg:flex lg:flex-col lg:justify-center lg:items-center   md:flex-col md:justify-center md:items-center ">
        <div className="flex flex-col w-82 md:mb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="lg:w-24 md:w-16 icon-security"
          >
            <path
              className="primary"
              style={primary}
              d="M4 4l8-2 8 2v9.06a8 8 0 0 1-4.42 7.15L12 22l-3.58-1.79A8 8 0 0 1 4 13.06V4z"
            ></path>
            <path
              className="secondary"
              style={secondary}
              d="M6 12V5.56l6-1.5V12H6zm6 7.76V12h6v1.06a6 6 0 0 1-3.32 5.36L12 19.76z"
            ></path>
          </svg>
          <h1 className="tracking-wide lg:text-5xl md:text-4xl text-teal-800 font-semibold">
            Security
          </h1>
          <p className="lg:text-4xl md:text-3xl text-gray-800">
            Locking down your site to ensure user peace of mind.
          </p>
        </div>
        <div className="flex flex-col w-82  md:mb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="lg:w-24 md:w-16 icon-layers"
          >
            <path
              className="primary"
              style={primary}
              d="M2.6 6.09l9-4a1 1 0 0 1 .8 0l9 4a1 1 0 0 1 0 1.82l-9 4a1 1 0 0 1-.8 0l-9-4a1 1 0 0 1 0-1.82z"
            ></path>
            <path
              className="secondary"
              style={secondary}
              d="M3.91 10.5l7.68 3.41a1 1 0 0 0 .82 0l7.68-3.41 1.32.59a1 1 0 0 1 0 1.82l-9 4a1 1 0 0 1-.82 0l-9-4a1 1 0 0 1 0-1.82l1.32-.59zm0 5l7.68 3.41a1 1 0 0 0 .82 0l7.68-3.41 1.32.59a1 1 0 0 1 0 1.82l-9 4a1 1 0 0 1-.82 0l-9-4a1 1 0 0 1 0-1.82l1.32-.59z"
            ></path>
          </svg>
          <h1 className="tracking-wide lg:text-5xl md:text-4xl text-teal-800 font-semibold">
            Design
          </h1>
          <p className="lg:text-4xl md:text-3xl text-gray-800">
            Create a beautiful modern design sure to please anyone's eye.
          </p>
        </div>
        <div className="flex flex-col w-82 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="lg:w-24 md:w-16 icon-dashboard"
          >
            <path
              className="secondary"
              style={secondary}
              d="M3 11h2a1 1 0 0 1 0 2H3v-2zm3.34-6.07l1.42 1.41a1 1 0 0 1-1.42 1.42L4.93 6.34l1.41-1.41zM13 3v2a1 1 0 0 1-2 0V3h2zm6.07 3.34l-1.41 1.42a1 1 0 1 1-1.42-1.42l1.42-1.41 1.41 1.41zM21 13h-2a1 1 0 0 1 0-2h2v2z"
            ></path>
            <path
              className="primary"
              style={primary}
              d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-6.93-6h13.86a8 8 0 1 0-13.86 0z"
            ></path>
            <path
              className="secondary"
              style={secondary}
              d="M11 14.27V9a1 1 0 0 1 2 0v5.27a2 2 0 1 1-2 0z"
            ></path>
          </svg>
          <h1 className="tracking-wide lg:text-5xl md:text-4xl text-teal-800 font-semibold">
            Efficency
          </h1>
          <p className="lg:text-4xl md:text-3xl text-gray-800">
            Writing clean, scalable, fast code to ensure not only a great user
            experience, but to help with SEO as well
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offer;
