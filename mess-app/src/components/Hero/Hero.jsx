import React from 'react';
/* import HeroBg from '../images/heroBg.jpg'
import HeroImg from '../images/hero.png' */
import PrimaryButton from '../Shared/PrimaryButton';
import { assests } from '../../assests/assests';

const BgStyle={
  background: `url(${assests.HeroBg})`,
  backgroundRepeat:"no-repeat",
  backgroundPosition:"center",
  backgroundSize:"cover",
  width:"100%",
  height: "90vh"
};


const Hero = () => {
  return (
    <>
      <div style={BgStyle} className='relative z-[-1]'>
        <div className='container py-16 sm:py-0 pt-[10px]'>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
              {/* text content session */}  
              <div className='space-y-7 text-dark order-2 sm:order-1'>
                <h1 data-aos="fade-up" className='text-5xl'>Fresh & healthy Meal Plan <span className='text-secondary font-cursive text-7xl'>delivery</span>{" "} in miami</h1>
                <p data-aos="fade-up" data-aos-delay="300" className='lg:pr-64'>Delicious meals delivered to your door from $132.95per week..</p>

                {/* button section */}
                <div data-aos="fade-up" data-aos-delay="500" className=''>
                  <PrimaryButton/>
                </div>
              </div>
              {/* image section */} 
              {/* <div data-aos="fade-up" data-aos-delay="300" className=' relative z-30 order-1 sm:order-2'>
                <img src={assests.Hero} className='w-[200px] h-[300px]'></img>

              </div> */}
            </div>
        </div>
      </div>
    </>
  )
}

export default Hero
