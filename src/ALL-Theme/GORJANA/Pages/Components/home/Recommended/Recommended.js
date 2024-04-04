import React, { useEffect, useRef, useState } from 'react'
import './Recommended.css'
import { Cards } from '../../../../../ORNAZ/Pages/Components/home/HomeCards/Cards';
import { useDraggable } from 'react-use-draggable-scroll';

export default function Recommended() {

    const ref = useRef();
    const { events } = useDraggable(ref);


    let demoJSON = [
        {
            prodImg: 'https://cdn.shopify.com/s/files/1/0015/3849/0427/files/2011-201-G_1_f81e4805-d213-4e43-a397-f286b758b22c.jpg?v=1700604569&width=1080&height=1440&crop=center',
            prodtitle: 'Bespoke Wilder Tag Bracelet',
            price: '$68',
            more: 'More Options'
        },
        {
            prodImg: 'https://cdn.shopify.com/s/files/1/0015/3849/0427/files/219-3016-G_1_dbf7217e-7e8f-4949-b362-11d4d51d2207.jpg?v=1700606592&width=1080&height=1440&crop=center',
            prodtitle: 'Bespoke Wilder Tag Bracelet',
            price: '$568',
            more: 'More Options'

        },
        {
            prodImg: 'https://cdn.shopify.com/s/files/1/0015/3849/0427/products/JR-005-G_1_ec5b69a5-d22e-466d-8af8-2a96251c5002.jpg?v=1690277846&width=1080&height=1440&crop=center',
            prodtitle: 'Bespoke Wilder Tag Bracelet',
            price: '$108',
            more: 'More Options'

        },
        {
            prodImg: 'https://cdn.shopify.com/s/files/1/0015/3849/0427/products/2210-201-185a-G_1_f7f8e957-0749-4c32-9f86-78ad263afd21.jpg?v=1695406995&width=1080&height=1440&crop=center',
            prodtitle: 'Bespoke Wilder Tag Bracelet',
            price: '$68',
            more: 'More Options'

        },
        {
            prodImg: 'https://cdn.shopify.com/s/files/1/0015/3849/0427/files/WilderAlphabetNecklace_Collection_Shot.jpg?v=1700674254&width=1080&height=1440&crop=center',
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
            {/* <div className='sliderCardMobile'> */}
            <p style={{
                textAlign: 'center',
                fontSize: '35px',
                fontFamily: 'Freight Big Pro,serif',
                margin: '0px'
            }}>Recommended For You</p>
            <div className='gorReccommMain' style={{
                display: 'flex',
                justifyContent: 'center',
                marginInline: '265px'
            }}>
                <div className="gor-scrollable-container"  >
                    <div className="gor-image-scroll-content" {...events} ref={ref}>
                        {demoJSON?.map((data, index) => (
                            <div key={index} className="gor-image-wrapper">
                                <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                                    <img src={data.prodImg} alt={`Image ${index + 1}`} />
                                    <div>
                                        <p style={{ margin: '0px' }}>{data.prodtitle}</p>
                                        <p style={{ margin: '0px' }}>{data.price}</p>
                                        <p>{data.more}</p>
                                        <div className='gorRecommDiv' >
                                            <button className='gorRecommBtn'>Add To Card</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
