import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/home';
import About from './Pages/about';
import Menu from './Pages/menu';
import Services from './Pages/services';
import Contact from './Pages/contact';
import Login from './Pages/login';
import Registration from './Pages/registration';
import NavigationUI from './Pages/HomePageComponents/navigationUI';

function Navigate() {
  return (
    <>
        <BrowserRouter >
            <NavigationUI />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/menu' element={<Menu />}/>
                <Route path='/services' element={<Services />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/registration' element={<Registration />}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Navigate