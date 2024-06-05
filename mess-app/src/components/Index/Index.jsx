import React from 'react'
import { assests } from '../../assests/assests'
import './Index1.css'
const Index = () => {
  return (

    <div class="pos_cen">
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
                integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <img class="img_deg" src={assests.Index}></img>

        <h1>BE TENSION FREE!</h1>
        <h3> On-Time Delivery</h3>
        <br></br>
        <p>You have an option to edit the delivery time that suits your schedule.
        Our fast delivery system will take care of all your need.</p><br></br>
            <h2> <i class="fa-solid fa-square-check icon"></i> Free Delivery</h2>
            <h2><i class="fa-solid fa-square-check icon"></i> Well Wrapped</h2>
            <h2><i class="fa-solid fa-square-check icon"></i> Choose Your Delivery Time</h2>
    </div>
    
  )
}

export default Index
