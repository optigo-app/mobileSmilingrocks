import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Pages/Components/home";
import JewelryPage from "./Pages/Components/jewelry/JewelryPage";
import { useState } from "react";
import { Drawer } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useRecoilState, useRecoilValue } from "recoil";
import { BlurFlag, SideNavListFlag, SideNavListItem } from "./Pages/recoil";
import SignIn from "./Pages/Components/AuthSection/SignIn";
import ContactUs from "./Pages/Components/contactUs/ContactUs";
import Accessibility from "./Pages/Components/Accessibility/Accessibility";
import PrivacyPolicy from "./Pages/Components/PrivacyPolicy/PrivacyPolicy";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import phonesvg from "./Pages/assets/phone.svg";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Terms from "./Pages/Components/Terms/Terms";
import ShippingReturn from "./Pages/Components/shippingReturn/ShippingReturn";
import StoreLocatore from "./Pages/Components/storeLocatore/StoreLocatore";
import WholeSale from "./Pages/Components/wholesale/WholeSale";
import Carrers from "./Pages/Components/carrers/Carrers";
import AboutUs from "./Pages/Components/Explore/AboutUs/AboutUs";
import FAQ from "./Pages/Components/FAQ/FAQ";
import Charity from "./Pages/Components/Explore/Charity/Charity";
import { makeStyles } from "@mui/styles";
import "./gorjana.css";
import jw1 from './Pages/assets/navjw/jw-1.avif';
import jw2 from './Pages/assets/navjw/jw-2.avif';
import jw3 from './Pages/assets/navjw/jw-3.avif';
import jw4 from './Pages/assets/navjw/jw-4.avif';
import jw5 from './Pages/assets/navjw/jw-5.avif';
import jw6 from './Pages/assets/navjw/jw-6.avif';
import jw7 from './Pages/assets/navjw/jw-7.avif';
import MontholyHoroscope from "./Pages/Components/Explore/MonthoHoroscope/MontholyHoroscope";
import LayerLikeStyle from "./Pages/Components/Explore/LayerLikeStyle/LayerLikeStyle";
import CareGuide from "./Pages/Components/Explore/CareGuide/CareGuide";

