import React from 'react'
import './ContactForm.css'

export default function ContactForm() {
    return (
        <div>

            <div className='commonContactMain'>

                <p style={{fontSize: '25px', fontFamily: 'FreightDispProMedium-Regular,Times New Roman,serif', color : '#7d7f85',textAlign : 'center'}}>Contact Us For More Information</p>
                <form className='comonContactFormMain'>
                    <div className='concatctFormInputNameMain'>
                        <input type='text' placeholder='First Name' className='concatctFormInputName' />
                        <input type='text' placeholder='Last Name' className='concatctFormInputName' />
                    </div>
                    <div className='concatctFormInputNameMain'>
                        <input type='text' placeholder='Email Address' className='concatctFormInputName' />
                        <input type='text' placeholder='Phone Number' className='concatctFormInputName' />
                    </div>
                    <textarea type='text' placeholder='Message' className='concatctFormTextArea' />
                    <button className='commonContactFormSubmitBtn'>SUBMIT</button>
                </form>
            </div>
        </div>
    )
}
