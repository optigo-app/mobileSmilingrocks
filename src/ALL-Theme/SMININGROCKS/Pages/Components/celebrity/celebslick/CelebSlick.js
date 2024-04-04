import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './celebslick.css'

const CelebSlick = ({ dj }) => {
    const { celebNames, celebDesc, celebImages } = dj;

    return (
        <div className='smcelebimg'>
            <Carousel showThumbs={false} showStatus={false} showArrows={false} >
                {celebImages.map((im) => (
                    <div>
                        <img src={im} alt={''} className='smilingCelebeImage' />
                    </div>
                ))
                }
            </Carousel>
            <div style={{ textAlign: 'center' }}>
                <p style={{ textTransform: 'uppercase', fontSize: '14px', fontWeight: 'bold' }}>{celebNames}</p>
                <p style={{ textTransform: 'capitalize', fontSize: '14px', color: '#7d7f85', marginTop: '-14px' }}>{celebDesc}</p>
            </div>
        </div>
    )
}

export default CelebSlick