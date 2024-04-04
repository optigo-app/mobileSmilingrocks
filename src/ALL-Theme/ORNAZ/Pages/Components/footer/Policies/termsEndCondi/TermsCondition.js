import React, { useEffect } from 'react'
import Header from '../../../home/Header/Header'
import FooterSection from '../..'
import './TermsCondition.css'

export default function TermsCondition() {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[])

  return (
    <div>
      <Header />
      <div style={{ paddingInline: '23%' }}>
        <div>
          <p style={{ textAlign: 'center', fontSize: '25px',marginTop: '60px', fontWeight: 600 }}>Terms and Conditions</p>
        </div>
        <div>
          <p className='termSubTitle'>REPAIR</p>
          <p className='termsSub-SubTitle'>Resizing</p>
          <p style={{ marginTop: '0px' }}>At ORNAZ, we provide you a free size adjustment on your ring purchase, as long as it is claimed within 3 months from the date of purchase. After this, a charge of ₹2000 will be levied on any resizing services availed.</p>

          <p className='termsSub-SubTitle'>Repolishing</p>
          <p style={{ marginTop: '0px' }}>We provide complimentary repolishing and cleaning services twice for 6 months. Post that a charge of Rs 1000 will be levied respectively.</p>

          <p className='termsSub-SubTitle'>Diamond fixing</p>
          <p style={{ marginTop: '0px' }}>In cases of solitaire and prong fixing, we provide you with 2 complimentary fixing services for 6 months. After that, a sum of ₹1500 will be charged for services stated above. Fixing refers to tightening of diamonds and not diamond replacement.</p>
        </div>
        <div>
          <p className='termSubTitle'>REMAKING</p>
          <p className='termsSub-SubTitle'>Product Damage</p>
          <p style={{ marginTop: '0px' }}>In the event of any accidental damage caused to the product, certain making charges will be applicable depending upon the product.
          </p>

          <p className='termsSub-SubTitle'>Exchange and Design Changes</p>
          <p style={{ marginTop: '0px' }}>
            We offer 7-days free exchange and flexibility of getting the design changed in case you end up liking something else. This is offered to all of our clients for 7 days post purchase at no cost.
            <br />
            <span>(Not applicable on engraved and personalized products)</span>
          </p>

          <p className='termsSub-SubTitle'>Diamond Upgrade</p>
          <p style={{ marginTop: '0px' }}>
            If you wish to upgrade your solitaire or switch out the main stone for an upgrade, making charges will be applied depending on the solitaire and prevailing price.
          </p>
        </div>

        <div>
          <p className='termSubTitle'>CERTIFICATION</p>
          <p className='termsSub-SubTitle'>IGI CERTIFICATION</p>
          <p style={{ marginTop: '0px' }}>
            In case you need IGI certification for the small diamonds on your ring, we can provide that with 0 fee. In the events of loss, theft and misplacement of certification a charge of ₹1500 will be levied thereafter if you wish to go for exchange/ buyback of the product.
          </p>

          <p className='termsSub-SubTitle'>GIA CERTIFICATION</p>
          <p>
            In the events of less or misplacement of given GIA certificate, certain charges will be borne by the customers depending upon the diamond if you wish to go for exchange/ buyback of the product.
          </p>

          <p>
            Please Note-
          </p>
          <ul class="light-color">
            <li>
              All the charges mentioned above are excluding shipping charges.
            </li>
            <li>
              Once the complimentary period ends, shipping charges will be borne by the customer.
              For shipping charges, please find the below table:
            </li>
          </ul>
        </div>

        <table border='1' style={{ width: '100%' }}>
          <tr>
            <th>Shipping Charges (To and Fro)</th>
            <th>Charges in Rupees (₹)</th>
          </tr>

          <tr>
            <th className='tableData'>Tier 1 cities - For order value below 5 Lacs</th>
            <th className='tableData'>2000</th>
          </tr>
          <tr>
            <th className='tableData'>Tier 1 cities - For order value above 5 Lacs</th>
            <th className='tableData'>4000</th>
          </tr>
          <tr>
            <th className='tableData'>Other cities - For orders below 5 Lacs</th>
            <th className='tableData'>3000</th>
          </tr>
          <tr>
            <th className='tableData'>Other cities - For orders above 5 Lacs</th>
            <th className='tableData'>5000</th>
          </tr>
        </table>

        <p style={{ fontSize: '0.8rem' }}>
          Note- Tier 1 cities include Ahmedabad, Bangalore, Chennai, Delhi (NCR), Hyderabad, Kolkata, Mumbai, Pune and rest fall in other cities category.
        </p>
      </div>
      <FooterSection />
    </div>
  )
}
