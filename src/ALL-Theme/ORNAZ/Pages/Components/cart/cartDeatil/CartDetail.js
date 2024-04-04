import React from 'react'
import './CartDetail.css'
import { useNavigate } from 'react-router-dom'
import Header from '../../home/Header/Header'
import Footer from '../../footer'
import CloseIcon from '@mui/icons-material/Close';
import MobileFooter from '../../mobileComp/mobileFooter/MobileFooter'
import { BTN_CHECKOUT_SECURELY, BTN_CONFIRM, BTN_REMOVE } from '../../../../lib/consts/Strings'

const cartData = [
  {
    id: '1',
    name: 'Brenda',
    ringModel: 'Cushion SI1-J Rings',
    Wight: '4.098 gm',
    Size: '5',
    Quantity: '1',
    DeliveryBy: 'Delivery by - 25 Nov',
    oldPrice: '10,000',
    newPrice: '9,999',
    save: '12,122,2333',
    imageUrl: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/ARA1183/ARA1183-1-crop-c0-5__0-5-540x540-70.jpg'
  },
  {
    id: '2',
    name: 'Brenda',
    ringModel: 'Cushion SI1-J Rings',
    Wight: '4.098 gm',
    Size: '5',
    Quantity: '1',
    DeliveryBy: 'Delivery by - 25 Nov',
    oldPrice: '10,000',
    newPrice: '9,999',
    save: '12,122,2333',

    imageUrl: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/ARA1183/ARA1183-1-crop-c0-5__0-5-540x540-70.jpg'
  },

  {
    id: '3',
    name: 'Brenda',
    ringModel: 'Cushion SI1-J Rings',
    Wight: '4.098 gm',
    Size: '5',
    Quantity: '1',
    DeliveryBy: 'Delivery by - 25 Nov',
    oldPrice: '10,000',
    newPrice: '9,999',
    save: '12,122,2333',
    imageUrl: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/ARA1183/ARA1183-1-crop-c0-5__0-5-540x540-70.jpg'
  },
  {
    id: '4',
    name: 'Brenda',
    ringModel: 'Cushion SI1-J Rings',
    Wight: '4.098 gm',
    Size: '5',
    Quantity: '1',
    DeliveryBy: 'Delivery by - 25 Nov',
    oldPrice: '10,000',
    newPrice: '9,999',
    save: '1',
    imageUrl: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/ARA1183/ARA1183-1-crop-c0-5__0-5-540x540-70.jpg'
  },
  {
    id: '5',
    name: 'Brenda',
    ringModel: 'Cushion SI1-J Rings',
    Wight: '4.098 gm',
    Size: '5',
    Quantity: '1',
    DeliveryBy: 'Delivery by - 25 Nov',
    oldPrice: '10,000',
    newPrice: '9,999',
    save: '1',
    imageUrl: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/ARA1183/ARA1183-1-crop-c0-5__0-5-540x540-70.jpg'
  },
  {
    id: '6',
    name: 'Brenda',
    ringModel: 'Cushion SI1-J Rings',
    Wight: '4.098 gm',
    Size: '5',
    Quantity: '1',
    DeliveryBy: 'Delivery by - 25 Nov',
    oldPrice: '10,000',
    newPrice: '9,999',
    save: '1',
    imageUrl: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/ARA1183/ARA1183-1-crop-c0-5__0-5-540x540-70.jpg'
  },

  {
    id: '7',
    name: 'Brenda',
    ringModel: 'Cushion SI1-J Rings',
    Wight: '4.098 gm',
    Size: '5',
    Quantity: '1',
    DeliveryBy: 'Delivery by - 25 Nov',
    oldPrice: '10,000',
    newPrice: '9,999',
    save: '1',
    imageUrl: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/ARA1183/ARA1183-1-crop-c0-5__0-5-540x540-70.jpg'
  }, {
    id: '8',
    name: 'Brenda',
    ringModel: 'Cushion SI1-J Rings',
    Wight: '4.098 gm',
    Size: '5',
    Quantity: '1',
    DeliveryBy: 'Delivery by - 25 Nov',
    oldPrice: '10,000',
    newPrice: '9,999',
    save: '1',
    imageUrl: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/ARA1183/ARA1183-1-crop-c0-5__0-5-540x540-70.jpg'
  },
  {
    id: '9',
    name: 'Brenda',
    ringModel: 'Cushion SI1-J Rings',
    Wight: '4.098 gm',
    Size: '5',
    Quantity: '1',
    DeliveryBy: 'Delivery by - 25 Nov',
    oldPrice: '10,000',
    newPrice: '9,999',
    save: '1',
    imageUrl: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/ARA1183/ARA1183-1-crop-c0-5__0-5-540x540-70.jpg'
  },
  {
    id: '10',
    name: 'Brenda',
    ringModel: 'Cushion SI1-J Rings',
    Wight: '4.098 gm',
    Size: '5',
    Quantity: '1',
    DeliveryBy: 'Delivery by - 25 Nov',
    oldPrice: '10,000',
    newPrice: '9,999',
    save: '1',
    imageUrl: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/ARA1183/ARA1183-1-crop-c0-5__0-5-540x540-70.jpg'
  },
]
export default function CartDetail() {


  const navigation = useNavigate();

  return (
    <div>
      <div className='webCart'>
        <Header />
        <div className='mainCart'>
          <div className='cardDetails'>
            <div>
              {
                cartData.map((data, index) =>
                  <div className='cart' >
                    <img src={data.imageUrl} className='cartImage' alt='...' />
                    <div style={{ marginLeft: '10px' }}>
                      <p className='cartDetails'>{data.name}</p>
                      <p className='cartDetails'>{data.ringModel}</p>
                      <p className='cartDetails'>Wight:{data.Wight}</p>
                      <div className='cartDetails' style={{ display: 'flex' }}>
                        <p className='cartDetails'>Size:{data.Size}</p>&nbsp;&nbsp;&nbsp;
                        <p className='cartDetails'>Quantity:{data.Quantity}</p>
                      </div>

                      <p className='cartDetails' style={{
                        marginTop: '20px', color: '#6abbd3',
                        fontSize: '0.85rem'
                      }}>{data.DeliveryBy}</p>
                      <div style={{ display: 'flex', }}>
                        <p className='cartDetails' style={{ fontSize: '0.7rem' }}>₹{data.newPrice}</p>&nbsp;&nbsp;&nbsp;
                        <p className='cartDetails' style={{ color: 'red', fontSize: '0.7rem' }}><del>₹{data.oldPrice}</del></p>
                      </div>
                      <p className='cartDetails' style={{ fontSize: '0.7rem', color: 'green', marginTop: '-5px' }}>Save: ₹{data.save}</p>
                    </div>
                    <div>
                      <button className='btnRemove'>{BTN_REMOVE}</button>
                    </div>

                  </div>
                )
              }
            </div>
          </div>
          <div className='cartTotal'>
            <div className='cartTotalData'>
              <div className='totalData bold' style={{ fontSize: '0.9rem' }}>
                <p>SubTotal</p>
                <p>₹3,33,33,235</p>
              </div>
              <div className='totalData'>
                <p style={{ fontSize: '0.9rem', margin: '0px' }}>Discount</p>
                <p style={{ fontSize: '0.9rem', color: 'green' }}>-₹1,22,223</p>
              </div>
              <div className='totalData'>
                <p style={{ fontSize: '0.9rem', marginTop: '5px' }}>Shipping Charges</p>
                <p style={{ fontSize: '0.9rem', color: '#44D4D5', marginTop: '5px' }}>FREE</p>
              </div>
              <div className='totalData bold' style={{ fontSize: '0.9rem' }}>
                <p style={{ marginTop: '5px' }}>TOTAL</p>
                <p style={{ marginTop: '5px' }}>₹75,519.50</p>
              </div>
              <div className='totalData' style={{ fontSize: '0.8rem' }}>
                <p style={{ marginTop: '5px' }}>Tax (Inclusive)</p>
                <p style={{ marginTop: '5px' }}>₹75,519.50</p>
              </div>
            </div>
            <button className='btnCheckOut' onClick={() => navigation('/CheckOutSummry')}>{BTN_CHECKOUT_SECURELY}</button>
          </div>

        </div>
        <Footer />
      </div>


      <div className='mobileCart'>
        <Header />
        <div className='mobileMainCart'>
          <div className='mobileCardDetails'>
            <div style={{width : '100%' , marginTop : '55px'}}>
              {
                cartData.map((data, index) =>
                  <div className='mobilSubCart' >
                  
                    <img src={data.imageUrl} className='mobileCartImage' alt='...' />
                    <div style={{ marginLeft: '10px' }}>
                      <p className='cartDetails' style={{ fontSize: '20px', fontWeight: 600 }}>{data.name}</p>
                      <div style={{ display: 'flex', }}>
                        <p className='cartDetails' style={{ fontSize: '1rem', color: 'black', fontWeight: 500 }}>₹{data.newPrice}</p>&nbsp;&nbsp;&nbsp;
                        <p className='cartDetails' style={{ color: 'black', fontSize: '0.9rem' }}><del>₹{data.oldPrice}</del></p>
                      </div>
                      <p className='cartDetails' style={{ color: 'green', fontSize: '0.9rem' }}>{data.DeliveryBy}</p>
                      <p className='cartDetails' style={{ fontSize: '14px' }}>Ring Size - {data.Size}</p>
                      {/* &nbsp;&nbsp;&nbsp; */}
                      <div style={{ display: 'flex', }}>
                        <p className='cartDetails'>{data.Wight}</p>
                        <p className='cartDetails'>{data.ringModel}</p>
                      </div>
                    </div>
                    <div style={{ position : 'absolute' , right : '20px'}}>
                      <div style={{ height: '30px', width: '30px', border: '1px solid black', borderRadius: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <CloseIcon />
                      </div>
                    </div>

                  </div>
                )
              }
            </div>
          </div>

          <div className='mobileCartTotal'>
            <div className='mobileCartTotalData'>
              <div className='totalData bold' style={{ fontSize: '0.9rem' }}>
                <p style={{ fontSize: '1rem', margin: '0px' }}>MRP:-</p>
                <p style={{ fontSize: '1rem', margin: '0px' }}>₹3,33,33,235</p>
              </div>
              <div className='totalData' style={{ marginTop: '0.9rem' }}>
                <p style={{ fontSize: '1rem', margin: '0px' }}>You Save:-</p>
                <p style={{ fontSize: '1rem', color: 'green', margin: '0px' }}>-₹1,22,223</p>
              </div>
              <div className='totalData bold' style={{ marginTop: '0.9rem' }}>
                <p style={{ fontSize: '1rem', margin: '0px' }}>Total Price:-</p>
                <p style={{ fontSize: '1rem', margin: '0px' }}>₹75,519.50</p>
              </div>
              <div className='totalData' style={{ marginTop: '0.8rem' }}>
                <p style={{ fontSize: '1rem', margin: '0px' }}>GST(inclusive)</p>
                <p style={{ fontSize: '1rem', margin: '0px' }}>₹75,519.50</p>
              </div>
            </div>
          </div>


        </div>
        <div style={{ marginTop: '15px', margin: '10px' }}>
          <p style={{ margin: '0px', fontSize: '19px', fontWeight: 600 }}>Add Intructions to order</p>
          <textarea style={{ border: '1px solid #ced4da', height: '100px', width: '95%' }} />
        </div>
        <MobileFooter />
        <div style={{ position: 'sticky',backgroundColor: 'white', bottom: '0px', display: 'flex', justifyContent: 'center' }}>
          <button className='btnConfirm' onClick={() => navigation('/CheckOutSummry')}>{BTN_CONFIRM}</button>
        </div>
        {/* <Footer /> */}
      </div>

    </div>
  )
}
