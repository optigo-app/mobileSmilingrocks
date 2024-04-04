import React, { useState } from 'react'
import Header from '../home/Header/Header'
import JewelleryCard from './JewelleryCardSection/JewelleryCard'
import ShopByFilter from './ShopByFilter/ShopByFilter'
import Footer from '../footer'
import './index.css'

export default function Jewellary() {

  const [selectedOption, setSelectedOption] = useState('option1');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };


  return (
    <div>
      <div className='jewellaryWeb'>
        <Header />
        <div style={{height : '50px',display: 'flex',justifyContent : 'flex-end',alignItems : 'center', backgroundColor : '##f8f8f8' ,marginRight : '50px'}}>

          Sort by: <select id="dropdown" value={selectedOption} onChange={handleOptionChange} style={{float : 'right' ,height : '40px' , border : 'none'}}>
            <option value="option1" className='sortSubMenu' tyle={{float : 'right' ,height : '60px' , border : 'none'}}>Option 1</option>
            <option value="option2" className='sortSubMenu'>Option 2</option>
            <option value="option3" className='sortSubMenu'>Option 3</option>
          </select>
        </div>
        <div className='mainJewellaryInedx'>

          <ShopByFilter />
          <JewelleryCard />
        </div>
        <Footer />
      </div>

      <div className='jewellaryMobile'>
        <Header />
        <div className='mainJewellaryMobileInedx'>
          <JewelleryCard />
          <ShopByFilter />
        </div>
      </div>

    </div>
  )
}
