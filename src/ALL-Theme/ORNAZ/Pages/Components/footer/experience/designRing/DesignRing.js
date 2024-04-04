import React, { useEffect } from 'react'
import Header from '../../../home/Header/Header'
import Footer from '../..'
import './DesignRing.css'

export default function DesignRing() {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[])

  return (
    <div>
      <Header />
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <div style={{ width: '1100px'}}>
          <p style={{
            fontSize: '1.3rem',
            textAlign: 'center',
            margin: '10px'
          }}>If you can dream it, we can build it!</p>
          <div class="separator"></div>

          <div style={{ display: 'flex', flexDirection: 'row',}}>
            <div className='detailSection'>
              <p style={{fontSize : '16px'}}>Although we have an extensive selection of Engagement Rings to choose from, if you have any specific design in your mind, that is when our custom fabrication comes in. Custom creating a piece of jewellery is often perceived as complicated and expensive, but that is not the case here as we provide this service complimentary while taking care of turning your imagination into reality . We will take the time to explain the process of custom creation.</p>
              <p style={{fontSize : '16px'}}>We at ORNAZ always say that an engagement ring must be built center out. Ring settings are a matter of taste and there is no setting that is superior to all the others, but the size, shape, and even quality of the center stone can dictate which style of setting is most aesthetically pleasing. That is why we are determined to combine your vision with our technical expertise to produce a product that will leave you in awe for years to come.</p>
              <img src="https://d3rodw1h7g0i9b.cloudfront.net/images/image-1.jpg" alt="" style={{ width: '100%' ,position: 'relative', zIndex : -1 }} />
            </div>
            <div className='stepSection'>
              <p style={{ fontSize: '1.5rem', fontWeight: 'normal', margin: '0px' }}>Step By Step Process</p>

              <div className='setpDetailMain'>
                <div className='stepDetail'>
                  <p>Step 1: Hand Sketches Of Your Design<br />
                    The creative process at ORNAZ begins with hand sketches. Where every reference of your given design inputs is overseen by the designers and includes the crescent silhouette.</p>
                </div>
                <div className='stepDetailImg' style={{ display: 'flex' }}>
                  <img src="https://d3rodw1h7g0i9b.cloudfront.net/images/image-2.jpg" alt="" />
                </div>
              </div>

              <div className='setpDetailMain'>
                <div className='stepDetail'>
                  <p>Step 2: 3D Rendering<br />
                    Thanks to advancements in technology, we are able to virtually bring your idea to life with our 3-D rendering program. This allows us to review what the finished product will look like and more importantly, make any necessary adjustments before the casting process. Once the 3-D rendering is approved by you, we process the design to prduction.</p>
                </div>
                <div className='stepDetailImg' style={{ display: 'flex' }}>
                  <img src="https://d3rodw1h7g0i9b.cloudfront.net/images/image-3.jpg" alt="" />
                </div>
              </div>

              <div className='setpDetailMain'>
                <div className='stepDetail'>
                  <p>Step 3: Casting <br />
                    Once the rendering is approved, designs are sent to the Rapid Prototype Machines, These incredible machines weave wax back and forth to build a three-dimensional wax ring prototype & then we proceed with casting the ring. Similar to ordering a custom tailored suit, the ring is created given the exact measurements of your center diamond and finger size to create a perfect match. Now that we have the rough metal casting, it's time to clean the ring out and prepare it for the diamond setting.</p>
                </div>
                <div className='stepDetailImg' style={{ display: 'flex' }}>
                  <img src="https://d3rodw1h7g0i9b.cloudfront.net/images/image-4.jpg" alt="" />
                </div>
              </div>

              <div className='setpDetailMain'>
                <div className='stepDetail'>
                  <p>Step 4: Stone Setting & Polishing <br />
                    Each diamond is carefully picked for aesthetic compatibility and set to ensure consistency throughout the ring. Thanks to the steady hands of our talented and seasoned diamond artisans, we have turned the rough metal casting into a shockingly beautiful engagement ring. Typically, the whole process from start to finish takes approximately 7- 10 days marking it a fastest customization in the industry.</p>
                </div>
              </div>


              <div className='setpDetailMain'>
                <div className='stepDetail'>
                  <p>Step 5: The Finale <br />
                    The last step is as beautiful as cake walk, because finally the time comes where we showcase you</p>
                </div>
              </div>

            </div>
          </div>
          <p>Privacy Policy-Your security and protection of your personal information is one of Ornaz.com`s top priorities.</p>

          <div className="row bottom-block">
            <div className="col-md-6 col-sm-12">
              <a href="mailto:care@ornaz.com" className="contact-ornaz">care@ornaz.com</a>
              <br />
            </div>
            <div className="col-md-6 col-sm-12" style={{ float: "right" }}>
              <a href="tel://18002120299" className="contact-ornaz">18002120299</a>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}
