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
        <p className="text-2xl text-teal-800 font-medium">Website | Code</p>
      </div>
      <div className="w-1/2  mb-16">
        <h1 className="text-4xl text-white font-bold">Blue Raven</h1>
        <p className="text-2xl text-teal-600 font-medium">
          Website revamp for a local business.
        </p>
        <p className="text-2xl text-teal-800 font-medium">Website | Code</p>
      </div>
      <div className="w-1/2">
        <h1 className="text-4xl text-white font-bold">Movie App</h1>
        <p className="text-2xl text-teal-600 font-medium">
          Browse for your favorite movies and tv shows.
        </p>
        <p className="text-2xl text-teal-800 font-medium">Website | Code</p>
      </div>
    </div>
  );
};

export default Portfolio;
