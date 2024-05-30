import React, { useState, useEffect, useRef } from 'react'
import { Route, Routes, useLocation, useNavigate, redirect } from 'react-router-dom'
import Home from './Pages/Components/home'
import Impact from './Pages/Components/Impact'
import AboutUs from './Pages/Components/aboutUs/AboutUs'
import LabGroDiamonds from './Pages/Components/LabGroDiamonds/LabGroDiamonds'
import Register from './Pages/Components/AuthScreen/Registretion/Register'
import ForgotPass from './Pages/Components/AuthScreen/forgotPass/ForgotPass'
import ContactUs from './Pages/Components/contactUs/ContactUs'
import FAQ from './Pages/Components/FAQ/FAQ'
import ServicePolicy from './Pages/Components/ServicePolicy/ServicePolicy'
import MyWishList from './Pages/Components/myWishList/MyWishList'
import Lookbook from './Pages/Components/Lookbook/index'
import Press from './Pages/Components/press/Press'
import Account from './Pages/Components/account/Account'
import SearchResult from './Pages/Components/searchResult/SearchResult'
import Celeb from './Pages/Components/celebrity/Celeb'
import Blog from './Pages/Components/Blog/Blog'
import ProductList, { ProductPageTab } from './Pages/Components/productPage/ProductList'
import ProdDetail from './Pages/Components/productDetail/ProdDetail'
import ContinueWithEmail from './Pages/Components/AuthScreen/ContinueWithEmail/ContinueWithEmail'
import LoginWithEmail from './Pages/Components/AuthScreen/LoginWithEmail/LoginWithEmail'
import LoginWithEmailCode from './Pages/Components/AuthScreen/LoginWithEmailCode/LoginWithEmailCode'
import ContimueWithMobile from './Pages/Components/AuthScreen/ContimueWithMobile/ContimueWithMobile'
import LoginWithMobileCode from './Pages/Components/AuthScreen/LoginWithMobileCode/LoginWithMobileCode'
import Delivery from './Pages/Components/delivery/Delivery'
import Header from './Pages/Components/home/Header/Header'
import { Dialog } from '@mui/material'
import { IoMdMail } from 'react-icons/io'
import { FaMobileAlt } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import AccountLedgerTable from './Pages/Components/account/accountLedgerTablePrint/AccountLedgerTable';
import AccountLedgerExcel from './Pages/Components/account/accountLedgerExcelDownload/AccountLedgerExcel';
import AccountLedger from './Pages/Components/account/accountLedger/AccountLedger';
import DebitVoucher from './Pages/Components/account/accountLedgerVouchers/debitVoucher/DebitVoucher';
import CreditVoucher from './Pages/Components/account/accountLedgerVouchers/creditVoucher/CreditVoucher';
import { CartListCounts, WishListCounts } from '../../Recoil/atom'
import { useRecoilState, useSetRecoilState } from 'recoil'
import Payment from './Pages/Components/Payment/Payment'
import Confirmation from './Pages/Components/confirmation/Confirmation'
import { GetCount } from './Utils/API/GetCount'
import LoginOption from './Pages/Components/AuthScreen/LoginOption/LoginOption'
import CartPage from './Pages/Components/home/Header/cartPage/CartPage'
// import OrderHistory from './Pages/Components/account/accountOrderHistory/OrderHistory';
import { ToastContainer } from 'react-toastify';
import HomeTab from './Pages/Components/HomeTab'
import Category from './Pages/Components/CategoryPage/Category'
import WithoutLoginCart from './Pages/Components/home/Header/cartPage/WithoutLoginCart'
import YourProfile from './Pages/Components/account/yourProfile/YourProfile'
import OrderHistory from './Pages/Components/account/accountOrderHistory/OrderHistory'
import ManageAddress from './Pages/Components/account/address/ManageAddress'
import ChangePassword from './Pages/Components/account/changePassword/ChangePassword'
import QuotationQuote from './Pages/Components/account/QuotationQuote/QuotationQuote'
import MobileViewCompo from './Pages/Components/account/MobileViewCompo'
import AccountWothoutLogin from './Pages/Components/account/AccountWothoutLogin'
import DeliveryShipping from './Pages/Components/Policies/deliveryShiping/DeliveryShipping'
import TermsCondition from './Pages/Components/Policies/termsEndCondi/TermsCondition'
import PrivacyPolicy from './Pages/Components/Policies/PrivacyPolicy/PrivacyPolicy'
import SearchPage from './Pages/Components/SearchPage/SearchPage'
import CurrentVersion from './Pages/Components/ProjectVersion/CurrentVersion'

