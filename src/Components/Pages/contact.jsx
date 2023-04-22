import React from 'react'
import contact from '../../style/ContactPageCSS/contact.module.css';
import Footer from './HomePageComponents/footer';

import { NavLink } from 'react-router-dom';

function Contact() {
  return (
    <>
      <div className={contact.mainContactContainer}>
        <div className={contact.mainContainer}>
              <h1>Contact</h1>
              <div className={contact.breadcrumb}>
                <NavLink to='/' className={contact.moreServices}><p>Home {'>'}</p></NavLink>
                <NavLink to='/contact' className={contact.moreServices}><p>Contact {'>'}</p></NavLink>
              </div>
        </div>
        <div className={contact.mainBgImg}>
            <div className={contact.mainReservation}>
                <div className={contact.titleContainer}>
                    <h1 className={contact.mainTitle}><p className={contact.serviceTitle}>Book a table</p><span className={contact.serviceFeliciano}>Make</span> <span className={contact.serviceRestaurant}>Reservation</span></h1>
                </div>
                <div className={contact.formContainer}>
                    <form action="">
                        <div className={contact.nameEmailContainer}>
                            <div className={contact.nameContainer}>
                                <label htmlFor="">Name</label>
                                <input type="text" placeholder='Enter Your Name'/>
                            </div>
                            <div className={contact.nameContainer}>
                                <label htmlFor="">E-mail</label>
                                <input type="email" placeholder='Enter Your E-mail'/>
                            </div>
                        </div>
                        <div className={contact.nameEmailContainer}>
                            <div className={contact.nameContainer}>
                                <label htmlFor="">Phone</label>
                                <input type="text" placeholder='Enter Your Contact'/>
                            </div>
                            <div className={contact.nameContainer}>
                                <label htmlFor="">Date</label>
                                <input type="date" placeholder='Enter Date'/>
                            </div>
                        </div>
                        <div className={contact.nameEmailContainer}>
                            <div className={contact.nameContainer}>
                                <label htmlFor="">Time</label>
                                <input type="time" placeholder='Enter Time'/>
                            </div>
                            <div className={contact.nameContainer}>
                                <label htmlFor="">Person</label>
                                <input type="number" placeholder='Number Of Person'/>
                            </div>
                        </div>
                        <div className={contact.buttons}>
                            <button className={contact.btn}>Make a Reservation</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact