import React from 'react'
import './Masonry.css'
import { BsBag } from "react-icons/bs";

export default function Masonry() {
    return (
        <div>
            <p className='gorMasonryMainTitle'>New Layers We Love</p>

            <div className='GorMansoryMain'>
                <div className='GorMansoryBox1'>
                    <div className='GorMansoryBox1ImageMain'>
                        <img src='https://www.gorjana.com/cdn/shop/files/NOV13-Site_Looks-1.jpg?v=1699488381&%3Bwidth=1180&em-format=avif' className='GorMansoryBox1Img' />
                        <div className='gorShopLookBtnMain'>
                            <button className='gorShopLookBtn'>Shop The Look</button>
                            <BsBag style={{ backgroundColor: '#ffffffbf' }} />
                        </div>
                    </div>
                    <div className='GorMansoryBox1ImageMain' style={{ marginTop: '40px' }}>
                        <img src='https://www.gorjana.com/cdn/shop/files/NOV13-Site_Looks-2_1.jpg?v=1699639359&%3Bwidth=1180&em-format=avif' className='GorMansoryBox1Img' />
                        <div className='gorShopLookBtnMain'>
                            <button className='gorShopLookBtn'>Shop The Look</button>
                            <BsBag style={{ backgroundColor: '#ffffffbf' }} />
                        </div>
                    </div>
                </div>
                <div className='GorMansoryBox2'>
                    <div className='GorMansoryBox2ImageMain'>
                        <img src='https://www.gorjana.com/cdn/shop/files/NOV13-Site_Looks-3.jpg?v=1699488426&%3Bwidth=1180&em-format=avif' className='GorMansoryBox2Img' />
                        <div className='gorShopLookBtnMain'>
                            <button className='gorShopLookBtn'>Shop The Look</button>
                            <BsBag style={{ backgroundColor: '#ffffffbf' }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='MasonryBtnMain' style={{ display: 'flex', justifyContent: 'center', marginBlock: '80px' }}>
                <button className='GorMansoryBtn'>SEE ALL THE LOOKS</button>
            </div>
        </div>
    )
}
