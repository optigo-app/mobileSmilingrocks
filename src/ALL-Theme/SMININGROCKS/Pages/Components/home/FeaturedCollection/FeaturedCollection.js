import React, { useState } from 'react'
import './FeaturedCollection.css'
import { Cards } from '../HomeCards/Cards'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import shop1 from '../../../assets/shopByCategory/shopByCategory1.webp'
import shop2 from '../../../assets/shopByCategory/shopByCategory2.jpg'
import shop3 from '../../../assets/shopByCategory/shopByCategory3.webp'
import shop4 from '../../../assets/shopByCategory/shopByCategory4.jpg'
import linkingLoveImage from '../../../assets/staticImg/linkingLove.jpg'
import ring1 from '../../../assets/linkingLove/ring1.webp'
import ring1hover from '../../../assets/linkingLove/ring1hover.jpg'
import ring2 from '../../../assets/linkingLove/ring2.webp'
import ring2hover from '../../../assets/linkingLove/ring2hover.jpg'
import floraMain from '../../../assets/staticImg/floraMain.jpg'
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

    let demoJSON = [
        { prodImg: shop1, prodtitle: 'Women’s Engagement Rings' },
        { prodImg: shop2, prodtitle: 'Men’s Engagement Rings' },
        { prodImg: shop3, prodtitle: 'Eternity Bands' },
        { prodImg: shop4, prodtitle: 'Fine Jewellery Gifts' },
        { prodImg: shop4, prodtitle: 'Fine Jewellery Gifts' },
    ]

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

                            <div>
                                <div className='linkLoveRing1'>
                                    <img src={ring1ImageChange ? ring1hover : "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw97a38a7c/images/hi-res/503419FIPAA09_1.jpg"} className='likingLoveImages' onMouseEnter={handleMouseEnterRing1} onMouseLeave={handleMouseLeaveRing1} />
                                </div>
                                <div className='linkLoveRing1Desc'>
                                    <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                                    {/* <p style={{ fontSize: '12px' }}>White Gold / $4,949.00</p> */}
                                </div>
                            </div>
                            <div>
                                <div className='linkLoveRing2'>
                                    <img src={ring2ImageChange ? ring2hover : "https://shyamsundarco.com/images/online_jewellery/new/ring//7.jpg?v=1303202491"} className='likingLoveImages' onMouseEnter={handleMouseEnterRing2} onMouseLeave={handleMouseLeaveRing2} />
                                </div>
                                <div className='linkLoveRing1Desc'>
                                    <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                                    {/* <p style={{ fontSize: '12px' }}>White Gold</p> */}
                                </div>
                            </div>

                        </div>

                        <div className='linkRingLove'>
                            <div>
                                <div className='linkLoveRing1'>
                                    <img src={ring1ImageChange ? ring1hover : ring1} className='likingLoveImages' onMouseEnter={handleMouseEnterRing1} onMouseLeave={handleMouseLeaveRing1} />
                                </div>
                                <div className='linkLoveRing1Desc'>
                                    <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                                    {/* <p style={{ fontSize: '12px' }}>White Gold</p> */}
                                </div>
                            </div>
                            <div>
                                <div className='linkLoveRing2'>
                                    <img src={ring2ImageChange ? ring2hover : ring2} className='likingLoveImages' onMouseEnter={handleMouseEnterRing2} onMouseLeave={handleMouseLeaveRing2} />
                                </div>
                                <div className='linkLoveRing1Desc'>
                                    <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                                    {/* <p style={{ fontSize: '12px' }}>White Gold</p> */}
                                </div>
                            </div>
                        </div>

                        <div className='linkRingLove'>
                            <div>
                                <div className='linkLoveRing1'>
                                    <img src={ring1ImageChange ? ring1hover : ring1} className='likingLoveImages' onMouseEnter={handleMouseEnterRing1} onMouseLeave={handleMouseLeaveRing1} />
                                </div>
                                <div className='linkLoveRing1Desc'>
                                    <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                                    {/* <p style={{ fontSize: '12px' }}>White Gold</p> */}
                                </div>
                            </div>
                            <div>
                                <div className='linkLoveRing2'>
                                    <img src={ring2ImageChange ? ring2hover : ring2} className='likingLoveImages' onMouseEnter={handleMouseEnterRing2} onMouseLeave={handleMouseLeaveRing2} />
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
                    <img src={linkingLoveImage} className='linkingLoveImageDesign'  />
                </div>
            </div>


            <div className='linkingLoveMain'>
                <div className='linkingLoveImage'>
                    <img src={floraMain} className='linkingLoveImageDesign' />
                </div>
                <div className='linkingLove'>
                    <p className='linkingTitle'>FLORA</p>
                    <p className='linkingDesc'>High end affordable luxury with sophisticated designs for your every day.</p>
                    <p className='linkingShopCol'>SHOP COLLECTION</p>
                    <Slider {...settings} >
                        <div className='linkRingLove'>

                            <div>
                                <div className='linkLoveRing1'>
                                    <img src={ring3ImageChange ? ring1hover : "https://www.candere.com/media/jewellery/images/GR00103__1.jpeg"} className='likingLoveImages' onMouseEnter={handleMouseEnterRing3} onMouseLeave={handleMouseLeaveRing3} />
                                </div>
                                <div className='linkLoveRing1Desc'>
                                    <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                                </div>
                            </div>
                            <div>
                                <div className='linkLoveRing2'>
                                    <img src={ring4ImageChange ? ring2hover : "https://media.istockphoto.com/id/1219309412/photo/diamond-ring-isolated-on-white-engagement-solitaire-style-ring.jpg?s=612x612&w=0&k=20&c=X5UDpRbiX9vFsZAWh8vt1H5YmrjhPRK2F4bXcWKl5Tw="} className='likingLoveImages' onMouseEnter={handleMouseEnterRing4} onMouseLeave={handleMouseLeaveRing4} />
                                </div>
                                <div className='linkLoveRing1Desc'>
                                    <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                                </div>
                            </div>

                        </div>

                        <div className='linkRingLove'>
                            <div>
                                <div className='linkLoveRing1'>
                                    <img src={ring3ImageChange ? ring1hover : ring1} className='likingLoveImages' onMouseEnter={handleMouseEnterRing3} onMouseLeave={handleMouseLeaveRing3} />
                                </div>
                                <div className='linkLoveRing1Desc'>
                                    <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                                </div>
                            </div>
                            <div>
                                <div className='linkLoveRing2'>
                                    <img src={ring4ImageChange ? ring2hover : ring2} className='likingLoveImages' onMouseEnter={handleMouseEnterRing4} onMouseLeave={handleMouseLeaveRing4} />
                                </div>
                                <div className='linkLoveRing1Desc'>
                                    <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                                </div>
                            </div>
                        </div>

                        <div className='linkRingLove'>
                            <div>
                                <div className='linkLoveRing1'>
                                    <img src={ring3ImageChange ? ring1hover : ring1} className='likingLoveImages' onMouseEnter={handleMouseEnterRing3} onMouseLeave={handleMouseLeaveRing3} />
                                </div>
                                <div className='linkLoveRing1Desc'>
                                    <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                                </div>
                            </div>
                            <div>
                                <div className='linkLoveRing2'>
                                    <img src={ring4ImageChange ? ring2hover : ring2} className='likingLoveImages' onMouseEnter={handleMouseEnterRing4} onMouseLeave={handleMouseLeaveRing4} />
                                </div>
                                <div className='linkLoveRing1Desc'>
                                    <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                                    {/* <p style={{ fontSize: '12px' }}>White Gold / $4,949.00</p> */}
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>

            </div>
        </div>
    )
}
