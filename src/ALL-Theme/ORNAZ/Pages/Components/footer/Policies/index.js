import React from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom';

export default function Policies() {

  const navigation = useNavigate();

  return (
    <div className='policeMain'>
      <div style={{ marginLeft: '80px' }}>
      <p style={{fontFamily : 'Lato,sans-serif' ,fontSize:'18px', color : '#45d4d5'}}>POLICIES</p>
        <p className='text' onClick={() => navigation('/LifeTimeExchange')}>LIFETIME EXCHANGE & BUYBACK</p>
        <p className='text' onClick={() => navigation('/TermsCondition')}>TERMS & CONDITIONS</p>
        <p className='text' onClick={() => navigation('/DeliveryShipping')}>DELIVERY & SHIPPING</p>
        <p className='text' onClick={() => navigation('/PrivacyPolicy')}>PRIVACY POLICY</p>
        <p className='text' onClick={() => navigation('/AskedQuetion')}>FREQUENTLY ASKED QUESTIONS</p>
      </div>
    </div>
  )
}
