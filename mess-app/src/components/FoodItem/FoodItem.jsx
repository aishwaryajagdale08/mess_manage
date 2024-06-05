
import React, { useContext } from 'react';
import './FoodItem.css';
import { assests } from '../../assests/assests';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, image, category, desc}) => {
    /* const [itemCount, setItemCount] = useState(0); */
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className="food-item-image" src={image} alt='' />
                {!cartItems[id]
                    ? <img className='add' onClick={() => addToCart(id)} src={assests.add_icon_white} alt='' />
                    : <div className='food-item-counter'>
                        <img onClick={() =>removeFromCart(id)}  src={assests.remove_icon_red} alt='' />
                        <p>{cartItems[id]}</p>
                        <img onClick={() =>addToCart(id)} src={assests.add_icon_white} alt='' />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>Name: {name}</p>
                    {/* <img></img>star rating */}
                </div>
                <p className="food-item-desc">Description:{desc}</p>
                <p className="food-item-price">Price: Rs {price}</p>
                <p className="food-item-category">Category: {category}</p>
            </div>
        </div>
    );
};

export default FoodItem;
