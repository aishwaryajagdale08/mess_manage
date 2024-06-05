import React from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext';
import { useContext } from 'react'
const PlaceOrder = () => {

    const {getTotalCartAmount}= useContext(StoreContext);
  return (
        <form className='place-order'>
          
          <div className='place-order-left'>
            <p className='title'>Delivery Information</p>
            <div className='multi-fields'>
              <input type='text' placeholder='First name'/>
              <input type='text' placeholder='Last name'/>
            </div>
            <div className='multi-fields'>
              <input type='text' placeholder='Email Id'/>
              
            </div>
            <div className='multi-fields'>
              <input type='text' placeholder='Street'/>
            </div>

            <div className='multi-fields'>
              <input type='text' placeholder=' City'/>
              <input type='text' placeholder=' State'/>
            </div>

            <div className='multi-fields'>
              <input type='text' placeholder='Zip code'/>
              <input type='text' placeholder='Country'/>
            </div>

              <input type='text' placeholder='Phone'/>
          </div>

         <div className='cart-bottom'> 
          <div className='cart-total'>
              <h2>Cart Totals</h2>
              <div>
                <div className='cart-total-details'>
                  <p> Sub Total:</p>
                  <p>rs{getTotalCartAmount()}</p>
                </div>

                <hr/>

                <div className='cart-total-details'>
                  <p>Delivery Fee:</p>
                  <p>Rs Free</p>
                </div>

                <div className='cart-total-details'>
                  <b>Total:</b>
                  <b>{getTotalCartAmount()}</b>
                </div>

              </div>
                    <button > PROCEED TO PAYMENT </button>
               </div>
            </div>

    </form>
  )
}

export default PlaceOrder