import React, { useEffect } from 'react'
import Header from '../../../home/Header/Header'
import FooterSection from '../..'
import './FreeEngraving.css'

export default function FreeEngraving() {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[])

  return (
    <div>
      <Header />
      <div className='freeEngraingMain'>
        <div>
          <img src="https://d3rodw1h7g0i9b.cloudfront.net/images/static_banners/free_engravingdesktop_banner.jpg" width="100%" style={{ paddingBottom: '20px', width: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{paddingBottom : '70px'}}>
          <p style={{ textAlign: 'center' ,marginTop:'0px'  ,fontSize : '40px' }}>Free Engraving</p>
          <div style={{paddingInline : '20%'}}>
            <p>
              Why not engrave a meaningful message on the inside of your engagement ring or wedding ring? We offer free engraving on all  our engagement rings and wedding bands.  And by this we go one step ahead in expression of love.
            </p>
            <p style={{fontWeight : 600}}>What Can I Engrave? </p>
            <p>Personal ring engravings can be any alphanumeric combination up to 20 characters in length. Looking for inspiration? Consider engraving your engagement ring or wedding band with your anniversary date, an expression of your love, your initials, or a phrase with special meaning that only you two understand!</p>
            <p>You can simply discuss with our assigned expert for you to get some inspirations from our previous customers photographs.</p>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  )
}
