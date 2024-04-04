import React, { useRef } from 'react'
import './MontholyHoroscope.css'
import Header from '../../home/Header/Header'
import { useDraggable } from 'react-use-draggable-scroll';
import Footer from '../../home/Footer/Footer';

export default function MontholyHoroscope() {


    const ref = useRef();
    const { events } = useDraggable(ref);

    let demoJSON = [
        {
            prodImg: 'https://www.gorjana.com/cdn/shop/products/224-100-185-G_1_b500dbf0-0437-4260-81d0-191cfb31adcc.jpg?v=1700685742&%3Bwidth=550&em-format=avif&em-width=550',
            prodtitle: 'Zodiac Necklace - Aries',
            price: '$68',
            more: 'More Options'
        },
        {
            prodImg: 'https://www.gorjana.com/cdn/shop/products/APR23-PRopt-234-104-185-G_1_4a14d8e5-a8a9-4fbe-89cf-7a10cf52cba0.jpg?v=1697215984&%3Bwidth=550&em-format=avif&em-width=550',
            prodtitle: 'Newport Birthstone Bracelet - April',
            price: '$568',
            more: 'More Options'

        },
        {
            prodImg: 'https://www.gorjana.com/cdn/shop/products/2211-016-G_1_37e0642c-8d5b-4840-af3f-f3779f183f80.jpg?v=1697221271&%3Bwidth=550&em-format=avif&em-width=550',
            prodtitle: 'Zodiac Charm Stud - Taurus',
            price: '$108',
            more: 'More Options'

        },
        {
            prodImg: 'https://www.gorjana.com/cdn/shop/products/APR23-PRopt-234-200-388-G_1_0f8488c4-4c14-421e-ac17-f57bf1afb736.jpg?v=1700686524&%3Bwidth=550&em-format=avif&em-width=550',
            prodtitle: 'Newport Birthstone Bracelet - April',
            price: '$68',
            more: 'More Options'

        },
        {
            prodImg: 'https://www.gorjana.com/cdn/shop/products/APR23-PRopt-234-200-39-G_1_21048b57-0b80-465c-8ec2-7e99b907dbd8.jpg?v=1700686491&%3Bwidth=550&em-format=avif&em-width=550',
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

    return (
        <div>
            <Header />
            <div className='gorHoroScopMain'>
                <p className='gotHoroMainTitle'>Monthly Horoscopes</p>
                <p style={{
                    fontFamily: 'Futura PT,sans-serif',
                    fontSize: '15px',
                    textAlign: 'center'
                }}>Monthly, positive predictions from astrologer Jenn Sinclair.</p>

                <div className='gorHoroScopeBoxMain'>
                    <div className='gorHoroBoxMain'>
                        <div className='gorHoroImgBox1'>
                            <img src='https://www.gorjana.com/cdn/shop/files/Aries.jpg?v=1688588218&%3Bwidth=1200&em-format=avif&em-width=1200' className='gorHoroBoxImg' />
                        </div>
                        <div className='gorHoroDescBox2'>
                            <p style={{ fontSize: '30px', margin: '0px' }}>Aries</p>
                            <p style={{ fontSize: '14px', margin: '0px' }}>When setting goals for the year this is a time of both extreme inner and outerwork. You are on a journey to deepen the inner parts of yourself, this means you are likely in the beginning phases of understanding what lies in the shadows and the best ways to access this. It’s also a push towards understanding yourself at the most raw. You are learning that the depth of yourself is incredibly beautiful. At the same time there is a more external journey happening. This is an effort of strength and bravery to step out into the world.</p>
                        </div>
                    </div>
                    <div>
                        <p style={{ margin: '50px 0px 0px 0px', fontSize: '25px' }}>Shop Aries</p>
                        <div className="gor-Horoscrollable-container">
                            <div className="gor-image-Horoscroll-content" {...events} ref={ref}>
                                {demoJSON?.map((data, index) => (
                                    <div key={index} className="gor-Horoimage-wrapper">
                                        <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                                            <img src={data.prodImg} alt={`Image ${index + 1}`} />
                                            <div>
                                                <p style={{ margin: '0px', fontSize: '20px' }}>{data.prodtitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div> 
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
