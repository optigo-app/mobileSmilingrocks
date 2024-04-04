import React, { useEffect, useState } from 'react'
import Header from '../home/Header/Header'
import Footer from '../home/Footer/Footer'
import './Delivery.css'
import { CommonAPI } from '../../../Utils/API/CommonAPI';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';

export default function Delivery() {

    const [addressData, setAddressData] = useState([]);
    const [open, setOpen] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [deleteId, setDeleteId] = useState('');
    const [isLoading, setIsLoading] = useState(false);

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
    const [errors, setErrors] = useState({});
    const [isEditMode, setIsEditMode] = useState(false);
    const [editAddressIndex, setEditAddressIndex] = useState(null);
    const [editId, setEditId] = useState('');
    const navigation = useNavigate();

    const handleOpen = (item, addressIndex = null) => {
        setIsEditMode(addressIndex !== null);
        if (addressIndex !== null && addressData.length > addressIndex) {
            setEditId(item.id)
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

    useEffect(() => {
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
                    "con": `{\"id\":\"\",\"mode\":\"GETSHIPINGADDRESS\",\"appuserid\":\"${data.userid}\"}`,
                    "f": "Delivery (fetchData)",
                    p: encodedCombinedValue
                };
                const response = await CommonAPI(body);
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
        fetchData();
    }, []);

    const handleDefaultSelection = (addressId) => {
        const updatedAddressData = addressData.map(item => ({
            ...item,
            isdefault: item.id === addressId ? 1 : 0
        }));
        setAddressData(updatedAddressData);
    };

    const handleInputChange = (e, fieldName) => {
        const { value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [fieldName]: value
        }));

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
                    const encodedCombinedValue = btoa(combinedValue);
                    const body = {
                        "con": `{\"id\":\"\",\"mode\":\"EDITADDRESS\",\"appuserid\":\"${data.userid}\"}`,
                        "f": "Delivery (EditAddress)",
                        p: encodedCombinedValue
                    };
                    const response = await CommonAPI(body);
                    if (response.Data.rd[0].stat === 1) {
                        toast.success('Save success');
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

    const handleOpenDelete = (item) => {
        setDeleteId(item);
        setOpenDelete(true);
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
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    }

    const [selectedAddressId, setSelectedAdderssId] = useState('');
    useEffect(() => {
        const defaultAddressItem = addressData.find(item => item.isdefault === 1);
        if (defaultAddressItem) {
            let deafu = JSON.stringify(defaultAddressItem)
            setSelectedAdderssId(deafu);
        } else {
            setSelectedAdderssId(null);
        }
    }, [addressData]);

    localStorage.setItem('selectedAddressId', selectedAddressId)

    const handleContinue = () => {
        if (selectedAddressId) {
            navigation('/Payment');
        } else {
            alert('Please select an address before continuing.');
        }
    };

    console.log('addddddddd',addressData);
    return (
        <div className='paddingTopMobileSet' style={{
            backgroundColor: '#c0bbb1',
            paddingTop: '110px'
        }}>
            {isLoading && (
                <div className="loader-overlay">
                    <CircularProgress className='loadingBarManage' />
                </div>
            )}
            <ToastContainer />

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
                                    {isEditMode ? 'Save' : 'Add'}
                                </button>
                                <button onClick={handleClose} className='smilingDeleveryformCansleBtn'>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </Dialog>
            <div className='smilingDelivery'>
                <div className='smilingOrderMain'>
                    <div className='smilingdeliverBox1'>
                        <p style={{ fontSize: '30px', fontWeight: 500, color: 'gray' }}>Delivery</p>
                        <p>Order Will be delivered to selected address</p>
                        <div className='smilingDeliveyAddressMain' style={{ display: 'flex', flexWrap: 'wrap' }}>
                            {
                                addressData?.map((item, index) => (
                                    <div key={item.id} className='AddressMain' style={{backgroundColor: item.isdefault === 1 && 'rgb(245 244 244)'}} onClick={() => handleDefaultSelection(item.id)}>
                                        <div style={{ display: 'flex', height: '25px' , justifyContent: 'flex-end'}}>
                                            {item.isdefault === 1 && <p style={{ margin: '0px 0px 0px 5px' , backgroundColor: 'blue', fontWeight: 500,borderRadius:'5px', padding: '0px 10px 0px 10px', color: 'white' }}>Selected</p>}
                                        </div>
                                        <p className='addressData' style={{ margin: '0px 0px 5px 0px' }}>{item.shippingfirstname} {item.shippinglastname}</p>
                                        <p className='addressData'>{item.street}</p>
                                        <p className='addressData'>{item.city}-{item.zip}</p>
                                        <p className='addressData'>{item.state}</p>
                                        <p className='addressData' style={{ marginBottom: '35px' }}>Phone : {item.shippingmobile}</p>
                                        <div style={{ position: 'absolute', bottom: '5px', width: '90%', display: 'flex', marginTop: '10px' }}>
                                            <div onClick={() => handleOpen(item, index)} className='deliveryAddressEdit' style={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <MdEdit />
                                            </div>
                                            <div className='deliveryAddressDelete' onClick={() => handleOpenDelete(item.id)}>
                                                <MdDelete />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        {!isLoading && <div className='smilingMobileDeliveryBtnMain'>
                            <button className='smilingAddToAddressBtn' onClick={handleOpen}>ADD NEW ADDRESS</button>
                            <button style={{ marginInline: '20px' }} className='smilingAddToAddressBtn' onClick={handleContinue}>Continue</button>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