const drawerWidth = 740;

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: drawerWidth,
    transition:'width 3s'
  },
}));
export default function GORJANA_App() {
  const [blurFlag, setBlurFlag] = useRecoilState(BlurFlag);
  const [navItem, setNavItem] = useState("");
  const [subNavFlag, setSubNavFlag] = useRecoilState(SideNavListFlag);
  const [subNavShow,setSubNavShow] = useState(true)

  const SideNavListItemLabel = useRecoilValue(SideNavListItem);
  const naviagtion = useNavigate();

  const classes = useStyles();

  useEffect(()=>{
    setNavItem(SideNavListItemLabel)
  },[SideNavListItemLabel])

  let navItems = [
    { label: "Jewelry" },
    { label: "Fine Jewelry" },
    { label: "New Arrivals" },
    { label: "Best Sellers" },
    { label: "Gifts" },
    { label: "Explore" },
  ];

  let subNavData = () =>{

    let StoreData = [];
    switch (navItem) {
      case "Jewelry":
        StoreData.push({
          navLabel:[
            {label:'Necklaces'},
            {label:'Earrings'},
            {label:'Bracelets'},
            {label:'Rings'},
            {label:'Charms'},
            {label:'Accessories'},
          ],
          navImg:[
            {imgLink:jw1},
            {imgLink:jw2},
            {imgLink:jw3},
            {imgLink:jw4},
            {imgLink:jw5},
            {imgLink:jw6},
            {imgLink:jw7},
          ]
        })
        break;
      case "Fine Jewelry":
        StoreData.push({
          navLabel:[
            {label:'Necklaces'},
            {label:'Earrings'},
            {label:'Bracelets'},
            {label:'Rings'},
            {label:'Charms'},
          ],
          navImg:[
            {imgLink:jw1},
            {imgLink:jw2},
            {imgLink:jw3},
            {imgLink:jw4},
          ]
        })
        break;
      case "New Arrivals":
        StoreData.push({
          navLabel:[],
          navImg:[
            {imgLink:jw1},
            {imgLink:jw2},
            {imgLink:jw3},
            {imgLink:jw4},
            {imgLink:jw5},
            {imgLink:jw6},
          ]
        })
        break;
      case "Best Sellers":
        StoreData.push({
          navLabel:[],
          navImg:[
            {imgLink:jw1},
            {imgLink:jw2},
            {imgLink:jw3},
            {imgLink:jw4},
            {imgLink:jw5},
            {imgLink:jw6},
          ]
        })
        break;
      case "Gifts":
        StoreData.push({
          navLabel:[
            {label:'Personalized Gifts'},
            {label:'Top Gifts'},
            {label:'Top Fine Gifts'},
            {label:'Gifts Under $150'},
            {label:'Gift Sets'},
          ],
          navImg:[
            {imgLink:jw1},
            {imgLink:jw2},
            {imgLink:jw3},
            {imgLink:jw4},
          ]
        })
        break;
      case "Explore":
        StoreData.push({
          navLabel:[
            {label:'Our Story'},
            {label:'Charity'},
            {label:'Now Trending'},
            {label:'Layer Like a Stylist'},
            {label:'Styled By You'},
            {label:'Monthly Horoscope'},
            {label:"jessica's Layers"},
          ],
          navImg:[
            {imgLink:jw1},
            {imgLink:jw2},
          ]
        })
        break;
      default:
        StoreData.push({
          navLabel:[],
          navImg:[]
        })
        break;
    }

    return StoreData;
  }


  const CheckFlag = () => {
    if (blurFlag === true) {
      return subNavFlag;
    } else {
      return false;
    }
  };


  return (
    <div>
      <Drawer
        open={blurFlag}
        onClose={() => {
          setBlurFlag(false);
        }}
        elevation={0}
        sx={{
          "& .MuiBackdrop-root": { backgroundColor: "transparent" },
          zIndex: 111,
        }}
        classes={{
          paper: subNavShow && classes.drawerPaper,
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              width: "375px",
              height: "100%",
            }}
          >
            <div style={{ marginTop: "125px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    position: "sticky",
                    top: "111px",
                    width: "373px",
                    padding: "30px 0px 30px 24px",
                    backgroundColor: "white",
                  }}
                >
                  <CloseRoundedIcon
                    style={{ fontSize: "32px" }}
                    onClick={() => {
                      setBlurFlag(false);
                    }}
                  />
                </div>
                <div
                  style={{
                    padding: "0px 24px",
                    height: "440px",
                    overflowY: "hidden",
                    flex: 1,
                    marginBottom: "170px",
                  }}
                  className="navItems"
                >
                  {navItems.map((navi) => (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontFamily: "FreightDisp Pro Medium",
                        fontSize: "32px",
                        textTransform: "capitalize",
                      }}
                      onClick={() => {
                        setNavItem(navi.label);
                        setSubNavFlag((prev) => !prev);
                      }}
                    >
                      <span
                        style={{
                          padding: "12px 0px",
                          textDecoration:
                            navItem ===
                            (navi.label ? navi.label : SideNavListItemLabel)
                              ? "underline"
                              : "",
                          textUnderlineOffset:
                            navItem ===
                            (navi.label ? navi.label : SideNavListItemLabel)
                              ? "3px"
                              : "",
                          textDecorationThickness:
                            navItem ===
                            (navi.label ? navi.label : SideNavListItemLabel)
                              ? "1px"
                              : "",
                        }}
                        onClick={()=>console.log("navItem",navItem)}
                      >
                        {navi.label}
                      </span>
                      <span>
                        <KeyboardArrowRightRoundedIcon
                          onClick={()=> navItem !== navi.label ?setSubNavShow(true) :setSubNavShow(!subNavShow)}
                          style={{ fontSize: "32px" }}
                        />
                      </span>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "24px 32px",
                    gap: "20px",
                    width: "374px",
                    borderTop: "1px solid #e4e6ec",
                    position: "fixed",
                    bottom: 0,
                    backgroundColor: "white",
                  }}
                >
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      naviagtion("/Signin");
                      setBlurFlag(false);
                    }}
                  >
                    Sign in / Create Account
                  </span>
                  <span
                    style={{ display: "flex", cursor: "pointer", gap: "12px" }}
                    onClick={() => {
                      naviagtion("/ContactUs");
                      setBlurFlag(false);
                    }}
                  >
                    <div>
                      <img src={phonesvg} alt={""} style={{ width: "20px" }} />
                    </div>
                    Contact Us
                  </span>
                  <span
                    style={{ display: "flex", gap: "12px", cursor: "pointer" }}
                    onClick={() => {
                      naviagtion("/storeLocatore");
                      setBlurFlag(false);
                    }}
                  >
                    <div>
                      <LocationOnOutlinedIcon style={{ width: "20px" }} />
                    </div>
                    Find A Store
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="insideDivScroll"
            style={{
              width: "365px",
              marginTop: "120px",
              position: "fixed",
              left: "375px",
              display: subNavShow? "flex" : "none",
              flexDirection: "column",
              overflowY: "scroll",
              height: "100vh",
              borderLeft: "1px solid #e4e6ec",
              paddingBottom:'120px',
              transition:'width 2s'
            }}
          >
            <div
              style={{
                fontFamily: "FreightDisp Pro Medium",
                fontSize: "30px",
                padding: "24px 32px",
                position:'sticky',
                background:'white',
                top:'0px'
              }}
            >
              {navItem}
            </div>

            <div
              style={{
                fontFamily: "FreightDisp Pro Medium",
                display: "flex",
                flexDirection: "column",
                paddingLeft: "32px",
                fontSize: "19px",
                color: "#283045",
              }}
            >
             {subNavData()[0]?.navLabel.map((data,i)=>(
              <span className="navItemsLabel" key={i}>{data.label}</span>
             ))}
            </div>

            { !(navItem === "New Arrivals" ||  "Best Sellers") && <div style={{paddingLeft: "40px",fontSize: "14px",marginTop:'10px',textDecoration:'underline',textUnderlineOffset:'3px',cursor:'pointer'}}>
              Shop All
            </div>}

            <div className="spec_tags">
              {navItem==="New Arrivals" && "Shop New Arrivals"}
              {navItem==="Best Sellers" &&"Shop Best Sellers"}
            </div>

            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',paddingLeft: "40px",marginTop:'24px'}}>
            {subNavData()[0]?.navImg.map((data)=>(
              <div className="submenu_img_div">
                <img style={{width:'134px',objectFit:'cover'}} src={data.imgLink} alt={''}/>
                <p>Layering Sets</p>
              </div>
            ))}
              {/* <div className="submenu_img_div">
                <img style={{width:'134px',objectFit:'cover'}} src={jw2} alt={''}/>
                <p>Alphabet</p>
              </div>
              <div className="submenu_img_div">
                <img style={{width:'134px',objectFit:'cover'}} src={jw3} alt={''}/>
                <p>Zodiac</p>
              </div>
              <div className="submenu_img_div">
                <img style={{width:'134px',objectFit:'cover'}} src={jw4} alt={''}/>
                <p>Engravable</p>
              </div>
              <div className="submenu_img_div">
                <img style={{width:'134px',objectFit:'cover'}} src={jw5} alt={''}/>
                <p>Silver Styles</p>
              </div>
              <div className="submenu_img_div">
                <img style={{width:'134px',objectFit:'cover'}} src={jw6} alt={''}/>
                <p>Heart Styles</p>
              </div>
              <div className="submenu_img_div">
                <img style={{width:'134px',objectFit:'cover'}} src={jw7} alt={''}/>
                <p>Power Gemstones</p>
              </div> */}
            </div>
          </div>
        </div>
      </Drawer>
      {/* <div
        style={{
          width: "400px",
          height: "100%",
          backgroundColor: "white",
          zIndex: 111,
          position: "fixed",
          top: "0px",
          left: "375px",
          borderLeft: "1px solid #e4e6ec",
          transform: !CheckFlag() && "translate(-800px,0px)",
          opacity: !CheckFlag() ? 0 : 1,
          transition: "0.5s",
        }}
      >
        <div style={{ marginTop: '125px',zIndex:111,position:'fixed' }}>
          <h1 onClick={() => naviagtion('/aboutUs')}>About us</h1>
        </div>
      </div> */}

      {/* <Drawer
        open={blurFlag}
        onClose={() => {
          setBlurFlag(false);
        }}
        elevation={3}
        sx={{
          "& .MuiBackdrop-root": { backgroundColor: "transparent" },
          zIndex: 1,
        }}
      >
        <div style={{ width: "750px" }}>
          <div style={{ marginTop: "144px" }}>
            <span style={{ paddingLeft: "24px" }}>
              <CloseRoundedIcon
                style={{ fontSize: "32px" }}
                onClick={() => {
                  setBlurFlag(false);
                }}
              />
            </span>
          </div>
        </div>
      </Drawer> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<SignIn />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/shipping" element={<ShippingReturn />} />
        <Route path="/jewelry" element={<JewelryPage />} />
        <Route path="/storeLocatore" element={<StoreLocatore />} />
        <Route path="/WholeSale" element={<WholeSale />} />
        <Route path="/Carrers" element={<Carrers />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Charity" element={<Charity />} />
        <Route path="/horoscope" element={<MontholyHoroscope />} />
        <Route path="/layerLikeStyle" element={<LayerLikeStyle />} />
        <Route path="/careGuide" element={<CareGuide />} />
      </Routes>
    </div>
  );
}
