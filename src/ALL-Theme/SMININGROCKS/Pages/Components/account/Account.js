import React, { useEffect, useState } from 'react'
import Header from '../home/Header/Header'
import './Account.css'
import { Box, CircularProgress, IconButton, InputAdornment, Tab, Tabs, TextField, Typography } from '@mui/material'
import Footer from '../home/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import ManageAddress from './address/ManageAddress';
import OrderHistory from './accountOrderHistory/OrderHistory';

import AccountLedger from './accountLedger/AccountLedger';
import DesignWiseSalesReport from '../sales/DesignWiseSalesReport/DesignWiseSalesReport';
import { loginState } from '../../../../../Recoil/atom';
import { useSetRecoilState } from 'recoil';
import YourProfile from './yourProfile/YourProfile';
import ChangePassword from './changePassword/ChangePassword';
import SalesReport from '../sales/salesReport/SalesReport';
import QuotationJob from './quotationFilters/QuotationJob';
import QuotationQuote from './QuotationQuote/QuotationQuote';
import Sales from '../sales/Sales/Sales';
import { accountDetailPage, accountDetailPages, accountValidation } from '../../../Utils/globalFunctions/GlobalFunction';
import { FaChevronRight } from "react-icons/fa";

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    useEffect(() => {
        a11yProps(1)
    }, [])


    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

//   CustomTabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
//   };

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const tabIndicator = {
    '& .MuiTab-textColorPrimary.Mui-selected': {
        color: "#3b3c3d",
    },
    '& .MuiTabs-indicator': {
        backgroundColor: "#3b3c3d"
    }
}

export default function Account() {

    const [value, setValue] = useState(3);
    const [value1, setValue1] = useState(0);
    const naviagation = useNavigate();
    const setIsLoginState = useSetRecoilState(loginState)
    const navigation = useNavigate();
    const [accountInner, setAccountInner] = useState(accountDetailPages());


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeSub = (event, newValue) => {
        setValue1(newValue);
    }

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

    return (
        <div>
            <div className='Smiling-AccountMain'>

                <p className='SmiCartListTitle'>Your Account</p>
                <div className='smling-AccountTabMain'>
                    <div className='smlingAccountTabMobileView YourAccountPageTabs' style={{ marginTop: '15px' }}>
                        <div className='menuMainAccount' onClick={() => naviagation('/YourProfile')}>
                            <p className='menuMainAccountTitle'>Your Profile</p>
                            <FaChevronRight />
                        </div>
                        <div className='menuMainAccount' onClick={() => naviagation('/OrderHistory')}>
                            <p className='menuMainAccountTitle'>ORDER HISTORY</p>
                            <FaChevronRight />
                        </div>
                        <div className='menuMainAccount' onClick={() => naviagation('/ManageAddress')}>
                            <p className='menuMainAccountTitle'>MANAGE ADDRESSES</p>
                            <FaChevronRight />
                        </div>
                        {accountValidation() && <div className='menuMainAccount' onClick={() => naviagation('/QuotationQuote')}>
                            <p className='menuMainAccountTitle'>ACCOUNT</p>
                            <FaChevronRight />
                        </div>}
                        <div className='menuMainAccount' onClick={() => naviagation('/ChangePassword')}>
                            <p className='menuMainAccountTitle'>CHANGE PASSWORD</p>
                            <FaChevronRight />
                        </div>

                        <div style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
                            <p className='smilingAccountLogoutMobile' onClick={handleLogout}>LOG OUT</p>
                        </div>

                    </div>

{/* 
                     <Box sx={{ width: '100%' }}>
                        <CustomTabPanel value={value} index={0}>
                            <div>
                                <YourProfile />
                            </div>
                        </CustomTabPanel>

                        <CustomTabPanel value={value} index={1}>
                            <div>
                                <OrderHistory />
                            </div>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2} className="manageAddressSec">
                            <ManageAddress />
                        </CustomTabPanel>
                        {accountValidation() &&
                            <CustomTabPanel value={value} index={3} className="accountSalesPage">
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value1} className='accountTabSection' variant="scrollable" onChange={handleChangeSub} aria-label="basic tabs example" sx={{ background: "#7d7f8529", ...tabIndicator }} scrollButtons="auto">
                                        {
                                            accountInner?.map((e, i) => {
                                                return <Tab label={e?.tabLabel} {...a11yProps(i)} sx={{ color: "#7d7f85" }} key={i} />
                                            })
                                        }
                                    </Tabs>
                                </Box>
                                {
                                    accountInner?.map((e, i) => {
                                        return <React.Fragment key={i}>
                                            {e?.id === 1163 && <CustomTabPanel value={value1} index={i} className="AcountSales">
                                                <QuotationQuote />
                                            </CustomTabPanel>}
                                            {e?.id === 1164 && <CustomTabPanel value={value1} index={i} className="quotationFilters">
                                                <QuotationJob />
                                            </CustomTabPanel>}
                                            {e?.id === 1157 && <CustomTabPanel value={value1} index={i} className="salesPage">
                                                <Sales />
                                            </CustomTabPanel>}
                                            {e?.id === 1314 && <CustomTabPanel value={value1} index={i} className="salesReport">
                                                <SalesReport />
                                            </CustomTabPanel>}
                                            {e?.id === 17020 && <CustomTabPanel value={value1} index={i} className="DesignWiseSalesReport">
                                                <DesignWiseSalesReport />
                                            </CustomTabPanel>}
                                            {e?.id === 1159 && <CustomTabPanel value={value1} index={i}>
                                                <AccountLedger />
                                            </CustomTabPanel>}
                                        </React.Fragment>
                                    })
                                }
                            </CustomTabPanel>
                        }
                        <CustomTabPanel value={value} index={accountValidation() ? 4 : 3}>
                            <div>
                                <ChangePassword />
                            </div>
                        </CustomTabPanel>
                    </Box> */}
                </div>
            </div>
        </div>
    )
}
