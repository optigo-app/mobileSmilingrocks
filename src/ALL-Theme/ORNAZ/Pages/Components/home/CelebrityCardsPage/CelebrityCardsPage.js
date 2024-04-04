import React from 'react'
import { useNavigate } from 'react-router-dom'

import tp from '../../../assets/celebrityImg/tejasswi_prakash.webp'
import ma from '../../../assets/celebrityImg/malaika_arora.webp'
import hk from '../../../assets/celebrityImg/hina_khan.webp'
import sb from '../../../assets/celebrityImg/sonam_bajwa.webp'
import sa from '../../../assets/celebrityImg/shraddha_arya.webp'
import gk from '../../../assets/celebrityImg/gauahar_khan.webp'
import kt from '../../../assets/celebrityImg/karishma_tanna.webp'
import { Cards } from '../HomeCards/Cards'
import './CelebrityCardsPage.css'

export default function CelebrityCardsPage() {

  const navigation = useNavigate();

  let dummyJson = [
    { prodImg: tp, prodtitle: 'Tejasswi Prakash' },
    { prodImg: ma, prodtitle: 'Malaika Arora' },
    { prodImg: hk, prodtitle: 'Hina Khan' },
    { prodImg: sb, prodtitle: 'Sonam Bajwa' },
    { prodImg: sa, prodtitle: 'Shraddha Arya' },
    { prodImg: gk, prodtitle: 'Gauahar Khan' },
    { prodImg: kt, prodtitle: 'Karishma Tanna' },
  ]

  
  const type = 'celebs';
  const cardTitle = 'Celebrity Inspired Rings';

  return (
    <div>
      <div className='sliderCardWeb'>
        <Cards sallerCardImg={dummyJson} cardTitle={'Celebrity Inspired Rings'} type={'celebs'} />
      </div>

      <div className='sliderCardMobile'>
        <div className="card-header" style={{ marginLeft: '20px', marginTop: '60px' }}>
          <span className="card-title-text">{cardTitle}</span>
          {(type !== 'celebs' && type !== 'banner') && <span className="card-shopall" style={{ marginRight: type === 'category' ? '10px' : '' }}>Shop All</span>}
        </div>
        <div class="scrollable-container">
          <div class="image-scroll-container">
            <div class="image-scroll-contentCele">
              {dummyJson?.map((data, index) => (
                <div key={index} className="image-wrapper">
                  <img src={data.prodImg} alt={`Image ${index + 1}`} style={{}}/>
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
