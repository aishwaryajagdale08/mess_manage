import React from 'react';
import { assests } from '../../assests/assests';

const bgstyle = {
  backgroundImage: `url(${assests.Herobackground})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100vh",
  position:"relative",

};

const About = () => {
  return (
    <>
        <div style={bgstyle} className='py-17'>
          
            <div className=' flex flex-col justify-center container min-h-[500px] relative z-40'>
             <h1 data-aos='fade'
              className='pt-30 tracking-wider text-7xl font-semodial  text-white-700 text-center use md:textcenter'>
                
                ABOUT US
            </h1> 
                <div /* data-aos='fade'
                  data-aos-delay='300' */
                  className='bg-white 80  m-250 p-80 my-70'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Qui nisi quidem, beatae nihil voluptatibus ab quaerat tempore, 
                    at libero quo assumenda ducimus,
                    et eum totam repellat? Commodi voluptas numquam omnis.
                </div>  
            </div>
        </div>   
    </>
    
  );
};

export default About;
