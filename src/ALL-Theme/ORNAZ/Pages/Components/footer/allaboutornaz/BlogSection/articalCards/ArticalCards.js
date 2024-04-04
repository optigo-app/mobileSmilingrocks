import React from 'react'
import bg2 from '../../../../../assets/blog-banner/blog-slider-small-2.jpeg'
import './articalcards.css'

export default function ArticalCards() {
  return (
    <div className='Articards-container'>
      <img
        src={bg2}
        className='Articards-img'
      />
      <div
        className='Articards-text-div'
      >
        <p style={{fontSize:'12px', fontFamily:'Montserrat,sans-serif',letterSpacing:'2px',color:'#bd9b84',textTransform:'uppercase'}}>Engagement Ring</p>
        <p style={{fontSize:'20px',fontFamily:'Playfair Display, serif'}}>Upgrade your Ring Game This Diwali Sale!</p>
        <p style={{ fontSize:'11px', fontFamily:'Montserrat,sans-serif',letterSpacing:'2px',color:'#999999',textTransform:'uppercase'}}>NOVEMBER 3, 2023</p>
      </div>
    </div>
  );
}
