import React from "react";

const Portfolio = () => {
  return (
    <div className="bg-teal-300 h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl text-teal-800 font-bold mb-16">Portfolio</h1>
      <div className="w-1/2 mb-16">
        <h1 className="text-4xl text-white font-bold">Georgia Police Jobs</h1>
        <p className="text-2xl text-teal-600 font-medium">
          Police Related Job board. Includes authentication, payments, form
          validation, error handling etc.
        </p>
        <a
          className="text-2xl text-teal-800 font-medium"
          href="http://www.georgiapolicejobs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Website |
        </a>
        <a
          className="text-2xl text-teal-800 font-medium"
          href="https://github.com/LucasAlley/JobBoard"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Code
        </a>
      </div>
      <div className="w-1/2  mb-16">
        <h1 className="text-4xl text-white font-bold">Blue Raven</h1>
        <p className="text-2xl text-teal-600 font-medium">
          Website revamp for a local business.
        </p>
        <a
          className="text-2xl text-teal-800 font-medium"
          href="https://blueraven.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Website |
        </a>
        <a
          className="text-2xl text-teal-800 font-medium"
          href="https://github.com/LucasAlley/Blue-Raven"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Code
        </a>
      </div>
      <div className="w-1/2">
        <h1 className="text-4xl text-white font-bold">Movie App</h1>
        <p className="text-2xl text-teal-600 font-medium">
          Browse for your favorite movies and tv shows.
        </p>
        <a
          className="text-2xl text-teal-800 font-medium"
          href="https://moviealley.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Website |
        </a>
        <a
          className="text-2xl text-teal-800 font-medium"
          href="https://github.com/LucasAlley/Movie"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Code
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
