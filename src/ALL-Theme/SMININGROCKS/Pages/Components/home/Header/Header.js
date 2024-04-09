import React, { useCallback, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './Header.css'
import Tooltip from '@mui/material/Tooltip';
import { Badge, Dialog, Divider, Drawer, SwipeableDrawer, TextField } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { PiStarThin } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { ABOUT_US, ACCOUNT, BLOG, CELEBRITY, CUSTERM_SERVICES, ETERNITY_BANDS, FINE_JEWELLERY_GIFTS, FOR_HIM, FREE_INTERNATIONAL_SHIPPING, IMPACT, LAB_GROWN, LIFETIME_WARRANTY, LOGIN, LOGOUT_MESSAGE, LOOK_BOOK, MONEY_BACK_GUARANTEE, PRESS, SHOP } from "../../../../lib/consts/Strings";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiStarFourThin } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { CartListCounts, HeaderData, HeaderData2, WishListCounts, loginState, newMenuData, openSignInModal, searchData } from "../../../../../../Recoil/atom";
import { CommonAPI } from "../../../../Utils/API/CommonAPI";
import Cart from "./Cart";
import titleImg from "../../../assets/title/sonasons.png"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import menu1Img from '../../../assets/45.jpg'
import menu2Img from '../../../assets/456.jpg'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { FaShoppingCart } from "react-icons/fa";
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
  const navigation = useNavigate();
  const [inputValue, setInputValue] = useState(1);
  const [serachsShowOverlay, setSerachShowOverlay] = useState(false);
  const [drawerShowOverlay, setDrawerShowOverlay] = useState(false);
  const [searchText, setSearchText] = useState(null)
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCollection, setIsOpenCollection] = useState(false);
  const [isOpenBouti, setIsOpenBouti] = useState(false);
  const [finalData, setFinalData] = useState([]);
  const [menu1Index, setMenu1Index] = useState(null);
  const [menu2Index, setMenu2Index] = useState(null);
  const [menu1Data, setMenu1Data] = useState()
  const [menu2Data, setMenu2Data] = useState()

  const getCartListCount = useRecoilValue(CartListCounts)
  const getWishListCount = useRecoilValue(WishListCounts)
  const setHeaderData = useSetRecoilState(HeaderData)
  const setHeaderData2 = useSetRecoilState(HeaderData2)

  const [menul0data, setMenul0data] = useState([])
  const [menul1data, setMenul1data] = useState([])
  const [menul2data, setMenul2data] = useState([])
  const location = useLocation();

  // const [newMenu1Data,setNewMenu1Data] = useState([])
  // const [newMenu2Data,setNewMenu2Data] = useState([])
  // const [newMenu3Data,setNewMenu3Data] = useState([])

  const setNewMenuData = useSetRecoilState(newMenuData)
  // console.log("menu1Index",finalData?.map((fd)=>fd?.param1)[menu1Index])

  const separateData = (menuData) => {
    // let tempMenu0data = [];
    // let tempMenu1data = [];
    // let tempMenu2data = [];

    // menuData?.forEach(item => {
    //     // Extract data for menu0data
    //     let menu0 = {
    //         menuname: item.menuname,
    //         param0dataname: item.param0dataname,
    //         param0dataid: item.param0dataid,
    //         param0name: item.param0name,
    //         param0id: item.param0id
    //     };
    //     tempMenu0data.push(menu0);

    //     // Extract data for menu1data
    //     let menu1 = {
    //         param1id: item.param1id,
    //         param1name: item.param1name,
    //         param1dataid: item.param1dataid,
    //         param1dataname: item.param1dataname
    //     };
    //     tempMenu1data.push(menu1);

    //     // Extract data for menu2data
    //     let menu2 = {
    //         param2id: item.param2id,
    //         param2name: item.param2name,
    //         param2dataid: item.param2dataid,
    //         param2dataname: item.param2dataname
    //     };
    //     tempMenu2data.push(menu2);
    // });

    let tempMenu0data = Array.from(new Set(menuData?.map(item => JSON.stringify({
      menuname: item.menuname,
      param0dataname: item.param0dataname,
      param0dataid: item.param0dataid,
      param0name: item.param0name,
      param0id: item.param0id
    }))))?.map(item => JSON.parse(item));

    let tempMenu1data = Array.from(new Set(menuData?.map(item => JSON.stringify({
      param1id: item.param1id,
      param1name: item.param1name,
      param1dataid: item.param1dataid,
      param1dataname: item.param1dataname
    }))))?.map(item => JSON.parse(item));

    let tempMenu2data = Array.from(new Set(menuData?.map(item => JSON.stringify({
      param2id: item.param2id,
      param2name: item.param2name,
      param2dataid: item.param2dataid,
      param2dataname: item.param2dataname
    }))))?.map(item => JSON.parse(item));

    // Update states
    setMenul0data(tempMenu0data)
    setMenul1data(tempMenu1data)
    setMenul2data(tempMenu2data)
  };

  const handelNewMenuData = (param) => {
    setNewMenuData(param)
    setIsDropdownOpen(false)
    setDrawerShowOverlay(false)
    navigation("/productpage")
  }


  useEffect(() => {
    separateData();
  }, []);


  const handelmenu1 = (param) => {
    localStorage.setItem('productDataShow', 'true');
    setIsDropdownOpen(false)
    navigation("/productpage")
    setHeaderData(param)
  }

  const handelMenu0 = () => {
    setIsDropdownOpen(false)
    navigation("/productpage")
  }


  const handelmenu2 = (param) => {
    setIsDropdownOpen(false)
    navigation("/productpage")
    setHeaderData2(param)
  }

  // const transformData = (data) => {

  //   const transformedData = data?.reduce((acc, item) => {
  //     const existingItem = acc.find(i => i.lavelid === item.levelid);
  //     if (existingItem) {
  //       const existingParam1 = existingItem.param1.find(p => p.param1dataid === item.param1dataid);
  //       if (existingParam1) {
  //         if (item.param2id) {
  //           const existingParam2 = existingParam1.param2.find(p => p.param2dataid === item.param2dataid);
  //           if (existingParam2) {
  //             // If param2dataid already exists, do nothing
  //           } else {
  //             // Add new param2
  //             existingParam1.param2.push({
  //               param2id: item.param2id,
  //               param2name: item.param2name,
  //               param2dataid: item.param2dataid,
  //               param2dataname: item.param2dataname
  //             })
  //           }
  //         }
  //       } else {
  //         const newItem = {
  //           param1id: item.param1id,
  //           param1name: item.param1name,
  //           param1dataid: item.param1dataid,
  //           param1dataname: item.param1dataname,
  //           param2: []
  //         };
  //         if (item.param2id) {
  //           newItem.param2.push({
  //             param2id: item.param2id,
  //             param2name: item.param2name,
  //             param2dataid: item.param2dataid,
  //             param2dataname: item.param2dataname
  //           });
  //         }
  //         existingItem.param1.push(newItem);
  //       }
  //     } else {
  //       const newItem = {
  //         lavelid: item.levelid,
  //         menuname: item.menuname,
  //         link: item.link || '',
  //         param0id: item.param0id || '',
  //         param0name: item.param0name || '',
  //         param0dataid: item.param0dataid || '',
  //         param0dataname: item.param0dataname || '',
  //         param1: []
  //       };
  //       if (item.param1id) {
  //         const newParam1 = {
  //           param1id: item.param1id,
  //           param1name: item.param1name,
  //           param1dataid: item.param1dataid,
  //           param1dataname: item.param1dataname,
  //           param2: []
  //         };
  //         if (item.param2id) {
  //           newParam1.param2.push({
  //             param2id: item.param2id,
  //             param2name: item.param2name,
  //             param2dataid: item.param2dataid,
  //             param2dataname: item.param2dataname
  //           });
  //         }
  //         newItem.param1.push(newParam1);
  //       }
  //       acc.push(newItem);
  //     }
  //     return acc;
  //   }, []);

  //   setFinalData(transformedData);
  // };

  const transformData = (data) => {
    const transformedData = data?.reduce((acc, item) => {
      const existingItem = acc.find(i => i.levelid === item.levelid);
      if (existingItem) {
        const existingParam1 = existingItem.param1.find(p => p.param1dataid === item.param1dataid);
        if (existingParam1) {
          if (item.param2id) {
            const existingParam2 = existingParam1.param2.find(p => p.param2dataid === item.param2dataid);
            if (!existingParam2) {
              existingParam1.param2.push({
                param2id: item.param2id,
                param2name: item.param2name,
                param2dataid: item.param2dataid,
                param2dataname: item.param2dataname
              });
            }
          }
        } else {
          const newParam1 = {
            param1id: item.param1id,
            param1name: item.param1name,
            param1dataid: item.param1dataid,
            param1dataname: item.param1dataname,
            menuname: item.menuname, // Include menuname here
            param2: []
          };
          if (item.param2id) {
            newParam1.param2.push({
              param2id: item.param2id,
              param2name: item.param2name,
              param2dataid: item.param2dataid,
              param2dataname: item.param2dataname
            });
          }
          existingItem.param1.push(newParam1);
        }
      } else {
        const newItem = {
          levelid: item.levelid,
          menuname: item.menuname,
          param0dataname: item.param0dataname,
          param0dataid: item.param0dataid,
          param0name: item.param0name,
          param0id: item.param0id,
          param1: []
        };
        if (item.param1id) {
          const newParam1 = {
            param1id: item.param1id,
            param1name: item.param1name,
            param1dataid: item.param1dataid,
            param1dataname: item.param1dataname,
            menuname: item.menuname, // Include menuname here
            param2: []
          };
          if (item.param2id) {
            newParam1.param2.push({
              param2id: item.param2id,
              param2name: item.param2name,
              param2dataid: item.param2dataid,
              param2dataname: item.param2dataname
            });
          }
          newItem.param1.push(newParam1);
        }
        acc.push(newItem);
      }
      return acc;
    }, []);

    setFinalData(transformedData);
  };

  const [islogin, setislogin] = useRecoilState(loginState);
  const [isB2bFlag, setIsB2BFlaf] = useState('');
  const fetchData = () => {
    const value = localStorage.getItem('LoginUser');
    const val = (value === 'true' ? 'true' : 'false')
    setislogin(val);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const storeInit = JSON.parse(localStorage.getItem('storeInit')) ?? "";
    const { IsB2BWebsite } = storeInit;
    setIsB2BFlaf(IsB2BWebsite);
  }, [])

  const getMenuApi = async () => {

    const storeInit = JSON.parse(localStorage.getItem("storeInit")) ?? ""
    const Customer_id = JSON.parse(localStorage.getItem("loginUserDetail")) ?? ""
    // if (storeInit && Customer_id) {
    let pData = JSON.stringify({ "FrontEnd_RegNo": `${storeInit?.FrontEnd_RegNo}`, "Customerid": `${Customer_id?.id ?? 0}` })

    let pEnc = btoa(pData)

    const body = {
      con: "{\"id\":\"\",\"mode\":\"GETMENU\",\"appuserid\":\"nimesh@ymail.in\"}",
      f: "onload (GETMENU)",
      p: pEnc
    }

    await CommonAPI(body).then((res) => {
      // console.log("getmenuData",res?.Data?.rd)
      transformData(res?.Data?.rd)
      separateData(res?.Data?.rd)
    })
    // }
  }

  useEffect(() => {
    if (islogin === 'true') {
      getMenuApi()
      const storeInit = JSON.parse(localStorage.getItem('storeInit')) ?? "";
      const { IsB2BWebsite } = storeInit;
      setIsB2BFlaf(IsB2BWebsite);
    }
  }, [islogin])

  const toggleList = () => {
    setIsOpen(!isOpen);
  };
  const toggleListCollection = () => {
    setIsOpenCollection(!isOpenCollection);
  };
  const toggleListBouti = () => {
    setIsOpenBouti(!isOpenBouti);
  };


  const toggleOverlay = () => {
    setSearchText('');
    setSerachShowOverlay(!serachsShowOverlay);
  };

  const toggleDrawerOverlay = () => {
    setDrawerShowOverlay(!drawerShowOverlay);
  };


  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [isHeaderFixedDropShow, setIsHeaderFixedDropShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsHeaderFixed(scrollPosition > 100);
      setIsHeaderFixedDropShow(scrollPosition > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownOpen = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
    setMenu1Index(null)
    setMenu2Index(null)
  };

  const [openCart, setOpenCart] = useState(false);
  const toggleCartDrawer = (isOpen) => (event) => {
    if (isB2bFlag === 1) {
      navigation('/CartPage');
    } else {
      if (
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }
      setOpenCart(isOpen);
    }
  };



  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      toggleOverlay();
      handleEnterPress();
    }
  };

  const [searchedProducts, setSearchedProducts] = useState([]);
  const [gSearch, setGSearch] = useRecoilState(searchData)

  const handleEnterPress = () => {
    const savedProductList = localStorage.getItem('allproductlist');
    if (savedProductList) {
      const productList = JSON.parse(savedProductList);
      const searchValue = searchText;
      const filteredProducts = productList.filter(product => product.designno === searchValue || product.id === parseInt(searchValue) || product.ProducttypeName === parseInt(searchValue) || product.MetalColorName === parseInt(searchValue) || product.MetalTypeName === parseInt(searchValue) || product.OcassionName === parseInt(searchValue) || product.GenderName === parseInt(searchValue) || product.BrandName === parseInt(searchValue) || product.CategoryName === parseInt(searchValue) || product.CollectionName === parseInt(searchValue) || product.autocode === parseInt(searchValue));
      setSearchedProducts(filteredProducts);
    }
    navigation('/productpage');
  };

  useEffect(() => {
    setGSearch(searchedProducts);
  }, [searchedProducts])


  function capitalizeText(text) {
    return text?.toLowerCase()?.split(' ').map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  }

  const handleBack = () => {
    navigation(-1);
  }


  return (
    <>
      {serachsShowOverlay && (
        <>
          <div className="smlingSearchoverlay">
            <div className="smlingTopSerachOver">
              <IoSearchOutline style={{ height: "15px", width: "15px", marginRight: "10px" }} />
              <input
                type="text"
                placeholder="Enter Design Number End Click Enter"
                value={searchText}
                autoFocus
                onChange={(e) => setSearchText(e.target.value)}
                className="serachinputBoxOverly"
                onKeyPress={handleKeyPress}
              />
              <IoClose
                style={{
                  height: "30px",
                  width: "30px",
                  color: "#7d7f85",
                  cursor: "pointer",
                }}
                onClick={toggleOverlay}
              />
            </div>
          </div>

          <div className={`smlingSearchoverlayNew ${isHeaderFixedDropShow ? "fixed" : ""}`}>
            <div className="smlingTopSerachOver-Fixed">
              <IoSearchOutline style={{ height: "15px", width: "15px", marginRight: "10px" }} />
              <input
                type="text"
                placeholder="Enter Design Number End Click Enter"
                value={searchText}
                autoFocus
                onChange={(e) => setSearchText(e.target.value)}
                className="serachinputBoxOverly"
                onKeyPress={handleKeyPress}
              />
              <IoClose
                style={{
                  height: "30px",
                  width: "30px",
                  color: "#7d7f85",
                  cursor: "pointer",
                }}
                onClick={toggleOverlay}
              />
            </div>
          </div>
        </>
      )}

      {drawerShowOverlay && (
        <>
          <div className="smlingDraweOverlay">
            <div
              style={{
                display: "flex",
                margin: "20px",
              }}
            >
              <div
                style={{
                  width: "20%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <IoClose
                  style={{
                    height: "30px",
                    width: "30px",
                    color: "black",
                    cursor: "pointer",
                  }}
                  onClick={toggleDrawerOverlay}
                />
              </div>
              <div
                style={{
                  width: "60%",
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <a href="/">
                  <img src={titleImg} className="MainlogogMobileImage" />
                </a>
              </div>
              {islogin === 'true' && (<div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "20%",
                  justifyContent: "flex-end",
                }}
              >
                <li onClick={toggleOverlay} style={{ listStyle: 'none', width: '40px', textAlign: 'center' }}>
                  <IoSearchOutline
                    style={{
                      height: "20px", cursor: "pointer", width: "20px",
                      color: "white",
                      marginRight: '9px'
                    }}
                    className="mobileViewSmilingTop2Icone"
                  />
                </li>

                <Badge
                  badgeContent={getWishListCount}
                  overlap={"rectangular"}
                  color="secondary"
                  style={{ marginInline: '5px' }}
                  className="smilingHeaderWhishlistIcon"
                >
                  <Tooltip title="WishList">
                    <li style={{ listStyle: 'none' }} onClick={() => navigation("/myWishList")}>
                      <PiStarThin
                        style={{
                          height: "25px",
                          cursor: "pointer",
                          width: "25px",
                          color: "white",
                        }}
                        className="mobileViewSmilingTop1Icone"
                      />
                    </li>
                  </Tooltip>
                </Badge>
              </div>)}
            </div>
            <div className="smlingDraweOverlayMain">
              <div className="drawrTitlediv">
                <p
                  style={{
                    margin: "0px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  className="drawrTitlem"
                  onClick={toggleList}
                >
                  FINE JEWELLERY<span>{isOpen ? "-" : "+"}</span>
                </p>
                <ul className={`my-list-fineJewe ${isOpen ? "open" : ""}`}>
                  <li style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
                    {
                      menul0data?.map((md) => (
                        <span style={{ fontSize: '12.5px', fontFamily: 'TT Commons, sans-serif', letterSpacing: 0.4, cursor: 'pointer' }}
                          onClick={() => handelNewMenuData({ "label": "param0", "data": md })}
                        >
                          {capitalizeText(md?.menuname)}
                        </span>
                      ))
                    }
                  </li>
                </ul>
              </div>
              <div className="drawrTitlediv" style={{ marginTop: "20px" }}>
                <p
                  style={{
                    margin: "0px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  className="drawrTitlem"

                  onClick={toggleListCollection}
                >
                  COLLECTION<span>{isOpenCollection ? "-" : "+"}</span>
                </p>

                <ul
                  className={`my-list-fineJewe ${isOpenCollection ? "open" : ""
                    }`}
                >
                  <li style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
                    {
                      menul1data?.map((md) => (
                        <span style={{ fontSize: '12.5px', fontFamily: 'TT Commons, sans-serif', letterSpacing: 0.4, cursor: 'pointer' }}
                          onClick={() => handelNewMenuData({ "label": "param1", "data": md })}
                        >
                          {capitalizeText(md?.param1dataname)}
                        </span>
                      ))
                    }
                  </li>
                </ul>
              </div>
              <div className="drawrTitlediv" style={{ marginTop: "20px" }}>
                <p
                  style={{
                    margin: "0px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  className="drawrTitlem"
                  onClick={toggleListBouti}
                >
                  BOUTIQUE<span>{isOpenBouti ? "-" : "+"}</span>
                </p>

                <ul className={`my-list-fineJewe ${isOpenBouti ? "open" : ""}`}>
                  <li style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
                    {
                      menul2data?.map((md) => (
                        <span style={{ fontSize: '12.5px', fontFamily: 'TT Commons, sans-serif', letterSpacing: 0.4, cursor: 'pointer' }}
                          onClick={() => handelNewMenuData({ "label": "param2", "data": md })}
                        >
                          {capitalizeText(md?.param2dataname)}
                        </span>
                      ))
                    }
                  </li>
                </ul>
              </div>
              <div onClick={() => { toggleDrawerOverlay(); navigation("/impact"); }}>
                <p className="drawrTitle">IMPACT</p>
              </div>
              <div onClick={() => { toggleDrawerOverlay(); navigation("/aboutUs"); }}>
                <p className="drawrTitle">ABOUT US</p>
              </div>
              <div
                style={{
                  marginTop: "20px",
                }}
              >
                {islogin === 'true' && (
                  <div
                    style={{ cursor: "pointer", color: 'white' }}
                    onClick={() => { toggleDrawerOverlay(); navigation("/account"); }}
                  >
                    <p style={{ color: "white", margin: "0px", fontSize: '12px', fontWeight: 500 }}>{ACCOUNT}</p>
                  </div>
                )
                }

                {islogin === 'false' && (
                  <div
                    style={{ cursor: "pointer", color: 'white' }}
                    onClick={() => { toggleDrawerOverlay(); navigation("/LoginOption"); }}
                  >
                    <p style={{ color: "white", margin: "0px", fontSize: '12px', fontWeight: 500 }}>{LOGIN}</p>
                  </div>
                )
                }
                <p
                  style={{ color: "white", marginTop: "10px", fontSize: '13px', fontWeight: 500, letterSpacing: '1' }}
                  onClick={() => { toggleDrawerOverlay(); navigation("/myWishList"); }}
                >
                  Wishlist
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  borderBottom: "1px solid white",
                  alignItems: "end",
                }}
              >
                <input
                  type="text"
                  placeholder="Search"
                  style={{
                    width: "100%",
                    borderBottom: "1px solid white",
                    border: "none",
                    outline: "none",
                    backgroundColor: "rgba(192, 187, 177, 1.8)",
                    marginTop: "15px",
                    fontWeight: 500,
                    color: "white",
                  }}
                  className="mobileSideBarSearch"
                />
                <IoSearchOutline
                  style={{
                    height: "20px",
                    cursor: "pointer",
                    color: "white",
                    width: "20px",
                    marginInline: "5px",
                  }}
                />
              </div>
            </div>
          </div>
        </>
      )}

      <div className="sminingHeaderWeb ">
        <div className="Smining-Top-Header ">
          <div
            style={{
              width: "33.33%",
              display: "flex",
            }}
          >
            <ul className="nav-ul-shop">
              {islogin === "true" &&
                <li
                  className="nav-li-shop-main"
                  onMouseEnter={handleDropdownOpen}
                  onMouseLeave={handleDropdownClose}
                >
                  <span
                    className="nav-li-smining"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontWeight: 500,
                    }}
                  >
                    SHOP
                    <RiArrowDropDownLine
                      style={{ width: "20px", height: "20px" }}
                    />
                  </span>
                </li>}
              <li
                className="nav-li-smining"
                style={{ cursor: "pointer" }}
                onClick={() => navigation("/impact")}
              >
                {IMPACT}
              </li>
            </ul>
          </div>
          <div
            style={{
              width: "33.33%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href="/">
              <img src={titleImg} />
            </a>
          </div>
          <div
            style={{
              width: "33.33%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <ul className="nav-ul-shop">
              <li
                className="nav-li-smining"
                style={{ cursor: "pointer" }}
                onClick={() => navigation("/aboutUs")}
              >
                {ABOUT_US}
              </li>
              {/* <li
                className="nav-li-smining"
                style={{ cursor: "pointer" }}
                onClick={() => navigation("/labGrowDaimonds")}
              >
                {LAB_GROWN}
              </li> */}
              {islogin === "true" ? (
                <li
                  className="nav-li-smining"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigation("/account")}
                >
                  {ACCOUNT}
                </li>
              ) : (
                <li
                  className="nav-li-smining"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigation('/LoginOption')}
                >
                  {LOGIN}
                </li>
              )}
              {islogin === "true" &&
                <>
                  <Badge
                    badgeContent={getWishListCount}
                    overlap={"rectangular"}
                    color="secondary"
                  >
                    <Tooltip title="WishList">
                      <li onClick={() => navigation("/myWishList")}>
                        <PiStarThin
                          style={{
                            height: "20px",
                            cursor: "pointer",
                            width: "20px",
                          }}
                        />
                      </li>
                    </Tooltip>
                  </Badge>
                  <li onClick={toggleOverlay} style={{}}>
                    <IoSearchOutline
                      style={{ height: "20px", cursor: "pointer", width: "20px" }}
                    />
                  </li>
                  <Badge
                    badgeContent={getCartListCount}
                    overlap={"rectangular"}
                    color="secondary"
                  >
                    <Tooltip title="Cart">
                      <li
                        onClick={toggleCartDrawer(true)}
                        style={{
                          marginLeft: "-10px",
                          cursor: "pointer",
                          marginTop: "0px",
                        }}
                      >
                        {/* <PiStarFourThin
                          style={{
                            cursor: "pointer",
                            height: "35px",
                            width: "35px",
                          }}
                        /> */}
                        <ShoppingCartOutlinedIcon
                          sx={{ height: '30px', width: '30px' }}
                        />
                      </li>
                    </Tooltip>
                  </Badge></>}
            </ul>
          </div>
        </div>

        <div
          onMouseEnter={handleDropdownOpen}
          onMouseLeave={handleDropdownClose}
          className={`shop-dropdown ${isDropdownOpen ? "open" : ""} ${isHeaderFixed ? "fixed" : ""
            }`}
        >
          <div
            style={{
              display: "flex",
              padding: "50px",
              color: "#7d7f85",
              backgroundColor: "white",
              // flexDirection: "column",
              gap: "50px",
              justifyContent: 'space-between'
            }}
            onMouseEnter={handleDropdownOpen}
            onMouseLeave={handleDropdownClose}
          >
            <div style={{ display: 'flex', flexDirection: 'row', gap: '50px' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '13px', fontFamily: 'TT Commons, sans-serif', letterSpacing: 1, fontWeight: 600 }}>FINE JEWELRY</span>
                <span style={{ display: 'flex', flexDirection: 'column', marginTop: '12px', gap: '5px' }}>
                  {
                    menul0data?.map((md) => (
                      <span style={{ fontSize: '12.5px', fontFamily: 'TT Commons, sans-serif', letterSpacing: 0.4, cursor: 'pointer' }}
                        onClick={() => handelNewMenuData({ "label": "param0", "data": md })}
                      >
                        {capitalizeText(md?.menuname)}
                      </span>
                    ))
                  }
                </span>
              </div>
              <div>
                <div style={{ display: 'flex', flexDirection: 'column', borderLeft: '1px solid #e1e1e1', paddingLeft: '30px' }}>
                  <span style={{ fontSize: '13px', fontFamily: 'TT Commons, sans-serif', letterSpacing: 1, fontWeight: 600 }}>COLLECTIONS</span>
                  <span style={{ display: 'flex', flexDirection: 'column', marginTop: '12px', gap: '5px' }}>
                    {
                      menul1data?.map((md) => (
                        <span style={{ fontSize: '12.5px', fontFamily: 'TT Commons, sans-serif', letterSpacing: 0.4, cursor: 'pointer' }}
                          onClick={() => handelNewMenuData({ "label": "param1", "data": md })}
                        >
                          {capitalizeText(md?.param1dataname)}
                        </span>
                      ))
                    }
                  </span>
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', flexDirection: 'column', borderLeft: '1px solid #e1e1e1', paddingLeft: '30px', width: '130%' }}>
                  <span style={{ fontSize: '13px', fontFamily: 'TT Commons, sans-serif', letterSpacing: 1, fontWeight: 600 }}>BOUTIQUE</span>
                  <span style={{ display: 'flex', flexDirection: 'column', marginTop: '12px', gap: '5px', height: '350px', flexWrap: 'wrap' }}>
                    {
                      menul2data?.map((md) => (
                        <span style={{ fontSize: '12.5px', fontFamily: 'TT Commons, sans-serif', letterSpacing: 0.4, cursor: 'pointer' }}
                          onClick={() => handelNewMenuData({ "label": "param2", "data": md })}
                        >
                          {capitalizeText(md?.param2dataname)}
                        </span>
                      ))
                    }
                  </span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '15px' }}>
              <img src={menu2Img} alt="#" style={{ height: '250px', width: '300px', objectFit: 'cover' }} />
              <img src={menu1Img} alt="#" style={{ height: '250px', width: '300px', objectFit: 'cover' }} />
            </div>

          </div>
        </div>

        <div
          className={`Smining-Top-Header-fixed-main ${isHeaderFixed ? "fixed" : ""
            } ${serachsShowOverlay ? "searchoverly" : ""}`}
        >
          <div className="Smining-Top-Header-fixed">
            <div
              style={{
                width: "40.33%",
                display: "flex",
              }}
            >
              <ul className="nav-ul-fixed">
                {islogin === "true" &&
                  <>
                    <li
                      className="nav-li-shop-main"
                      onMouseEnter={handleDropdownOpen}
                      onMouseLeave={handleDropdownClose}
                    >
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          fontWeight: 500,
                        }}
                      >
                        SHOP
                        <RiArrowDropDownLine
                          style={{ width: "20px", height: "20px" }}
                        />
                      </span>
                    </li>
                    <li
                      className="nav-li-smining-fixed"
                      style={{ cursor: "pointer" }}
                      onClick={() => navigation("/impact")}
                    >
                      {IMPACT}
                    </li>
                  </>
                }
              </ul>
            </div>
            <div
              style={{
                width: "65%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a href="/">
                <img src={titleImg} />
              </a>
            </div>
            <div
              style={{
                width: "43.33%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <ul className="nav-ul-fixed">
                <li
                  className="nav-li-smining-fixed"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigation("/aboutUs")}
                >
                  {ABOUT_US}
                </li>
                {islogin === "true" ? (
                  <li
                    className="nav-li-smining-fixed"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigation("/account")}
                  >
                    {ACCOUNT}
                  </li>
                ) : (
                  <li
                    className="nav-li-smining-fixed"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigation('/LoginOption')}

                  >
                    {LOGIN}
                  </li>
                )}

                {islogin === "true" &&
                  <>
                    <Badge
                      badgeContent={getWishListCount}
                      overlap={"rectangular"}
                      color="secondary"
                    >
                      <Tooltip title="WishList">
                        <li onClick={() => navigation("/myWishList")}>
                          <PiStarThin
                            style={{
                              height: "20px",
                              cursor: "pointer",
                              width: "20px",
                            }}
                          />
                        </li>
                      </Tooltip>
                    </Badge>
                    <li onClick={toggleOverlay} style={{}}>
                      <IoSearchOutline
                        style={{ height: "20px", cursor: "pointer", width: "20px" }}
                      />
                    </li>
                    <Badge
                      badgeContent={getCartListCount}
                      overlap={"rectangular"}
                      color="secondary"
                    >
                      <Tooltip title="Cart">
                        <li
                          onClick={toggleCartDrawer(true)}
                          style={{
                            marginLeft: "-10px",
                            marginTop: "0px",
                            cursor: "pointer",
                          }}
                        >
                          <ShoppingCartOutlinedIcon
                            sx={{ height: '30px', width: '30px' }}
                          />
                        </li>
                      </Tooltip>
                    </Badge>
                  </>
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
      {location.pathname == '/productdetail' ?
        <div className="container">
          <div className="back-arrow" onClick={handleBack}><KeyboardBackspaceIcon /></div>
          <div className="search-wrapper">
            <input type="text" className="search-input" placeholder="Search..."  value={searchText} onChange={(e) => setSearchText(e.target.value)} onKeyPress={handleKeyPress} />
            <div className="search-icon"><SearchIcon sx={{color:'rgba(0, 0, 0, 0.3  )'}} /></div>
            {/* <a href="/">
              <img src={titleImg} className="MainlogogMobileImage" />
            </a> */}
          </div>
          <Badge badgeContent={getCartListCount}
            overlap={"rectangular"}
            color="secondary"
            style={{ marginInline: '6px' }}>
            <div className="cart-icon">
              <FaShoppingCart />
            </div>
          </Badge>
        </div>
        :
        location.pathname == '/productpage' ?
          <div className="container">
            <div className="back-arrow" onClick={handleBack}><KeyboardBackspaceIcon /></div>
            <div className="search-wrapper">
              <input type="text" className="search-input" placeholder="Search..." />
              <div className="search-icon"><SearchIcon /></div>
            </div>
            <div className="cart-icon"><FaShoppingCart />  </div>
          </div>
          :
          <div
            style={{
              top: 0,
              width: "100%",
              zIndex: "100",
            }}
            className="mobileHeaderSmining"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
              className="smilingMobileSubDiv"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
                className="mobileViewFirstDiv1"
              >
                <MenuIcon
                  style={{ fontSize: "35px", color: "white" }}
                  className="muIconeMobileHeader"
                  onClick={toggleDrawerOverlay}
                />
              </div>
              <div
                className="mobileViewFirstDiv2"
              >
                <a href="/">
                  <img src={titleImg} className="MainlogogMobileImage" />
                </a>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}

                className="mobileViewFirstDiv3"
              >

                {islogin === "true" &&
                  <div className="mobileHeaderFixedMobileLastDiv" style={{ display: 'flex' }}>

                    <li onClick={toggleOverlay} style={{ listStyle: 'none', width: '40px', textAlign: 'center', marginInline: '10px' }}>
                      <IoSearchOutline
                        style={{
                          height: "20px", cursor: "pointer", width: "20px",
                          color: "white",
                        }}
                        className="mobileViewSmilingTop2Icone"
                      />
                    </li>

                    <Badge
                      badgeContent={getWishListCount}
                      overlap={"rectangular"}
                      color="secondary"
                      style={{ marginInline: '6px' }}
                      className="smilingHeaderWhishlistIcon"
                    >
                      <Tooltip title="WishList">
                        <li style={{ listStyle: 'none' }} onClick={() => navigation("/myWishList")}>
                          <PiStarThin
                            style={{
                              height: "25px",
                              cursor: "pointer",
                              width: "25px",
                              color: "white",
                            }}
                            className="mobileViewSmilingTop1Icone"
                          />
                        </li>
                      </Tooltip>
                    </Badge>


                  </div>
                }
              </div>
            </div>
            {!drawerShowOverlay && (
              <div
                div
                className={`Smining-Top-Header-fixed-main ${isHeaderFixed ? "fixed" : ""
                  } ${serachsShowOverlay ? "searchoverly" : ""}`}
              >
                <div
                  className="Smining-Top-Header-fixed"
                  style={{ display: "flex" }}
                >
                  <div
                    style={{ display: "flex", margin: "5px", alignItems: "center" }}
                    className="mobileViewFirstDiv1"
                  >
                    {drawerShowOverlay ? (
                      <IoClose
                        style={{
                          height: "30px",
                          width: "30px",
                          color: "black",
                          cursor: "pointer",
                        }}
                        onClick={toggleDrawerOverlay}
                      />
                    ) : (
                      <MenuIcon
                        style={{ fontSize: "35px", color: "#7d7f85" }}
                        onClick={toggleDrawerOverlay}
                        className="muIconeMobileHeader"

                      />
                    )}
                  </div>
                  <div
                    className="mobileViewFirstDiv2"
                  >
                    <a href="/">
                      <img src={titleImg} className="MainlogogMobileImage" />
                    </a>
                  </div>
                  {islogin === "true" &&
                    <div className="mobileViewFirstDiv3" style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '15px' }}>
                      <Badge
                        badgeContent={getWishListCount}
                        overlap={"rectangular"}
                        color="secondary"
                        style={{ marginInline: '5px' }}
                        className="smilingHeaderWhishlistIcon"
                      >

                        <li onClick={toggleOverlay} style={{ listStyle: 'none', textAlign: 'center', marginInline: '10px' }}>
                          <IoSearchOutline
                            style={{
                              height: "20px", cursor: "pointer", width: "20px",
                              color: "#7d7f85",
                            }}
                            className="mobileViewSmilingTop2Icone"
                          />
                        </li>

                        <Tooltip title="WishList">
                          <li style={{ listStyle: 'none' }} onClick={() => navigation("/myWishList")}>
                            <PiStarThin
                              style={{
                                height: "25px",
                                cursor: "pointer",
                                width: "25px",
                                color: "#7d7f85",
                              }}
                              className="mobileViewSmilingTop1Icone"
                            />
                          </li>
                        </Tooltip>
                      </Badge>
                    </div>
                  }
                </div>
              </div>
            )}
          </div>
      }

      <Cart open={openCart} toggleCartDrawer={toggleCartDrawer} />
    </>
  );
}
