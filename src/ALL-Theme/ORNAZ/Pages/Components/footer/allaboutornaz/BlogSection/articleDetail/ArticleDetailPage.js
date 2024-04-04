import React from 'react'
import './ArticleDetailPage.css'
import { FaFacebookF, FaTwitter, FaPinterest, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa'
import Footer from '../blogFooter/Footer'
import { Divider } from '@mui/material'
import BlogHeader from '../header/BlogHeader'
import BlogSearch from '../BlogSearch/BlogSearch'
import bg2 from '../../../../../assets/blog-banner/blog-slider-big-2.jpeg'
import Carousel from 'react-bootstrap/Carousel';

export default function ArticleDetailPage() {
  return (
    <div>
      <BlogHeader />
      <div>
        <Carousel
          fade
          indicators={false}
          prevIcon=''
          nextIcon=''
        >
          <Carousel.Item>
            <img src={bg2} alt="First slide" className="articaleTop-img" />
            <Carousel.Caption className="slick-caption">
              <div className="slick-cap-div" style={{ marginTop: "400px" }}>
                <div style={{ width: "800px" }}>
                  <p className="post-cats">ENGAGEMENT RINGS</p>
                  <p className="entry-title">
                    Upgrade Your Ring Game This Diwali Sale!
                  </p>
                  <p className="date-wrap">NOVEMBER 3, 2023</p>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='articleDeatilMain'>
        <div className='articleDetail'>

          <div style={{ borderTop: '1px solid #e9e9e9', borderBottom: '1px solid #e9e9e9', margin: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBlock: '10px' }}>
              <div style={{ display: 'flex' }}>
                <div>
                  <img alt="" src="https://secure.gravatar.com/avatar/d454a1b042085333d5ba5e90a13fa82f?s=38&amp;d=mm&amp;r=g" srcset="https://secure.gravatar.com/avatar/d454a1b042085333d5ba5e90a13fa82f?s=76&amp;d=mm&amp;r=g 2x" class="avatar avatar-38 photo" height="38" width="38" decoding="async" style={{ borderRadius: '30px' }} />
                </div>
                <div style={{ marginLeft: '10px' }}>
                  <p style={{ color: '#888888', fontSize: '10px', margin: '0px' }}>Written by<br /><span style={{ color: 'black', fontSize: '13px', fontWeight: 500, margin: '0px' }}>SAAKSHI RATHORE</span></p>
                </div>
              </div>
              <div className='articleTopIcone'>
                <div className='topFaceBook'>
                  <FaFacebookF style={{ height: '15px', width: '15px', marginInline: '7px' }} />
                </div>
                <div className='topFaceBook'>
                  <FaTwitter style={{ height: '15px', width: '15px', marginInline: '7px' }} />
                </div><div className='topFaceBook'>
                  <FaPinterest style={{ height: '15px', width: '15px', marginInline: '7px' }} />
                </div><div className='topFaceBook'>
                  <FaLinkedinIn style={{ height: '15px', width: '15px', marginInline: '7px' }} />
                </div>
                <div className='topFaceBook'>
                  <FaRegEnvelope style={{ height: '15px', width: '15px', marginInline: '7px' }} />
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex' }}>
            <div className='articleImageSec'>
              <img fetchpriority="high" decoding="async" width="800" height="800" src="https://www.ornaz.com/blog/wp-content/uploads/2023/10/V-20481886_1_800-1.jpg" alt="" class="wp-image-2421" style={{ width: '350px', height: 'auto' }} srcset="https://www.ornaz.com/blog/wp-content/uploads/2023/10/V-20481886_1_800-1.jpg 800w, https://www.ornaz.com/blog/wp-content/uploads/2023/10/V-20481886_1_800-1-300x300.jpg 300w, https://www.ornaz.com/blog/wp-content/uploads/2023/10/V-20481886_1_800-1-150x150.jpg 150w, https://www.ornaz.com/blog/wp-content/uploads/2023/10/V-20481886_1_800-1-768x768.jpg 768w, https://www.ornaz.com/blog/wp-content/uploads/2023/10/V-20481886_1_800-1-80x80.jpg 80w" sizes="(max-width: 800px) 100vw, 800px" />
            </div>
            <div className='articleDeatilSec'>
              <p>Diwali, the festival of lights, is a time of joy, celebration, and new beginnings. And what better way to celebrate this auspicious occasion than by embarking on a journey of eternal love with a sparkling diamond engagement ring? This Diwali Sale, we’re thrilled to introduce you to an extraordinary offer that will make your dreams of owning a timeless piece of jewellery come true: 0% making charges on every order of our exquisite diamond engagement rings!
                <br />
                <br />
                Come to ORNAZ and get free assistance throughout the stressful journey to find THE engagement ring.</p>
            </div>
          </div>

          <div style={{ display: 'flex' }}>
            <div className='articleDeatilSec'>
              <p>The season is when we finally adorn ourselves with the finest jewellery. So get your favourite pair of earrings, most elegant pendant and classis bands and pay absolutely 0% making charges.
                <br />
                <br />
                Get the option to choose from 5000+ designs with 100% customization available.</p>
              <br />
              <h2>0% Making Charges: An Offer That Shines Bright</h2>
            </div>
            <div className='articleImageSec'>
              <img decoding="async" width="720" height="720" src="https://www.ornaz.com/blog/wp-content/uploads/2023/10/square_-_lsr-34028_-_photo_nov_23_2022_12_54_46_pm-2.png" alt="" class="wp-image-2422" style={{ width: '350px', height: 'auto' }} srcset="https://www.ornaz.com/blog/wp-content/uploads/2023/10/square_-_lsr-34028_-_photo_nov_23_2022_12_54_46_pm-2.png 720w, https://www.ornaz.com/blog/wp-content/uploads/2023/10/square_-_lsr-34028_-_photo_nov_23_2022_12_54_46_pm-2-300x300.png 300w, https://www.ornaz.com/blog/wp-content/uploads/2023/10/square_-_lsr-34028_-_photo_nov_23_2022_12_54_46_pm-2-150x150.png 150w, https://www.ornaz.com/blog/wp-content/uploads/2023/10/square_-_lsr-34028_-_photo_nov_23_2022_12_54_46_pm-2-80x80.png 80w" sizes="(max-width: 720px) 100vw, 720px" />
            </div>
          </div>

          <div style={{ display: 'flex' }}>
            <div className='articleImageSec'>
              <img loading="lazy" decoding="async" width="500" height="500" src="https://www.ornaz.com/blog/wp-content/uploads/2023/11/3-Carat-Diamond-Engagement-Ring-500x500-web.jpg" alt="" class="wp-image-2453" style={{ width: '350px', height: 'auto' }} srcset="https://www.ornaz.com/blog/wp-content/uploads/2023/11/3-Carat-Diamond-Engagement-Ring-500x500-web.jpg 500w, https://www.ornaz.com/blog/wp-content/uploads/2023/11/3-Carat-Diamond-Engagement-Ring-500x500-web-300x300.jpg 300w, https://www.ornaz.com/blog/wp-content/uploads/2023/11/3-Carat-Diamond-Engagement-Ring-500x500-web-150x150.jpg 150w, https://www.ornaz.com/blog/wp-content/uploads/2023/11/3-Carat-Diamond-Engagement-Ring-500x500-web-80x80.jpg 80w" sizes="(max-width: 500px) 100vw, 500px" />
            </div>
            <div className='articleDeatilSec'>
              <p>To make your Diwali celebrations even more memorable, we are proud to introduce our ‘0% making charges’ offer on every order*. What does this mean for you? It means that when you purchase one of our stunning engagement rings, you only pay for the cost of the diamond and the precious metal, and there are absolutely no additional charges for the craftsmanship that goes into creating your unique ring. This incredible offer allows you to get the most value for your money, making your dream engagement ring more accessible than ever.</p>
              <br />
              <h2>Why Choose Our Diamond Engagement Rings?</h2>
            </div>
          </div>

          <div style={{ display: 'flex' }}>
            <div className='articleDeatilSec'>
              <p>1. Quality: Our diamond engagement rings are crafted with the utmost precision and care, using only the finest quality diamonds and metals. Each ring is a masterpiece in itself, designed to last a lifetime.
                <br />
                <br />
                2. Variety: We offer a wide range of designs to cater to different tastes and preferences. Whether you prefer a classic solitaire or a more intricate, vintage-inspired setting, we have the perfect ring to symbolize your love.<br /><br />
                3. Customization: We understand that every love story is unique. That’s why we offer customization options, allowing you to create a one-of-a-kind ring that tells your love story in a personal and meaningful way.</p>
              <br />
            </div>
            <div className='articleImageSec'>
              <img loading="lazy" decoding="async" width="760" height="600" src="https://www.ornaz.com/blog/wp-content/uploads/2023/10/chelsea-solitaire-engagement-ring-plain-band-oval-cut-wedding-band-stack-blog-lifestyle-jeandousset.com_.webp" alt="" class="wp-image-2425" style={{ width: '350px', height: '300px' }} srcset="https://www.ornaz.com/blog/wp-content/uploads/2023/10/chelsea-solitaire-engagement-ring-plain-band-oval-cut-wedding-band-stack-blog-lifestyle-jeandousset.com_.webp 760w, https://www.ornaz.com/blog/wp-content/uploads/2023/10/chelsea-solitaire-engagement-ring-plain-band-oval-cut-wedding-band-stack-blog-lifestyle-jeandousset.com_-300x237.webp 300w" sizes="(max-width: 760px) 100vw, 760px" />
            </div>
          </div>

          <p>Embark on a journey of eternal together-ness this Diwali by investing in a symbol of your everlasting love at ORNAZ . Embrace the festival of lights with a token of love that shines even brighter. Happy Diwali, wishing everyone love and light this diwali.</p>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '40px'
          }}>
            <Divider orientation='horizontal' style={{ background: 'gray', height: '1px', width: '30%' }} />
            <div className='articleTopIcone' style={{ width: '40%' }}>
              <div className='topFaceBook'>
                <FaFacebookF style={{ height: '15px', width: '15px', marginInline: '7px' }} />
              </div>
              <div className='topFaceBook'>
                <FaTwitter style={{ height: '15px', width: '15px', marginInline: '7px' }} />
              </div><div className='topFaceBook'>
                <FaPinterest style={{ height: '15px', width: '15px', marginInline: '7px' }} />
              </div><div className='topFaceBook'>
                <FaLinkedinIn style={{ height: '15px', width: '15px', marginInline: '7px' }} />
              </div>
              <div className='topFaceBook'>
                <FaRegEnvelope style={{ height: '15px', width: '15px', marginInline: '7px' }} />
              </div>
            </div>
            <Divider orientation='horizontal' style={{ background: 'gray', height: '1px', width: '30%' }} />
          </div>

          <div className='furtherReading'>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '70px', marginBottom: '30px' }}>
              <Divider orientation='horizontal' style={{ background: 'gray', height: '1px', width: '35%' }} />
              <p style={{ margin: '0px', fontSize: '18px', width: '25%', textAlign: 'center', marginInline: '15px', fontWeight: 500 }}>FURTHER READING...</p>
              <Divider orientation='horizontal' style={{ background: 'gray', height: '1px', width: '35%' }} />
            </div>

            <div style={{ display: 'flex' }}>

              <div className='furtherBox'>
                <img src="https://www.ornaz.com/blog/wp-content/uploads/2023/10/10-tips-for-wearing-your-diamond-engagement-ring-to-the-beach-561182-600x460.png" className='furtherImg' />
                <div className="related-overlay">
                  <h5>How to Pack Your Jewellery for Travel</h5>
                  <span class="sp-date">October 9, 2023</span>
                </div>
              </div>

              <div className='furtherBox'>
                <img src="https://www.ornaz.com/blog/wp-content/uploads/2023/07/proposal-1024x1024-1-600x460.jpg" className='furtherImg' />
                <div className="related-overlay">
                  <h5>A Complete Proposal Guide Before She Says Yes!</h5>
                  <span class="sp-date">July 28, 2023</span>
                </div>
              </div>

              <div className='furtherBox'>
                <img src="https://www.ornaz.com/blog/wp-content/uploads/2023/09/39b9ce7a969c6ee8873172559d970551-486x460.jpg" className='furtherImg' />
                <div className="related-overlay">
                  <h5>Engagement Ring Shopping Checklist</h5>
                  <span class="sp-date">September 4, 2023</span>
                </div>
              </div>

            </div>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '50px', marginBottom: '30px' }}>
              <Divider orientation='horizontal' style={{ background: 'gray', height: '1px', width: '35%' }} />
              <p style={{ margin: '0px', fontSize: '18px', width: '25%', textAlign: 'center', marginInline: '15px', fontWeight: 500 }}>NO COMMENTS</p>
              <Divider orientation='horizontal' style={{ background: 'gray', height: '1px', width: '35%' }} />
            </div>
            <div>
              <p style={{ color: '#888' }}>LEAVE A REPLY</p>
              <textarea type='text' className='leaveBox' />
            </div>
            <div style={{ marginBlock: '10px', display: 'flex', flexWrap: 'wrap' }}>
              <input placeholder='Name' type='text' className='leaveInputBox' />
              <input placeholder='Email' type='text' className='leaveInputBox' />
              <input placeholder='Website' type='text' className='leaveInputBox' />
            </div>
            <div style={{ display: 'flex', marginBlock: '7px', alignItems: 'center' }}>
              <input type='checkbox' value='Yes' />
              <p style={{ margin: '0px 5px', color: '#999', fontSize: '14px' }}>Save my name, email, and website in this browser for the next time I comment.</p>
            </div>
            <button style={{
              backgroundColor: '#bd9b84',
              border: '0px',
              color: 'white',
              height: '40px',
              width: '180px',
              fontSize: '15px',
              fontWeight: 500,
              marginTop: '15px'

            }}>POST COMMENT</button>
          </div>

          <div style={{ marginBlock: '60px' }}>
            <p style={{ color: '#999999', margin: '0px', fontSize: '14px', marginBlock: '5px', letterSpacing: '1.5px' }}>PREVIOUS POST</p>
            <p style={{
              cursor: 'pointer',
            }}>Celebrating 7 Years Of ORNAZ</p>
          </div>


        </div>
        <div className='articleSidePart'>
          <BlogSearch />
        </div>
      </div>
      <Footer />
    </div>
  )
}
