import React from 'react';
import bg from '../../style/AboutPageCSS/aboutbgimg.module.css';

import HomeAbout from './HomePageComponents/Homeabout';
import HomeserviceComponent from './HomePageComponents/HomeserviceComponent';
import Homemenu from './HomePageComponents/Homemenu';
import Footer from '../Pages/HomePageComponents/footer';
import naav from '../../Components/navigate';

import { NavLink } from 'react-router-dom';

function About() {
  return (
    <>
      <div className={bg.mainContainer}>
         <h1>ABOUT</h1>
         <div className={bg.breadcrumb}>
           <NavLink to='/' className={bg.moreServices}><p>Home {'>'}</p></NavLink>
           <NavLink to='/about' className={bg.moreServices}><p>About {'>'}</p></NavLink>
         </div>
      </div>
        
        <HomeAbout />
        <HomeserviceComponent /> 
        <Homemenu />
        <Footer />
    </>
  )
}

export default About;