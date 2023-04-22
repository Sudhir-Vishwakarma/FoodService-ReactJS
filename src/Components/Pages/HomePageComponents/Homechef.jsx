import React from 'react'

import chefone from '../../../Images/cheftwo.jpg';
import cheftwo from '../../../Images/chefthree.png';
import chefthree from '../../../Images/cheffour.jpg';
import cheffour from '../../../Images/cheffive.jpg';
import testimonyone from '../../../Images/testimonyone.jpg';
import testimonytwo from '../../../Images/testimonytwo.jpg';
import testimonythree from '../../../Images/testimonythree.jpg';
import testimonyfour from '../../../Images/testimonyfour.jpg';
import testimonyfive from '../../../Images/testimonyfive.jpg';
import testimonysix from '../../../Images/testimonysix.jpg';
import testimonyseven from '../../../Images/testimonyseven.jpg';
import testimonyeight from '../../../Images/testimonyeight.jpg';
import facebook from '../../../Icons/facebook.png';
import twitter from '../../../Icons/twitter.png';
import linkedin from '../../../Icons/linkedin.png';
import instagram from '../../../Icons/instagram.png';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import chef from '../../../style/HomePageCSS/chef.module.css';


const items = [
        <div className={chef.firstTesti}>
            <div className={chef.imgFirstTesti}>
                <img src={testimonyone} alt="" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae ad nihil dignissimos cupiditate, mollitia modi natus minus aspernatur numquam a, architecto fugiat facere omnis inventore, obcaecati repellendus est quis.</p>
            <h3>Michael Deep</h3>
        </div>,
        <div className={chef.firstTesti}>
            <div className={chef.imgFirstTesti}>
                <img src={testimonytwo} alt="" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae ad nihil dignissimos cupiditate, mollitia modi natus minus aspernatur numquam a, architecto fugiat facere omnis inventore, obcaecati repellendus est quis.</p>
            <h3>Michael Deep</h3>
        </div>,
        <div className={chef.firstTesti}>
            <div className={chef.imgFirstTesti}>
                <img src={testimonythree} alt="" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae ad nihil dignissimos cupiditate, mollitia modi natus minus aspernatur numquam a, architecto fugiat facere omnis inventore, obcaecati repellendus est quis.</p>
            <h3>Michael Deep</h3>
        </div>,
        <div className={chef.firstTesti}>
            <div className={chef.imgFirstTesti}>
                <img src={testimonyfour} alt="" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae ad nihil dignissimos cupiditate, mollitia modi natus minus aspernatur numquam a, architecto fugiat facere omnis inventore, obcaecati repellendus est quis.</p>
            <h3>Michael Deep</h3>
        </div>,
        <div className={chef.firstTesti}>
            <div className={chef.imgFirstTesti}>
                <img src={testimonyfive} alt="" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae ad nihil dignissimos cupiditate, mollitia modi natus minus aspernatur numquam a, architecto fugiat facere omnis inventore, obcaecati repellendus est quis.</p>
            <h3>Michael Deep</h3>
        </div>,
        <div className={chef.firstTesti}>
            <div className={chef.imgFirstTesti}>
                <img src={testimonysix} alt="" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae ad nihil dignissimos cupiditate, mollitia modi natus minus aspernatur numquam a, architecto fugiat facere omnis inventore, obcaecati repellendus est quis.</p>
            <h3>Michael Deep</h3>
        </div>,
        <div className={chef.firstTesti}>
            <div className={chef.imgFirstTesti}>
                <img src={testimonyseven} alt="" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae ad nihil dignissimos cupiditate, mollitia modi natus minus aspernatur numquam a, architecto fugiat facere omnis inventore, obcaecati repellendus est quis.</p>
            <h3>Michael Deep</h3>
        </div>,
        <div className={chef.firstTesti}>
            <div className={chef.imgFirstTesti}>
                <img src={testimonyeight} alt="" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae ad nihil dignissimos cupiditate, mollitia modi natus minus aspernatur numquam a, architecto fugiat facere omnis inventore, obcaecati repellendus est quis.</p>
            <h3>Michael Deep</h3>
        </div>
  ];

