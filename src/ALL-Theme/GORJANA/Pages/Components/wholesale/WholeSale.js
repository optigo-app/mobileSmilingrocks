import React from 'react'
import './WholeSale.css'

export default function WholeSale() {
    return (
        <div>
            <div style={{display: 'flex',justifyContent: 'center'}}>
                <img src="//wholesale.gorjana.com/cdn/shop/files/logo-retina_386x.png?v=1613172933" className='gorWhoTopImg'/>
            </div>
            <div className='gorWhoMain'>
                <div className='gorWhoBox1'>
                    <p style={{fontSize: '25px'}}>Sign In</p>
                    <p style={{fontSize: '20px'}}>Sign in with email.</p>

                    <input type='text' placeholder='Enter your email address' className='gorWhoEmail'/>
                    <input type='text' placeholder='Enter your password' className='gorWhoPass'/>

                    <p className='gorWhoForgot' style={{textAlign: 'center' , marginBlock: '10px' ,width: '75%' ,fontSize: '13px' ,color: '#cdcdd2'}}>FORGOT YOUR PASSWORD</p>

                    <button className='gorWhoSignBtn'>SIGN IN</button>
                </div>
                <div className='gorWhoBox2'>
                    <p style={{fontSize: '25px'}}>New Account</p>
                    <p style={{fontSize: '21px'}}>If you are a retailer and would like to view our entire collection, please complete the prospective application provided.</p>
                    <button className='gorWhoApplyBtn'>APPLY NOW</button>
                </div>
            </div>
        </div>
    )
}
