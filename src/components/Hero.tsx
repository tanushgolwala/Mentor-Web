import React, { useState } from 'react';
import mentorVid from '../assets/mentor.mp4';

const Hero: React.FC<{ id: string }> = ({ id }) => {

  return (
    <section id={id}>
      <div className='w-full h-screen relative'>
        <video
          className='w-full h-full object-cover'
          src={mentorVid}
          autoPlay
          loop
          muted
        />
        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
          <h1 className='text-6xl drop-shadow-[0px_0px_20px_rgba(0,0,0,1)]'>Mentorify .</h1>
          <h2 className='py-4'>Connect with the best of us!</h2>
          {/* <form
            onSubmit={handleSearch} // Call handleSearch on form submission
            className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1
          rounded-md text-black bg-gray-100/90'
          >
            <div>
              <input
                className='bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none'
                type='text'
                placeholder='Search Mentors...'
                value={searchValue} // Bind input value to searchValue state
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
            <div>
              <button type='submit'>
                <AiOutlineSearch size={20} className='icon' style={{ color: '#ffffff' }} />
              </button>
            </div>
          </form> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
