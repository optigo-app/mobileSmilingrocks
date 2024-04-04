import React from 'react'
import sustain1 from '../../assets/sustain/sustain1.webp'
import sustain2 from '../../assets/sustain/sustain2.webp'
import './sustain.css'

const SustainAbility = () => {
  return (
    <>
      <div className='sustaionMain'>
        <div style={{ textAlign: 'center' }}>
          <p className='sustaionMainTitle' style={{ fontSize: '40px', fontFamily: 'FreightDisp Pro Medium', color: '#7d7f85' }}>Committed on Sustainability</p>
          <p style={{ fontSize: '14px', fontFamily: "TT Commons, sans-serif", color: '#7d7f85' }}>For our planet, our home, and our future</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px' }}>
          <div style={{ background: '#fafafa', padding: '20px 20px 0px 20px', textAlign: 'center' }} className='sustainBoxImageBoxMain'>
            <img src="https://thumbs.dreamstime.com/b/global-sustainable-development-concept-environmental-backgrounds-39687173.jpg" alt={''}  className='sustaionImage1'/>
            <p style={{ marginTop: "7px", color: '#7d7f85', fontSize: '13px', fontFamily: "TT Commons, sans-serif", fontWeight: '600' }}>1% for the Planet</p>
          </div>
          <div style={{ background: '#fafafa', padding: '20px 20px 0px 20px', textAlign: 'center' }} className='sustainBoxImageBoxMain'>
            <img src="https://media.istockphoto.com/id/1340881556/photo/an-icon-of-a-goal-fulfilled-in-the-form-of-a-clear-pond-in-the-middle-of-a-lush-forest-3d.jpg?s=612x612&w=0&k=20&c=hts7M_zuvTMuNgB8xPqZe7spIm917R6Ezyv9UTIZUfA=" alt={''} className='sustaionImage2' />
            <p style={{ marginTop: "7px", color: '#7d7f85', fontSize: '13px', fontFamily: "TT Commons, sans-serif", fontWeight: '600' }}> Certified Butterfly Mark on ESG+</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SustainAbility