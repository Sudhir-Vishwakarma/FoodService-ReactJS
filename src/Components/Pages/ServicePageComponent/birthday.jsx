import React from 'react';
import birthday from '../../../style/ServicePageCSS/birthday.module.css';

function Birthday() {
  return (
    <>
        <div className={birthday.mainBirthdayContainer}>
                <div>THEME</div>
                <div>COSPLAY</div>
                <div>FOOD</div>
                <div>DRINKS</div>
                <div>GIFTS</div>
                <div>DECORATION</div>
                <div>CAKES</div>
                <div>ALCOHOL</div>
        </div>
    </>
  )
}

export default Birthday