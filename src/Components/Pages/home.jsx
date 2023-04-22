import React from 'react';
import bgone from '../../Images/home-bg1.jpg';
import bgtwo from '../../Images/home-bg2.jpg';
import bgthree from '../../Images/home-bg3.jpg';
import bgfour from '../../Images/home-bg4.jpg';

import Typed from 'react-typed';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bg from '../../style/HomePageCSS/backgroundslider.module.css';
import HomeAbout from './HomePageComponents/Homeabout';
import HomeserviceComponent from './HomePageComponents/HomeserviceComponent';
import Homemenu from './HomePageComponents/Homemenu';
import Homechef from './HomePageComponents/Homechef';
import Footer from '../Pages/HomePageComponents/footer';

function Home() {
  var setting={
    fade: true,
    autoplay: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <div className={bg.imageMainContainer}>
          <Slider {...setting} className={bg.slider}>
            <div className={bg.firstimage}>
              <img src={bgone} alt=""  className={bg.firstimg}/>
            </div>
            <div className={bg.secondimage}>
              <img src={bgtwo} alt=""  className={bg.secondimg}/>
            </div>
            <div className={bg.thirdimage}>
              <img src={bgthree} alt=""   className={bg.thirdimg}/>
            </div>
            <div className={bg.fourthimage}>
              <img src={bgfour} alt=""   className={bg.fourthimg}/>
            </div>
          </Slider>
          <div className={bg.typeContainer}>
            <div className={bg.textContainer}>
              <h1 className={bg.text}>Open for Delivery and Pickup</h1>
              <h1 className={bg.plant}>Plant Based Satisfaction</h1>
            </div>
            <Typed 
              strings={[
                "Foodies Welcome Here.",
                "Fun. Fast. Tasty. Delicious.",
                "Good Food. Good Mood.",
                "Real. Fresh. Food."
              ]}
              typeSpeed={100}
              backSpeed={150}
              loop
              className={bg.autotype}
            /><br />
            <button>Check For Dishes</button>
          </div>
          
        <HomeAbout />
        <HomeserviceComponent /> 
        <Homemenu />
        <Homechef />
        <Footer />
      </div>
    </>
  )
}

export default Home;