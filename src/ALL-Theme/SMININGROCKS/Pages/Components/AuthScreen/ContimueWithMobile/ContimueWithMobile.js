import React, { useState } from 'react';
import Header from '../../home/Header/Header';
import { Button, CircularProgress, TextField } from '@mui/material';
import Footer from '../../home/Footer/Footer';
import { CommonAPI } from '../../../../Utils/API/CommonAPI';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { FiArrowLeft } from "react-icons/fi";
import titleImg from "../../../assets/title/sonasons.png"

export default function ContimueWithMobile() {
    const [mobileNo, setMobileNo] = useState('');
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [buttonFocused, setButtonFocused] = useState(false);
    const navigation = useNavigate();

    const handleInputChange = (e, setter, fieldName) => {
        const { value } = e.target;
        const trimmedValue = value.trim();
        const formattedValue = trimmedValue.replace(/\s/g, '');

        setter(formattedValue);

        if (fieldName === 'mobileNo') {
            if (!formattedValue) {
                setErrors(prevErrors => ({ ...prevErrors, mobileNo: 'Mobile No. is required' }));
            } else if (!/^\d{10}$/.test(formattedValue)) {
                setErrors(prevErrors => ({ ...prevErrors, mobileNo: 'Enter Valid mobile number' }));
            } else {
                setErrors(prevErrors => ({ ...prevErrors, mobileNo: '' }));
            }
        }
    };
    const handleSubmit = async () => {
        if (isSubmitting) {
            return;
        }

        if (!mobileNo.trim()) {
            setErrors({ mobileNo: 'Mobile No. is required' });
            return;
        } else if (!/^\d{10}$/.test(mobileNo.trim())) {
            setErrors({ mobileNo: 'Enter Valid mobile number' });
            return;
        }

        try {
            setIsLoading(true);
            setIsSubmitting(true);
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
            console.log('log.........', response);
            if (response.Data.Table1[0].stat === '1' && response.Data.Table1[0].islead === '1') {
                toast.error('You are not a customer, contact to admin')
            } else if (response.Data.Table1[0].stat === '1' && response.Data.Table1[0].islead === '0') {
                navigation('/LoginWithMobileCode', { state: { mobileNo: mobileNo } });
                localStorage.setItem('registerMobile', mobileNo)
            } else {
                navigation('/register', { state: { mobileNo: mobileNo } });
                localStorage.setItem('registerMobile', mobileNo)
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsSubmitting(false);
            setIsLoading(false);
        }
    };

    return (
        <div className='paddingTopMobileSet' style={{ paddingTop: '110px' }}>
            <ToastContainer />
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
                    >Continue With Mobile</p>
                    <p style={{
                        textAlign: 'center',
                        marginTop: '-60px',
                        fontSize: '15px',
                        color: '#7d7f85',
                        fontFamily: 'FreightDispProBook-Regular,Times New Roman,serif'
                    }}
                        className='AuthScreenSubTitle'
                    >We'll check if you have an account, and help create one if you don't.</p>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <TextField
                            autoFocus
                            id="outlined-basic"
                            label="Enetr Mobile No"
                            variant="outlined"
                            className='labgrowRegister'
                            onKeyDown={(event) => {
                                if (event.key === 'Enter') {
                                    handleSubmit();
                                }
                            }}
                            style={{ margin: '15px' }}
                            value={mobileNo}
                            onChange={(e) => handleInputChange(e, setMobileNo, 'mobileNo')}
                            error={!!errors.mobileNo}
                            helperText={errors.mobileNo}
                        />

                        <button className='submitBtnForgot' onClick={handleSubmit}>
                            SUBMIT
                        </button>
                        <Button style={{ marginTop: '10px', color: 'gray' }} onClick={() => navigation('/LoginOption')}>BACK</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
