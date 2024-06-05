import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount  } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
      
      {food_list.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        food_list.map((item, index) => {
          if (cartItems[item._id]) {
            return (
              <div>
                  <div key={index} className="cart-items-title cart-items-item">
                    <img src={item.image} alt=""></img>
                    <p>{item.name}</p>
                    <p>Rs{item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>Rs{item.price * cartItems[item._id]}</p>
                    <button className="cross" onClick={() => removeFromCart(item._id)}>Remove</button>
                </div>
                <hr></hr>
              </div>
            
            );
          }
          return null;
        })
      )}
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div >
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr></hr>
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>Free</p>
            </div>
            <hr></hr>
            <div className='cart-total-details'>
              <p>Total</p>
              <p>Rs{getTotalCartAmount()}</p>
            </div>
          </div>
          
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
      </div>
      {/* <div className="cart-promocode">
        <div>
          <p> If you have a promo code,Enter it here</p>
          <div className="cart-promocode-input">
            <input type='text' placeholder='promo code'></input>
            <button>Submit</button>
          </div>
        </div> 
      </div>*/}
    </div>
  );
};

export default Cart;
