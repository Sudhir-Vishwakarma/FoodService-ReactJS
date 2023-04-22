import React from 'react'

import menuone from '../../../Images/menu1.jpg';
import menutwo from '../../../Images/menu2.jpg';
import menuthree from '../../../Images/menu3.jpg';
import menufour from '../../../Images/menu4.jpg';
import menufive from '../../../Images/menu5.jpg';
import menusix from '../../../Images/menu6.jpg';
import menuseven from '../../../Images/menu7.jpg';
import menueight from '../../../Images/menu8.jpg';

import menuu from '../../../style/HomePageCSS/menu.module.css';
import { NavLink } from 'react-router-dom';

function Homemenu() {
  return (
    <>
        <div className={menuu.firstMenuContainer}>
            <div className={menuu.mainMenuContainer}>
                <div className={menuu.titleContainer}>
                    <h1 className={menuu.mainTitle}><p className={menuu.serviceTitle}>Specialities</p><span className={menuu.serviceFeliciano}>Our</span> <span className={menuu.serviceRestaurant}>Menu</span></h1>
                </div>
                <div className={menuu.dishesContainer}>
                    <div className={menuu.imgMenuContainer}>
                        <img src={menuone} alt="" width='50px' height='50px'/>
                    </div>
                    <div className={menuu.riceContainer}>
                        <div className={menuu.fried}>
                            <p className={menuu.ricePrice}>Fried Rice</p>
                            <p className={menuu.price}> $15</p>
                        </div>
                        <div className={menuu.riceText}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, accusamus. amet consectetur adipisicing</p>
                        </div>
                        <NavLink to='/menu' className={menuu.moreServices}><button>Order Now</button></NavLink>
                    </div>
                    <div className={menuu.imgMenuContainer}>
                        <img src={menutwo} alt="" width='50px' height='50px'/>
                    </div>
                    <div className={menuu.riceContainer}>
                        <div className={menuu.fried}>
                            <p className={menuu.ricePrice}>Fried Rice</p>
                            <p className={menuu.price}> $15</p>
                        </div>
                        <div className={menuu.riceText}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, accusamus. amet consectetur adipisicing</p>
                        </div>
                        <NavLink to='/menu' className={menuu.moreServices}><button>Order Now</button></NavLink>
                    </div>
                    <div className={menuu.riceContainer}>
                        <div className={menuu.fried}>
                            <p className={menuu.ricePrice}>Fried Rice</p>
                            <p className={menuu.price}> $15</p>
                        </div>
                        <div className={menuu.riceText}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, accusamus. amet consectetur adipisicing</p>
                        </div>
                        <NavLink to='/menu' className={menuu.moreServices}><button>Order Now</button></NavLink>
                    </div>
                    <div className={menuu.imgMenuContainer}>
                        <img src={menuthree} alt="" width='50px' height='50px'/>
                        
                    </div>
                    <div className={menuu.riceContainer}>
                        <div className={menuu.fried}>
                            <p className={menuu.ricePrice}>Fried Rice</p>
                            <p className={menuu.price}> $15</p>
                        </div>
                        <div className={menuu.riceText}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, accusamus. amet consectetur adipisicing</p>
                        </div>
                        <NavLink to='/menu' className={menuu.moreServices}><button>Order Now</button></NavLink>
                    </div>
                    <div className={menuu.imgMenuContainer}>
                        <img src={menufour} alt="" width='50px' height='50px'/>
                    </div>
                    <div className={menuu.imgMenuContainer}>
                        <img src={menufive} alt="" width='50px' height='50px'/>
                    </div>
                    <div className={menuu.riceContainer}>
                        <div className={menuu.fried}>
                            <p className={menuu.ricePrice}>Fried Rice</p>
                            <p className={menuu.price}> $15</p>
                        </div>
                        <div className={menuu.riceText}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, accusamus. amet consectetur adipisicing</p>
                        </div>
                        <NavLink to='/menu' className={menuu.moreServices}><button>Order Now</button></NavLink>
                    </div>
                    <div className={menuu.imgMenuContainer}>
                        <img src={menusix} alt="" width='50px' height='50px'/>
                    </div>
                    <div className={menuu.riceContainer}>
                        <div className={menuu.fried}>
                            <p className={menuu.ricePrice}>Fried Rice</p>
                            <p className={menuu.price}> $15</p>
                        </div>
                        <div className={menuu.riceText}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, accusamus. amet consectetur adipisicing</p>
                        </div>
                        <NavLink to='/menu' className={menuu.moreServices}><button>Order Now</button></NavLink>
                    </div>
                    <div className={menuu.riceContainer}>
                        <div className={menuu.fried}>
                            <p className={menuu.ricePrice}>Fried Rice</p>
                            <p className={menuu.price}> $15</p>
                        </div>
                        <div className={menuu.riceText}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, accusamus. amet consectetur adipisicing</p>
                        </div>
                        <NavLink to='/menu' className={menuu.moreServices}><button>Order Now</button></NavLink>
                    </div>
                    <div className={menuu.imgMenuContainer}>
                        <img src={menuseven} alt="" width='50px' height='50px'/>
                    </div>
                    <div className={menuu.riceContainer}>
                        <div className={menuu.fried}>
                            <p className={menuu.ricePrice}>Fried Rice</p>
                            <p className={menuu.price}> $15</p>
                        </div>
                        <div className={menuu.riceText}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, accusamus. amet consectetur adipisicing</p>
                        </div>
                        <NavLink to='/menu' className={menuu.moreServices}><button>Order Now</button></NavLink>
                    </div>
                    <div className={menuu.imgMenuContainer}>
                        <img src={menueight} alt="" width='50px' height='50px'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Homemenu