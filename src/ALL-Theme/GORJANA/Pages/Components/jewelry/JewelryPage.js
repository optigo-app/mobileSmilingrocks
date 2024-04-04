import React from 'react'
import './JewelryPage.css'
import ProductList from '../ProductList/ProductList'
import Header from '../home/Header/Header'
import { BlurFlag } from '../../recoil'
import { useRecoilValue } from 'recoil'

const JewelryPage = () => {
  const PageblurFlag = useRecoilValue(BlurFlag)

  return (
    <>
    <Header/>
    <div className='jwpage_container' style={{filter:PageblurFlag && 'blur(10px)',backgroundColor: PageblurFlag && '#f6efe680'}}>
    <ProductList PageType={'jewelry'} />
    </div>
    </>
  )
}

export default JewelryPage