import React, { useEffect } from 'react'
import Header from '../../../home/Header/Header'
import Footer from '../..'
import './LifeTimeExchange.css'

export default function LifeTimeExchange() {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[])

  return (
    <div>
      <Header />
      <div>
        <div style={{ paddingInline: '22%' }}>
          <div className='WebBoxMain'>
            <div>
              <p style={{ fontSize: '35px', marginBottom: '0px', marginTop: '50px' }}>LIFETIME EXCHANGE & BUYBACK</p>
              <p>We offer a <b>Lifetime Exchange &amp; Buyback Policy</b> on all the purchases made from ORNAZ. The product along with the original product certificate, can be returned or exchanged basis its current prevailing value, with deductions towards making charges &amp; taxes. Loss of the original diamond certificate would result in a deduction depending upon the diamond specifications.</p>
              <p>Jewellery returned showing signs of alteration by any third party jeweller shall not be accepted for availing above advantages.. Based on our quality inspection, we reserve the right to change the evaluation of the product.</p>
              <p>Customised jewellery (including personalized/ engraved products) is not eligible for a 7 Day Money-Back or 7 Day Exchange. Lifetime Exchange and buyback are applicable</p>
            </div>
            <div style={{display : 'flex'}}>
              <div className="boxStyling">
                <div className='boxTopData'>
                  <b>7 DAY MONEY-BACK</b><br />
                  <small>100% refund for returns within 7 days. No questions asked.<br />(not applicable on engraved and personalized products)</small>
                </div>
                <div className="boxDeatilsData">
                  <p><b><span className="theme">100%</span> of Invoice value*</b><br />*UPTO 1,000,000 INR </p>
                </div>
              </div>

              <div className="boxStyling">
                <div className='boxTopData'>
                  <b>LIFETIME EXCHANGE</b><br />
                  <small>Exchange or upgrade your jewellery/ solitaires anytime.</small>
                </div>
                <div className="boxDeatilsData">
                  <p><b>Gold/ Platinum</b><br /><span className="theme">100%</span> value of metal weight at the prevailing metal rate*</p>
                  <p><b>Diamond</b><br /><span className="theme">100%</span> of the prevailing diamond value* </p>
                  <p><b>Preset Solitaire</b><br /><span className="theme">90%</span> of the prevailing solitaire rate</p>
                  <p>* In case of any discount given during the original purchase on the metal and stone value, an equivalent amount will be deducted from the Exchange amount (Maximum value of 1,000,000 INR)</p>
                </div>
              </div>

              <div className="boxStyling">
                <div className='boxTopData'>
                  <b>LIFETIME BUYBACK</b><br />
                  <small>Sell your diamond jewellery and solitaires back to us.</small>
                </div>
                <div className="boxDeatilsData">
                  <p>
                    <b>Diamond  Jewellery</b>
                    <br />Additional <span className="theme">10%</span> will be deducted from the LTE value*
                  </p>
                  <p>
                    <b>Solitaires</b>
                    <br /><span className="theme">80%</span> of the prevailing solitaire rate* </p>
                  <p>*UPTO 1,000,000 INR</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mobileBoxMain'>
          <div>
            <p style={{ fontSize: '25px', marginBottom: '0px', marginTop: '80px' }}>LIFETIME EXCHANGE & BUYBACK</p>
            <p>We offer a <b>Lifetime Exchange &amp; Buyback Policy</b> on all the purchases made from ORNAZ. The product along with the original product certificate, can be returned or exchanged basis its current prevailing value, with deductions towards making charges &amp; taxes. Loss of the original diamond certificate would result in a deduction depending upon the diamond specifications.</p>
            <p>Jewellery returned showing signs of alteration by any third party jeweller shall not be accepted for availing above advantages.. Based on our quality inspection, we reserve the right to change the evaluation of the product.</p>
            <p>Customised jewellery (including personalized/ engraved products) is not eligible for a 7 Day Money-Back or 7 Day Exchange. Lifetime Exchange and buyback are applicable</p>
          </div>
          <div className="boxStylingMobile">
            <div className='boxTopDataMobile'>
              <b>7 DAY MONEY-BACK</b><br />
            </div>
            <div className="boxDeatilsDataMobile">
              <p>100% refund for returns within 7 days. No questions asked.<br />(not applicable on engraved and personalized products)</p>
              <p><b><span className="theme">100%</span> of Invoice value*</b><br />*UPTO 1,000,000 INR </p>
            </div>
          </div>

          <div className="boxStylingMobile">
            <div className='boxTopDataMobile'>
              <b>LIFETIME EXCHANGE</b><br />
            </div>
            <div className="boxDeatilsDataMobile">
              <p>Exchange or upgrade your jewellery/ solitaires anytime.</p>
              <p><b>Gold/ Platinum</b><br /><span className="theme">100%</span> value of metal weight at the prevailing metal rate*</p>
              <p><b>Diamond</b><br /><span className="theme">100%</span> of the prevailing diamond value* </p>
              <p><b>Preset Solitaire</b><br /><span className="theme">90%</span> of the prevailing solitaire rate</p>
              <p>* In case of any discount given during the original purchase on the metal and stone value, an equivalent amount will be deducted from the Exchange amount (Maximum value of 1,000,000 INR)</p>
            </div>
          </div>

          <div className="boxStylingMobile">
            <div className='boxTopDataMobile'>
              <b>LIFETIME BUYBACK</b><br />
            </div>
            <div className="boxDeatilsDataMobile">
              <p>Sell your diamond jewellery and solitaires back to us.</p>
              <p>
                <b>Diamond  Jewellery</b>
                <br />Additional <span className="theme">10%</span> will be deducted from the LTE value*
              </p>
              <p>
                <b>Solitaires</b>
                <br /><span className="theme">80%</span> of the prevailing solitaire rate* </p>
              <p>*UPTO 1,000,000 INR</p>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}
