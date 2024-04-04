import React from 'react'
import './ProductContact.css'
import { BTN_SUBMIT, CONTACT_FORM, PLEASE_CALL } from '../../../../lib/consts/Strings'

export default function ProductContact() {
  return (
    <div>
      <div>
        <p className='formTitle'>{CONTACT_FORM}</p>
      </div>
      <p className='formHelp'>{PLEASE_CALL}</p>
      <div className='form'>
        <input type='text' placeholder='Your name' className='formName'/>

        <input type='text' placeholder='Your Email Address'  className='formName'/>
        <input type='text' placeholder='Your Phone Number(optional'  className='formName'/>

        <textarea type='text' placeholder='Comment here..' style={{height : '150px' ,margin : '5px'}}/>
        <button className='btnForm'>{BTN_SUBMIT}</button>
      </div>
    </div>
  )
}
