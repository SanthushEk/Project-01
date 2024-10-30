import React, { useState } from "react";
import video from "../assets/Video.mp4";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    zipCode: "",
    consent: false,
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First Name is Required";
    if (!formData.lastName) newErrors.lastName = "Last Name is Required";
    if (!formData.email) newErrors.email = "Email is Required";
    if (!formData.telephone)
      newErrors.telephone = "Telephone Number is Required";
    if (!formData.zipCode) newErrors.zipCode = "Zip Code is Required";
    if (!formData.consent) newErrors.consent = "Consent is Required";

    setError(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form Submitted", formData);
    }
  };

  return (
    <div className="flex flex-wrap mx-auto mt-10 mb-10 px-4 md:px-10 lg:ml-[400px] lg:mr-[400px] lg:mt-[200px] lg:mb-[200px]">
      {/* Form Section */}
      <div className="w-full md:w-1/2 p-8 bg-white">
        <h2 className="text-3xl font-bold mb-4 font-Oxanium">
          Discover Autonomy
        </h2>
        <p className="text-gray-500 mb-10 text-lg">
          Stay up to date on Full Self-Driving (Supervised).
        </p>

        <form className="space-y-2" onSubmit={handleSubmit}>
          {/* First Name */}
          <div>
            <label className="block text-lg font-Oxanium text-gray-600">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-4 p-3 text-lg font-Oxanium bg-gray-100 rounded-sm w-full focus:ring-gray-500 focus:bg-white focus:border-gray-500"
            />
            {error.firstName && (
              <p className="text-red-500 text-md mt-2 mb-2 font-Oxanium font-bold">
                {error.firstName}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-lg font-Oxanium text-gray-500">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-4 p-3 text-lg font-Oxanium bg-gray-100 rounded-sm w-full focus:ring-gray-500 focus:bg-white focus:border-gray-500"
            />
            {error.lastName && (
              <p className="text-red-500 text-md mt-2 mb-2 font-Oxanium font-bold">
                {error.lastName}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-lg font-Oxanium text-gray-500">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-4 p-3 text-lg font-Oxanium bg-gray-100 rounded-sm w-full focus:ring-gray-500 focus:bg-white focus:border-gray-500"
            />
            {error.email && (
              <p className="text-red-500 text-md mt-2 mb-2 font-Oxanium font-bold">
                {error.email}
              </p>
            )}
          </div>

          {/* Telephone Number */}
          <div>
            <label className="block text-lg font-Oxanium text-gray-500">
              Telephone Number
            </label>
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              className="mt-4 p-3 text-lg font-Oxanium bg-gray-100 rounded-sm w-full focus:ring-gray-500 focus:bg-white focus:border-gray-500"
            />
            {error.telephone && (
              <p className="text-red-500 text-lg mt-2 mb-2 font-Oxanium font-bold ">
                {error.telephone}
              </p>
            )}
          </div>

          {/* Zip Code */}
          <div>
            <label className="block text-lg font-Oxanium text-gray-500">
              Zip Code
            </label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className="mt-4 p-3 text-lg font-Oxanium bg-gray-100 rounded-sm w-full focus:ring-gray-500 focus:bg-white focus:border-gray-500"
            />
            {error.zipCode && (
              <p className="text-red-500 text-md mt-2 mb-2 font-Oxanium font-bold">
                {error.zipCode}
              </p>
            )}
          </div>

          {/* Consent */}
          <div className="flex items-center">
            <label className="text-md text-gray-700 font-Oxanium m-[20px]">
              Consent to be contacted by Tesla with more information and offers
              related to Tesla products. I can opt out at any time in the Tesla
              app or by unsubscribing.
            </label>
          </div>

          <button
            type="submit"
            className="w-full sm:w-[200px] mx-auto block py-2 px-4 bg-indigo-600 text-white text-xl rounded-md font-Oxanium font-bold hover:bg-indigo-700"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Video Section - Only Visible on Large Screens */}
      <div className="hidden lg:flex w-full md:w-1/2 bg-gray-200 items-center justify-center rounded-md max-h-[500px] mt-[100px]">
        <video
          src={video}
          className="w-full h-full object-cover rounded-md"
          autoPlay
          loop
          muted
          controls
        />
      </div>
    </div>
  );
};

export default Form;
