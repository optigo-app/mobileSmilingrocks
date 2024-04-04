import React, { useEffect } from 'react'
import Footer from '../..'
import Header from '../../../home/Header/Header'
import './QualityValue.css'


export default function QualityValue() {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[])

  return (
    <div>
      <Header />
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <div style={{ width: '1100px'}} className='qualityValueMain'>
          <section>
            <h2>Maximum Sparkle</h2>
            <p className = 'qualityDeatil'>We've revolutionized what it means to buy Engagement rings and Solitaires so you can make the most of your budget. By cutting out the middleman, we pass the savings onto you, all while preserving exceptional customer service and the highest quality diamonds and craftsmanship.</p>
          </section>

          <section>
            <h4>Handcrafted Engagement Rings, High-Quality Diamonds</h4>
            <p className = 'qualityDeatil'>We proudly offer handcrafted engagement rings that are made and quadruple-checked. Our diamond and jewellery experts ensure the quality of ORNAZ diamonds and jewellery before they ship, so you can feel confident that every piece meets our industry-leading standards.</p>
            <p className = 'qualityDeatil'>At ORNAZ, we stand behind our products. Thus, in case of any fallout of diamonds in the setting, we will replace and get it fixed.
              Those would weight upto 0.05 ct (diamond weight).</p>
            <p className = 'qualityDeatil'>We only purchase ethically-sourced diamonds through the largest and most respected manufacturers of the world and no matter the size, all are colorless to nearly colorless (D-J color grade) with exceptional clarity (IF-SI2).</p>
          </section>

          <section>
            <h4>Diamond Education and 24/7 Expert Advice</h4>
            <p className = 'qualityDeatil'>As part of the ORNAZ experience, we provide our customers with exceptional diamond buying tips and unbiased diamond and jewellery education guides, so that you can make an empowered decision about your purchase. Additionally, our diamond and jewellery experts are available 24/7 to answer all questions great or small. We can help you compare diamonds, choose the perfect setting, find a matching wedding band, and so much more. Just ask. It's our pleasure to help.</p>
          </section>

          <section>
            <h4>Diamond Education and 24/7 Expert Advice</h4>
            <p className = 'qualityDeatil'>As part of the ORNAZ experience, we provide our customers with exceptional diamond buying tips and unbiased diamond and jewellery education guides, so that you can make an empowered decision about your purchase. Additionally, our diamond and jewellery experts are available 24/7 to answer all questions great or small. We can help you compare diamonds, choose the perfect setting, find a matching wedding band, and so much more. Just ask. It's our pleasure to help.</p>
          </section>

          <section>
            <h4>GIA-Graded Diamonds, Secure Delivery, 7-day Returns and Lifetime Guarantees</h4>
            <p className = 'qualityDeatil'>We're honored to have earned the trust of over 20,000 happy ORNAZ couples (and growing) who chose ORNAZ to celebrate their engagements &amp; milestone moments. And, we stand behind our products with industry-leading Diamond Certification, secure delivery, 7-day returns, and lifetime guarantees.</p>
            <section>
              <h4>Diamond Education and 24/7 Expert Advice</h4>
              <p className = 'qualityDeatil'>As part of the ORNAZ experience, we provide our customers with exceptional diamond buying tips and unbiased diamond and jewellery education guides, so that you can make an empowered decision about your purchase. Additionally, our diamond and jewellery experts are available 24/7 to answer all questions great or small. We can help you compare diamonds, choose the perfect setting, find a matching wedding band, and so much more. Just ask. It's our pleasure to help.</p>
            </section>
          </section>

          <section>
            <h4>Diamond Best Price Guarantee</h4>
            <p className = 'qualityDeatil'>While ORNAZ claims for the best price guarantee, we can typically match a competitor's offer if you find a diamond of comparable quality and characteristics that is lower in price than ours. Simply call our Care team, and a qualified GIA Trained Diamond Expert will be happy to review your inquiry.</p>
            <p className = 'qualityDeatil'>These terms and conditions apply to our Diamond Best Price Guarantee program.</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}
