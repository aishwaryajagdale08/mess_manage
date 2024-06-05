import React, { useState } from 'react';
import { /* BrowserRouter as Router, */ Route, Routes } from 'react-router-dom';
import  StoreContextProvider  from './context/StoreContext';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Navbar from './components/Navbar/Navbar';
import LoginPopup from './components/LoginPopup/LoginPopup';
import ContactForm from './components/Contact/ContactForm';
import FAQ from './components/FAQ/FAQ';
import AboutUs from './components/AboutUs/AboutUs';
import Breakfast from './pages/Breakfast/Breakfast';
import FoodDisplay from './components/FoodDisplay/FoodDisplay'; // Import FoodDisplay
import ExploreMenu from './components/ExploreMenu/ExploreMenu'; // Import ExploreMenu
import LunchMenu from './components/LunchMenu/LunchMenu';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [category, setCategory] = useState("All"); // State to hold selected category

  return (

    <StoreContextProvider>
      {/* <Router> */}
        {showLogin && <LoginPopup setShowLogin={setShowLogin} />} 
        <div className='app'>
          <Navbar setShowLogin={setShowLogin} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order' element={<PlaceOrder />} />
            <Route path='/contact' element={<ContactForm />} />
            <Route path='/faq' element={<FAQ></FAQ>}></Route>
            <Route path='/about' element={<AboutUs />} />
            <Route path='/breakfast' element={<Breakfast />} />

            <Route path='/explore-menu' element={<ExploreMenu category={category} setCategory={setCategory} />} /> {/* Route for ExploreMenu */}
            <Route path='/food-display' element={<FoodDisplay category={category} />} /> {/* Route for FoodDisplay */}
            <Route path='/lunch-menu' element={<LunchMenu category={category} />} /> {/* Route for Lunch MenuDisplay */}
          </Routes>
        </div>
      {/* </Router> */}
    </StoreContextProvider>
  );
}

export default App;
