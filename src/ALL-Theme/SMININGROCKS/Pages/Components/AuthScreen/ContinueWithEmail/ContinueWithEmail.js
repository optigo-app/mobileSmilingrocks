import React, { useState } from 'react';
import Header from '../../home/Header/Header';
import './ContinueWithEmail.css';
import { Button, CircularProgress, TextField } from '@mui/material';
import Footer from '../../home/Footer/Footer';
import { CommonAPI } from '../../../../Utils/API/CommonAPI';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import { FiArrowLeft } from "react-icons/fi";
import titleImg from "../../../assets/title/sonasons.png"

export default function ContinueWithEmail() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigate();

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z][\w@$&#]*@[a-zA-Z]+\.[a-zA-Z]+(\.[a-zA-Z]+)?$/;
        return regex.test(email);
    };

    const handleEmailChange = (event) => {
        const { value } = event.target;
        const trimmedValue = value.trim();
        setEmail(trimmedValue);
        if (!trimmedValue) {
            setEmailError('Email is required.');
        } else if (!validateEmail(trimmedValue)) {
            setEmailError('Please enter a valid email');
        } else {
            setEmailError('');
        }
    };

    const handleSubmit = async () => {
        const trimmedEmail = email.trim();
        if (!trimmedEmail) {
            setEmailError('Email is required.');
            return;
        }
        if (!validateEmail(trimmedEmail)) {
            setEmailError('Please enter a valid email.');
            return;
        }
        try {
            setIsLoading(true);
            const storeInit = JSON.parse(localStorage.getItem('storeInit'));
            const { FrontEnd_RegNo } = storeInit;

            const combinedValue = JSON.stringify({
                userid: `${trimmedEmail}`, FrontEnd_RegNo: `${FrontEnd_RegNo}`
            });
            const encodedCombinedValue = btoa(combinedValue);
            const body = {
                "con": "{\"id\":\"\",\"mode\":\"WEBVALDNEMAIL\"}",
                "f": "emilValid (handleEmail)",
                p: encodedCombinedValue
            };
            const response = await CommonAPI(body);
            console.log('ressssssss', response);
            if (response.Data.rd[0].stat == 1 && response.Data.rd[0].islead == 1) {
                toast.error('You are not a customer, contact to admin')
            } else if (response.Data.rd[0].stat == 1 && response.Data.rd[0].islead == 0) {
                navigation('/LoginWithEmail', { state: { email: trimmedEmail } });
                if (trimmedEmail) {
                    localStorage.setItem("userEmailForPdList", trimmedEmail);
                }
            } else {
                navigation('/register', { state: { email: trimmedEmail } });
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='paddingTopMobileSet'>
            <ToastContainer />

            {isLoading && (
                <div className="loader-overlay">
                    <CircularProgress className='loadingBarManage' />
                </div>
            )}
            <div>
                <div style={{display:'flex', alignItems:'center', margin: '10px 0px 0px 15px' }}>
                    <FiArrowLeft style={{ height: '25px', width: '25px' }} onClick={() => navigation('/LoginOption')} />
                    <div style={{width: '85%', display: 'flex', justifyContent: 'center'}}>
                        <img src={titleImg} className="MainlogogMobileImage" />
                    </div>
                </div>
                <div className='smling-forgot-main' style={{ paddingTop: '10%' }}>
                    <p style={{
                        textAlign: 'center',
                        paddingBlock: '60px',
                        marginTop: '15px',
                        fontSize: '40px',
                        color: '#7d7f85',
                        fontFamily: 'FreightDispProBook-Regular,Times New Roman,serif'
                    }}
                        className='AuthScreenMainTitle'
                    >Continue With Email</p>
                    <p style={{
                        textAlign: 'center',
                        marginTop: '-60px',
                        fontSize: '14px',
                        color: '#7d7f85',
                        fontFamily: 'FreightDispProBook-Regular,Times New Roman,serif'
                    }}

                        className='AuthScreenSubTitle'
                    >We'll check if you have an account, and help create one if you don't.</p>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
                        <TextField
                            autoFocus
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            className='labGrowForgot'
                            style={{ margin: '15px' }}
                            value={email}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter') {
                                    handleSubmit();
                                }
                            }}
                            onChange={handleEmailChange}
                            error={!!emailError}
                            helperText={emailError}
                        />

                        <button type='submit' className='submitBtnForgot' onClick={handleSubmit}>SUBMIT</button>
                        <Button style={{ marginTop: '10px', color: 'gray' }} onClick={() => navigation('/LoginOption')}>BACK</Button>

                    </div>
                </div>
            </div>
        </div>
    );
}
