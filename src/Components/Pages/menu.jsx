import React, { useState } from 'react'
import Breakfast from './MenuPageComponents/breakfast';
import Lunch from './MenuPageComponents/lunch';
import Dinner from './MenuPageComponents/dinner';
import Drinks from './MenuPageComponents/drinks';
import Dessert from './MenuPageComponents/dessert';
import Wines from './MenuPageComponents/wines';

import menu from '../../style/MenuPageCSS/menu.module.css';
import { NavLink } from 'react-router-dom';

import Footer from '../../Components/Pages/HomePageComponents/footer';

function Menu() {

  const [state , setState] = useState(false);
  const [lunch, setLunch] = useState(false);
  const [dinner, setDinner] = useState(false);
  const [drinks, setDrinks] = useState(false);
  const [dessert , setDessert] = useState(false);
  const [wines, setWiines] = useState(false);

  function handler(){
    if(state == true){
      setState(false);
    } else {
      setState(true);
    }
  }

  function handlertwo(){
    if(lunch == true){
      setLunch(false);
    } else {
      setLunch(true);
    }
  }

  function handlerthree(){
    if(dinner == true){
      setDinner(false);
    } else {
      setDinner(true);
    }
  }

  function handlerfour(){
    if(drinks == true){
      setDrinks(false);
    } else {
      setDrinks(true);
    }
  }

  function handlerfive(){
    if(dessert == true){
      setDessert(false);
    } else {
      setDessert(true);
    }
  }

  function handlersix(){
    if(wines == true){
      setWiines(false);
    } else {
      setWiines(true);
    }
  }

  return (
    <>
      <div className={menu.mainMenuContainer}>
        <div className={menu.mainContainer}>
          <h1>Menu</h1>
          <div className={menu.breadcrumb}>
            <NavLink to='/' className={menu.moreServices}><p>Home {'>'}</p></NavLink>
            <NavLink to='/menu' className={menu.moreServices}><p>Menu {'>'}</p></NavLink>
          </div>
        </div>
        <div className={menu.titleContainer}>
          <h1 className={menu.mainTitle}><p className={menu.serviceTitle}>Specialities</p><span className={menu.serviceFeliciano}>Our</span> <span className={menu.serviceRestaurant}>Menu</span></h1>
        </div>
        <div className={menu.buttons}>
          <button onClick={handler} className={menu.menuBtn}>Breakfast</button>
          {state && <Breakfast />}
          <button onClick={handlertwo} className={menu.menuBtn}>Lunch</button>
          {lunch && <Lunch />}
          <button onClick={handlerthree} className={menu.menuBtn}>Dinner</button>
          {dinner && <Dinner />}
          <button onClick={handlerfour} className={menu.menuBtn}>Drinks</button>
          {drinks && <Drinks />}
          <button onClick={handlerfive} className={menu.menuBtn}>Dessert</button>
          {dessert && <Dessert />}
          <button onClick={handlersix} className={menu.menuBtn}>Wines</button>
          {wines && <Wines />}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Menu;