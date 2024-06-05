import React from 'react'
import './Sidebar.css'
/* import { NavLink } from 'react-router-dom' */
import { NavLink } from 'react-router-dom'
import {assets} from '../../admin_assets/assets'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-options'>
        <NavLink to='/add' className='sidebar-option' activeClassname='active'>
          <img src= {assets.add_icon} alt="Add_icon"/>
          <p>Add Items</p>
        </NavLink>

        <NavLink to='/list' className='sidebar-option' activeClassname='active'>
          <img src= {assets.order_icon} alt="List_icon"/>
          <p>List Items</p>
        </NavLink>

        <NavLink to ='/order' className='sidebar-option' activeClassname='active'>
          <img src= {assets.order_icon} alt=" order_icon"/>
          <p>Order Items</p>
        </NavLink>

      </div>
      
    </div>
  )
}

export default Sidebar