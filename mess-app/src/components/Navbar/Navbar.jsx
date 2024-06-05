import React, { useState } from 'react'
import './Navbar.css'
import { assests } from '../../assests/assests'
import { Link } from 'react-router-dom'

const Navbar=({setShowLogin}) => {

    const [menu, setmenu] = useState("Menu");


    return (
        <div className='navbar' >
           <Link to="/"><div className='logo_name'>
                TIFFIN<span>TOWN</span>
            </div></Link> 

            <ul className="navbar-menu">
           
                {/* <li onClick = {()=>setmenu("Home")} className={menu==="Home"?"active":""}>Home</li>
                <li onClick = {()=>setmenu("Menu")}className={menu==="Menu"?"active":""}>Menu</li> 
                <li onClick = {()=>setmenu("Contact Us")}className={menu==="Contact Us"?"active":""}>
                    <Link to='/contact'></Link>Contact Us
                    </li> 
                <li onClick = {()=>setmenu("FAQ's")}className={menu==="FAQ's"?"active":""}>FAQ's</li> */}
                {/* <li>
                    <Link to="/">Home</Link>
                </li> */}
                <li>
                    <Link to="/menu">Menu</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/faq">FAQ</Link>
                </li>
                

            </ul>

            <div className="navbar-right">
                {/* <img src={assests.search_icon}/> */}
                <div className="navbar-search-icon">
                    <img src={assests.search_icon}/>
                </div>
                <Link to='/cart'> Cart</Link>
                 <button onClick={()=>setShowLogin(true)} >sign in</button>
            </div>
            
         </div>
    )
}

export default Navbar