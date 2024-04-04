import React from 'react'
import './Footer.css'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <div>
      <div className='insta'>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBlock: '40px' }}>
          <span style={{color : '#555555',textAlign: 'center', textTransform : 'uppercase', fontSize : '13px',letterSpacing : '2px'}}>India's 1st &amp; Only Engagement Ring Brand
            <img draggable="false" role="img" className="emoji" alt="💍" src="https://s.w.org/images/core/emoji/14.0.0/svg/1f48d.svg" />
          </span>
          <div style={{ display: 'flex' ,alignItems : 'center' ,marginTop : '10px' }}>
            <FaInstagram style={{ height: '30px', width: '30px',marginInline : '15px' }} />
            <p style={{ margin: '0px', fontSize: '30px',letterSpacing : '4px',textTransform: 'uppercase', fontWeight: 300 }}>ornaz_com</p>
          </div>
        </div>
      </div>
      <div className='blogFooter' style={{padding:'30px', backgroundColor: '#010101' }}>
        <div>
          <p style={{color : '#888888',fontSize : '12px',margin : '0px'}}>(C) 2020 - ORNAZ. All Rights Reserved.</p>
        </div>
        <div  className="white-icon">
          <FaFacebookF style={{height : '25px', width : '25px', marginInline :'7px'}}/>
          <FaTwitter style={{height : '25px', width : '25px', marginInline :'7px'}}/>
          <FaInstagram style={{height : '25px', width : '25px', marginInline :'7px'}}/>
        </div>
      </div>
    </div>
  )
}
