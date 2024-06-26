import React, { useState } from "react";
import blur from "../assets/blur.mp4";
import backImg from "../assets/back.svg";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5001/signup/mentee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Sign up data sent successfully");
        window.alert("Sign up successful, Please Login to continue");
        window.location.href = "/login";
      } else {
        console.error(
          "Sending sign up data unsuccessful:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error sending sign up data:", error);
    }
  };

  return (
    <section
      className="bg-[#1e1e1e] min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${backImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* login container */}
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-centerz z-10 align-middle">
        {/* form */}
        <div className="md:w-1/2 px-8 md:px-16 self-center">
          <h2 className="font-bold text-2xl text-[#002D74]">Register</h2>
          <p className="text-xs mt-4 text-[#002D74]">
            If you are a new member, easily register
          </p>

          <form
            action=""
            onSubmit={handleSignUpSubmit}
            className="flex flex-col gap-4"
          >
            <input
              className="p-2 mt-8 rounded-xl border w-full"
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
            />
            <input
              className="p-2 rounded-xl border"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />

            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="gray"
                className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
            </div>
            <input
              className="p-2 rounded-xl border"
              type="text"
              name="domain"
              placeholder="Domain"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
            >
              Register
            </button>
          </form>

          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>

          <div className="mt-3 text-xs flex flex-col justify-between items-center text-[#002D74]">
            <p>Already have an account?</p>
            <button
              onClick={() => {
                window.location.href = "/login";
              }}
              className="mt-3 py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
            >
              Login
            </button>
          </div>
        </div>

        {/* image */}
        <div className="md:block hidden w-1/2">
          <video src={blur} loop autoPlay muted className="rounded-2xl" />
        </div>
      </div>
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{ zIndex: 1 }}
      ></div>
    </section>
  );
};
export default Register;
