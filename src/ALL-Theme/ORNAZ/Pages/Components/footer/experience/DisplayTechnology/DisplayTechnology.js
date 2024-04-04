import React, { useEffect } from 'react'
import Header from '../../../home/Header/Header'
import FooterSection from '../..'
import './DisplayTechnology.css'

export default function DisplayTechnology() {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[])

  return (
    <div>
      <Header />
      <div>
        <div style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
        <div className='techMain'>
          <div className='techConsultation'>
            <p style={{fontSize: '22px'}}>Personalized Solitaire Consultation</p>
            <p style={{lineHeight : '35px'}}>
              Our Engagement Ring Experts will take you through each and every aspect to avoid any awkward pauses when you pop the question and to ensure you are buying the right diamond for your future partner. This level of technology driven assistance is essential when you are doing an emotional purchase but is a straight miss at the traditional diamond retailer. Feel free to connect with us for personalized solitaire consultation.</p>
          </div>
          <div className='techCertfication'>
            <p style={{fontSize: '22px'}}>Beyond Certification</p>
            <img src="https://d3rodw1h7g0i9b.cloudfront.net/images/certificate-vs-diamond.jpg"  style={{ width : "100%"}} alt="" />
            <p>A grading certificate can only map and grade a diamond’s inclusions – it cannot convey how the inclusions affect the beauty and value of the diamond. Relying on a certificate alone is settling for uncertainty. See the actual diamond in 360° and buy with confidence.</p>
          </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  )
}
