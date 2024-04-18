import React from 'react'
import './SmilingBrides.css'
import bridesImage from '../../../assets/smilingBrides/brides1.webp'
import { Colors } from '../../../../lib/consts/Colors'
import { useNavigate } from 'react-router-dom'

export default function SmilingBrides() {

    const navigation = useNavigate();

    return (
        <div className='smilingBridesMain'>
            <div className='smilingBrides'>
                <p style={{
                    color: Colors.fontColor,
                    fontSize: '18px',
                    textAlign: 'center',
                    margin: '0px',
                    fontFamily: 'FreightDispProMedium-Regular,Times New Roman,serif'
                }} className='smilingBridesMainTitle'>SMILING BRIDES</p>
                <button className='enagementBtn' onClick={() => navigation('/productpage')}>ENGAGEMENT COLLECTION</button>
            </div>
            <div className='smlingBridesImages'>
                <img src="https://www.fashiongonerogue.com/wp-content/uploads/2021/12/Minimal-Look-Model-Gold-Rings-Necklaces-Jewelry.jpg" className='smilingMainImages' alt={''} />
            </div>
        </div>
    )
}
