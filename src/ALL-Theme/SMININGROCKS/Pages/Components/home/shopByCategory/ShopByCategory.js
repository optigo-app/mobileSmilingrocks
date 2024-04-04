import React from 'react'
import './ShopByCategory.css'
import shop1 from '../../../assets/Ring.jpg'
import shop2 from '../../../assets/shopByCategory/shopByCategory2.jpg'
import shop3 from '../../../assets/shopByCategory/shopByCategory3.webp'
import shop4 from '../../../assets/shopByCategory/shopByCategory4.jpg'
import { Colors } from '../../../../lib/consts/Colors'

export default function ShopByCategory() {
  return (
    <div>
      <div>
        <p className='shopbycategoryTitle'>Shop By Category</p>
        <div className='shopbycategoryDesc'>
          <p style={{
            color: 'rgb(125, 127, 133)',
            fontSize: '13px',
            width: '240px',
            textAlign: 'center'

          }}>Discover Sonasons Fine Jewelry! Brilliant and Better!</p>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }} className='smilingSopCateMain'>
          <div className='shopByCategoryBox1Main'>
            <div className='shopByCategoryBox'>
              <img src='https://images.pexels.com/photos/3266703/pexels-photo-3266703.jpeg?auto=compress&cs=tinysrgb&w=600' className='shopByCategoryBoxImg' />
              <p style={{ fontWeight: 500, color: Colors.fontColor, textAlign: 'center' }}>RINGS</p>
            </div>
            <div className='shopByCategoryBox'>
              <img src="https://t3.ftcdn.net/jpg/05/73/04/02/240_F_573040288_qlf74CxChEtpChVqHxVRFAUh9Xx7e284.jpg" className='shopByCategoryBoxImg' />
              <p style={{ fontWeight: 500, color: Colors.fontColor, textAlign: 'center' }}>EARRINGS</p>
            </div>
          </div>
          <div className='shopByCategoryBox2Main'>
            <div className='shopByCategoryBox'>
              <img src="https://t3.ftcdn.net/jpg/00/61/20/78/240_F_61207817_eVLm60K8BAHEkIpL9odBurd3Kp7CeLx8.jpg" className='shopByCategoryBoxImg' />
              <p style={{ fontWeight: 500, color: Colors.fontColor, textAlign: 'center' }}>NACKLACES</p>
            </div >
            <div className='shopByCategoryBox'>
              <img src="https://t4.ftcdn.net/jpg/00/61/20/81/240_F_61208174_Rq7r0NljUzxpso4UfRqZQK1EvHNKMSje.jpg" className='shopByCategoryBoxImg' />
              <p style={{ fontWeight: 500, color: Colors.fontColor, textAlign: 'center' }}>BRACELETS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
