import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Components/home'
import Jewellary from './Pages/Components/Jewellary'
import ProductDeatil from './Pages/Components/productdetails/productDet/ProductDeatil'
import DesignRing from './Pages/Components/footer/experience/designRing/DesignRing'
import BookAppoinment from './Pages/Components/footer/experience/bookAppoiment/BookAppoinment'
import FreeEngraving from './Pages/Components/footer/experience/freeEngraving/FreeEngraving'
import GiaAssistance from './Pages/Components/footer/WhyOrnaz/GiaAssistance/GiaAssistance'
import Certification from './Pages/Components/footer/WhyOrnaz/certification/Certification'
import Craftsmanship from './Pages/Components/footer/WhyOrnaz/craftsmanship/Craftsmanship'
import QualityValue from './Pages/Components/footer/WhyOrnaz/qualityval/QualityValue'
import LifeTimeExchange from './Pages/Components/footer/Policies/lifeTimeExch/LifeTimeExchange'
import TermsCondition from './Pages/Components/footer/Policies/termsEndCondi/TermsCondition'
import DeliveryShipping from './Pages/Components/footer/Policies/deliveryShiping/DeliveryShipping'
import PrivacyPolicy from './Pages/Components/footer/Policies/PrivacyPolicy/PrivacyPolicy'
import AskedQuetion from './Pages/Components/footer/Policies/askedQuetion/AskedQuetion'
import About from './Pages/Components/footer/allaboutornaz/about/About'
import Contact from './Pages/Components/footer/allaboutornaz/contactPage/Contact'
import Friend from './Pages/Components/footer/allaboutornaz/ReferFriends/Friend'
import CelebTakeOver from './Pages/Components/footer/allaboutornaz/CelebTakeOver/CelebTakeOver'
import BlogSection from './Pages/Components/footer/allaboutornaz/BlogSection'
import LoginPage from './Pages/Components/login/Login'
import Register from './Pages/Components/register/Register'
import Forgot from './Pages/Components/forgot/Forgot'
import CartDetail from './Pages/Components/cart/cartDeatil/CartDetail'
import CheckOutSummry from './Pages/Components/checkoutsummry'
import Account from './Pages/Components/account'
import Payment from './Pages/Components/payment/Payment'
import MobileSearch from './Pages/Components/mobileComp/mobileSearch/MobileSearch'
import MobileCart from './Pages/Components/mobileComp/mobileCart/MobileCart'
import Profile from './Pages/Components/mobileComp/profile/Profile'
import FAQ from './Pages/Components/mobileComp/FAQ/FAQ'
import DisplayTechnology from './Pages/Components/footer/experience/DisplayTechnology/DisplayTechnology'
import ArticleDetailPage from './Pages/Components/footer/allaboutornaz/BlogSection/articleDetail/ArticleDetailPage'
import SearchResult from './Pages/Components/footer/allaboutornaz/BlogSection/searchResult/SearchResult'
import WishList from './Pages/Components/mobileComp/wishList/WishList'

export default function ORNAZ_App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jewelleryPage" element={<Jewellary />} />
            <Route path="/productDetails" element={<ProductDeatil />} />
            <Route path="/DisplayTechnology" element={<DisplayTechnology />} />
            <Route path="/DesignRing" element={<DesignRing />} />
            <Route path="/BookAppoinment" element={<BookAppoinment />} />
            <Route path="/FreeEngraving" element={<FreeEngraving />} />
            <Route path="/GiaAssistance" element={<GiaAssistance />} />
            <Route path="/Certification" element={<Certification />} />
            <Route path="/Craftsmanship" element={<Craftsmanship />} />
            <Route path="/QualityValue" element={<QualityValue />} />
            <Route path="/LifeTimeExchange" element={<LifeTimeExchange />} />
            <Route path="/TermsCondition" element={<TermsCondition />} />
            <Route path="/DeliveryShipping" element={<DeliveryShipping />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/AskedQuetion" element={<AskedQuetion />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Friend" element={<Friend />} />
            <Route path="/CelebTakeOver" element={<CelebTakeOver />} />
            <Route path="/BlogSection" element={<BlogSection />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/RegisterPage" element={<Register />} />
            <Route path="/ForgotPassworrd" element={<Forgot />} />
            <Route path="/CartDetail" element={<CartDetail />} />
            <Route path="/CheckOutSummry" element={<CheckOutSummry />} />
            <Route path="/Account" element={<Account />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/WatchList" element={<WishList />} />
            <Route path="/MobileSearch" element={<MobileSearch />} />
            <Route path="/MobileCart" element={<MobileCart />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/ArticleDetailPage" element={<ArticleDetailPage />} />
            <Route path="/SearchResult" element={<SearchResult />} />
        </Routes>
    )
}
