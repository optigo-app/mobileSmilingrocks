import React from 'react'
import './Footer.css'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { MdOutlineMusicNote } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
export default function Footer() {

    const navigation = useNavigate();

    return (
        <div>
            <div className='gorjanaFooterMain'>
                <div className='gorjanaFooterMainSub'>
                    <div className='gorjanaFooterMainBox1'>
                        <p style={{
                            fontFamily: 'Freight Big Pro,serif',
                            fontSize: '25px',
                            fontWeight: 300,
                            margin: '0px'
                        }}>Newsletter Sign-up</p>
                        <p style={{
                            fontSize: '14px',
                            width: '80%'
                        }}>Get insider information about exclusive offers, events and more.</p>
                        <input type='text' placeholder='Email Address' className='gorjanaFooterMainBox1Input' />
                    </div>
                    <div className='gorjanaFooterMainBox2'>
                        <p className='gorjanaFooterLink' onClick={() => navigation('/FAQ')}>FAQ</p>
                        <p className='gorjanaFooterLink' onClick={() => navigation('/ContactUs')}>Contact Us</p>
                        <p className='gorjanaFooterLink' onClick={() => navigation('/shipping')}>Shipping & Returns</p>
                        <p className='gorjanaFooterLink' onClick={() => navigation('/storeLocatore')}>Store Locator</p>
                        <p className='gorjanaFooterLink' onClick={() => navigation('/WholeSale')}>Wholesale</p>
                        <p className='gorjanaFooterLink' onClick={() => navigation('/Carrers')}>Careers</p>
                    </div>
                    <div className='gorjanaFooterMainBox3'>
                        <p style={{ fontSize: '19px', fontWeight: 500 }}>Contact Us</p>
                        <p>866.829.0030</p>
                        <p>customercare@gorjana.com</p>
                        <div style={{ display: 'flex' }}>
                            <FaTwitter style={{ margin: '5px', cursor: 'pointer' }} />
                            <FaFacebookF style={{ margin: '5px', cursor: 'pointer' }} />
                            <FaInstagram style={{ margin: '5px', cursor: 'pointer' }} />
                            <TfiYoutube style={{ margin: '5px', cursor: 'pointer' }} />
                            <MdOutlineMusicNote style={{ margin: '5px', cursor: 'pointer' }} />
                        </div>
                    </div>
                </div>
                <div className='gorFooterBottomMain' >
                    <div>
                        <p>© 2023 gorjana & Griffin, Inc. All rights reserved.</p>
                    </div>
                    <div className='gorFooterBottomLinkmain'>
                        <p className='gorFooterBottomLink' onClick={() => navigation('/accessibility')}>Accessibility</p>
                        <p className='gorFooterBottomLink' onClick={() => navigation('/privacyPolicy')}>Privacy Policy</p>
                        <p className='gorFooterBottomLink' onClick={() => navigation('/Terms')}>Terms</p>
                        <p style={{ paddingInline: '15px', fontSize: '14px' }}>Do Not Share My Information</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
