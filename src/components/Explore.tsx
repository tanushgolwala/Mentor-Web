import React, { useState } from 'react';
import mentorVid from '../assets/mentor.mp4';

const Explore: React.FC<{ id: string }> = ({ id }) => {

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
                    <h1 className='text-6xl drop-shadow-[0px_0px_20px_rgba(0,0,0,1)]'>Explore .</h1>
                    <h2 className='py-4'>Connect with the best of us!</h2>

                </div>
            </div>
        </section>
    );
};

export default Explore;
