import React, { useEffect, useState } from 'react'
import Header from '../../../home/Header/Header'
import FooterSection from '../..'
import './AskedQuetion.css'
import FAQ from '../../../mobileComp/FAQ/FAQ'
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

export default function AskedQuetion() {

  const [isOpenGeneral, setIsGeneral] = useState(false);
  const [expanded, setExpanded] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  },[])

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleAllAbout = () => {
    window.scrollTo({
      top: window.pageYOffset + 1000,
      behavior: 'smooth',
    });
  }

  const handleOSR = () => {
    window.scrollTo({
      top: window.pageYOffset + 500,
      behavior: 'smooth',
    });
  }

  const handlePayment = () => {
    window.scrollTo({
      top: window.pageYOffset + 700,
      behavior: 'smooth',
    });
  }
  return (
    <div>
      <div className='akedsQuetionWeb'>
        <Header />
        <div>
          <p style={{ fontSize: '30px', textAlign: 'center', fontWeight: 600, color: '#45d4d5' }}>FAQ</p>
          <div style={{ display: 'flex', justifyContent: 'center', paddingInline: '100px' }}>
            <div style={{ width: '300px' }}>
              <div style={{ borderBottom: '1px solid #b2b4cf' }}>
                <p style={{ fontSize: '25px', margin: '5px' }}>FAQ</p>
              </div>
              <div>
                <p style={{ cursor: 'pointer' }}>General</p>
                <p style={{ cursor: 'pointer' }} onClick={handleOSR}>Order,Shiping & Returns</p>
                <p style={{ cursor: 'pointer' }} onClick={handlePayment}>Payment</p>
                <p style={{ cursor: 'pointer' }} onClick={handleAllAbout}>After services</p>
                <p style={{ cursor: 'pointer' }} onClick={handleAllAbout}>All About Daimonds</p>
              </div>
            </div>

            <div style={{ marginInline: '20px' }}>
              <div style={{ borderBottom: '1px solid #b2b4cf' }}>
                <p style={{ fontSize: '25px', margin: '5px' }}>General</p>
              </div>
              <div>
                <ul className='my-FAQ-Web-open'>
                  <li >
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                      <AccordionSummary className='quetions' aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>Can you engrave an engagement ring?</Typography>
                      </AccordionSummary>
                      <AccordionDetails className='quetions'>
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
                  <li>
                    <Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
                      <AccordionSummary aria-controls="panel13d-content" id="panel13d-header">
                        <Typography>Is it possible to get an order delivered outside India?</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography style={{ fontSize: '13px' }}>
                          Yes, we offer worldwide shipping.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </li>
                  <li>
                    <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
                      <AccordionSummary aria-controls="panel12d-content" id="panel12d-header">
                        <Typography>Can you help me keep the engagement ring a surprise?</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography style={{ fontSize: '13px' }}>
                          Yes, of course! We can assist you in planning and executing a surprise proposal if communicated beforehand.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </li>
                  <li>
                    <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
                      <AccordionSummary aria-controls="panel11d-content" id="panel11d-header">
                        <Typography>Can I switch to a different design if I end up liking some other ring?</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography style={{ fontSize: '13px' }}>
                          We offer complete flexibility to our customers for getting any design changes post booking.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </li>
                  <li>
                    <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                      <AccordionSummary aria-controls="panel10d-content" id="panel10d-header">
                        <Typography>Can you send me additional images of the rings?</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography style={{ fontSize: '13px' }}>
                          Yes. We can send you additional images if you are interested in seeing our rings from a different angle, or if you would like to see multiple rings together.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </li>
                  <li>
                    <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                      <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                        <Typography>Do you provide certificates for your diamonds?</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography style={{ fontSize: '13px' }}>
                          Yes, we do provide a GIA certificate of diamond; GIA stands for Gemological Institute of America which is accepted globally and ensures diamond quality and authenticity.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </li>
                  <li>
                    <Accordion expanded={expanded === 'panel19'} onChange={handleChange('panel19')}>
                      <AccordionSummary aria-controls="panel19d-content" id="panel19d-header">
                        <Typography>Can you customize an engagement ring if I share a picture from Pinterest/ Instagram or anywhere from the internet?
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography style={{ fontSize: '13px' }}>
                          Yes. We provide 100% customisations allowing you to design your own ring from scratch.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </li>
                  <li>
                    <Accordion expanded={expanded === 'panel20'} onChange={handleChange('panel20')}>
                      <AccordionSummary aria-controls="panel20d-content" id="panel20d-header">
                        <Typography>I found an engagement ring I really like, but I want a different metal type. Can you do that?</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography style={{ fontSize: '13px' }}>
                          Yes, we can incorporate any design, settings or metal changes as per your requirement. For metals, we offer the majority of our rings  in 18k Gold (white, rose and yellow) and Platinum.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </li>
                </ul>
              </div>

              <div style={{ borderBottom: '1px solid #b2b4cf' }}>
                <p style={{ fontSize: '25px', margin: '5px' }}>Order, Shiping & Returns</p>
              </div>
              <ul className='my-FAQ-Web-open'>
                <li>
                  <Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')}>
                    <AccordionSummary aria-controls="panel15d-content" id="panel15d-header">
                      <Typography>Can someone assist me with my purchase?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography style={{ fontSize: '13px' }}>
                        Yes, we have qualified diamond experts on board. Book a free consultation and get help with designs and details of diamonds from the comfort of your home.
                        Click
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </li>
                <li>
                  <Accordion expanded={expanded === 'panel16'} onChange={handleChange('panel16')}>
                    <AccordionSummary aria-controls="panel16d-content" id="panel16d-header">
                      <Typography> How long after I order will my item be shipped?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography style={{ fontSize: '13px' }}>
                        All our pieces are made to order. It usually takes 2-3 weeks depending on the production schedule of that item.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </li>
                <li>
                  <Accordion expanded={expanded === 'panel17'} onChange={handleChange('panel17')}>
                    <AccordionSummary aria-controls="panel17d-content" id="panel17d-header">
                      <Typography>Is my order delivery safe/ Secured?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography style={{ fontSize: '13px' }}>
                        Yes, all our shipping is insured and shipped via reputed courier partners like FedEx for International shipping and Sequel logistics or BVC Logistics for Domestic Orders.
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

              </ul>

              <div style={{ borderBottom: '1px solid #b2b4cf' }}>
                <p style={{ fontSize: '25px', margin: '5px' }}>Payments</p>
              </div>
              <ul className='my-FAQ-Web-open'>
                <li>
                  <Accordion expanded={expanded === 'panel26'} onChange={handleChange('panel26')}>
                    <AccordionSummary aria-controls="panel26d-content" id="panel26d-header">
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
                  <Accordion expanded={expanded === 'panel25'} onChange={handleChange('panel25')}>
                    <AccordionSummary aria-controls="panel25d-content" id="panel25d-header">
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

              <div style={{ borderBottom: '1px solid #b2b4cf' }}>
                <p style={{ fontSize: '25px', margin: '5px' }}>After Service</p>
              </div>
              <ul className='my-FAQ-Web-open'>
                <li>
                  <Accordion expanded={expanded === 'panel24'} onChange={handleChange('panel24')}>
                    <AccordionSummary aria-controls="panel24d-content" id="panel24d-header">
                      <Typography> Do you provide after care for the rings purchased from your website?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography style={{ fontSize: '13px' }}>
                        To give your ring a long and happy life we provide complimentary cleaning and repolishing services to make sure it stays as good as new.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </li>
              </ul>

              <div style={{ borderBottom: '1px solid #b2b4cf' }}>
                <p style={{ fontSize: '25px', margin: '5px' }}>All About Diamonds</p>
              </div>
              <ul className='my-FAQ-Web-open'>
                <li>
                  <Accordion expanded={expanded === 'panel21'} onChange={handleChange('panel21')}>
                    <AccordionSummary aria-controls="panel21d-content" id="panel21d-header">
                      <Typography>How are the diamonds sourced?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography style={{ fontSize: '13px' }}>
                        We source our diamonds directly from the manufacturers that polish the stones.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </li>
                <li>
                  <Accordion expanded={expanded === 'panel22'} onChange={handleChange('panel22')}>
                    <AccordionSummary aria-controls="panel22d-content" id="panel22d-header">
                      <Typography>What clarity grades are considered to be eye clean?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography style={{ fontSize: '13px' }}>
                        With GIA certified diamonds, FL (Flawless), IF (Internally flawless), VVS1 (Very very slightly included), VVS2 (Very very slightly included), VS1, VS2, SI are considered to be eye clean.
                        Anything below SI isn’t recommended since positions of clarity characteristics are eye clean till SI1.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </li>
                <li>
                  <Accordion expanded={expanded === 'panel23'} onChange={handleChange('panel23')}>
                    <AccordionSummary aria-controls="panel23d-content" id="panel23d-header">
                      <Typography>Which certificates do you provide for your diamonds?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography style={{ fontSize: '13px' }}>
                        Yes, we do provide a GIA certificate of diamond; GIA stands for Gemological Institute of America which is accepted globally and ensures diamond quality and authenticity.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </li>

              </ul>
            </div>
          </div>

        </div>
        <FooterSection />
      </div>
      <div className='akedsQuetionMobile'>
        <FAQ />
      </div>
    </div>
  )
}
