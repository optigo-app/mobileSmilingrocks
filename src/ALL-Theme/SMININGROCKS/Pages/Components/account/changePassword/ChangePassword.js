import React, { useEffect, useState } from 'react'
import CryptoJS from 'crypto-js';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, CircularProgress, IconButton, InputAdornment, Tab, Tabs, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { CommonAPI } from '../../../../Utils/API/CommonAPI';
import './ChangePassword.css'

export default function ChangePassword() {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const [passwordError, setPasswordError] = useState('');
    const naviagation = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [customerID, setCustomerID] = useState('');

    useEffect(() => {
        const storedEmail = localStorage.getItem('registerEmail');
        if (storedEmail) setEmail(storedEmail);

        const storedData = localStorage.getItem('loginUserDetail');
        const data = JSON.parse(storedData);
        setCustomerID(data?.id);

    }, []); // 



    const handleInputChange = (e, setter, fieldName) => {
        const { value } = e.target;
        setter(value);
        if (fieldName === 'confirmPassword') { // Handle confirm password validation
            if (!value.trim()) {
                setErrors(prevErrors => ({ ...prevErrors, confirmPassword: 'Confirm Password is required' }));
            } else if (value !== password) {
                setErrors(prevErrors => ({ ...prevErrors, confirmPassword: 'Passwords do not match' }));
            } else {
                setErrors(prevErrors => ({ ...prevErrors, confirmPassword: '' }));
            }
        } else if (fieldName === 'oldPassword') {
            if (!value.trim()) {
                setErrors(prevErrors => ({ ...prevErrors, oldPassword: 'oldPassword is required' }));
            } else {
                setErrors(prevErrors => ({ ...prevErrors, oldPassword: '' }));
            }
        }
    };

    const validatePassword = (value) => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[^\w\d\s]).{8,}$/;
        return passwordRegex.test(value);
      };
      
    const handlePasswordChange = (event) => {
        const { value } = event.target;
        setPassword(value);
        if (!validatePassword(value)) {
            setPasswordError('Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number.');
        } else {
            setPasswordError('');
        }
    };


    const handleTogglePasswordVisibility = (fieldName) => {
        if (fieldName === 'password') {
            setShowPassword(!showPassword);
        } else if (fieldName === 'confirmPassword') {
            setShowConfirmPassword(!showConfirmPassword);
        } else if (fieldName === 'oldPassword') {
            setShowOldPassword(!showOldPassword);
        }

    };

    function hashPasswordSHA1(password) {
        const hashedPassword = CryptoJS.SHA1(password).toString(CryptoJS.enc.Hex);
        return hashedPassword;
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseDownConfirmPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = {};

        if (!oldPassword.trim()) {
            errors.oldPassword = 'oldPassword is required';
        }

        if (!password.trim()) {
            setPasswordError('Password is required');
            errors.password = 'Password is required';
        }

        if (!confirmPassword.trim()) {
            errors.confirmPassword = 'Confirm Password is required';
        } else if (confirmPassword !== password) {
            errors.confirmPassword = 'Passwords do not match';
        }

        if (Object.keys(errors).length === 0) {

            const hashedOldPassword = hashPasswordSHA1(oldPassword);
            const hashedPassword = hashPasswordSHA1(password);
            const hashedConfirmPassword = hashPasswordSHA1(confirmPassword);
            setIsLoading(true);
            try {
                const storeInit = JSON.parse(localStorage.getItem('storeInit'));
                const { FrontEnd_RegNo } = storeInit;
                const combinedValue = JSON.stringify({
                    oldpassword: `${hashedOldPassword}`, newpassword: `${hashedPassword}`, confirmpassword: `${hashedConfirmPassword}`, FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerID}`
                });
                const encodedCombinedValue = btoa(combinedValue);
                const body = {
                    "con": `{\"id\":\"\",\"mode\":\"CHANGEPASS\",\"appuserid\":\"${email}\"}`,
                    "f": "Account (changePassword)",
                    "p": encodedCombinedValue
                }
                const response = await CommonAPI(body);

                console.log('response',response);
                if (response.Data.rd[0].stat === 1) {
                    localStorage.setItem('LoginUser', 'false');
                    naviagation('/')
                    window.location.reload()
                } else {
                    alert(response.Data.rd[0].stat_msg);
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setIsLoading(false);
            }
        } else {
            setErrors(errors);
        }
    };

    return (
        <div>
            {isLoading && (
                <div className="loader-overlay">
                    <CircularProgress className='loadingBarManage' />
                </div>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <TextField
                    id="outlined-confirm-password-input"
                    label="Old Password"
                    type={showOldPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    className='labgrowRegister'
                    style={{ margin: '15px' }}
                    value={oldPassword}
                    onChange={(e) => handleInputChange(e, setOldPassword, 'oldPassword')}
                    error={!!errors.oldPassword}
                    helperText={errors.oldPassword}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => handleTogglePasswordVisibility('oldPassword')}
                                    onMouseDown={handleMouseDownConfirmPassword}
                                    edge="end"
                                >
                                    {showOldPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    className='labgrowRegister'
                    style={{ margin: '15px' }}
                    value={password}
                    onChange={handlePasswordChange}
                    error={!!passwordError}
                    helperText={passwordError}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => handleTogglePasswordVisibility('password')}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

                <TextField
                    id="outlined-confirm-password-input"
                    label="Confirm Password"
                    type={showConfirmPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    className='labgrowRegister'
                    style={{ margin: '15px' }}
                    value={confirmPassword}
                    onChange={(e) => handleInputChange(e, setConfirmPassword, 'confirmPassword')}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword}
                    InputProps={{ // Set InputProps for icon
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => handleTogglePasswordVisibility('confirmPassword')}
                                    onMouseDown={handleMouseDownConfirmPassword}
                                    edge="end"
                                >
                                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

                <button className='createBtnRegister' onClick={handleSubmit}>Forgot Password</button>
            </div>
        </div>
    )
}
