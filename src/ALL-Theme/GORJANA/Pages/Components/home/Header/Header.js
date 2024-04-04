import React, { useState } from "react";
import { PiMapPinLight } from "react-icons/pi";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useSetRecoilState } from "recoil";
import { BlurFlag, SearchDrawerFlag, SideNavListFlag, SideNavListItem } from "../../../recoil";
import { IoMenuOutline } from "react-icons/io5";
import { Drawer } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { PiBagThin } from "react-icons/pi";

export default function Header({ }) {
  let navigate = useNavigate();

  const setRecoilBlurFlag = useSetRecoilState(BlurFlag);
  const setRecoilSideNavListItem = useSetRecoilState(SideNavListItem);
  const setRecoilSideNavListFlag = useSetRecoilState(SideNavListFlag)
  const [enterMouceimg1, setEnterMouceimg1] = useState(false);

  const [openSearchDrawer, setOpenSearchDrawer] = useState(false);
  const [openYourBagDrawer, setOpenYourBagDrawer] = useState(false);

  return (


    <div>

      <Drawer
        open={openSearchDrawer}
        onClose={() => {
          setOpenSearchDrawer(false);
        }}
        anchor="right"
        elevation={0}
        className="searchCustomDrawer"
        sx={{
          "& .MuiBackdrop-root": { backgroundColor: "transparent" },
          zIndex: 111,
        }}
      >
        <div style={{ paddingTop: '150px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h1 style={{ color: 'black', marginLeft: '40%', fontFamily: 'Freight Big Pro, sans-serif', fontWeight: 400 }}>Search</h1>
            <CloseRoundedIcon
              style={{ fontSize: "32px", marginLeft: '30%', cursor: 'pointer' }}
              onClick={() => {
                setOpenSearchDrawer(false);
              }}
            />
          </div>
          <div className="gorHeaderSearchBoxDiv">
            <input type="text" placeholder="Search" className="gorHeaderSearchBox" />
          </div>
          <div>
            <p style={{ fontSize: '20px', margin: '20px 50px' }}>Popular searches</p>
            <p style={{ fontSize: '20px', margin: '15px 60px' }}>Necklace</p>
            <p style={{ fontSize: '20px', margin: '15px 60px' }}>Earrings</p>
            <p style={{ fontSize: '20px', margin: '15px 60px' }}>Parker</p>
            <p style={{ fontSize: '20px', margin: '15px 60px' }}>Rings</p>
            <p style={{ fontSize: '20px', margin: '15px 60px' }}>Huggies</p>
            <p style={{ fontSize: '20px', margin: '15px 60px' }}>Pearl</p>
            <p style={{ fontSize: '20px', margin: '15px 60px' }}>Bracelet</p>
            <p style={{ fontSize: '20px', margin: '15px 60px' }}>Silver</p>
            <p style={{ fontSize: '20px', margin: '15px 60px' }}>Opal</p>
          </div>
        </div>
      </Drawer>

      <Drawer
        open={openYourBagDrawer}
        onClose={() => {
          setOpenYourBagDrawer(false);
        }}
        anchor="right"
        elevation={0}
        className="searchCustomDrawer"
        sx={{
          "& .MuiBackdrop-root": { backgroundColor: "transparent" },
          zIndex: 111,
        }}
      >
        <div style={{ paddingTop: '150px' }}>
          <div className="gorYourBagTopHeader">
            <h1 style={{ color: 'black', marginLeft: '30%', fontFamily: 'Freight Big Pro,serif', fontWeight: 400 }}>Your Bag (1)</h1>
            <CloseRoundedIcon
              style={{ fontSize: "32px", marginLeft: '30%', cursor: 'pointer' }}
              onClick={() => {
                setOpenYourBagDrawer(false);
              }}
            />
          </div>
          <div style={{ marginTop: '70px', paddingBottom: '150px' }}>
            <div style={{ display: 'flex', marginInline: '30px' }}>
              <img alt="" src="https://cdn.shopify.com/s/files/1/0015/3849/0427/files/RE-1811-202-G_1_641d250d-bdec-4856-9232-5c453e35e89c.jpg?v=1700605683&width=832&height=1109&crop=center" className="gorBagimge" />
              <div style={{width: '100%'}}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <p style={{margin: '0px' ,fontSize:'17px', fontFamily: 'Freight Big Pro,serif'}}>Bespoke Plate Adjustable Bracelet (gold)</p>
                  <p style={{margin: '0px' ,fontSize:'15px'}}>$150</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <p style={{margin: '0px' ,fontSize:'13px',fontStyle: 'italic'}}>Gold Plated</p>
                  <p>Remove</p>
                </div>
                <div style={{ marginTop: '40px' }}>
                  <p style={{fontSize: '13px' ,cursor:'pointer', textDecoration: 'underline'}}>Remove</p>
                </div>
              </div>
            </div>

            <div>
              <p style={{ fontSize: '32px', marginTop: '50px', fontFamily: 'Freight Big Pro,serif', textAlign: 'center' }}>Don't Forget These</p>
              <div style={{ display: 'flex' }}>
                <div style={{ marginInline: '20px' }}>
                  <div style={{ position: 'relative',zIndex:'-1', width: 'fit-content' }}>
                    <img alt="" src={enterMouceimg1 ? "https://cdn.shopify.com/s/files/1/0015/3849/0427/products/GS-229-200-G_4.jpg?v=1690277975&width=832&height=1109&crop=center" : "https://cdn.shopify.com/s/files/1/0015/3849/0427/products/GS-229-200-G_1.jpg?v=1690277975&width=832&height=1109&crop=center"} className="gorBagForgetimage" onMouseEnter={() => setEnterMouceimg1(true)} onMouseLeave={() => setEnterMouceimg1(false)} />
                    <div className="gorForgotIconeDiv">
                      <PiBagThin style={{ height: '35px', width: '35px' }} />
                    </div>
                  </div>
                  <p style={{ width: '180px' }}>Tatum Bracelet Layering Set</p>
                  <p>999</p>
                </div>
                <div>
                  <div style={{ position: 'relative',zIndex:'-1',  width: 'fit-content' }}>
                    <img alt="" src={enterMouceimg1 ? "https://cdn.shopify.com/s/files/1/0015/3849/0427/products/GS-229-200-G_4.jpg?v=1690277975&width=832&height=1109&crop=center" : "https://cdn.shopify.com/s/files/1/0015/3849/0427/products/GS-229-200-G_1.jpg?v=1690277975&width=832&height=1109&crop=center"} className="gorBagForgetimage" onMouseEnter={() => setEnterMouceimg1(true)} onMouseLeave={() => setEnterMouceimg1(false)} />
                    <div className="gorForgotIconeDiv">
                      <PiBagThin style={{ height: '35px', width: '35px' }} />
                    </div>
                  </div>
                  <p style={{ width: '180px' }}>Tatum Bracelet Layering sdfsdfsdfSet</p>
                  <p>999</p>
                </div>
              </div>
            </div>
            

          </div>

          <div className="gorYourBagBottom">
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', paddingBlock: '20px' }}>
              <p style={{ fontSize: '15px', fontWeight: 500 }}>Subtotal <br /><span style={{ fontWeight: 400, fontSize: '13px' }}>Shipping, gift cards and promo codes applied at checkout.</span></p>
              <p>$150</p>
            </div>
            <button className="gorbagChecoutBtn">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </Drawer>

      <div className="gorjanaHeader">
        <div className="gorjanaTopHeader">
          <PiMapPinLight style={{ height: "25px", width: "40px" }} />
          <a href="/pages/store-locator" style={{ fontSize: "12px" }}>
            Find a Store Near You
          </a>
        </div>
        <div className="gorajanaBottomHeaderMain">
          <div className="gorjanaImgMenuMain">
            <img
              alt=""
              src="https://www.gorjana.com/cdn/shop/t/1511/assets/logo-light.svg?v=36596364826355077531701378483&em-format=avif"
              width="172px"
              className="gorjanaHederImage"
              onClick={() => navigate("/")}
            />
            <div className="gorjanaHeaderSubMenuMain">
              <ul className="gorjanaHeaderMenu">
                <li
                  className="gorjana-Menu-item"
                  onClick={() => {
                    setRecoilBlurFlag(true)
                    setRecoilSideNavListItem('Jewelry')
                    setRecoilSideNavListFlag(true)
                  }}
                >
                  Jewelry
                </li>
                <li
                  className="gorjana-Menu-item"
                  onClick={() => {
                    setRecoilBlurFlag(true)
                    setRecoilSideNavListItem('Fine Jewelry')
                    setRecoilSideNavListFlag(true)
                  }}
                >
                  Fine Jewelry
                </li>
                <li
                  className="gorjana-Menu-item"
                  onClick={() => {
                    setRecoilBlurFlag(true)
                    setRecoilSideNavListItem('New Arrivals')
                    setRecoilSideNavListFlag(true)
                  }}
                >
                  New Arrivals
                </li>
                <li
                  className="gorjana-Menu-item"
                  onClick={() => {
                    setRecoilBlurFlag(true)
                    setRecoilSideNavListItem('Best Sellers')
                    setRecoilSideNavListFlag(true)
                  }}
                >
                  Best Sellers
                </li>
                <li
                  className="gorjana-Menu-item"
                  onClick={() => {
                    setRecoilBlurFlag(true)
                    setRecoilSideNavListItem('Gifts')
                    setRecoilSideNavListFlag(true)
                  }}
                >
                  Gifts
                </li>
                <li
                  className="gorjana-Menu-item"
                  onClick={() => {
                    setRecoilBlurFlag(true)
                    setRecoilSideNavListItem('Explore')
                    setRecoilSideNavListFlag(true)
                  }}
                >
                  Explore
                </li>
              </ul>
              <div className="gorjanaHeaderMenuIconeWeb">
                <IoSearch
                  style={{
                    height: "25px",
                    cursor: "pointer",
                    width: "25px",
                    marginInline: "15px",
                  }}

                  onClick={() => { setOpenSearchDrawer(true); setOpenYourBagDrawer(false); }}
                />
                <p
                  style={{
                    marginInline: "15px",
                    cursor: "pointer",
                    margin: "10px",
                  }}
                  onClick={() => navigate("/Signin")}
                >
                  Sign In
                </p>
                <HiOutlineShoppingBag
                  style={{
                    height: "25px",
                    cursor: "pointer",
                    width: "25px",
                    marginInline: "15px",
                  }}

                  onClick={() => { setOpenYourBagDrawer(true); setOpenSearchDrawer(false); }}
                />
              </div>
              <div className="gorjanaHeaderMenuIconeMobile">
                <IoSearch className="gorHeaderMobileIcoen" />
                <HiOutlineShoppingBag className="gorHeaderMobileIcoen" />
                <IoMenuOutline className="gorHeaderMobileIcoen" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
