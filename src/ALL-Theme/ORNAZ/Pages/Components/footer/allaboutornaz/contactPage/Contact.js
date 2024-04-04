import React, { useEffect, useState } from 'react'
import './Contact.css'
import Header from '../../../home/Header/Header'
import Footer from '../..'
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';

export default function Contact() {

  const [name, setName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [mobileNo, setMobileNo] = useState(undefined);
  const [open, setOpen] = React.useState(false);
  const navigation = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  },[])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRequest = () => {


    if (name === undefined || name === '') {
      toast('name is required')
    } else {
      if (mobileNo === undefined) {
        toast('mobile number is required')
      } else if (mobileNo.length !== 10) {
        toast('enter valid mobile number')
      } else {
        if (email === undefined || email === '') {
          toast('email is required')
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
          toast('enter valid email')
        } else {

          if (name && mobileNo && email !== undefined || '') {
            setOpen(true);
          }
        }
      }
    }

  }
  return (
    <div>
      <Header />
      <div className='webContact'>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          paddingBottom: '50px',
          marginTop: '30px'
        }}>
          <div style={{
            display: 'flex',

          }}>

            <div style={{ width: '550px', borderRight: '2px solid lightgray' }}>
              <div style={{ marginRight: '20px' }}>
                <div style={{ borderBottom: '1px solid rgba(0,0,0,.1)' }}>
                  <p style={{ fontSize: '22px', marginBottom: '10px' }}>CONTACT US</p>
                </div>
                <p style={{ fontWeight: 500, margin: '20px 0px 0px 0px', fontSize: '13px' }}>Customer Care</p>
                <p style={{ margin: '5px 0px 0px 0px' }}>Call us at 18002120299(11:00 AM-8:00 PM, 7 days a week)</p>
                <p style={{ margin: '10px 0px 0px 0px' }}>or</p>
                <p style={{ margin: '10px 0px 0px 0px' }}>Write to us at contactus@ornaz.com</p>
                <p style={{ fontWeight: 500, margin: '20px 0px 0px 0px', fontSize: '13px' }}>Contact Us</p>
                <p style={{ margin: '4px 0px 0px 0px' }}>For all Contact Us and bulk enquiries or sales associations please write to us at care@ornaz.com</p>
                <p style={{ fontWeight: 500, margin: '20px 0px 0px 0px', fontSize: '13px' }}>Office Address</p>
                <p style={{ margin: '2px 0px 0px 0px' }}>
                  Ornaz Jewellery Pvt. Ltd.<br />
                  A-26/5, 2nd floor, DLF city phase-1,  sector-28<br />
                  Near DLF Mega Mall, Golf Course Road <br />
                  Gurgaon, Haryana 122002<br />
                  India
                </p>
              </div>
            </div>

            <div style={{
              width: '600px',
              marginInline: '15px'
            }}>
              <div style={{ borderBottom: '1px solid rgba(0,0,0,.1)' }}>
                <p style={{ fontSize: '22px', textAlign: 'center', marginBottom: '10px' }}>NEED HELP?</p>
              </div>

              <div style={{ paddingInline: '100px' }}>
                <p style={{ textAlign: 'center' }}>Please call us at 18002120299</p>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <label for="name" className="inputFiledLabel"><em>*</em>Name</label>
                  <input name="name" id="name" title="Name" value="" className="inputFiled" type="text" />
                </div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginTop: '15px'
                }}>
                  <label for="name" className="inputFiledLabel"><em>*</em>Mobile</label>
                  <input name="name" id="name" title="Name" value="" className="inputFiled" type="text" />
                </div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginTop: '15px'

                }}>
                  <label for="name" className="inputFiledLabel"><em>*</em>Email</label>
                  <input name="name" id="name" title="Name" value="" className="inputFiled" type="text" />
                </div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginTop: '15px'

                }}>
                  <label for="name" className="inputFiledLabel"><em>*</em>Comment</label>
                  <textarea name="name" id="name" title="Name" value="" className="inputFiled" type="text" />
                </div>
                <p style={{ margin: '0px' }}>* Required Fields</p>
                <button style={{ marginTop: '20px', height: '25px', width: '80px' }}>Submit</button>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className='mobileContact'>
        <ToastContainer />
        <div className='contactUsTop'>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <p style={{
              fontSize: '20px',
              fontWeight: 700,
              height: '35px',
              width: '230px',
              textAlign: 'center',
              borderBottom: '1px solid rgb(68, 212, 213)'
            }}>CONTACT US</p>
          </div>

          <div style={{ display: 'flex', margin: '15px' }}>
            <div>
              <CallIcon />
            </div>
            <div style={{ marginLeft: '15px' }}>
              <p style={{ margin: 0 }}>Call Us At<span style={{ color: 'rgb(74, 142, 245)' }}>1800212099</span></p>
              <p style={{ margin: 0 }}>(11:00AM-8:00PM)</p>
            </div>
          </div>

          <div style={{ display: 'flex', margin: '15px' }}>
            <div>
              <LocationOnIcon />
            </div>
            <div style={{ marginLeft: '15px' }}>
              <p style={{ margin: 0 }}>office Address ,<br /><span style={{ color: 'rgb(74, 142, 245)' }}>2nd floor, A-26/5,DFL Phase-1 Near DLF Mega Mall,haryaan</span></p>
            </div>
          </div>

          <div style={{ display: 'flex', paddingBottom: '20px', margin: '15px' }}>
            <EmailIcon />
            <p style={{ margin: 0, marginLeft: '15px' }}>Email us at <span style={{ color: 'rgb(74, 142, 245)' }}>care@ornaz.com</span></p>
          </div>
        </div>

        <div className='needHelpContact'>
          <p style={{ textAlign: 'center', fontSize: '20px' }}>NEED HELP</p>
          <input type='text' onChange={(event) => setName(event.target.value)} placeholder='name*' className='needHelpInput' />
          <input type='text' onChange={(event) => setMobileNo(event.target.value)} placeholder='phone Number*' className='needHelpInput' />
          <input type='text' onChange={(event) => setEmail(event.target.value)} placeholder='email*' className='needHelpInput' />
          <textarea type='text' placeholder='comments' className='needHelpTextarea' />

          <button className='needHelpBtn' onClick={handleRequest}>REQUEST GUIDANCE</button>
        </div>

        <Dialog
          open={open}
          // onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Thank you for reaching out to as"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              we will get back to you shortly
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => { handleClose(); navigation('/'); }}>Go Back</Button>
          </DialogActions>
        </Dialog>
      </div>
      <Footer />

    </div>
  )
}
