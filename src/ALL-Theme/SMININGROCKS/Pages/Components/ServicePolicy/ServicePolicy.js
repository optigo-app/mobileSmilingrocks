import React from 'react'
import './ServicePolicy.css'
import Header from '../home/Header/Header'
import Footer from '../home/Footer/Footer'

export default function ServicePolicy() {
    return (
        <div style={{
            backgroundColor: '#aab4b7',
            paddingTop: '110px'
        }}>
            <div>
                <div style={{ paddingBlock: '60px' }}>
                    <p style={{ fontSize: '40px', color: 'white', textAlign: 'center', fontFamily: 'FreightDispProBook-Regular,Times New Roman,serif' }}>SERVICE POLICY</p>
                </div>
                <div className='smiling-ServicePolicyMain'>
                    <div className='smiling-ServiPolicySubMain'>
                        <p className='smiling-ServiceMainTitle' style={{paddingTop : '80px'}}>Returns Policy</p>
                        <p className='smiling-serviceSubTitle'>Jewelry Return Policy</p>
                        <p className='smiling-serviceDesc'>We offer free returns within 30 days of item delivery. Items must be in their original condition, with tags intact and unworn. It should be returned in their original packaging as shipped. Sonasons reserves the right to reject any returns that do not meet the conditions specified above. In such case, we will return these items to you. If items are found faulty or defective, it should be returned in their original packaging. Items with special order or request are not returnable.</p>

                        <p className='smiling-serviceSubTitle'>Diamond Return Policy</p>
                        <p className='smiling-serviceDesc'>We offer free returns within 30 days of item delivery. If you wish to return, diamond must be in its original condition and shipped with the grading reports. If the diamond report is not returned, you will be charged for USD 150 as a replacement cost. Please return the diamond in its original packaging as shipped. Once received, we will need to inspect the diamond (it will take a week). Sonasons reserves the right to reject the diamonds if it is not returned in its original condition. You will be notified once the return process is approved or rejected. The rejected items will be sent back to your original shipping address.
                            <br />
                            <br />
                            <br />
                            In order to process a return of your purchased items simply send us an email to order@sonasons.com.</p>

                        <p className='smiling-serviceSubTitle'>Return Shipping</p>
                        <p className='smiling-serviceDesc'>At the time of your return request, we will send you a prepaid FedEx return label. Please include the copy of your original dispatch document inside the box, and make sure that all your personal details are filled on the dispatch. Make sure to receive a proof of postage from the FedEx office when you ship back your item. We will not be liable for any items that might be lost in transit or don’t arrive if you have chosen a different shipping method. All returns must be sent back as a single shipment. Please make sure to insure your jewelry to the value that was paid. You are responsible for the insurance fees of the return shipment.</p>

                        <p className='smiling-serviceSubTitle'>Refund</p>
                        <p className='smiling-serviceDesc'>Items approved for return, we will refund back within a week once it is approved. The item will be refunded to your original payment method. It may take 10 days for your designated banks to post the funds to your account. For Paypal, it takes around 2 weeks for refund to be processed to your account. Items with special order or request are not refundable.</p>

                        <p className='smiling-ServiceMainTitle'>Lifetime Warranty Policy</p>
                        <p className='smiling-serviceDesc'>Be rest assured with your Sonasons jewelries! We will provide you with Lifetime warranty guarantee with any jewelry purchased from Sonasons. If you believe your item has any manufacturing defect, you can ship to us with your proof of purchase for us to inspect. If we determine the jewelry damage is valid, we will repair the item.</p>
                        <p>The type of repairs included are:</p>
                        <ul>
                            <li className='smiling-serviceDesc'>Complimentary polishing of jewelry</li>
                            <li className='smiling-serviceDesc'>Complimentary resizing one size up or down (Eternity bands are not resizeable).</li>
                            <li className='smiling-serviceDesc'>In case your diamond falls out, you can send it over to us with your jewelry pcs for us to help you set it back. But if diamond is lost, we are unable to replace with a new one. You would need to purchase a diamond for replacing it.</li>
                        </ul>
                        <p className='smiling-serviceDesc'>Our repair policy excludes wear and tear, loss of diamonds, product loss or item being stolen. For a repair request, we will first need to receive a proof of purchase shipped together with the jewelry. If the repair request is aligned to our policy, we will proceed with the request. If it is not, we will notify you if the given repair service is available for its cost. The repaired items will be delivered back to your given shipping address in one to two weeks’ time.</p>

                        <p className='smiling-ServiceMainTitle'>Special Orders Policy</p>
                        <p style={{fontSize: '25px' ,color : '#7d7f85'}}>Engraving</p>
                        <ul>
                            <li className='smiling-serviceDesc'>If you have purchased our Sonasons jewelry and wish to engrave your initial on it, we are happy to help you do so. Email us at <a href="mailto:order@sonasons.com">order@sonasons.com</a> and with proof of purchase for us to confirm and proceed with your request.</li>
                        </ul>

                        <p style={{fontSize: '25px' ,color : '#7d7f85'}}>Metal Purity</p>
                        <ul>
                            <li className='smiling-serviceDesc'>If you wish to place any of our favourite order in a different metal purity (14K or 18K), email us at <a href="mailto:order@sonasons.com">order@sonasons.com</a> and we will look into your request.</li>
                        </ul>
                        <p className='smiling-serviceDesc'>All special orders are not refundable or returnable. They will take around 2 weeks’ time to deliver from the date of purchase.</p>

                        <p className='smiling-serviceSubTitle'>Exclusion</p>
                        <p>The After Sales Service Policy is only available to customers purchasing from Sonasons. Exclusions that will not be accepted as manufacturing defect and applied to the after sales service policy includes:</p>
                        <ul>
                            <li className='smiling-serviceDesc'>Precious metals change of color due to exposure of chemical, used while swimming and hot tubs or bathing.</li>
                            <li className='smiling-serviceDesc'>Precious metals bend of prong over time due to daily wear and requiring a refurbishment as its normal condition.</li>
                            <li className='smiling-serviceDesc'>Due to daily wear, stones to fall out as prongs get worn out.</li>
                            <li className='smiling-serviceDesc'>Loss of stone due caused by daily wear or other kinds of damage.</li>
                        </ul>

                    </div>
                    <Footer />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', paddingBlock: '30px' }}>
                <p style={{ margin: '0px', fontWeight: 500, width: '100px', color: 'white', cursor: 'pointer' }} onClick={() => window.scrollTo(0, 0)}>BACK TO TOP</p>
            </div>
        </div>
    )
}
