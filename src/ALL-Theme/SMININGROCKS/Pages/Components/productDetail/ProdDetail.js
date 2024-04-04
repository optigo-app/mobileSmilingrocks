import React, { useState, useEffect } from 'react'
import './proddetail.css'
import Header from '../home/Header/Header'
import Footer from '../home/Footer/Footer'
import SmilingRock from '../home/smiling_Rock/SmilingRock'
import { Checkbox, Divider, Skeleton } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import filterData from '../../jsonFile/M_4_95oztttesi0o50vr.json'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { CommonAPI } from '../../../Utils/API/CommonAPI'
import { GetCount } from '../../../Utils/API/GetCount'
import { CartListCounts, WishListCounts, designSet, colorstoneQualityColorG, diamondQualityColorG, metalTypeG, priceData } from '../../../../../Recoil/atom'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import notFound from '../../assets/image-not-found.png'
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import { useNavigate } from 'react-router-dom'
import playVidoe from '../../assets/paly.png'
import { IoIosPlayCircle } from "react-icons/io";

const ProdDetail = () => {

  const [acc, setAcc] = useState(false);
  const [accNo, setAccNo] = useState('');
  const [imgLoading, setImgLoading] = useState(true);
  const [cartFlag, setCartFlag] = useState(false);
  const [WishListFlag, setWishListFlag] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [WishData, setWishData] = useState([]);
  const [productData, setProductData] = useState();
  const [thumbImg, setThumbImg] = useState();
  const [colorData, setColorData] = useState([]);
  const [sizeData, setSizeData] = useState([]);
  const [getAllFilterSizeData, setGetAllFilterSizeData] = useState([]);
  const [metalFilterData, setMetalFilterData] = useState([]);
  const [daimondFilterData, setDaimondFiletrData] = useState([]);
  const [updatedColorImage, setUpdateColorImage] = useState('');

  const [metalColorData, setMetalColorData] = useState([]);
  const [metalType, setMetalType] = useState([]);
  const [DaimondQualityColor, setDaimondQualityColor] = useState([]);
  const [isMetalCutoMizeFlag, setIsMetalCutoMizeFlag] = useState('');
  const [isDaimondCstoFlag, setIsDaimondCstoFlag] = useState('');
  const [isCColrStoneCustFlag, setIsCColrStoneCustFlag] = useState('');
  const [isPriseShow, setIsPriceShow] = useState()

  const [sizeOption, setSizeOption] = useState();
  const [diaQColOpt, setDiaQColOpt] = useRecoilState(diamondQualityColorG);
  const [mtTypeOption, setmtTypeOption] = useRecoilState(metalTypeG);
  const [cSQopt, setCSQOpt] = useRecoilState(colorstoneQualityColorG);
  const [colorImageData, setColorImageData] = useState([]);
  const [IsColorWiseImagesShow, setIsColorWiseImagesShow] = useState('')
  const [videoUrl, setVideoUrl] = useState('');
  const [completeBackImage, setCompleteBackImage] = useState('');

  const [selectedColor, setSelectedColor] = useState('');
  const [selectedImagePath, setSelectedImagePath] = useState('');
  const [showIcateDesign, setShowEcateDesign] = useState('');

  const [mtPrice, setMetalPrice] = useState(0)
  const [dqcPrice, setDQCPrice] = useState(0)
  const [csqcPrice, setCSQCPrice] = useState(0)
  const [grandTotal, setGrandTotal] = useState(0)

  const [designSetList, setDesignSetList] = useState([]);
  const [sizeMarkup, setSizeMarkup] = useState();

  const [mtrdData, setMtrdData] = useState([])
  const [dqcData, setDqcData] = useState([])
  const [csqcData, setCsqcData] = useState([])

  const setCartCount = useSetRecoilState(CartListCounts)
  const setWishCount = useSetRecoilState(WishListCounts)
  const getPriceData = useRecoilValue(priceData);
  const getDesignSet = useRecoilValue(designSet)
  const handelImgLoad = () => {
    setImgLoading(false)
  }

  let currencySymbol = JSON.parse(localStorage.getItem('CURRENCYCOMBO'))
  let navigate = useNavigate()

  useEffect(() => {

    let loginInfo = JSON.parse(localStorage.getItem("loginUserDetail"))
    let ColorStoneQualityColor = JSON.parse(localStorage.getItem("ColorStoneQualityColor"))
    setmtTypeOption(loginInfo?.cmboMetalType)

    if (loginInfo?.cmboDiaQualityColor !== "" && !loginInfo?.cmboDiaQualityColor) {
      let qualityColor = `${loginInfo?.cmboDiaQualityColor.split("#@#")[0]?.toUpperCase()}_${loginInfo?.cmboDiaQualityColor.split("#@#")[1]?.toUpperCase()}`
      setDiaQColOpt(qualityColor)
    }
    else {
      if (colorData && colorData?.length) {
        setDiaQColOpt(`${colorData[0]?.Quality}_${colorData[0]?.color}`)
      }
    }

    let csQualColor = `${loginInfo?.cmboCSQualityColor.split("#@#")[0]?.toUpperCase()}-${loginInfo?.cmboCSQualityColor.split("#@#")[1]?.toUpperCase()}`

    let dqcc = ColorStoneQualityColor?.find((dqc) => `${dqc.Quality}-${dqc.color}` === csQualColor)

    if (dqcc) {
      setCSQOpt(csQualColor)
    } else {
      let ref = `${ColorStoneQualityColor[0].Quality}-${ColorStoneQualityColor[0].color}`
      setCSQOpt(ref)
    }

    setSizeOption(sizeData[1]?.id)

  }, [colorData])

  // useEffect(()=>{

  //   let srProductsData = JSON.parse(localStorage.getItem('srProductsData'));

  //       let mtrd = getPriceData?.rd?.filter((ele) => 
  //           ele?.A === srProductsData?.autocode && 
  //           ele?.B === srProductsData?.designno && 
  //           ele?.D === mtTypeOption
  //         )

  //         let showPrice = srProductsData?.price - ((srProductsData?.price - srProductsData?.metalrd) + (mtrd[0].Z ?? 0))

  //         // setMetalPrice(showPrice)

  //       let diaqcprice = getPriceData?.rd1?.filter((ele) => 
  //         ele.A === srProductsData?.autocode && 
  //         ele.B === srProductsData?.designno &&
  //         ele.H === diaQColOpt?.split("_")[0] &&
  //         ele.J === diaQColOpt?.split("_")[1] 
  //         )

  //         let showPrice1 = srProductsData?.price-((srProductsData?.price - srProductsData?.diard1) + (diaqcprice[0].S ?? 0))
  //         // setDQCPrice(showPrice1)

  //       let csqcpirce = getPriceData?.rd2?.filter((ele) => 
  //         ele.A === srProductsData?.autocode && 
  //         ele.B === srProductsData?.designno &&
  //         ele.H === cSQopt?.split("-")[0] &&
  //         ele.J === cSQopt?.split("-")[1]   
  //         )

  //         let showPrice2 = srProductsData?.price -((srProductsData?.price - srProductsData?.csrd2) + (csqcpirce[0].S ?? 0));
  //         // setCSQCPrice(showPrice2)

  //         let showPriceall = (srProductsData?.price - srProductsData?.metalrd) + (mtrd[0]?.Z ?? 0)

  //         console.log({showPrice,showPrice1,showPrice2});
  //         let gt = showPrice + showPrice1 + showPrice2;
  //         setGrandTotal(gt ?? 0)

  // },[mtTypeOption,diaQColOpt,cSQopt])

  // useEffect(()=>{

  //   let srProductsData = JSON.parse(localStorage.getItem('srProductsData'));

  //       let diaqcprice = getPriceData?.rd1?.filter((ele) => 
  //           ele.A === srProductsData?.autocode && 
  //           ele.B === srProductsData?.designno &&
  //           ele.H === diaQColOpt?.split("_")[0] &&
  //           ele.J === diaQColOpt?.split("_")[1] 
  //           )

  //           let showPrice = (srProductsData?.price - srProductsData?.diard1) + (diaqcprice[0]?.S ?? 0)
  //           setDQCPrice(showPrice)

  // },[diaQColOpt])

  // useEffect(() => {
  //   let srProductsData = JSON.parse(localStorage.getItem('srProductsData'));

  //       let csqcpirce = getPriceData?.rd2?.filter((ele) => 
  //           ele.A === srProductsData?.autocode && 
  //           ele.B === srProductsData?.designno &&
  //           ele.H === cSQopt?.split("-")[0] &&
  //           ele.J === cSQopt?.split("-")[1]   
  //           )

  //           let showPrice = ((srProductsData?.price - srProductsData?.csrd2) + (csqcpirce[0]?.S ?? 0));
  //           setCSQCPrice(showPrice)


  // },[cSQopt])

  // useEffect(() => {
  //   let mt = (mtPrice) 
  //   let dqc = (dqcPrice)
  //   let csqc = (csqcPrice)

  //   console.log("mt,dqc,csqc",mt,dqc,csqc)
  //   // console.log("in usee", (mtPrice === NaN ? 0 :mtPrice), (dqcPrice === NaN ? 0 : dqcPrice), (csqcPrice === NaN ? 0 : csqcPrice));
  //   // let gt = (gt === NaN ? 0 : gt);
  //   // setGrandTotal(gt)

  // },[mtPrice, dqcPrice, csqcPrice])

  // console.log("ppp",{mtrdData,dqcData,csqcData})

  let diaUpdatedPrice = () => {
    let srProductsData = JSON.parse(localStorage.getItem('srProductsData'))

    if (daimondFilterData && daimondFilterData.length) {

      let calcDiaWt = (srProductsData?.diamondweight ?? 0) + (daimondFilterData?.Weight ?? 0)

      let CalcPics = (srProductsData?.diamondpcs ?? 0) + (daimondFilterData?.pieces ?? 0)

      let fpprice = ((dqcData?.O ?? 0) * (calcDiaWt ?? 0)) + ((dqcData?.Q ?? 0) * (CalcPics ?? 0))

      return fpprice
    }
    else {
      return 0
    }

  }

  let colUpdatedPrice = () => {

    let srProductsData = JSON.parse(localStorage.getItem('srProductsData'))

    if (daimondFilterData && daimondFilterData.length) {


      let calcDiaWt = (srProductsData?.totalcolorstoneweight ?? 0) + (daimondFilterData?.Weight ?? 0)

      let CalcPics = (srProductsData?.totalcolorstonepcs ?? 0) + (daimondFilterData?.pieces ?? 0)

      let fpprice = ((csqcData?.O ?? 0) * (calcDiaWt ?? 0)) + ((csqcData?.Q ?? 0) * (CalcPics ?? 0))

      return fpprice
    } else {
      return 0
    }

  }

  let metalUpdatedPrice = () => {

    let srProductsData = JSON.parse(localStorage.getItem('srProductsData'));

    if (metalFilterData && metalFilterData.length) {

      let CalcNetwt = (srProductsData?.netwt ?? 0) + (metalFilterData?.Weight ?? 0)
      console.log("CalcNetwt", CalcNetwt)

      let fprice = (mtrdData?.AD * CalcNetwt) + (mtrdData?.AC * CalcNetwt)

      return fprice
    } else {
      return 0
    }


  }

  useEffect(() => {
    let srProductsData = JSON.parse(localStorage.getItem('srProductsData'));

    let mtrd = getPriceData?.rd?.filter((ele) =>
      ele?.A === srProductsData?.autocode &&
      ele?.B === srProductsData?.designno &&
      ele?.D === mtTypeOption
    );

    console.log("mtrddetail",mtrd);

    let showPrice = 0;
    if (mtrd && mtrd.length > 0) {
      showPrice = srProductsData?.price - ((srProductsData?.price - srProductsData?.metalrd) + (mtrd[0]?.Z ?? 0));
      setMtrdData(mtrd[0] ?? [])
      setMetalPrice(mtrd[0]?.Z ?? 0)
    }

    let diaqcprice = getPriceData?.rd1?.filter((ele) =>
      ele.A === srProductsData?.autocode &&
      ele.B === srProductsData?.designno &&
      ele.H === diaQColOpt?.split("_")[0] &&
      ele.J === diaQColOpt?.split("_")[1]
    );



    let showPrice1 = 0;
    if (diaqcprice && diaqcprice.length > 0) {
      showPrice1 = srProductsData?.price - ((srProductsData?.price - srProductsData?.diard1) + (diaqcprice[0]?.S ?? 0));
      setDqcData(diaqcprice[0] ?? [])
      setDQCPrice(diaqcprice[0]?.S ?? 0)
    }

    let csqcpirce = getPriceData?.rd2?.filter((ele) =>
      ele.A === srProductsData?.autocode &&
      ele.B === srProductsData?.designno &&
      ele.H === cSQopt?.split("-")[0] &&
      ele.J === cSQopt?.split("-")[1]
    );

    let showPrice2 = 0;
    if (csqcpirce && csqcpirce.length > 0) {
      showPrice2 = srProductsData?.price - ((srProductsData?.price - srProductsData?.csrd2) + (csqcpirce[0]?.S ?? 0));
      setCsqcData(csqcpirce[0] ?? [])
      setCSQCPrice(csqcpirce[0]?.S ?? 0)
    }

    // let p1=[];
    // let p2=[];
    // let p3=[];

    // if (mtrd) {
    //   p1.push(mtrd)
    // }

    // if (diaqcprice) {
    //   p2.push(diaqcprice)
    // }

    // if (csqcpirce) {
    //   p3.push(csqcpirce)
    // }

    // console.log("ppp",{mtrd,diaqcprice,csqcpirce})

    let gt = showPrice + showPrice1 + showPrice2;
    setGrandTotal(gt ?? 0);

  }, [mtTypeOption, diaQColOpt, cSQopt])



  const handelLocalStorage = () => {
    handleColorSelection('Rose Gold');
    let localProductData = JSON.parse(localStorage.getItem('srProductsData'))
    setProductData(localProductData)
    getColorImagesData(localProductData.autocode);
    getTheImageSetImage(localProductData.autocode);
    setWishListFlag(localProductData?.wishCheck)
    setCartFlag(localProductData?.checkFlag)
    getSizeData(localProductData.autocode);
  }

  useEffect(() => {
    handelLocalStorage();
  }, [])

  const getTheImageSetImage = (autoCode) => {
    const storedData = localStorage.getItem('designsetlist');
    const jsonData = JSON.parse(storedData);
    const filteredData = jsonData.filter(item => item.autocode === autoCode);
    console.log('fffffffffffffffffffffffffffffffffff', filteredData);
    if (filteredData.DefaultImageName) {
      console.log('fffffffffffffffffffffffffffffffffff', filteredData);
      setCompleteBackImage(filteredData.DefaultImageName);
    }
  }

  useEffect(() => {
    const storedDataAll = localStorage.getItem('srProductsData');
    const data = JSON.parse(storedDataAll);
    setVideoUrl(data.videoName);
    console.log('videoUrlvideoUrlvideoUrl', videoUrl);


    let allProductData = JSON.parse(localStorage.getItem('allproductlist'))

    let designListData = productData?.SetDno?.split(",")

    let arrFinal = [];

    designListData?.filter((dld) => {

      let findData = allProductData?.find((ele) => ele.designno === dld)
      // console.log("findData",findData);

      if (findData !== undefined) {
        arrFinal.push(findData)
      }
    })

    if (arrFinal) {
      setDesignSetList(arrFinal)
    } else {
      setDesignSetList([])
    }
  }, [productData])

  const getColorImagesData = (autoCode) => {
    const storedData = JSON.parse(localStorage.getItem('colorDataImages'));
    if (!storedData) {
      return;
    }
    const filteredData = storedData.filter(item => item.autocode === autoCode);
    setColorImageData(filteredData)
  }

  useEffect(() => {
  }, [colorImageData]);


  function convertPath(path) {
    return path.replace(/\\/g, '/');
  }


  useEffect(() => {
    let uploadPath = localStorage.getItem('UploadLogicalPath');
    const storedDataAll = localStorage.getItem('storeInit');
    const data = JSON.parse(storedDataAll);
    setShowEcateDesign(data.IsEcatDesignset);

    if (data.IsColorWiseImages === 1) {
      const filteredData = colorImageData.filter(item => item.colorname.toLowerCase() === selectedColor.toLowerCase());
      if (filteredData.length > 0) {
        const correctedData = filteredData.map(item => {
          return {
            ...item,
            imagepath: convertPath(item.imagepath)
          };
        });

        correctedData.forEach(item => {
          item.imagepath = uploadPath + '/' + data.ukey + item.imagepath;
        });

        correctedData.forEach((item, index) => {
          correctedData[index] = item;
        });

        setTimeout(() => {
          setUpdateColorImage(correctedData);
        }, 100);

      } else {
        setUpdateColorImage('');
      }
    }

  }, [selectedColor])


  console.log("selectedcolor",selectedColor);

  const handleColorSelection = (color) => {
    let uploadPath = localStorage.getItem('UploadLogicalPath');
    const storedDataAll = localStorage.getItem('storeInit');
    const data = JSON.parse(storedDataAll);
    if (data.IsColorWiseImages === 1) {
      const selectedColor = color;
      setSelectedColor(selectedColor);
      const filteredData = colorImageData.filter(item => item.colorname.toLowerCase() === selectedColor.toLowerCase());
      if (filteredData.length > 0) {
        const correctedData = filteredData.map(item => {
          return {
            ...item,
            imagepath: convertPath(item.imagepath)
          };
        });

        correctedData.forEach(item => {
          item.imagepath = uploadPath + '/' + data.ukey + item.imagepath;
        });

        correctedData.forEach((item, index) => {
          correctedData[index] = item;
        });

        setTimeout(() => {
          setUpdateColorImage(correctedData);
        }, 100);
      } else {
        setUpdateColorImage('');
      }


      const selectedColorData = colorImageData.find(item => item.colorname === selectedColor);
      if (selectedColorData) {
        const correctedImagePath = convertPath(selectedColorData.imagepath);
        let path = uploadPath + '/' + data.ukey + correctedImagePath
        setSelectedImagePath(path);
      } else {
        setSelectedImagePath('');
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {

    const storedDataAll = localStorage.getItem('storeInit');
    const data = JSON.parse(storedDataAll);
    setIsMetalCutoMizeFlag(data.IsMetalCustomization);
    setIsDaimondCstoFlag(data.IsDiamondCustomization)
    setIsCColrStoneCustFlag(data.IsCsCustomization)
    setIsPriceShow(data.IsPriceShow);

    const storedData = JSON.parse(localStorage.getItem('QualityColor'));
    if (storedData) {
      setColorData(storedData);
    }

    const storedData1 = JSON.parse(localStorage.getItem('ColorStoneQualityColor'));
    if (storedData1) {
      setDaimondQualityColor(storedData1);
    }

    const storedData2 = JSON.parse(localStorage.getItem('MetalTypeData'));
    if (storedData2) {
      setMetalType(storedData2);
    }

    const storedData3 = JSON.parse(localStorage.getItem('MetalColorData'));
    if (storedData3) {
      setMetalColorData(storedData3);
    }
  }, []);

  const getSizeData = async (autoCode) => {
    try {
      const storedEmail = localStorage.getItem('registerEmail') || '';
      const storeInit = JSON.parse(localStorage.getItem('storeInit'));
      const { FrontEnd_RegNo } = storeInit;

      const storedData = localStorage.getItem('loginUserDetail') || '0';
      const data = JSON.parse(storedData);
      const customerid = data?.id;
      let autoC = autoCode
      const combinedValue = JSON.stringify({
        autocode: `${autoC}`, FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerid}`
      });
      const encodedCombinedValue = btoa(combinedValue);
      const body = {
        "con": `{\"id\":\"\",\"mode\":\"CATEGORYSIZECOMBO\",\"appuserid\":\"${storedEmail}\"}`,
        "f": "index (getSizeData)",
        "p": encodedCombinedValue
      }
      const response = await CommonAPI(body);
      if (response.Data?.rd) {
        setSizeData(response.Data.rd)
        setGetAllFilterSizeData(response.Data.rd1)
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {

    }
  }

  const handelmainImg = () => {
    let filterImg = productData?.OriginalImagePath?.split(",").filter((ele, i) => {
      return i === thumbImg
    })

    return filterImg
  }

  const getCountFunc = async () => {

    await GetCount().then((res) => {
      if (res) {
        setCartCount(res.CountCart)
        setWishCount(res.WishCount)
      }
    })

  }

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
  }, [])

  const handelCart = async (event) => {

    try {
      setCartFlag(event.target.checked)

      if (event.target.checked === true) {
        const storeInit = JSON.parse(localStorage.getItem("storeInit"))
        const UserEmail = localStorage.getItem("registerEmail")
        const Customer_id = JSON.parse(localStorage.getItem("loginUserDetail"));

        productData.wishCheck = event.target.checked;
        localStorage.setItem("srProductsData", JSON.stringify(productData))
        const product = productData

        let isWishHasCartData = WishData?.filter((pd) => product.autocode === pd.autocode)

        let WishedData = isWishHasCartData.map((wcd) => wcd.autocode === product.autocode ? product : null)

        if (WishedData.length) {
          WishedData[0].checkFlag = true;
          WishedData[0].wishCheck = false;
          localStorage.setItem("srProductsData", JSON.stringify(WishedData[0]))
          handelLocalStorage()
        }


        let wishToCartEncData = { "autocodelist": `${productData?.autocode}`, "ischeckall": 0, "FrontEnd_RegNo": `${storeInit?.FrontEnd_RegNo}`, "Customerid": `${Customer_id?.id}` }

        // const finalJSON = {
        //   "stockweb_event": "",
        //   "designno": `${product?.designno}`,
        //   "autocode": `${product?.autocode}`,
        //   "imgrandomno": `${product?.imgrandomno}`,
        //   "producttypeid": `${product?.Producttypeid}`,
        //   "metaltypeid": `${product?.MetalTypeid}`,
        //   "metalcolorid": `${product?.MetalColorid}`,
        //   "stockno": "",
        //   "DQuality": `${product?.diamondquality.split(",")[0]}`,
        //   "DColor": `${product?.diamondcolorname}`,
        //   "cmboMetalType": `${product?.MetalTypeName} ${product?.MetalPurity}`,
        //   "AdditionalValWt": Number(`${product?.AdditionalValWt}`),
        //   "BrandName": `${product?.BrandName ?? ""}`,
        //   "Brandid": Number(`${product?.Brandid}`),
        //   "CategoryName": `${product?.CategoryName}`,
        //   "Categoryid": Number(`${product?.Categoryid}`),
        //   "CenterStoneId": Number(`${product?.CenterStoneId}`),
        //   "CenterStonePieces": Number(`${product?.CenterStonePieces}`),
        //   "CollectionName": `${product?.CollectionName}`,
        //   "Collectionid": Number(`${product?.Collectionid}`),
        //   "ColorWiseRollOverImageName": `${product?.ColorWiseRollOverImageName}`,
        //   "DefaultImageName": `${product?.DefaultImageName}`,
        //   "DisplayOrder": Number(`${product?.DisplayOrder}`),
        //   "FrontEnd_OrderCnt": Number(`${product?.FrontEnd_OrderCnt}`),
        //   "GenderName": `${product?.GenderName}`,
        //   "Genderid": Number(`${product?.Genderid}`),
        //   "Grossweight": Number(`${product?.Grossweight}`),
        //   "InReadyStockCnt": Number(`${product?.InReadyStockCnt}`),
        //   "IsBestSeller": Number(`${product?.IsBestSeller}`),
        //   "IsColorWiseImageExists": `${product?.IsColorWiseImageExists ?? 0}`,
        //   "IsInReadyStock": Number(`${product?.IsInReadyStock}`),
        //   "IsNewArrival": `${product?.IsNewArrival}`,
        //   "IsRollOverColorWiseImageExists": `${product?.IsRollOverColorWiseImageExists}`,
        //   "IsTrending": Number(`${product?.IsTrending}`),
        //   "MasterManagement_labid": Number(`${product?.MasterManagement_labid}`),
        //   "MasterManagement_labname": "",
        //   "MetalColorName": `${product?.MetalColorName}`,
        //   "MetalColorid": Number(`${product?.MetalColorid}`),
        //   "MetalPurity": `${product?.MetalPurity}`,
        //   "MetalPurityid": Number(`${product?.MetalTypeid}`),
        //   "MetalTypeName": `${product?.MetalTypeName}`,
        //   "MetalTypeid": Number(`${product?.IsInReadyStock}`),
        //   "MetalWeight": Number(`${product?.MetalWeight}`),
        //   "OcassionName": `${product?.OcassionName ?? ""}`,
        //   "Ocassionid": Number(`${product?.Ocassionid}`),
        //   "ProducttypeName": `${product?.ProducttypeName}`,
        //   "Producttypeid": Number(`${product?.Producttypeid}`),
        //   "RollOverImageName": `${product?.RollOverImageName}`,
        //   "SubCategoryName": `${product?.SubCategoryName ?? ""}`,
        //   "SubCategoryid": Number(`${product?.SubCategoryid}`),
        //   "ThemeName": `${product?.ThemeName ?? ""}`,
        //   "Themeid": Number(`${product?.Themeid}`),
        //   "TitleLine": `${product?.TitleLine}`,
        //   "UnitCost": Number(`${product?.UnitCost}`),
        //   "UnitCostWithmarkup": Number(`${product?.UnitCostWithmarkup}`),
        //   "colorstonecolorname": `${product?.colorstonecolorname}`,
        //   "colorstonequality": `${product?.colorstonequality}`,
        //   "diamondcolorname": `${product?.diamondcolorname}`,
        //   "diamondpcs": Number(`${product?.diamondpcs}`),
        //   "diamondquality": `${product?.diamondquality.split(",")[0]}`,
        //   "diamondsetting": `${product?.diamondsetting}`,
        //   "diamondshape": `${product?.diamondshape}`,
        //   "diamondweight": Number(`${product?.diamondweight}`),
        //   "encrypted_designno": `${product?.encrypted_designno}`,
        //   "hashtagid": `${product?.hashtagid}`,
        //   "hashtagname": `${product?.hashtagname}`,
        //   "imagepath": `${product?.imagepath}`,
        //   "mediumimage": `${product?.mediumimage ?? ""}`,
        //   "originalimage": `${product?.originalimage}`,
        //   "storyline_html": `${product?.storyline_html}`,
        //   "storyline_video": `${product?.storyline_video}`,
        //   "thumbimage": `${product?.thumbimage}`,
        //   "totaladditionalvalueweight": Number(`${product?.totaladditionalvalueweight}`),
        //   "totalcolorstoneweight": Number(`${product?.totalcolorstoneweight}`),
        //   "totaldiamondweight": Number(`${product?.totaldiamondweight}`),
        //   "updatedate": `${product?.updatedate}`,
        //   "videoname": `${product?.videoname ?? ""}`,
        //   "FrontEnd_RegNo": `${storeInit?.FrontEnd_RegNo}`,
        //   "Customerid": `${Customer_id?.id}`,
        //   "PriceMastersetid": `${product?.PriceMastersetid ?? ""}`,
        //   "quantity": `${product?.quantity ?? "1"}`
        // }

        const finalJSON = {
          "stockweb_event": "",
          "designno": `${product?.designno}`,
          "autocode": `${product?.autocode}`,
          "imgrandomno": `${product?.imgrandomno}`,
          "producttypeid": `${product?.Producttypeid}`,
          "metaltypeid": `${product?.MetalTypeid}`,
          "metalcolorid": `${product?.MetalColorid}`,
          "stockno": "",
          "DQuality": `${(diaQColOpt ? diaQColOpt?.split('_')[0] : product?.diamondquality?.split(",")[0])}`,
          "DColor": `${diaQColOpt ? diaQColOpt?.split('_')[1] : product?.diamondcolorname}`,
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
          "MetalColorName": `${selectedColor ?? product?.MetalColorName}`,
          "MetalColorid": Number(`${product?.MetalColorid}`),
          "MetalPurity": `${mtTypeOption ? (mtTypeOption?.split(' ')[1]) : product?.MetalPurity}`,
          "MetalPurityid": Number(`${product?.MetalTypeid}`),
          "MetalTypeName": `${mtTypeOption ? mtTypeOption?.split(' ')[0] : product?.MetalTypeName}`,
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
          "UnitCost": `${product?.UnitCost ?? 0}`,
          // "UnitCost": `${(product?.UnitCost + mtrdData?.Z + (dqcData?.S ?? 0) + (csqcData?.S ?? 0) + (sizeMarkup ?? 0) + (metalUpdatedPrice() ?? 0) + (diaUpdatedPrice() ?? 0) + (colUpdatedPrice() ?? 0)).toFixed(2)}`,
          // "UnitCostWithmarkup":(`${(product?.price === "Not Available" ? 0 : product?.price) + (product?.markup ?? 0)}`),
          "UnitCostWithmarkup": (`${(product?.UnitCost ?? 0) + (product?.markup ?? 0)}`),
          "colorstonecolorname": `${cSQopt ? cSQopt?.split('-')[1] : product?.colorstonecolorname}`,
          "colorstonequality": `${cSQopt ? cSQopt?.split('-')[0] : product?.colorstonequality}`,
          // "diamondcolorname": `${product?.diamondcolorname ? product?.diamondcolorname : diaQColOpt?.split('_')[1]}`,
          "diamondcolorname": `${diaQColOpt ? diaQColOpt?.split('_')[1] : product?.diamondcolorname}`,
          "diamondpcs": Number(`${product?.diamondpcs}`),
          // "diamondquality": `${(product?.diamondquality?.split(",")[0]) ? product?.diamondquality?.split(",")[0] : diaQColOpt?.split('_')[0]}`,
          "diamondquality": `${(diaQColOpt ? diaQColOpt?.split('_')[0] : product?.diamondquality?.split(",")[0])}`,
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
          "detail_ringsize": `${sizeOption ? (sizeOption ?? "") : (product?.detail_ringsize ?? "")}`,
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
          f: "AddToCartIconClick (ADDTOCART)",
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
            getCountFunc()
          }
        })

      }
      else {
        const storeInit = JSON.parse(localStorage.getItem("storeInit"))
        const UserEmail = localStorage.getItem("registerEmail")
        const Customer_id = JSON.parse(localStorage.getItem("loginUserDetail"));

        productData.wishCheck = false;
        localStorage.setItem("srProductsData", JSON.stringify(productData))

        let prod = productData

        // setCartRemoveData(prod.designno)

        let Data = { "designno": `${prod?.designno}`, "autocode": `${prod?.autocode}`, "metalcolorid": 0, "isSolStockNo": 0, "is_show_stock_website": "0", "isdelete_all": 0, "FrontEnd_RegNo": `${storeInit?.FrontEnd_RegNo}`, "Customerid": `${Customer_id?.id}`, "cartidlist": "" }

        let encodedCombinedValue = btoa(JSON.stringify(Data))
        const body = {
          con: `{\"id\":\"\",\"mode\":\"removeFromCartList\",\"appuserid\":\"${UserEmail}\"}`,
          f: "RemoveFromCartIconClick (removeFromCartList)",
          p: encodedCombinedValue,
        }

        await CommonAPI(body).then(async (res) => {
          if (res?.Data?.rd[0]?.stat_msg === "success") {
            // removefromCart()
            await getCartAndWishListData()
            // await getCountApi()
            getCountFunc()
            // removefromCart(prod)
          }
        })

      }

    }
    catch (error) {
      console.log("error", error);
    }

  }


  const handelWishList = async (event) => {

    try {
      setWishListFlag(event.target.checked)

      if (event.target.checked === true) {

        const storeInit = JSON.parse(localStorage.getItem("storeInit"))
        const UserEmail = localStorage.getItem("registerEmail")
        const Customer_id = JSON.parse(localStorage.getItem("loginUserDetail"));


        productData.wishCheck = event.target.checked;
        // setWishListFlag(e.target.checked)
        localStorage.setItem("srProductsData", JSON.stringify(productData))

        const product = productData


        // const finalJSON = {
        //   "stockweb_event": "",
        //   "Mastermanagement_CategorySize": "",
        //   "sizeamountpersentage": "",
        //   "stockno": "",
        //   "is_show_stock_website": "0",
        //   "cmboDiaQualityColor": "C-VS#@#FG",
        //   "cmboMetalType": `${product?.MetalTypeName} ${product?.MetalPurity}`,
        //   "AdditionalValWt": Number(`${product?.AdditionalValWt}`),
        //   "BrandName": `${product?.BrandName ?? ""}`,
        //   "Brandid": 5,
        //   "CategoryName": `${product?.CategoryName}`,
        //   "Categoryid": Number(`${product?.Categoryid}`),
        //   "CenterStoneId": Number(`${product?.CenterStoneId}`),
        //   "CenterStonePieces": Number(`${product?.CenterStonePieces}`),
        //   "CollectionName": `${product?.CollectionName}`,
        //   "Collectionid": Number(`${product?.Collectionid}`),
        //   "ColorWiseRollOverImageName": `${product?.ColorWiseRollOverImageName}`,
        //   "DefaultImageName": `${product?.DefaultImageName}`,
        //   "DisplayOrder": Number(`${product?.DisplayOrder}`),
        //   "FrontEnd_OrderCnt": Number(`${product?.FrontEnd_OrderCnt}`),
        //   "GenderName": `${product?.GenderName}`,
        //   "Genderid": Number(`${product?.Genderid}`),
        //   "Grossweight": Number(`${product?.Grossweight}`),
        //   "InReadyStockCnt": Number(`${product?.InReadyStockCnt}`),
        //   "IsBestSeller": Number(`${product?.IsBestSeller}`),
        //   "IsColorWiseImageExists": `${product?.IsColorWiseImageExists}`,
        //   "IsInReadyStock": Number(`${product?.IsInReadyStock}`),
        //   "IsNewArrival": `${product?.IsNewArrival}`,
        //   "IsRollOverColorWiseImageExists": `${product?.IsRollOverColorWiseImageExists}`,
        //   "IsTrending": Number(`${product?.IsTrending}`),
        //   "MasterManagement_labid": Number(`${product?.MasterManagement_labid}`),
        //   "MasterManagement_labname": "",
        //   "MetalColorName": `${product?.MetalColorName}`,
        //   "MetalColorid": Number(`${product?.MetalColorid}`),
        //   "MetalPurity": `${product?.MetalPurity}`,
        //   "MetalPurityid": Number(`${product?.MetalTypeid}`),
        //   "MetalTypeName": `${product?.MetalTypeName ?? ""}`,
        //   "MetalTypeid": Number(`${product?.IsInReadyStock}`),
        //   "MetalWeight": Number(`${product?.MetalWeight}`),
        //   "OcassionName": `${product?.OcassionName ?? ""}`,
        //   "Ocassionid": Number(`${product?.Ocassionid}`),
        //   "ProducttypeName": `${product?.ProducttypeName}`,
        //   "Producttypeid": Number(`${product?.Producttypeid}`),
        //   "RollOverImageName": `${product?.RollOverImageName}`,
        //   "SubCategoryName": `${product?.SubCategoryName ?? ""}`,
        //   "SubCategoryid": Number(`${product?.SubCategoryid ?? ""}`),
        //   "ThemeName": `${product?.ThemeName ?? ""}`,
        //   "Themeid": Number(`${product?.Themeid}`),
        //   "TitleLine": `${product?.TitleLine}`,
        //   "UnitCost": Number(`${product?.UnitCost}`),
        //   "UnitCostWithmarkup": Number(`${product?.UnitCostWithmarkup}`),
        //   "autocode": `${product?.autocode}`,
        //   "colorstonecolorname": `${product?.colorstonecolorname}`,
        //   "colorstonequality": `${product?.colorstonequality}`,
        //   "designno": `${product?.designno}`,
        //   "diamondcolorname": `${product?.diamondcolorname}`,
        //   "diamondpcs": Number(`${product?.diamondpcs}`),
        //   "diamondquality": `${product?.diamondquality.split(",")[0]}`,
        //   "diamondsetting": `${product?.diamondsetting}`,
        //   "diamondshape": `${product?.diamondshape}`,
        //   "diamondweight": Number(`${product?.diamondweight}`),
        //   "encrypted_designno": `${product?.encrypted_designno}`,
        //   "hashtagid": `${product?.hashtagid}`,
        //   "hashtagname": `${product?.hashtagname}`,
        //   "imagepath": `${product?.imagepath}`,
        //   "imgrandomno": `${product?.imgrandomno}`,
        //   "mediumimage": `${product?.mediumimage ?? ""}`,
        //   "originalimage": `${product?.originalimage}`,
        //   "storyline_html": `${product?.storyline_html}`,
        //   "storyline_video": `${product?.storyline_video}`,
        //   "thumbimage": `${product?.thumbimage}`,
        //   "totaladditionalvalueweight": 0,
        //   "totalcolorstoneweight": Number(`${product?.totalcolorstoneweight}`),
        //   "totaldiamondweight": Number(`${product?.totaldiamondweight}`),
        //   "updatedate": `${product?.updatedate}`,
        //   "videoname": `${product?.videoname ?? ""}`,
        //   "FrontEnd_RegNo": `${storeInit?.FrontEnd_RegNo}`,
        //   "Customerid": `${Customer_id?.id}`,
        //   "PriceMastersetid": `${product?.PriceMastersetid ?? ""}`,
        //   "DQuality": `${product?.diamondquality.split(",")[0]}`,
        //   "DColor": `${product?.diamondcolorname}`,
        //   "UploadLogicalPath": `${product?.UploadLogicalPath ?? ""}`,
        //   "ukey": `${storeInit?.ukey}`
        // }

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
          // "UnitCost": `${product?.price === "Not Available" ? 0 : product?.price}`,
          "UnitCost": `${(productData?.price - grandTotal)?.toFixed(2)}`,
          "UnitCostWithmarkup": (`${(productData?.price - grandTotal)?.toFixed(2) + (product?.markup ?? 0)}`),
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
            // await getCountApi()
            getCountFunc()

          }
        })
      }
      else {
        // {"designlist":"'MCJ10'","isselectall":"0","FrontEnd_RegNo":"95oztttesi0o50vr","Customerid":"856"}


        const storeInit = JSON.parse(localStorage.getItem("storeInit"))
        const UserEmail = localStorage.getItem("registerEmail")
        const Customer_id = JSON.parse(localStorage.getItem("loginUserDetail"));


        let Data = { "designlist": `'${productData?.designno}'`, "isselectall": "0", "FrontEnd_RegNo": `${storeInit?.FrontEnd_RegNo}`, "Customerid": `${Customer_id?.id}` }

        let encodedCombinedValue = btoa(JSON.stringify(Data))
        const body = {
          con: `{\"id\":\"\",\"mode\":\"removeFromWishList\",\"appuserid\":\"${UserEmail}\"}`,
          f: "RemoveFromWishlistIconClick (removeFromWishList)",
          p: encodedCombinedValue,
        }

        await CommonAPI(body).then(async (res) => {
          // console.log("responsePlist",res?.Data?.rd[0]?.msg === "success");
          if (res?.Data?.rd[0]?.stat_msg === "success") {
            // removefromCart()
            await getCartAndWishListData()
            // await getCountApi()
            getCountFunc()
            // removefromCart(prod)
          }
        })

      }



    }
    catch (error) {
      console.log("error", error);
    }
  }

  const handelSize = (data) => {

    const selectedSize = sizeData.find((size) => size.sizename === data);
    if (selectedSize) {
      setSizeMarkup(selectedSize?.MarkUp)
    }
    setSizeOption(data)
    const filteredData = getAllFilterSizeData?.filter(item => item.sizename === data);
    const filteredDataMetal = filteredData?.filter(item => item.DiamondStoneTypeName === "METAL");
    const filteredDataDaimond = filteredData?.filter(item => item.DiamondStoneTypeName === "DIAMOND");
    setMetalFilterData(filteredDataMetal);
    setDaimondFiletrData(filteredDataDaimond);
  }


  const handelDesignSet = (ele) => {
    localStorage.setItem("srProductsData", JSON.stringify(ele))
    // navigate(window.location.pathname)
    handelLocalStorage()
    window.scrollTo(0, 0)
  }


  // console.log('prodddddddddddd', updatedColorImage);
  // console.log('DefaultSizeDefaultSizeDefaultSize', productData?.DefaultSize);
  // console.log('DefaultSizeDefaultSizeDefaultlengthlength', productData?.DefaultSize.length);

  // console.log('daimondFilterDatadaimondFilterData', daimondFilterData);
  console.log("metalFilterData", metalFilterData)
  console.log("daimondFilterData", daimondFilterData)
  console.log('lastPrice', { "unitcost": productData?.UnitCost ?? 0, "mtrdPrice": mtrdData, "dqcDataPrice": dqcData?.S ?? 0, "csqcData": csqcData?.S ?? 0, sizeMarkup, "metalupdatePrice": metalUpdatedPrice(), "diaUpdatedPrice": diaUpdatedPrice(), "colUpdatedPrice": colUpdatedPrice() })
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleClick = () => {
    setIsVideoPlaying(true);
  };

  console.log("cSQopt", cSQopt)


  return (
    <div
      className='paddingTopMobileSet'
      style={{
        backgroundColor: "#c0bbb1",
        height: "100%",
        width: "100%",
        paddingTop: "110px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="prodDetailWhitecont">
          <div className="product-detail-container">
            <div className="srprodetail1">
              {/* {!imgLoading */}

              {imgLoading && (
                <Skeleton
                  sx={{
                    width: "100%",
                    // zindex: 11111,
                    // position: "relative",
                    // objectFit: "cover",
                    marginLeft: "51px",
                    marginTop: "5%",
                    height: "90%",
                    // display: !imgLoading ? "none": "block"
                  }}
                  variant="rounded"
                />
              )}
              {isVideoPlaying ?
                <video src={videoUrl} autoPlay={true} style={{
                  width: "100%",
                  zindex: -1,
                  position: "relative",
                  objectFit: "cover",
                  padding: '10%',
                  marginLeft: "51px",
                  display: imgLoading ? "none" : "block",
                }} />
                :
                <img
                  src={

                    (productData?.OriginalImagePath) ? (selectedImagePath == '' ?
                      productData?.imagepath +
                      (!handelmainImg()?.length
                        ? productData?.OriginalImagePath?.split(",")[0]
                        : handelmainImg())
                      :
                      selectedImagePath)
                      :
                      notFound
                  }
                  alt={""}
                  style={{
                    width: "100%",
                    zindex: -1,
                    position: "relative",
                    objectFit: "cover",
                    marginLeft: "51px",
                    display: imgLoading ? "none" : "block",
                  }}
                  className='smilingDeatilPageMainImage'
                  onLoad={handelImgLoad}
                />
              }
              {updatedColorImage?.length === 0 ?
                <>
                  {productData?.ThumbImagePath && <div className="srthumb_images">
                    {productData?.ThumbImagePath?.split(",").map((data, i) => (
                      <img
                        src={productData?.imagepath + data}
                        alt={""}
                        className="srthumb_images_el"
                        onClick={() => setThumbImg(i)}
                      />
                    ))}

                  </div>}
                </>
                :
                <div>
                  {
                    <div className="srthumb_images">
                      {updatedColorImage?.map((data, i) => (

                        <img
                          src={data.imagepath}
                          alt={""}
                          className="srthumb_images_el"
                          onClick={() => { setSelectedImagePath(data.imagepath); setIsVideoPlaying(false); }}
                        // onClick={() => setThumbImg(data.imagepath)}
                        />
                      ))}

                      {
                        videoUrl && (
                          <div style={{ position: 'relative' }} onClick={handleClick}>
                            <video src={videoUrl} autoPlay={false} className="srthumb_images_el" style={{ position: 'absolute' }} />
                            <IoIosPlayCircle className="srthumb_images_el" style={{ position: 'absolute', height: '45px', top: '10px', border: 'none' }} />
                          </div>
                        )
                      }
                    </div>
                  }
                </div>
              }

            </div>
            <div className="srprodetail2">
              <div className="srprodetail2-cont">
                <p
                  style={{
                    fontSize: "40px",
                    fontFamily: "FreightDisp Pro Medium",
                    color: "#7d7f85",
                    lineHeight: "40px",
                  }}
                  className='smilingProdutDetltTitle'
                >
                  {productData?.TitleLine}
                </p>

                <p style={{ color: "#7d7f85", fontSize: "14px" }}>
                  {/* Slip this open Drizzle Ring from Smiling Rock's iconic
                  collection- Drizzle. It’s an exquisite ring with diamonds all
                  around the ring. The ring creates a wide space to decorate
                  your fingers as much as possible! Featured in lab grown
                  diamonds set in 14K gold, this ring is perfect for your best
                  times. */}
                  {productData?.description}
                </p>

                <div
                  className="part-container"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    borderBottom: "1px solid #e1e1e1",
                    paddingBottom: "12px",
                  }}
                >
                  <div
                    className="part1"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <span
                      style={{
                        // textTransform: "uppercase",
                        fontSize: "12px",
                        color: "#7d7f85",
                      }}
                    >
                      {productData?.designno}
                    </span>
                    <span
                      style={{
                        // textTransform: "uppercase",
                        fontSize: "12px",
                        color: "#7d7f85",
                      }}
                    >
                      Metal Purity : {mtTypeOption ? mtTypeOption.split(" ")[1] : productData?.MetalPurity}
                    </span>
                    <sapn
                      style={{
                        textTransform: "capitalize",
                        fontSize: "12px",
                        color: "#7d7f85",
                      }}
                    >
                      Metal Color : {selectedColor ? selectedColor : productData?.MetalColorName}
                    </sapn>
                    <sapn
                      style={{
                        textTransform: "capitalize",
                        fontSize: "12px",
                        color: "#7d7f85",
                      }}
                    >
                      Diamond Quality Color:{" "}
                      {diaQColOpt ? diaQColOpt : `${productData?.diamondquality}-${productData?.diamondcolorname}`}
                    </sapn>
                  </div>
                  {/* {productData?.IsColorWiseImageExists !== null && (
                    <div
                      style={{ display: "flex", gap: "5px" }}
                      className="part2"
                    >
                      <div
                        style={{
                          border: "1px solid #c8c8c8",
                          borderRadius: "50%",
                        }}
                      >
                        <div
                          style={{
                            width: "12px",
                            height: "12px",
                            backgroundColor: "#c8c8c8",
                            borderRadius: "50%",
                            margin: "1px",
                          }}
                        ></div>
                      </div>
                      <div
                        style={{
                          border: "1px solid #ffcfbc",
                          borderRadius: "50%",
                        }}
                      >
                        <div
                          style={{
                            width: "12px",
                            height: "12px",
                            backgroundColor: "#ffcfbc",
                            borderRadius: "50%",
                            margin: "1px",
                          }}
                        ></div>
                      </div>
                      <div
                        style={{
                          border: "1px solid #e0be77",
                          borderRadius: "50%",
                        }}
                      >
                        <div
                          style={{
                            width: "12px",
                            height: "12px",
                            backgroundColor: "#e0be77",
                            borderRadius: "50%",
                            margin: "1px",
                          }}
                        ></div>
                      </div>
                    </div>
                  )} */}
                </div>
                <div
                  style={{ display: "flex", flexWrap: 'wrap', width: "100%", marginTop: "12px" }}
                  className="CustomiZationDeatilPageWeb"
                >

                  {isMetalCutoMizeFlag == 1 && <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: '45%',
                      marginTop: '20px'

                    }}
                  >
                    <label style={{ fontSize: "12.5px", color: "#7d7f85" }}>
                      METAL TYPE:
                    </label>
                    <select
                      style={{
                        border: "none",
                        outline: "none",
                        color: "#7d7f85",
                        fontSize: "12.5px",
                      }}
                      defaultValue={mtTypeOption}
                      onChange={(e) => setmtTypeOption(e.target.value)}
                    >
                      {metalType.map((data, index) => (
                        <option key={index} value={data.metalType}>
                          {data.metaltype}
                        </option>
                      ))}
                    </select>
                  </div>}
                  <Divider
                    orientation="vertical"
                    flexItem
                    style={{
                      opacity: 1,
                      height: "30px",
                      margin: "10px 10px 0px 10px",
                      marginTop: '20px'
                    }}
                  />

                  {isMetalCutoMizeFlag == 1 &&
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: '49%',
                        marginTop: '20px'

                      }}
                    >
                      <label style={{ fontSize: "12.5px", color: "#7d7f85" }}>
                        METAL COLOR:
                      </label>
                      <select
                        style={{
                          border: "none",
                          outline: "none",
                          color: "#7d7f85",
                          fontSize: "12.5px",
                        }}
                        onChange={(e) => handleColorSelection(e.target.value)}
                      >
                        {metalColorData.map((colorItem) => (
                          <option key={colorItem.ColorId} value={colorItem.metalcolorname}>
                            {colorItem.metalcolorname}
                          </option>
                        ))}
                      </select>
                    </div>}


                  <Divider sx={{
                    marginTop: '20px', background: '#a9a7a7',
                    marginTop: '20px'
                  }} />

                  {((isDaimondCstoFlag == 1) && (productData?.diamondweight !== 0 || productData?.diamondpcs !== 0)) && <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: '45%',
                      marginTop: '20px'
                    }}
                  >
                    <label style={{ fontSize: "12.5px", color: "#7d7f85" }}>
                      DAIMOND :
                    </label>
                    <select
                      style={{
                        border: "none",
                        outline: "none",
                        color: "#7d7f85",
                        fontSize: "12.5px",
                      }}
                      defaultValue={diaQColOpt}
                      onChange={(e) => setDiaQColOpt(e.target.value)}
                    >
                      {colorData?.map((colorItem) => (
                        <option key={colorItem.ColorId} value={`${colorItem.Quality}_${colorItem.color}`}>
                          {`${colorItem.Quality}_${colorItem.color}`}
                        </option>
                      ))}
                    </select>
                  </div>}
                  <Divider
                    orientation="vertical"
                    flexItem
                    style={{
                      opacity: 1,
                      height: "30px",
                      margin: "0px 10px 0px 10px",
                      marginTop: '20px'
                    }}
                  />

                  <Divider sx={{ marginTop: '20px', background: '#a9a7a7' }} />

                  {((isCColrStoneCustFlag === 1) && (productData?.totalcolorstonepcs !== 0 || productData?.totalcolorstoneweight !== 0)) && <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: '49%',
                      marginTop: '20px'

                    }}
                  >
                    <label style={{ fontSize: "12.5px", color: "#7d7f85"}}>
                      COLOR STONE:
                    </label>
                    <select
                      style={{
                        border: "none",
                        outline: "none",
                        color: "#7d7f85",
                        fontSize: "12.5px",
                      }}
                      onChange={(e) => setCSQOpt(e.target.value)}
                      defaultValue={cSQopt}
                    >
                      {DaimondQualityColor.map((data, index) => (
                        <option key={index} value={`${data.Quality}-${data.color}`} >
                          {`${data.Quality}-${data.color}`}
                        </option>
                      ))}
                    </select>
                  </div>}


                  {(sizeData?.length !== 0 || (productData?.DefaultSize && productData.DefaultSize.length !== 0)) && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: '45%',
                        marginTop: '20px'
                      }}
                    >
                      <label style={{ fontSize: "12.5px", color: "#7d7f85" }}>
                        SIZE:
                      </label>
                      <select
                        style={{
                          border: "none",
                          outline: "none",
                          color: "#7d7f85",
                          fontSize: "12.5px",
                        }}
                        onChange={(e) => handelSize(e.target.value)}
                        defaultValue={
                          productData && productData.DefaultSize
                            ? productData.DefaultSize
                            : sizeData.find((size) => size.IsDefaultSize === 1)?.id
                        }
                      >
                        {sizeData?.map((size) => (
                          <option
                            key={size.id}
                            value={size.sizename} // Pass sizename as value
                            selected={
                              productData && productData.DefaultSize === size.sizename
                            }
                          >
                            {size.sizename}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}


                </div>

                <div
                  style={{ width: "100%", marginTop: "12px" }}
                  className="CustomiZationDeatilPageMobile"
                >

                  {isMetalCutoMizeFlag == 1 && <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: '20px'

                    }}
                  >
                    <label style={{ fontSize: "12.5px", color: "#7d7f85" }}>
                      METAL TYPE:
                    </label>
                    <select
                      style={{
                        border: "none",
                        outline: "none",
                        color: "#7d7f85",
                        fontSize: "12.5px",
                      }}
                      defaultValue={mtTypeOption}
                      onChange={(e) => setmtTypeOption(e.target.value)}
                    >
                      {metalType.map((data, index) => (
                        <option key={index} value={data.metalType}>
                          {data.metaltype}
                        </option>
                      ))}
                    </select>
                  </div>}
                  <Divider sx={{
                    marginTop: '20px', background: '#a9a7a7',
                    marginTop: '20px'
                  }} />

                  {isMetalCutoMizeFlag == 1 &&
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: '20px'

                      }}
                    >
                      <label style={{ fontSize: "12.5px", color: "#7d7f85" }}>
                        METAL COLOR:
                      </label>
                      <select
                        style={{
                          border: "none",
                          outline: "none",
                          color: "#7d7f85",
                          fontSize: "12.5px",
                        }}
                        onChange={(e) => handleColorSelection(e.target.value)}
                      >
                        {metalColorData.map((colorItem) => (
                          <option key={colorItem.ColorId} value={colorItem.metalcolorname}>
                            {colorItem.metalcolorname}
                          </option>
                        ))}
                      </select>
                    </div>}


                  <Divider sx={{
                    marginTop: '20px', background: '#a9a7a7',
                    marginTop: '20px'
                  }} />

                  {((isDaimondCstoFlag == 1) && (productData?.diamondweight !== 0 || productData?.diamondpcs !== 0)) && <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: '20px'
                    }}
                  >
                    <label style={{ fontSize: "12.5px", color: "#7d7f85" }}>
                      DAIMOND :
                    </label>
                    <select
                      style={{
                        border: "none",
                        outline: "none",
                        color: "#7d7f85",
                        fontSize: "12.5px",
                      }}
                      defaultValue={diaQColOpt}
                      onChange={(e) => setDiaQColOpt(e.target.value)}
                    >
                      {colorData?.map((colorItem) => (
                        <option key={colorItem.ColorId} value={`${colorItem.Quality}_${colorItem.color}`}>
                          {`${colorItem.Quality}_${colorItem.color}`}
                        </option>
                      ))}
                    </select>
                  </div>}

                  <Divider sx={{
                    marginTop: '20px', background: '#a9a7a7',
                    marginTop: '20px'
                  }} />

                  {((isCColrStoneCustFlag === 1) && (productData?.totalcolorstonepcs !== 0 || productData?.totalcolorstoneweight !== 0)) &&
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: '20px'
                      }}
                    >
                      <label style={{ fontSize: "12.5px", color: "#7d7f85" }}>
                        COLOR STONE:
                      </label>
                      <select
                        style={{
                          border: "none",
                          outline: "none",
                          color: "#7d7f85",
                          fontSize: "12.5px",
                        }}
                        onChange={(e) => setCSQOpt(e.target.value)}
                        defaultValue={cSQopt}
                      >
                        {DaimondQualityColor.map((data, index) => (
                          <option key={index} value={`${data.Quality}-${data.color}`} >
                            {`${data.Quality}-${data.color}`}
                          </option>
                        ))}
                      </select>
                    </div>}

                  <Divider sx={{
                    marginTop: '20px', background: '#a9a7a7',
                    marginTop: '20px'
                  }} />

                  {(sizeData?.length !== 0 || (productData?.DefaultSize && productData.DefaultSize.length !== 0)) && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: '20px'
                      }}
                    >
                      <label style={{ fontSize: "12.5px", color: "#7d7f85" }}>
                        SIZE:
                      </label>
                      <select
                        style={{
                          border: "none",
                          outline: "none",
                          color: "#7d7f85",
                          fontSize: "12.5px",
                        }}
                        onChange={(e) => handelSize(e.target.value)}
                        defaultValue={
                          productData && productData.DefaultSize
                            ? productData.DefaultSize
                            : sizeData.find((size) => size.IsDefaultSize === 1)?.id
                        }
                      >
                        {sizeData?.map((size) => (
                          <option
                            key={size.id}
                            value={size.sizename} // Pass sizename as value
                            selected={
                              productData && productData.DefaultSize === size.sizename
                            }
                          >
                            {size.sizename}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                  <Divider sx={{
                    marginTop: '20px', background: '#a9a7a7',
                    marginTop: '20px'
                  }} />

                </div>

                {isPriseShow == 1 && <div style={{ marginTop: "23px" }}>
                  <p style={{ color: "#7d7f85", fontSize: "14px" }}>
                    {/* Price: <span style={{ fontWeight: '500', fontSize: '16px' }}>{currencySymbol?.Currencysymbol}{`${(productData?.price - grandTotal) === 0 ? "Not Availabel" : (productData?.price - grandTotal)?.toFixed(2)}`}</span> */}
                    {/* Price: <span style={{ fontWeight: '500', fontSize: '16px' }}>{currencySymbol?.Currencysymbol}{`${productData?.UnitCost + (productData?.price - grandTotal)?.toFixed(2)}`}</span> */}
                    Price: <span style={{ fontWeight: '500', fontSize: '16px' }}>{currencySymbol?.Currencysymbol}{`${((productData?.UnitCost) + (mtrdData?.Z ?? 0) + (dqcData?.S ?? 0) + (csqcData?.S ?? 0) + (sizeMarkup ?? 0) + metalUpdatedPrice() + diaUpdatedPrice() + colUpdatedPrice()).toFixed(2)}`}</span>
                  </p>
                </div>}

                {/* <div>
                  <button className="prodetailbtn">
                    Inquire about product
                  </button>
                </div> */}

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                  <div style={{ marginLeft: "-12px", display: 'flex', alignItems: 'center' }}>
                    <Checkbox
                      icon={
                        <StarBorderIcon
                          sx={{ fontSize: "25px", color: "#ffd200" }}
                        />
                      }
                      checkedIcon={
                        <StarIcon sx={{ fontSize: "25px", color: "#ffd200" }} />
                      }
                      disableRipple={true}
                      checked={WishListFlag}
                      onChange={(e) => handelWishList(e)}
                    />
                    <span style={{ fontSize: "16px", color: "#7d7f85" }}>
                      Add To Wishlist
                    </span>
                  </div>

                  {/* <Divider
                    orientation="vertical"
                    flexItem
                    style={{
                      opacity: 1,
                      height: "50px",
                      margin: "10px 10px 0px 10px",
                    }}
                  /> */}

                  <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                    <Checkbox
                      icon={
                        <LocalMallOutlinedIcon
                          sx={{ fontSize: "22px", color: "#ffd200" }}
                        />
                      }
                      checkedIcon={
                        <LocalMallIcon
                          sx={{ fontSize: "22px", color: "#ffd200" }}
                        />
                      }
                      disableRipple={true}
                      // sx={{ padding: "5px" }}
                      checked={cartFlag}
                      onChange={(e) => handelCart(e)}
                    // onClick={()=>}
                    // value={cartFlag}
                    // checked={products?.checkFlag}
                    // onChange={(e) => handelCartList(e, products)}
                    />
                    <span style={{ fontSize: "16px", color: "#7d7f85" }}>
                      Add To Cart
                    </span>
                  </div>
                </div>

                {/* <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    marginTop: "15px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <img
                      src={
                        "https://smilingrocks.com/cdn/shop/files/BM_Logo_v02_small.png?v=1659083102"
                      }
                      alt={""}
                      style={{ width: "48px" }}
                    />
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "12px",
                        color: "#7f7d85",
                      }}
                    >
                      {" "}
                      Certified Sustainable Brand
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <img
                      src={
                        "https://smilingrocks.com/cdn/shop/files/Frame_1_b70eff1d-e385-41c6-bf21-8cc1b7f0d15d_small.png?v=1613696587"
                      }
                      alt={""}
                      style={{ width: "48px" }}
                    />
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "12px",
                        color: "#7f7d85",
                      }}
                    >
                      Lifetime Warranty
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <img
                      src={
                        "https://smilingrocks.com/cdn/shop/files/Frame_4_4bb99b96-ffc8-4d77-bf9a-62257c771ff1_small.png?v=1613696586"
                      }
                      alt={""}
                      style={{ width: "48px" }}
                    />
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "12px",
                        color: "#7f7d85",
                      }}
                    >
                      24 Hours Customer Service
                    </p>
                  </div>
                </div>

                <div style={{ fontSize: "12.5px", color: "#7f7d85" }}>
                  <p>DIAMONDS ARE FOR EVERYONE ®</p>

                  <p>
                    Sonasons aims to create a Chain of Smile and will
                    donate 3% of your purchase to your choice of charity during
                    check-out.
                    <br /> <u style={{ cursor: "pointer" }}>Learn More</u>
                  </p>

                  <p>
                    Custom Jewelry: If you would like to customize this jewelry,
                    please email us at order@smilingrocks.com.
                  </p>
                </div> */}
              </div>
            </div>
          </div>
          {(designSetList.length !== 0 && showIcateDesign === 1) &&
            <div style={{ position: 'relative', marginInline: '10%', display: 'flex', alignItems: 'center', marginBottom: '7%' }}>
              <div className='similiarBrand' style={{ backgroundColor: 'white', right: '0px', position: 'absolute', display: 'flex', alignItems: 'center', flexDirection: 'column', marginBottom: '100px', marginTop: !(productData?.OriginalImagePath) && '120px' }}>
                <div style={{ marginBottom: '12px' }}>
                  <span style={{ fontFamily: 'FreightDisp Pro Medium', color: '#7d7f85', fontSize: '26px' }}>Complete The Look</span>
                </div>
                <div style={{ border: '1px solid #e1e1e1', borderRadius: '4px', padding: '30px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
                  {
                    designSetList?.map((dsl, i) => (
                      <>
                        {/* {i !== 0 && <hr style={{opacity:0.06}}/>} */}
                        <div style={{ display: 'flex', alignItems: 'center', width: '670px', gap: '30px' }}>
                          <div >
                            <img src={!(dsl?.ThumbImagePath) ? notFound : dsl?.imagepath + dsl?.ThumbImagePath.split(",")[0]} alt={""} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', position: 'relative', height: '100px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', minWidth: '500px' }}>
                              <sapn style={{ fontWeight: '500' }}>{dsl?.TitleLine}({dsl?.designno})</sapn>
                              {/* <span></span> */}
                              <span style={{ fontSize: '14px', color: '#888' }}>{dsl?.description}</span>
                            </div>
                            <div onClick={() => handelDesignSet(dsl)}>
                              <NavigateNextRoundedIcon />
                            </div>
                            {(i !== designSetList.length - 1) && <div style={{ borderBottom: '1px solid #e1e1e1', position: "absolute", bottom: "-18.5px", left: "0", width: "100%", }}></div>}
                          </div>
                        </div>
                      </>
                    ))
                  }
                </div>
              </div>
              <img src='https://cdn.accentuate.io/3204707942500/4121939443812/Essentials%20(2).jpg?2048x1950' style={{ width: '800px' }} />
            </div>
          }

          <div className="Acc-container">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                flexDirection: "column",
              }}
            >
              <p
                style={{
                  fontSize: "30px",
                  fontFamily: "FreightDisp Pro Medium",
                  color: "#7d7f85",
                }}
              >
                Tell Me More
              </p>
              <ul className="srAccul">
                <li
                  className="tellmoreli"
                  onClick={() => {
                    setAccNo("");
                    setAccNo("1");
                    setAcc(!acc);
                  }}
                  style={{ userSelect: "none" }}
                >
                  <span className="tellmorep">
                    PRODUCT DETAILS
                    <span style={{ fontSize: "24px" }}>
                      {acc && accNo === "1" ? "-" : "+"}
                    </span>
                  </span>
                  {/* <div style={{display:acc && accNo === '1' ? 'block':'none',userSelect:'none',transition:'0.5s'}}> */}
                  <div
                    className={`my-list-fineJewe ${acc && accNo === "1" ? "openAcc" : ""}`}
                  >
                    <div>
                      <div className="srAccContainer">
                        <div className="srFloat">
                          <span>
                            <b>MetalPurity</b>: {productData?.MetalPurity}
                          </span>
                          {/* <span>
                            <b>MetalWeight</b>: {productData?.MetalWeight}
                          </span> */}
                          <span>
                            <b>GrossWeight</b>:
                            {
                              (productData?.Grossweight + (metalFilterData.length === 0 ? 0 : metalFilterData[0]?.Weight) + (daimondFilterData.length === 0 ? 0 : (daimondFilterData[0]?.Weight / 5))).toFixed(2)
                            }
                            {/* {daimondFilterData?.length && metalFilterData.length ? (
                              <>
                                <b>GrossWeight</b>: {metalFilterData[0]?.Weight + (daimondFilterData[0]?.Weight / 5)}
                              </>
                            ) : ''}
                            {daimondFilterData?.length === 0 && metalFilterData.length ? (
                              <>
                                <b>GrossWeight</b>: {metalFilterData[0]?.Weight}
                              </>
                            ) : ''}
                            {daimondFilterData?.length && metalFilterData.length === 0 ? (
                              <>
                                <b>GrossWeight</b>: {daimondFilterData[0]?.Weight / 5}
                              </>
                            ) : ''}
                            {daimondFilterData?.length === 0 && metalFilterData.length === 0 ? (
                              <>
                                <b>GrossWeight</b>: {productData?.Grossweight}
                              </>
                            ) : ''} */}
                          </span>
                          <span>
                            <b>DiamondWeight</b>: {daimondFilterData?.length ? ((productData?.diamondweight + daimondFilterData[0]?.Weight)).toFixed(2) : productData?.diamondweight}
                          </span>
                          <span>
                            <b>Diamondpcs</b>: {daimondFilterData?.length ? (productData?.diamondpcs + daimondFilterData[0]?.pieces) : productData?.diamondpcs}
                          </span>
                          <span>
                            <b>NumberOfDiamonds</b>: {daimondFilterData?.length ? (productData?.diamondpcs + daimondFilterData[0]?.pieces) : productData?.diamondpcs}
                          </span>
                        </div>
                        <div className="srFloat">
                          <span>
                            <b>Netwt</b>: {metalFilterData?.length ? ((productData?.netwt + metalFilterData[0]?.Weight)).toFixed(2) : productData?.netwt}
                          </span>
                          <span>
                            <b>DiamondQuality</b>: {productData?.diamondquality}
                          </span>
                          <span>
                            <b>DiamondColorname</b>:{" "}
                            {productData?.diamondcolorname}
                          </span>
                          <span>
                            <b>TotalDiamondWeight</b>:{daimondFilterData?.length ? ((productData?.diamondweight + daimondFilterData[0]?.Weight)).toFixed(2) : productData?.diamondweight}
                          </span>
                          <span>
                            <b>DiamondSetting</b>: {productData?.diamondsetting}
                          </span>
                        </div>
                      </div>
                      {/* <div style={{marginBottom:'15px'}}>
                        <span style={{fontSize:'13px',fontWeight:'normal'}}>
                          Total carat weight (ctw) represents the approximate
                          total weight of all diamonds in each jewelry and may
                          vary from 0.48 to 0.54 carats. All diamonds are lab
                          grown diamonds.
                        </span>
                      </div> */}
                    </div>
                  </div>
                </li>
                {/* <div style={{display:acc && accNo === '2' ? 'block':'none',userSelect:'none',transition:'0.5s'}}>  */}
                {/* <li
                  className="tellmoreli"
                  onClick={() => {
                    setAccNo("");
                    setAccNo("2");
                    setAcc(!acc);
                  }}
                  style={{ userSelect: "none" }}
                >
                  <span className="tellmorep">
                    STYLE & FIT
                    <span style={{ fontSize: "24px" }}>
                      {acc && accNo === "2" ? "-" : "+"}
                    </span>
                  </span>
                  <div
                    className={`my-list-fineJewe ${
                      acc && accNo === "2" ? "openAcc" : ""
                    }`}
                  >
                    <span style={{fontSize:'12px'}}>A Comfort fit ring with high gold polish for your everyday comfort. Check out your ring size below.</span>
                    <table style={{width:'100%',margin:'20px 0px'}} className='sracctable'>
                      <tbody>
                        <tr>
                          <td className='sracctabletd1'>INSIDE DIAMETER</td>
                          <td className='sracctabletd2'></td>
                          <td className='sracctabletd3'></td>
                        </tr>
                        <tr>
                          <td className='sracctabletd1'>INCHES</td>
                          <td className='sracctabletd2'>MM</td>
                          <td className='sracctabletd3'>US SIZE</td>
                        </tr>
                        <tr>
                          <td className='sracctabletd1'>0.6</td>
                          <td className='sracctabletd2'>15.5</td>
                          <td className='sracctabletd3'>5</td>
                        </tr>
                        <tr>
                          <td className='sracctabletd1'>0.64</td>
                          <td className='sracctabletd2'>16.1</td>
                          <td className='sracctabletd3'>6</td>
                        </tr>
                        <tr>
                          <td className='sracctabletd1'>0.69</td>
                          <td className='sracctabletd2'>17.35</td>
                          <td className='sracctabletd3'>7</td>
                        </tr>
                        <tr>
                          <td className='sracctabletd1'>0.72</td>
                          <td className='sracctabletd2'>18.19</td>
                          <td className='sracctabletd3'>8</td>
                        </tr>
                        <tr>
                          <td className='sracctabletd1'>0.75</td>
                          <td className='sracctabletd2'>19.1</td>
                          <td className='sracctabletd3'>9</td>
                        </tr>
                      </tbody>
                    </table>
                    <span style={{fontSize:'12px'}}>All our rings can be resized by one size up or down, except for Eternity Bands.</span>
                  </div>
                </li> */}
                {/* <div style={{display:acc && accNo === '3' ? 'block':'none',userSelect:'none',transition:'0.5s'}}> */}
                {/* <li
                  className="tellmoreli"
                  onClick={() => {
                    setAccNo("");
                    setAccNo("3");
                    setAcc(!acc);
                  }}
                  style={{ userSelect: "none" }}
                >
                  <span className="tellmorep">
                    SHIPPING AND RETURNS
                    <span style={{ fontSize: "24px" }}>
                      {acc && accNo === "3" ? "-" : "+"}
                    </span>
                  </span>
                  <div
                    className={`my-list-fineJewe ${
                      acc && accNo === "3" ? "openAcc" : ""
                    }`}
                  >
                   We ship all over the USA only. 
                   International shipping is not available at the 
                   moment.We offer a free return & refund up to 30 days after 
                   your purchase. For more please read our Shipping and Returns Policy
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
          {/* <div className="compeletethelook_cont">
            <img
              src={
                "https://cdn.accentuate.io/3245609615460/4121939443812/99-v1581576944425.jpg?2048x1950"
              }
              alt={""}
              className='ctl_img'
            />

            <div className="compeletethelook_prodt" >
              <p
                style={{
                  fontFamily: "FreightDisp Pro Medium",
                  color: "#7d7f85",
                  fontSize: "30px",
                }}
              >
                Complete The Look
              </p>

              <div className='completethelook_outer' >
                <div style={{ display: "flex", gap: "60px" }}>
                  <div style={{ marginLeft: "12px" }}>
                    <img
                      src={
                        "https://smilingrocks.com/cdn/shop/products/Lab-grown-diamond-white-gold-earrings-sre00362wht_medium.jpg?v=1590473229"
                      }
                      className='srthelook_img'
                    />
                  </div>
                  <div
                    className='srthelook_prodinfo'
                  >
                    <div
                      style={{
                        fontSize: "12.5px",
                        color: "#7d7f85",
                        textTransform: "uppercase",
                      }}
                    >
                      <p>
                        Drizzle 0.78ct Lab Grown Diamond Earrings
                        <br />
                        E-00362WHT
                        <br />
                        $2,075.00
                      </p>
                    </div>
                    <div>
                      <span style={{ fontSize: "30px", color: "#7d7f85",padding:'5px'}} className=''>
                        &#8250;
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "60px" }}>
                  <div style={{ marginLeft: "12px" }}>
                    <img
                      src={
                        "https://smilingrocks.com/cdn/shop/products/Lab-grown-diamond-white-gold-necklace-srnl00367wht_medium.jpg?v=1613626874"
                      }
                      className='srthelook_img'
                    />
                  </div>
                  <div
                    className='srthelook_prodinfo'
                  >
                    <div
                      style={{
                        fontSize: "12.5px",
                        color: "#7d7f85",
                        textTransform: "uppercase",
                      }}
                    >
                      <p>
                        Drizzle 0.78ct Lab Grown Diamond Earrings
                        <br />
                        E-00362WHT
                        <br />
                        $2,075.00
                      </p>
                    </div>
                    <div>
                      <span style={{ fontSize: "30px", color: "#7d7f85" }}>
                        &#8250;
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "60px" }}>
                  <div style={{ marginLeft: "12px" }}>
                    <img
                      src={
                        "https://smilingrocks.com/cdn/shop/products/Lab-grown-diamond-white-gold-bracelet-srbl00236wht_medium.jpg?v=1590473675"
                      }
                      className='srthelook_img'
                    />
                  </div>
                  <div
                    className='srthelook_prodinfo'
                  >
                    <div
                      style={{
                        fontSize: "12.5px",
                        color: "#7d7f85",
                        textTransform: "uppercase",
                      }}
                    >
                      <p>
                        Drizzle 0.78ct Lab Grown Diamond Earrings
                        <br />
                        E-00362WHT
                        <br />
                        $2,075.00
                      </p>
                    </div>
                    <div>
                      <span style={{ fontSize: "30px", color: "#7d7f85" }}>
                        &#8250;
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <SmilingRock /> */}
          <Footer />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', paddingBlock: '30px' }}>
        <p style={{ margin: '0px', fontWeight: 500, width: '100px', color: 'white', cursor: 'pointer' }} onClick={() => window.scrollTo(0, 0)}>BACK TO TOP</p>
      </div>
    </div >
  );
}

export default ProdDetail