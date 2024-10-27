import React from "react";

const Title = ({ title,subtitle}) => {
  return (
    <div className="text-center pt-20 py-10 px-4 font-Oxanium">
      <h1 className="text-4xl font-medium text-black mb-4">{title}</h1>
      <p className="text-lg text-gray-500 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
};

export default Title;
