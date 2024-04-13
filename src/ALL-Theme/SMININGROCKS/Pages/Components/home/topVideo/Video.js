import React from 'react'
import './Video.css'
import demovide from '../../../assets/Video/demo2.mp4'
import banner1 from '../../../assets/Home/b1e603192007239.65d4ef860702f.jpg'
import banner2 from '../../../assets/Home/b6f843192007239.65d4ef8600065.jpg'
import banner3 from '../../../assets/Home/c68914192007239.65d4ef8603c93.jpg'
import banner4 from '../../../assets/Home/ea2faf192007239.65d4ef8602ee5.jpg'
import banner5 from '../../../assets/Home/ff0ce5192007239.65d4ef8601f77.jpg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'


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

  return (
    <div>
      {/* <video width="500" autoPlay controls loop style={{ height: 'auto', width: '100%' }}> */}
      {/* <video width="500" autoPlay loop style={{ height: 'auto', width: '100%' }}>
        <source src={demovide} type="video/mp4" />
      </video> */}

      <Slider {...settings} >
        <div className='linkRingLove'>
          <img src={banner1} className='likingLoveImages' />
        </div>

        <div className='linkRingLove'>
          <img src={banner2} className='likingLoveImages' />
        </div>

        <div className='linkRingLove'>
          <img src={banner3} className='likingLoveImages' />
        </div>
      </Slider>
    </div>
  )
}
