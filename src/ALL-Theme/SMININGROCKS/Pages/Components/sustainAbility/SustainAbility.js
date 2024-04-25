import React from 'react'
import sustain1 from '../../assets/MobileImages/sustainability1.jpg'
import sustain2 from '../../assets/MobileImages/sustainability2.jpg'
import './sustain.css'

const SustainAbility = () => {
  return (
    <>
      <div className='sustaionMain'>
        <div style={{ textAlign: 'center' }}>
          <p className='sustaionMainTitle'>Committed on Sustainability</p>
          <p className='sustaionMainTitle2'>For our planet, our home, and our future</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px' }}>
          <div style={{ background: '#fafafa', textAlign: 'center' }} className='sustainBoxImageBoxMain'>
            <img src={sustain1} alt={''}  className='sustaionImage1'/>
            <p style={{ marginTop: "7px", color: '#7d7f85', fontSize: '13px', fontFamily: "TT Commons, sans-serif", fontWeight: '600' }}>1% for the Planet</p>
          </div>
          <div style={{ background: '#fafafa', textAlign: 'center' }} className='sustainBoxImageBoxMain'>
            <img src={sustain2} alt={''} className='sustaionImage2' />
            <p style={{ marginTop: "7px", color: '#7d7f85', fontSize: '13px', fontFamily: "TT Commons, sans-serif", fontWeight: '600' }}> Certified Butterfly</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SustainAbility