import React from 'react'
import AllAboutOrnaz from './allaboutornaz'
import OrnazExperience from './experience'
import Policies from './Policies'
import WhyOrnaz from './WhyOrnaz'
import './index.css'
import { Form } from 'react-bootstrap'
import MobileFooter from './mobileFooter/MobileFooter'
import { BTN_JOIN, SIGNUP_NEWSLETTER } from '../../../lib/consts/Strings'

export default function Footer() {
  return (
    <div>
      <div className='webFooterSection'>
        <div className='topSection'>
          <p style={{
            color: 'white',
            fontSize: '20px',
            alignSelf: 'center',
            padding: '10px',
            fontWeight: '300'
          }}>{SIGNUP_NEWSLETTER}</p>
          {/* <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
        </Form> */}
          <input type='text' className='enterEmail' placeholder='enter your email' />
          <button className='btnjoin'>{BTN_JOIN}</button>
        </div>
        <div style={{ display: 'flex', padding: '15px' }}>
          <OrnazExperience />
          <WhyOrnaz />
          <AllAboutOrnaz />
          <Policies />
        </div>
      </div>
      <div className='mobileFooterSection'>
          <MobileFooter />
      </div>
    </div>

  )
}
