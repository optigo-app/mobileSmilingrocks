import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './BannerPage.css'

import banner from '../../../assets/banners/banner.webp'
import banner1 from '../../../assets/banners/banner1.webp'
import banner2 from '../../../assets/banners/banner2.webp'
import banner3 from '../../../assets/banners/banner3.webp'

import respBanner from '../../../assets/responsive Images/resp_banner.webp'
import respBanner1 from '../../../assets/responsive Images/resp_banner1.webp'
import respBanner2 from '../../../assets/responsive Images/resp_banner2.webp'
import respBanner3 from '../../../assets/responsive Images/resp_banner3.webp'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


export default function BannerPage() {


  const navigation = useNavigate();

  // let bannersArr = [
  //   {prodImg:banner,prodtitle:''},
  //   {prodImg:banner1,prodtitle:''},
  //   {prodImg:banner2,prodtitle:''},
  //   {prodImg:banner3,prodtitle:''},
  // ]

  const imagesAlternate = (num) =>{
      switch (num) {
        case 0:
          if (window.innerWidth <= 800) {
            return respBanner;
          } else {
            return banner;
          }
        case 1:
          if (window.innerWidth <= 800) {
            return respBanner1;
          } else {
            return banner1;
          }
        case 2:
          if (window.innerWidth <= 800) {
            return respBanner2;
          } else {
            return banner2;
          }
        case 3:
          if (window.innerWidth <= 800) {
            return respBanner3;
          } else {
            return banner3;
          }

        default: 
          break;
      }
  }


  useEffect(() => {
    const handleResize = () => {
      imagesAlternate();
    };
  
    // Attach the event listener when the component mounts
    window.addEventListener('resize', handleResize);
  
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [imagesAlternate]);

  return (
    <>
    {/* <div onClick={() => navigation('/jewelleryPage')}>
      <Cards sallerCardImg={bannersArr} cardTitle={''} type={'banner'}/>
    </div> */}
    <div className='bannerMain' style={{cursor : 'pointer'}}>
      <Carousel
       showArrows={false}
       infiniteLoop={true}
       showThumbs={false}
       showStatus={false}
       autoPlay={true}
       interval={6100}
       showIndicators={false}
       swipeable={true}
       emulateTouch={true}
       onClickItem={() => navigation("/jewelleryPage")}
      >
      
        <img src={imagesAlternate(0)}  alt='banner Images...'/>
        <img src={imagesAlternate(1)}  alt='banner Images...'/>
        <img src={imagesAlternate(2)}  alt='banner Images...'/>
        <img src={imagesAlternate(3)}  alt='banner Images...'/>

      </Carousel>
    </div>
    </>
  )
}
