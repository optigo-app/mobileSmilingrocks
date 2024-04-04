import React, { useEffect } from 'react'
import Header from '../../../home/Header/Header'
import FooterSection from '../..'

export default function DeliveryShipping() {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[])

  return (
    <div>
      <Header />
      <div style={{paddingInline : '22%' ,marginBottom : '80px'}}>
        <div>
          <p style={{fontSize : '40px' ,marginBottom : '0px'}}>ORDER DELIVERY</p>
          <p>When you have placed your order, the exciting part of making your jewellery begins. Once completed, we will contact you to inform you that the item is ready for dispatch</p>
        </div>
        <div>
          <p style={{fontSize : '40px' ,marginBottom : '0px'}}>FAQS</p>
          <p>Do you offer free delivery?</p>
          <p>Yes, we offer free worldwide shipping on all orders.<br/><small>*T &amp; C Apply</small></p>
          <p><b>How long does my order take?</b></p>
          <p>Classic styles displayed on our website are normally delivered within 20 - 25 working day. Customized design can take a little longer depending upon the complexity, although our every process is inhoused so timeline is something we can take care of.</p>
          <p><b>Can I have my item sooner than this?</b></p>
          <p>In many cases we can meet shorter urgent deadlines, please just contact us and ask about the specific product you want to order.</p>
          <p><b>How is the item delivered?</b></p>
          <p>All our items are delivered in discrete shipment packaging with no indication of what is inside. However, International orders that cross country borders comply with local rules about declaration of value. The actual jewellery is contained in a luxurious gift box with protective outer packaging.</p>
          <p>Our orders shipped within India or globally are fully insured until they have been delivered to you.</p>
          <p><b>Can you ship to another address?</b></p>
          <p>Yes we can ship to an alternative delivery address, but we will need some additional forms of identification and proof of address if the payment was made by a debit or credit card.</p>
          <p><b>Can I collect my item?</b></p>
          <p>Orders can be collected from our Experience Store , as long as this has been agreed with the sales team. The person collecting must be the person who paid for the goods and must be able to prove their identity.</p>
        </div>
        <div>
          <p style={{fontSize : '40px' ,marginBottom : '0px'}}>FREE SHIPPING</p>
          <p>Purchase any item and we will ship it to you anywhere for free. We provide fast & free shipping  to all our shipping destinations, regardless of the order amount. All items are securely packaged and fully insured while in transit to your home or office.</p>
          <p><b>Additional Info About International Shipping</b><br/>We provide free worldwide shipping with order value above 300,000 INR*</p>
          <p>Feel free to connect with our Care team in case of any query.</p>
        </div>
      </div>
      <FooterSection />
    </div>
  )
}
