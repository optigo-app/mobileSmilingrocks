import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Header.css'
import cartImg from '../../../assets/other/cart.png'
import logo from '../../../assets/other/logo.png'
import searchlogo from '../../../assets/other/search.svg'
import ring from '../../../assets/other/ring.png'
// import ring1 from '../../../assets/svg.svg'
import Tooltip from '@mui/material/Tooltip';
import { SwipeableDrawer } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ContactsIcon from '@mui/icons-material/Contacts';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LockIcon from '@mui/icons-material/Lock';
import i1 from '../../../../lib/consts/Images'

import { CUSTERM_SERVICES, ETERNITY_BANDS, FINE_JEWELLERY_GIFTS, FOR_HIM, FREE_INTERNATIONAL_SHIPPING, LIFETIME_WARRANTY, LOGOUT_MESSAGE, MONEY_BACK_GUARANTEE } from "../../../../lib/consts/Strings";


export default function Header({ name }) {
  const navigation = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [showLogout, setShowLogout] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isOpenEngagementRing, setIsEngagementRing] = useState(false);
  const [isOpenFineJewellaryGift, setFineJewellaryGift] = useState(false);
  const [isOpenInr, setIsInr] = useState(false);

  const openDrawer = () => {
    setDrawerOpen(true);
  };
  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const togglEngagementRing = () => {
    setIsEngagementRing(!isOpenEngagementRing);
  };
  const toggleFineJewellaryGift = () => {
    setFineJewellaryGift(!isOpenFineJewellaryGift);
  };
  const toggleInr = () => {
    setIsInr(!isOpenInr);
  };

  let demoJSON = [
    { currency: "$ AUD", title: 'Australian Dollar' },
    { currency: "৳ BDT", title: 'Bangladeshi Taka' },
    { currency: "£ GBP", title: 'British Pound Sterling' },
    { currency: "C$ CAD", title: 'Canadian Dollar' },
    { currency: "€ EUR", title: 'Euro' },
    { currency: "FJ$ FJD", title: 'Fijian dollar' },
    { currency: "HK$ HKD", title: 'Hong Kong dollar' },
    { currency: "₹ INR", title: 'Indian Rupee' },
    { currency: "KSh KES", title: 'Kenyan shilling' },
    { currency: "RM MYR", title: 'Malaysian ringgit' },
    { currency: ".ރ MVR", title: 'Maldivian rufiyaa' },
    { currency: "Rs MUR", title: 'Mauritian rupee' },
    { currency: "₦ NGN", title: 'Naira' },
    { currency: "N$ NAD", title: 'Namibian dollar' },
    { currency: "रू NPR", title: 'Nepalese rupee' },
    { currency: "$ NZD", title: 'New Zealand Dollar' },
    { currency: "ر.ع OMR", title: 'Omani rial' },
    { currency: "Rs PKR", title: 'Pakistani rupee' },
    { currency: "₱ PHP", title: 'Philippine Peso' },
    { currency: "ر.ق QR", title: 'Qatari Riyal' },
    { currency: "SR SAR", title: 'Saudi Riyal' },
    { currency: "$ SGD", title: 'Singapore dollar' },
    { currency: "R ZAR", title: 'South African Rand' },
    { currency: "Rs LKR", title: 'Sri Lankan rupee' },
    { currency: "kr SEK", title: 'Swedish krona' },
    { currency: "Fr. CHF", title: 'Swiss Franc' },
    { currency: "฿ THB", title: 'Thai baht' },
    { currency: "AED AED", title: 'United Arab Emirates dirham' },
    { currency: "$ USD", title: 'United States Dollar' },
    { currency: "¥ JPY", title: 'Yen' },
    { currency: "ZK ZMK", title: 'Zambian Kwacha' },
  ]

  let hermenuJSON = [{
    menu1: {
      'title': 'SHOP RINGS BY SHAPE',
      'menus': [
        { label: 'Round cut Rings',imgclass:i1[0] },
        { label: 'Princess Cut Rings',imgclass:i1[1] },
        { label: 'Cushion Cut Rings',imgclass:i1[2]},
        { label: 'Oval Cut Rings',imgclass:i1[3]},
        { label: 'Heart Cut Rings',imgclass:i1[4]},
        { label: 'pear Cut Rings',imgclass:i1[5]},
        { label: 'Emerald Cut Rings',imgclass:i1[6]},
      ]
    },
    menu2: {
      'title': 'DESIGN YOUR OWN ENGAGEMENT RING',
      'menus': [
        { label: 'Submit Your Own' },
      ]
    },
    menu3: {
      'title': 'ENGAGEMENT RINGS BY STYLES ',
      'menus': [
        { label: 'Plain Solitaire' },
        { label: 'Vintage' },
        { label: 'Side-Stone' },
        { label: 'Three Stone' },
        { label: 'Cluster' },
        { label: 'Halo' },
        { label: 'Pave' },
      ]
    },
    menu4: {
      'title': 'SHOPE BY METAL',
      'menus': [
        { label: 'White Gold' },
        { label: 'Rose Gold' },

      ]
    },
  }]


  const ForHerMenu = useCallback(
    (data, num) => (
      <>
        <font
          style={{ color: "black", fontSize: "14px" }}
          className="title-container"
        >
          {data[`menu${num}`].title}
        </font>
        <div className={`label-container ${num === 3 ? 'menu-3' : ''}`}>
          {data[`menu${num}`].menus.map((menudata) => (
            <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
              {num===1 && <span>{menudata.imgclass}</span>}
              {num===2 && <FavoriteBorderIcon/>}{num===2 && '+'}{num===2 && <FavoriteBorderIcon/>}
              <font className="label-font">{menudata.label}</font>
            </div>
          ))}
        </div>
      </>
    ),
    []
  );

  const handleLogOut = () => {
    setIsLogin(false)
    setShowLogout(true)
  }
  return (
    <>
      {/* top-header */}
      <header
        className="top_header"
        role="navigation"
        style={{ margin: 0, padding: 0 }}
      >
        <div
          className="navbar__login container-fluid"
          style={{ backgroundColor: "black", color: "white" }}
        >
          <div className="header-container" style={{ margin: 0 }}>
            <div className="header-container_level1">
              <span
                className="text-lef"
                style={{
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <font size="2">{CUSTERM_SERVICES}</font>
              </span>
              <span
                className="text-lef"
                style={{
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <font size="2"> {LIFETIME_WARRANTY}</font>
              </span>
              <span
                className="text-lef"
                style={{
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <font size="2">{FREE_INTERNATIONAL_SHIPPING}</font>
              </span>
              <span
                className="text-lef"
                style={{
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <font size="2">{MONEY_BACK_GUARANTEE}</font>
              </span>
            </div>
            <div className="currency-dropDown">
              <div className="currency-drop-btn">
                <span>INR</span>
                <span className="currency-dropdown-arrow">&#11206;</span>
                <div className="currency-option">
                  <table className="drop-table">
                    {demoJSON.map((data) => (
                      <Tooltip title={data.title} arrow placement="top" >
                        <tr>
                          <td className="ornazCurrencytd">{data.currency}</td>
                        </tr>
                      </Tooltip>

                    ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* middel header */}
      <header className="middel-header-container">
        <div className="middel-header">
          <div className="middel-header-level-1">
            <p style={{ marginTop: "10px" }}>
              18002120299 | Call or Text 24/7{" "}
            </p>
          </div>
          <div className="middel-header-level-2">
            <span onClick={() => navigation("/RegisterPage")}>register</span>
            <span onClick={() => navigation("/LoginPage")}>login</span>
            <span
              style={{ display: "flex", cursor: "pointer" }}
              onClick={() => navigation("/CartDetail")}
            >
              <img
                src={cartImg}
                alt="..."
                style={{ height: "20px", width: "20px" }}
              />
              <span style={{ fontSize: "18px" }}>{"(1)"}</span>
            </span>
          </div>
        </div>
      </header>

      {/* bottom header */}
      <nav className="nav-bottom-header">
        <div className="nav-container">
          <ul className="nav-ul">
            <li className="nav-li">
              <img
                src={logo}
                alt={"..."}
                style={{ width: "12vw", cursor: "pointer" }}
                onClick={() => navigation("/")}
              />
            </li>
            <li className="nav-li-for-her">
              <span className="for-her">FOR HER</span>
              <span className="for-her-dropdown">
                <div className="for-her-container">
                  <div className="forher-inner-container">
                    {hermenuJSON.map((data) => (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                        <span className="drop-container">
                          {ForHerMenu(data, 1)}
                        </span>
                        <span className="drop-container">
                          {ForHerMenu(data, 2)}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="vertical-forher-line"></div>
                  <div className="forher-inner-container support" style={{ paddingLeft: '26px' }}>
                    {hermenuJSON.map((data) => (
                      <>
                        <span className="drop-container">
                          {ForHerMenu(data, 3)}
                        </span>
                        <span className="drop-container" style={{ marginTop: '20px' }}>
                          {ForHerMenu(data, 4)}
                        </span>
                      </>
                    ))}
                  </div>
                  <div className="vertical-forher-line" style={{}}></div>
                  <div className="forher-inner-container" >
                    <img src={ring} style={{ width: '198px', height: '200px' }} />
                  </div>
                </div>
              </span>
            </li>
            <li className="nav-li" style={{ cursor: 'pointer' }} onClick={() => navigation('/jewelleryPage')}>{FOR_HIM}</li>
            <li className="nav-li" style={{ cursor: 'pointer' }} onClick={() => navigation('/jewelleryPage')}>{ETERNITY_BANDS}</li>
            <li className="nav-li" style={{ cursor: 'pointer' }} onClick={() => navigation('/jewelleryPage')}>{FINE_JEWELLERY_GIFTS}</li>
            <li
              className="nav-li"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <input
                type="text"
                className="search-input"
                placeholder="Search.."
              />
              <button className="search-button">
                <img src={searchlogo} alt={"..."} style={{ height: "25px" }} />
              </button>
            </li>
          </ul>
        </div>
      </nav>
      {showLogout && <div className="alert alert-success">
        <button type="button" className="close" data-dismiss="alert" aria-hidden="true" onClick={() => setShowLogout(false)}>×</button>
        {LOGOUT_MESSAGE}
      </div>}

      <div style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: '100'
      }} className="mobileHeader">
        {/* <button onClick={openDrawer}>Open Drawer</button> */}
        <div style={{ display: 'flex', margin: '5px', alignItems: 'center' }}>
          <MenuIcon
            style={{ fontSize: '40px' }}
            onClick={openDrawer}
          />
          {name ?
            <p style={{ fontSize: '20px', fontWeight: 500 }}>{name}</p> :
            <img alt="ORNAZ" src="https://d1idqhwk00c3jv.cloudfront.net/v55/assets/icons/new_logo.png" style={{ width: '120px', height: '30px' }} onClick={() => navigation('/')} />
          }
        </div>

        <div style={{ display: 'flex', alignItems: 'center', margin: '10px' }}>
          <div style={{
            width: '40px',
          }} onClick={() => navigation('/MobileSearch')}>
            <SearchIcon style={{ fontSize: '30px' }} />
          </div>
          <div style={{
            width: '40px'
          }} onClick={() => navigation('/WatchList')}>
            <FavoriteBorderIcon style={{ fontSize: '26px' }} />
          </div>
          <div style={{
            width: '40px'
          }} onClick={() => navigation('/MobileCart')}>
            <LockIcon style={{ fontSize: '25px' }} />
          </div>
        </div>

      </div>

      <div>
        <SwipeableDrawer
          anchor="left"
          open={isDrawerOpen}
          onClose={closeDrawer}
          onOpen={() => { }}
        >
          <div className="drawer-content">
            {/* <button onClick={closeDrawer}>Close Drawer</button> */}
            <div style={{ width: '250px', display: 'flex', justifyContent: 'space-between', margin: '15px', alignItems: 'center' }}>
              <img alt="ORNAZ" src="https://d1idqhwk00c3jv.cloudfront.net/v55/assets/icons/new_logo.png" style={{ width: '120px', height: '30px' }}
                onClick={() => { navigation('/'); closeDrawer(); }}
              />
              <div onClick={() => navigation('/Profile')}>
                <ContactsIcon />
              </div>
            </div>

            <div className='headerDrawerTitle' onClick={togglEngagementRing}>
              <p>Engagement Ring</p>
              <p style={{ marginRight: '20px' }}>{isOpenEngagementRing ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</p>
            </div>
            <ul className={`my-HeaderDrawer ${isOpenEngagementRing ? 'open' : ''}`} style={{ borderBottom: !isOpenEngagementRing ? '0.1px solid lightgray' : ' ' }}>
              <li onClick={() => { navigation('/jewelleryPage'); closeDrawer(); }}>
                <p className='sub-listt-title'>For Her</p>
              </li>
              <li onClick={() => { navigation('/jewelleryPage'); closeDrawer(); }}>
                <p className='sub-listt-title'>For Him</p>
              </li>
              <li onClick={() => { navigation('/jewelleryPage'); closeDrawer(); }}>
                <p className='sub-listt-title'>View All</p>
              </li>
            </ul>

            <div className='headerDrawerTitle' onClick={toggleFineJewellaryGift}>
              <p>Fine Jewellery Gifts</p>
              <p style={{ marginRight: '20px' }}>{isOpenFineJewellaryGift ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</p>
            </div>
            <ul className={`my-HeaderDrawer ${isOpenFineJewellaryGift ? 'open' : ''}`} style={{ borderBottom: !isOpenFineJewellaryGift ? '0.1px solid lightgray' : ' ' }}>
              <li onClick={() => { navigation('/jewelleryPage'); closeDrawer(); }}>
                <p className='sub-listt-title'>Earrings</p>
              </li>
              <li onClick={() => { navigation('/jewelleryPage'); closeDrawer(); }}>
                <p className='sub-listt-title'>Necklaces</p>
              </li>
              <li onClick={() => { navigation('/jewelleryPage'); closeDrawer(); }}>
                <p className='sub-listt-title'>Stackble Bands</p>
              </li>
            </ul>

            <div className='headerDrawerTitle' style={{ borderBottom: '1px solid lightgray' }} onClick={() => { navigation('/jewelleryPage'); closeDrawer(); }}>
              <p>Enternity Bands</p>
            </div>

            <div className='headerDrawerTitle' style={{ borderBottom: '1px solid lightgray' }}>
              <p>Try At Home For Free</p>
            </div>

            <div className='headerDrawerTitle' onClick={toggleInr}>
              <p>INR</p>
              <p style={{ marginRight: '20px' }}>{isOpenInr ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</p>
            </div>
            <ul className={`my-HeaderDrawer ${isOpenInr ? 'open' : ''}`} style={{ borderBottom: !isOpenInr ? '0.1px solid lightgray' : ' ', overflow: 'scroll' }}>
              <div style={{ display: 'flex', width: '240px', flexWrap: 'wrap' }}>
                <div className="INRitems">
                  <p className="INRname">AUD</p>
                </div>
                <div className="INRitems">
                  <p className="INRname">AUD</p>
                </div>
                <div className="INRitems">
                  <p className="INRname">AUD</p>
                </div>
                <div className="INRitems">
                  <p className="INRname">AUD</p>
                </div>
                <div className="INRitems">
                  <p className="INRname">AUD</p>
                </div>
              </div>
            </ul>

            <div className='headerDrawerTitle' style={{ borderBottom: '1px solid lightgray' }}>
              <p>Blog</p>
            </div>

            <div className='headerDrawerTitle' style={{ borderBottom: '1px solid lightgray' }}>
              <p>Your Orders</p>
            </div>

            <div className='headerDrawerTitle' style={{ borderBottom: '1px solid lightgray' }} onClick={() => { navigation('/Contact'); closeDrawer(); }}>
              <p>Contact Us</p>
            </div>

            <div style={{ display: 'flex', marginTop: '50px' }}>
              <button style={{
                border: '1px solid #45d4d5',
                height: '50px',
                backgroundColor: 'white',
                fontSize: '22px',
                fontWeight: 500,
                marginInline: '20px'

              }} onClick={() => navigation('/LoginPage')}>SIGN IN</button>
              <button style={{
                border: '0px',
                height: '50px',
                backgroundColor: '#45d4d5',
                fontSize: '22px',
                fontWeight: 500
              }} onClick={() => navigation('/RegisterPage')}>SIGN UP</button>
            </div>

          </div>
        </SwipeableDrawer>
      </div>
    </>
  );
}
