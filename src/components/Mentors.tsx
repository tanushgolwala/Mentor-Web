import React from "react";
import Img1 from "../assets/shirt/business2.jpg";
import Img2 from "../assets/shirt/business3.png";
import Img3 from "../assets/shirt/businessman.jpg";
import { FaStar } from "react-icons/fa";

const MentorsData = [
    {
        id: 1,
        img: Img1,
        name: "John Doe",
        expertise: "Web Development",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 2,
        img: Img2,
        name: "Jane Smith",
        expertise: "Data Science",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 3,
        img: Img3,
        name: "Alex Johnson",
        expertise: "UX/UI Design",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];

const TopMentors = () => {
    return (
        <div>
            <div className="container mb-16">
                {/* Header section */}
                <div className="text-left mb-24">

                    <h1 data-aos="fade-up" className="text-3xl font-bold p-5">
                        Our Top Recommendation.
                    </h1>

                </div>
                {/* Body section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
                    {MentorsData.map((mentor) => (
                        <div
                            key={mentor.id}
                            data-aos="zoom-in"
                            className="rounded-2xl bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
                        >
                            {/* image section */}
                            <div className="h-[100px]">
                                <img
                                    src={mentor.img}
                                    alt=""
                                    className="max-w-[140px] h-[100px] w-[100px] object-cover block mx-auto transform -translate-y-16 group-hover:scale-105 duration-300 drop-shadow-md rounded-full "
                                />
                            </div>
                            {/* details section */}
                            <div className="p-4 text-center">
                                {/* star rating */}
                                <div className="w-full flex items-center justify-center gap-1"> 
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                </div>
                                <h1 className="text-xl font-bold text-blue-200">{mentor.name}</h1>
                                <p className="text-yellow-200 group-hover:text-white duration-300 text-sm line-clamp-2">
                                    {mentor.expertise}
                                </p>
                                <p className="text-yellow-100 group-hover:text-white duration-300 text-sm line-clamp-2">
                                    {mentor.description}
                                </p>
                                {/* You can add more details like rating, reviews, etc. here */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopMentors;
