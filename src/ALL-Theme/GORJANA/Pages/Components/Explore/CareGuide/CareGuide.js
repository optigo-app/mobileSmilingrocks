import React, { useRef, useState } from 'react'
import './CareGuide.css'
import Header from '../../home/Header/Header'
import { useDraggable } from 'react-use-draggable-scroll';

import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import Footer from '../../home/Footer/Footer';

export default function CareGuide() {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenTwo, setIsOpenTwo] = useState(false);
    const [isOpenThree, setIsOpenThree] = useState(false);
    const [showErrow, setShowErrow] = useState(false);

    const ref = useRef();
    const { events } = useDraggable(ref);

    let demoJSON = [
        {
            prodImg: 'https://www.gorjana.com/cdn/shop/files/Screen_Shot_2023-07-06_at_3.12.52_PM.png?v=1688674394&%3Bwidth=550&em-format=avif&em-width=550',
            prodtitle: 'Zodiac Necklace - Aries',
            price: '$68',
            more: 'More Options'
        },
        {
            prodImg: 'https://www.gorjana.com/cdn/shop/files/Screen_Shot_2023-07-06_at_3.16.29_PM.png?v=1688674625&%3Bwidth=550&em-format=avif&em-width=550',
            prodtitle: 'Newport Birthstone Bracelet - April',
            price: '$568',
            more: 'More Options'

        },
        {
            prodImg: 'https://www.gorjana.com/cdn/shop/files/Screen_Shot_2023-07-06_at_3.17.25_PM.png?v=1688674657&%3Bwidth=550&em-format=avif&em-width=550',
            prodtitle: 'Zodiac Charm Stud - Taurus',
            price: '$108',
            more: 'More Options'

        },
        {
            prodImg: 'https://www.gorjana.com/cdn/shop/files/Flatback.jpg?v=1689102024&%3Bwidth=550&em-format=avif&em-width=550',
            prodtitle: 'Newport Birthstone Bracelet - April',
            price: '$68',
            more: 'More Options'

        },
        {
            prodImg: 'https://www.gorjana.com/cdn/shop/files/14kGoldBoxClasp.jpg?v=1689102104&%3Bwidth=550&em-format=avif&em-width=550',
            prodtitle: 'Serena',
            price: '$68',
            more: 'More Options'

        },
        {
            prodImg: 'https://cdn.shopify.com/s/files/1/0015/3849/0427/files/WilderAlphabetBracelet_Collection_Shot.jpg?v=1700675714&width=1080&height=1440&crop=center',
            prodtitle: 'Gloriole',
            more: 'More Options',
            price: '$68'

        },
    ]


    const toggleList = () => {
        setIsOpen(!isOpen);
    };

    const toggleListTwo = () => {
        setIsOpenTwo(!isOpenTwo);
    };

    const toggleListTwoThree = () => {
        setIsOpenThree(!isOpenThree);
    };



    const handleLeftScroll = () => {
        if (ref.current) {
            ref.current.scrollLeft -= 200;
            if (ref.current.scrollLeft === 0) {
                setShowErrow(false)
            } else {
                setShowErrow(true)
            }
        }
    };

    const handleRightScroll = () => {
        if (ref.current) {
            ref.current.scrollLeft += 200;
            if (ref.current.scrollLeft === 0) {
                setShowErrow(false)

            } else {
                setShowErrow(true)
            }
        }
    };

    return (
        <div>
            <Header />
            <div className='goeCareGuidMain'>
                <img src='https://www.gorjana.com/cdn/shop/files/JewelryCare_Banner-M.jpg?v=1698245623&width=2800' className='careGuideImageTop' />
            </div>
            <p style={{
                fontSize: '60px',
                textAlign: 'center',
                marginTop: '50px',
                fontFamily: 'Freight Big Pro,serif',
            }}>Fashion Jewelry Care</p>
            <p style={{
                fontFamily: 'Futura PT,sans-serif',
                fontSize: '15px',
                textAlign: 'center'
            }}>Our fashion 18k gold-plated jewelry is protected with an anti-tarnish barrier. In order to maximize the life of your fashion pieces, we suggest following the below care instructions.</p>
            <div className='gorCareFashionBoxMain'>
                <div className='gorCareFashionBox1'>
                    <div style={{ borderBottom: '1px solid', cursor: 'pointer' }}>
                        <p onClick={toggleList} style={{ display: 'flex', margin: '0px', fontSize: '18px', justifyContent: 'space-between' }}>Daily Activity <span style={{ fontWeight: 600, fontSize: '25px', margin: '0px' }}>{isOpen ? '-' : '+'}</span></p>
                        <div className={`gorCareGuide-list ${isOpen ? 'open' : ''}`}>
                            <p>DAta</p>
                        </div>
                    </div>

                    <div style={{ borderBottom: '1px solid', cursor: 'pointer', marginTop: '10px' }}>
                        <p onClick={toggleListTwo} style={{ display: 'flex', margin: '0px', fontSize: '18px', justifyContent: 'space-between' }}>Cleaning Your Pieees <span style={{ fontWeight: 600, fontSize: '25px', margin: '0px' }}>{isOpenTwo ? '-' : '+'}</span></p>
                        <div className={`gorCareGuide-list ${isOpenTwo ? 'open' : ''}`}>
                            <p>DAta</p>
                        </div>
                    </div>

                    <div style={{ borderBottom: '1px solid', cursor: 'pointer', marginTop: '10px' }}>
                        <p onClick={toggleListTwoThree} style={{ display: 'flex', margin: '0px', fontSize: '18px', justifyContent: 'space-between' }}>Storing Your JeWelry <span style={{ fontWeight: 600, fontSize: '25px', margin: '0px' }}>{isOpenThree ? '-' : '+'}</span></p>
                        <div className={`gorCareGuide-list ${isOpenThree ? 'open' : ''}`}>
                            <p>DAta</p>
                        </div>
                    </div>

                </div>
                <div className='gorCareFashionBox2'>
                    <img src='https://www.gorjana.com/cdn/shop/files/AboutUs-PARKER.jpg?v=1671733481&%3Bwidth=1190&em-format=avif&em-width=1190' className='gorCareFashionBox2Img' />
                </div>
            </div>
            <div style={{
                '--padding-desktop': '40px',
                '--padding-mobile': '40px',
                marginBlock: '80px',
                marginInline: '100px'
            }}>
                <hr />
            </div>
            <p style={{
                fontSize: '60px',
                textAlign: 'center',
                marginTop: '50px',
                fontFamily: 'Freight Big Pro,serif',
            }}>Fashion Jewelry Care</p>
            <p style={{
                fontFamily: 'Futura PT,sans-serif',
                fontSize: '15px',
                textAlign: 'center'
            }}>Our fashion 18k gold-plated jewelry is protected with an anti-tarnish barrier. In order to maximize the life of your fashion pieces, we suggest following the below care instructions.</p>
            <div className='gorCareFashionBoxMain'>
                <div className='gorCareFashionBox1'>
                    <div style={{ borderBottom: '1px solid', cursor: 'pointer' }}>
                        <p onClick={toggleList} style={{ display: 'flex', margin: '0px', fontSize: '18px', justifyContent: 'space-between' }}>Daily Activity <span style={{ fontWeight: 600, fontSize: '25px', margin: '0px' }}>{isOpen ? '-' : '+'}</span></p>
                        <div className={`gorCareGuide-list ${isOpen ? 'open' : ''}`}>
                            <p>DAta</p>
                        </div>
                    </div>

                    <div style={{ borderBottom: '1px solid', cursor: 'pointer', marginTop: '10px' }}>
                        <p onClick={toggleListTwo} style={{ display: 'flex', margin: '0px', fontSize: '18px', justifyContent: 'space-between' }}>Cleaning Your Pieees <span style={{ fontWeight: 600, fontSize: '25px', margin: '0px' }}>{isOpenTwo ? '-' : '+'}</span></p>
                        <div className={`gorCareGuide-list ${isOpenTwo ? 'open' : ''}`}>
                            <p>DAta</p>
                        </div>
                    </div>

                    <div style={{ borderBottom: '1px solid', cursor: 'pointer', marginTop: '10px' }}>
                        <p onClick={toggleListTwoThree} style={{ display: 'flex', margin: '0px', fontSize: '18px', justifyContent: 'space-between' }}>Storing Your JeWelry <span style={{ fontWeight: 600, fontSize: '25px', margin: '0px' }}>{isOpenThree ? '-' : '+'}</span></p>
                        <div className={`gorCareGuide-list ${isOpenThree ? 'open' : ''}`}>
                            <p>DAta</p>
                        </div>
                    </div>

                </div>
                <div className='gorCareFashionBox2'>
                    <img src='https://www.gorjana.com/cdn/shop/files/AboutUs-PARKER.jpg?v=1671733481&%3Bwidth=1190&em-format=avif&em-width=1190' className='gorCareFashionBox2Img' />
                </div>
            </div>

            <div style={{
                '--padding-desktop': '40px',
                '--padding-mobile': '40px',
                marginBlock: '80px',
                marginInline: '100px'
            }}>
                <hr />
            </div>

            <p style={{
                fontSize: '60px',
                textAlign: 'center',
                marginTop: '50px',
                fontFamily: 'Freight Big Pro,serif',
            }}>Wear Guide</p>
            <p style={{
                fontFamily: 'Futura PT,sans-serif',
                fontSize: '15px',
                textAlign: 'center'
            }}>To learn more about the functionality of our signature closures, watch the videos linked below.</p>
            <div className='gorCareImageSlideMain'>
                <p style={{ margin: '0px', fontSize: '25px' }}>Jewelry Clasps</p>
                <div className="gor-Carescrollable-container">
                    {showErrow && <div className="gor-ArrowLeft" onClick={handleLeftScroll}>
                        <AiOutlineLeft className='gorCareImageSliderLeft' />
                    </div>}
                    <div className="gor-image-Carescroll-content" {...events} ref={ref}>
                        {demoJSON?.map((data, index) => (
                            <div key={index} className="gor-Careimage-wrapper">
                                <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                                    <img src={data.prodImg} alt={`Image ${index + 1}`} />
                                    <div>
                                        <p style={{ margin: '0px', fontSize: '20px' }}>{data.prodtitle}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="gor-ArrowRight" onClick={handleRightScroll}>
                        <AiOutlineRight className='gorCareImageSliderRight' />
                    </div>
                </div>
            </div>

            <div className='gorCareGCustomeMain'>
                <div className='gorCareGCustomeBox1'>
                    <img src='https://www.gorjana.com/cdn/shop/files/CAREGUIDE-Story-Catagory.jpg?v=1671579677&%3Bwidth=696&em-format=avif&em-width=696' className='gorcareCustomeImg' />
                </div>
                <div className='gorCareGCustomeBox2'>
                    <p style={{fontSize: '25px' ,margin : '0px 0px 10px'}}>Customer Care</p>
                    <p>We want you to be completely happy with your gorjana purchase! Please contact customercare@gorjana.com if you have any questions about your purchase. We are also here if you need additional product information, styling advice, care tips, or need any other further assistance.</p>
                    <p style={{fontSize: '15px' ,textDecoration: 'underline' ,fontWeight: 500,cursor :'pointer' ,width: 'fit-content'}}>Contact Us</p>
                </div>
            </div>
            <Footer />
        </div >
    )
}
