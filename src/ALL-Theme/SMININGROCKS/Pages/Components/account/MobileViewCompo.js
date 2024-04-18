import React, { useEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box';
import { Button, CircularProgress, Tab, Tabs, TextField, Typography } from "@mui/material";
import { accountDetailPages, accountValidation, checkMonth } from "../../../Utils/globalFunctions/GlobalFunction";
import SalesReport from '../sales/salesReport/SalesReport';
import QuotationJob from './quotationFilters/QuotationJob';
import QuotationQuote from './QuotationQuote/QuotationQuote';
import Sales from '../sales/Sales/Sales';
import AccountLedger from './accountLedger/AccountLedger';
import DesignWiseSalesReport from '../sales/DesignWiseSalesReport/DesignWiseSalesReport';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import titleImg from "../../assets/title/sonasons.png"

const MobileViewCompo = () => {
    const [value, setValue] = useState(3);
    const [value1, setValue1] = useState(0);
    const [accountInner, setAccountInner] = useState(accountDetailPages());
    const naviagation = useNavigate();

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

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const handleChangeSub = (event, newValue) => {
        setValue1(newValue);
    }


    const tabIndicator = {
        '& .MuiTab-textColorPrimary.Mui-selected': {
            color: "#3b3c3d",
        },
        '& .MuiTabs-indicator': {
            backgroundColor: "#3b3c3d"
        }
    }


    return (
        <>
            <div style={{ display: 'flex', width: '100%', alignItems: 'center', padding: '0px 0px 0px 5px', borderBottom: '1px solid lightgray', backgroundColor: 'white', zIndex: '111111' }}>
                <FiArrowLeft style={{ height: '25px', width: '25px', color: "#7d7f85"  }} onClick={() => naviagation('/account')} />
                <div style={{ width: '85%', display: 'flex', justifyContent: 'center' }}>
                    <p className='accountPageTitle'>Account</p>
                </div>
            </div>
            <div style={{ margin: '20px 5px 10px 5px' }}>
                {accountValidation() && <CustomTabPanel value={value} index={3} className="accountSalesPage">
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
            </div>
        </>
    )
}

export default MobileViewCompo