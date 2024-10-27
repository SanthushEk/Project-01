import React from 'react';
import backgroundImage from '../assets/footer.jpg'; 

const Banner = () => {
  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> 

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-white px-4 z-10 max-w-md md:max-w-lg font-Oxanium">
        <h1 className="text-2xl md:text-5xl font-bold mb-4 ">The Future is Autonomous</h1>
        <p className="text-md md:text-xl mb-6">
          Experience Full Self-Driving (Supervised) in any Tesla vehicle with a demo drive.
        </p>
        <button className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-lg font-bold rounded-md transition duration-300">
          Experience Tesla
        </button>
      </div>
    </div>
  );
};

export default Banner;
