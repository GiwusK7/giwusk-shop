import React from 'react'

const About = () => {
  return (
    <>
      <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>
        <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl '>
          We love
        </h1>
        <div className='stats bg-primary shadow'>
          <div className='stat'>
            <div className='stat-title text-primary-content text-4xl font-bold tracking-widest'>
              Giwus Shop
            </div>
          </div>
        </div>
      </div>
      <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
      Online shopping can be convenient and time-saving, allowing shoppers to shop from home without visiting physical stores. Online platforms may also offer exclusive deals, discounts, and a wider selection of products.
      <br /><span>Give Giwus Shop a try!</span>
      </p>
    </>
  );
};
export default About;