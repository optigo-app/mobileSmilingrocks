import React from "react";
import engagement from '../../../assets/shopbycatogery/engagement.webp'
import mens from '../../../assets/shopbycatogery/mens.webp'
import eternity from '../../../assets/shopbycatogery/eternity.webp'
import gifts from '../../../assets/shopbycatogery/gifts.webp'
import { Cards } from "../HomeCards/Cards";

export default function CategoryPage() {

  let demoJSON = [
    { prodImg: engagement, prodtitle: 'Women’s Engagement Rings' },
    { prodImg: mens, prodtitle: 'Men’s Engagement Rings' },
    { prodImg: eternity, prodtitle: 'Eternity Bands' },
    { prodImg: gifts, prodtitle: 'Fine Jewellery Gifts' },
  ]

  const type = 'category';
  const cardTitle = 'Shop by Category';

  return (
    <>
      <div className='sliderCardWeb' style={{ height: 'auto' }}>
        <Cards sallerCardImg={demoJSON} cardTitle={'Shop by Category'} type={'category'} />
      </div>

      <div className='sliderCardMobile'>
        <div className="card-header" style={{ marginLeft: '20px', marginTop: '60px' }}>
          <span className="card-title-text">{cardTitle}</span>
          {(type !== 'celebs' && type !== 'banner') && <span className="card-shopall" style={{ marginRight: type === 'category' ? '10px' : '' }}>Shop All</span>}
        </div>
        <div class="scrollable-container">
          <div class="image-scroll-container">
            <div class="image-scroll-content">
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
    </>
  );
}
