import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';

const Navbar2: React.FC = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
      <div>
        <h1 onClick={handleNav} className={logo ? "hidden" : "block"}>
          MENTORIFY.
        </h1>
      </div>
      <ul className="hidden md:flex">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#catalogue">Catalogue</a>
        </li>
        <li>
          <a href="./">Signout</a>
        </li>
      </ul>
      <div className="hidden md:flex">
        <a href="">
          <BsPerson size={20} />
        </a>
      </div>
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? (
          <AiOutlineClose className="text-black" size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <h1>MENTORIFY.</h1>

          <li>
            <a href="./">Home</a>
          </li>
          <li>
            <a href="./listing">Catalogue</a>
          </li>
          <li>
            <a href="./login">Login</a>
          </li>
          <li>
            <a href="./login">Signup</a>
          </li>
          <div className="flex flex-col">
            <button>Account</button>
          </div>
          <div className="flex justify-between my-6">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
            <FaInstagram className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar2;
