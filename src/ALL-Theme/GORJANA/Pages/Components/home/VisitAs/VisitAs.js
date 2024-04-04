import React from 'react'
import './VisitAs.css'

export default function VisitAs() {
    return (
        <div>
            <div className='gorTopVisiteDetail'>
                <div className='gorTopVisiteDetailBox'>
                    <p className='gorTopVisiteDetailTitle'>Pick Up in Store</p>
                    <p className='gorTopVisiteDetailDesc'>Choose "Pick Up" at checkout to view all of our locations and select the location where you'd like to pick up your order </p>
                </div>
                <div className='gorTopVisiteDetailBox'>
                    <p className='gorTopVisiteDetailTitle'>Free Shipping and Returns</p>
                    <p className='gorTopVisiteDetailDesc'>We offer free standard shipping on all orders within the U.S. and Puerto Rico. Returns are accepted on all unworn items within 30 days of purchase.</p>
                </div>
                <div className='gorTopVisiteDetailBox'>
                    <p className='gorTopVisiteDetailTitle'>Complimentary Gift Wrap</p>
                    <p className='gorTopVisiteDetailDesc'>A good gift is gold. We offer complimentary gift wrap in stores and online year-round. Choose your gift wrap and personalize a gift note at checkout. </p>
                </div>
            </div>

            <div>
                <p style={{
                    fontSize: '25px',
                    fontFamily: 'Freight Big Pro,serif',
                    
                    margin: '0px',
                    marginLeft: '25px'
                }}>Visit Us in Store</p>
                <div className='gorVisitMain' style={{ display: 'flex', marginInline: '30px' }}>
                    <div className='gorVsiteBox1'>
                        <img src='https://www.gorjana.com/cdn/shop/files/Southampton_c5355611-e79d-4982-aeb5-353036f1fbc4.jpg?v=1696619504&%3Bwidth=1000&em-format=avif' style={{ width: '100%' }} />
                    </div>
                    <div className='gorVsiteBox2'>
                        <p>Visit us in one of our 50+ stores across the U.S. and meet our incredible team of stylists, try on new jewelry and enjoy complimentary gift wrapping. </p>
                        <p>See something you love online? Buy online, and pick up in store — we can’t wait to see you!</p>
                        <p>Find a Store</p>
                    </div>
                    <div className='gorVsiteBox3'>
                        <img src='https://www.gorjana.com/cdn/shop/files/Southlake-1.jpg?v=1696619446&%3Bwidth=1000&em-format=avif' style={{ width: '100%', height: '100%' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
