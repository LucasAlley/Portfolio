import React from "react";

const Contact = () => {
  const primary = {
    fill: "#81e6d9"
  };
  const secondary = {
    fill: "#0C717A"
  };
  return (
    <div className="bg-teal-100 h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl text-teal-800 font-bold mb-16">Lets Connect</h1>
      <p className="text-2xl text-teal-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-12 mr-4 icon-mail inline"
        >
          <path
            className="primary"
            style={primary}
            d="M22 8.62V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.62l9.55 4.77a1 1 0 0 0 .9 0L22 8.62z"
          ></path>
          <path
            className="secondary"
            style={secondary}
            d="M12 11.38l-10-5V6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v.38l-10 5z"
          ></path>
        </svg>
        lucasalleydev@gmail.com
      </p>
      <a
        className="text-2xl text-teal-600"
        href="https://www.github.com/LucasAlley"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-12 mr-4 icon-code inline"
        >
          <rect
            width="18"
            height="18"
            x="3"
            y="3"
            className="primary"
            rx="2"
            style={primary}
          ></rect>
          <path
            style={secondary}
            className="secondary"
            d="M8.7 13.3a1 1 0 0 1-1.4 1.4l-2-2a1 1 0 0 1 0-1.4l2-2a1 1 0 1 1 1.4 1.4L7.42 12l1.3 1.3zm6.6 0l1.29-1.3-1.3-1.3a1 1 0 1 1 1.42-1.4l2 2a1 1 0 0 1 0 1.4l-2 2a1 1 0 0 1-1.42-1.4zm-3.32 3.9a1 1 0 0 1-1.96-.4l2-10a1 1 0 0 1 1.96.4l-2 10z"
          ></path>
        </svg>
        Github
      </a>
    </div>
  );
};

export default Contact;
