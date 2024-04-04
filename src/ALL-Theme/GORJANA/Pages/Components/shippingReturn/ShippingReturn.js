import React from 'react'
import './ShippingReturn.css'
import Header from '../home/Header/Header'
import Footer from '../home/Footer/Footer'

export default function ShippingReturn() {
    return (
        <div>
            <Header />
            <div className='gorShippingMain'>
                <p style={{ textAlign: 'center', fontSize: '45px', fontFamily: 'Freight Big Pro,serif' }}>Shipping & Returns</p>

                <p style={{fontSize: '30px'}}>SHIPPING</p>
                <p>We offer free standard shipping on all orders within the U.S. and Puerto Rico. Packages will be shipped via USPS Flat Rate Mail unless another shipping method is selected.</p>
                <p>Expedited shipments placed Monday – Saturday prior to 12pm will ship the same day. Orders placed after 12pm will ship the following day. Orders placed on Sunday will ship on Monday.</p>
                <p>While most orders are processed within 24-hours, orders may take 1-3 business days to process prior to shipment. </p>

                <p><strong>Methods and transit times:</strong></p>
                <table width="100%" role="presentation">
                    <tbody>
                        <tr>
                            <td style={{width: '30.4331%'}}>
                                <h6 style={{textAlign: "left"}}><strong>TYPE</strong></h6>
                            </td>
                            <td style={{width:  '24.5669%'}}>
                                <h6><strong>COST</strong></h6>
                            </td>
                            <td style={{width: '40%'}}>
                                <h6><strong>TIME</strong></h6>
                            </td>
                        </tr>
                        <tr style={{borderBottom: '1px solid' , height: '40px'}}>
                            <td style={{width: '30.4331%'}}>Same-Day Shipping</td>
                            <td style={{width:  '24.5669%'}}>Varies by delivery zone</td>
                            <td style={{width: '40%'}}>Same day</td>
                        </tr>
                        <tr style={{borderBottom: '1px solid' , height: '40px'}}>
                            <td style={{width: '30.4331%'}}>
                                Standard Shipping</td>
                            <td style={{width:  '24.5669%'}}>FREE</td>
                            <td style={{width: '40%'}}>
                                <span>3-5 business days</span>
                            </td>
                        </tr>
                        <tr style={{borderBottom: '1px solid' , height: '40px'}}>
                            <td style={{width: '30.4331%'}}>
                                2 Day Shipping</td>
                            <td style={{width:  '24.5669%'}}>$20</td>
                            <td style={{width: '40%'}}>
                                <span>2 business days</span>
                            </td>
                        </tr>
                        <tr style={{borderBottom: '1px solid' , height: '40px'}}>
                            <td style={{width: '30.4331%'}}>
                                Overnight Shipping</td>
                            <td style={{width:  '24.5669%'}}>$30</td>
                            <td style={{width: '40%'}}>
                                <span>1 business day</span>
                            </td>
                        </tr>
                        <tr style={{borderBottom: '1px solid' , height: '40px'}}>
                            <td style={{width: '30.4331%'}}>
                                Priority International Shipping (DDP)</td>
                            <td style={{width:  '24.5669%'}}>$16</td>
                            <td style={{width: '40%'}}>
                                <span>8-16 business days</span>
                            </td>
                        </tr>
                        <tr style={{borderBottom: '1px solid' , height: '40px'}}>
                            <td style={{width: '30.4331%'}}>
                                Express&nbsp;International Shipping (DDP)</td>
                            <td style={{width:  '24.5669%'}}>$30</td>
                            <td style={{width: '40%'}}>
                                <span>4-9&nbsp;business days</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <br/>
                <p><strong><em>Need more shipping info? Give us a ring.</em></strong></p>
                <p>
                    <span>Saturday - Sunday 7am - 3pm PST</span><br />866.829.0030&nbsp;<br /><a href="mailto:customercare@gorjana.com">customercare@gorjana.com</a>
                </p>

                <p style={{fontSize: '30px'}}>RETURNS</p>
                <p>Returns are accepted on all unworn items within 30 days of purchase. To process your return please visit our online return portal.</p>
                <p>Having troubles? Please contact our customer care team here to help assist. Customer Care is open Monday – Friday: 6am to 5pm PST. Our number is 866.829.0030 and email is customercare@gorjana.com.</p>
                <p>For Instagram orders, initiate returns via the Instagram app.</p>

            </div>
            <div style={{ marginTop: '50px' }}>
                <Footer />
            </div>
        </div>
    )
}
