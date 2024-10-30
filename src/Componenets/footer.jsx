import React from 'react';

const Footer = () => {
  return (
    <div className="bg-black text-white text-center p-8 font-Oxanium">
      {/* Footer Paragraphs */}
      <p className="text-sm md:text-base max-w-3xl mx-auto mb-10">
        1. Monthly lease payment is $412 before est. gas savings of $83/mo, excludes taxes and fees, is based on $51,880 Model 3 Long Range Rear-Wheel Drive purchase price (includes Destination Fee) and is subject to change at any time. Requires $2,999 down with 36 months and 10,000 miles/year. Subject to credit approval and available in select U.S. states. Terms apply.
      </p>
      <p className="text-sm md:text-base max-w-3xl mx-auto mb-10">
        2. 72 monthly payments of $612 before est. gas savings of $83/mo, excludes taxes and fees, is based on $51,880 Model 3 Long Range Rear-Wheel Drive purchase price (includes Destination Fee) and is subject to change at any time. Requires 15% down ($7,500 Federal Tax Credit will be applied, if eligible) and purchase of Full Self-Driving (Supervised). Promotional rate available for well-qualified buyers with excellent credit. Not all applicants will qualify. Terms apply.
      </p>

      {/* Footer Links */}
      <div className="mt-6 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 font-sans">
        <span>Auto Mobile © 2024</span>
        <a href="#" className="hover:underline">Privacy & Legal</a>
        <a href="#" className="hover:underline">Vehicle Recalls</a>
        <a href="#" className="hover:underline">Contact</a>
        <a href="#" className="hover:underline">News</a>
        <a href="#" className="hover:underline">Get Updates</a>
        <a href="#" className="hover:underline">Locations</a>
      </div>
    </div>
  );
};

export default Footer;
