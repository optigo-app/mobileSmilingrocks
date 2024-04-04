import React from 'react'
import './LoginOption.css'
import { IoClose } from 'react-icons/io5';
import { FaMobileAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import Footer from '../../home/Footer/Footer';

export default function LoginOption() {

    const navigation = useNavigate();

    return (
        <div className='paddingTopMobileSet' style={{
            backgroundColor: '#c0bbb1',
            paddingTop: '110px'
        }}>
            <div className='loginDailog'>
                <div>
                    <p className='loginDiTile'>Log in or sign up in seconds</p>
                    <p style={{ textAlign: 'center' }}>Use your email or mobile no to continue with the organization.</p>
                    <div className='smilingLoginOptionMain'>
                        <div className='loginMail' onClick={() => navigation('/ContinueWithEmail')}>
                            <IoMdMail style={{ height: '25px', width: '25px' }} />
                            <p style={{ margin: '0px', fontSize: '20px', fontWeight: 500, paddingLeft: '25px' }}>Continue with email</p>
                        </div>
                        <div className='loginMobile' onClick={() => navigation('/ContimueWithMobile')}>
                            <FaMobileAlt style={{ height: '25px', width: '25px', marginRight: '10px' }} />
                            <p style={{ margin: '0px', fontSize: '20px', fontWeight: 500, paddingLeft: '25px' }}>Log in with mobile</p>
                        </div>
                    </div>
                    <p style={{ marginTop: '40px', fontSize: '14px' , textAlign: 'center' }}>By continuing, you agree to our Terms of Use. Read our Privacy Policy.</p>
                </div>
            </div>
        </div>
    )
}
