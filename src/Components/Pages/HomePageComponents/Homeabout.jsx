import React from 'react';

import chefone from '../../../Images/chef.jpg';
import cheftwo from '../../../Images/chefone.jpg';

import abt from '../../../style/HomePageCSS/abtdesign.module.css';

function HomeAbout() {
  return (
    <>
      <div className={abt.homeABTmainContainer}>
          <div className={abt.imgTextContainer}>
              <div className={abt.imgContainer}>
                  <div className={abt.firstchef}>
                    <img src={chefone} alt="" className={abt.chefone} />
                  </div>
                  <div className={abt.secondchef}>
                    <img src={cheftwo} alt="" className={abt.cheftwo} />
                  </div>
              </div>
              <div className={abt.textContainer}>
                  <h1 className={abt.mainTitle}><p className={abt.aboutTitle}>About</p><span className={abt.aboutFeliciano}>Feliciano</span> <br /> <span className={abt.aboutRestaurant}>Restaurant</span></h1>
                  <p className={abt.abouttext}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae debitis fugiat facere quo? Deleniti architecto odit quia! Minima delectus doloribus quidem fuga consequatur laborum expedita et consequuntur! Distinctio quisquam iusto ab obcaecati inventore reprehenderit quasi consequuntur fugiat. Animi suscipit amet minima odit enim vero corporis aspernatur facilis,  </p>
                  <p className={abt.aboutDay}>Mon-Fri <span className={abt.aboutTime}>8am-11pm</span></p>
                  <p className={abt.aboutContact}>+91 987-456-3210</p>
              </div>
          </div>
          <div className={abt.counterContainer}>
              <div className={abt.exp}>
                <p className={abt.number}>12</p>
                <p className={abt.year}>YEARS OF EXPERIENCED</p>
              </div>
              <div className={abt.menuDish}>
                <p className={abt.number}>100</p>
                <p className={abt.year}>MENUS/DISH</p>
              </div>
              <div className={abt.numberStaff}>
                <p className={abt.number}>50</p>
                <p className={abt.year}>STAFFS</p>
              </div>
              <div className={abt.average}>
                <p className={abt.number}>15000</p>
                <p className={abt.year}>HAPPY CUSTOMERS</p>
              </div>
          </div>
      </div>
    </>
  )
}

export default HomeAbout;