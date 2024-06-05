import React, { useContext } from 'react';
import './LunchMenu.css'
import FoodItem from '../FoodItem/FoodItem';
import { StoreContext} from '../../context/StoreContext';

const LunchMenu = ({ category }) => {
  const { lunch_list } = useContext(StoreContext);

  if (!lunch_list) {
    return <div>Loading...</div>; // Add a loading state
  }

  const filteredLunchList = category === "All" ? lunch_list : lunch_list.filter(item => item.category === category);

  return (
    <div data-aos="fade-up" data-aos-delay="300" className='lunch-display' id='lunch-display'>
      <h2>Top dishes near you</h2>
      <div className='lunch-display-list'>
       {filteredLunchList.map((item, index) => (
          <FoodItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} category={item.category} />
        ))}
      </div>
    </div>
  );
};

export default LunchMenu;
