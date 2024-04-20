import React from "react";
import Products from "../components/Products";
import Navbar2 from "../components/Navbar2";
import Explore from "../components/Explore";
import footerLogo from "../assets/logo.svg";
import Footer from "../components/Footer";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa";


interface FooterLink {
    title: string;
    link: string;
}

const FooterLinks: FooterLink[] = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
];


const Listing = () => {
    return (
        <div>
            <Navbar2 />
            <Explore id={""} />
            <div className="flex items-center justify-center bg-gradient-to-b from-black to-white h-12"></div>
            <Products />
            {/* <Footer /> */}
            <div className="bg-black justify-between text-white grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                <div>
                    <div className="py-8 px-4 justify-center">
                        <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                            <img src={footerLogo} alt="" className="max-w-[50px]" />
                            Mentorify.
                        </h1>
                        <p>
                            Find an ideal mentor for enhancing your skillset!
                        </p>
                    </div>

                </div>
                {/* social links */}

                <div className="flex-end">
                    <div className="flex items-center gap-3 mt-6">
                        <a href="#">
                            <FaInstagram className="text-3xl" />
                        </a>
                        <a href="#">
                            <FaFacebook className="text-3xl" />
                        </a>
                        <a href="#">
                            <FaLinkedin className="text-3xl" />
                        </a>
                    </div>
                    <div className="mt-6">
                        <div className="flex items-center gap-3">
                            <FaLocationArrow />
                            <p>VIT Vellore, Tamil Nadu</p>
                        </div>
                        <div className="flex items-center gap-3 mt-3">
                            <FaMobileAlt />
                            <p>+91 123456789</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Listing;