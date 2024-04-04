import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Header from '../home/Header/Header';
import Footer from '../footer';
import './index.css';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';

const customTabStyle = {
  '&.Mui-selected': {
    border: '1px solid black',
    color: 'black',
  },
};

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

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


export default function Account() {


  const [value, setValue] = React.useState(0);

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [newPassword, setNewPassword] = useState('');
  const [shoNewPassword, setShowNewPassword] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!shoNewPassword);
  };
  return (
    <div>
      <Header />
      <div>
        <div>
          <p style={{ marginTop: '15px' }}>Home / Your account(<b>yabom94296@scubalm.com</b>)</p>
        </div>
        <div className='accountMain'>
          <p className='title'>MY ACCOUNT</p>
          <Box className='tab-container'>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Tabs value={value} onChange={handleChange} variant="scrollable"  aria-label="basic tabs example">
                <Tab label="RECENT ORDERS" {...a11yProps(0)} sx={customTabStyle} />
                <Tab label="CHANGE PASSWORD" {...a11yProps(1)} sx={customTabStyle} />
                <Tab label="ADDRESSES BOOK" {...a11yProps(2)} sx={customTabStyle} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              HERE ARE NOT ANY COMPLETED ORDERS YET.
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* <div style={{ height: '80px' }}> */}
                <TextField
                  label="Old password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={handlePasswordChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={togglePasswordVisibility}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  className='oldPassword'
                />
                {/* </div> */}
                <TextField
                  label="New password"
                  type={shoNewPassword ? 'text' : 'password'}
                  value={newPassword}
                  onChange={handleNewPasswordChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={toggleNewPasswordVisibility}>
                          {shoNewPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  className='newPassword'
                />

              </div>
              <div style={{
                  display:'flex',
                  justifyContent:'center',
                  }}>
                <Button style={{
                  backgroundColor: '#1e83a9',
                  color: 'white',
                  marginTop: '50px',
                  height: '40px',
                  width: '250px',
                  display:'flex',
                  
                }}>CHANGE PASSWORD</Button>
              </div>

            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              YOU WILL SEE NEW ADDRESSES HERE AFTER FIRST SUCCESSFUL CHECKOUT.
            </CustomTabPanel>
          </Box>
        </div>

      </div>
      <Footer />
    </div>

  )
}
