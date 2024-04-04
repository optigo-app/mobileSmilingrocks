import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import earings from '../../../assets/finegifts/earrings.webp'
import CallIcon from '@mui/icons-material/Call';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import './MobileSearch.css'

export default function MobileSearch() {
    const navigation = useNavigate();


    return (
        <div>
            <div style={{ margin: '10px', width: '40px' }} onClick={() => navigation('/')}>
                <ArrowBackIcon style={{ fontSize: '30px' }} />
            </div>
            <div>
                <input type='text' placeholder='Search' className='searchLine' />
                <SearchIcon style={{ position: 'relative', right: '50px', top: '10px' }} />
            </div>
            <p style={{ fontSize: '20px', margin: '20px 30px 10px 30px', fontWeight: 600 }}>Popular Searches</p>
            <div className='serachName'>
                <p className='popularSearchName'>Glanza</p>
                <p className='popularSearchName'>Ella</p>
                <p className='popularSearchName'>Merin</p>
                <p className='popularSearchName'>Elsa</p>
                <p className='popularSearchName'>Look both ways</p>
                <p className='popularSearchName'>Catching feelings</p>
                <p className='popularSearchName'>Modern love</p>
                <p className='popularSearchName'>The Perfect Date</p>
            </div>

            <p style={{ fontSize: '20px', margin: '20px 30px 10px 30px', fontWeight: 600 }}>Popular Categories</p>
            <div className='serachName'>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginInline: '15px' }}>
                    <div className='imagesBorder'>
                        <img src={earings} className='popularImage' />
                    </div>
                    <p style={{ margin: '4px' }}>Rings</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginInline: '15px' }}>
                    <div className='imagesBorder'>
                        <img src={earings} className='popularImage' />
                    </div>
                    <p style={{ margin: '4px' }}>Earrings</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginInline: '15px' }}>
                    <div className='imagesBorder'>
                        <img src={earings} className='popularImage' />
                    </div>
                    <p style={{ margin: '4px' }}>Necklaces</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginInline: '15px' }}>
                    <div className='imagesBorder'>
                        <img src={earings} className='popularImage' />
                    </div>
                    <p style={{ margin: '4px' }}>Stackble Bands</p>
                </div>
            </div>

            <p style={{ fontSize: '17px', margin: '50px 30px 10px 30px', fontWeight: 600 }}>Need Help ?</p>
            <div style={{margin : '20px 10px 10px 40px'}}>
                <div style={{display : 'flex'}}>
                    <HeadsetMicIcon />
                    <p style={{margin : '0px' ,textDecoration : 'underline' ,marginLeft : '15px'}}>Contact Client Care</p>
                </div>
                <div style={{display : 'flex' ,marginTop : '15px'}}>
                    <CallIcon />
                    <p style={{margin : '0px' , marginLeft : '15px'}}>Call<span style={{textDecoration : 'underline'}}> 1800-212-0299</span></p>
                </div>
            </div>

        </div>
    )
}
