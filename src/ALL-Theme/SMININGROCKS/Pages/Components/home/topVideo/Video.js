import React, { useState } from 'react'
import './Video.css'
import demovide from '../../../assets/Video/demo2.mp4'
import banner1 from '../../../assets/MobileImages/HomepageMainBannerImage1.jpg'
import banner2 from '../../../assets/MobileImages/HomepageMainBannerImage2.jpg'
import banner3 from '../../../assets/MobileImages/HomepageMainBannerImage3.jpg'
import banner4 from '../../../assets//MobileImages/HomepageMainBannerImage4.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { useNavigate } from 'react-router-dom'


export default function Video() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
    // prevArrow: false, 
    // nextArrow: false,

  };


  const naviagtion = useNavigate();

  return (
    <div>
      {/* <video width="500" autoPlay controls loop style={{ height: 'auto', width: '100%' }}> */}
      {/* <video width="500" autoPlay loop style={{ height: 'auto', width: '100%' }}>
        <source src={demovide} type="video/mp4" />
      </video> */}

      <Slider {...settings}>
        {/* onClick={() => naviagtion('/productpage')} */}
        <div className='homePageSliderImagwMain'>
          <img src={banner1} className='homePageSliderImagw' />
        </div>

        <div className='homePageSliderImagwMain'>
          <img src={banner2} className='homePageSliderImagw' />
        </div>

        <div className='homePageSliderImagwMain'>
          <img src={banner3} className='homePageSliderImagw' />.
        </div>

        <div className='homePageSliderImagwMain'>
          <img src={banner4} className='homePageSliderImagw' />
        </div>
      </Slider>
      <div className='gradient_background'>
        <p>Grab flat $50 off with code FRI600 | Konw More</p>
      </div>
    </div>
  )
}
