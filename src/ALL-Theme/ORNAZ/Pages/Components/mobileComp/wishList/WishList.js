import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../home/Header/Header';

export default function WishList() {

  const navigation = useNavigate();

  return (
    <div>
      <Header name='Wish List' />
      <div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '150px' }}>
          <img src="https://d1idqhwk00c3jv.cloudfront.net/v55/assets/cart/empty_cart.png" alt="No Products" style={{ width: '60%', aspectRatio: '0.78 / 1' }} />
        </div>
        <p style={{ textAlign: 'center', fontSize: '22px', fontWeight: 600 }}>Your Wishlist is Empty</p>
        <p style={{ textAlign: 'center', fontSize: '15px', fontWeight: 400 }}>Save your favorite items to wishlist where you can review them and move them to bag</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button style={{ backgroundColor: 'rgb(68, 212, 213)', textAlign: 'center', fontSize: '20px', fontWeight: 500, border: 'none', height: '35px', width: '130px' }} onClick={() => navigation('/jewelleryPage')}>Shop Now</button>
        </div>
      </div>
    </div>
  )
}
