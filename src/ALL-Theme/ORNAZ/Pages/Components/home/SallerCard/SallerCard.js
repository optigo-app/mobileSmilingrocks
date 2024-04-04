import React from 'react'
import { Cards } from '../HomeCards/Cards'
import img1 from '../../../assets/cardringimg/cardringimg1.webp'
import img2 from '../../../assets/cardringimg/cardringimg2.webp'
import img3 from '../../../assets/cardringimg/cardringimg3.webp'
import img4 from '../../../assets/cardringimg/cardringimg4.webp'
import img5 from '../../../assets/cardringimg/cardringimg5.webp'
import img6 from '../../../assets/cardringimg/cardringimg6.webp'
import Slider from 'react-slick'
import './sallercard.css'

export default function SallerCard() {
  let demoJSON = [
    { prodImg: img1, prodtitle: 'Brenda' },
    { prodImg: img2, prodtitle: 'Beryl' },
    { prodImg: img3, prodtitle: 'Selvin' },
    { prodImg: img4, prodtitle: 'Mira' },
    { prodImg: img5, prodtitle: 'Serena' },
    { prodImg: img6, prodtitle: 'Gloriole' },
  ]

  const type = 'seller';
  const cardTitle = 'Shop Our Best Sellers';

  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>

      <div className='sliderCardWeb' style={{ height: '510px' }}>
        <Cards sallerCardImg={demoJSON} cardTitle={'Shop Our Best Sellers'} type={'seller'} />
      </div>

      <div className='sliderCardMobile'>
        <div className="card-header" style={{ marginLeft: '20px', marginTop: '60px' }}>
          <span className="card-title-text">{cardTitle}</span>
          {(type !== 'celebs' && type !== 'banner') && <span className="card-shopall" style={{ marginRight: type === 'category' ? '10px' : '' }}>Shop All</span>}
        </div>
        <div className="scrollable-container">
          <div className="image-scroll-container">
            <div className="image-scroll-content">
              {demoJSON?.map((data, index) => (
                <div key={index} className="image-wrapper">
                  <img src={data.prodImg} alt={`Image ${index + 1}`} />
                  <div className="card-footer" style={{ marginTop: '10px', fontWeight: '500', fontSize: '14.3px', position: 'relative', zIndex: 1 }}>
                    <font>{data.prodtitle}</font>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