function Homechef() {
  return (
    <>
        <div className={chef.mainChefContainer}>
            <div className={chef.titleContainer}>
                <h1 className={chef.mainTitle}><p className={chef.serviceTitle}>Chef</p><span className={chef.serviceFeliciano}>Our</span> <span className={chef.serviceRestaurant}>Master Chef</span></h1>
            </div>
            <div className={chef.chefImgContainer}>
                <div className={chef.chefoneContainer}>
                    <div className={chef.chefImg}>
                        <img src={chefone} alt="" />
                    </div>
                    <p className={chef.nameText}>Marty Sparks</p>
                    <p className={chef.designation}>Restaurant Owner</p>
                    <div className={chef.iconsContainer}>
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={linkedin} alt="" />
                        <img src={instagram} alt="" />
                    </div>
                </div>
                <div className={chef.chefoneContainer}>
                    <div className={chef.chefImg}>
                        <img src={cheftwo} alt="" />
                    </div>
                    <p className={chef.nameText}>Alex Wilson</p>
                    <p className={chef.designation}>Head Chef</p>
                    <div className={chef.iconsContainer}>
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={linkedin} alt="" />
                        <img src={instagram} alt="" />
                    </div>
                </div>
                <div className={chef.chefoneContainer}>
                    <div className={chef.chefImg}>
                        <img src={chefthree} alt="" />
                    </div>
                    <p className={chef.nameText}>Jennifer Muse</p>
                    <p className={chef.designation}>Chef</p>
                    <div className={chef.iconsContainer}>
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={linkedin} alt="" />
                        <img src={instagram} alt="" />
                    </div>
                </div>
                <div className={chef.chefoneContainer}>
                    <div className={chef.chefImg}>
                        <img src={cheffour} alt="" />
                    </div>
                    <p className={chef.nameText}>John Doe</p>
                    <p className={chef.designation}>Chef</p>
                    <div className={chef.iconsContainer}>
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={linkedin} alt="" />
                        <img src={instagram} alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className={chef.testimonials}>
            <div className={chef.titleContainer}>
                <h1 className={chef.mainTitle}><p className={chef.serviceTitle}>Testimony</p><span className={chef.serviceFeliciano}>Happy</span> <span className={chef.serviceRestaurant}>Customers</span></h1>
            </div>
            <AliceCarousel 
                autoPlay  
                mouseTracking
                disableButtonsControls
                infinite
                animationDuration={3000} 
                items={items} 
            />
        </div>

        <div className={chef.mainBgImg}>
            <div className={chef.mainReservation}>
                <div className={chef.titleContainer}>
                    <h1 className={chef.mainTitle}><p className={chef.serviceTitle}>Book a table</p><span className={chef.serviceFeliciano}>Make</span> <span className={chef.serviceRestaurant}>Reservation</span></h1>
                </div>
                <div className={chef.formContainer}>
                    <form action="">
                        <div className={chef.nameEmailContainer}>
                            <div className={chef.nameContainer}>
                                <label htmlFor="">Name</label>
                                <input type="text" placeholder='Enter Your Name'/>
                            </div>
                            <div className={chef.nameContainer}>
                                <label htmlFor="">E-mail</label>
                                <input type="email" placeholder='Enter Your E-mail'/>
                            </div>
                        </div>
                        <div className={chef.nameEmailContainer}>
                            <div className={chef.nameContainer}>
                                <label htmlFor="">Phone</label>
                                <input type="text" placeholder='Enter Your Contact'/>
                            </div>
                            <div className={chef.nameContainer}>
                                <label htmlFor="">Date</label>
                                <input type="date" placeholder='Enter Date'/>
                            </div>
                        </div>
                        <div className={chef.nameEmailContainer}>
                            <div className={chef.nameContainer}>
                                <label htmlFor="">Time</label>
                                <input type="time" placeholder='Enter Time'/>
                            </div>
                            <div className={chef.nameContainer}>
                                <label htmlFor="">Person</label>
                                <input type="number" placeholder='Number Of Person'/>
                            </div>
                        </div>
                        <div className={chef.buttons}>
                            <button className={chef.btn}>Make a Reservation</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        
        

    </>
  )
}

export default Homechef