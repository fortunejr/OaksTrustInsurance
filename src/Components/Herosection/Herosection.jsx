import React from "react";
import { HiOutlineDocumentText } from 'react-icons/hi';
import { FaCalendarCheck } from 'react-icons/fa';
import { MdExplore } from 'react-icons/md';
import { img12, img9 } from "../../imports";

const Herosection = () => {
  return (
    <div className="bg-customOrange">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 flex  flex-col lg:flex-row justify-between items-center gap-8">
        
        {/* Left Side - Text Content */}
        <div className="lg:w-2/5 w-full fade-in-bottom">
          <p className="font-bold text-orange-200">Oak & Trust Insurance</p>
          <h2 className="text-3xl lg:text-5xl font-black leading-tight text-white pb-6">
            Australia’s Trusted Partner in Insurance<br />
            Tailored Protection for Every Stage of Life and Business
          </h2>
          <p className="text-orange-200 text-base lg:text-sm">
            At Oak & Trust Insurance, we believe in protection with purpose. Whether you're a homeowner, entrepreneur, or investor, we provide bespoke insurance solutions that protect your assets, mitigate risks, and give you peace of mind in an ever-changing world.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-9">
          <a href="tel:1300000123" className="">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black font-bold px-5 py-3 rounded-2xl">
                <HiOutlineDocumentText size={24} />
                Get A Free Quote
              </button>
            </a>
            <a href="mailto:info@oakandtrustinsurance.com">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-customYellow font-bold px-5 py-3 rounded-2xl">
                <FaCalendarCheck size={24} />
                Book a Consultation
              </button>
            </a>
            <a href="mailto:info@oakandtrustinsurance.com">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-customYellow font-bold px-5 py-3 rounded-2xl">
                <MdExplore size={24} />
                Explore Our Products
              </button>
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={img12}
            alt="insurance visual"
            className="w-full h-56 sm:h-72 lg:h-96 object-cover rounded-3xl border-x-8 border-orange-200 fade-in"
          />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
