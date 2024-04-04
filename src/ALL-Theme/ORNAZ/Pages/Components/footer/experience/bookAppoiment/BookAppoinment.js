import React, { useEffect } from 'react'
import Header from '../../../home/Header/Header'
import FooterSection from '../..'
import './BookAppoinment.css'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';




export default function BookAppoinment() {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[])

  return (
    <div>
      <Header />
      <div>
        <div className='webViewAppoinment'>
          <div>
            <img src="https://d3rodw1h7g0i9b.cloudfront.net/images/static_banners/gia_assistance_desktop.jpg" data-src="https://d3rodw1h7g0i9b.cloudfront.net/images/static_banners/gia_assistance_desktop.jpg" width="100%" style={{ paddingBottom: '20px', width: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ maxWidth: '1200px' }}>
              <section style={{ textAlign: 'center', maxWidth: '1200px', paddingTop: '1rem', paddingBottom: '1rem' }}>
                <p style={{ marginBottom: 0, textTransform: 'uppercase', fontSize: '30px', fontWeight: 600 }}>Book In-Store Appointment</p>
                <p>Make an appointment for personal advice and visit our Experience Store to meet our GIA Trained Experts &amp; stylists who will guide you through every considerable factor from choosing the right diamond   to right ring style for you matching your requirements.</p>
                <p>We'll create a personal and unique Engagement Ring together with you.</p>
              </section>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', border: '4px dotted #45d4d5', backgroundColor: '#f8f8f8' }}>
              <div style={{ display: 'flex' }}>
                <div className='appoinDeatil'>
                  <div style={{ display: 'flex' }}>
                    <input className='apointTextBox' type='text' placeholder='Enter Name' />
                    <input className='apointTextBox' type='text' placeholder='Enter Phone' />
                  </div>
                  <input className='apointTextBox' type='text' style={{ width: '95%' }} placeholder='Enter Your Email' />
                  <div style={{ display: 'flex' }}>
                    <input className='apointTextBox' type='date' />
                    {/* <LocalizationProvider dateAdapter={AdapterDayjs} >
                      <DatePicker className="datePickerCustom" />
                    </LocalizationProvider> */}

                    <select className='apointTextBox' style={{ height: '40px', width: '250px', fontSize: '14px', border: '1px solid #45d4d5' }}>
                      <option>Please choose time slot</option>
                      <option>10:00AM - 11.00AM</option>
                      <option>10:00AM - 11.00AM</option>
                      <option>10:00AM - 11.00AM</option>
                      <option>10:00AM - 11.00AM</option>
                      <option>10:00AM - 11.00AM</option>
                    </select>
                  </div>

                  <select className='apointTextBox' style={{ height: '40px', width: '95%', fontSize: '14px', border: '1px solid #45d4d5' }}>
                    <option className='options'>Please Select Your Perferred Budgest Rang(optional)</option>
                    <option className='options'>INR 50 Thousand - 1 Lakhs</option>
                    <option className='options'>INR 1 Lakhs - 2 Lakhs</option>
                    <option className='options'>INR 2 Lakhs - 5 Lakhs</option>
                    <option className='options'>INR 5 Lakhs - 10 Lakhs</option>
                    <option className='options'>INR 10 Lakhs - 20 Lakhs</option>
                    <option className='options'>INR 20 Lakhs - 30 Lakhs </option>
                    <option className='options'>INR 30 Lakhs - 40 Lakhs</option>
                  </select>
                </div>
                <div className='appointMessage'>
                  <textarea placeholder='Message' className='appoinTextArea' />
                </div>
              </div>
              <button type="submit" className='btnBook'>
                Book Your In- store Appointment
              </button>
            </div>

            <p style={{ fontSize: '23px' }}>Why it is Important ?</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ display: 'flex', width: '1200px' }}>
                <div style={{ marginInline: '5px', width: '50%' }}>
                  <div style={{ border: '0.5px solid gray', padding: '5px' }}>
                    <p style={{ fontSize: '25px' }}>Personalized Solitaire Consultation</p>
                    <p> Our Engagement Ring Experts will take you through each and every aspect to avoid any awkward pauses when you pop the question and to ensure you are buying the right diamond for your future partner. This level of technology driven assistance is essential when you are doing an emotional purchase but is a straight miss at the traditional diamond retailer.
                      Feel free to connect with us for personalized solitaire consultation.</p>
                  </div>
                </div>
                <div style={{ border: '0.5px solid gray', marginInline: '5px', width: '50%', padding: '5px' }}>
                  <p style={{ fontSize: '25px' }}>Beyond Certification</p>
                  <img src="https://d3rodw1h7g0i9b.cloudfront.net/images/certificate-vs-diamond.jpg" width="100%" alt="" style={{ height: '330px' }} />
                  <p>A grading certificate can only map and grade a diamond’s inclusions – it cannot convey how the inclusions affect the beauty and value of the diamond. Relying on a certificate alone is settling for uncertainty. See the actual diamond in 360° and buy with confidence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mobileAppointmnet'>
          <div style={{ marginTop: '60px' }}>
            <img src="https://d3rodw1h7g0i9b.cloudfront.net/images/static_banners/gia_assistance_desktop.jpg" data-src="https://d3rodw1h7g0i9b.cloudfront.net/images/static_banners/gia_assistance_desktop.jpg" width="100%" style={{ paddingBottom: '20px', width: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ maxWidth: '1200px' }}>
              <section style={{ textAlign: 'center', maxWidth: '1200px', paddingTop: '1rem', paddingBottom: '1rem' }}>
                <p style={{ marginBottom: 0, textTransform: 'uppercase', fontSize: '30px', fontWeight: 600 }}>Book In-Store Appointment</p>
                <p>Make an appointment for personal advice and visit our Experience Store to meet our GIA Trained Experts &amp; stylists who will guide you through every considerable factor from choosing the right diamond   to right ring style for you matching your requirements.</p>
                <p>We'll create a personal and unique Engagement Ring together with you.</p>
              </section>
            </div>

            <div style={{ display: 'flex', width: '100%', justifyContent: 'center', flexDirection: 'column', border: '4px dotted #45d4d5', backgroundColor: '#f8f8f8' }}>
              <div>
                <div className='appoinDeatil'>
                  <input className='apointTextBox' type='text' placeholder='Enter Name' />
                  <input className='apointTextBox' type='text' placeholder='Enter Phone' />
                  <input className='apointTextBox' type='text' style={{ width: '95%' }} placeholder='Enter Your Email' />
                  <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DatePicker className="datePickerCustom" />
                  </LocalizationProvider>

                  <select className='apointTextBox' style={{ height: '40px', width: '250px', fontSize: '14px', border: '1px solid #45d4d5' }}>
                    <option>Please choose time slot</option>
                    <option>10:00AM - 11.00AM</option>
                    <option>10:00AM - 11.00AM</option>
                    <option>10:00AM - 11.00AM</option>
                    <option>10:00AM - 11.00AM</option>
                    <option>10:00AM - 11.00AM</option>
                  </select>

                  <select className='apointTextBox' style={{ height: '40px', width: '95%', fontSize: '14px', border: '1px solid #45d4d5' }}>
                    <option className='options'>Please Select Your Perferred Budgest Rang(optional)</option>
                    <option className='options'>INR 50 Thousand - 1 Lakhs</option>
                    <option className='options'>INR 1 Lakhs - 2 Lakhs</option>
                    <option className='options'>INR 2 Lakhs - 5 Lakhs</option>
                    <option className='options'>INR 5 Lakhs - 10 Lakhs</option>
                    <option className='options'>INR 10 Lakhs - 20 Lakhs</option>
                    <option className='options'>INR 20 Lakhs - 30 Lakhs </option>
                    <option className='options'>INR 30 Lakhs - 40 Lakhs</option>
                  </select>
                </div>
                <div className='appointMessage'>
                  <textarea placeholder='Message' style={{ width: '100%', height: '200px' }} />
                </div>
              </div>
              <button type="submit" className='btnBook'>
                Book Your In- store Appointment
              </button>
            </div>

            <p style={{ fontSize: '23px' }}>Why it is Important ?</p>
            <div style={{ justifyContent: 'center' }}>
              <div>
                <div className='mobileWhyImpo'>
                  <div style={{ border: '0.5px solid gray', padding: '5px' }}>
                    <p style={{ fontSize: '25px' }}>Personalized Solitaire Consultation</p>
                    <p> Our Engagement Ring Experts will take you through each and every aspect to avoid any awkward pauses when you pop the question and to ensure you are buying the right diamond for your future partner. This level of technology driven assistance is essential when you are doing an emotional purchase but is a straight miss at the traditional diamond retailer.
                      Feel free to connect with us for personalized solitaire consultation.</p>
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: '25px' }}>Beyond Certification</p>
                  <img src="https://d3rodw1h7g0i9b.cloudfront.net/images/certificate-vs-diamond.jpg" width="100%" alt="" style={{ height: '330px' }} />
                  <p>A grading certificate can only map and grade a diamond’s inclusions – it cannot convey how the inclusions affect the beauty and value of the diamond. Relying on a certificate alone is settling for uncertainty. See the actual diamond in 360° and buy with confidence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  )
}
