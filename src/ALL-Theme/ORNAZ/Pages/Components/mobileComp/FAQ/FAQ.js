import React, { useState } from 'react'
import './FAQ.css'
import Header from '../../home/Header/Header'
import Footer from '../../footer'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `0px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: 'white',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    backgroundColor: 'rgb(243, 243, 243)',
    marginInline: '20px'
}));


export default function FAQ() {

    const [isOpenGeneral, setIsGeneral] = useState(false);
    const [isOpenOSR, setIsOSR] = useState(false);
    const [isOpenPayments, setIsPayments] = useState(false);
    const [isOpenAfterServices, setIsAfterServices] = useState(false);
    const [isOpenAllAboutDaimonds, setIsAllAboutDaimonds] = useState(false);

    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const toggleGeneralList = () => {
        setIsGeneral(!isOpenGeneral);
    };

    const toggleOSRList = () => {
        setIsOSR(!isOpenOSR);
    };

    const togglePaymentsList = () => {
        setIsPayments(!isOpenPayments);
    };

    const toggleAfterServicesList = () => {
        setIsAfterServices(!isOpenAfterServices);
    };

    const toggleAllAboutDaimondsList = () => {
        setIsAllAboutDaimonds(!isOpenAllAboutDaimonds);
    };

    return (
        <div>
            <Header />
            <div>
                <div style={{ marginTop: '70px', marginInline: '20px' }}>
                    <p style={{ fontSize: '24px', fontWeight: 600 }}>Frequently Asked Quetions</p>
                </div>
                <div>
                    <div className='frequentlyTitle' onClick={toggleGeneralList} style={{marginBlock : !isOpenGeneral && '10px'}}>
                        <p>General</p>
                        <p style={{ marginRight: '20px' }}>{isOpenGeneral ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</p>
                    </div>
                    <div style={{display : !isOpenGeneral && 'none'}}>
                        <ul className={`my-FAQ ${isOpenGeneral ? 'open' : ''}`}>
                            <li>
                                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                        <Typography>Can you engrave an engagement ring?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography style={{ fontSize: '13px' }}>
                                            Yes, we personalize rings with engravings of your names, initials, symbols, dates or any other customisations you are planning to get.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </li>
                            <li>
                                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                        <Typography>How do I find my finger ring size?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography style={{ fontSize: '13px' }}>
                                            We do send a complimentary ring sizer so that you can easily measure your ring size at home. You can put in a request and get the correct measurement from the comfort of your home.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </li>
                            <li>
                                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                        <Typography>What if I need to resize my ring?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography style={{ fontSize: '13px' }}>
                                            In case you want to get your ring size changed due to any unforeseen circumstances, ORNAZ is happy to offer resizing services for most of the rings*.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </li>
                            <li>
                                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                    <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                                        <Typography>What if I need to resize my ring?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography style={{ fontSize: '13px' }}>
                                            In case you want to get your ring size changed due to any unforeseen circumstances, ORNAZ is happy to offer resizing services for most of the rings*.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </li>
                            <li>
                                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                                    <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                                        <Typography>What if I need to resize my ring?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography style={{ fontSize: '13px' }}>
                                            In case you want to get your ring size changed due to any unforeseen circumstances, ORNAZ is happy to offer resizing services for most of the rings*.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </li>

                        </ul>
                    </div>

                    <div className='frequentlyTitle' onClick={toggleOSRList} style={{marginBlock : !isOpenOSR && '10px'}}>
                        <p>Order, Shiping & Returns</p>
                        <p style={{ marginRight: '20px' }}>{isOpenOSR ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</p>
                    </div>
                    <div style={{display : !isOpenOSR && 'none'}}>
                        <ul className={`my-FAQ ${isOpenOSR ? 'open' : ''}`}>
                            <li>
                                <Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')}>
                                    <AccordionSummary aria-controls="panel15d-content" id="panel15d-header">
                                        <Typography>How do I find my finger ring size?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography style={{ fontSize: '13px' }}>
                                            We do send a complimentary ring sizer so that you can easily measure your ring size at home. You can put in a request and get the correct measurement from the comfort of your home.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </li>
                            <li>
                                <Accordion expanded={expanded === 'panel16'} onChange={handleChange('panel16')}>
                                    <AccordionSummary aria-controls="panel16d-content" id="panel16d-header">
                                        <Typography>What if I need to resize my ring?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography style={{ fontSize: '13px' }}>
                                            In case you want to get your ring size changed due to any unforeseen circumstances, ORNAZ is happy to offer resizing services for most of the rings*.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </li>
                            <li>
                                <Accordion expanded={expanded === 'panel17'} onChange={handleChange('panel17')}>
                                    <AccordionSummary aria-controls="panel17d-content" id="panel17d-header">
                                        <Typography>What if I need to resize my ring?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography style={{ fontSize: '13px' }}>
                                            In case you want to get your ring size changed due to any unforeseen circumstances, ORNAZ is happy to offer resizing services for most of the rings*.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </li>
                            <li>
                                <Accordion expanded={expanded === 'panel18'} onChange={handleChange('panel18')}>
                                    <AccordionSummary aria-controls="panel18d-content" id="panel18d-header">
                                        <Typography>What if I need to resize my ring?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography style={{ fontSize: '13px' }}>
                                            In case you want to get your ring size changed due to any unforeseen circumstances, ORNAZ is happy to offer resizing services for most of the rings*.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </li>
                            <li>
                                <Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
                                    <AccordionSummary aria-controls="panel13d-content" id="panel13d-header">
                                        <Typography>Can you engrave an engagement ring?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography style={{ fontSize: '13px' }}>
                                            Yes, we personalize rings with engravings of your names, initials, symbols, dates or any other customisations you are planning to get.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </li>
                            <li>
                                <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
                                    <AccordionSummary aria-controls="panel12d-content" id="panel12d-header">
                                        <Typography>How do I find my finger ring size?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography style={{ fontSize: '13px' }}>
                                            We do send a complimentary ring sizer so that you can easily measure your ring size at home. You can put in a request and get the correct measurement from the comfort of your home.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </li>
                            <li>
                                <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
                                    <AccordionSummary aria-controls="panel11d-content" id="panel11d-header">
                                        <Typography>What if I need to resize my ring?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography style={{ fontSize: '13px' }}>
                                            In case you want to get your ring size changed due to any unforeseen circumstances, ORNAZ is happy to offer resizing services for most of the rings*.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </li>
                            <li>
                                <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                                    <AccordionSummary aria-controls="panel10d-content" id="panel10d-header">
                                        <Typography>What if I need to resize my ring?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography style={{ fontSize: '13px' }}>
                                            In case you want to get your ring size changed due to any unforeseen circumstances, ORNAZ is happy to offer resizing services for most of the rings*.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </li>
                            <li>
                                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                                    <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                                        <Typography>What if I need to resize my ring?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography style={{ fontSize: '13px' }}>
                                            In case you want to get your ring size changed due to any unforeseen circumstances, ORNAZ is happy to offer resizing services for most of the rings*.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </li>
                            <li>
                                <Accordion expanded={expanded === 'panel19'} onChange={handleChange('panel19')}>
                                    <AccordionSummary aria-controls="panel19d-content" id="panel19d-header">
                                        <Typography>Can you engrave an engagement ring?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography style={{ fontSize: '13px' }}>
                                            Yes, we personalize rings with engravings of your names, initials, symbols, dates or any other customisations you are planning to get.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </li>
                            <li>
                                <Accordion expanded={expanded === 'panel20'} onChange={handleChange('panel20')}>
                                    <AccordionSummary aria-controls="panel20d-content" id="panel20d-header">
                                        <Typography>How do I find my finger ring size?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography style={{ fontSize: '13px' }}>
                                            We do send a complimentary ring sizer so that you can easily measure your ring size at home. You can put in a request and get the correct measurement from the comfort of your home.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </li>
                            <li>
                                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                        <Typography>What if I need to resize my ring?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography style={{ fontSize: '13px' }}>
                                            In case you want to get your ring size changed due to any unforeseen circumstances, ORNAZ is happy to offer resizing services for most of the rings*.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </li>
                            <li>
                                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                    <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                                        <Typography>What if I need to resize my ring?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography style={{ fontSize: '13px' }}>
                                            In case you want to get your ring size changed due to any unforeseen circumstances, ORNAZ is happy to offer resizing services for most of the rings*.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </li>
                            <li>
                                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                                    <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                                        <Typography>What if I need to resize my ring?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography style={{ fontSize: '13px' }}>
                                            In case you want to get your ring size changed due to any unforeseen circumstances, ORNAZ is happy to offer resizing services for most of the rings*.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </li>
                        </ul>
                    </div>

                    <div className='frequentlyTitle' onClick={togglePaymentsList} style={{marginBlock : !isOpenPayments && '10px'}}>
                        <p>Payments</p>
                        <p style={{ marginRight: '20px' }}>{isOpenPayments ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</p>
                    </div>
                    <div style={{display : !isOpenPayments && 'none'}}>
                        <ul className={`my-FAQ ${isOpenPayments ? 'open' : ''}`}>
                            <li>
                                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                        <Typography>Can you engrave an engagement ring?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography style={{ fontSize: '13px' }}>
                                            Yes, we personalize rings with engravings of your names, initials, symbols, dates or any other customisations you are planning to get.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </li>
                            <li>
                                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                        <Typography>How do I find my finger ring size?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography style={{ fontSize: '13px' }}>
                                            We do send a complimentary ring sizer so that you can easily measure your ring size at home. You can put in a request and get the correct measurement from the comfort of your home.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </li>


                        </ul>
                    </div>

                    <div className='frequentlyTitle' onClick={toggleAfterServicesList} style={{marginBlock : !isOpenAfterServices && '10px'}}>
                        <p>After services</p>
                        <p style={{ marginRight: '20px' }}>{isOpenAfterServices ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</p>
                    </div>
                    <div style={{display : !isOpenAfterServices && 'none'}}>
                        <ul className={`my-FAQ ${isOpenAfterServices ? 'open' : ''}`}>
                            <li>
                                <Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel14')}>
                                    <AccordionSummary aria-controls="panel14d-content" id="panel14d-header">
                                        <Typography>Can you engrave an engagement ring?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography style={{ fontSize: '13px' }}>
                                            Yes, we personalize rings with engravings of your names, initials, symbols, dates or any other customisations you are planning to get.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </li>


                        </ul>
                    </div>

                    <div className='frequentlyTitle' onClick={toggleAllAboutDaimondsList} style={{marginBlock : !isOpenAllAboutDaimonds && '10px'}}>
                        <p>All About Daimonds</p>   
                        <p style={{ marginRight: '20px' }}>{isOpenAllAboutDaimonds ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</p>
                    </div>
                    <div style={{display : !isOpenAllAboutDaimonds && 'none'}}>
                        <ul className={`my-FAQ ${isOpenAllAboutDaimonds ? 'open' : ''}`}>

                            <li>
                                <Accordion expanded={expanded === 'panel21'} onChange={handleChange('panel21')}>
                                    <AccordionSummary aria-controls="panel21d-content" id="panel21d-header">
                                        <Typography>What if I need to resize my ring?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography style={{ fontSize: '13px' }}>
                                            In case you want to get your ring size changed due to any unforeseen circumstances, ORNAZ is happy to offer resizing services for most of the rings*.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </li>
                            <li>
                                <Accordion expanded={expanded === 'panel22'} onChange={handleChange('panel22')}>
                                    <AccordionSummary aria-controls="panel22d-content" id="panel22d-header">
                                        <Typography>What if I need to resize my ring?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography style={{ fontSize: '13px' }}>
                                            In case you want to get your ring size changed due to any unforeseen circumstances, ORNAZ is happy to offer resizing services for most of the rings*.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </li>
                            <li>
                                <Accordion expanded={expanded === 'panel23'} onChange={handleChange('panel23')}>
                                    <AccordionSummary aria-controls="panel23d-content" id="panel23d-header">
                                        <Typography>What if I need to resize my ring?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography style={{ fontSize: '13px' }}>
                                            In case you want to get your ring size changed due to any unforeseen circumstances, ORNAZ is happy to offer resizing services for most of the rings*.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
