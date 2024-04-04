import React from 'react'
import './Carrers.css'
import Header from '../home/Header/Header'
import Footer from '../home/Footer/Footer'

export default function Carrers() {
  return (
    <div>
      <Header />
      <div className='gorCarresMain'>
        <p style={{ fontSize: '65px', margin: '0px', textAlign: 'center', fontFamily: 'Freight Big Pro,serif' }}>Careers</p>
        <p style={{ textAlign: 'center', fontSize: '13px' }}>At gorjana, we act with intention, exude passion for business and strive to be unique in all that we do. We presume trust in each other and make the commitment to measure by the standards of fairness.</p>
        <p style={{ textAlign: 'center', fontSize: '13px' }}><strong>Intention | How We Act: </strong>honest, respectful, generous, thoughtful, purposeful</p>
        <p style={{ textAlign: 'center', fontSize: '13px' }}><strong>Passion | How We Live: </strong>competitive, optimistic, motivated, selfless, problem-solver</p>
        <p style={{ textAlign: 'center', fontSize: '13px' }}><strong>Unique | How We Work</strong>: innovative, efficient, adaptable, collaborative, aligned</p>
        <p style={{ textAlign: 'center', fontSize: '13px' }}><strong>Presume Trust | How We Communicate</strong>: authentic, clear, transparent, proactive, receptive</p>
        <p style={{ textAlign: 'center', fontSize: '13px' }}><strong>Fairness | How We Measure: </strong>equality, clear, timely, expectations, objective</p>

        <div style={{ marginTop: '20%' }}>
          <p style={{ fontSize: '30px', fontWeight: 'bold' }}>gorjana</p>
          <p style={{ fontSize: '18px', fontStyle: 'italic', fontWeight: 'bold' }}>current job openings</p>
          <div className='gorCarreBox' style={{ display: 'flex' }}>
            <div>
              <p style={{ margin: '0px', color: '#757575', fontSize: '15px' }}>Department</p>
              <select style={{ height: '28px', width: '200px', borderColor: '#757575', color: '#757575' }}>
                <option>All Department</option>
                <option>Retail</option>
              </select>
            </div>
            <div>
              <p className='gorCarreBoxOffi' style={{ margin: '0px 15px ', color: '#757575', fontSize: '15px' }}>Office</p>
              <select className='gorCarreBoxOffSelect' style={{ height: '28px', marginLeft: '15px', width: '200px', borderColor: '#757575', color: '#757575' }}>
                <option>All Office</option>
                <option>Boston</option>
                <option>Carmel</option>
                <option>Miami</option>
                <option>Retail</option>
                <option>Retail</option>
              </select>
            </div>
          </div>

          <p style={{ marginBlock: '20px', fontWeight: 'bold', fontSize: '20px' }}>Retail</p>

          <p className='gorAssRetailITitle'>Assistant Store Manager</p>
          <p style={{ color: '#757575' }}>Oklahoma City, OK</p>
          <p className='gorAssRetailITitle'>Assistant Store Manager</p>
          <p style={{ color: '#757575' }}>Oklahoma City, OK</p>
          <p className='gorAssRetailITitle'>Assistant Store Manager</p>
          <p style={{ color: '#757575' }}>Oklahoma City, OK</p>
          <p className='gorAssRetailITitle'>Assistant Store Manager</p>
          <p style={{ color: '#757575' }}>Oklahoma City, OK</p>
        </div>
      </div>
      <div style={{ marginTop: '60px' }}>
        <Footer />
      </div>
    </div>
  )
}
