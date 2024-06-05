import React from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import { Routes,Route} from 'react-router-dom'
import Add from './Components/pages/Add/Add'
import List from './Components/pages/List/List'
import Order from './Components/pages/Order/Order'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const App = () => {
  return (
    <div className='app'>
      <ToastContainer/>
      <Navbar></Navbar>
      <hr></hr>
      <div className='app-content'>
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/add" element={<Add></Add>}></Route>
          <Route path="/list" element={<List></List>}></Route>
          <Route path="/order" element={<Order></Order>}></Route>
        </Routes>
      </div> 
  
    </div>
  )
}

export default App
