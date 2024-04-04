import React, { useState } from 'react'
import './Profile.css'
import Header from '../../home/Header/Header'
import HttpsIcon from '@mui/icons-material/Https';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PasswordIcon from '@mui/icons-material/Password';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { useNavigate } from 'react-router-dom';

export default function Profile() {

    const navigation = useNavigate();

    const [editName , setEditName] = useState(false);

    const handleEditName = () =>{
        
    }
    return (
        <div>
            <Header />
            <div style={{ marginInline: '30px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '70px' }}>
                    <div>
                        <p style={{ margin: 0 }}>Name</p>
                        <p style={{ margin: 0 }}>aa</p>
                    </div>
                    <div>
                        <p style={{ color: 'rgb(38, 166, 166)', textDecoration: 'underline' }} onClick={handleEditName}>Edit</p>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                    <div>
                        <p style={{ margin: 0 }}>Phone Number</p>
                        <p style={{ margin: 0 }}>+9188588568</p>
                    </div>
                    <div>
                        <p style={{ color: 'rgb(38, 166, 166)', textDecoration: 'underline' }}>Edit</p>
                    </div>
                </div>

                <div style={{ marginTop: '20px', borderBottom: '1px solid rgb(238, 238, 238)', height: '70px' }}>
                    <p style={{ margin: 0 }}>Email</p>
                    <p style={{ margin: 0, color: 'rgb(148, 148, 148)' }}>yabom33@gmail.com</p>
                </div>
            </div>
            <div className='profileMenuMain' >
                <HttpsIcon style={{ color: 'rgb(38, 166, 166)', fontSize: '30px', height: '70px' }} />
                <p className='profileMenuMainName'>Your Orders</p>
            </div>

            <div className='profileMenuMain'  onClick={() => navigation('/WatchList')}>
                <FavoriteIcon style={{ color: 'rgb(38, 166, 166)', fontSize: '30px', height: '70px' }} />
                <p className='profileMenuMainName'>Your Wish List</p>
            </div>

            <div className='profileMenuMain' onClick={() =>  navigation('/FAQ')}>
                <ContactSupportIcon style={{ color: 'rgb(38, 166, 166)', fontSize: '30px', height: '70px' }} />
                <p className='profileMenuMainName'>FAQ</p>
            </div>

            <div className='profileMenuMain' onClick={() =>  navigation('/Contact')}>
                <ContactPageIcon style={{ color: 'rgb(38, 166, 166)', fontSize: '30px', height: '70px' }} />
                <p className='profileMenuMainName'>Contact Us</p>
            </div>

            <div className='profileMenuMain' >
                <PasswordIcon style={{ color: 'rgb(38, 166, 166)', fontSize: '30px', height: '70px' }} />
                <p className='profileMenuMainName'>Change Password</p>
            </div>

            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <button className='btnLogout'>Logout</button>
            </div>
        </div>
    )
}
