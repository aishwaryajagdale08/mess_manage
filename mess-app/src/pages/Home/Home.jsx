import React, { useState } from 'react'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import './Home.css'
/* import Header from '../../components/Header/Header' */
import 'bootstrap/dist/css/bootstrap.min.css'
import Carouselimage from '../../components/Carouselimage/Carouselimage'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero';
import {useEffect} from 'react';
import AOS from"aos";
import "aos/dist/aos.css";
import Index from '../../components/Index/Index'
import LunchMenu from '../../components/LunchMenu/LunchMenu'
const Home = () => {

  const[category,setCategory] = useState("All");
  useEffect(()=> {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  },[]);
 

  return (
    <div className='home'>
      {/* <Header></Header> */}
      <Carouselimage></Carouselimage>
      <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
      {/* <FoodDisplay category={category}></FoodDisplay> */}
      <FoodDisplay category={category}></FoodDisplay>
      <LunchMenu></LunchMenu>
      {/* <Hero></Hero> */}
      <Index></Index>
      <Footer></Footer>
    </div>
  )
}

export default Home
