import React from "react";
import Img1 from "../assets/shirt/tech.svg";
import Img2 from "../assets/shirt/career.svg";
import Img3 from "../assets/shirt/network.svg";
import { FaStar } from "react-icons/fa";
import { off } from "process";

const OfferData = [
  {
    id: 1,
    img: Img1,
    name: "Tech Mentorship",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img2,
    name: "Career Advice",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img3,
    name: "Networking Opportunities",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Offer = () => {
  return (
    <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mb-24 pb-12 flex flex-col justify-center items-center">
      {/* Header section */}
      <div className="text-left mb-4">
        <h1 data-aos="fade-up" className="text-3xl font-bold p-5">
          What we Offer.
        </h1>
      </div>
      {/* Body section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {OfferData.map((offer) => (
          <div
            key={offer.id}
            data-aos="zoom-in"
            className="rounded-2xl bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group"
          >
            {/* image section */}
            <div>
              <img
                src={offer.img}
                alt=""
                className="w-full h-[200px] mx-auto transform -translate-y-12 group-hover:scale-105 duration-300 drop-shadow-md md:justify-between sm:justify-between"
              />
            </div>
            {/* details section */}
            <div className="p-4 text-center">
              {/* star rating */}
              <h1 className="text-xl sm:text-2xl font-bold text-blue-200 mb-2 sm:mb-4">
                {offer.name}
              </h1>
              <p className="text-sm sm:text-base text-yellow-100 group-hover:text-white duration-300 line-clamp-2 pb-4 sm:pb-8 mb-2 sm:mb-4">
                {offer.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;