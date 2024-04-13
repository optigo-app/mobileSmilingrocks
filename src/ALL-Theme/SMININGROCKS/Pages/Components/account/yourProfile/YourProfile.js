import React, { useEffect, useState } from 'react';
import './YourProfile.css';
import { TextField, Modal, Button, CircularProgress } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import { CommonAPI } from '../../../../Utils/API/CommonAPI';
import { loginState } from '../../../../../../Recoil/atom';
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import titleImg from "../../../assets/title/sonasons.png"


export default function YourProfile() {
    const [userData, setUserData] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [editedUserData, setEditedUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const naviagation = useNavigate();
    useEffect(() => {
        const storedUserData = localStorage.getItem('loginUserDetail');
        if (storedUserData) {
            setUserData(JSON.parse(storedUserData));
        }
    }, []);

    const handleEdit = () => {
        setEditedUserData({ ...userData });
        setEditMode(true);
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setEditedUserData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSave = async () => {

        setEditMode(false);
        try {
            setIsLoading(true);
            const storedData = localStorage.getItem('loginUserDetail');
            const data = JSON.parse(storedData);
            const storeInit = JSON.parse(localStorage.getItem('storeInit'));
            const { FrontEnd_RegNo } = storeInit;

            const combinedValue = JSON.stringify({
                firstname: `${editedUserData.defaddress_shippingfirstname}`, lastname: `${editedUserData.defaddress_shippinglastname}`, street: `${editedUserData.defaddress_state}`, addressprofile: `${editedUserData.defaddress_shippingfirstname + ' ' + editedUserData.defaddress_shippinglastname}`, city: `${editedUserData.city}`, state: `${editedUserData.state}`, country: `${userData.defaddress_country}`, zip: `${userData.defaddress_zip}`, mobile: `${userData.defaddress_shippingmobile}`, FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${editedUserData.id}`
            });

            const encodedCombinedValue = btoa(combinedValue);
            const body = {
                "con": `{\"id\":\"\",\"mode\":\"EDITPROFILE\",\"appuserid\":\"${data.userid}\"}`,
                "f": "YourProfile (EditProfile)",
                p: encodedCombinedValue
            };
            const response = await CommonAPI(body);
            if (response.Data.rd[0].stat === 1) {

                toast.success('Edit success');
                setUserData(editedUserData);
                localStorage.setItem('loginUserDetail', JSON.stringify(editedUserData));

            } else {
                toast.error('error');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);

        }


    };

    const setIsLoginState = useSetRecoilState(loginState)
    const handleLogout = () => {
        setIsLoginState('false')
        localStorage.setItem('LoginUser', 'false');
        localStorage.removeItem('storeInit');
        localStorage.removeItem('loginUserDetail');
        localStorage.removeItem('remarks');
        localStorage.removeItem('selectedAddressId');
        localStorage.removeItem('orderNumber');
        localStorage.removeItem('registerEmail');
        localStorage.removeItem('UploadLogicalPath');
        localStorage.removeItem('remarks');
        localStorage.removeItem('registerMobile');
        naviagation('/')
        window.location.reload();
    }

    const handleClose = () => {
        setEditMode(false);
    };

    return (
        <div>
            <ToastContainer />

            {isLoading && (
                <div className="loader-overlay">
                    <CircularProgress className='loadingBarManage' />
                </div>
            )}
            <div style={{ display: 'flex', width: '100%', alignItems: 'center', padding: '0px 0px 0px 5px', borderBottom: '1px solid lightgray', backgroundColor: 'white', zIndex: '111111' }}>
                <FiArrowLeft style={{ height: '25px', width: '25px' }} onClick={() => naviagation('/account')} />
                <div style={{ width: '85%', display: 'flex', justifyContent: 'center' }}>
                    <img src={titleImg} className="MainlogogMobileImage" />
                </div>
            </div>

            <p className='accountPageTitle'>Your Profile</p>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
                    {userData && (
                        <>
                            <div className='mobileEditProfileDiv'>
                                <TextField
                                    autoFocus
                                    id="defaddress_shippingfirstname"
                                    label="First Name"
                                    variant="outlined"
                                    className='labgrowRegister'
                                    style={{ margin: '15px', color: 'black' }}
                                    value={userData.defaddress_shippingfirstname !== "undefined" ? userData.defaddress_shippingfirstname : ""}
                                    disabled={!editMode}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    id="defaddress_shippinglastname"
                                    label="Last Name"
                                    variant="outlined"
                                    className='labgrowRegister'
                                    style={{ margin: '15px' }}
                                    value={userData.defaddress_shippinglastname !== "undefined" ? userData.defaddress_shippinglastname : ""}
                                    disabled={!editMode}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='mobileEditProfileDiv'>
                                <TextField
                                    id="userid"
                                    label="Email"
                                    variant="outlined"
                                    className='labgrowRegister'
                                    style={{ margin: '15px' }}
                                    value={userData.userid !== "undefined" ? userData.userid : ""}
                                    disabled={!editMode}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    id="defaddress_shippingmobile"
                                    label="Mobile No."
                                    variant="outlined"
                                    className='labgrowRegister'
                                    style={{ margin: '15px' }}
                                    value={userData.defaddress_shippingmobile !== "undefined" ? userData.defaddress_shippingmobile : ""}
                                    disabled={!editMode}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='mobileEditProfileDiv'>
                                <TextField
                                    id="defaddress_street"
                                    label="Address"
                                    variant="outlined"
                                    className='labgrowRegister'
                                    style={{ margin: '15px' }}
                                    value={userData.defaddress_street !== "undefined" ? userData.defaddress_street : ""}
                                    disabled={!editMode}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </>
                    )}
                </div>
                <div>
                    <button onClick={handleEdit} className='SmilingAddEditAddrwess' style={{ backgroundColor: 'lightgray', marginTop: '15px' }}>Edit Profile</button>
                </div>

            </div>

            <Modal
                open={editMode}
                onClose={handleClose}
            >
                <div className='smilingEditProfilePopup' style={{ position: 'absolute', backgroundColor: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 450, boxShadow: 24, p: 4 }}>
                    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                        <h2 style={{ marginTop: '30px', textAlign: 'center' }}>Edit Profile</h2>
                        {editedUserData && (
                            <>
                                <TextField
                                    id="defaddress_shippingfirstname"
                                    label="First Name"
                                    variant="outlined"
                                    style={{ margin: '15px' }}
                                    value={editedUserData.defaddress_shippingfirstname !== "undefined" ? editedUserData.defaddress_shippingfirstname : ""}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    id="defaddress_shippinglastname"
                                    label="Last Name"
                                    variant="outlined"
                                    style={{ margin: '15px' }}
                                    value={editedUserData.defaddress_shippinglastname !== "undefined" ? editedUserData.defaddress_shippinglastname : ""}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    id="userid"
                                    label="Email"
                                    variant="outlined"
                                    style={{ margin: '15px' }}
                                    value={editedUserData.userid !== "undefined" ? editedUserData.userid : ""}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    id="defaddress_shippingmobile"
                                    label="Mobile No."
                                    variant="outlined"
                                    style={{ margin: '15px' }}
                                    value={editedUserData.defaddress_shippingmobile !== "undefined" ? editedUserData.defaddress_shippingmobile : ""}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    id="defaddress_street"
                                    label="Address"
                                    variant="outlined"
                                    style={{ margin: '15px' }}
                                    value={editedUserData.defaddress_street !== "undefined" ? editedUserData.defaddress_street : ""}
                                    onChange={handleInputChange}
                                />
                            </>
                        )}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', marginBottom: '25px' }}>
                        <button onClick={handleSave} className='SmilingAddEditAddrwess' style={{ backgroundColor: 'lightgray', marginInline: '5px' }}>Save</button>
                        <button onClick={() => setEditMode(false)} className='SmilingAddEditAddrwess' style={{ backgroundColor: 'lightgray', marginInline: '5px' }}>Cancel</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
