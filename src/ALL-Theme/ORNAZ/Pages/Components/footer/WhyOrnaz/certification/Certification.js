import React, { useEffect } from 'react'
import Header from '../../../home/Header/Header'
import Footer from '../..'
import './Certification.css'

export default function Certification() {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[])

  return (
    <div>
      <Header />
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>

        <div style={{ width: '1100px' }}>
          <div style={{ margin: '35px' }}>
            <h1>CERTIFICATION</h1>
            <p>Ensuring your diamond is certified by one of the leading independent and recognised certification laboratories is essential for an unbiased assessment of the stone's quality. GIA ( Gemological Institute Of America) is the leading grading body in the diamond industry globally. Today, expect most diamonds over 0.20ct to be graded by one of these.</p>

            <h1>EXPERT TIP 1</h1>
            <p>As subtle differences in diamonds can have a massive impact on price, if you are offered self-certification or certifications from less stringent local grading bodies, it is generally because the seller can improve their margins by doing so. Please remember the comparison of such diamonds would NOT be like for like. Always demand a recognised international certificate to create a level playing field. ORNAZ strictly suggest to go with GIA Certified Diamond because nothing is above than that when comes to authenticity & value.</p>

            <h1>EXPERT TIP 2</h1>
            <p>Even amongst the 5 internationally recognised certificates, there are differences. In fact, the diamond industry benchmarks every diamond against the GIA’s (Gemological Institute of America) strict standards. Comparing a diamond with a GIA certificate against an IGI or the weaker EGL is not an equal comparison. So like-for-like colours or clarity grading on EGL would be graded 2/3 grades lower if sent to GIA and therefore should reflect lower prices.</p>
            <center>
              <img src="https://d3rodw1h7g0i9b.cloudfront.net/images/certification/why_gia.jpg" style={{ maxWidth: '80%', textAlign: 'center' }} />
            </center>
            <h1>LASER INSCRIPTION</h1>
            <p>On GIA the report number is laser inscribed in the diamond’s girdle, and can be easily verified with a magnification loop. This assures you the diamond you are buying is the actual one.</p>
            <br />
            <h1>GIA CERTIFICATE & LASER INSCRIPTION</h1>
            <br />
            <center>
              <img src="https://d3rodw1h7g0i9b.cloudfront.net/images/certification/laserinscription.jpg" style={{ maxWidth: '80%' }} />
              <hr />
              <img src="https://d3rodw1h7g0i9b.cloudfront.net/images/certification/gia_certificate.png" style={{ maxWidth: '80%' }} />
            </center>


          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}
