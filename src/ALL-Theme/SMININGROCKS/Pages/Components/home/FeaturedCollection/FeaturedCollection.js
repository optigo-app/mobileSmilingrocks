import React, { useState } from 'react'
import './FeaturedCollection.css'
import { Cards } from '../HomeCards/Cards'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import promoSetMainBanner from '../../../assets/MobileImages/promoSetMainBanner.jpg'
import firstSlider1 from '../../../assets/MobileImages/promoSetBanner1Img1.jpg'
import firstSlider2 from '../../../assets/MobileImages/promoSetBanner1Img2.jpg'
import firstSlider3 from '../../../assets/MobileImages/promoSetBanner1Img3.jpg'
import firstSlider4 from '../../../assets/MobileImages/promoSetBanner1Img4.jpg'
import firstSlider5 from '../../../assets/MobileImages/promoSetBanner1Img5.jpg'
import firstSlider6 from '../../../assets/MobileImages/promoSetBanner1Img6.jpg'

import Slider from 'react-slick'

export default function FeaturedCollection() {

    const [ring1ImageChange, setRing1ImageChange] = useState(false);
    const [ring2ImageChange, setRing2ImageChange] = useState(false);
    const [ring3ImageChange, setRing3ImageChange] = useState(false);
    const [ring4ImageChange, setRing4ImageChange] = useState(false);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // prevArrow: false, 
        // nextArrow: false,
    };

    const handleMouseEnterRing1 = () => {
        setRing1ImageChange(true)
    }
    const handleMouseLeaveRing1 = () => {
        setRing1ImageChange(false)
    }

    const handleMouseEnterRing2 = () => {
        setRing2ImageChange(true)
    }
    const handleMouseLeaveRing2 = () => {
        setRing2ImageChange(false)
    }

    const handleMouseEnterRing3 = () => {
        setRing3ImageChange(true)
    }
    const handleMouseLeaveRing3 = () => {
        setRing3ImageChange(false)
    }

    const handleMouseEnterRing4 = () => {
        setRing4ImageChange(true)
    }
    const handleMouseLeaveRing4 = () => {
        setRing4ImageChange(false)
    }
    return (
        <div>
            <div className='linkingLoveMain'>
                <div className='linkingLove'>
                    <p className='linkingTitle'>LINKING LOVE</p>
                    <p className='linkingDesc'>Ready to share link with your loved ones!</p>
                    <p className='linkingShopCol'>SHOP COLLECTION</p>
                    <Slider {...settings} >
                        <div className='linkRingLove'>

                            <div className='linkRingLoveImgMain'>
                                <div className='linkLoveRing1'>
                                    <img src={firstSlider1} className='likingLoveImages' />
                                </div>
                                <div className='linkLoveRing1Desc'>
                                    <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                                    {/* <p style={{ fontSize: '12px' }}>White Gold / $4,949.00</p> */}
                                </div>
                            </div>
                            <div className='linkRingLoveImgMain'>
                                <div className='linkLoveRing2'>
                                    <img src={firstSlider2} className='likingLoveImages' />
                                </div>
                                <div className='linkLoveRing1Desc'>
                                    <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                                    {/* <p style={{ fontSize: '12px' }}>White Gold</p> */}
                                </div>
                            </div>

                        </div>

                        <div className='linkRingLove'>
                            <div className='linkRingLoveImgMain'>
                                <div className='linkLoveRing1'>
                                    <img src={firstSlider3} className='likingLoveImages' />
                                </div>
                                <div className='linkLoveRing1Desc'>
                                    <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                                </div>
                            </div>
                            <div className='linkRingLoveImgMain'>
                                <div className='linkLoveRing2'>
                                    <img src={firstSlider4} className='likingLoveImages' />
                                </div>
                                <div className='linkLoveRing1Desc'>
                                    <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                                </div>
                            </div>
                        </div>

                        <div className='linkRingLove'>
                            <div className='linkRingLoveImgMain'>
                                <div className='linkLoveRing1'>
                                    <img src={firstSlider5} className='likingLoveImages' />
                                </div>
                                <div className='linkLoveRing1Desc'>
                                    <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                                    {/* <p style={{ fontSize: '12px' }}>White Gold / $4,949.00</p> */}
                                </div>
                            </div>
                            <div className='linkRingLoveImgMain'>
                                <div className='linkLoveRing2'>
                                    <img src={firstSlider6} className='likingLoveImages' />
                                </div>
                                <div className='linkLoveRing1Desc'>
                                    <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                                    {/* <p style={{ fontSize: '12px' }}>White Gold</p> */}
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className='linkingLoveImage'>
                    <img src={promoSetMainBanner} className='linkingLoveImageDesign' />
                </div>
            </div>


           
        </div>
    )
}