export default function SMININGROCKS_App() {

    const location = useLocation();
    const setCartCount = useSetRecoilState(CartListCounts)
    const setWishCount = useSetRecoilState(WishListCounts)
    const isMobile = window.innerWidth <= 1300;


    const [isOpenDetail, setIsOpenDetail] = useState(false);
    const toggleDetailDrawer = () => {
        setIsOpenDetail(!isOpenDetail);
    };

    const [isOpenShoryBy, setIsOpenShortBy] = useState(false);
    const toggleShoryBy = () => {
        setIsOpenShortBy(!isOpenShoryBy);
    };

    const getCountFunc = async () => {
        await GetCount().then((res) => {
            if (res) {
                setCartCount(res.CountCart)
                setWishCount(res.WishCount)
            }
        })

    }

    useEffect(() => {
        getCountFunc();
    }, [])


    if (isMobile) {
        return (
            <>
                <ToastContainer />
                <div>
                    {(location.pathname === "/accountledgertable" ||
                        location.pathname === "/ContinueWithEmail" ||
                        location.pathname === "/ContimueWithMobile" ||
                        location.pathname === "/accountledgerexcel" ||
                        location.pathname === "/register" ||
                        location.pathname === "/LoginWithMobileCode" ||
                        location.pathname === "/LoginWithEmail" ||
                        location.pathname === "/Category" ||
                        location.pathname === "/LoginWithEmailCode" ||
                        location.pathname === "/CartPage" ||
                        location.pathname === "/ChangePassword" ||
                        location.pathname === "/YourProfile" ||
                        location.pathname === "/account" ||
                        location.pathname === "/myWishList" ||
                        location.pathname === "/OrderHistory" ||
                        location.pathname === "/ManageAddress" ||
                        location.pathname === "/QuotationQuote" ||
                        location.pathname === "/accountledgerdebit" ||
                        location.pathname === "/MobileViewCompo" ||
                        location.pathname === "/Delivery" ||
                        location.pathname === "/Confirmation" ||
                        location.pathname === "/Payment" ||
                        location.pathname === "/AccountWothoutLogin" ||
                        location.pathname === "/DeliveryShipping" ||
                        location.pathname === "/PrivacyPolicy" ||
                        location.pathname === "/signin" ||
                        location.pathname === "/SearchPage" ||
                        location.pathname === "/WithoutLoginCart" ||
                        location.pathname === "/TermsCondition" ||
                        location.pathname === "/accountledgercredit") ?
                        null : <Header />}
                    <div>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/impact" element={<Impact />} />
                            <Route path="/aboutUs" element={<AboutUs />} />
                            <Route path="/labGrowDaimonds" element={<LabGroDiamonds />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/forgotPass" element={<ForgotPass />} />
                            <Route path="/ContinueWithEmail" element={<ContinueWithEmail />} />
                            <Route path="/LoginWithEmail" element={<LoginWithEmail />} />
                            <Route path="/LoginWithEmailCode" element={<LoginWithEmailCode />} />
                            <Route path="/ContimueWithMobile" element={<ContimueWithMobile />} />
                            <Route path="/LoginWithMobileCode" element={<LoginWithMobileCode />} />
                            <Route path="/contactUs" element={<ContactUs />} />
                            <Route path="/faq" element={<FAQ />} />
                            <Route path="/servicePolicy" element={<ServicePolicy />} />
                            <Route path="/myWishList" element={<MyWishList />} />
                            <Route path="/lookbook" element={<Lookbook />} />
                            <Route path="/press" element={<Press />} />
                            <Route path="/account" element={<Account />} />
                            <Route path="/accountledger" element={<AccountLedger />} />
                            <Route path="/accountledgertable" element={<AccountLedgerTable />} />
                            <Route path="/accountledgerexcel" element={<AccountLedgerExcel />} />
                            <Route path="/accountledgerdebit" element={<DebitVoucher />} />
                            <Route path="/accountledgercredit" element={<CreditVoucher />} />
                            <Route path="/searchResult" element={<SearchResult />} />
                            <Route path="/celeb" element={<Celeb />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/productpage" element={<ProductList toggleDetailDrawer={toggleDetailDrawer} toggleShoryBy={toggleShoryBy} isOpenShoryBy={isOpenShoryBy} isOpenDetail={isOpenDetail} />} />
                            <Route path="/productdetail" element={<ProdDetail />} />
                            <Route path="/Delivery" element={<Delivery />} />
                            <Route path="/Payment" element={<Payment />} />
                            <Route path="/Confirmation" element={<Confirmation />} />
                            <Route path="/signin" element={<LoginOption />} />
                            <Route path="/CartPage" element={<CartPage />} />
                            <Route path="/Category" element={<Category />} />
                            <Route path="/WithoutLoginCart" element={<WithoutLoginCart />} />
                            <Route path="/YourProfile" element={<YourProfile />} />
                            <Route path="/ManageAddress" element={<ManageAddress />} />
                            <Route path="/OrderHistory" element={<OrderHistory />} />
                            <Route path="/QuotationQuote" element={<QuotationQuote />} />
                            <Route path="/ChangePassword" element={<ChangePassword />} />
                            <Route path="/AccountWothoutLogin" element={<AccountWothoutLogin />} />
                            <Route path="/MobileViewCompo" element={<MobileViewCompo />} />
                            <Route path="/DeliveryShipping" element={<DeliveryShipping />} />
                            <Route path="/TermsCondition" element={<TermsCondition />} />
                            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
                            <Route path="/SearchPage" element={<SearchPage />} />
                            <Route path="/CurrentVersion" element={<CurrentVersion />} />
                        </Routes>
                        {(location.pathname === "/productpage") ?
                            <ProductPageTab toggleDetailDrawer={toggleDetailDrawer} toggleShoryBy={toggleShoryBy} /> : <HomeTab />}
                    </div>
                </div>
            </>
        )
    }
    else {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h1>it's open only mobile app</h1>
            </div>
        );
    }


}
