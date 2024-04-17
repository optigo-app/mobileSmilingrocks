import React, { useCallback, useEffect, useState } from "react";
import Footer from "../home/Footer/Footer";
import SmilingRock from "../home/smiling_Rock/SmilingRock";
import "./product.css";
import { json, useFetcher, useLocation, useNavigate } from "react-router-dom";
import prodListData from "../../jsonFile/Productlist_4_95oztttesi0o50vr.json";
// import prodListData from "../../jsonFile/testingFile/Productlist_4_95oztttesi0o50vr_Original.json";
import filterData from "../../jsonFile/M_4_95oztttesi0o50vr.json";
import PriceData from "../../jsonFile/Productlist_4_95oztttesi0o50vr_8.json";
// import PriceData from "../../jsonFile/testingFile/Productlist_4_95oztttesi0o50vr_8_Original.json";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Checkbox, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Radio, Slider } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { CommonAPI } from "../../../Utils/API/CommonAPI";
import axios from "axios";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { CartListCounts, FilterOpenOverlly, HeaderData, HeaderData2, WishListCounts, colorstoneQualityColorG, diamondQualityColorG, metalTypeG, newMenuData, priceData, productDataNew, searchData } from "../../../../../Recoil/atom";
import { GetCount } from "../../../Utils/API/GetCount";
import notFound from "../../assets/image-not-found.png";
import { IoCloseSharp } from "react-icons/io5";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { BsFilterLeft } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";



export const ProductPageTab = ({ toggleShoryBy }) => {
  const [activeTab, setActiveTab] = useState();

  const [openFilterOverlly, setOpenFilterOverlly] = useRecoilState(FilterOpenOverlly)
  const handleTabChange = (event) => {
    event.preventDefault();
    toggleShoryBy();
  };

  const handleFilterClick = (event) => {
    setOpenFilterOverlly('true')
  };

  return (
    <div style={styles.container}>
      <div style={styles.tab} onClick={handleFilterClick}>
        <FaFilter style={activeTab === "/" ? styles.activeIcon : styles.icon} />
        <span style={activeTab === "/" ? styles.activeText : styles.text}>Filter</span>
      </div>
      <div style={styles.tab} onClick={handleTabChange}>
        <BsFilterLeft style={activeTab === "/shortBy" ? styles.activeIcon : styles.icon} />
        <span style={activeTab === "/shortBy" ? styles.activeText : styles.text}>Short By</span>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: '#f0f0f0',
    height: '60px',
    borderTop: '1px solid #ccc',
  },
  tab: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    flex: 1,
    color: '#666',
  },
  icon: {
    marginBottom: '5px',
    fontSize: '20px',
  },
  activeIcon: {
    color: '#0000ff78',
    fontSize: '20px',
  },
  text: {
    fontSize: '12px',
  },
  activeText: {
    color: '#0000ff78',
    fontWeight: 'bold',
    fontSize: '14px'
  },
};






function valuetext(value) {
  return `${value}°C`;
}


