import React from 'react'
// import { useNavigate } from 'react-router-dom';

import earings from '../../../assets/finegifts/earrings.webp'
import necklaces from '../../../assets/finegifts/necklaces.webp'
import gifts from '../../../assets/finegifts/gifts.webp'
import bands from '../../../assets/finegifts/bands.webp'
import { Cards } from '../HomeCards/Cards'
import { useNavigate } from 'react-router-dom'


export default function JewelleryGiftsCardsPage() {

  // const navigation = useNavigate();
  let dummyJson = [
    { prodImg: earings, prodtitle: 'Earings' },
    { prodImg: necklaces, prodtitle: 'Necklaces' },
    { prodImg: gifts, prodtitle: 'Gifts' },
    { prodImg: bands, prodtitle: 'Stackable Bands' },

  ]
  const navigation = useNavigate();

  const type = 'category';
  const cardTitle = 'Fine Jewellery Gifts';

  return (
    <div>
      <div className='sliderCardWeb'>
        <Cards sallerCardImg={dummyJson} cardTitle={'Fine Jewellery Gifts'} type={'category'} />
      </div>

      <div className='sliderCardMobile'>
        <div className="card-header" style={{ marginLeft: '20px', marginTop: '60px' }}>
          <span className="card-title-text">{cardTitle}</span>
          {(type !== 'celebs' && type !== 'banner') && <span className="card-shopall" style={{ marginRight: type === 'category' ? '10px' : '' }}>Shop All</span>}
        </div>
        <div class="scrollable-container">
          <div class="image-scroll-container">
            <div class="image-scroll-content">
              {dummyJson?.map((data, index) => (
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
