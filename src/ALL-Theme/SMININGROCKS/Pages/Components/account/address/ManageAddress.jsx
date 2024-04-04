import React, { useEffect, useState } from 'react';
import "./ManageAddress.css";
import { Box, Button, CircularProgress, Dialog, DialogTitle, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import StayPrimaryPortraitIcon from '@mui/icons-material/StayPrimaryPortrait';
import { Label } from '@mui/icons-material';
import { ToastContainer, toast } from 'react-toastify';
import { CommonAPI } from '../../../../Utils/API/CommonAPI';
import { NavLink } from 'react-router-dom';
const ManageAddress = () => {

    const [defaultAdd, setDefaultAdd] = useState('female');
    const [openDelete, setOpenDelete] = useState(false);
    const [deleteId, setDeleteId] = useState('');
    const [addressData, setAddressData] = useState([]);
    const [errors, setErrors] = useState({});
    const [isEditMode, setIsEditMode] = useState(false);
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [editId, setEditId] = useState('');
    const [editAddressIndex, setEditAddressIndex] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        country: '',
        state: '',
        city: '',
        zipCode: '',
        mobileNo: ''
    });

    const handleDefault = (event) => {
        setDefaultAdd(event.target.value);
    };

    const handleDefaultSet = (arr) => {
        let findDefault = arr?.find(item => item.isdefault === 1);
        if (findDefault === undefined) {
            arr[0].isdefault = 1
        }
        return arr
    }

    const handleDeleteAddress = async () => {
        try {
            setOpenDelete(false);
            setIsLoading(true);
            const storedData = localStorage.getItem('loginUserDetail');
            const data = JSON.parse(storedData);
            const customerid = data.id;
            const storeInit = JSON.parse(localStorage.getItem('storeInit'));
            const { FrontEnd_RegNo } = storeInit;
            const combinedValue = JSON.stringify({
                addrid: `${deleteId}`, FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerid}`
            });


            // console.log('edit..... combinedValuecombinedValue...', combinedValue);
            const encodedCombinedValue = btoa(combinedValue);
            const body = {
                "con": `{\"id\":\"\",\"mode\":\"DELADDRESS\",\"appuserid\":\"${data.userid}\"}`,
                "f": "Delivery (removeFromCartList)",
                p: encodedCombinedValue
            };
            const response = await CommonAPI(body);
            if (response.Data.rd[0].stat === 1) {
                toast.success('Delete success');
                const updatedAddressData = addressData.filter(item => item.id !== deleteId);
                setAddressData(updatedAddressData);
            } else {
                toast.error('error');
            }
            setOpenDelete(false);
            // console.log('dele. response...', response);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    }
    const handleOpen = (item, addressIndex = null) => {
        setIsEditMode(addressIndex !== null);
        if (addressIndex !== null && addressData.length > addressIndex) {
            setEditId(item.id)
            // alert(item.id)
            const address = addressData[addressIndex];
            if (address) {
                setFormData({
                    firstName: address.shippingfirstname || '',
                    lastName: address.shippinglastname || '',
                    address: address.street || '',
                    country: address.country || '',
                    state: address.state || '',
                    city: address.city || '',
                    zipCode: address.zip || '',
                    mobileNo: address.shippingmobile || ''
                });
                setEditAddressIndex(addressIndex);
            } else {
                console.error('Invalid address data:', address);
            }
        } else {
            // Reset form data when adding a new address
            setFormData({
                firstName: '',
                lastName: '',
                address: '',
                country: '',
                state: '',
                city: '',
                zipCode: '',
                mobileNo: ''
            });
            setEditAddressIndex(null);
        }
        setErrors({});
        setOpen(true);
    };

    const handleOpenDelete = (item) => {
        setDeleteId(item);
        setOpenDelete(true);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = {};
        if (!formData.firstName.trim()) {
            errors.firstName = 'First Name is required';
        }
        if (!formData.lastName.trim()) {
            errors.lastName = 'Last Name is required';
        }
        if (!formData.mobileNo.trim()) {
            errors.mobileNo = 'Mobile No. is required';
        }
        if (!formData.address.trim()) {
            errors.address = 'Address is required';
        }
        if (!formData.country.trim()) {
            errors.country = 'Country is required';
        }
        if (!formData.state.trim()) {
            errors.state = 'State is required';
        }
        if (!formData.city.trim()) {
            errors.city = 'City is required';
        }
        if (!formData.zipCode.trim()) {
            errors.zipCode = 'ZIP Code is required';
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
        } else {
            if (isEditMode) {
                try {
                    setOpen(false);
                    setIsLoading(true);
                    const storedData = localStorage.getItem('loginUserDetail');
                    const data = JSON.parse(storedData);
                    const customerid = data.id;
                    const storeInit = JSON.parse(localStorage.getItem('storeInit'));
                    const { FrontEnd_RegNo } = storeInit;

                    const combinedValue = JSON.stringify({
                        addrid: `${editId}`, firstname: `${formData.firstName}`, lastname: `${formData.lastName}`, street: `${formData.address}`, addressprofile: `${formData.firstName + formData.lastName}`, city: `${formData.city}`, state: `${formData.state}`, country: `${formData.country}`, zip: `${formData.zipCode}`, mobile: `${formData.mobileNo}`, FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerid}`
                    });
                    // console.log('edit..... combinedValuecombinedValue...', combinedValue);

                    const encodedCombinedValue = btoa(combinedValue);
                    const body = {
                        "con": `{\"id\":\"\",\"mode\":\"EDITADDRESS\",\"appuserid\":\"${data.userid}\"}`,
                        "f": "Delivery (EditAddress)",
                        p: encodedCombinedValue
                    };
                    const response = await CommonAPI(body);
                    // console.log('edit response...', response);
                    if (response.Data.rd[0].stat === 1) {
                        toast.success('Edit success');
                        const editedAddress = {
                            ...addressData[editAddressIndex],
                            shippingfirstname: formData.firstName,
                            shippinglastname: formData.lastName,
                            street: formData.address,
                            country: formData.country,
                            state: formData.state,
                            city: formData.city,
                            zip: formData.zipCode,
                            shippingmobile: formData.mobileNo
                        };
                        const updatedAddressData = [...addressData];
                        updatedAddressData[editAddressIndex] = editedAddress;
                        setAddressData(updatedAddressData);
                    } else {
                        toast.error('error');
                    }
                } catch (error) {
                    console.error('Error:', error);
                } finally {
                    setIsLoading(false);
                }

            } else {
                try {
                    setIsLoading(true);
                    setOpen(false);
                    const storedData = localStorage.getItem('loginUserDetail');
                    const data = JSON.parse(storedData);
                    const customerid = data.id;
                    const storeInit = JSON.parse(localStorage.getItem('storeInit'));
                    const { FrontEnd_RegNo } = storeInit;

                    const combinedValue = JSON.stringify({
                        firstname: `${formData.firstName}`, lastname: `${formData.lastName}`, street: `${formData.address}`, addressprofile: `${formData.firstName + formData.lastName}`, city: `${formData.city}`, state: `${formData.state}`, country: `${formData.country}`, zip: `${formData.zipCode}`, mobile: `${formData.mobileNo}`, FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerid}`
                    });

                    const encodedCombinedValue = btoa(combinedValue);
                    const body = {
                        "con": `{\"id\":\"\",\"mode\":\"addAddress\",\"appuserid\":\"${data.userid}\"}`,
                        "f": "Delivery (addAddress)",
                        p: encodedCombinedValue
                    };
                    const response = await CommonAPI(body);
                    // console.log('response...', response);

                    if (response.Data.rd[0].stat === 1) {
                        toast.success('Add success');
                        let updatedAddressData = [...addressData];
                        const newAddress = {
                            shippingfirstname: formData.firstName,
                            shippinglastname: formData.lastName,
                            street: formData.address,
                            country: formData.country,
                            state: formData.state,
                            city: formData.city,
                            zip: formData.zipCode,
                            shippingmobile: formData.mobileNo
                        };
                        updatedAddressData.push(newAddress);
                        setAddressData(updatedAddressData);
                    } else {
                        toast.error('error');
                    }
                    handleClose();
                } catch (error) {
                    console.error('Error:', error);
                } finally {
                    setIsLoading(false);
                }
            }

            handleClose();
        }
    };
    const handleClose = () => {
        setFormData({
            firstName: '',
            lastName: '',
            address: '',
            country: '',
            state: '',
            city: '',
            zipCode: '',
            mobileNo: ''
        });
        setErrors({});
        setEditAddressIndex(null);
        setIsEditMode(false);
        setOpen(false);
    };

    const handleInputChange = (e, fieldName) => {
        const { value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [fieldName]: value
        }));

        // Validate the field
        const errorsCopy = { ...errors };

        switch (fieldName) {
            case 'firstName':
                if (!value.trim()) {
                    errorsCopy.firstName = 'First Name is required';
                } else if (!/^(?![\d\s!@#$%^&*()_+={}\[\]|\\:;"'<>,.?/~`])[^\s][^\n]+$/.test(value.trim())) {
                    errorsCopy.firstName = 'Invalid First Name';
                } else {
                    errorsCopy.firstName = '';
                }
                break;
            case 'lastName':
                if (!value.trim()) {
                    errorsCopy.lastName = 'Last Name is required';
                } else if (!/^(?![\d\s!@#$%^&*()_+={}\[\]|\\:;"'<>,.?/~`])[^\s][^\n]+$/.test(value.trim())) {
                    errorsCopy.lastName = 'Invalid Last Name';
                } else {
                    errorsCopy.lastName = '';
                }
                break;
            case 'address':
                errorsCopy.address = value.trim() ? '' : 'Address is required';
                break;
            case 'country':
                if (!value.trim()) {
                    errorsCopy.country = 'Country is required';
                } else if (!/^[a-zA-Z\s]*$/.test(value.trim())) {
                    errorsCopy.country = 'Invalid Country';
                } else {
                    errorsCopy.country = '';
                }
                break;
            case 'state':
                if (!value.trim()) {
                    errorsCopy.state = 'State is required';
                } else if (!/^[a-zA-Z\s]*$/.test(value.trim())) {
                    errorsCopy.state = 'Invalid State';
                } else {
                    errorsCopy.state = '';
                }
                break;
            case 'city':
                if (!value.trim()) {
                    errorsCopy.city = 'City is required';
                } else if (!/^[a-zA-Z\s]*$/.test(value.trim())) {
                    errorsCopy.city = 'Invalid City';

                } else {
                    errorsCopy.city = '';
                }
                break;
            case 'zipCode':
                if (!value.trim()) {
                    errorsCopy.zipCode = 'ZIP Code is required';
                } else if (!/^\d+$/.test(value.trim())) {
                    errorsCopy.zipCode = 'Invalid ZIP Code';
                } else {
                    errorsCopy.zipCode = '';
                }

                break;
            case 'mobileNo':
                if (!value.trim()) {
                    errorsCopy.mobileNo = 'Mobile No. is required';
                } else if (!/^\d{10}$/.test(value.trim())) {
                    errorsCopy.mobileNo = 'Enter Valid mobile number';
                } else {
                    errorsCopy.mobileNo = '';
                }
                break;
            default:
                break;
        }

        setErrors(errorsCopy);
    };

    const loginDetail = () => {
        const storedData = localStorage.getItem('loginUserDetail');
        const data = JSON.parse(storedData);
        return { id: data.id, emai: data.userid }
    }

    const storeInit = () => {
        const storeInit = JSON.parse(localStorage.getItem('storeInit'));
        const { FrontEnd_RegNo } = storeInit;
        return FrontEnd_RegNo;
    }

    const handleDefaultSelection = async (addressId) => {

        try {
            let loginCred = loginDetail();
            let p_ = JSON.stringify({ "addrid": addressId, "FrontEnd_RegNo": storeInit(), "Customerid": loginCred?.id });
            const body = {
                "con": `{\"id\":\"\",\"mode\":\"SETDEFAULTADDRESS\",\"appuserid\":\"${loginCred?.emai}\"}`,
                "f": "Delivery (fetchData)",
                p: btoa(p_),
            };
            const response = await CommonAPI(body);
            if (response.Data?.rd) {
                fetchData();
            } else {
                alert('nodata')
            }
        } catch (err) {
            console.error('Error:', err);
        }
        finally {
            setIsLoading(false);
        }


        // const updatedAddressData = addressData.map(item => ({
        //     ...item,
        //     isdefault: item.id === addressId ? 1 : 0
        // }));
        // setAddressData(updatedAddressData);
    };

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const storedData = localStorage.getItem('loginUserDetail');
            const data = JSON.parse(storedData);
            const customerid = data.id;
            // const customerEmail = data.userid;
            // setUserEmail(customerEmail);
            const storeInit = JSON.parse(localStorage.getItem('storeInit'));
            const { FrontEnd_RegNo } = storeInit;
            const combinedValue = JSON.stringify({
                FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerid}`
            });
            const encodedCombinedValue = btoa(combinedValue);
            const body = {
                "con": `{\"id\":\"\",\"mode\":\"GETTBLADDRESSDATA\",\"appuserid\":\"${data.userid}\"}`,
                "f": "Delivery (fetchData)",
                p: encodedCombinedValue
            };
            const response = await CommonAPI(body);
            // console.log('response...', response);
            if (response.Data?.rd) {
                setAddressData(response.Data.rd);
            } else {
                alert('nodata')
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <p style={{
                textAlign: 'center',
                padding: "15px 15px",
                marginTop: '30px',
                fontSize: '20px',
                background: '#7d7f85',
                color: "#fff",
                fontWeight: "500",
            }} className='savedAddress'>Saved Addresses</p>
            <Box sx={{ paddingLeft: "15px" }}>
                <Button className='muiSmilingRocksBtnManage savedAddressManageBtn' variant="contained" sx={{ background: "#7d7f85", padding: "6px 15px", textAlign: "end", fontSize: "0.9rem", marginBottom: "10px", borderRadius: "0" }} onClick={handleOpen}>ADD NEW ADDRESS</Button></Box>
            {/* <Button className='smilingAcoountAddNewBtn' sx={{marginLeft: "auto"}} >ADD NEW ADDRESS</Button> */}
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={defaultAdd}
                onChange={handleDefault}
            >
                {
                    isLoading ? <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "10px" }}><CircularProgress className='loadingBarManage' /></Box> : <Box sx={{ display: "flex", flexWrap: "wrap", paddingTop: "10px" }} className="addressMainSec">
                        {
                            addressData?.map((item, index) => {
                                return <Box className="AddressSec" key={index}>
                                    <Box className={`manageAddressBlock ${item.isdefault === 1 && `manageAddressDefault`}`}>
                                        <Box sx={{ display: "flex", flexWrap: "wrap", }}>
                                            <Box sx={{ paddingRight: "15px", fontweight: "600", paddingBottom: "10px" }}><h6>{item?.shippingfirstname && item?.shippingfirstname}</h6></Box>
                                            <Box sx={{ fontweight: "600" }}><h6>{item?.shippinglastname !== undefined && item?.shippinglastname}</h6></Box>
                                        </Box>
                                        <Box>
                                            <Typography sx={{ paddingBottom: "15px" }}>{item?.street !== undefined && item?.street},{item?.city !== undefined && item?.city}-{item?.zip !== undefined && item?.zip},{item?.state !== undefined && item?.state},{item?.country !== undefined && item?.country}</Typography>
                                        </Box>
                                        <NavLink to="" style={{ textDecoration: "unset" }}>
                                            <Box sx={{ display: "flex", paddingBottom: "15px", textDecoration: "unset", marginLeft: "-4px", }}>
                                                <StayPrimaryPortraitIcon />
                                                <Typography sx={{ paddingLeft: "3px", textDecoration: "unset" }}>{item?.shippingmobile !== undefined && item?.shippingmobile}</Typography>
                                            </Box>
                                        </NavLink>


                                        <Box sx={{ display: "flex", paddingBottom: "7px", alignItems: 'center' }}>
                                            {/* <FormControlLabel value="Default1" control={<Radio />} /> */}
                                            <input
                                                type="radio"
                                                checked={item.isdefault === 1}
                                                onChange={() => handleDefaultSelection(item.id)}
                                                className='manageAddressInputRadio'
                                            />
                                            <Typography>Default</Typography>
                                        </Box>

                                        <Box sx={{ borderTop: "1px solid #dee2e6 !important", display: "flex", flexWrap: "wrap", paddingTop: "20px", position: 'absolute', bottom: 0, left: "15px", width: "calc( 100% - 30px)", }}>
                                            <Button className='muiSmilingRocksBtnManageEdit' variant="contained"
                                                sx={{
                                                    background: "#7d7f85", maxHeight: "30px", minWidth: "max-content",
                                                    maxWidth: "max-content", padding: "6px 10px", fontSize: "0.9rem", marginBottom: "10px", borderRadius: "0",
                                                }}
                                                onClick={() => handleOpen(item, index)}
                                            >Edit</Button>
                                            <Button className='muiSmilingRocksBtnManageEdit'
                                                variant="contained"
                                                sx={{
                                                    background: "#7d7f85", maxHeight: "30px", minWidth: "max-content", maxWidth: "max-content",
                                                    marginLeft: "15px", padding: "6px 10px", fontSize: "0.9rem", marginBottom: "10px", borderRadius: "0",
                                                }} onClick={() => handleOpenDelete(item.id)}>Delete</Button>
                                        </Box>

                                    </Box>
                                </Box>
                            })
                        }
                    </Box>
                }

            </RadioGroup>
            <Dialog
                open={openDelete}
            >
                <div className='smilingDeliverDelerePopu'>
                    <p style={{ fontSize: '20px', fontWeight: 500 }}>ARE YOU SURE TO DELETE ?</p>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '40px' }}>
                        <button onClick={handleDeleteAddress} style={{
                            height: '35px',
                            width: '100px',
                            backgroundColor: 'lightgray',
                            fontWeight: 500,
                            border: 'none',
                            outline: 'none',
                            marginInline: '5px'
                        }}>YES</button>
                        <button onClick={() => setOpenDelete(false)} style={{
                            height: '35px',
                            width: '100px',
                            backgroundColor: 'lightgray',
                            fontWeight: 500,
                            border: 'none',
                            outline: 'none',
                            marginInline: '5px'
                        }}>No</button>
                    </div>
                </div>
            </Dialog>
            <Dialog
                open={open}
            //  onClose={handleClose}
            >
                <div className='smilingAddressPopupMain'>
                    <DialogTitle style={{ textAlign: 'center', textDecoration: 'underline' }}>Add Shipping Info</DialogTitle>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <TextField
                            id="firstName"
                            label="First Name"
                            variant="outlined"
                            className="labgrowRegister"
                            style={{ margin: '15px' }}
                            value={formData.firstName}
                            onChange={(e) => handleInputChange(e, 'firstName')}
                            error={!!errors.firstName}
                            helperText={errors.firstName || ''}
                        />
                        <TextField
                            id="lastName"
                            label="Last Name"
                            variant="outlined"
                            className="labgrowRegister"
                            style={{ margin: '15px' }}
                            value={formData.lastName}
                            onChange={(e) => handleInputChange(e, 'lastName')}
                            error={!!errors.lastName}
                            helperText={errors.lastName || ''}
                        />
                        <TextField
                            id="address"
                            label="Address"
                            variant="outlined"
                            className="labgrowRegister"
                            style={{ margin: '15px' }}
                            value={formData.address}
                            onChange={(e) => handleInputChange(e, 'address')}
                            error={!!errors.address}
                            helperText={errors.address || ''}
                        />
                        <TextField
                            id="country"
                            label="Country"
                            variant="outlined"
                            className="labgrowRegister"
                            style={{ margin: '15px' }}
                            value={formData.country}
                            onChange={(e) => handleInputChange(e, 'country')}
                            error={!!errors.country}
                            helperText={errors.country || ''}
                        />
                        <TextField
                            id="state"
                            label="State"
                            variant="outlined"
                            className="labgrowRegister"
                            style={{ margin: '15px' }}
                            value={formData.state}
                            onChange={(e) => handleInputChange(e, 'state')}
                            error={!!errors.state}
                            helperText={errors.state || ''}
                        />
                        <TextField
                            id="city"
                            label="City"
                            variant="outlined"
                            className="labgrowRegister"
                            style={{ margin: '15px' }}
                            value={formData.city}
                            onChange={(e) => handleInputChange(e, 'city')}
                            error={!!errors.city}
                            helperText={errors.city || ''}
                        />
                        <TextField
                            id="zipCode"
                            label="ZIP Code"
                            variant="outlined"
                            className="labgrowRegister"
                            style={{ margin: '15px' }}
                            value={formData.zipCode}
                            onChange={(e) => handleInputChange(e, 'zipCode')}
                            error={!!errors.zipCode}
                            helperText={errors.zipCode || ''}
                        />
                        <TextField
                            id="mobileNo"
                            label="Mobile No."
                            variant="outlined"
                            className="labgrowRegister"
                            style={{ margin: '15px' }}
                            value={formData.mobileNo}
                            onChange={(e) => handleInputChange(e, 'mobileNo')}
                            error={!!errors.mobileNo}
                            helperText={errors.mobileNo || ''}
                        />
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px', marginBottom: '30px' }}>
                                <button type="submit" className='smilingDeleveryformSaveBtn'>
                                    {isEditMode ? 'Edit' : 'Add'}
                                </button>
                                <button onClick={handleClose} className='smilingDeleveryformCansleBtn'>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </Dialog>
        </div>
    )
}

export default ManageAddress
