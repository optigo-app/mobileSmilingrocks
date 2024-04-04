import React from 'react'
import './ContactUs.css'
import Header from '../home/Header/Header'
import SmilingRock from '../home/smiling_Rock/SmilingRock'
import Footer from '../home/Footer/Footer'

export default function ContactUs() {
    return (
        <div style={{
            backgroundColor: '#c0bbb1',
            paddingTop: '110px'
        }}>
            <div>
                <div style={{ marginBlock: '20px' }}>
                    <p style={{ fontSize: '40px', color: 'white', textAlign: 'center', fontFamily: 'FreightDispProBook-Regular,Times New Roman,serif' }}>Contact Us</p>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <p style={{ color: 'white', width: '300px', textAlign: 'center', fontSize: '15px' }}>Have a comment, suggestion or queestion? Feel free to reach out to us and we’ll getback to you as soon as possible.</p>
                    </div>
                </div>

                <div className='Fo-contactMain'>
                    <div className='Fo-contactBoxMain'>
                        <div className='Fo-contactBox1'>
                            <div>
                                <p className='Fo-contactBox1Title'>FULL NAME</p>
                                <input type='text' className='Fo-contactBox1InputBox' />
                            </div>
                            <div style={{ marginTop: '25px' }}>
                                <p className='Fo-contactBox1Title'>EMAIL ADDRESS</p>
                                <input type='text' className='Fo-contactBox1InputBox' />
                            </div>
                            <div style={{ marginTop: '25px' }}>
                                <p className='Fo-contactBox1Title'>PHONE NUMBER</p>
                                <input type='text' className='Fo-contactBox1InputBox' />
                            </div>
                            <div style={{ marginTop: '25px' }}>
                                <p className='Fo-contactBox1Title'>SUBJECT</p>
                                <select className='Fo-contactBox1InputBox'>
                                    <option>Customer Service</option>
                                    <option>Customer Service</option>
                                    <option>Customer Service</option>
                                    <option>Customer Service</option>
                                    <option>Customer Service</option>
                                </select>
                            </div>
                            <div style={{ marginTop: '25px' }}>
                                <p className='Fo-contactBox1Title'>MESSAGE</p>
                                <input type='text' className='Fo-contactBox1InputBox' />
                            </div>
                            <button className='Fo-contactBox1BtnSub'>SUBMIT</button>
                        </div>
                        <div className='Fo-contactBox2'>
                            <p className='Fo-contactBox2Title'>Have questions?</p>
                            <p className='Fo-contactBox2Desc'>Sonasons is Here For You! Fill the line below or email us directly</p>

                            <p style={{
                                fontSize: '15px',
                                fontWeight: 600
                            }}>General inquiries:<span style={{
                                fontWeight: 400,
                                fontSize: '13px'
                            }}>  Info@sonasons.com</span></p>

                            <p style={{
                                fontSize: '15px',
                                fontWeight: 600
                            }}>Customer inquiries:<span tyle={{
                                fontWeight: 400,
                                fontSize: '13px'
                            }}>  order@sonasons.com</span></p>

                            <p style={{
                                fontSize: '15px',
                                fontWeight: 600
                            }}>Orders & Returns:<spna tyle={{
                                fontWeight: 400,
                                fontSize: '13px'
                            }}>  order@sonasons.com</spna></p>

                            <p className='Fo-contactBox2Desc'>If you are looking for instant answers, check out our FAQ page for more information!</p>
                            <p className='Fo-contactBox2Title'>Orders & Returns</p>
                            <p className='Fo-contactBox2Desc'>Check out our FAQ page or our Orders & Retuns page</p>
                            <p className='Fo-contactBox2Title'>Call us at +1 212 596 4163</p>
                            <p className='Fo-contactBox2Desc'>Our customer service team is available by phone from Monday-Friday 9.30am-6:30pm EST and Saturday 10am-5pm EST.</p>
                            <p className='Fo-contactBox2Desc'>Our office is located at 33W 46th Str, STE#9W, New York, NY 10036</p>
                        </div>
                    </div>
                                
                    <SmilingRock />
                    <Footer />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', paddingBlock: '30px' }}>
                <p style={{ margin: '0px', fontWeight: 500, width: '100px', color: 'white', cursor: 'pointer' }} onClick={() => window.scrollTo(0, 0)}>BACK TO TOP</p>
            </div>
        </div>
    )
}
