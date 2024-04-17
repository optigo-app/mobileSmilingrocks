import React, { useEffect, useState } from 'react'
import './Confirmation.css'
import Footer from '../home/Footer/Footer'
import { useNavigate } from 'react-router-dom';
import thnaks from '../../assets/thankyou.jpg'

export default function Confirmation() {

    const [orderNumber, setOrderNumber] = useState('');
    const navigation = useNavigate();

    useEffect(() => {
        let orderNum = localStorage.getItem('orderNumber');
        setOrderNumber(orderNum);
    }, [])

    return (
        <div className='paddingTopMobileSet' style={{ backgroundColor: '#c0bbb1', paddingTop: '110px' }}>
            <div className='simlimgCofirmationMain'>
                <div className='confritmSubmain'>
                    <img src={thnaks} className='SmilingthanksImg' />
                    {/* <img src='https://gstore.orail.co.in/assets/newfolder/images/account/thankyou.svg' className='SmilingthanksImg' /> */}
                    <p style={{marginTop: '-30px' , textAlign: 'center'}}>Your Order number is <span style={{fontWeight: 500}}>{orderNumber}</span></p>
                    <button className='contiShopiBtn' onClick={() => navigation('/productpage')}>Continue Shopping</button>
                </div>
            </div>
        </div>
    )
}
