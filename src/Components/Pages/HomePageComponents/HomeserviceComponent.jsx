import React from 'react'

import birthday from '../../../Icons/birthday.png';
import business from '../../../Icons/meeting.png';
import Wedding from '../../../Icons/couple.png';

import sir from '../../../style/HomePageCSS/service.module.css';
import { NavLink } from 'react-router-dom';

function HomeserviceComponent() {
  return (
    <>
        <div className={sir.mainContainer}>
            <h1 className={sir.mainTitle}><p className={sir.serviceTitle}>Services</p><span className={sir.serviceFeliciano}>Catering</span> <span className={sir.serviceRestaurant}>Services</span></h1>
            <div className={sir.serviceSection}>
                <div className={sir.mainBirthday}>
                    <div>
                        <img src={birthday} alt="" width='50px' height='50px'/>
                    </div>
                    <div className={sir.servicesTitle}>Birthday party</div>
                    <div className={sir.serviceText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, ipsa vitae! Suscipit corporis ab nulla exercitationem, expedita nam? Labore quod similique, error voluptatem, cum omnis neque sint tempore ducimus</div>
                </div>
                <div className={sir.mainBusiness}>
                    <div>
                        <img src={business} alt="" width='50px' height='50px'/>
                    </div>
                    <div className={sir.servicesTitle}>Business Meeting</div>
                    <div className={sir.serviceText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, ipsa vitae! Suscipit corporis ab nulla exercitationem, expedita nam? Labore quod similique, error voluptatem, cum omnis neque sint tempore ducimus</div>
                </div>
                <div className={sir.mainWedding}>
                    <div>
                        <img src={Wedding} alt="" width='50px' height='50px'/>
                    </div>
                    <div className={sir.servicesTitle}>Wedding Party</div>
                    <div className={sir.serviceText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, ipsa vitae! Suscipit corporis ab nulla exercitationem, expedita nam? Labore quod similique, error voluptatem, cum omnis neque sint tempore ducimus</div>
                </div>
            </div> 
            <NavLink to='/services' className={sir.moreServices}><button>More Services</button></NavLink>  
        </div>
    </>
  )
}

export default HomeserviceComponent;