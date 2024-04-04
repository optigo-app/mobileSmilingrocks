import React from 'react'
import './FAQ.css'
import Header from '../home/Header/Header'
import Footer from '../home/Footer/Footer'

export default function FAQ() {
    return (
        <div>
            <Header />
            <div className='gorFQAMain'>
                <p style={{ fontSize: '55px', textAlign: 'center', fontFamily: 'Freight Big Pro,serif', margin: '0px' }}>FAQ</p>

                <input type='text' placeholder='What can we help you with?' className='gorTopSearchBox' />

                <p style={{fontFamily:  'Freight Big Pro,serif' ,fontSize: '40px', marginTop: '50px'}}>Frequently Asked Questions</p>

                <div className='gorFAQBox'>
                    <div className='gorFAQBoxMain'>
                        <p className='gorBoxfaqTitle'>Orders, Shipping & Tracking</p>

                        <p className='gorBoxfaqDesc'>When should I order my holiday gifts?</p>
                        <p className='gorBoxfaqDesc'>What are my shipping options?</p>
                        <p className='gorBoxfaqDesc'>Do you ship outside of the U.S.?</p>
                        <p className='gorBoxfaqDesc'>How do I gift wrap items in my order?</p>
                        <p className='gorBoxfaqDesc'>What do I do if I think my order is lost?</p>
                        <p className='gorBoxfaqDesc'>See more</p>
                    </div>
                    <div className='gorFAQBoxMain'>
                        <p className='gorBoxfaqTitle'>Returns & Exchanges</p>

                        <p className='gorBoxfaqDesc'>What is gorjana's return policy?</p>
                        <p className='gorBoxfaqDesc'>How do I start a return?</p>
                        <p className='gorBoxfaqDesc'>How do I return an order placed through Instagram?</p>
                    </div>
                    <div className='gorFAQBoxMain'>
                        <p className='gorBoxfaqTitle'>Company</p>

                        <p className='gorBoxfaqDesc'>How do you pronounce gorjana?</p>
                        <p className='gorBoxfaqDesc'>Does gorjana give back?</p>
                        <p className='gorBoxfaqDesc'>Do you have a store near me?</p>
                        <p className='gorBoxfaqDesc'>Are you hiring?</p>
                        <p className='gorBoxfaqDesc'>Is gorjana.com a secure website?</p>
                    </div>
                    <div className='gorFAQBoxMain'>
                        <p className='gorBoxfaqTitle'>Products & Styling</p>

                        <p className='gorBoxfaqDesc'>How do I care for my new jewelry?</p>
                        <p className='gorBoxfaqDesc'>Do you offer engraving?</p>
                        <p className='gorBoxfaqDesc'>How do I open the Parker clasp?</p>
                        <p className='gorBoxfaqDesc'>A style I want is sold out, when will it be restocked?</p>
                        <p className='gorBoxfaqDesc'>Are gorjana items nickel free?</p>
                        <p className='gorBoxfaqDesc'>See more</p>
                    </div>
                    <div className='gorFAQBoxMain'>
                        <p className='gorBoxfaqTitle'>Promotions & Gift Cards</p>

                        <p className='gorBoxfaqDesc'>Do you have any discounts?</p>
                        <p className='gorBoxfaqDesc'>How does your refer a friend program work?</p>
                        <p className='gorBoxfaqDesc'>How do I order a gorjana gift card?</p>
                        <p className='gorBoxfaqDesc'>I have multiple promo codes, can I use them all towards the same purchase?</p>
                    </div>
                    <div className='gorFAQBoxMain'>
                        <p className='gorBoxfaqTitle'>Happiness Guarantee</p>

                        <p className='gorBoxfaqDesc'>My favorite gorjana piece is damaged, can it be repaired?</p>
                        <p className='gorBoxfaqDesc'>What is our Happiness Guarantee?</p>
                    </div>
                </div>

            </div>
            <div style={{ marginTop: '70px' }}>
                <Footer />
            </div>
        </div>
    )
}
