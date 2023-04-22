import React, { useState } from 'react';
import service from '../../style/ServicePageCSS/service.module.css';
import Birthday from './ServicePageComponent/birthday';
import Business from './ServicePageComponent/business';
import Wedding from './ServicePageComponent/wedding';

import Footer from './HomePageComponents/footer';
import { NavLink } from 'react-router-dom';

function Services() {

  const [birthday, setBirthday] = useState(false);
  const [business, setBusiness] = useState(false);
  const [wedding, setWedding] = useState(false);

  function handler(){
    if(birthday == true){
      setBirthday(false);
    } else {
      setBirthday(true);
    }
  }

  function handlertwo(){
    if(business == true){
      setBusiness(false);
    } else {
      setBusiness(true);
    }
  }

  function handlerthree(){
    if(wedding == true){
      setWedding(false);
    } else {
      setWedding(true);
    }
  }

  return (
    <>
      <div className={service.mainServiceContainer}>
        <div className={service.mainContainer}>
            <h1>Services</h1>
            <div className={service.breadcrumb}>
              <NavLink to='/' className={service.moreServices}><p>Home {'>'}</p></NavLink>
              <NavLink to='/services' className={service.moreServices}><p>service {'>'}</p></NavLink>
            </div>
        </div>
        <div className={service.titleContainer}>
          <h1 className={service.mainTitle}><p className={service.serviceTitle}>Services</p><span className={service.serviceFeliciano}>Catering</span> <span className={service.serviceRestaurant}>Services</span></h1>
        </div>
        <div className={service.mainCatering}>
          <div className={service.birthdayCatering} onClick={handler}>
              <h1>Birthday Party</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate minima voluptatum impedit odit expedita nihil eveniet, ullam quidem dignissimos doloremque repudiandae ex quos quisquam eius sequi non pariatur exercitationem perspiciatis consequatur voluptatem accusantium? Sint, quisquam? Quam, esse omnis, unde voluptate magni blanditiis dignissimos iure, praesentium eum optio incidunt minus delectus.</p>
              <button>Explore More</button>
           {birthday && <Birthday />}
          </div>
          <div className={service.birthdayCatering} onClick={handlertwo}>
              <h1>Business Meeting</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate minima voluptatum impedit odit expedita nihil eveniet, ullam quidem dignissimos doloremque repudiandae ex quos quisquam eius sequi non pariatur exercitationem perspiciatis consequatur voluptatem accusantium? Sint, quisquam? Quam, esse omnis, unde voluptate magni blanditiis dignissimos iure, praesentium eum optio incidunt minus delectus.</p>
              <button>Explore More</button>
              {business && <Business />}
          </div>
          <div className={service.birthdayCatering} onClick={handlerthree}>
              <h1>Wedding Party</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate minima voluptatum impedit odit expedita nihil eveniet, ullam quidem dignissimos doloremque repudiandae ex quos quisquam eius sequi non pariatur exercitationem perspiciatis consequatur voluptatem accusantium? Sint, quisquam? Quam, esse omnis, unde voluptate magni blanditiis dignissimos iure, praesentium eum optio incidunt minus delectus.</p>
              <button>Explore More</button>
              {wedding && <Wedding />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Services