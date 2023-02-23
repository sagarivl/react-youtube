import React from "react";

const Button = ({ name }) => {
  const buttonArrays = [
    "All",
    "Music",
    "Sports",
    "films",
    "Livestream",
    "Religion",
    "Science",
    "WildLife",
    "Shows",
    "Series",
  ];
  return (
    <>
      {buttonArrays.map((button, index) => (
        <button
          className="p-2 m-2 px-5 bg-gray-200 rounded-lg hover:bg-gray-700 hover:text-white"
          key={index}
        >
          {button}
        </button>
      ))}
    </>
  );
};

export default Button;
