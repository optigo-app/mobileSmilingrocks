import React, { useEffect } from 'react'
import Header from '../../../home/Header/Header'
import FooterSection from '../..'
import './PrivacyPolicy.css'

export default function PrivacyPolicy() {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[])

  return (
    <div>
      <Header />
      <div className='privacyMain'>
        <div style={{paddingInline : '20%' ,marginBottom: '80px', marginTop : '30px'}}>
          <p className='privacyHeading'>Privacy Policy</p>
          <p style={{marginTop : '5px'}}>Welcome to <a href="/">ORNAZ.com</a>. We value your trust for Ornaz.com. Our company has the right to update or change the privacy policy at any time without intimation and you shall be required to review the same regularly. This Privacy Policy discloses ORNAZ.com's practice with respect to the data collected from the users of this Website. By using this Website you agree to accept the Terms of Use as well as the Website's terms of this Privacy Policy. By using or accessing this Website you expressly agree to our use and disclosure of your personal information in any manner described in this Privacy Policy.</p>

          <p className='privacyHeading'>Collection of Personal Information </p>
          <p style={{marginTop : '5px'}}>By accepting this privacy policy, you permit <a href="/">ORNAZ.com</a> to store, collect and use any information that you provide on our Website. We collect personal identifiable information entered by you on our website such as name, address, email ID , contact number, chat history and such other information send by you to our email ID. Information collected by means of cookies that are installed on your hard drive. Information such as the server from which you are accessing our website, IP Address of your computer, details of operating system and web browser used to access our website, date, time and place of accessing of our website etc.</p>

          <p className='privacyHeading'>Cookies</p>
          <p style={{marginTop : '5px'}}>Cookies are small pieces of details saved by your browser onto your computer so, later it can be read back from the browser . Cookies are used to make our services more uninterrupted and user-friendly. This section pertains to communicate its policies and practices of the website. ORNAZ.com does not use cookies to save Personal Information for outside uses. We, along with third-party vendors, including Google, use first-party cookies (like - the Google Analytics cookies) and third-party cookies ( like - the Double Click cookie) together to report how our ad impressions, interactions with these ad impressions and ad services and other uses of ad services are related to visits to our site. Knowingly, <a href="/">ORNAZ.com</a> does not collect Personal Information from children or sell of its products to them.</p>

          <p className='privacyHeading'>Use of Profile Data and Demographic</p>
          <p style={{marginTop : '5px'}}>To provide the services you request we use personal Information. We use your personal information to collect fees owed, troubleshoot problems, inform you about offers and customize your experience. We collect and analyze profile data and demographic of our users to improve our product and services offering.</p>
          <p><a href="/">ORNAZ.com</a> owns all the details collected via the Website or applications installed on the website. As applicable, the details collected by <a href="/">ORNAZ.com</a> shall be used to contact you about the Website and its news and Services available on the Website; calculate the number of visitors to the Website and to know the geographical locations of the visitors; monitor and improve the Website; update you on all the special offers available on the Website and provide you with a better shopping experience. This includes sending emails intimating the various offers on the website and you may choose to unsubscribe from such email. <a href="/">ORNAZ.com</a>, reserves the right to share any of your personal details to comply with the orders of subpoenas, court orders or other required legal process. Your Personal Information may be disclosed pursuant to such subpoenas, legal process or court order, which shall be without notice to you. <a href="/">ORNAZ.com</a> reserves the right to include your email ID for marketing communication purposes. You can unsubscribe from such communications anytime, if you wish to do so.</p>
          <p>BY USING THIS WEBSITE, YOU SIGNIFY YOUR AGREEMENT TO THE TERMS OF THIS PRIVACY POLICY, <a href="/">ORNAZ.com</a> RESERVES THE RIGHT, IN OUR SOLE DISCRETION, TO MODIFY, CHANGE, ADD OR DELETE PORTIONS OF THE TERMS OF THIS PRIVACY POLICY AT ANY TIME.
          </p>
          <p>If you have any questions about this Privacy Policy, please [Contact Us] through our Website or write us at <a href="mailto:contactus@ornaz.com">contactus@ornaz.com.</a>
          </p>
        </div>
      </div>
      <FooterSection />
    </div>
  )
}
