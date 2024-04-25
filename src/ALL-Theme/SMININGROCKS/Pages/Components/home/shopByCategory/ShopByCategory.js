import React from 'react'
import './ShopByCategory.css'
import shop1 from '../../../assets/MobileImages/shopByCategory1.jpg'
import shop2 from '../../../assets/MobileImages/shopByCategory2.jpg'
import shop3 from '../../../assets/MobileImages/shopByCategory3.jpg'
import shop4 from '../../../assets/MobileImages/shopByCategory4.jpg'
import { Colors } from '../../../../lib/consts/Colors'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { loginState } from '../../../../../../Recoil/atom'


import promoSetMainBanner2 from '../../../assets/MobileImages/promoSetMainBanner2.jpg'
import secondSlider1 from '../../../assets/MobileImages/promoSetBanner2Img1.jpg'
import secondSlider2 from '../../../assets/MobileImages/promoSetBanner2Img2.jpg'
import secondSlider3 from '../../../assets/MobileImages/promoSetBanner2Img3.jpg'
import secondSlider4 from '../../../assets/MobileImages/promoSetBanner2Img4.jpg'
import secondSlider5 from '../../../assets/MobileImages/promoSetBanner2Img5.jpg'
import secondSlider6 from '../../../assets/MobileImages/promoSetBanner2Img6.jpg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick'


export default function ShopByCategory() {

  const navigation = useNavigate();
  const islogin = useRecoilValue(loginState);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // prevArrow: false, 
    // nextArrow: false,
  };

  return (
    <div>
      <div className='linkingLoveMain' style={{ marginTop: '-10px' }}>
        <div className='linkingLoveImage'>
          <img src={promoSetMainBanner2} className='linkingLoveImageDesign' onClick={() => navigation('/productpage')}/>
        </div>
        <div className='linkingLove'>
          <p className='linkingTitle'>FLORA</p>
          <p className='linkingDesc'>High end affordable luxury with sophisticated designs for your every day.</p>
          <p className='linkingShopCol'>SHOP COLLECTION</p>
          <Slider {...settings} >
            <div className='linkRingLove'>
              <div className='linkRingLoveImgMain'>
                <div className='linkLoveRing1'>
                  <img src={secondSlider1} className='likingLoveImages' />
                </div>
                <div className='linkLoveRing1Desc'>
                  <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                </div>
              </div>
              <div className='linkRingLoveImgMain'>
                <div className='linkLoveRing2'>
                  <img src={secondSlider2} className='likingLoveImages' />
                </div>
                <div className='linkLoveRing1Desc'>
                  <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                </div>
              </div>
            </div>

            <div className='linkRingLove'>
              <div className='linkRingLoveImgMain'>
                <div className='linkLoveRing1'>
                  <img src={secondSlider3} className='likingLoveImages' />
                </div>
                <div className='linkLoveRing1Desc'>
                  <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                  {/* <p style={{ fontSize: '12px' }}>White Gold / $4,949.00</p> */}
                </div>
              </div>
              <div className='linkRingLoveImgMain'>
                <div className='linkLoveRing2'>
                  <img src={secondSlider4} className='likingLoveImages' />
                </div>
                <div className='linkLoveRing1Desc'>
                  <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                  {/* <p style={{ fontSize: '12px' }}>White Gold</p> */}
                </div>
              </div>
            </div>

            <div className='linkRingLove'>
              <div className='linkRingLoveImgMain'>
                <div className='linkLoveRing1'>
                  <img src={secondSlider5} className='likingLoveImages' />
                </div>
                <div className='linkLoveRing1Desc'>
                  <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                </div>
              </div>
              <div className='linkRingLoveImgMain'>
                <div className='linkLoveRing2'>
                  <img src={secondSlider6} className='likingLoveImages' />
                </div>
                <div className='linkLoveRing1Desc'>
                  <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div>
        {/* <p className='shopbycategoryTitle'>Shop By Category</p> */}
        {/* <div className='shopbycategoryDesc'>
          <p style={{
            color: 'rgb(125, 127, 133)',
            fontSize: '13px',
            width: '240px',
            textAlign: 'center'

          }}>Discover Sonasons Fine Jewelry! Brilliant and Better!</p>
        </div> */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginTop: '45px',
          backgroundColor: '#c38c6d'
        }} className='smilingSopCateMain'>
          <div className='shopByCategoryBox1Main'>
            <div className='shopByCategoryBox'>
              <img src={shop1} className='shopByCategoryBoxImg' onClick={() => islogin === 'true' && navigation
                ('/productpage')} />
              {/* <p style={{ fontWeight: 500, color: Colors.fontColor, textAlign: 'center', fontSize: '11px' }}>RINGS</p> */}
            </div>
            <div className='shopByCategoryBox'>
              <img src={shop2} className='shopByCategoryBoxImg' onClick={() => islogin === 'true' && navigation
                ('/productpage')} />
              {/* <p style={{ fontWeight: 500, color: Colors.fontColor, textAlign: 'center', fontSize: '11px' }}>EARRINGS</p> */}
            </div>
          </div>
          <div className='shopByCategoryBox2Main'>
            <div className='shopByCategoryBox'>
              <img src={shop3} className='shopByCategoryBoxImg' onClick={() => islogin === 'true' && navigation
                ('/productpage')} />
              {/* <p style={{ fontWeight: 500, color: Colors.fontColor, textAlign: 'center', fontSize: '11px' }}>NACKLACES</p> */}
            </div >
            <div className='shopByCategoryBox'>
              <img src={shop4} className='shopByCategoryBoxImg' onClick={() => islogin === 'true' && navigation
                ('/productpage')} />
              {/* <p style={{ fontWeight: 500, color: Colors.fontColor, textAlign: 'center', fontSize: '11px' }}>BRACELETS</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
