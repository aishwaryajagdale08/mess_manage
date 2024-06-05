import React from 'react';
import './ExploreMenu.css';
import { useNavigate } from 'react-router-dom';
import { menu_list } from '../../assests/assests';

const ExploreMenu = ({ category, setCategory }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (menu_name) => {
    setCategory(menu_name);
    if (menu_name === "Lunch") {
      navigate('/lunch');
    } else {
      navigate('/food-display'); // Navigate to FoodDisplay page
    }
  };

  return (
    <div data-aos="fade-up" data-aos-delay="500" className='explore-menu' id='explore-menu'>
      <hr />
      <h1><i>Explore our menu</i></h1>
      <h5 className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes.</h5>
      
      <div data-aos="fade-up" data-aos-delay="300" className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div onClick={() => handleCategoryClick(item.menu_name)} key={index} className='explore-menu-list-item'>
            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
