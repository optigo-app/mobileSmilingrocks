import React from 'react'
import './SmilingBrides.css'
import bridesImage from '../../../assets/MobileImages/PromoBanner2.jpg'
import { Colors } from '../../../../lib/consts/Colors'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { loginState } from '../../../../../../Recoil/atom'

export default function SmilingBrides() {

    const navigation = useNavigate();
    const islogin = useRecoilValue(loginState);

    return (
        <div className='smilingBridesMain'>
            {islogin === 'true' && <div className='smilingBrides'>
                <p style={{
                    fontSize: '18px',
                    margin: '0px',
                    fontFamily: 'FreightDispProMedium-Regular,Times New Roman,serif'
                }} className='smilingBridesMainTitle'>SMILING BRIDES</p>
                <button className='enagementBtn' onClick={() => navigation('/productpage')}>ENGAGEMENT COLLECTION</button>
            </div>}
            <div className='smlingBridesImages'>
                <img src={bridesImage} className='smilingMainImages' alt={''} />
            </div>
        </div>
    )
}
