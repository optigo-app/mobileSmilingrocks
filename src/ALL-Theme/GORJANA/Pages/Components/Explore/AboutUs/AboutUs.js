import React, { useRef } from 'react'
import './AboutUs.css'
import Header from '../../home/Header/Header'
import Footer from '../../home/Footer/Footer'
import { useDraggable } from 'react-use-draggable-scroll'

export default function AboutUs() {

    const boxData = [
        {
            image: 'https://www.gorjana.com/cdn/shop/files/AboutLP_Block1.jpg?v=1689109405&%3Bwidth=1200&em-format=avif&em-width=1200',
            year: '2004',
            data: 'Our story begins in 2004, when Gorjana and Jason Reidel founded gorjana on their apartment floor in Laguna Beach, Californi During their first year, the couple hit the road with samples in tow and drove a collective 50,000 miles to sell the first collection   They fulfilled initial orders from their apartment floor, and worked the national trade show circuit as a team of two.'
        },
        {
            image: 'https://www.gorjana.com/cdn/shop/files/AboutLP_Block2.jpg?v=1689109439&%3Bwidth=1200&em-format=avif&em-width=1200',
            year: '2007',
            data: 'In 2007, gorjanas expedited growth afforded the couple the opportunity to expand out of their home and into a studio in Laguna Canyon, which eventually housed our fulfillment space and growing team.'
        },
        {
            image: 'https://www.gorjana.com/cdn/shop/files/AboutLP_Block3.jpg?v=1689113263&%3Bwidth=1200&em-format=avif&em-width=1200',
            year: '2016',
            data: 'Almost a decade after we opened the studio the opportunity presented itself to open a retail store - about a mile away from the our studio, on the corner of Ocean and Beach, in downtown Laguna.'
        },
        {
            image: 'https://www.gorjana.com/cdn/shop/files/AboutLP_Block4.jpg?v=1689113281&%3Bwidth=1200&em-format=avif&em-width=1200',
            year: '2017',
            data: 'Encouraged by the success of the first store in Laguna, we set out to expand gorjanas retail footprint by opening our first store on the opposite coast, in New York.'
        },
        {
            image: 'https://www.gorjana.com/cdn/shop/files/AboutLP_Block5.jpg?v=1689113305&%3Bwidth=1200&em-format=avif&em-width=1200',
            year: '2018',
            data: 'The best-selling Parker Necklace makes its debut. Loved by customers and celebrities alike, the necklace has since inspired an expanded collection featuring various chain link styles and 14k designs.'
        },
        {
            image: 'https://www.gorjana.com/cdn/shop/files/AboutLP_Block6.jpg?v=1689113346&%3Bwidth=1200&em-format=avif&em-width=1200',
            year: '2019-2021',
            data: 'We developed and expanded our first fine jewelry collection, comprised of timeless favorites featuring a range of materials: classic diamonds, 14K gold, sapphires, turquoise, opals, topaz, and other precious gemstones.'
        },
        {
            image: 'https://www.gorjana.com/cdn/shop/files/AboutLP_Block6.jpg?v=1689113346&%3Bwidth=1200&em-format=avif&em-width=1200',
            year: 'Today',
            data: 'Today, we continue to meet our customers where they are, opening retail stores nationwide. We look forward to meeting you - find a gorjana store near you and connect with one of our incredible stylists.'
        },
    ]

    const ref = useRef();
    const { events } = useDraggable(ref);
    return (
        <div>
            <Header />
            <div className='gorAboutMain'>
                <img src='https://www.gorjana.com/cdn/shop/files/AboutUs_Banner-D.jpg?v=1698245624&width=2800' className='gorAboutTopImageWeb' />
                <img src='https://www.gorjana.com/cdn/shop/files/AboutUs_Banner-M.jpg?v=1698245624&width=750' className='gorAboutTopImageMobile' />
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBlock: '40px'
                }}>
                    <p className='gorAboutMainTitle' style={{ fontSize: '55px', margin: '0px', fontFamily: 'Freight Big Pro,serif' }}>With Love From Laguna Beach</p>
                    <p className='gotAboutMainDesc' style={{ width: '40%', textAlign: 'center', fontSize: '15px' }}>Our journey began almost twenty years ago, and has been marked by passion, drive and a whole lot of faith. We're so grateful to share this dynamic story with each and every one of our customers - it begins and ends with you.</p>
                </div>
                <div className='gorAboutBoxDivMain'>
                    {
                        boxData.map((data, index) =>
                            <>
                                <div key={index} className='gorAboutBoxMain'>
                                    <div className='gorAboutBox1'>
                                        <img src={data.image} className='gorAboutBox1Image' />
                                    </div>
                                    <div className='gorAboutBox2'>
                                        <p style={{ fontSize: '25px', margin: '0px' }}>{data.year}</p>
                                        <p style={{ fontSize: '14px' }}>{data.data}</p>
                                    </div>
                                </div>
                            </>
                        )
                    }
                    <div style={{ display: 'flex' }}>
                        <div className='gorAboutOtheimgMain1'>
                            <img src='https://www.gorjana.com/cdn/shop/files/FashionGrid_1.jpg?v=1689113090&%3Bwidth=1080&em-format=avif&em-width=1080' className='gorAboutOtheimgMain1Img' />
                            <p>Fashion Jewelry</p>
                        </div>
                        <div className='gorAboutOtheimgMain2'>
                            <img src='https://www.gorjana.com/cdn/shop/files/FineGrid_1.jpg?v=1689113125&%3Bwidth=1080&em-format=avif&em-width=1080' className='gorAboutOtheimgMain2Img' />
                            <p>Fine Jewelry</p>
                        </div>
                    </div>
                </div>

                <p style={{fontSize: '30px',margin: '0px'}}>Visit Us</p>
                <div className="gorAbout-scrollable-container"  >
                    <div className="gorAbout-image-scroll-content" {...events} ref={ref}>
                        <div className="gorAbout-image-wrapper">
                            <img src='https://www.gorjana.com/cdn/shop/files/Store3.jpg?v=1688586124&%3Bwidth=750&em-format=avif&em-width=750' />
                        </div>
                        <div className="gorAbout-image-wrapper">
                            <img src='https://www.gorjana.com/cdn/shop/files/Store1.jpg?v=1688585959&%3Bwidth=1000&em-format=avif&em-width=1000' />
                        </div>
                        <div className="gorAbout-image-wrapper">
                            <img src='https://www.gorjana.com/cdn/shop/files/Store-2.jpg?v=1688585971&%3Bwidth=750&em-format=avif&em-width=750' />
                        </div>
                        <div className="gorAbout-image-wrapper">
                            <img src='https://www.gorjana.com/cdn/shop/files/Store4.jpg?v=1688586164&%3Bwidth=1000&em-format=avif&em-width=1000' />
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <p style={{ textAlign: 'center', fontSize: '45px', fontFamily: 'Freight Big Pro,serif' }}>Giving Back</p>
                    <p className='gorGivenDesc' style={{ fontSize: '15px', textAlign: 'center', width: '40%' }}>Your support has allowed us the privilege to partner with a number of national and local communities and non profit organizations nationwide.</p>
                    <p  className='gorGivenDesc' style={{ fontSize: '15px', textAlign: 'center', width: '40%' }}>It is with sincere gratitude that we get to participate with these charities, amplify their messages and support their efforts in serving those in need.</p>
                    <p  className='gorGivenDesc'style={{ fontSize: '14px', textAlign: 'center', width: '50%' }}>Learn More About gorjana Gives Back</p>
                    <div style={{ marginInline: '15%' }}>
                        <img src='https://www.gorjana.com/cdn/shop/files/AboutUsLP_Community1.jpg?v=1689205601&%3Bwidth=550&em-format=avif&em-width=550' style={{ width: '33.33%', padding: '10px' }} />
                        <img src='https://www.gorjana.com/cdn/shop/files/AboutUsLP_Community2.jpg?v=1689205601&%3Bwidth=550&em-format=avif&em-width=550' style={{ width: '33.33%', padding: '10px' }} />
                        <img src='https://www.gorjana.com/cdn/shop/files/AboutUsLP_Community3.jpg?v=1689205601&%3Bwidth=550&em-format=avif&em-width=550' style={{ width: '33.33%', padding: '10px' }} />
                    </div>
                </div>

                <div style={{ marginInline: '15%', marginTop: '50px', textAlign: 'center' }}>
                    <img src='https://www.gorjana.com/cdn/shop/files/baby2baby_1.jpg?v=1689113892&%3Bwidth=342&em-format=avif&em-width=342' className='gorAboutFooterIamge'/>
                    <img src='https://www.gorjana.com/cdn/shop/files/dressforsuccess_1.jpg?v=1689113885&%3Bwidth=342&em-format=avif&em-width=342' className='gorAboutFooterIamge'/>
                    <img src='https://www.gorjana.com/cdn/shop/files/toysfortots_1.jpg?v=1689113878&%3Bwidth=342&em-format=avif&em-width=342' className='gorAboutFooterIamge'/>
                    <img src='https://www.gorjana.com/cdn/shop/files/kidsinneed_1.jpg?v=1689113868&%3Bwidth=342&em-format=avif&em-width=342' className='gorAboutFooterIamge'/>
                </div>
            </div>
            <div style={{ marginTop: '60px' }}>
                <Footer />
            </div>
        </div>
    )
}
