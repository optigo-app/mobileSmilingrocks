import React from 'react'
import './ContactUs.css';
import Header from '../home/Header/Header';
import Footer from '../home/Footer/Footer';

export default function ContactUs() {
    return (
        <div>
            <Header />

            <div className='gorContactMain'>
                <p style={{ fontSize: '60px', textAlign: 'center', fontFamily: 'Freight Big Pro,serif' }}>Contact Us</p>
                <p style={{ textAlign: 'center', fontSize: '15px' }}>Have a question? Please feel free to contact our team below or email us directly at customercare@gorjana.com.</p>
                <p style={{ textAlign: 'center', fontSize: '15px' }}>You can also give us a call at 866.829.0030</p>
                <p style={{ textAlign: 'center', fontSize: '15px' }}>We are available Monday-Friday 6am-5pm PST and Saturday-Sunday 7am-3pm PST.</p>

                <p style={{ margin: '0px 0px 10px 0px', fontSize: '13px' }}>Full Name</p>
                <input type='text' placeholder='First and Last' className='gorContacInputBox' />

                <p style={{ margin: '0px 0px 10px 0px', fontSize: '13px', marginTop: '20px' }}>Email Address</p>
                <input type='text' placeholder='Email' className='gorContacInputBox' />

                <p style={{ margin: '0px 0px 10px 0px', fontSize: '13px', marginTop: '20px' }}>Issue</p>
                <select className='gorContacInputBox'>
                    <option>General Quetion</option>
                    <option>Order Error</option>
                    <option>General Quetion</option>
                    <option>Order Error</option>
                    <option>General Quetion</option>
                    <option>Order Error</option>
                    <option>General Quetion</option>
                    <option>Order Error</option>
                    <option>General Quetion</option>
                    <option>Order Error</option>
                    <option>General Quetion</option>
                    <option>Order Error</option>
                </select>

                <p style={{ margin: '0px 0px 10px 0px', fontSize: '13px', marginTop: '20px' }}>Message</p>
                <textarea type='text' placeholder='Message' className='gorContacInputMessageBox' />
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '25px' }}>
                    <button className='gorContactSubBtn'>SUBMIT</button>
                </div>
            </div>
            <div style={{marginTop: '50px'}}>
                <Footer />
            </div>
        </div>
    )
}
