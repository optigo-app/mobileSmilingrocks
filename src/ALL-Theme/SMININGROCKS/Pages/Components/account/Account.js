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

    const [value, setValue] = useState(0);
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
        <div style={{
            backgroundColor: '#c0bbb1',
            paddingTop: '110px'
        }} className='accountPagTabSection'>
            {/* {isLoading && (
                <div className="loader-overlay">
                    <CircularProgress />
                </div>
            )} */}

            <div>
                <div className='Smiling-AccountMain'>
                    <p className='SmilingAccountTitle youraccountpagesec'>Your Account</p>
                    <div className='smling-AccountTabMain'>
                        <Box sx={{ width: '100%' }}>
                            <div className='smlingAccountTabWebView'>
                                <Box sx={{ display: 'flex', justifyContent: 'center', borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"  >   {/*  orientation="vertical" indicatorColor="#7d7f85" */}
                                        <Tab label="Your Profile" {...a11yProps(0)} />
                                        <Tab label="ORDER HISTORY" {...a11yProps(1)} />
                                        <Tab label="MANAGE ADDRESSES" {...a11yProps(2)} />
                                        {accountValidation() && <Tab label="ACCOUNT" {...a11yProps(3)} />}
                                        <Tab label="CHANGE PASSWORD" {...a11yProps(accountValidation() ? 4 : 3)} />
                                    </Tabs>
                                    <p className='smilingAccountLogout' onClick={handleLogout}>LOG OUT</p>
                                </Box>
                            </div>
                            <div className='smlingAccountTabMobileView YourAccountPageTabs'>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-start', borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value} orientation="vertical" onChange={handleChange} sx={{ width: '100%' }} >   {/*  indicatorColor="#7d7f85" */}
                                        <Tab label="Your Profile" {...a11yProps(0)} sx={{ textAlign: 'start', borderBottom: 1, width: '90%', borderColor: 'divider' }} />
                                        <Tab label="ORDER HISTORY" {...a11yProps(1)} />
                                        <Tab label="MANAGE ADDRESSES" {...a11yProps(2)} />
                                        {accountValidation() && <Tab label="ACCOUNT" {...a11yProps(3)} />}
                                        <Tab label="CHANGE PASSWORD" {...a11yProps(accountValidation() ? 4 : 3)} />
                                    </Tabs>
                                </Box>
                                <div>
                                    <p className='smilingAccountLogoutMobile' onClick={handleLogout}>LOG OUT</p>
                                </div>
                            </div>

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

                            {/* {accountValidation() && <CustomTabPanel value={value} index={3} className="accountSalesPage"> */}
                            {accountValidation() && <CustomTabPanel value={value} index={3} className="accountSalesPage">
                                {/* <QuotationFilters /> */}
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value1} className='accountTabSection' variant="scrollable" onChange={handleChangeSub} aria-label="basic tabs example" sx={{ background: "#7d7f8529", ...tabIndicator }} scrollButtons="auto">
                                        {
                                            accountInner?.map((e, i) => {
                                                return <Tab label={e?.tabLabel} {...a11yProps(i)} sx={{ color: "#7d7f85" }} key={i} />
                                            })
                                        }

                                        {/* {accountDetailPage(1163) && <Tab label="Quote" {...a11yProps(0)} sx={{ color: "#7d7f85" }} />}
                                        {accountDetailPage(1164) && <Tab label="Job" {...a11yProps(1)} sx={{ color: "#7d7f85" }} />}
                                        {accountDetailPage(1157) && <Tab label="Sales" {...a11yProps(2)} sx={{ color: "#7d7f85" }} />}
                                        {accountDetailPage(1314) && <Tab label="Sales Report" {...a11yProps(3)} sx={{ color: "#7d7f85" }} />}
                                        {accountDetailPage(17020) && <Tab label="Design Wise Sales Report" {...a11yProps(4)} sx={{ color: "#7d7f85" }} />}
                                        {accountDetailPage(1159) && <Tab label="Account Ledger" {...a11yProps(5)} sx={{ color: "#7d7f85" }} />} */}
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
                            </CustomTabPanel>}
                            <CustomTabPanel value={value} index={accountValidation() ? 4 : 3}>
                                <div>
                                    <ChangePassword />
                                </div>
                            </CustomTabPanel>


                        </Box>
                    </div>

                    <Footer />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', paddingBlock: '30px' }}>
                <p style={{ margin: '0px', fontWeight: 500, width: '100px', color: 'white', cursor: 'pointer' }} onClick={() => window.scrollTo(0, 0)}>BACK TO TOP</p>
            </div>
        </div>
    )
}
