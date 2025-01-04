import React from 'react';
import Home from '../Page/Home/Home';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
    return (
        <div>
           <NavBar></NavBar>
           <div className='min-h-[calc(100vh-316px)]'><Outlet></Outlet></div>
          <Footer></Footer> 
        </div>
    );
};

export default MainLayouts;