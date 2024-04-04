import React from 'react'
import './GiftSection.css'

export default function GiftSection() {
    return (
        <div>
            <p className='gorGiftBoxMainTitleMobile'>Gifting Made Easy</p>
            <div className='gorGiftMain'>
                <div className='gorGiftBox1'>
                    <div>
                        <p className='gorGiftBoxMainTitleWeb'>Gifting Made Easy</p>
                        <img src='https://www.gorjana.com/cdn/shop/files/Feature-TopGifts_8331665f-9cc0-4d68-b09c-9193aff89e15.jpg?v=1702053479&%3Bwidth=1200&em-format=avif' className='gorGiftBox1Images' />
                        <p className='gorGiftBoxDesc'>Top Gifts</p>
                    </div>
                    <div className='gorGiftBox1Sub1'>
                        <img src='https://www.gorjana.com/cdn/shop/files/Feature-TopFineGifts_5dc280ce-376e-4488-8c79-e37c9339264d.jpg?v=1702053479&%3Bwidth=1200&em-format=avif' className='gorGiftBox1Images' />
                        <p className='gorGiftBoxDesc'>Personalized Gifts</p>
                    </div>
                </div>
                <div className='gorGiftBox2'>
                    <div>
                        <img src='https://www.gorjana.com/cdn/shop/files/Feature-GiftsUnder_150_4b3637bc-a43b-451c-b183-3721016224d5.jpg?v=1702053479&%3Bwidth=1200&em-format=avif' className='gorGiftBox2Images' />
                        <p className='gorGiftBoxDesc'>Gifts Under $150</p>
                    </div>
                    <div className='gorGiftBox2Sub1' >
                        <img src='https://www.gorjana.com/cdn/shop/files/MasonryGrid-GiftsThatGlitter.jpg?v=1701380400&%3Bwidth=1200&em-format=avif' className='gorGiftBox2Images' />
                        <p className='gorGiftBoxDesc'>Splurge Worthy Gifts</p>
                    </div>
                </div>
            </div>

            <div className='gorLookBookMain' style={{
                display: 'flex',
                marginTop: '70px'
            }}>
                <div className='gorViewLookBookimg'>
                    <img src='https://www.gorjana.com/cdn/shop/files/Feature-Lookbook_089f3d54-299c-4177-b403-7c3ebeb8e146.jpg?v=1702053479&%3Bwidth=1200&em-format=avif' className='gorViewLookBookImage' />
                </div>
                <div className='gorViewLookBookDesc'>
                    <p style={{ fontSize: '30px', margin: '0px', fontFamily: 'Freight Big Pro,serif' }}>The Holiday Lookbook is Here</p>
                    <p style={{ fontSize: '13px', fontWeight: 500, cursor: 'pointer', textDecoration: 'underline' }}>View Lookbook</p>
                </div>
            </div>
        </div>
    )
}
