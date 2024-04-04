import React from 'react'
import './JewelleryGiftsBannerPage.css'
import giftsBannner from '../../../assets/other/giftsBannner.webp'
import { useNavigate } from 'react-router-dom'

export default function JewelleryGiftsBannerPage() {

    const navigation = useNavigate();
    return (
        <div>

            <div className='gitftBanner'>
                <img
                    src={giftsBannner}
                    className='giftBanner-img'
                    style={{ width: "1560.47px" }}
                />
            </div>
            <div style={{display : 'flex' ,flexDirection: 'column', alignItems : 'center'}}>
                <p style={{margin : '0px 0px 20px' ,textAlign : 'center' , fontSize : '14px'}}>Cherish all shades of love with meaningful gifts for birthdays, anniversaries,festivities and milestone moments.</p>
                <button style={{
                    height : '35px',
                    width: '180px',
                    border: '1px solid black',
                    backgroundColor: 'white'
                }} onClick={() => navigation('/jewelleryPage')}>Shop the Collection</button>
            </div>

        </div>
    )
}
