import React from 'react';
import { NavLink } from 'react-router-dom';
import naav from '../../../style/navigationUI.module.css'

function NavigationUI() {
  return (
    <>
        <div className={naav.mainContainer}>
            <div className={naav.mainLogo}>
                <NavLink to='/' className={naav.logolink}><h3 className={naav.logotext}>Feliciano</h3></NavLink>
            </div>
            <div className={naav.linkContainer}>
                <ul className={naav.underline}>
                    <li><NavLink to='/' className={naav.home} >Home</NavLink></li>
                    <li ><NavLink to='/about' className={naav.home} >About</NavLink></li>
                    <li ><NavLink to='/menu' className={naav.home} >Menu</NavLink></li>
                    <li ><NavLink to='/services' className={naav.home} >Services</NavLink></li>
                    <li ><NavLink to='/contact' className={naav.home} >Contact</NavLink></li>
                    <li ><NavLink to='/login' className={naav.homee} >Login</NavLink></li>
                    <li ><NavLink to='/registration' className={naav.homee} >Register</NavLink></li>
                </ul>
            </div>

        </div>
    </>
  )
}

export default NavigationUI