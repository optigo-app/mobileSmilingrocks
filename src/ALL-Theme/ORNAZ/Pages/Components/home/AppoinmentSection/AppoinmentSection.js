import React from 'react'
import './appointment.css'
import { APPOINMENT_DES, APPOINMENT_TITLE, BTN_APPOINMENT } from '../../../../lib/consts/Strings'

export default function AppoinmentSection() {
  return (
    <div
    className='outer-container' 
    >
      <div className='inner-container'>
        <span className='text1'>{APPOINMENT_TITLE}</span>
        <span className='text2'>{APPOINMENT_DES}</span>
        <div className='text3-container'>
          <span className='text3'> {BTN_APPOINMENT} </span>
        </div>
      </div>
    </div>
  )
}
