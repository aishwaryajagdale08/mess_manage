import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import { food_list } from '../../assests/assests';
const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  const filteredFoodList = category === "All" ? food_list : food_list.filter(item => item.category === category);

  return (
    <div data-aos="fade-up" data-aos-delay="300" className='food-display' id='food-display'>
      <h2>Top dishes from Breakfast</h2>
      <div className='food-display-list ' >
        {filteredFoodList.map((item, index) => (
          <FoodItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} category={item.category} desc={item.desc}/>
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;

