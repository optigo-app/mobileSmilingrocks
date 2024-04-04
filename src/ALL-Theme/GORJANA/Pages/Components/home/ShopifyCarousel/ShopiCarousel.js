import React, { useState } from 'react'
import './ShopiCarousel.css'

export default function ShopiCarousel() {
    const [selectedTitle, setSelectedTitle] = useState('one');


  return (
    <div>
        <div className='gorShopiTitle' >
            <p className={`shopiCarTile ${selectedTitle === 'one' && selectedTitle}`} onClick={() => setSelectedTitle('one')}>Necklaces</p>
            <p  className={`shopiCarTile ${selectedTitle === 'two' && selectedTitle}`} onClick={() => setSelectedTitle('two')}>Earrings</p>
            <p className={`shopiCarTile ${selectedTitle === 'three' && selectedTitle}`} onClick={() => setSelectedTitle('three')}>Bracelets</p>
            <p className={`shopiCarTile ${selectedTitle === 'fou' && selectedTitle}`} onClick={() => setSelectedTitle('fou')}>Rings</p>
            <p className={`shopiCarTile ${selectedTitle === 'five' && selectedTitle}`} onClick={() => setSelectedTitle('five')}>Fine Jewelry</p>
        </div>
    </div>
  )
}
