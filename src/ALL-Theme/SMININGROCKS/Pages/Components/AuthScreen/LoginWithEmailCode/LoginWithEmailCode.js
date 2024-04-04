import React, { useEffect, useState } from 'react';
import Header from '../../home/Header/Header';
import { Button, CircularProgress, IconButton, InputAdornment, TextField } from '@mui/material';
import Footer from '../../home/Footer/Footer';
import { CommonAPI } from '../../../../Utils/API/CommonAPI';
import { useNavigate } from 'react-router-dom';
import './LoginWithEmailCode.css';
import CryptoJS from 'crypto-js';
import { ToastContainer, toast } from 'react-toastify';

export default function LoginWithEmailCode() {
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigate();
    const [mobileNo, setMobileNo] = useState('');
    const [resendTimer, setResendTimer] = useState(120);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const storedEmail = localStorage.getItem('registerEmail');
                const storeInit = JSON.parse(localStorage.getItem('storeInit'));
                const { FrontEnd_RegNo } = storeInit;

                if (storedEmail) {
                    setEmail(storedEmail);
                    const value = localStorage.getItem('LoginCodeEmail');
                    if (value === 'true') {
                        const combinedValue = JSON.stringify({
                            userid: storedEmail, FrontEnd_RegNo: FrontEnd_RegNo
                        });
                        const encodedCombinedValue = btoa(combinedValue);
                        const body = {
                            con: "{\"id\":\"\",\"mode\":\"WEBSCEMAIL\"}",
                            f: "LoginWithEmailCode (firstTimeOTP)",
                            p: encodedCombinedValue
                        };
                        const response = await CommonAPI(body);
                        if (response.Data.Table1[0].stat === '1') {
                            localStorage.setItem('LoginCodeEmail', 'false');
                            toast.success('OTP send Sucssessfully');
                        } else {
                            toast.error('OTP send Error');
                        }
                    }
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchData();
    }, []);


    useEffect(() => {
        if (resendTimer > 0) {
            const interval = setInterval(() => {
                setResendTimer(prevTimer => {
                    if (prevTimer === 0) {
                        clearInterval(interval);
                        return 0;
                    }
                    return prevTimer - 1;
                });
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [resendTimer]);

    // const handleResendTimer = () => {
    //     const interval = setInterval(() => {
    //         setResendTimer(prevTimer => {
    //             if (prevTimer === 0) {
    //                 clearInterval(interval);
    //                 return 0;
    //             }
    //             return prevTimer - 1;
    //         });
    //     }, 1000);
    // };

    const handleInputChange = (e, setter, fieldName) => {
        const { value } = e.target;
        setter(value);
        if (fieldName === 'mobileNo') {
            if (!value.trim()) {
                setErrors(prevErrors => ({ ...prevErrors, mobileNo: 'Code is required' }));
            } else {
                setErrors(prevErrors => ({ ...prevErrors, mobileNo: '' }));
            }
        }
    };

    const handleSubmit = async () => {
        if (!mobileNo.trim()) {
            errors.mobileNo = 'Password is required';
            return;
        }

        try {
            setIsLoading(true);
            const storeInit = JSON.parse(localStorage.getItem('storeInit'));
            const { FrontEnd_RegNo } = storeInit;

            const combinedValue = JSON.stringify({
                userid: `${email}`, mobileno: '', pass: `${mobileNo}`, mobiletoken: 'otp_email_login', FrontEnd_RegNo: `${FrontEnd_RegNo}`
            });
            const encodedCombinedValue = btoa(combinedValue);
            const body = {
                "con": "{\"id\":\"\",\"mode\":\"WEBLOGIN\"}",
                "f": "LoginWithEmail (handleSubmit)",
                p: encodedCombinedValue
            };
            const response = await CommonAPI(body);
            if (response.Data.rd[0].stat === 1) {
                localStorage.setItem('LoginUser', 'true')
                navigation('/');
            } else {
                errors.mobileNo = 'Code is Invalid'
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };


    const handleResendCode = async () => {
        setResendTimer(120);
        try {
            const storeInit = JSON.parse(localStorage.getItem('storeInit'));
            const { FrontEnd_RegNo } = storeInit;
            const combinedValue = JSON.stringify({
                userid: `${email}`, FrontEnd_RegNo: `${FrontEnd_RegNo}`
            });
            const encodedCombinedValue = btoa(combinedValue);
            const body = {
                "con": "{\"id\":\"\",\"mode\":\"WEBSCEMAIL\"}",
                "f": "LoginWithEmailCode (firstTimeOTP)",
                p: encodedCombinedValue
            };
            const response = await CommonAPI(body);
            if (response.Data.Table1[0].stat === '1') {
                localStorage.setItem('LoginCodeEmail', 'false');
                toast.success('OTP send Sucssessfully');
            } else {
                toast.error('OTP send Error');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='paddingTopMobileSet' style={{ backgroundColor: '#c0bbb1', paddingTop: '110px' }}>
            <ToastContainer />
            {isLoading && (
                <div className="loader-overlay">
                    <CircularProgress className='loadingBarManage' />
                </div>
            )}
            <div style={{ backgroundColor: '#c0bbb1' }}>
                <div className='smling-forgot-main'>
                    <p style={{
                        textAlign: 'center',
                        paddingBlock: '60px',
                        marginTop: '15px',
                        fontSize: '40px',
                        color: '#7d7f85',
                        fontFamily: 'FreightDispProBook-Regular,Times New Roman,serif'
                    }}
                    className='AuthScreenMainTitle'
                    >Login With Code</p>
                    <p style={{
                        textAlign: 'center',
                        marginTop: '-80px',
                        fontSize: '15px',
                        color: '#7d7f85',
                        fontFamily: 'FreightDispProBook-Regular,Times New Roman,serif'
                    }}
                    className='AuthScreenSubTitle'
                    >Last step! To secure your account, enter the code we just sent to {email}.</p>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
                        <TextField
                            autoFocus
                            id="outlined-basic"
                            label="Enter Code"
                            variant="outlined"
                            className='labgrowRegister'
                            style={{ margin: '15px' }}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter') {
                                    handleSubmit();
                                }
                            }}
                            value={mobileNo}
                            onChange={(e) => handleInputChange(e, setMobileNo, 'mobileNo')}
                            error={!!errors.mobileNo}
                            helperText={errors.mobileNo}
                        />

                        <button className='submitBtnForgot' onClick={handleSubmit}>Login</button>
                        <p style={{ marginTop: '10px' }}>Didn't get the code ? {resendTimer === 0 ? <span style={{ fontWeight: 500, color: 'blue', textDecoration: 'underline', cursor: 'pointer' }} onClick={handleResendCode}>Resend Code</span> : <span>Resend in {Math.floor(resendTimer / 60).toString().padStart(2, '0')}:{(resendTimer % 60).toString().padStart(2, '0')}</span>}</p>
                        <Button style={{marginTop: '10px' ,color: 'gray'}} onClick={() => navigation('/LoginOption')}>CANCEL</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
