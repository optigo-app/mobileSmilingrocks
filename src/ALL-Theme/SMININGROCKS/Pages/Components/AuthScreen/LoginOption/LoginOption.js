import React from 'react'
import './LoginOption.css'
import { IoClose } from 'react-icons/io5';
import { FaMobileAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import Footer from '../../home/Footer/Footer';
import { FiArrowLeft } from "react-icons/fi";
import titleImg from "../../../assets/title/sonasons.png"

export default function LoginOption() {

    const navigation = useNavigate();

    return (
        <div className='paddingTopMobileSet' style={{
            paddingTop: '110px'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', padding: '0px 0px 0px 5px', borderBottom: '1px solid lightgray' }}>
                <FiArrowLeft style={{ height: '25px', width: '25px' }} onClick={() => navigation('/')} />
                <div style={{ width: '85%', display: 'flex', justifyContent: 'center' }}>
                    <img src={titleImg} className="MainlogogMobileImage" />
                </div>
            </div>

            <div className='loginDailog'>
                <div>
                    <p className='loginDiTile'>Log in or sign up</p>
                    <p style={{ textAlign: 'center', fontSize: '11px', marginTop: '10px' }}>Use your email or mobile no to continue with the organization.</p>
                    <div className='smilingLoginOptionMain'>
                        <div className='loginMail' onClick={() => navigation('/ContinueWithEmail')}>
                            <IoMdMail style={{ height: '25px', width: '25px' }} />
                            <p style={{ margin: '0px', fontSize: '18px', fontWeight: 500, paddingLeft: '25px' }}>Continue with email</p>
                        </div>
                        <div className='loginMobile' onClick={() => navigation('/ContimueWithMobile')}>
                            <FaMobileAlt style={{ height: '25px', width: '25px', marginRight: '10px' }} />
                            <p style={{ margin: '0px', fontSize: '18px', fontWeight: 500, paddingLeft: '25px' }}>Log in with mobile</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <p style={{ marginTop: '40px', fontSize: '14px', textAlign: 'center', width: '90%' }}>By continuing, you agree to our Terms of Use. Read our Privacy Policy.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
