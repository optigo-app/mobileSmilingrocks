import React, { useEffect, useState } from 'react';
import Header from '../../home/Header/Header';
import { Button, CircularProgress, IconButton, InputAdornment, TextField } from '@mui/material';
import Footer from '../../home/Footer/Footer';
import { CommonAPI } from '../../../../Utils/API/CommonAPI';
import { useNavigate } from 'react-router-dom';
import './LoginWithMobileCode.css';
import { useSetRecoilState } from 'recoil';
import { loginState } from '../../../../../../Recoil/atom';
import { FiArrowLeft } from "react-icons/fi";
import titleImg from "../../../assets/title/sonasons.png"

export default function LoginWithMobileCode() {
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigate();
    const [mobileNo, setMobileNo] = useState('');
    const [enterOTP, setEnterOTP] = useState('');
    const [resendTimer, setResendTimer] = useState(120);
    const setIsLoginState = useSetRecoilState(loginState)


    useEffect(() => {
        const storedMobile = localStorage.getItem('registerMobile');
        if (storedMobile) setMobileNo(storedMobile);
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

    const handleInputChange = (e, setter, fieldName) => {
        const { value } = e.target;
        setter(value);
        if (fieldName === 'mobileNo') {
            if (!value.trim()) {
                setErrors(prevErrors => ({ ...prevErrors, otp: 'Code is required' }));
            } else {
                setErrors(prevErrors => ({ ...prevErrors, otp: '' }));
            }
        }
    };

    const handleSubmit = async () => {
        if (!enterOTP.trim()) {
            errors.otp = 'Code is required';
            return;
        }

        try {
            setIsLoading(true);
            const storeInit = JSON.parse(localStorage.getItem('storeInit'));
            const { FrontEnd_RegNo } = storeInit;
            const combinedValue = JSON.stringify({
                userid: '', mobileno: `${mobileNo}`, pass: `${enterOTP}`, mobiletoken: 'otp_mobile_login', FrontEnd_RegNo: `${FrontEnd_RegNo}`
            });
            const encodedCombinedValue = btoa(combinedValue);
            const body = {
                "con": "{\"id\":\"\",\"mode\":\"WEBLOGIN\"}",
                "f": "LoginWithMobileOTP (handleSubmit)",
                p: encodedCombinedValue
            };
            const response = await CommonAPI(body);
            console.log('sssssssss', response);
            if (response.Data.rd[0].stat === 1) {
                localStorage.setItem('LoginUser', 'true')
                setIsLoginState('true')
                localStorage.setItem('loginUserDetail', JSON.stringify(response.Data.rd[0]));
                localStorage.setItem('registerMobile', mobileNo);
                navigation('/');
            } else {
                setErrors(prevErrors => ({ ...prevErrors, otp: 'Invalid Code' }));
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
                country_code: '91', mobile: `${mobileNo}`, FrontEnd_RegNo: `${FrontEnd_RegNo}`
            });
            const encodedCombinedValue = btoa(combinedValue);
            const body = {
                "con": "{\"id\":\"\",\"mode\":\"WEBVALDNMOBILE\"}",
                "f": "continueWithMobile (handleSubmit)",
                p: encodedCombinedValue
            };
            const response = await CommonAPI(body);
            if (response.Data.Table1[0].stat === '1') {
                alert('done..')
            } else {
                alert('done..')
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='paddingTopMobileSet' style={{ paddingTop: '110px' }}>
            {isLoading && (
                <div className="loader-overlay">
                    <CircularProgress className='loadingBarManage' />
                </div>
            )}
            <div>
                <div style={{ display: 'flex', alignItems: 'center', padding: '0px 0px 0px 5px', borderBottom: '1px solid lightgray' }}>
                    <FiArrowLeft style={{ height: '25px', width: '25px' }} onClick={() => navigation('/')} />
                    <div style={{ width: '85%', display: 'flex', justifyContent: 'center' }}>
                        <img src={titleImg} className="MainlogogMobileImage" />
                    </div>
                </div>
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
                    >Last step! To secure your account, enter the code we just sent to {mobileNo}.</p>

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
                            onChange={(e) => handleInputChange(e, setEnterOTP, 'mobileNo')}
                            error={!!errors.otp}
                            helperText={errors.otp}
                        />

                        <button className='submitBtnForgot' onClick={handleSubmit}>Login</button>
                        <p style={{ marginTop: '10px' }}>Didn't get the code ? {resendTimer === 0 ? <span style={{ fontWeight: 500, color: 'blue', textDecoration: 'underline', cursor: 'pointer' }} onClick={handleResendCode}>Resend Code</span> : <span>Resend in {Math.floor(resendTimer / 60).toString().padStart(2, '0')}:{(resendTimer % 60).toString().padStart(2, '0')}</span>}</p>
                        <Button style={{ marginTop: '10px', color: 'gray' }} onClick={() => navigation('/LoginOption')}>CANCEL</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
