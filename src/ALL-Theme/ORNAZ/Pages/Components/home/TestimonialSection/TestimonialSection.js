import React, { useEffect } from 'react'
import './TestimonialSection.css'
import s1 from '../../../assets/testimonial/s1.webp'
import s2 from '../../../assets/testimonial/s2.webp'
import s3 from '../../../assets/testimonial/s3.webp'
import s4 from '../../../assets/testimonial/s4.webp'
import s5 from '../../../assets/testimonial/s5.webp'
import s6 from '../../../assets/testimonial/s6.webp'
import ar from '../../../assets/other/ar.svg'
import al from '../../../assets/other/al.svg'
import star from '../../../assets/other/star.svg'


import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { TESTIMONIALS } from '../../../../lib/consts/Strings'

export default function TestimonialSection() {

  let demoJson = [
    {
      images: s1,
      discrip: "Had a great experience dealing with ILA from Ornaz!! Quality and design of the ring is amazing!! For any occasion or ceremonies Ornaz is the final stop!!👍🏼",
      auther: 'Akshay Jaiswal'
    },
    {
      images: s2,
      discrip: "My fiancé and I were looking for a ring for our upcoming wedding. Professionalism, empathy and great customer-understanding are three attributes that come to my mind when I think of ORNAZ. For me, more than the product, it’s the customer experience that I judge a business on. And these guys had it ON POINT!",
      auther: 'Akarshak Gera'
    },
    {
      images: s3,
      discrip: "Had an amazing experience with ORNAZ. Got the ring of my dreams. Thank you team!",
      auther: 'Arshita'
    },
    {
      images: s4,
      discrip: "Great shopping experience. Vaani from Ornaz’s sales team was super helpful, she made the entire experience of buying an engagement ring online seamless !",
      auther: 'Atishay Patni'
    },
    {
      images: s5,
      discrip: "I got a Radiant Cut Diamond Ring with a hidden Halo setting and it is beyond gorgeous. The way of dealing is really captivating unlike the traditional jewellery stores plus I am really satisfied with the product too.",
      auther: 'Deephues'
    },
    {
      images: s6,
      discrip: "We wanted our engagement rings to have our birthstone Amethyst symbolic of our Zodiac, as we both are Aquarians. They designed our ring perfectly within our budget, keeping no quality compromise and customer satisfaction as their topmost priority.",
      auther: 'Vinci Priyasha'
    },
  ]


  const CustomPrevArrow = ({ onClick }) => {
    return (
      <button className="custom-arrow custom-prev" onClick={onClick}>
        <img src={al} alt='prev' style={{ width: '25px', height: '25px' }} />
      </button>
    );
  };
  const CustomNextArrow = ({ onClick }) => {
    return (
      <button className="custom-arrow custom-next" onClick={onClick}>
        <img src={ar} alt='next' style={{ width: '25px', height: '25px' }} />
      </button>
    );
  };

  const isArrowShow = () => {
    if (window.innerWidth <= 1180) {
      return false;
    }
    else {
      return true;
    }
  }

  useEffect(() => {
    const handleResize = () => {
      isArrowShow();
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isArrowShow]);

  return (
    <div className='monial-container'>
      <Carousel
        showArrows={isArrowShow()}
        infiniteLoop={false}
        showThumbs={false}
        showStatus={false}
        autoPlay={false}
        interval={6100}
        showIndicators={false}
        swipeable={true}
        emulateTouch={true}
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && <CustomPrevArrow onClick={onClickHandler} />
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && <CustomNextArrow onClick={onClickHandler} />
        }

      >
        {demoJson.map((data) => (
          <div>
            <div className="myCarousel" >
              <img src={data.images} alt='' style={{ width: window.innerWidth <= 800 ? '100%' : '48%' }} className='testi-image' />
              <div style={{ display: 'flex', flexDirection: 'column' }} className='testi-info-container'>
                <font style={{ fontSize: '25px', marginBottom: '5px', color: '#2C2C2C' }}>{TESTIMONIALS}</font>
                <div style={{ border: "1px solid rgb(44 44 44 / 15%)" }}></div>
                <div style={{ marginTop: '-15px', marginBottom: '-15px' }}>
                  <img src={star} alt='rating' style={{ width: '35.5px', height: '93.46px' }} />
                  <img src={star} alt='rating' style={{ width: '35.5px', height: '93.46px' }} />
                  <img src={star} alt='rating' style={{ width: '35.5px', height: '93.46px' }} />
                  <img src={star} alt='rating' style={{ width: '35.5px', height: '93.46px' }} />
                  <img src={star} alt='rating' style={{ width: '35.5px', height: '93.46px' }} />
                </div>
                <font className='testimonial-descrip'>{`"${data.discrip}"`}</font>
                <font className='auther'>{data.auther}</font>
              </div>
            </div>
          </div>
        ))
        }
      </Carousel>

    </div>
  )
}
