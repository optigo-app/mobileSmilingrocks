import React, { useEffect } from 'react'
import Header from '../../../home/Header/Header'
import Footer from '../..'
import './Friend.css'

export default function Friend() {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[])

  return (
    <>
      <Header />
      <div style={{ maxWidth: "1300px", margin: "auto",fontFamily:'lato' }}>
        <div className="container-fluid">

          <div className="refer-title">
            There Is No Better Way Of Appreciating An Experience Than Referring!
          </div>

          <p className='fri_p'>
            Tell a friend about ORNAZ, and you can both save up to INR 56,000
          </p>

          <table className='fri_table'>
            <tbody>
              <tr className='fri_tr'>
                <td className='fri_th'> Order Value </td>
                <td className='fri_th'> What you’ll get </td>
                <td className='fri_th'> What your friend will get</td>
              </tr>
              <tr className='fri_tr'>
                <td className='fri_td'>INR 50,000- 1,00,000</td>
                <td className='fri_td'>INR 2000 in Wallet</td>
                <td className='fri_td'>INR 1500 Flat OFF </td>
              </tr>
              <tr className='fri_tr'>
                <td className='fri_td'>INR 1,00,000- 2,50,000</td>
                <td className='fri_td'>INR 4000 in Wallet</td>
                <td className='fri_td'>INR 3000 Flat OFF</td>
              </tr>
              <tr className='fri_tr'>
                <td className='fri_td'>INR 2,50,000- 5,00,000</td>
                <td className='fri_td'>INR 8000 in Wallet</td>
                <td className='fri_td'>INR 6000 Flat OFF</td>
              </tr>
              <tr className='fri_tr'>
                <td className='fri_td'>INR 5,00,000 &amp; 10,00,000</td>
                <td className='fri_td'>INR 12000 in Wallet</td>
                <td className='fri_td'>INR 9000 Flat OFF</td>
              </tr>
              <tr className='fri_tr'>
                <td className='fri_td'>INR 10,00,000 &amp; 30,00,000</td>
                <td className='fri_td'>INR 20000 in Wallet</td>
                <td className='fri_td'>INR 15000 Flat OFF</td>
              </tr>
              <tr className='fri_tr'>
                <td className='fri_td'>INR 30,00,000 &amp; above</td>
                <td className='fri_td'>INR 32000 in Wallet</td>
                <td className='fri_td'>INR 24000 Flat OFF</td>
              </tr>
            </tbody>
          </table>

          <p className='fri_p'>
          You can save with every referral, and there's no limit to how many friends you can refer!
          </p>

          <p className='text-warning'> Please login to share your Referral code</p>

          <div className='share_copy_div'>
            <div style={{width:'80%',display:'flex',justifyContent:'space-between',padding:'20px'}}>
              <button className='fri_btn'><span style={{fontSize:'20px',fontFamily:'lato, sans-serif',fontWeight:300}}>copy message</span></button>
              <button className='fri_btn'><span style={{fontSize:'20px',fontFamily:'lato, sans-serif',fontWeight:300}}>share on whatsapp</span></button>
            </div>
          </div>

          <div style={{display:'none'}}>
            <p className='heading-title'>Please enter your information</p>
            <div style={{display:'flex',flexWrap:'wrap',gap:'50px',marginLeft:'120px'}}>
              <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                <label>Full Name:</label>
                <input className='fri_input' style={{height:'40px',width:'330px'}}/>
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                <label>E-mail Address:</label>
                <input className='fri_input' style={{height:'40px',width:'330px'}}/>
              </div>
              <div style={{display:'flex',alignItems:'flex-end'}}>
              <button className='fri_btn'><span style={{fontSize:'20px',fontFamily:'lato, sans-serif',fontWeight:300}}>GET REFERRAL CODE</span></button>
              </div>
              
            </div>
          </div>
          <div>
            <p style={{fontSize:'23px',color:'#333333'}}>Rules and Restrictions</p>
            <ol type="1" style={{marginTop:'-12px',display:'flex',flexDirection:'column',gap:'5px'}}>
              <li>You cannot refer yourself.</li>
              <li>You must provide a first name, last name, and e-mail address for both referrer (you) and referee (your friend).</li>
              <li>Your referral must be a new ORNAZ customer, and they must use their personal referral code at time of purchase.</li>
              <li>Each personal referral code is unique and can be used only once.</li>
              <li>The personal promotion code discount cannot be applied retroactively, it must be redeemed at time of purchase.</li>
              <li>You can only redeem 50% of order value from the wallet amount while making a purchase.</li>
            </ol>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
