import React from 'react';
import backgroundImage from '../assets/Hero.jpg';

const Hero = () => {
  return (
    <div 
      className="relative flex flex-col items-center justify-start min-h-screen pt-[102px] text-center bg-cover bg-center" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >

      <div className="absolute inset-0 bg-black opacity-50"></div> 

      <div className="relative z-10 text-left font-nova mt-30">
        <h1 className="text-[100px] font-bold text-white" style={{ lineHeight: '1' }}>WE,</h1>
        <h1 className="text-[100px] font-bold text-white" style={{ lineHeight: '1' }}>ROBOT</h1>
      </div>

      <p className='relative z-10 text-[20px] font-Oxanium font-bold text-white mt-10'>
        This Site is Designed For Learning Purposes. This is not the Original Site.
      </p>
    </div>
  );
};

export default Hero;
