import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
const PrimaryButton = () => {
  return (
    <>
    <div className='flex items-center group'>
        <button className='bg-secondary h-[40px] text-black px-4 py-2'>Choose your Menu</button>
        <FaArrowRight className="inline-block group-hover:!translate-x-2 duration-150 p-2 text-base h-[40px] w-[40px] bg-primaryDark text-white" ></FaArrowRight>
    </div>
    </>
  );
};

export default PrimaryButton;
