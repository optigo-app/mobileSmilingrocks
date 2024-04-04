import React, { useState } from 'react'
import './PersnolCheckOutForm.css'
import Header from '../../home/Header/Header'
import { useNavigate } from 'react-router-dom'
import { ADD_NOTE_TO_ORDER, BTN_PLACEORDER, ORDER_REVIEW, SHIPPING_ADDRESS } from '../../../../lib/consts/Strings';

export default function PersnolCheckOutForm() {

  const navigation = useNavigate();


  const [email, setEmail] = useState(undefined);
  const [emailError, setEmailError] = useState(false)
  const [emailValidError, setEmailValidError] = useState(false)

  const [firstName, setFirstName] = useState(undefined);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastName, setLastName] = useState(undefined);
  const [address, setAddress] = useState(undefined);
  const [addressError, setAddressError] = useState(false);
  const [city, setCity] = useState(undefined)
  const [cityError, setCityError] = useState(false)

  const [pin, setPin] = useState(undefined)
  const [pinError, setPinError] = useState(false)

  const [phoneNumber, setPhoneNumber] = useState(undefined)
  const [phoneNumberError, setPhoneNumberError] = useState(false)

  const [promoCode, setPromoCode] = useState(undefined);
  const [promoCodeError, setPromoCodeError] = useState(false);

  const [refrelCode, setRefrelCode] = useState(undefined);
  const [refrelCodeError, setRefrelCodeError] = useState(false);

  const [showErrorAll, setShowErrorAll] = useState(false);

  const handlePlaceOrder = () => {
    // navigation('/Payment')

    if (firstName === undefined || firstName === '') {
      setFirstNameError(true);
      setShowErrorAll(true);
    } else {
      setFirstNameError(false);

    }

    if (email === undefined || email === '') {
      setEmailError(true);
      setShowErrorAll(true);
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setEmailError(false);
      setEmailValidError(true)
      setShowErrorAll(true);
    } else {
      setEmailError(false);
      setEmailValidError(false)
    }

    // else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //   errors.email = 'Invalid email address'
    // }

    if (address === undefined || address === '') {
      setAddressError(true)
      setShowErrorAll(true);
    } else {
      setAddressError(false)
    }

    if (city === undefined || city === '') {
      setCityError(true)
      setShowErrorAll(true);

    } else {
      setCityError(false)
    }

    if (pin === undefined || pin === '') {
      setPinError(true)
      setShowErrorAll(true);

    } else {
      setPinError(false)
    }

    if (phoneNumber === undefined || phoneNumber === '') {
      setPhoneNumberError(true)
      setShowErrorAll(true);

    } else {
      setPhoneNumberError(false)
    }

    if (firstName && address && city && pin && email && phoneNumber !== undefined || '') {
      setShowErrorAll(false);
      navigation('/Payment')
    }
  }

  const handlePromoCode = () => {
    if (promoCode === undefined || promoCode === '') {
      setPromoCodeError(true);
    } else {
      setPromoCodeError(false);
    }
  }

  const handleRefrelCode = () => {
    if (refrelCode === undefined || refrelCode === '') {
      setRefrelCodeError(true);
    } else {
      setRefrelCodeError(false);
    }
  }
  return (
    <div>

      <Header />
      <div className='persnolForm'>

        <div className='shippingAddress'>
          <div>
            <h2 style={{ fontWeight: 500, fontSize: '1.3rem', lineHeight: '20px' }}>{SHIPPING_ADDRESS}</h2>
          </div>

          {showErrorAll && <div className="alert alert-danger alert-dismissable alert-link">
            <button className="close" type="button" data-dismiss="alert" aria-hidden="true" onClick={() => setShowErrorAll(false)}>×</button>
            This field is required.
          </div>}

          <div style={{ display: 'flex', height: '70px', alignItems: 'center' }}>
            <input defaultChecked type='radio' /> <p >Enter a new address</p>
          </div>

          <div className='textMain'>
            <p className='formMainFont'>Email </p>
            <input type='text' placeholder='Email' className='form-Control' style={{
              border: emailError ? '1px solid red' : '1px solid #ced4da', width: '100%'
            }} onChange={(text) => setEmail(text.target.value)} />
            {emailError && <p className='Error'>This field is required.</p>}
            {emailValidError && <p className='Error'>Enter a valid email address.</p>}
          </div>

          <div className='formMainInput' >
            <div>
              <p className='formMainFont'>First name </p>
              <input type='text' placeholder='First name' className='form-Control' style={{
                border: firstNameError ? '1px solid red' : '1px solid #ced4da'
              }} onChange={(text) => setFirstName(text.target.value)} />
              {firstNameError && <p className='Error'>This field is required.</p>}
            </div>
            <div style={{ marginLeft: '30px' }}>
              <p className='formMainFont'>Last name </p>
              <input type='text' placeholder='Last name' className='form-Control' style={{
                border: '1px solid #ced4da'
              }} onChange={(text) => setLastName(text)} />
            </div>
          </div>

          <div className='formMainInput' >
            <div>
              <p className='formMainFont' >Address </p>
              <input type='text' className='form-Control' placeholder='Address' style={{
                border: addressError ? '1px solid red' : '1px solid #ced4da'
              }} onChange={(text) => setAddress(text.target.value)} />
              {addressError && <p className='Error'>This field is required.</p>}
            </div>
            <div style={{ marginLeft: '30px' }}>
              <p className='formMainFont'>Address </p>
              <input type='text' placeholder='Address' className='form-Control' style={{
                border: addressError ? '1px solid red' : '1px solid #ced4da'
              }} onChange={(text) => setAddress(text.target.value)} />
              {addressError && <p className='Error'>This field is required.</p>}
            </div>
          </div>


          <div className='formMainInput'>
            <div>
              <p className='formMainFont'>City</p>
              <input type='text' placeholder='City' className='form-Control' style={{
                border: cityError ? '1px solid red' : '1px solid #ced4da'
              }} onChange={(text) => setCity(text.target.value)} />
              {cityError && <p className='Error'>This field is required.</p>}
            </div>
            <div style={{ marginLeft: '30px' }}>
              <p className='formMainFont'>PIN </p>
              <input type='text' placeholder='PIN' className='form-Control' style={{
                border: pinError ? '1px solid red' : '1px solid #ced4da'
              }} onChange={(text) => setPin(text.target.value)} />
              {pinError && <p className='Error'>This field is required.</p>}
            </div>
          </div>

          <div className='textMain'>
            <p className='formMainFont'>State </p>
            <select className='stateSelect'>
              <option value="18">18</option>
              <option value="14">14</option>
            </select>
          </div>

          <div className='textMain'>
            <p className='formMainFont'>Country </p>
            <input type='label' value='India' className='CountryLabel' />
          </div>

          <div className='textMain'>
            <p className='formMainFont'>Phone Number </p>
            <div style={{ display: 'flex ' }}>
              <select style={{ width: '80px', border: phoneNumberError ? '1px solid red' : '1px solid #ced4da' }}>
                <option value="18">+91</option>
                <option value="14">+ 245</option>
              </select>
              <input type='text' placeholder='Phone Number' style={{ border: phoneNumberError ? '1px solid red' : '1px solid #ced4da', height: '40px', width: '850px' }} onChange={(text) => setPhoneNumber(text.target.value)} />
            </div>
          </div>

          <h2 style={{ margin: '0 0 2rem', fontSize: '1.3rem' }}>{ADD_NOTE_TO_ORDER}</h2>
          <textarea style={{ border: '1px solid #ced4da', height: '40px', width: '930px' }} />
          <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '10px' }}>
            <button style={{
              backgroundColor: '#45d4d5',
              height: '50px',
              width: '250px',
              border: 'none',
              cursor: 'pointer'
            }} onClick={handlePlaceOrder}>{BTN_PLACEORDER}</button>
          </div>

        </div>

        <div className='mobileShippingAddress'>
          <div>
            <h2 style={{ fontWeight: 500, fontSize: '1.3rem', lineHeight: '20px' }} className='orderTitle'>{SHIPPING_ADDRESS}</h2>
          </div>

          {showErrorAll && <div className="alert alert-danger alert-dismissable alert-link">
            <button className="close" type="button" data-dismiss="alert" aria-hidden="true" onClick={() => setShowErrorAll(false)}>×</button>
            This field is required.
          </div>}

          <div style={{ display: 'flex', height: '70px', alignItems: 'center' }}>
            <input defaultChecked type='radio' /> <p >Enter a new address</p>
          </div>

          <div className='textMain'>
            <p className='formMainFontMobile'>Email </p>
            <input type='text' placeholder='Email' className='form-Control-mobile' style={{
              border: emailError ? '1px solid red' : '1px solid #ced4da', width: '100%'
            }} onChange={(text) => setEmail(text.target.value)} />
            {emailError && <p className='Error'>This field is required.</p>}
            {emailValidError && <p className='Error'>Enter a valid email address.</p>}
          </div>

          <div className='textMain'>
            <p className='formMainFontMobile'>First name </p>
            <input type='text' placeholder='First name' className='form-Control-mobile' style={{
              border: firstNameError ? '1px solid red' : '1px solid #ced4da', width: '100%'
            }} onChange={(text) => setFirstName(text.target.value)} />
            {firstNameError && <p className='Error'>This field is required.</p>}
          </div>
          <div className='textMain'>
            <p className='formMainFontMobile'>Last name </p>
            <input type='text' placeholder='Last name' className='form-Control-mobile' style={{
              border: '1px solid #ced4da', width: '100%'
            }} onChange={(text) => setLastName(text)} />
          </div>

          <div className='textMain'>
            <p className='formMainFontMobile' >Address </p>
            <input type='text' className='form-Control-mobile' placeholder='Address' style={{
              border: addressError ? '1px solid red' : '1px solid #ced4da', width: '100%'
            }} onChange={(text) => setAddress(text.target.value)} />
            {addressError && <p className='Error'>This field is required.</p>}
          </div>
          <div className='textMain'>
            <p className='formMainFontMobile'>Address </p>
            <input type='text' placeholder='Address' className='form-Control-mobile' style={{
              border: addressError ? '1px solid red' : '1px solid #ced4da', width: '100%'
            }} onChange={(text) => setAddress(text.target.value)} />
            {addressError && <p className='Error'>This field is required.</p>}
          </div>


          <div className='textMain'>
            <p className='formMainFontMobile'>City</p>
            <input type='text' placeholder='City' className='form-Control-mobile' style={{
              border: cityError ? '1px solid red' : '1px solid #ced4da', width: '100%'
            }} onChange={(text) => setCity(text.target.value)} />
            {cityError && <p className='Error'>This field is required.</p>}
          </div>
          <div className='textMain'>
            <p className='formMainFontMobile'>PIN </p>
            <input type='text' placeholder='PIN' className='form-Control-mobile' style={{
              border: pinError ? '1px solid red' : '1px solid #ced4da', width: '100%'
            }} onChange={(text) => setPin(text.target.value)} />
            {pinError && <p className='Error'>This field is required.</p>}
          </div>

          <div className='textMain'>
            <p className='formMainFontMobile'>State </p>
            <select className='stateSelect' style={{
              border: pinError ? '1px solid red' : '1px solid #ced4da', width: '100%' ,height : '50px'
            }}>
              <option value="18">18</option>
              <option value="14">14</option>
            </select>
          </div>

          <div className='textMain'>
            <p className='formMainFontMobile'>Country </p>
            <input type='label' value='India' className='CountryLabel' style={{
              border: pinError ? '1px solid red' : '1px solid #ced4da', width: '100%',height : '50px'
            }}/>
          </div>

          <div className='textMain'>
            <p className='formMainFontMobile'>Phone Number </p>
            <div style={{ display: 'flex ' }}>
              <select style={{ width: '80px', border: phoneNumberError ? '1px solid red' : '1px solid #ced4da' }}>
                <option value="18">+91</option>
                <option value="14">+ 245</option>
              </select>
              <input type='text' placeholder='Phone Number' style={{ border: phoneNumberError ? '1px solid red' : '1px solid #ced4da', height: '50px', width: '850px' }} onChange={(text) => setPhoneNumber(text.target.value)} />
            </div>
          </div>

          <h2 style={{ margin: '0 ', fontSize: '1.3rem' }}>{ADD_NOTE_TO_ORDER}</h2>
          <textarea style={{ border: '1px solid #ced4da', height: '80px'}} />
          <div style={{ display: 'flex', 
          justifyContent: 'center',position : 'sticky' , bottom : 0 , backgroundColor : 'white'}}>
            <button style={{
              backgroundColor: '#45d4d5',
              height: '50px',
              width: '250px',
              border: 'none',
              cursor: 'pointer',
              marginTop: '20px'
            }} onClick={handlePlaceOrder}>{BTN_PLACEORDER}</button>
          </div>
        </div>
        <div className='orderReview'>
          <div style={{ margin: '15px' }}>
            <p style={{ fontSize: '1rem' }} className='orderTitle'>{ORDER_REVIEW}</p>
            <div style={{ marginTop: '20px' }} className='oneOrder'>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <p style={{ margin: '0px', fontWeight: 'bolder', lineHeight: '1.5' }} className='orderOne'>Swathe x 1</p>
                <p style={{ margin: '0px' }} className='orderOnePrice'>₹101,393.67</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '0px' }}>
                <p style={{ margin: '0px' }} className='orderOnePrice'>ARA1382</p>
                <p style={{ margin: '0px', color: 'red', fontSize: '14px' }} className='orderOnePrice'><del>₹115,293.69</del></p>
              </div>
            </div>

            <div style={{ marginTop: '20px' }} className='oneOrder'>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <p style={{ margin: '0px', fontWeight: 'bolder', lineHeight: '1.5' }} className='orderOnePrice'>Swathe x 1</p>
                <p style={{ margin: '0px' }} className='orderOnePrice'>₹101,393.67</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '0px' }}>
                <p style={{ margin: '0px' }} className='orderOnePrice'>ARA1382</p>
                <p style={{ margin: '0px', color: 'red', fontSize: '14px' }} className='orderOnePrice'><del>₹115,293.69</del></p>
              </div>
            </div>

            <div style={{ marginTop: '20px' }} className='oneOrder'>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <p style={{ margin: '0px', fontWeight: 'bolder', lineHeight: '1.5' }} className='orderOnePrice'>Swathe x 1</p>
                <p style={{ margin: '0px' }} className='orderOnePrice'>₹101,393.67</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '0px' }}>
                <p style={{ margin: '0px' }} className='orderOnePrice'>ARA1382</p>
                <p style={{ margin: '0px', color: 'red', fontSize: '14px' }} className='orderOnePrice'><del>₹115,293.69</del></p>
              </div>
            </div>


            <div style={{ marginTop: '20px' }} className='oneOrder'>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <p style={{ margin: '0px', fontWeight: 'bolder', lineHeight: '1.5' }} className='orderOnePrice'>Swathe x 1</p>
                <p style={{ margin: '0px' }} className='orderOnePrice'>₹101,393.67</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '0px' }}>
                <p style={{ margin: '0px' }} className='orderOnePrice'>ARA1382</p>
                <p style={{ margin: '0px', color: 'red', fontSize: '14px' }} className='orderOnePrice'><del>₹115,293.69</del></p>
              </div>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              borderTop: '1px solid #cecece',
              borderBottom: '1px solid #cecece',
              marginTop: '20px'
            }}>
              <p className='orderOnePrice' style={{ fontWeight: 'bolder' }}>Subtotal</p>
              <p className='orderOnePrice' style={{ fontWeight: 'bolder' }}>₹1,216,728.70</p>
            </div>
            <div style={{
              borderBottom: '1px solid #cecece',
              height: '140px'
            }}>
              <p className='PromoTitle'>PROMO CODE</p>
              <input type='text' className='promoCode' style={{
                border: promoCodeError ? '1px solid red' : '1px solid #ced4da'
              }} onChange={(text) => setPromoCode(text.target.value)} /><button className='useBtn' onClick={handlePromoCode}>USE</button>
              {promoCodeError && <p className='Error'>This field is required.</p>}

              <p style={{ fontSize: '1rem', margin: '0px' }}>Gift card or Voucher code</p>
            </div>

            <div style={{
              borderBottom: '1px solid #cecece',
              height: '140px'
            }}>
              <p className='PromoTitle'>REFERRAL CODE</p>
              <input type='text' className='promoCode' style={{
                border: refrelCodeError ? '1px solid red' : '1px solid #ced4da'
              }} onChange={(text) => setRefrelCode(text.target.value)} /><button className='useBtn' onClick={handleRefrelCode}>USE</button>
              {refrelCodeError && <p className='Error'>This field is required.</p>}

            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}>
              <p className='orderOnePrice' style={{ fontWeight: 'bolder', color: 'green' }}>TOTAL</p>
              <p className='orderOnePrice' style={{ fontWeight: 'bolder', color: 'green' }}>₹1,216,728.70</p>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}>
              <p className='orderOnePrice' style={{ margin: '0px' }}>Tax (inclusive)</p>
              <p className='orderOnePrice' style={{ margin: '0px' }}>₹1,216,728.70</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '30px', borderTop: '1px solid #cecece', }} className='bottomFont'>
        <p style={{ fontSize: '1rem', fontWeight: '400', margin: '0px' }}>A-26/5, 2nd floor, DLF city phase-1, sector-28, Near DLF Mega Mall, Golf Course Road, Gurgaon, Haryana 122002</p>
        <p style={{ fontSize: '1rem', fontWeight: '400', margin: '0px' }}>@2023 ORNAZ. All Rights Reserved</p>
      </div>
    </div>
  )
}
