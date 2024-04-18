import React from 'react'
import './FestiveFinds.css'
import { useNavigate } from 'react-router-dom'
import banner1 from '../../../assets/newOne.jpg'
import { useRecoilState, useRecoilValue } from 'recoil';
import { loginState } from '../../../../../../Recoil/atom';

export default function FestiveFinds() {

    const navigation = useNavigate();
    const islogin = useRecoilValue(loginState);


    const handleNaviagtion = () => {
        islogin === 'true' && navigation('/productpage');
    }

    return (
        <div>
            <div className='FestiveMainImage'>
                <img src={banner1} style={{ width: '100%', marginTop: '0px' }} />
                {islogin === 'true' && <div className='festiveBox'>
                    <p className='smilingFestiMainTitle1'>LAB GROWN DIAMONDS</p>
                    <p className='smilingFestiMainTitle2' style={{ fontSize: '40px', margin: '0px' }}>Festive Finds!</p>
                    <div>
                        <button className='DiscoverBtn' onClick={handleNaviagtion}>DISCOVER MORE</button>
                    </div>
                </div>}
            </div>
        </div>
    )
}
