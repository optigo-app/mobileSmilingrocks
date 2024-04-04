import React from 'react'
import './index.css';
import Header from './Header/Header'
import BannerPage from './BannerPage/BannerPage'
import SallerCard from './SallerCard/SallerCard'
import ConnectPage from './ConnectPage/ConnectPage'
import CategoryPage from './CategoryPage/CategoryPage'
import MentionSection from './MentionSection/MentionSection'
import CelebrityCardsPage from './CelebrityCardsPage/CelebrityCardsPage'
import JewelleryGiftsCardsPage from './JewelleryGiftsCardsPage/JewelleryGiftsCardsPage'
import TestimonialSection from './TestimonialSection/TestimonialSection'
import AppoinmentSection from './AppoinmentSection/AppoinmentSection'
import HomeFooter from './HomeFooter/HomeFooter'
import JewelleryGiftsBannerPage from './jewelleryGiftsBannerPage/JewelleryGiftsBannerPage'

export default function Home() {

  
  return (
    <div className='index-container'>

      
      <div className='header'>
      <Header/>
      <BannerPage /> 
      </div>
      <div className='sallercard'>
      <SallerCard />
      </div>
      <ConnectPage/>
      <CategoryPage />
      <MentionSection />
      <CelebrityCardsPage />
      <div className='JewelleryGiftsBannerPage'>
        <JewelleryGiftsBannerPage />
      </div>
      <JewelleryGiftsCardsPage />
      <TestimonialSection />
      <AppoinmentSection />
      <HomeFooter />
    </div>
  )
}
