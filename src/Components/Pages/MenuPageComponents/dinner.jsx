import React from 'react';

import breakfastone from '../../../Images/dinner1.jpg';
import breakfasttwo from '../../../Images/dinner2.jpg';
import breakfastthree from '../../../Images/dinner3.jpg';
import breakfastfour from '../../../Images/dinner4.jpg';
import breakfastfive from '../../../Images/dinner5.jpg';
import breakfastsix from '../../../Images/dinner6.jpg';
import breakfastseven from '../../../Images/dinner7.jpg';
import breakfasteight from '../../../Images/dinner8.jpg';
import breakfastnine from '../../../Images/dinner9.jpg';
import breakfastten from '../../../Images/dinner10.jpg';
import breakfasteleven from '../../../Images/dinner11.jpg';
import breakfasttwelve from '../../../Images/dinner12.jpg';

import { NavLink } from 'react-router-dom';
import bf from '../../../style/MenuPageCSS/breakfast.module.css';

function Dinner(){
    return(
        <>
            <div className={bf.mainBfContainer}>
                <div className={bf.dishesContainer}>
                    <div className={bf.imgMenuContainer}>
                        <img src={breakfastone} alt="" width='50px' height='50px'/>
                    </div>
                    <div className={bf.riceContainer}>
                        <div className={bf.fried}>
                            <p className={bf.ricePrice}>Idli</p>
                            <p className={bf.price}> $15</p>
                        </div>
                        <div className={bf.riceText}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, accusamus. amet consectetur adipisicing</p>
                        </div>
                        <NavLink to='/menu' className={bf.moreServices}><button>Order Now</button></NavLink>
                    </div>
                    <div className={bf.imgMenuContainer}>
                        <img src={breakfasttwo} alt="" width='50px' height='50px'/>
                    </div>
                    <div className={bf.riceContainer}>
                        <div className={bf.fried}>
                            <p className={bf.ricePrice}>MenduWada</p>
                            <p className={bf.price}> $15</p>
                        </div>
                        <div className={bf.riceText}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, accusamus. amet consectetur adipisicing</p>
                        </div>
                        <NavLink to='/menu' className={bf.moreServices}><button>Order Now</button></NavLink>
                    </div>
                    <div className={bf.riceContainer}>
                        <div className={bf.fried}>
                            <p className={bf.ricePrice}>Samosa</p>
                            <p className={bf.price}> $15</p>
                        </div>
                        <div className={bf.riceText}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, accusamus. amet consectetur adipisicing</p>
                        </div>
                        <NavLink to='/menu' className={bf.moreServices}><button>Order Now</button></NavLink>
                    </div>
                    <div className={bf.imgMenuContainer}>
                        <img src={breakfastthree} alt="" width='50px' height='50px'/>
                        
                    </div>
                    <div className={bf.riceContainer}>
                        <div className={bf.fried}>
                            <p className={bf.ricePrice}>Boil Egg</p>
                            <p className={bf.price}> $15</p>
                        </div>
                        <div className={bf.riceText}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, accusamus. amet consectetur adipisicing</p>
                        </div>
                        <NavLink to='/menu' className={bf.moreServices}><button>Order Now</button></NavLink>
                    </div>
                    <div className={bf.imgMenuContainer}>
                        <img src={breakfastfour} alt="" width='50px' height='50px'/>
                    </div>
                    <div className={bf.imgMenuContainer}>
                        <img src={breakfastfive} alt="" width='50px' height='50px'/>
                    </div>
                    <div className={bf.riceContainer}>
                        <div className={bf.fried}>
                            <p className={bf.ricePrice}>Sabudana</p>
                            <p className={bf.price}> $15</p>
                        </div>
                        <div className={bf.riceText}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, accusamus. amet consectetur adipisicing</p>
                        </div>
                        <NavLink to='/menu' className={bf.moreServices}><button>Order Now</button></NavLink>
                    </div>
                    <div className={bf.imgMenuContainer}>
                        <img src={breakfastsix} alt="" width='50px' height='50px'/>
                    </div>
                    <div className={bf.riceContainer}>
                        <div className={bf.fried}>
                            <p className={bf.ricePrice}>Bhajiya</p>
                            <p className={bf.price}> $15</p>
                        </div>
                        <div className={bf.riceText}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, accusamus. amet consectetur adipisicing</p>
                        </div>
                        <NavLink to='/menu' className={bf.moreServices}><button>Order Now</button></NavLink>
                    </div>
                    <div className={bf.riceContainer}>
                        <div className={bf.fried}>
                            <p className={bf.ricePrice}>Half Fry</p>
                            <p className={bf.price}> $15</p>
                        </div>
                        <div className={bf.riceText}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, accusamus. amet consectetur adipisicing</p>
                        </div>
                        <NavLink to='/menu' className={bf.moreServices}><button>Order Now</button></NavLink>
                    </div>
                    <div className={bf.imgMenuContainer}>
                        <img src={breakfastseven} alt="" width='50px' height='50px'/>
                    </div>
                    <div className={bf.riceContainer}>
                        <div className={bf.fried}>
                            <p className={bf.ricePrice}>Pav Bhaji</p>
                            <p className={bf.price}> $15</p>
                        </div>
                        <div className={bf.riceText}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, accusamus. amet consectetur adipisicing</p>
                        </div>
                        <NavLink to='/menu' className={bf.moreServices}><button>Order Now</button></NavLink>
                    </div>
                    <div className={bf.imgMenuContainer}>
                        <img src={breakfasteight} alt="" width='50px' height='50px'/>
                    </div>
                    <div className={bf.imgMenuContainer}>
                        <img src={breakfastnine} alt="" width='50px' height='50px'/>
                    </div>
                    <div className={bf.riceContainer}>
                        <div className={bf.fried}>
                            <p className={bf.ricePrice}>Dosa</p>
                            <p className={bf.price}> $15</p>
                        </div>
                        <div className={bf.riceText}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, accusamus. amet consectetur adipisicing</p>
                        </div>
                        <NavLink to='/menu' className={bf.moreServices}><button>Order Now</button></NavLink>
                    </div>
                    <div className={bf.imgMenuContainer}>
                        <img src={breakfastten} alt="" width='50px' height='50px'/>
                    </div>
                    <div className={bf.riceContainer}>
                        <div className={bf.fried}>
                            <p className={bf.ricePrice}>Puri Sabji</p>
                            <p className={bf.price}> $15</p>
                        </div>
                        <div className={bf.riceText}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, accusamus. amet consectetur adipisicing</p>
                        </div>
                        <NavLink to='/menu' className={bf.moreServices}><button>Order Now</button></NavLink>
                    </div>
                    <div className={bf.riceContainer}>
                        <div className={bf.fried}>
                            <p className={bf.ricePrice}>Egg Dosa</p>
                            <p className={bf.price}> $15</p>
                        </div>
                        <div className={bf.riceText}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, accusamus. amet consectetur adipisicing</p>
                        </div>
                        <NavLink to='/menu' className={bf.moreServices}><button>Order Now</button></NavLink>
                    </div>
                    <div className={bf.imgMenuContainer}>
                        <img src={breakfasteleven} alt="" width='50px' height='50px'/>
                    </div>
                    <div className={bf.riceContainer}>
                        <div className={bf.fried}>
                            <p className={bf.ricePrice}>Omlet</p>
                            <p className={bf.price}> $15</p>
                        </div>
                        <div className={bf.riceText}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, accusamus. amet consectetur adipisicing</p>
                        </div>
                        <NavLink to='/menu' className={bf.moreServices}><button>Order Now</button></NavLink>
                    </div>
                    <div className={bf.imgMenuContainer}>
                        <img src={breakfasttwelve} alt="" width='50px' height='50px'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dinner;