const ProductList = ({ toggleDetailDrawer, isOpenDetail, toggleShoryBy, isOpenShoryBy }) => {

  const ProductData2 = [];
  const [openFilterOverlly, setOpenFilterOverlly] = useRecoilState(FilterOpenOverlly)
  const [ProductApiData, setProductApiData] = useState([])
  const [ProductApiData2, setProductApiData2] = useState([])
  const [drawerShowOverlay, setDrawerShowOverlay] = useState(false)
  const [filterChecked, setFilterChecked] = useState({})
  const [wishFlag, setWishFlag] = useState(false)
  const [cartFlag, setCartFlag] = useState(false)
  const [cartData, setCartData] = useState([])
  const [WishData, setWishData] = useState([])
  const [cartRemoveData, setCartRemoveData] = useState("")
  const [wishListRemoveData, setWishListRemoveData] = useState("")
  const [newProData, setNewProData] = useState(ProductApiData2)
  const [priceDataApi, setpriceDataApi] = useRecoilState(priceData)
  const [currencySym, setCurrencySym] = useState()

  const [metalRdPrice, setMetalRdPrice] = useState([])
  const [diaRd1Price, setDiaRd1Price] = useState([])
  const [csRd2Price, setCsRd2Price] = useState([])

  const setCartCount = useSetRecoilState(CartListCounts)
  const setWishCount = useSetRecoilState(WishListCounts)
  const getHeaderData = useRecoilValue(HeaderData)
  const getHeaderData2 = useRecoilValue(HeaderData2)
  const getnewMenuData = useRecoilValue(newMenuData)

  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [minNetwt, setMinNetwt] = useState(null);
  const [maxNetwt, setMaxNetwt] = useState(null);
  const [minGrosswt, setMinGrossWt] = useState(null);
  const [maxGrosswt, setMaxGrossWtt] = useState(null);
  const [minDiamondWt, setMinDiamondWt] = useState(null);
  const [maxDiamondWt, setMaxDiamondWt] = useState(null);

  const [hoverProductImageShow, setHoverProductImageShow] = useState(false);
  const [isColorWiseImageShow, setIsColorWiseImage] = useState('');

  const navigate = useNavigate();

  const getPdData = useRecoilValue(productDataNew)
  const getSearchData = useRecoilValue(searchData)
  const mtName = useRecoilValue(metalTypeG)
  const dqcName = useRecoilValue(diamondQualityColorG)
  const csqcName = useRecoilValue(colorstoneQualityColorG)

  const [value1, setValue1] = useState([minPrice, maxPrice]);
  const [value2, setValue2] = useState([minNetwt, maxNetwt]);
  const [value3, setValue3] = useState([minGrosswt, maxGrosswt]);
  const [value4, setValue4] = useState([minDiamondWt, maxDiamondWt]);

  const [ismetalWShow, setIsMeatlWShow] = useState('');
  const [isGrossWShow, setIsGrossShow] = useState('');
  const [isDaaimongWShow, setIsDaaimongWShow] = useState('');
  const [isDaaimonPShow, setIsDaaimonPShow] = useState('');
  const [isStoneWShow, setIsStoneWShow] = useState('');
  const [isStonePShow, setIsStonePShow] = useState('');
  const [isMetalTCShow, setIsMetalTCShow] = useState('');
  const [isPriceShow, setIsPriceShow] = useState('');
  const [currData, setCurrData] = useState([])


  const handelCurrencyData = () => {
    let currencyData = JSON.parse(localStorage.getItem('CURRENCYCOMBO'));
    let loginData = JSON.parse(localStorage.getItem('loginUserDetail'));
    console.log("param", loginData);

    if (currencyData && loginData) {
      if (Array.isArray(currencyData)) {
        const filterData = currencyData?.filter((cd) => cd?.Currencyid === loginData?.CurrencyCodeid)[0]
        console.log("currencyData", filterData);
        setCurrData(filterData)
      } else {
        setCurrData(currencyData)
      }
    }
  }

  useEffect(() => {
    handelCurrencyData();
  }, [])


  useEffect(() => {
    setTimeout(() => {
      if (getSearchData) {
        setNewProData(getSearchData);
      }
    }, 100);
  }, [getSearchData]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("allproductlist"));
    setProductApiData2(data)
  }, [])


  useEffect(() => {
    const fetchData = async () => {
      const data = JSON.parse(localStorage.getItem("allproductlist"));
      const loginUserDetail = JSON.parse(localStorage.getItem('loginUserDetail'));
      const storeInit = JSON.parse(localStorage.getItem('storeInit'));

      // let newRd = [];
      const updatedData = await Promise?.all(data?.map(async (product) => {
        const newPriceData = priceDataApi?.rd?.find(
          (pda) =>
            storeInit?.IsMetalCustomization === 1
              ?
              pda.A === product.autocode &&
              pda.B === product.designno &&
              pda.D === loginUserDetail?.cmboMetalType
              :
              pda.A === product.autocode &&
              pda.B === product.designno
        );

        const newPriceData1 = priceDataApi?.rd1?.filter(
          (pda) =>

            storeInit?.IsDiamondCustomization === 1
              ?
              pda.A === product.autocode &&
              pda.B === product.designno &&
              pda.H === loginUserDetail?.cmboDiaQualityColor?.split('#@#')[0] &&
              pda.J === loginUserDetail?.cmboDiaQualityColor?.split('#@#')[1]
              :
              pda.A === product.autocode &&
              pda.B === product.designno

        ).reduce((acc, obj) => acc + obj.S, 0)

        // const newPriceData11 = priceDataApi?.rd1?.filter(
        //   (pda) =>
        //     pda.A === product.autocode &&
        //     pda.B === product.designno &&
        //     pda.H === loginUserDetail?.cmboDiaQualityColor?.split('#@#')[0] &&
        //     pda.J === loginUserDetail?.cmboDiaQualityColor?.split('#@#')[1]
        // )
        // if(newPriceData1){
        //   newRd.push(newPriceData1);
        // }

        // console.log("newPriceData11",newPriceData11)



        const newPriceData2 = priceDataApi?.rd2?.filter(
          (pda) =>

            storeInit?.IsCsCustomization === 1
              ?
              pda.A === product.autocode &&
              pda.B === product.designno &&
              pda.H === loginUserDetail?.cmboCSQualityColor?.split('#@#')[0].toUpperCase() &&
              pda.J === loginUserDetail?.cmboCSQualityColor?.split('#@#')[1].toUpperCase()
              :
              pda.A === product.autocode &&
              pda.B === product.designno

        ).reduce((acc, obj) => acc + obj.S, 0)

        let price = 0;
        let markup = 0;
        let metalrd = 0;
        let diard1 = 0;
        let csrd2 = 0;

        if (newPriceData || newPriceData1 || newPriceData2) {
          price = (((newPriceData?.V ?? 0) / currData?.CurrencyRate ?? 0) + newPriceData?.W ?? 0) + (newPriceData1 ?? 0) + (newPriceData2 ?? 0);
          console.log('priceprice', ((newPriceData?.V ?? 0) / currData?.CurrencyRate));
          metalrd = (((newPriceData?.V ?? 0) / currData?.CurrencyRate ?? 0) + newPriceData?.W ?? 0)
          diard1 = newPriceData1 ?? 0
          csrd2 = newPriceData2 ?? 0
          markup = newPriceData?.AB
        }

        return { ...product, price, markup, metalrd, diard1, csrd2 }
      }));

      // console.log("newRd",newRd);

      localStorage.setItem("allproductlist", JSON.stringify(updatedData));
      setProductApiData2(updatedData);
    };

    fetchData();
  }, [priceDataApi]);



  const getCountFunc = async () => {
    await GetCount().then((res) => {
      if (res) {
        setCartCount(res.CountCart)
        setWishCount(res.WishCount)
      }
    })

  }

  function paramnameSetting(paramVal) {
    if (paramVal === 'param0') {
      return getnewMenuData?.data?.param0name
    }
    if (paramVal === 'param1') {
      return getnewMenuData?.data?.param1name
    }
    if (paramVal === 'param2') {
      return getnewMenuData?.data?.param2name
    }
  }

  function paramdataSetting(paramVal) {
    if (paramVal === 'param0') {
      return getnewMenuData?.data?.param0dataname
    }
    if (paramVal === 'param1') {
      return getnewMenuData?.data?.param1dataname
    }
    if (paramVal === 'param2') {
      return getnewMenuData?.data?.param2dataname
    }
  }

  useEffect(() => {
    if (paramnameSetting(getnewMenuData.label) === "brand") {
      const data = ProductApiData2.filter((pd) => pd && pd.BrandName === paramdataSetting(getnewMenuData.label))
      if (data) {
        setNewProData(data)
      }
    }

    if (paramnameSetting(getnewMenuData.label) === "collection") {
      const data = ProductApiData2.filter((pd) => pd && pd.CollectionName === paramdataSetting(getnewMenuData.label))
      if (data) {
        setNewProData(data)
      }
    }

    if (paramnameSetting(getnewMenuData.label) === "category") {

      const data = ProductApiData2.filter((pd) => pd && pd.CategoryName === paramdataSetting(getnewMenuData.label))
      if (data) {
        setNewProData(data)
      }
    }

    if (paramnameSetting(getnewMenuData.label) === "gender") {
      const data = ProductApiData2.filter((pd) => pd && pd.GenderName === paramdataSetting(getnewMenuData.label))
      if (data) {
        setNewProData(data)
      }
    }
  }, [getnewMenuData, ProductApiData2])

  const fetchFile = async () => {

    let storeinit = JSON.parse(localStorage.getItem("storeInit"))
    let loginInfo = JSON.parse(localStorage.getItem("loginUserDetail"))
    setIsColorWiseImage(storeinit.IsColorWiseImages);
    setIsMeatlWShow(storeinit.IsMetalWeight);
    setIsGrossShow(storeinit.IsGrossWeight);
    setIsDaaimongWShow(storeinit.IsDiamondWeight);
    setIsDaaimonPShow(storeinit.IsDiamondPcs);
    setIsStoneWShow(storeinit.IsStoneWeight);
    setIsStonePShow(storeinit.IsStonePcs);
    setIsMetalTCShow(storeinit.IsMetalTypeWithColor);
    setIsPriceShow(storeinit.IsPriceShow);

    await axios.get(
      `https://${storeinit?.domain}/assets/${storeinit?.FrontEnd_RegNo}/Store_Data/Productlist/Productlist_${loginInfo?.PackageId}_${storeinit?.FrontEnd_RegNo}.txt`
    ).then(
      (res) => {
        setProductApiData(res?.data)
      })
      .catch((err) => console.log("err", err))
  };

  useEffect(() => {

    let Symbol = JSON.parse(localStorage.getItem('CURRENCYCOMBO'))
    setCurrencySym(Symbol)

    fetchFile()
  }, [])

  const toggleDrawerOverlay = () => {
    setDrawerShowOverlay(!drawerShowOverlay);
  };

  let productData = [];

  if (ProductApiData?.data?.[0]) {
    ProductApiData.data[0]?.map((ele) => {
      let obj = {};
      Object.entries(prodListData?.ProductsList)?.map((objele) => {
        obj[objele[0]] = ele[objele[1]];
      });
      productData.push(obj);
    });
  }

  useEffect(() => {
    const element = document.getElementById("top")
    element.scrollIntoView()
  }, []);

  useEffect(() => {
    let newWishCheckData = (ProductApiData2 || []).map((pd) => {
      const newWish = WishData?.find((cd) => pd.designno === cd.DesignNo && pd.autocode === cd.autocode);
      let wishCheck = !!newWish;
      return { ...pd, wishCheck };
    });

    try {
      localStorage.setItem("allproductlist", JSON.stringify(newWishCheckData));
      if (JSON.stringify(newWishCheckData) !== JSON.stringify(ProductApiData2)) {
        setProductApiData2(newWishCheckData);
      }
    } catch (error) {
      console.error("Error storing data in localStorage:", error);
    }
  }, [WishData, ProductApiData2]);

  let cartlistUpdate = async () => {
    let newCartCheckData = (ProductApiData2)?.map((pd) => {

      let newWish = cartData?.find((cd) => pd.designno === cd.DesignNo && pd.autocode === cd.autocode)

      let checkFlag = false
      if (newWish) {
        checkFlag = true
      } else {
        checkFlag = false
      }
      return { ...pd, checkFlag }
    })
    setProductApiData2(newCartCheckData)
  }

  useEffect(() => {
    cartlistUpdate()
  }, [cartData])


  const handelProductSubmit = (product) => {
    localStorage.setItem("srProductsData", JSON.stringify(product));
    navigate("/productdetail");
  };

  const NewFilterData = () => {
    const newFilter = [];
    filterData?.SideMenuList?.forEach((ele) => {
      if (ele.Fno === '1') {
        newFilter.push({ label: "CATEGORY", filterList: filterData.CategoryList?.map((ele) => { return ele.CategoryName }), listType: 'CategoryName' });
      } else if (ele.Fno === '2') {
        newFilter.push({ label: "PRODUCT TYPE", filterList: filterData.ProductTypeList?.map((ele) => { return ele.ProducttypeName }), listType: 'ProducttypeName' });
      } else if (ele.Fno === '8') {
        newFilter.push({ label: "GENDER", filterList: filterData.GenderList?.map((ele) => { return ele.GenderName }), listType: 'GenderName' });
      } else if (ele.Fno === '12') {
        // newFilter.push({ label: "PRICE", filterList: [] });
      } else if (ele.Fno === '15') {
        newFilter.push({ label: "COLLECTION", filterList: filterData.CollectionList?.map((ele) => { return ele.CollectionName }), listType: 'CollectionName' });
      } else if (ele.Fno === '18') {

        newFilter.push({ label: "PRICE", filterList: [] });
        newFilter.push({ label: "NETWT", filterList: [] });
        newFilter.push({ label: "GROSSWT", filterList: [] });
        newFilter.push({ label: "DIAMONDWT", filterList: [] });
      }
    });

    return newFilter;
  }

  const handleCheckboxChange = (e, ele, flist) => {
    const { name, checked, value } = e.target;

    setFilterChecked((prev) => ({
      ...prev,
      [name]: { checked, value: flist, type: ele.listType }
    }));
  }

  useEffect(() => {
    let FilterDataVar = [];
    let NewFilterArr = Object?.values(filterChecked).filter((ele) => ele?.checked === true)
    NewFilterArr.map((ele) => {
      let fd = ProductApiData2.filter((pd) => pd[ele?.type] === ele?.value)
      if (fd) {
        FilterDataVar.push(fd)
      }
    })
    if (FilterDataVar.length && FilterDataVar) {
      let reverseData = FilterDataVar.reverse()
      const mergedArray = [].concat(...reverseData);
      setNewProData(mergedArray)
    } else {
      setNewProData(ProductApiData2)
    }

  }, [filterChecked])




  const getCartAndWishListData = async () => {

    const UserEmail = localStorage.getItem("registerEmail")
    const storeInit = JSON.parse(localStorage.getItem("storeInit"))
    const Customer_id = JSON.parse(localStorage.getItem("loginUserDetail"));

    let EncodeData = { FrontEnd_RegNo: `${storeInit?.FrontEnd_RegNo}`, Customerid: `${Customer_id?.id}` }

    const encodedCombinedValue = btoa(JSON.stringify(EncodeData));

    const body = {
      "con": `{\"id\":\"Store\",\"mode\":\"getdesignnolist\",\"appuserid\":\"${UserEmail}\"}`,
      "f": " useEffect_login ( getdataofcartandwishlist )",
      "p": encodedCombinedValue
    }

    await CommonAPI(body).then((res) => {
      if (res?.Message === "Success") {

        setCartData(res?.Data?.rd)
        setWishData(res?.Data?.rd1)

      }
    })

  }

  useEffect(() => {

    getCartAndWishListData()
    // getCountApi()
    getCountFunc()

  }, [])

  const handelWishList = async (event, prod) => {

    try {
      setWishFlag(event.target.checked)

      if (event.target.checked === true) {

        const storeInit = JSON.parse(localStorage.getItem("storeInit"))
        const UserEmail = localStorage.getItem("registerEmail")
        const Customer_id = JSON.parse(localStorage.getItem("loginUserDetail"));

        const product = prod

        const finalJSON = {
          "stockweb_event": "",
          "Mastermanagement_CategorySize": "",
          "sizeamountpersentage": "",
          "stockno": "",
          "is_show_stock_website": "0",
          "cmboDiaQualityColor": "C-VS#@#FG",
          "cmboMetalType": `${product?.MetalTypeName} ${product?.MetalPurity}`,
          "AdditionalValWt": Number(`${product?.AdditionalValWt}`),
          "BrandName": `${product?.BrandName ?? ""}`,
          "Brandid": 5,
          "CategoryName": `${product?.CategoryName}`,
          "Categoryid": Number(`${product?.Categoryid}`),
          "CenterStoneId": Number(`${product?.CenterStoneId}`),
          "CenterStonePieces": Number(`${product?.CenterStonePieces}`),
          "CollectionName": `${product?.CollectionName}`,
          "Collectionid": Number(`${product?.Collectionid}`),
          "ColorWiseRollOverImageName": `${product?.ColorWiseRollOverImageName}`,
          "DefaultImageName": `${product?.DefaultImageName}`,
          "DisplayOrder": Number(`${product?.DisplayOrder}`),
          "FrontEnd_OrderCnt": Number(`${product?.FrontEnd_OrderCnt}`),
          "GenderName": `${product?.GenderName}`,
          "Genderid": Number(`${product?.Genderid}`),
          "Grossweight": Number(`${product?.Grossweight}`),
          "InReadyStockCnt": Number(`${product?.InReadyStockCnt}`),
          "IsBestSeller": Number(`${product?.IsBestSeller}`),
          "IsColorWiseImageExists": `${product?.ColorWiseRollOverImageName ?? ""}`,
          "IsInReadyStock": Number(`${product?.IsInReadyStock}`),
          "IsNewArrival": `${product?.IsNewArrival}`,
          "IsRollOverColorWiseImageExists": `${product?.IsRollOverColorWiseImageExists ?? ""}`,
          "IsTrending": Number(`${product?.IsTrending}`),
          "MasterManagement_labid": Number(`${product?.MasterManagement_labid}`),
          "MasterManagement_labname": "",
          "MetalColorName": `${product?.MetalColorName}`,
          "MetalColorid": Number(`${product?.MetalColorid}`),
          "MetalPurity": `${product?.MetalPurity}`,
          "MetalPurityid": Number(`${product?.MetalTypeid}`),
          "MetalTypeName": `${product?.MetalTypeName ?? ""}`,
          "MetalTypeid": Number(`${product?.IsInReadyStock}`),
          "MetalWeight": Number(`${product?.MetalWeight}`),
          "OcassionName": `${product?.OcassionName ?? ""}`,
          "Ocassionid": Number(`${product?.Ocassionid}`),
          "ProducttypeName": `${product?.ProducttypeName}`,
          "Producttypeid": Number(`${product?.Producttypeid}`),
          "RollOverImageName": `${product?.RollOverImageName}`,
          "SubCategoryName": `${product?.SubCategoryName ?? ""}`,
          "SubCategoryid": Number(`${product?.SubCategoryid ?? ""}`),
          "ThemeName": `${product?.ThemeName ?? ""}`,
          "Themeid": Number(`${product?.Themeid}`),
          "TitleLine": `${product?.TitleLine}`,
          "UnitCost": `${product?.price === "Not Available" ? 0 : product?.price}`,
          "UnitCostWithmarkup": (`${(product?.price === "Not Available" ? 0 : product?.price) + (product?.markup ?? 0)}`),
          "autocode": `${product?.autocode}`,
          "colorstonecolorname": `${product?.colorstonecolorname}`,
          "colorstonequality": `${product?.colorstonequality}`,
          "designno": `${product?.designno}`,
          "diamondcolorname": `${product?.diamondcolorname}`,
          "diamondpcs": Number(`${product?.diamondpcs}`),
          "diamondquality": `${product?.diamondquality?.split(",")[0]}`,
          "diamondsetting": `${product?.diamondsetting}`,
          "diamondshape": `${product?.diamondshape}`,
          "diamondweight": Number(`${product?.diamondweight}`),
          "encrypted_designno": `${product?.encrypted_designno ?? ""}`,
          "hashtagid": `${product?.Hashtagid ?? ""}`,
          "hashtagname": `${product?.Hashtagname ?? ""}`,
          "imagepath": `${product?.imagepath}`,
          "imgrandomno": `${product?.imgrandomno}`,
          "mediumimage": `${product?.MediumImagePath ?? ""}`,
          "originalimage": `${product?.OriginalImagePath}`,
          "storyline_html": `${product?.storyline_html ?? ""}`,
          "storyline_video": `${product?.storyline_video ?? ""}`,
          "thumbimage": `${product?.ThumbImagePath}`,
          "totaladditionalvalueweight": 0,
          "totalcolorstoneweight": Number(`${product?.totalcolorstoneweight}`),
          "totaldiamondweight": Number(`${product?.totaldiamondweight}`),
          "updatedate": `${product?.UpdateDate}`,
          "videoname": `${product?.videoname ?? ""}`,
          "FrontEnd_RegNo": `${storeInit?.FrontEnd_RegNo}`,
          "Customerid": `${Customer_id?.id}`,
          "PriceMastersetid": `${product?.PriceMastersetid ?? ""}`,
          "DQuality": `${product?.diamondquality?.split(",")[0]}`,
          "DColor": `${product?.diamondcolorname}`,
          "UploadLogicalPath": `${product?.UploadLogicalPath ?? ""}`,
          "ukey": `${storeInit?.ukey}`
        }


        const encodedCombinedValue = btoa(JSON.stringify(finalJSON));

        const body = {
          con: `{\"id\":\"\",\"mode\":\"addwishlist\",\"appuserid\":\"${UserEmail}\"}`,
          f: "AddToWishListIconClick (addwishlist)",
          p: encodedCombinedValue,
        };

        await CommonAPI(body).then(async (res) => {

          if (res?.Data?.rd[0]?.msg === "success") {

            await getCartAndWishListData()
            getCountFunc()
          }
        })
      }
      else {
        // {"designlist":"'MCJ10'","isselectall":"0","FrontEnd_RegNo":"95oztttesi0o50vr","Customerid":"856"}

        const storeInit = JSON.parse(localStorage.getItem("storeInit"))
        const UserEmail = localStorage.getItem("registerEmail")
        const Customer_id = JSON.parse(localStorage.getItem("loginUserDetail"));

        setWishListRemoveData(prod.designno)

        let Data = { "designlist": `'${prod?.designno}'`, "isselectall": "0", "FrontEnd_RegNo": `${storeInit?.FrontEnd_RegNo}`, "Customerid": `${Customer_id?.id}` }

        let encodedCombinedValue = btoa(JSON.stringify(Data))
        const body = {
          con: `{\"id\":\"\",\"mode\":\"removeFromWishList\",\"appuserid\":\"${UserEmail}\"}`,
          f: "RemoveFromWishlistIconClick (removeFromWishList)",
          p: encodedCombinedValue,
        }

        await CommonAPI(body).then(async (res) => {
          if (res?.Data?.rd[0]?.stat_msg === "success") {
            await getCartAndWishListData()
            getCountFunc()
          }
        })
      }
    }
    catch (error) {
      console.log("error", error);
    }
  }

  const handelCartList = async (event, prod) => {
    try {
      setCartFlag(event.target.checked)

      if (event.target.checked === true) {
        const storeInit = JSON.parse(localStorage.getItem("storeInit"))
        const UserEmail = localStorage.getItem("registerEmail")
        const Customer_id = JSON.parse(localStorage.getItem("loginUserDetail"));

        const product = prod

        let isWishHasCartData = WishData?.filter((pd) => product.autocode === pd.autocode)

        let wishToCartEncData = { "autocodelist": `${isWishHasCartData[0]?.autocode}`, "ischeckall": 0, "FrontEnd_RegNo": `${storeInit?.FrontEnd_RegNo}`, "Customerid": `${Customer_id?.id}` }



        const finalJSON = {
          "stockweb_event": "",
          "designno": `${product?.designno}`,
          "autocode": `${product?.autocode}`,
          "imgrandomno": `${product?.imgrandomno}`,
          "producttypeid": `${product?.Producttypeid}`,
          "metaltypeid": `${product?.MetalTypeid}`,
          "metalcolorid": `${product?.MetalColorid}`,
          "stockno": "",
          "DQuality": `${product?.diamondquality?.split(",")[0]}`,
          "DColor": `${product?.diamondcolorname}`,
          "cmboMetalType": `${product?.MetalTypeName} ${product?.MetalPurity}`,
          "AdditionalValWt": Number(`${product?.AdditionalValWt}`),
          "BrandName": `${product?.BrandName ?? ""}`,
          "Brandid": Number(`${product?.Brandid}`),
          "CategoryName": `${product?.CategoryName}`,
          "Categoryid": Number(`${product?.Categoryid}`),
          "CenterStoneId": Number(`${product?.CenterStoneId}`),
          "CenterStonePieces": Number(`${product?.CenterStonePieces}`),
          "CollectionName": `${product?.CollectionName}`,
          "Collectionid": Number(`${product?.Collectionid}`),
          "ColorWiseRollOverImageName": `${product?.ColorWiseRollOverImageName}`,
          "DefaultImageName": `${product?.DefaultImageName}`,
          "DisplayOrder": Number(`${product?.DisplayOrder}`),
          "FrontEnd_OrderCnt": Number(`${product?.FrontEnd_OrderCnt}`),
          "GenderName": `${product?.GenderName}`,
          "Genderid": Number(`${product?.Genderid}`),
          "Grossweight": Number(`${product?.Grossweight}`),
          "InReadyStockCnt": Number(`${product?.InReadyStockCnt}`),
          "IsBestSeller": Number(`${product?.IsBestSeller}`),
          "IsColorWiseImageExists": `${product?.IsColorWiseImageExists ?? 0}`,
          "IsInReadyStock": Number(`${product?.IsInReadyStock}`),
          "IsNewArrival": `${product?.IsNewArrival}`,
          "IsRollOverColorWiseImageExists": `${product?.IsRollOverColorWiseImageExists ?? ""}`,
          "IsTrending": Number(`${product?.IsTrending}`),
          "MasterManagement_labid": Number(`${product?.MasterManagement_labid}`),
          "MasterManagement_labname": "",
          "MetalColorName": `${product?.MetalColorName}`,
          "MetalColorid": Number(`${product?.MetalColorid}`),
          "MetalPurity": `${product?.MetalPurity}`,
          "MetalPurityid": Number(`${product?.MetalTypeid}`),
          "MetalTypeName": `${product?.MetalTypeName}`,
          "MetalTypeid": Number(`${product?.IsInReadyStock}`),
          "MetalWeight": Number(`${product?.MetalWeight}`),
          "OcassionName": `${product?.OcassionName ?? ""}`,
          "Ocassionid": Number(`${product?.Ocassionid}`),
          "ProducttypeName": `${product?.ProducttypeName}`,
          "Producttypeid": Number(`${product?.Producttypeid}`),
          "RollOverImageName": `${product?.RollOverImageName}`,
          "SubCategoryName": `${product?.SubCategoryName ?? ""}`,
          "SubCategoryid": Number(`${product?.SubCategoryid}`),
          "ThemeName": `${product?.ThemeName ?? ""}`,
          "Themeid": Number(`${product?.Themeid}`),
          "TitleLine": `${product?.TitleLine}`,
          "UnitCost": `${product?.price === "Not Available" ? 0 : product?.price}`,
          "UnitCostWithmarkup": (`${(product?.price === "Not Available" ? 0 : product?.price) + (product?.markup ?? 0)}`),
          "colorstonecolorname": `${product?.colorstonecolorname}`,
          "colorstonequality": `${product?.colorstonequality}`,
          "diamondcolorname": `${product?.diamondcolorname}`,
          "diamondpcs": Number(`${product?.diamondpcs}`),
          "diamondquality": `${product?.diamondquality?.split(",")[0]}`,
          "diamondsetting": `${product?.diamondsetting}`,
          "diamondshape": `${product?.diamondshape}`,
          "diamondweight": Number(`${product?.diamondweight}`),
          "encrypted_designno": `${product?.encrypted_designno ?? ""}`,
          "hashtagid": `${product?.Hashtagid ?? ""}`,
          "hashtagname": `${product?.Hashtagname ?? ""}`,
          "imagepath": `${product?.imagepath}`,
          "mediumimage": `${product?.MediumImagePath ?? ""}`,
          "originalimage": `${product?.OriginalImagePath}`,
          "storyline_html": `${product?.storyline_html ?? ""}`,
          "storyline_video": `${product?.storyline_video ?? ""}`,
          "thumbimage": `${product?.ThumbImagePath}`,
          "totaladditionalvalueweight": Number(`${product?.totaladditionalvalueweight}`),
          "totalcolorstoneweight": Number(`${product?.totalcolorstoneweight}`),
          "totaldiamondweight": Number(`${product?.totaldiamondweight}`),
          "updatedate": `${product?.UpdateDate}`,
          "videoname": `${product?.videoname ?? ""}`,
          "FrontEnd_RegNo": `${storeInit?.FrontEnd_RegNo}`,
          "Customerid": `${Customer_id?.id}`,
          "PriceMastersetid": `${product?.PriceMastersetid ?? ""}`,
          "quantity": `${product?.quantity ?? "1"}`,
          "CurrencyRate": `${product?.CurrencyRate ?? ""}`,
          "remarks_design": `${product?.remarks_design ?? ""}`,
          "diamondcolorid": `${product?.diamondcolorid ?? ""}`,
          "diamondqualityid": `${product?.diamondqualityid ?? ""}`,
          "detail_ringsize": `${product?.detail_ringsize ?? ""}`,
          "ProjMode": `${product?.ProjMode ?? ""}`,
          "AlbumMasterid": `${product?.AlbumMasterid ?? ""}`,
          "AlbumMastername": `${product?.AlbumMastername ?? ""}`,
          "Albumcode": `${product?.Albumcode ?? ""}`,
          "Designid": `${product?.Designid ?? ""}`
        }

        const encodedCombinedValue = btoa(JSON.stringify(finalJSON));
        const wishToCartEncData1 = btoa(JSON.stringify(wishToCartEncData));

        const body = {
          con: `{\"id\":\"\",\"mode\":\"ADDTOCART\",\"appuserid\":\"${UserEmail}\"}`,
          f: "AddToCartIconClick (addcartlist)",
          p: encodedCombinedValue,
        };

        let body1 = {
          con: `{\"id\":\"Store\",\"mode\":\"addwishlisttocart\",\"appuserid\":\"${UserEmail}\"}`,
          f: "iconclick (addwishlisttocart)",
          p: wishToCartEncData1
        }




        await CommonAPI(isWishHasCartData.length ? body1 : body).then(async (res) => {
          if (!isWishHasCartData.length && res?.Data?.rd[0]?.msg === "success") {
            await getCartAndWishListData()
            getCountFunc()
          }

          if (isWishHasCartData.length && res?.Data?.rd[0]?.stat_msg === "success") {
            await getCartAndWishListData()
            // await getCountApi()
            getCountFunc()
          }
        })



      }
      else {
        const storeInit = JSON.parse(localStorage.getItem("storeInit"))
        const Customer_id = JSON.parse(localStorage.getItem("loginUserDetail"));
        const UserEmail = localStorage.getItem("registerEmail")

        setCartRemoveData(prod.designno)

        let Data = { "designno": `${prod?.designno}`, "autocode": `${prod?.autocode}`, "metalcolorid": 0, "isSolStockNo": 0, "is_show_stock_website": "0", "isdelete_all": 0, "FrontEnd_RegNo": `${storeInit?.FrontEnd_RegNo}`, "Customerid": `${Customer_id?.id}`, "cartidlist": "" }

        let encodedCombinedValue = btoa(JSON.stringify(Data))
        const body = {
          con: `{\"id\":\"\",\"mode\":\"removeFromCartList\",\"appuserid\":\"${UserEmail}\"}`,
          f: "RemoveFromCartIconClick (removeFromCartList)",
          p: encodedCombinedValue,
        }

        await CommonAPI(body).then(async (res) => {
          if (res?.Data?.rd[0]?.stat_msg === "success") {
            await getCartAndWishListData()
            getCountFunc()
          }
        })

      }

    }
    catch (error) {
      console.log("error", error);
    }

  }

  // useEffect(() => {
  //   let flag = localStorage.getItem('productDataShow') ?? 'true';
  //   if (newProData.length === 0 && flag === 'true') {
  //     let data = productData.filter((pd) => pd && pd.CollectionName === getHeaderData?.value1)
  //     setNewProData(data);
  //     setTimeout(() => {
  //       localStorage.setItem('productDataShow', 'false')
  //     }, 100)
  //   }
  // }, [getHeaderData, newProData])


  useEffect(() => {
    //level1 filter
    if (getHeaderData2?.label1 === "collection" && getHeaderData2?.label2 === "collection") {
      let data = productData.filter((pd) => pd && pd.CollectionName === getHeaderData2?.value1 && pd.CollectionName === getHeaderData2?.value2)
      setNewProData(data)
    }
    if (getHeaderData2?.label1 === "collection" && getHeaderData2?.label2 === "category") {
      let data = productData.filter((pd) => pd && pd.CollectionName === getHeaderData2?.value1 && pd.CategoryName === getHeaderData2?.value2)
      setNewProData(data);

    }
    if (getHeaderData2?.label1 === "collection" && getHeaderData2?.label2 === "gender") {
      let data = productData.filter((pd) => pd && pd.CollectionName === getHeaderData2?.value1 && pd.GenderName === getHeaderData2?.value2)
      setNewProData(data);

    }
    if (getHeaderData2?.label1 === "collection" && getHeaderData2?.label2 === "brand") {
      let data = productData.filter((pd) => pd && pd.CollectionName === getHeaderData2?.value1 && pd.BrandName === getHeaderData2?.value2)
      setNewProData(data);

    }
    if (getHeaderData2?.label1 === "brand" && getHeaderData2?.label2 === "brand") {
      let data = productData?.filter((pd) => pd && pd.BrandName === getHeaderData2?.value1 && pd.BrandName === getHeaderData2?.value2)
      setNewProData(data);

    }
    if (getHeaderData2?.label1 === "brand" && getHeaderData2?.label2 === "collection") {
      let data = productData?.filter((pd) => pd && pd.BrandName === getHeaderData2?.value1 && pd.CollectionName === getHeaderData2?.value2)
      setNewProData(data);

    }
    if (getHeaderData2?.label1 === "brand" && getHeaderData2?.label2 === "category") {
      let data = productData?.filter((pd) => pd && pd.BrandName === getHeaderData2?.value1 && pd.CategoryName === getHeaderData2?.value2)
      setNewProData(data);

    }
    if (getHeaderData2?.label1 === "brand" && getHeaderData2?.label2 === "gender") {
      let data = productData?.filter((pd) => pd && pd.BrandName === getHeaderData2?.value1 && pd.GenderName === getHeaderData2?.value2)
      setNewProData(data);

    }

    // level2 filter
    if (getHeaderData?.label1 === "collection") {
      let data = productData?.filter((pd) => pd && pd.CollectionName === getHeaderData?.value1)
      setNewProData(data)

    }
    if (getHeaderData?.label1 === "brand") {
      let data = productData?.filter((pd) => pd && pd.BrandName === getHeaderData?.value1)
      setNewProData(data)

    }
    if (getHeaderData?.label1 === "category") {
      let data = productData?.filter((pd) => pd && pd.CategoryName === getHeaderData?.value1)
      setNewProData(data)

    }
    if (getHeaderData?.label1 === "gender") {
      let data = productData?.filter((pd) => pd && pd.GenderName === getHeaderData?.value1)
      setNewProData(data)

    }

  }, [getHeaderData2, getHeaderData])



  const newMenuProdData = () => {
    let data = productData?.filter((pd) => pd && pd.CollectionName === getHeaderData?.value1)
    setNewProData(data)
  }
  useEffect(() => {
    if (getHeaderData && getHeaderData.value1 && productData) {
      newMenuProdData()
    }
  }, [getHeaderData])

  const getDesignPriceList = async () => {

    const storeInit = JSON.parse(localStorage.getItem("storeInit"))
    const loginUserDetail = JSON.parse(localStorage.getItem("loginUserDetail"));
    const currencyCombo = JSON.parse(localStorage.getItem("CURRENCYCOMBO"));
    const UserEmail = localStorage.getItem("registerEmail")

    const GetPriceReq = {
      "CurrencyRate": `${currencyCombo?.CurrencyRate}`,
      "FrontEnd_RegNo": `${storeInit?.FrontEnd_RegNo}`,
      "Customerid": `${loginUserDetail?.id}`,
      "Laboursetid": `${storeInit.PolicyApplyOnName === "Customer Wise Policy" ? loginUserDetail?._pricemanagement_laboursetid : loginUserDetail?.pricemanagement_laboursetid}`,
      "diamondpricelistname": `${loginUserDetail?._diamondpricelistname}`,
      "colorstonepricelistname": `${loginUserDetail?._colorstonepricelistname}`,
      "SettingPriceUniqueNo": `${loginUserDetail?.SettingPriceUniqueNo}`,
      "DesignNo": ""
    }

    const encodedCombinedValue = btoa(JSON.stringify(GetPriceReq));

    let body = {
      "con": `{\"id\":\"Store\",\"mode\":\"getdesignpricelist\",\"appuserid\":\"${UserEmail}\"}`,
      "f": "onloadFirstTime (getdesignpricelist)",
      "p": encodedCombinedValue
    }

    await CommonAPI(body).then((res) => {
      setpriceDataApi(res?.Data)
    })

  }

  const handleChange1 = () => {

  }

  useEffect(() => {
    getDesignPriceList()
  }, [])

  //for price range
  useEffect(() => {
    const priceOnly = ProductApiData2?.filter((item) => item?.price !== 'Not Available')?.map((item) => item.price)?.sort((a, b) => a - b);
    setMinPrice(priceOnly[0]);
    setMaxPrice(priceOnly[priceOnly?.length - 1]);
    setValue1([priceOnly[0], priceOnly[priceOnly?.length - 1]])
    const netWtOnly = ProductApiData2?.map((item) => item?.netwt).sort((a, b) => a - b);
    setMinNetwt(netWtOnly[0]);
    setMaxNetwt(netWtOnly[netWtOnly?.length - 1]);
    setValue2([netWtOnly[0], netWtOnly[netWtOnly?.length - 1]])
    const grossWtOnly = ProductApiData2?.map((item) => item?.Grossweight).sort((a, b) => a - b);
    setMinGrossWt(grossWtOnly[0]);
    setMaxGrossWtt(grossWtOnly[grossWtOnly?.length - 1]);
    setValue3([grossWtOnly[0], grossWtOnly[grossWtOnly?.length - 1]])
    const diamondWtOnly = ProductApiData2?.map((item) => item?.diamondweight).sort((a, b) => a - b);
    setMinDiamondWt(diamondWtOnly[0]);
    setMaxDiamondWt(diamondWtOnly[diamondWtOnly?.length - 1]);
    setValue4([diamondWtOnly[0], diamondWtOnly[diamondWtOnly?.length - 1]])

  }, [ProductApiData2]);

  const handlePriceChange = (event, newValue, activeThumb) => {
    setValue1(newValue);
    filterDatasfunc(newValue, value2, value3, value4);
  };

  const handleNetWtChange = (event, newValue, activeThumb) => {
    setValue2(newValue);
    filterDatasfunc(value1, newValue, value3, value4);
  };

  const handlegrossWtChange = (event, newValue, activeThumb) => {
    setValue3(newValue);
    filterDatasfunc(value1, value2, newValue, value4);
  };

  const handleDiamondChange = (event, newValue, activeThumb) => {
    setValue4(newValue);
    filterDatasfunc(value1, value2, value3, newValue);
  };

  const filterDatasfunc = (priceRange, netWtRange, grossWtRange, diamondWtRange) => {

    const filteredData = ProductApiData2?.filter((item) => {

      const priceInRange = item?.price >= priceRange[0] && item?.price <= priceRange[1];
      const netWtInRange = item.netwt >= netWtRange[0] && item.netwt <= netWtRange[1];
      const grossWtInRange = item.Grossweight >= grossWtRange[0] && item.Grossweight <= grossWtRange[1];
      const diamondWtInRange = item.diamondweight >= diamondWtRange[0] && item.diamondweight <= diamondWtRange[1];
      return priceInRange && netWtInRange && grossWtInRange && diamondWtInRange;

    });
    setNewProData(filteredData);
  };

  const handlePageReload = () => {
    setNewProData(ProductApiData2);
    setMinPrice(0)
    setMaxPrice(maxPrice)
    setValue1([minPrice, maxPrice])
    setMinNetwt(0)
    setMaxNetwt(maxNetwt)
    setValue2([0, maxNetwt])
    setMinGrossWt(0)
    setMaxGrossWtt(maxGrosswt)
    setValue3([0, maxGrosswt])
    setMinDiamondWt(0)
    setMaxDiamondWt(maxDiamondWt)
    setValue4([0, maxDiamondWt])
  }

  const [hoveredImageUrls, setHoveredImageUrls] = useState({});

  const handleHoverImageShow = (url, index, rollPath, imagepath) => {
    // isColorWiseImageShow

    let updatedFilename = rollPath.replace(/\s/g, '_');
    let newPath = url.replace(/\/([^/]+)$/, '/' + updatedFilename);
    let path = imagepath + newPath;

    if (rollPath.length !== 0) {
      setHoveredImageUrls(prevHoveredImageUrls => {
        return { ...prevHoveredImageUrls, [index]: path };
      });
    }

  };

  const handleMouseLeave = (index) => {
    setHoveredImageUrls(prevState => {
      const newState = { ...prevState };
      delete newState[index];
      return newState;
    });
  };



  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };



  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {isOpenDetail &&
        <div>

        </div>}
    </Box>
  );


  const handleSortChange = (val) => {
    const selectedOption = val;
    let sortedData = [...ProductApiData2];

    if (selectedOption === 'PRICE HIGH TO LOW') {
      sortedData.sort((a, b) => ((b?.UnitCost ?? 0) + (b?.price ?? 0) + (b?.markup ?? 0)) - ((a?.UnitCost ?? 0) + (a?.price ?? 0) + (a?.markup ?? 0)));
    } else if (selectedOption === 'PRICE LOW TO HIGH') {
      sortedData.sort((a, b) => ((a?.UnitCost ?? 0) + (a?.price ?? 0) + (a?.markup ?? 0)) - ((b?.UnitCost ?? 0) + (b?.price ?? 0) + (b?.markup ?? 0)));
    } else {
      setNewProData(ProductApiData2);

      sortedData = [...ProductApiData2];
    }
    setNewProData(sortedData);
  };

  const Newlist = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, height: '250px' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {isOpenShoryBy &&
        // <div style={{ paddingInline: '10px' }}>
        //   <option value="None" style={{ height: '45px', borderBottom: '1px solid lightgray', display: 'flex', alignItems: 'center' }} onClick={() => { handleSortChange('None'); toggleShoryBy(); }}>Recommended</option>
        //   <option value="None" style={{ height: '45px', borderBottom: '1px solid lightgray', display: 'flex', alignItems: 'center' }} onClick={() => { handleSortChange('None'); toggleShoryBy(); }}>New</option>
        //   <option value="None" style={{ height: '45px', borderBottom: '1px solid lightgray', display: 'flex', alignItems: 'center' }} onClick={() => { handleSortChange('None'); toggleShoryBy(); }}>In stock</option>
        //   <option value="PRICE HIGH TO LOW" style={{ height: '45px', borderBottom: '1px solid lightgray', display: 'flex', alignItems: 'center' }} onClick={() => { handleSortChange('PRICE HIGH TO LOW'); toggleShoryBy(); }}>PRICE HIGH TO LOW</option>
        //   <option value="PRICE LOW TO HIGH" style={{ height: '45px', borderBottom: '1px solid lightgray', display: 'flex', alignItems: 'center' }} onClick={() => { handleSortChange('PRICE LOW TO HIGH'); toggleShoryBy(); }}>PRICE LOW TO HIGH</option>
        // </div>

        <div style={{ paddingInline: '10px' }}>
          <label style={{ height: '45px', borderBottom: '1px solid lightgray', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            Recommended
            <input
              type="radio"
              name="sortOption"
              value="None"
              onClick={() => { handleSortChange('None'); }}
            />
          </label>

          <label style={{ height: '45px', borderBottom: '1px solid lightgray', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            New
            <input
              type="radio"
              name="sortOption"
              value="New"
              onClick={() => { handleSortChange('New'); }}
            />
          </label>

          <label style={{ height: '45px', borderBottom: '1px solid lightgray', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            In stock
            <input
              type="radio"
              name="sortOption"
              value="InStock"
              onClick={() => { handleSortChange('InStock'); }}
            />
          </label>

          <label style={{ height: '45px', borderBottom: '1px solid lightgray', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            Price High to Low
            <input
              type="radio"
              name="sortOption"
              value="PriceHighToLow"
              onClick={() => { handleSortChange('PRICE HIGH TO LOW'); }}
            />
          </label>

          <label style={{ height: '45px', borderBottom: '1px solid lightgray', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            Price Low to High
            <input
              type="radio"
              name="sortOption"
              value="PriceLowToHigh"
              onClick={() => { handleSortChange('PRICE LOW TO HIGH') }}
            // onClick={() => { handleSortChange('PRICE LOW TO HIGH'); toggleShoryBy(); }}
            />
          </label>
        </div>
      }
    </Box>
  );

  const decodeEntities = (html) => {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }


  const handleOverlayCancel = () => {
    setOpenFilterOverlly('false');
  };

  const stylesn = {
    overlay: {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      // height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: '1000',
      transition: 'opacity 0.3s ease', // Added transition for opacity
      opacity: '0', // Initially set opacity to 0
      pointerEvents: 'none', // Hide the overlay from mouse events
    },
    overlayContent: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '100%',
      height: '100%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '5px',
    },
  };


  return (
    <div id="top">
      {/* {openFilterOverlly === 'true' && ( */}
      <div style={{ ...stylesn.overlay, opacity: '1', pointerEvents: 'auto', height: `${openFilterOverlly === 'true' ? "100%" : "0"}`, transition: "0.4s ease" }}>
        <div style={stylesn.overlayContent}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ margin: '0px', padding: '0px' }}>Filter</h2>
            <IoCloseSharp onClick={handleOverlayCancel} style={{ height: '25px', width: '25px' }} />
          </div>
          <div style={{ marginTop: '20px', height: '90%', overflow: 'auto' }}>
            {NewFilterData().map((ele, index) => (
              <>
                <Accordion
                  elevation={0}
                  sx={{
                    borderBottom: "1px solid #c7c8c9",
                    borderRadius: 0,
                    marginTop: '0px',
                    "&.MuiPaper-root.MuiAccordion-root:last-of-type": {
                      borderBottomLeftRadius: "0px",
                      borderBottomRightRadius: "0px",
                    },
                    "&.MuiPaper-root.MuiAccordion-root:before": {
                      background: "none",
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ width: "20px" }} />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{
                      color: "#7f7d85",
                      borderRadius: 0,

                      "&.MuiAccordionSummary-root": {
                        padding: 0,
                      },
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "TT Commons, sans-serif",
                        fontSize: "12px",
                        opacity: "0.7",
                      }}
                    >
                      {ele.label}
                    </span>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    {ele.label === "PRICE" &&
                      <div>
                        <Slider
                          className='netWtSecSlider'
                          getAriaLabel={() => 'Minimum distance'}
                          value={value1}
                          onChange={handleChange1}
                          valueLabelDisplay="auto"
                          getAriaValueText={valuetext}
                          disableSwap
                        />
                      </div>}

                    {ele.label === "CENTERSTONE" &&
                      <div>
                        <Slider
                          className='netWtSecSlider'
                          getAriaLabel={() => 'Minimum distance'}
                          value={value1}
                          onChange={handleChange1}
                          valueLabelDisplay="auto"
                          getAriaValueText={valuetext}
                          disableSwap
                        />
                      </div>
                    }

                    {ele?.filterList?.map((flist, i) => (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                        key={i}
                      >
                        <Checkbox
                          name={`checkbox${index + 1}${i + 1}`}
                          checked={
                            filterChecked[`checkbox${index + 1}${i + 1}`]
                              ?.checked
                          }
                          style={{
                            color: "#7f7d85",
                            padding: 0,
                            width: "10px",
                          }}
                          onClick={(e) =>
                            handleCheckboxChange(e, ele, flist)
                          }
                          size="small"
                        />
                        <small
                          style={{
                            fontFamily: "TT Commons, sans-serif",
                            color: "#7f7d85",
                            textTransform: "lowercase",
                          }}
                        >
                          {flist}
                        </small>
                      </div>
                    ))}
                  </AccordionDetails>
                </Accordion>
              </>
            ))}
          </div>
        </div>
      </div>
      {/* )} */}
      <div
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="smilingProductMain" id="smilingProductMain">
            <div
              className="smilingProductSubMain"
              style={{ width: "100%", display: "flex" }}
            >
              <div
                style={{
                  width: "20%",
                  margin: "0px 100px 0px 0px",
                  padding: "100px 0px 40px 50px",
                }}
                className="smilingWebProductListSideBar"
              >
                <ul className="d-flex">
                  <li className="finejwelery me-4" id="finejwelery">Filters</li>
                  <li className="finejwelery" id="finejwelery" onClick={() => handlePageReload()}>All</li>
                </ul>
                <div>
                  {NewFilterData().map((ele, index) => (
                    <>
                      <Accordion
                        elevation={0}
                        sx={{
                          borderBottom: "1px solid #c7c8c9",
                          borderRadius: 0,
                          marginLeft: "28px",
                          "&.Mui-expanded": {
                            marginLeft: "28px",
                          },
                          "&.MuiPaper-root.MuiAccordion-root:last-of-type": {
                            borderBottomLeftRadius: "0px",
                            borderBottomRightRadius: "0px",
                          },
                          "&.MuiPaper-root.MuiAccordion-root:before": {
                            background: "none",
                          },
                        }}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon sx={{ width: "20px" }} />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                          sx={{
                            color: "#7f7d85",
                            borderRadius: 0,

                            "&.MuiAccordionSummary-root": {
                              padding: 0,
                            },
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "TT Commons, sans-serif",
                              fontSize: "12px",
                              opacity: "0.7",
                            }}
                          >
                            {ele.label}
                          </span>
                        </AccordionSummary>
                        <AccordionDetails
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "4px",
                          }}
                        >
                          {ele.label === "PRICE" &&
                            <div>
                              <Slider
                                className='netWtSecSlider'
                                getAriaLabel={() => 'Minimum distance'}
                                value={value1}
                                min={minPrice}
                                max={maxPrice}
                                size="small"
                                onChange={handlePriceChange}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                                disableSwap
                              />
                              <div className="d-flex w-100 justify-content-between align-items-center mt-1">
                                <input value={value1[0]} className="minmaxvalpl" disabled />
                                <input value={value1[1]} className="minmaxvalpl" disabled />
                              </div>
                            </div>}

                          {ele.label === "NETWT" &&
                            <div>
                              <Slider
                                className='netWtSecSlider'
                                getAriaLabel={() => 'Minimum distance'}
                                value={value2}
                                min={minNetwt}
                                max={maxNetwt}
                                size="small"
                                onChange={handleNetWtChange}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                                disableSwap
                              />
                              <div className="d-flex w-100 justify-content-between align-items-center mt-1">
                                <input value={value2[0]} className="minmaxvalpl" disabled />
                                <input value={value2[1]} className="minmaxvalpl" disabled />
                              </div>
                            </div>
                          }

                          {ele.label === "GROSSWT" &&
                            <div>
                              <Slider
                                className='netWtSecSlider'
                                getAriaLabel={() => 'Minimum distance'}
                                value={value3}
                                min={minGrosswt}
                                max={maxGrosswt}
                                size="small"
                                onChange={handlegrossWtChange}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                                disableSwap
                              />
                              <div className="d-flex w-100 justify-content-between align-items-center mt-1">
                                <input value={value3[0]} className="minmaxvalpl" disabled />
                                <input value={value3[1]} className="minmaxvalpl" disabled />
                              </div>
                            </div>
                          }

                          {ele.label === "DIAMONDWT" &&
                            <div>
                              <Slider
                                className='netWtSecSlider'
                                getAriaLabel={() => 'Minimum distance'}
                                value={value4}
                                min={minDiamondWt}
                                max={maxDiamondWt}
                                size="small"
                                onChange={handleDiamondChange}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                                disableSwap
                              />
                              <div className="d-flex w-100 justify-content-between align-items-center mt-1">
                                <input value={value4[0]} className="minmaxvalpl" disabled />
                                <input value={value4[1]} className="minmaxvalpl" disabled />
                              </div>
                            </div>
                          }

                          {ele.filterList.map((flist, i) => (
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                              }}
                              key={i}
                            >
                              <Checkbox
                                name={`checkbox${index + 1}${i + 1}`}
                                checked={
                                  filterChecked[`checkbox${index + 1}${i + 1}`]
                                    ?.checked
                                }
                                style={{
                                  color: "#7f7d85",
                                  padding: 0,
                                  width: "10px",
                                }}
                                onClick={(e) =>
                                  handleCheckboxChange(e, ele, flist)
                                }
                                size="small"
                              />
                              <small
                                style={{
                                  fontFamily: "TT Commons, sans-serif",
                                  color: "#7f7d85",
                                  textTransform: "lowercase",
                                }}
                              >
                                {flist}
                              </small>
                            </div>
                          ))}
                        </AccordionDetails>
                      </Accordion>
                    </>
                  ))}
                </div>
              </div>
              {/* for mobile */}
              {/* <Drawer
                anchor="bottom"
                open={isOpenDetail}
                onClose={toggleDetailDrawer}
              >
                {list("bottom")}
              </Drawer> */}

              <Drawer
                anchor="bottom"
                open={isOpenShoryBy}
                onClose={toggleShoryBy}
              >
                {Newlist("bottom")}
              </Drawer>


              <div
                style={{
                  width: "80%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "40px 50px 0px 0px",
                }}
                className="smilingProductImageMain"
                id="smilingProductImageMain"
              >
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: 'column'
                  }}
                >
                  {/* <div style={{ display: 'flex', position: 'fixed', width: '100%', alignItems: 'center', padding: '0px 0px 0px 5px', borderBottom: '1px solid lightgray', backgroundColor: 'white', zIndex: '111111' }}>
                    <FiArrowLeft style={{ height: '25px', width: '25px' }} onClick={() => navigate('/')} />
                    <div style={{ width: '85%', display: 'flex', justifyContent: 'center' }}>
                      <img src={titleImg} className="MainlogogMobileImage" />
                    </div>
                  </div> */}

                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      marginTop: '15%',
                      paddingLeft: '2px'
                    }}
                    className="smilingAllProductDataMainMobile"
                  >
                    {(newProData?.length ? newProData : ProductApiData2)?.map((products, i) => (

                      <div
                        style={{
                          width: "33.33%",
                          textAlign: "center",
                          color: "#7d7f85",
                          position: "relative",
                          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                          borderRadius: '10px',
                          zIndex: 0,
                        }}
                        className="smilingProductImageBox"

                      >
                        <div onClick={() => handelProductSubmit(products)}>
                          <img
                            className="prod_img"
                            src={
                              hoveredImageUrls[i] ? hoveredImageUrls[i] : // Check if hover image URL exists
                                (products?.MediumImagePath ?
                                  (products?.imagepath + products?.MediumImagePath?.split(",")[0])
                                  :
                                  notFound)
                            }
                            onMouseEnter={() => handleHoverImageShow(products?.MediumImagePath?.split(",")[0], i, products?.RollOverImageName, products?.imagepath)}
                            // onMouseEnter={() => handleHoverImageShow(products?.MediumImagePath?.split(",")[0], i, isColorWiseImageShow === 1 ? products?.ColorWiseRollOverImageName : products?.RollOverImageName, products?.imagepath)}
                            onMouseLeave={() => handleMouseLeave(i)}
                            style={{ objectFit: 'cover' }}
                            alt="#"
                          />
                        </div>
                        <div className="productTitleLine">
                          {/* <p
                            style={{
                              fontSize: "13px",
                              textTransform: "uppercase",
                              fontWeight: "500",
                              cursor: "pointer",
                              textoverflow: "ellipsis",
                              height: '35px',
                              overflow: 'hidden',
                              margin: '3px'
                            }}
                            className="smilingProductDeatilTitleMobile"
                          >
                            {products?.TitleLine}
                          </p> */}
                        </div>
                        <div>
                          <div className="mobileDeatilDiv1" style={{ display: 'flex', justifyContent: 'space-between', marginInline: '3px' }}>
                            {ismetalWShow === 1 &&
                              <div style={{width: '35.33%'}}>
                                <p className="mobileDeatilDiv1Text1" style={{ margin: '0px', fontSize: '11px' }}>NWT : <span style={{ fontWeight: 600, marginRight: '15px' }}>{(products?.netwt).toFixed(2)}</span></p>
                              </div>}
                            <p className="mobileDeatilDiv1Text2" style={{ margin: '0px 15px 0px 0px', fontSize: '11px', fontWeight: '600' }}>{products?.designno}</p>
                            {isGrossWShow === 1 && <div>
                              <p className="mobileDeatilDiv1Text1" style={{ margin: '0px', fontSize: '11px' }}>GWT : <span style={{ fontWeight: 600 }}>{(products?.Grossweight).toFixed(2)}</span></p>
                            </div>}
                          </div>
                          <div className="mobileDeatilDiv1" style={{ display: 'flex', justifyContent: 'center', marginBlock: '5px' }}>

                            <p style={{ fontSize: "15px", fontWeight: 'bold', margin: '0px' }} className="mobileDeatilDiv1Text2">
                              {isPriceShow === 1 &&
                                <span className="feature-count" style={{ display: 'flex' }}>
                                  <div className="currencyFont" dangerouslySetInnerHTML={{ __html: decodeEntities(currData?.Currencysymbol) }} />
                                  {((products?.UnitCost ?? 0) + (products?.price ?? 0) + (products?.markup ?? 0)).toFixed(2)}</span>
                              }
                            </p>
                          </div>
                          {/* <div style={{ display: 'flex', width: '100%', justifyContent: 'center', margin: '5px 0px 5px 0px' }}>
                            <button className='smilingAddCartBrtnList' onClick={(e) => handelCartList(products?.checkFlag, products)}>{products?.checkFlag ? 'REMOVE CART' : 'ADD TO CART'}</button>
                          </div> */}
                        </div>
                        <div style={{ position: "absolute", width: '87%', marginInline: "7%", justifyContent: 'space-between', zIndex: 999999, top: 10, right: 0, display: 'flex' }}>
                          <div style={{ border: '1px solid rgb(186 194 219)', borderRadius: '50px' }}>
                            <Checkbox
                              icon={
                                <LocalMallOutlinedIcon
                                  sx={{ fontSize: "17px", color: "rgb(186 194 219)" }}
                                />
                              }
                              checkedIcon={
                                <LocalMallIcon
                                  sx={{ fontSize: "17px", color: "rgb(186 194 219)" }}
                                />
                              }
                              disableRipple={true}
                              sx={{ padding: "5px" }}

                              checked={products?.checkFlag}
                              onChange={(e) => handelCartList(e, products)}
                            />
                          </div>

                          <div style={{ border: '1px solid rgb(186 194 219)', borderRadius: '50px' }}>
                            <Checkbox
                              icon={
                                <FavoriteBorderIcon
                                  sx={{ fontSize: "17px", color: "rgb(186 194 219)" }}
                                />
                              }
                              checkedIcon={
                                <FavoriteIcon
                                  sx={{ fontSize: "17px", color: "rgb(186 194 219)" }}
                                />
                              }
                              disableRipple={true}
                              sx={{ padding: "5px" }}

                              checked={products?.wishCheck}
                              onChange={(e) => handelWishList(e, products)}
                            />

                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductList;


