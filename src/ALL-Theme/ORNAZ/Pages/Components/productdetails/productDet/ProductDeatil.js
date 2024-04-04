import React, { useState } from 'react'
import './ProductDeatil.css'
import Footer from '../../footer'
import Header from '../../home/Header/Header'
import ProductContact from '../productCont/ProductContact';
import { useNavigate } from 'react-router-dom';
import MobileFooter from '../../mobileComp/mobileFooter/MobileFooter';
import { BTN_BUYNOW, BTN_KWONMORE, CUSTOMIZE_PRODUCT, PRODUCT_DETAIL, SELECT_SIZE } from '../../../../lib/consts/Strings';

export default function ProductDeatil() {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [isOpenMetalDetail, setIsOpenMetalDetail] = useState(false);
  const [isOpenPrice, setIsOpenPrice] = useState(false);
  const [selectedSize, setSelectedSize] = useState(0)
  const [selectedSizeError, setSelectedSizeError] = useState(false)
  const navigation = useNavigate();

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  const toggleDeatilList = () => {
    setIsOpenDetail(!isOpenDetail);
  };

  const toggleMetalDeatilList = () => {
    setIsOpenMetalDetail(!isOpenMetalDetail);
  };

  const togglePriceList = () => {
    setIsOpenPrice(!isOpenPrice);
  };


  const handleChangeSize = (e) => {
    setSelectedSize(e.target.value)
    setSelectedSizeError(false)
  }
  const handleBynow = () => {
    if (selectedSize == 0) {
      setSelectedSizeError(true)
    } else {
      setSelectedSizeError(false)
      navigation('/CartDetail')
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <div className='web'>
        <div className='imageDetail'>
          <div className='imageDetailImage'>
            <img src='https://d3d5st4bexye3p.cloudfront.net/__sized__/products/SRA1236/SRA1236-1-crop-c0-5__0-5-540x540-70.jpg' alt='...'
              style={{ width: '500px', objectFit: 'cover', zIndex: -1, position: 'relative' }} />
            <div>
              <img src="https://d3rodw1h7g0i9b.cloudfront.net/images/icons/xr_360.png" style={{ height: '100px', width: '100px' }} alt='...' />
              <img src='https://d3d5st4bexye3p.cloudfront.net/__sized__/products/SRA1236/SRA1236-1-crop-c0-5__0-5-540x540-70.jpg' alt='...'
                style={{ height: '100px', width: '100px', margin: '10px' }} />
            </div>
          </div>
          <div className='imageDetailByNow'>
            <p className='productName'>Groovy</p>
            <p className='productDis'>Rings In White Gold (3.36gm) With Diamonds (1.55 Carats )</p>
            <p className='productDisCou'>15.0 % Discount On Diamonds</p>
            <div style={{ display: 'flex', borderTop: '1px solid rgba(0,0,0,.1)', marginTop: '20px' }}>
              <p style={{ color: 'red', fontSize: '18px' }}><del>₹ 450,000</del></p>
              <p style={{ fontSize: '18px', marginLeft: '20px', color: '#999' }}>₹ 4000,000</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p style={{ color: '#434343', fontWeight: 300, fontSize: '15px', display: 'flex', cursor: 'pointer' }} onClick={toggleList}>{CUSTOMIZE_PRODUCT}&nbsp;&nbsp;
                <span style={{ display: 'flex' }}>
                  {isOpen ? <img alt='...' id="customize_icon" style={{ position: 'relative', left: '2px' }} src="https://d3rodw1h7g0i9b.cloudfront.net/images/drop-down.png" />
                    :
                    <img id="customize_icon" style={{ position: 'relative', left: '2px' }} alt='...' src="https://d3rodw1h7g0i9b.cloudfront.net/images/drop-up.png" />
                  }
                </span>
              </p>
              <p style={{ color: '#434343', fontSize: '15px', display: 'flex' }}>18 KT GOLD J-SI1</p>
            </div>
            <div className='dropSize'>
              <p style={{ fontWeight: 400 }}>Size</p> {selectedSizeError && <p style={{ color: 'red', marginRight: '190px' }}>*Please Select A Size</p>}
              <select id="fruit-select" value={selectedSize} onChange={handleChangeSize}>
                <option value='0'>{SELECT_SIZE}</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
              </select>
            </div>
            <ul className={`my-list ${isOpen ? 'open' : ''}`}>
              <li>
                <div className='dropSize'>
                  <p className='dropTitle'>GOLD TYPE</p>
                  <select id="fruit-select">
                    <option value="18">18</option>
                    <option value="14">14</option>
                  </select>
                </div>
              </li>
              <li>
                <div className='dropSize'>
                  <p className='dropTitle'>DIAMOND COLOR</p>
                  <select id="fruit-select">
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                    <option value="G">G</option>
                    <option value="H">H</option>
                    <option value="I">I</option>
                    <option value="J">J</option>

                  </select>
                </div>
              </li>
              <li>
                <div className='dropSize'>
                  <p className='dropTitle'>DIAMOND CLARITY</p>
                  <select id="fruit-select">
                    <option value="VS1">VS1</option>
                    <option value="VS2">VS2</option>
                    <option value="VS2">VS2</option>
                    <option value="VS2">VS2</option>
                    <option value="VS2">VS2</option>
                    <option value="VS2">VS2</option>
                    <option value="VS2">VS2</option>
                  </select>
                </div>
              </li>
            </ul>
            <div>
              <button className='btnByNow' onClick={handleBynow}>{BTN_BUYNOW}</button>
              <button className='btnKnowMore'>{BTN_KWONMORE}</button>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              listStyle: 'none',
              paddingLeft: '10px',
              paddingTop: '30px'
            }}>
              <div>
                <p style={{ fontSize: '12px', display: 'flex' }}><span style={{ marginRight: '10px' }}><img alt='...' width="20px" src="https://d3rodw1h7g0i9b.cloudfront.net/images/cert.png" /></span>CERTIFIED JEWELLERY</p>
                <p style={{ fontSize: '12px', display: 'flex' }}><span style={{ marginRight: '10px' }}><img alt='...' width="20px" src="https://d3rodw1h7g0i9b.cloudfront.net/images/30return.png" /></span>RETURN -7 DAYS</p>
                <p style={{ fontSize: '12px', display: 'flex' }}><span style={{ marginRight: '10px' }}><img alt='...' width="20px" src="https://d3rodw1h7g0i9b.cloudfront.net/images/exchange-icon.png" /></span>EXCHANGE & BUY BACK - LIFE TIME</p>
              </div>
              <div>
                <img height="65px" src="https://d3rodw1h7g0i9b.cloudfront.net/images/whsp.svg" alt='...' style={{ margin: '20px', cursor: 'pointer' }} />
              </div>
            </div>
          </div>
        </div>
        <div className='imageDetail'>
          <div className='productDeatils'>
            <div className='productDeatilSub'>
              <p className='productDetailTitle'>{PRODUCT_DETAIL}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0px' }}>
                <p className='proDetail'>Product Code</p>
                <p className='proDetail' style={{ marginRight: '20px' }}>CodeSRA1236-white-18-J-SI1</p>
              </div>
              <div className='productDetailMain' onClick={toggleDeatilList}>
                <p>DIAMOND DETAILS</p>
                <p style={{ marginRight: '20px' }}>{isOpenDetail ? '-' : '+'}</p>
              </div>
              <div className='productSubDeatil'>
                <p className='proDetail'>Total Weight</p>
                <p className='proDetail' style={{ marginRight: '20px' }}>0.4 carat</p>
              </div>
              <div className='productSubDeatil'>
                <p className='proDetail'>Total no. of Diamonds</p>
                <p className='proDetail' style={{ marginRight: '20px' }}>1</p>
              </div>
              <ul className={`my-DetailList ${isOpenDetail ? 'open' : ''}`} style={{ border: isOpenDetail ? '1px solid lightgray' : ' ' }}>
                <li>
                  <div className='dropSize'>
                    <p className='dropDetailTitle'>Clarity</p>
                    <p className='dropDeatilTitle'>Clarity</p>
                  </div>
                </li>
                <li>
                  <div className='dropSize'>
                    <p className='dropDetailTitle'>Color</p>
                    <p className='dropDeatilTitle'>DIAMOND COLOR</p>
                  </div>
                </li>
                <li>
                  <div className='dropSize'>
                    <p className='dropDetailTitle'>No. Of Diamonds</p>
                    <p className='dropDeatilTitle'>No</p>
                  </div>
                </li>
                <li>
                  <div className='dropSize'>
                    <p className='dropDetailTitle'>Total weight</p>
                    <p className='dropDeatilTitle'>No</p>
                  </div>
                </li>
                <li>
                  <div className='dropSize'>
                    <p className='dropDetailTitle'>Shape</p>
                    <p className='dropDeatilTitle'>No</p>
                  </div>
                </li>
                <li>
                  <div className='dropSize'>
                    <p className='dropDetailTitle'>Setting Type	</p>
                    <p className='dropDeatilTitle'>No</p>
                  </div>
                </li>
              </ul>
              <div className='productDetailMain' onClick={toggleMetalDeatilList}>
                <p>METAL DETAILS</p>
                <p style={{ marginRight: '20px' }}>{isOpenMetalDetail ? '-' : '+'}</p>
              </div>
              <ul className={`my-DetailList ${isOpenMetalDetail ? 'open' : ''}`}>
                <li>
                  <div className='dropSize'>
                    <p className='dropDetailTitle'>Clarity</p>
                    <p className='dropDeatilTitle'>Clarity</p>
                  </div>
                </li>
                <li>
                  <div className='dropSize'>
                    <p className='dropDetailTitle'>Color</p>
                    <p className='dropDeatilTitle'>DIAMOND COLOR</p>
                  </div>
                </li>
              </ul>

              <div className='productDetailMain' onClick={togglePriceList}>
                <p>PRICE BREAKUP</p>
                <p style={{ marginRight: '20px' }}>{isOpenPrice ? '-' : '+'}</p>
              </div>
              <ul className={`my-DetailList ${isOpenPrice ? 'open' : ''}`}>
                <li>
                  <div className='dropSize'>
                    <p className='dropDetailTitle'>Total weight</p>
                    <p className='dropDeatilTitle'>No</p>
                  </div>
                </li>
                <li>
                  <div className='dropSize'>
                    <p className='dropDetailTitle'>Shape</p>
                    <p className='dropDeatilTitle'>No</p>
                  </div>
                </li>
                <li>
                  <div className='dropSize'>
                    <p className='dropDetailTitle'>Setting Type	</p>
                    <p className='dropDeatilTitle'>No</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='contactForm'>
            <ProductContact />
          </div>
        </div>
      </div>


      <div className='mobile'>
        <div className='mobilImageDetail'>
          <div className='mobileImageDetailImage' style={{marginTop : '55px'}}>
            <img src='https://d3d5st4bexye3p.cloudfront.net/__sized__/products/SRA1236/SRA1236-1-crop-c0-5__0-5-540x540-70.jpg' alt='...'
              style={{ width: '100%', objectFit: 'cover', zIndex: -1, position: 'relative' }} />
            <div>
              <img src="https://d3rodw1h7g0i9b.cloudfront.net/images/icons/xr_360.png" style={{ height: '100px', width: '100px' }} alt='...' />
              <img src='https://d3d5st4bexye3p.cloudfront.net/__sized__/products/SRA1236/SRA1236-1-crop-c0-5__0-5-540x540-70.jpg' alt='...'
                style={{ height: '100px', width: '100px', margin: '10px' }} />
            </div>
          </div>
          <div className='mobileImageDetailByNow'>
            <p className='productName'>Groovy</p>
            <p className='productDis'>Rings In White Gold (3.36gm) With Diamonds (1.55 Carats )</p>
            <p className='productDisCou'>15.0 % Discount On Diamonds</p>
            <div style={{ display: 'flex', borderTop: '1px solid rgba(0,0,0,.1)', marginTop: '20px' }}>
              <p style={{ color: 'red', fontSize: '18px' }}><del>₹ 450,000</del></p>
              <p style={{ fontSize: '18px', marginLeft: '20px', color: '#999' }}>₹ 4000,000</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p style={{ color: '#434343', fontWeight: 300, fontSize: '15px', display: 'flex', cursor: 'pointer' }} onClick={toggleList}>{CUSTOMIZE_PRODUCT}&nbsp;&nbsp;
                <span style={{ display: 'flex' }}>
                  {isOpen ? <img alt='...' id="customize_icon" style={{ position: 'relative', left: '2px' }} src="https://d3rodw1h7g0i9b.cloudfront.net/images/drop-down.png" />
                    :
                    <img id="customize_icon" style={{ position: 'relative', left: '2px' }} alt='...' src="https://d3rodw1h7g0i9b.cloudfront.net/images/drop-up.png" />
                  }
                </span>
              </p>
              <p style={{ color: '#434343', fontSize: '15px', display: 'flex' }}>18 KT GOLD J-SI1</p>
            </div>
            <div className='dropSize'>
              <p style={{ fontWeight: 400 }}>Size</p> {selectedSizeError && <p style={{ color: 'red', textAlign: 'center' }}>*Please Select A Size</p>}
              <select id="fruit-select" value={selectedSize} onChange={handleChangeSize}>
                <option value='0'>{SELECT_SIZE}</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
              </select>
            </div>
            <ul className={`my-list ${isOpen ? 'open' : ''}`}>
              <li>
                <div className='dropSize'>
                  <p className='dropTitle'>GOLD TYPE</p>
                  <select id="fruit-select">
                    <option value="18">18</option>
                    <option value="14">14</option>
                  </select>
                </div>
              </li>
              <li>
                <div className='dropSize'>
                  <p className='dropTitle'>DIAMOND COLOR</p>
                  <select id="fruit-select">
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                    <option value="G">G</option>
                    <option value="H">H</option>
                    <option value="I">I</option>
                    <option value="J">J</option>

                  </select>
                </div>
              </li>
              <li>
                <div className='dropSize'>
                  <p className='dropTitle'>DIAMOND CLARITY</p>
                  <select id="fruit-select">
                    <option value="VS1">VS1</option>
                    <option value="VS2">VS2</option>
                    <option value="VS2">VS2</option>
                    <option value="VS2">VS2</option>
                    <option value="VS2">VS2</option>
                    <option value="VS2">VS2</option>
                    <option value="VS2">VS2</option>
                  </select>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className='mobilImageDetail'>
          <div style={{ width: '100%', padding: '3px' }}>
            <div>
              <p className='productDetailTitle' style={{ color: 'black' }}>{PRODUCT_DETAIL}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', height: '50px', alignItems: 'center', margin: '0px' }}>
                <p className='proDetail' style={{ fontSize: '18px', fontWeight: 600, color: 'black' }}>Product Code</p>
                <p className='proDetail' style={{ marginRight: '20px' }}>CodeSRA1236-white-18-J-SI1</p>
              </div>
              <div className='productDetailMain' onClick={toggleDeatilList}>
                <p style={{ fontSize: '18px', fontWeight: 600, color: 'black' }}>DIAMOND DETAILS</p>
                <p style={{ marginRight: '20px' }}>{isOpenDetail ? '-' : '+'}</p>
              </div>
              <div className='productSubDeatil'>
                <p className='proDetail' >Total Weight</p>
                <p className='proDetail' style={{ marginRight: '20px' }}>0.4 carat</p>
              </div>
              <div className='productSubDeatil'>
                <p className='proDetail'>Total no. of Diamonds</p>
                <p className='proDetail' style={{ marginRight: '20px' }}>1</p>
              </div>
              <ul className={`my-DetailList ${isOpenDetail ? 'open' : ''}`} style={{ border: isOpenDetail ? '1px solid lightgray' : ' ' }}>
                <li>
                  <div className='dropSize'>
                    <p className='dropDetailTitle'>Clarity</p>
                    <p className='dropDeatilTitle'>Clarity</p>
                  </div>
                </li>
                <li>
                  <div className='dropSize'>
                    <p className='dropDetailTitle'>Color</p>
                    <p className='dropDeatilTitle'>DIAMOND COLOR</p>
                  </div>
                </li>
                <li>
                  <div className='dropSize'>
                    <p className='dropDetailTitle'>No. Of Diamonds</p>
                    <p className='dropDeatilTitle'>No</p>
                  </div>
                </li>
                <li>
                  <div className='dropSize'>
                    <p className='dropDetailTitle'>Total weight</p>
                    <p className='dropDeatilTitle'>No</p>
                  </div>
                </li>
                <li>
                  <div className='dropSize'>
                    <p className='dropDetailTitle'>Shape</p>
                    <p className='dropDeatilTitle'>No</p>
                  </div>
                </li>
                <li>
                  <div className='dropSize'>
                    <p className='dropDetailTitle'>Setting Type	</p>
                    <p className='dropDeatilTitle'>No</p>
                  </div>
                </li>
              </ul>
              <div className='productDetailMain' onClick={toggleMetalDeatilList}>
                <p style={{ fontSize: '18px', fontWeight: 600, color: 'black' }}>METAL DETAILS</p>
                <p style={{ marginRight: '20px' }}>{isOpenMetalDetail ? '-' : '+'}</p>
              </div>
              <ul className={`my-DetailList ${isOpenMetalDetail ? 'open' : ''}`}>
                <li>
                  <div className='dropSize'>
                    <p className='dropDetailTitle'>Clarity</p>
                    <p className='dropDeatilTitle'>Clarity</p>
                  </div>
                </li>
                <li>
                  <div className='dropSize'>
                    <p className='dropDetailTitle'>Color</p>
                    <p className='dropDeatilTitle'>DIAMOND COLOR</p>
                  </div>
                </li>
              </ul>

              <div className='productDetailMain' onClick={togglePriceList}>
                <p style={{ fontSize: '18px', fontWeight: 600, color: 'black' }}>PRICE BREAKUP</p>
                <p style={{ marginRight: '20px' }}>{isOpenPrice ? '-' : '+'}</p>
              </div>
              <ul className={`my-DetailList ${isOpenPrice ? 'open' : ''}`}>
                <li>
                  <div className='dropSize'>
                    <p className='dropDetailTitle'>Total weight</p>
                    <p className='dropDeatilTitle'>No</p>
                  </div>
                </li>
                <li>
                  <div className='dropSize'>
                    <p className='dropDetailTitle'>Shape</p>
                    <p className='dropDeatilTitle'>No</p>
                  </div>
                </li>
                <li>
                  <div className='dropSize'>
                    <p className='dropDetailTitle'>Setting Type	</p>
                    <p className='dropDeatilTitle'>No</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <MobileFooter />
        <div style={{ position: 'sticky', bottom: '40px', backgroundColor: 'white' }}>
          <button className='btnByNow' onClick={handleBynow}>{BTN_BUYNOW}</button>
          <button className='btnKnowMore'>{BTN_KWONMORE}</button>
        </div>
      </div>
      <div className='footer'>
        <Footer />

      </div>
    </div>

  )
}
