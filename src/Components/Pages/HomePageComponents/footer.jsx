import React from 'react';
import foot from '../../../style/HomePageCSS/footer.module.css';

import facebook from '../../../Icons/facebook.png';
import twitter from '../../../Icons/twitter.png';
import linkedin from '../../../Icons/linkedin.png';
import instagram from '../../../Icons/instagram.png';

function Footer() {
  return (
    <>
        <div className={foot.copyright}>
            <div className={foot.mainContainer}>
                <div className={foot.mainHoursContainer}>
                    <div className={foot.titleContainer}>
                        <h3>Open Hours</h3>
                    </div>
                    <div className={foot.scheduleContainer}>
                        <div className={foot.schedule}>
                            <p className={foot.mon}>Monday</p>
                            <p className={foot.monTime}>9:00am - 11:00pm</p>
                        </div>
                        <div className={foot.schedule}>
                            <p className={foot.mon}>Tuesday</p>
                            <p className={foot.monTime}>9:00am - 11:00pm</p>
                        </div>
                        <div className={foot.schedule}>
                            <p className={foot.mon}>Wednesday</p>
                            <p className={foot.monTime}>9:00am - 11:00pm</p>
                        </div>
                        <div className={foot.schedule}>
                            <p className={foot.mon}>Thursday</p>
                            <p className={foot.monTime}>9:00am - 11:00pm</p>
                        </div>
                        <div className={foot.schedule}>
                            <p className={foot.mon}>Friday</p>
                            <p className={foot.monTime}>9:00am - 11:00pm</p>
                        </div>
                        <div className={foot.schedule}>
                            <p className={foot.mon}>Saturday</p>
                            <p className={foot.monTime}>9:00am - 12:00am</p>
                        </div>
                        <div className={foot.schedule}>
                            <p className={foot.mon}>Sunday</p>
                            <p className={foot.monTime}>9:00am - 12:00am</p>
                        </div>
                    </div>
                </div>
                <div className={foot.mainActivity}>
                    <div className={foot.titleContainer}>
                        <h3>Activity</h3>
                    </div>
                    <div className={foot.activityContainer}>
                        <p>Influencers</p>
                        <p>Affiliate</p>
                        <p>Co-Branding</p>
                        <p>Honour</p>
                        <p>Give-Away</p>
                        <p>Publishers</p>
                    </div>
                </div>
                <div className={foot.mainSupport}>
                    <div className={foot.titleContainer}>
                        <h3>Support</h3>
                    </div>
                    <div className={foot.supportContainer}>
                        <p>Contact Us</p>
                        <p>About Us</p>
                        <p>Partners</p>
                        <p>Privacy</p>
                        <p>FAQs</p>
                        <p>Terms Of Use</p>
                    </div>
                </div>
                <div className={foot.mainNewsLetter}>
                    <div className={foot.NewsLetter}>
                        <div className={foot.titleContainer}>
                            <h3>NewsLetter</h3>
                        </div>
                        <div className={foot.newsContainer}>
                            <input type="text" placeholder='Subscription'/>
                            <button>Subscribe</button>
                        </div>
                    </div>
                    <div className={foot.socialContainer}>
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={instagram} alt="" />
                        <img src={linkedin} alt="" />
                    </div>
                </div>
            </div>
            <div className={foot.right}>
                <p className={foot.reserve}>copyright ©2023. All right reserved by <span>Feliciano</span></p>
            </div>
        </div>
        
    </>
  )
}

export default Footer