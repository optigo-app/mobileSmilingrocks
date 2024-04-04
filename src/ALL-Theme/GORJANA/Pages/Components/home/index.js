import React from 'react'
import Header from './Header/Header'
import Favorites from './Favorites/Favorites'
import GiftSection from './GiftSection/GiftSection'
import ShopiCarousel from './ShopifyCarousel/ShopiCarousel'
import TrideBanner from './TriedBanner/TrideBanner'
import FeatureColl from './FeaturedCollection/FeatureColl'
import Masonry from './masonrySection/Masonry'
import Footer from './Footer/Footer'
import Recommended from './Recommended/Recommended'
import VisitAs from './VisitAs/VisitAs'
import InstaSection from './instagram/InstaSection'
import { useRecoilValue } from 'recoil'
import { BlurFlag } from '../../recoil'


export default function Home() {
  const PageblurFlag = useRecoilValue(BlurFlag)
  return (
    <div>
        <div>
            <Header />
            <div style={{filter: PageblurFlag && 'blur(10px)',backgroundColor: PageblurFlag && '#f6efe680'}}>
            <Favorites />
            <GiftSection />
            <ShopiCarousel />
            <TrideBanner />
            <FeatureColl />
            <Masonry />
            <Recommended />
            <VisitAs />
            <InstaSection />
            <Footer />
            </div>
        </div>
    </div>
  )
}
