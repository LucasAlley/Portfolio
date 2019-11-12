import React from "react";
import resume from "../../resume/resume.pdf";

const Hero = () => {
  const style = {
    backgroundImage:
      "linear-gradient(180deg,transparent 70%,rgba(56, 178, 172, .4) 0)"
  };
  return (
    <div className=" xl:w-8/12 mx-auto lg:w-10/12 md:w-8/12 sm:w-10/12 xs:w-10/12 flex flex-col justify-center ">
      <h1 className="text-5xl font-bold text-gray-700 mt-10 pb-4">
        Lucas Alley
      </h1>
      <div className="flex mb-10 justify-between w-48">
        <a
          className="text-xl text-gray-400  hover:text-gray-700"
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          Resume
        </a>
        <a
          className="text-xl text-gray-400  hover:text-gray-700 "
          href="mailto:lucasalleydev@gmail.com"
          target="_top"
        >
          Contact
        </a>
      </div>
      <h2 className="font-bold text-4xl text-gray-700">About Me</h2>
      <p className="xl:text-2xl lg:text-2xl  md:text-2xl leading-loose text-gray-700 mb-10 sm:text-sm">
        I'm Lucas Alley. A Full Stack Web Developer taking pride in building
        beautifully complex web applications. I specialize in the MERN stack and
        provide quality responsive design, clean code, and secure websites.
        Whether you're needing a blog site, marketing page, or the next social
        media giant I've got you covered.
      </p>
      <h1 className="text-4xl text-gray-700 font-bold mb-4">What I've made</h1>
      <div className="xl:flex xl:flex-row xl:justify-between lg:flex lg:flex-row mt-8 md:flex-col md:justify-center md:flex md:items-center sm:flex sm:flex-col sm:justify-center sm:items-center">
        <div className="xl:w-3/12 mb-16 lg:w-4/12 md:w-6/12 sm:w-6/12">
          <h1 className="text-3xl text-gray-700 font-semibold mb-4  ">
            Georgia Police Jobs
          </h1>
          <p className="text-2xl text-gray-700  mb-4 leading-relaxed  ">
            Police Related Job board. Includes authentication, payments, form
            validation, error handling etc.
          </p>
          <a
            style={style}
            className="text-2xl text-gray-800 font-medium underline-indigo"
            href="http://www.georgiapolicejobs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
        </div>
        <div className="xl:w-3/12 mb-16 lg:w-4/12 md:w-6/12 sm:w-6/12">
          <h1 className="text-3xl text-gray-700 font-semibold mb-4">
            Tommy Bradford
          </h1>
          <p className="text-2xl text-gray-700  mb-4 leading-relaxed">
            Mock Marketing SPA for the 'legendary' Tommy Bradford.Someone you've
            likely never heard of.
          </p>
          <a
            style={style}
            className="text-2xl text-gray-800 font-medium"
            href="https://ecstatic-euclid-0c04c0.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
          <a
            className="text-2xl text-gray-800 font-medium"
            href="https://github.com/LucasAlley/Mock-Marketing-SPA"
            target="_blank"
            rel="noopener noreferrer"
          >
            | Code
          </a>
        </div>
        <div className="xl:w-3/12 mb-16 lg:w-4/12 md:w-6/12 sm:w-6/12">
          <h1 className="text-3xl text-gray-700 font-semibold mb-4">
            Movie App
          </h1>
          <p className="text-2xl text-gray-700  mb-4 leading-relaxed">
            Browse for your favorite movies and tv shows utilizing the TMDB api
            with SCSS
          </p>
          <a
            style={style}
            className="text-2xl text-gray-800 font-medium"
            href="https://moviealley.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
          <a
            className="text-2xl text-gray-800 font-medium"
            href="https://github.com/LucasAlley/Movie"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            | Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
