import React, { useState } from 'react'
import Header from '../home/Header/Header'
import './SignIn.css';
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import Footer from '../home/Footer/Footer';
import { Box, Modal } from '@mui/material';
import { IoMdClose } from "react-icons/io";

export default function SignIn() {

    const style = {
   
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div style={{ filter: open && 'blur(10px)' }}>
            <Header />
            <div className='gorAuthMain'>
                <p className='gorAuthMainTitle'>Account</p>
                <div className='gorAuthMainSub'>
                    <div className='gorSignInMain'>
                        <p style={{ fontSize: '35px', margin: '20px 0px 0px 0px', color: '#283045', fontFamily: 'Freight Big Pro,serif' }}>Sign In</p>
                        <p>Sign in with email address.</p>
                        <p style={{ margin: '0px 0px 10px 0px', fontSize: '13px' }}>Email Address*</p>
                        <input type='text' placeholder='Enter Your Email Address' className='gorEmailInputBox' />

                        <p style={{ margin: '15px 0px 10px 0px', fontSize: '13px' }}>Password*</p>
                        <input type='password' placeholder='Enter Your Password' className='gorEmailInputBox' />

                        <p className='gorForgotLink' onClick={handleOpen}>Forgot your password?</p>

                        <button className='gorSignINBtn'>SIGN IN</button>
                        <p style={{ width: '90%', textAlign: 'center', marginBlock: '20px' }}>Or</p>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <p style={{ fontSize: '14px', margin: '0px', marginInline: '10px', }}>Sign in with</p>
                            <FaFacebookF style={{ height: '40px', marginInline: '10px', padding: '5px', width: '40px', backgroundColor: '#4d5469', color: 'white' }} />
                            <FaGoogle style={{ height: '40px', marginInline: '10px', padding: '5px', width: '40px', backgroundColor: '#4d5469', color: 'white' }} />
                        </div>
                    </div>
                    <div className='gorRegisterMain'>
                        <p style={{ fontSize: '35px', margin: '20px 0px 0px 0px', color: '#283045', fontFamily: 'Freight Big Pro,serif' }}>Create Account</p>
                        <p>Create an account for faster checkout.</p>
                        <div className='gorRegisterFLname'>
                            <div className='gorRegisterFLnameFirst'>
                                <p style={{ margin: '0px 0px 10px 0px', fontSize: '13px' }}>First Name*</p>
                                <input type='text' placeholder='Your first name' className='gorEmailInputBoxFirst' />
                            </div>
                            <div className='gorRegisterFLnameLast'>
                                <p style={{ margin: '0px 0px 10px 0px', fontSize: '13px' }}>Last Name*</p>
                                <input type='text' placeholder='Your last name' className='gorEmailInputBoxFirst' />
                            </div>
                        </div>
                        <p style={{ margin: '15px 0px 10px 0px', fontSize: '13px' }}>Email Address*</p>
                        <input type='text' placeholder='Enter Your Email Address' className='gorEmailInputBox' />

                        <p style={{ margin: '15px 0px 10px 0px', fontSize: '13px' }}>Create Password*</p>
                        <input type='password' placeholder='Create a password' className='gorEmailInputBox' />

                        <p style={{ fontSize: '12px', marginBlock: '5px', }}><i>Minimum 8 characters with at least one uppercase, one lowercase, one special character and a number.</i></p>
                        <p style={{ margin: '15px 0px 10px 0px', fontSize: '13px' }}>Confirm Password*</p>
                        <input type='password' placeholder='Confirm your password' className='gorEmailInputBox' />
                        <div style={{ display: 'flex', marginBlock: '8px' }}>
                            <input type='checkbox' />
                            <p style={{ margin: '0px' }}>Yes, I'd like to get insider information about exclusive offers, events and more.</p>
                        </div>
                        <button className='gorRegisterBtn'>CREATE ACCOUNT</button>
                    </div>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                sx={{
                    outline: 'none',
                    border: 'none'
                }}
            >
                <Box component={'div'} className='gorForgotPopup'>

                    <div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <IoMdClose onClick={handleClose} style={{ height: '30px', width: '30px', cursor: 'pointer' }} />
                        </div>
                        <p style={{ fontSize: '35px', marginTop: '25px', textAlign: 'center', fontFamily: 'Freight Big Pro,serif' }}>Recover Your Password</p>
                        <p style={{ fontSize: '15px', textAlign: 'center' }}>Enter the email address associated with your account and we'll send you a link to log in.</p>
                        <div style={{ display: 'flex', marginBlock: '20px', justifyContent: 'center' }}>
                            <input type='text' placeholder='Email Address' className='gorEmailInputBox' />
                        </div>

                        <p style={{ fontSize: '18px', cursor: 'pointer', textDecoration: 'underline', textAlign: 'center' }} onClose={handleClose}>CANCEL</p>
                    </div>
                </Box>
            </Modal>
            <div style={{ marginTop: '80px' }}>
                <Footer />
            </div>
        </div>
    )
}
