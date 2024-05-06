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
import { toast } from 'react-toastify'
import Slider from 'react-slick'

const ProdDetail = () => {

  const [acc, setAcc] = useState(false);
  const [accNo, setAccNo] = useState('');
  const [imgLoading, setImgLoading] = useState(false);
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
  const [isProductCuFlag, setIsProductCuFlag] = useState("");
  const [IsColorWiseImagesShow, setIsColorWiseImagesShow] = useState('')
  const [videoUrl, setVideoUrl] = useState('');
  const [completeBackImage, setCompleteBackImage] = useState('');
  const [designUniqueNO, setDesignUnicNo] = useState('');

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
  const [dqcData, setDqcData] = useState()
  const [dqcRate, setDqcRate] = useState()
  const [dqcSettRate, setDqcSettRate] = useState()
  const [csqcData, setCsqcData] = useState()
  const [csqcRate, setCsqcRate] = useState()
  const [csqcSettRate, setCsqcSettRate] = useState()
  const [getPriceData, setGetPriceData] = useState([])
  const [globImagePath, setGlobImagepath] = useState()
  const [addToCartFlag, setAddToCartFlag] = useState(false)
  const [addToWishlistFlag, setAddWishlistFlag] = useState(false);


  const [uploadLogicPath, setUploadLogicPath] = useState('');
  const [uKey, setUkey] = useState('');


  const setCartCount = useSetRecoilState(CartListCounts)
  const setWishCount = useSetRecoilState(WishListCounts)
  const getDesignSet = useRecoilValue(designSet)
  const [currData, setCurrData] = useState([])

  const handelCurrencyData = () => {
    let currencyData = JSON.parse(localStorage.getItem('CURRENCYCOMBO'));
    let loginData = JSON.parse(localStorage.getItem('loginUserDetail'));
    console.log("param", loginData);

    if (currencyData && loginData) {
      if (Array.isArray(currencyData)) {
        const filterData = currencyData?.filter((cd) => cd?.Currencyid === loginData?.CurrencyCodeid)[0]
        setCurrData(filterData)
      } else {
        setCurrData(currencyData)
      }
    }
  }

  useEffect(() => {
    handelCurrencyData();
  }, [])

  const handelImgLoad = () => {
    setImgLoading(true)
  }

  useEffect(() => {
    const storeInit = JSON.parse(localStorage.getItem('storeInit'))
    setGlobImagepath(storeInit?.DesignImageFol)
  }, [])



  let currencySymbol = JSON.parse(localStorage.getItem('CURRENCYCOMBO'))
  let navigate = useNavigate()

  useEffect(() => {
    let uploadPath = localStorage.getItem('UploadLogicalPath');
    setUploadLogicPath(uploadPath);

    const data = JSON.parse(localStorage.getItem("getPriceData"))
    setGetPriceData(data)
  }, [])



  useEffect(() => {

    let loginInfo = JSON.parse(localStorage.getItem("loginUserDetail"))
    let ColorStoneQualityColor = JSON.parse(localStorage.getItem("ColorStoneQualityColor"))
    setmtTypeOption(loginInfo?.cmboMetalType)

    if (loginInfo?.cmboDiaQualityColor !== "" && !loginInfo?.cmboDiaQualityColor) {
      let qualityColor = `${loginInfo?.cmboDiaQualityColor?.split("#@#")[0]?.toUpperCase()}_${loginInfo?.cmboDiaQualityColor?.split("#@#")[1]?.toUpperCase()}`
      setDiaQColOpt(qualityColor)
    }
    else {
      if (colorData && colorData?.length) {
        setDiaQColOpt(`${colorData[0]?.Quality}_${colorData[0]?.color}`)
      }
    }

    let csQualColor = `${loginInfo?.cmboCSQualityColor?.split("#@#")[0]?.toUpperCase()}-${loginInfo?.cmboCSQualityColor?.split("#@#")[1]?.toUpperCase()}`

    let dqcc = ColorStoneQualityColor?.find((dqc) => `${dqc.Quality}-${dqc.color}` === csQualColor)

    if (dqcc) {
      setCSQOpt(csQualColor)
    } else {
      let ref = `${ColorStoneQualityColor[0].Quality}-${ColorStoneQualityColor[0].color}`
      setCSQOpt(ref)
    }

    // let sizeDatafilter = sizeData?.filter((sd)=>sd?.IsDefaultSize === 1)
    // console.log("sizeData",sizeDatafilter)

    // setSizeOption(sizeData[1]?.id)

  }, [colorData, sizeData])

  // console.log("productData",sizeOption)

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

      let fpprice = ((dqcRate ?? 0) * (calcDiaWt ?? 0)) + ((dqcSettRate ?? 0) * (CalcPics ?? 0))

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

      let fpprice = ((csqcRate ?? 0) * (calcDiaWt ?? 0)) + ((csqcSettRate ?? 0) * (CalcPics ?? 0))

      return fpprice
    } else {
      return 0
    }

  }

  let metalUpdatedPrice = () => {

    let srProductsData = JSON.parse(localStorage.getItem('srProductsData'));

    if (metalFilterData && metalFilterData.length) {

      let CalcNetwt = ((srProductsData?.netwt ?? 0) + (metalFilterData?.Weight ?? 0) ?? 0)

      let fprice = ((mtrdData?.AD ?? 0) * CalcNetwt) + ((mtrdData?.AC ?? 0) * CalcNetwt)

      return fprice
    } else {
      return 0
    }


  }


  useEffect(() => {
    let srProductsData = JSON.parse(localStorage.getItem('srProductsData'));
    const storeInit = JSON.parse(localStorage.getItem('storeInit'));
    setUkey(storeInit.ukey);

    let mtrd = getPriceData?.rd?.filter((ele) =>
      storeInit?.IsMetalCustomization === 1
        ?
        ele?.A === srProductsData?.autocode &&
        ele?.B === srProductsData?.designno &&
        ele?.D === mtTypeOption
        :
        ele?.A === srProductsData?.autocode &&
        ele?.B === srProductsData?.designno

    );


    let showPrice = 0;
    if (mtrd && mtrd.length > 0) {
      showPrice = srProductsData?.price - ((srProductsData?.price - srProductsData?.metalrd) + (mtrd[0]?.Z ?? 0));
      setMtrdData(mtrd[0] ?? [])
      setMetalPrice(mtrd[0]?.Z ?? 0)
    }

    let diaqcprice = getPriceData?.rd1?.filter((ele) =>
      storeInit?.IsDiamondCustomization === 1
        ?
        ele.A === srProductsData?.autocode &&
        ele.B === srProductsData?.designno &&
        ele.H === diaQColOpt?.split("_")[0] &&
        ele.J === diaQColOpt?.split("_")[1]
        :
        ele.A === srProductsData?.autocode &&
        ele.B === srProductsData?.designno

    )


    let showPrice1 = 0;
    if (diaqcprice && diaqcprice.length > 0) {
      showPrice1 = srProductsData?.price - ((srProductsData?.price - srProductsData?.diard1) + (diaqcprice[0]?.S ?? 0));
      let totalPrice = diaqcprice?.reduce((acc, obj) => acc + obj.S, 0)
      let diaRate = diaqcprice?.reduce((acc, obj) => acc + obj.O, 0)
      let diaSettRate = diaqcprice?.reduce((acc, obj) => acc + obj.Q, 0)

      setDqcRate(diaRate ?? 0)
      setDqcSettRate(diaSettRate ?? 0)
      setDqcData(totalPrice ?? 0)
      setDQCPrice(diaqcprice[0]?.S ?? 0)
    }

    let csqcpirce = getPriceData?.rd2?.filter((ele) =>
      storeInit?.IsCsCustomization === 1
        ?
        ele.A === srProductsData?.autocode &&
        ele.B === srProductsData?.designno &&
        ele.H === cSQopt?.split("_")[0] &&
        ele.J === cSQopt?.split("_")[1]
        :
        ele.A === srProductsData?.autocode &&
        ele.B === srProductsData?.designno

    );

    let showPrice2 = 0;
    if (csqcpirce && csqcpirce.length > 0) {
      showPrice2 = srProductsData?.price - ((srProductsData?.price - srProductsData?.csrd2) + (csqcpirce[0]?.S ?? 0));
      let totalPrice = csqcpirce?.reduce((acc, obj) => acc + obj.S, 0)
      let diaRate = csqcpirce?.reduce((acc, obj) => acc + obj.O, 0)
      let diaSettRate = csqcpirce?.reduce((acc, obj) => acc + obj.Q, 0)
      setCsqcData(totalPrice ?? 0)
      setCsqcRate(diaRate ?? 0)
      setCsqcSettRate(diaSettRate ?? 0)
      setCSQCPrice(csqcpirce[0]?.S ?? 0)
    }

    let gt = showPrice + showPrice1 + showPrice2;
    setGrandTotal(gt ?? 0);

  }, [getPriceData, mtTypeOption, diaQColOpt, cSQopt])


  useEffect(() => {
    if (mtrdData.U === 1) {
      handleColorSelection(productData?.MetalColorName)
    }
  }, [mtrdData])

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

    // console.log('filteredData', filteredData);

    if (filteredData.length > 0) {
      const num = filteredData[0].designsetuniqueno;
      const defaultImage = filteredData[0].DefaultImageName;

      setCompleteBackImage(defaultImage);
      setDesignUnicNo(num);
    }

  }

  useEffect(() => {
    const storedDataAll = localStorage.getItem('srProductsData');
    const data = JSON.parse(storedDataAll);
    setVideoUrl(data.videoName);


    let allProductData = JSON.parse(localStorage.getItem('allproductlist'))

    let designListData = productData?.SetDno?.split(",")

    let arrFinal = [];

    designListData?.filter((dld) => {

      let findData = allProductData?.find((ele) => ele.designno === dld)

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
    // console.log('filteredDatafilteredDatafilteredDatafilteredData', filteredData)
    setColorImageData(filteredData)
  }

  useEffect(() => {
  }, [colorImageData]);


  function convertPath(path) {
    return path.replace(/\\/g, '/');
  }

  function checkImageAvailability(imageUrl) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = imageUrl;
    });
  }
  // console.log('updatedColorImageupdatedColorImageupdatedColorImage', updatedColorImage)

  useEffect(() => {
    let uploadPath = localStorage.getItem('UploadLogicalPath');
    const storedDataAll = localStorage.getItem('storeInit');
    const data = JSON.parse(storedDataAll);
    setShowEcateDesign(data.IsEcatDesignset);
    setIsProductCuFlag(data.IsProductWebCustomization)
    if (data.IsColorWiseImages === 1) {
      const filteredData = colorImageData.filter(item => item.colorname.toLowerCase() === selectedColor.toLowerCase());
      if (filteredData.length > 0) {
        const correctedData = [];
        Promise.all(filteredData.map(async (item) => {
          const imageUrl = uploadPath + '/' + data.ukey + convertPath(item.imagepath);
          const isAvailable = await checkImageAvailability(imageUrl);
          if (isAvailable) {
            correctedData.push({ ...item, imagepath: imageUrl });
          }
        })).then(() => {
          setUpdateColorImage(correctedData);
        });
      } else {
        setUpdateColorImage('');
      }
    }
  }, [selectedColor])

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
            imagepath: uploadPath + '/' + data.ukey + convertPath(item.imagepath)
          };
        });
        setUpdateColorImage(correctedData);

        const selectedColorData = colorImageData.find(item => item.colorname === selectedColor);
        if (selectedColorData) {
          const correctedImagePath = convertPath(selectedColorData.imagepath);
          let path = uploadPath + '/' + data.ukey + correctedImagePath
          setSelectedImagePath(path);
        } else {
          setSelectedImagePath('');
        }
      } else {
        setUpdateColorImage('');
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

  useEffect(() => {
    if (productData?.checkFlag) {
      setAddToCartFlag(true)
    }
  }, [productData])

  useEffect(() => {
    if (productData?.wishCheck) {
      setAddWishlistFlag(true)
    }
  }, [productData])

  const handelCart = async () => {

    try {
      // setCartFlag(event.target.checked)

      if (addToCartFlag) {
        const storeInit = JSON.parse(localStorage.getItem("storeInit"))
        const UserEmail = localStorage.getItem("registerEmail")
        const Customer_id = JSON.parse(localStorage.getItem("loginUserDetail"));

        productData.checkFlag = addToCartFlag;
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
          "imagepath": `${globImagePath}`,
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
            // toast.success('Product added to cart successfully!');
          }

          if (isWishHasCartData.length && res?.Data?.rd[0]?.stat_msg === "success") {
            await getCartAndWishListData()
            getCountFunc()
            // toast.success('Product added to wishlist successfully!')
          }
        })

      }
      else {
        const storeInit = JSON.parse(localStorage.getItem("storeInit"))
        const UserEmail = localStorage.getItem("registerEmail")
        const Customer_id = JSON.parse(localStorage.getItem("loginUserDetail"));

        productData.checkFlag = addToCartFlag;
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
            // toast.success('Product removed from cart successfully!');
          }
        })

      }

    }
    catch (error) {
      console.log("error", error);
    }

  }

  useEffect(() => {
    handelCart()
  }, [addToCartFlag])

  const handelWishList = async () => {

    try {
      // setWishListFlag(event.target.checked)

      if (addToWishlistFlag) {

        const storeInit = JSON.parse(localStorage.getItem("storeInit"))
        const UserEmail = localStorage.getItem("registerEmail")
        const Customer_id = JSON.parse(localStorage.getItem("loginUserDetail"));


        productData.wishCheck = addToWishlistFlag;
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
          "imagepath": `${globImagePath}`,
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
            // toast.success('Product added to wishlist successfully!')

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
            // toast.success('Data removed from wishlist successfully!');
          }
        })

      }



    }
    catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    handelWishList()
  }, [addToWishlistFlag])

  const handelSize = (data) => {

    // console.log("data",data)

    const selectedSize = sizeData.find((size) => size.sizename === data)
    if (selectedSize) {
      setSizeMarkup(selectedSize?.MarkUp)
    }
    setSizeOption(data)
    const filteredData = getAllFilterSizeData?.filter(item => item.sizename === data)
    const filteredDataMetal = filteredData?.filter(item => item.DiamondStoneTypeName === "METAL")
    const filteredDataDaimond = filteredData?.filter(item => item.DiamondStoneTypeName === "DIAMOND")
    setMetalFilterData(filteredDataMetal)
    setDaimondFiletrData(filteredDataDaimond)
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
  // // console.log("metalFilterData", metalFilterData)
  // // console.log("daimondFilterData", daimondFilterData)
  // // console.log('lastPrice', { "unitcost": productData?.UnitCost ?? 0, "mtrdPrice": mtrdData, "dqcDataPrice": dqcData?.S ?? 0, "csqcData": csqcData?.S ?? 0, sizeMarkup, "metalupdatePrice": metalUpdatedPrice(), "diaUpdatedPrice": diaUpdatedPrice(), "colUpdatedPrice": colUpdatedPrice() })
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleClick = () => {
    setIsVideoPlaying(true);
  };

  useEffect(() => {

    let srData = JSON.parse(localStorage.getItem("srProductsData"))
    let price = ((productData?.UnitCost ?? 0) + (((mtrdData?.V ?? 0) / currData?.CurrencyRate) + (mtrdData?.W ?? 0)) + (dqcData ?? 0) + (csqcData ?? 0) + (sizeMarkup ?? 0) + (metalUpdatedPrice() ?? 0) + (diaUpdatedPrice() ?? 0) + (colUpdatedPrice() ?? 0))
    //((mtrdData?.V/currData[0]?.CurrencyRate ?? 0) + mtrdData?.W ?? 0)
    if (price) {
      srData.price = Number(price)
    }

    localStorage.setItem("srProductsData", JSON.stringify(srData))

  }, [mtrdData, dqcData, csqcData, sizeMarkup, metalUpdatedPrice, diaUpdatedPrice, colUpdatedPrice])

  // console.log("pricedata",(((mtrdData?.V ?? 0)/currData?.CurrencyRate) + (mtrdData?.W ?? 0)),dqcData,csqcData,sizeMarkup,metalUpdatedPrice(),diaUpdatedPrice(),colUpdatedPrice())
  // console.log("pricedatacv",((productData?.UnitCost ?? 0) + (((mtrdData?.V ?? 0)/currData?.CurrencyRate) + (mtrdData?.W ?? 0))+ (dqcData ?? 0) + (csqcData ?? 0) + (sizeMarkup ?? 0) + (metalUpdatedPrice() ?? 0) + (diaUpdatedPrice() ?? 0) + (colUpdatedPrice() ?? 0)))


  const decodeEntities = (html) => {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }



  // slider code
  //   const defaultMedia = [];
  //   if (Array.isArray(updatedColorImage)) {
  //     const processedColorImages = updatedColorImage.map(image => {
  //         return {
  //             url: image.imagepath
  //         };
  //     });
  //     defaultMedia.push(...processedColorImages);
  // }

  // if (productData?.OriginalImagePath) {
  //     defaultMedia.push({ url: globImagePath +productData.OriginalImagePath });
  // }

  // if (videoUrl) {
  //     defaultMedia.push({ url: videoUrl });
  // }
  //   console.log('Default Image and Video--', defaultMedia);
  //   console.log('Default Image--',productData?.OriginalImagePath);
  //   console.log('Color Image--',updatedColorImage);
  //   console.log('Default Video--',videoUrl);


  // const defaultMedia = [];

  // if (Array.isArray(updatedColorImage)) {
  //     const processedColorImages = updatedColorImage.map(image => {
  //         const img = new Image();
  //         img.onload = () => {
  //             defaultMedia.push({ url: image.imagepath });
  //             // console.log('Image loaded successfully:', image.imagepath);
  //         };
  //         img.onerror = () => {
  //             console.error('Error loading image:', image.imagepath);
  //         };
  //         img.src = image.imagepath;
  //         return img;
  //     });
  // }

  // if (productData?.OriginalImagePath) {
  //     const originalImage = new Image();
  //     originalImage.onload = () => {
  //         defaultMedia.push({ url: globImagePath + productData.OriginalImagePath });
  //         // console.log('Original Image loaded successfully:', productData.OriginalImagePath);
  //     };
  //     originalImage.onerror = () => {
  //         console.error('Error loading Original Image:', productData.OriginalImagePath);
  //     };
  //     originalImage.src = globImagePath + productData.OriginalImagePath;
  // }

  // if (videoUrl) {
  //     defaultMedia.push({ url: videoUrl });
  //     // console.log('Video loaded successfully:', videoUrl);
  // }

  const [imagesData, setImagesData] = useState();
  const [imageLoadingStates, setImageLoadingStates] = useState({});

  // useEffect(() => {
  // const defaultMedia = [];

  //     const processedColorImages = updatedColorImage.map(image => {
  //         const img = new Image();
  //         img.onload = () => {
  //             defaultMedia.push({ url: image.imagepath });
  //         };
  //         img.onerror = () => {
  //             console.error('Error loading image:', image.imagepath);
  //         };
  //         img.src = image.imagepath;
  //         return img;
  //     });

  // if (productData?.OriginalImagePath) {
  //     const originalImage = new Image();
  //     originalImage.onload = () => {
  //         defaultMedia.push({ url: globImagePath + productData.OriginalImagePath });
  //     };
  //     originalImage.onerror = () => {
  //         console.error('Error loading Original Image:', productData.OriginalImagePath);
  //     };
  //     originalImage.src = globImagePath + productData.OriginalImagePath;
  // }

  // if (videoUrl) {
  //     defaultMedia.push({ url: videoUrl });
  // }
  //   setImagesData(defaultMedia)

  // }, [updatedColorImage, productData?.OriginalImagePath, videoUrl])

  // useEffect(() => {
  //   const defaultMedia = [];
  //   const loadImage = (src) => {
  //     return new Promise((resolve, reject) => {
  //       const img = new Image();
  //       img.onload = () => {
  //         resolve({ url: src });
  //       };
  //       img.onerror = () => {
  //         console.error('Error loading image:', src);
  //         reject(new Error('Error loading image'));
  //       };
  //       img.src = src;
  //     });
  //   };
  //   const loadColorImages = async () => {
  //     try {
  //       const colorImagePromises = updatedColorImage?.map(image => loadImage(image.imagepath));
  //       const processedColorImages = await Promise.all(colorImagePromises);
  //       defaultMedia.push(...processedColorImages);
  //     } catch (error) {
  //       console.error('Error loading color images:', error);
  //     }
  //   };
  //   const loadOriginalImage = async () => {
  //     if (productData?.OriginalImagePath) {
  //       try {
  //         const originalImageData = await loadImage(globImagePath + productData?.OriginalImagePath?.split(',')[0]);
  //         defaultMedia.push(originalImageData);
  //       } catch (error) {
  //         console.error('Error loading original image:', error);
  //       }
  //     }
  //   };
  //   const loadVideo = () => {
  //     if (videoUrl) {
  //       defaultMedia.push({ url: videoUrl });
  //     }
  //   };

  //   const loadMedia = async () => {
  //     if(updatedColorImage){
  //       await loadColorImages();
  //     }
  //     await loadOriginalImage();
  //     loadVideo();
  //   };

  //   loadMedia().then(() => setIsLoading(false));

  //   setImagesData(defaultMedia);

  // }, [updatedColorImage, productData?.OriginalImagePath, videoUrl]);


  useEffect(() => {
    const loadMedia = async () => {
      const defaultMedia = [];
      const newImageLoadingStates = {};

      const loadImage = (src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve({ url: src });
          img.onerror = (error) => reject(error);
          img.src = src;
        });
      };

      try {
        if (updatedColorImage) {
          const colorImagePromises = updatedColorImage.map(async (image, index) => {
            try {
              const loadedImage = await loadImage(image.imagepath);
              defaultMedia.push(loadedImage);
            } catch (error) {
              console.error('Error loading color image:', error);
            } finally {
              newImageLoadingStates[`color-${index}`] = false;
              setImageLoadingStates({ ...newImageLoadingStates });
            }
          });
          await Promise.all(colorImagePromises);
        }

        if (productData?.OriginalImagePath) {
          try {
            const originalImagePath = globImagePath + productData.OriginalImagePath.split(',')[0];
            const originalImageData = await loadImage(originalImagePath);
            defaultMedia.push(originalImageData);
          } catch (error) {
            console.error('Error loading original image:', error);
          } finally {
            newImageLoadingStates['original'] = false;
            setImageLoadingStates({ ...newImageLoadingStates });
          }
        }

        if (videoUrl) {
          defaultMedia.push({ url: videoUrl });
          newImageLoadingStates['video'] = false;
        }

        setImagesData(defaultMedia);
      } catch (error) {
        console.error('Error loading media:', error);
      } finally {
        // setIsLoading(false);
      }
    };

    loadMedia();
  }, [updatedColorImage, productData?.OriginalImagePath, videoUrl]);

  console.log('Default Image and Video--', imagesData);
  console.log('Default Image--', productData?.OriginalImagePath);
  console.log('Color Image--', updatedColorImage);
  console.log('Default Video--', videoUrl);


  const [currentSlide, setCurrentSlide] = useState(0);
  const [mediaItems, setMediaItems] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => setCurrentSlide(next),
  };
  console.log("default media", imagesData);


  const [imageURL, setImageURL] = useState('');
  const [customerID, setCustomerID] = useState('');
  const [yKey, setYouKey] = useState('');
  const [wishlistData, setWishlistData] = useState([]);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storeInit = JSON.parse(localStorage.getItem('storeInit'));
        const storedData = localStorage.getItem('loginUserDetail');
        const ImageURL = localStorage.getItem('UploadLogicalPath');
        setImageURL(ImageURL);
        const data = JSON.parse(storedData);
        const customerid = data.id;
        const priseShow = storeInit.IsPriceShow;
        setIsPriceShow(priseShow);
        setCustomerID(data.id);
        const customerEmail = data.userid;
        setUserEmail(customerEmail);
        const { FrontEnd_RegNo, ukey } = storeInit;
        setYouKey(ukey);
        const combinedValue = JSON.stringify({
          is_show_stock_website: "0", PageSize: "1000", CurrentPage: "1", FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerid}`, UploadLogicalPath: "", ukey: `${ukey}`, ThumDefImg: "", CurrencyRate: '1'
        });
        const encodedCombinedValue = btoa(combinedValue);
        const body = {
          "con": `{\"id\":\"Store\",\"mode\":\"GetWishList\",\"appuserid\":\"${customerEmail}\"}`,
          "f": "MyWishList (GetWishList)",
          p: encodedCombinedValue
        };
        const response = await CommonAPI(body);
        if (response.Data) {
          setWishlistData(response.Data.rd);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
      }
    };
    fetchData();
  }, []);


  return (
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
            {imagesData?.length <= 0 ?
              <Skeleton variant="rectangular" width='100%' height='100%' />
              :
              <Slider {...settings}>
                {imagesData?.map((image, index) => (
                  <div key={index}>
                    {image.url.endsWith('.mp4') ? (
                      <video autoPlay muted className="smilingDeatilPageMainImage">
                        <source src={image.url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img src={image.url} alt={`Slide ${index + 1}`} className="smilingDeatilPageMainImage" />
                    )}
                  </div>
                ))}
              </Slider>
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
                    className='partTitleKey'
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
                    <span className='partTitleKey'>Metal Purity :</span> {mtTypeOption ? mtTypeOption.split(" ")[1] : productData?.MetalPurity}
                  </span>
                  <sapn
                    style={{
                      textTransform: "capitalize",
                      fontSize: "12px",
                      color: "#7d7f85",
                    }}
                  >
                    <span className='partTitleKey'>Metal Color : </span> {selectedColor ? selectedColor : productData?.MetalColorName}
                  </sapn>
                  <sapn
                    style={{
                      textTransform: "capitalize",
                      fontSize: "12px",
                      color: "#7d7f85",
                    }}
                  >
                    <span className='partTitleKey'>Diamond Quality Color : </span>{" "}
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
              {isProductCuFlag === 1 && <div
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
                  {mtrdData.U === 1 ?
                    <span style={{ fontSize: "12.5px", color: "#7d7f85" }}>
                      {`${productData.MetalPurity} ${productData.MetalTypeName}`}
                    </span>
                    :
                    <select
                      style={{
                        border: "none",
                        outline: "none",
                        color: "#7d7f85",
                        fontSize: "12.5px",
                      }}
                      defaultValue={mtTypeOption}
                      onChange={(e) => {
                        setmtTypeOption(e.target.value)
                      }}
                    >
                      {metalType.map((data, index) => (
                        <option key={index} value={data.metalType}>
                          {data.metaltype}
                        </option>
                      ))}
                    </select>}
                </div>}

                {isMetalCutoMizeFlag == 1 && <Divider
                  orientation="vertical"
                  flexItem
                  style={{
                    opacity: 1,
                    height: "30px",
                    margin: "10px 10px 0px 10px",
                    marginTop: '20px'
                  }}
                />}

                {isMetalCutoMizeFlag == 1 &&
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: '45%',
                      marginTop: '20px'

                    }}
                  >
                    <label style={{ fontSize: "12.5px", color: "#7d7f85" }}>
                      METAL COLOR:
                    </label>
                    {mtrdData.U === 1 ?
                      <span style={{ fontSize: "12.5px", color: "#7d7f85" }}>
                        {productData.MetalColorName}
                      </span>
                      :
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
                      </select>}
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
                  {mtrdData?.U === 1 ?
                    <span style={{ fontSize: "12.5px", color: "#7d7f85" }}>
                      {`${productData.diamondquality}_${productData.diamondcolorname}`}
                    </span>
                    :
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
                    </select>}
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

                {isCColrStoneCustFlag === 1 &&
                  (productData?.totalcolorstonepcs !== 0 ||
                    productData?.totalcolorstoneweight !== 0) && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "49%",
                        marginTop: "20px",
                      }}
                    >
                      <label style={{ fontSize: "12.5px", color: "#7d7f85" }}>
                        COLOR STONE:
                      </label>
                      {mtrdData.U === 1 ? (
                        <span
                          style={{ fontSize: "12.5px", color: "#7d7f85" }}
                        >
                          {`${productData.colorstonequality}-${productData?.colorstonecolorname}`}
                        </span>
                      ) : (
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
                            <option
                              key={index}
                              value={`${data.Quality}_${data.color}`}
                            >
                              {`${data.Quality}_${data.color}`}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                  )}

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

              </div>}

              {isProductCuFlag === 1 && <div
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
                      outline: "none",
                      color: "#7d7f85",
                      border: "1px solid #e1e1e1",
                      fontSize: "12.5px",
                      height: '35px',
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
                        outline: "none",
                        color: "#7d7f85",
                        border: "1px solid #e1e1e1",
                        height: '35px',
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
                      outline: "none",
                      color: "#7d7f85",
                      fontSize: "12.5px",
                      border: "1px solid #e1e1e1",
                      height: '35px',
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
                        outline: "none",
                        color: "#7d7f85",
                        fontSize: "12.5px",
                        border: "1px solid #e1e1e1",
                        height: '35px',
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
                      marginTop: '20px'
                    }}
                  >
                    <label style={{ fontSize: "12.5px", color: "#7d7f85" }}>
                      SIZE:
                    </label>
                    <select
                      style={{
                        outline: "none",
                        color: "#7d7f85",
                        fontSize: "12.5px",
                        border: "1px solid #e1e1e1",
                        height: '35px',
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
                          value={size.sizename}
                          selected={
                            productData && productData.DefaultSize === size.sizename
                          }
                        >
                          {size.sizename}
                        </option>
                      ))}
                    </select>
                    <Divider sx={{
                      marginTop: '20px', background: '#a9a7a7',
                      marginTop: '20px'
                    }} />
                  </div>
                )}

              </div>}

              {isPriseShow == 1 && (
                <div style={{ marginTop: "23px" }}>
                  <p style={{ color: "#7d7f85", fontSize: "14px", display: 'flex' }}>
                    {/* Price: <span style={{ fontWeight: '500', fontSize: '16px' }}>{currencySymbol?.Currencysymbol}{`${(productData?.price - grandTotal) === 0 ? "Not Availabel" : (productData?.price - grandTotal)?.toFixed(2)}`}</span> */}
                    {/* Price: <span style={{ fontWeight: '500', fontSize: '16px' }}>{currencySymbol?.Currencysymbol}{`${productData?.UnitCost + (productData?.price - grandTotal)?.toFixed(2)}`}</span> */}
                    Price:{" "}
                    <span style={{ fontWeight: "500", fontSize: "16px", display: 'flex' }}>
                      <div dangerouslySetInnerHTML={{ __html: decodeEntities(currData?.Currencysymbol) }} />
                      {`${(
                        productData?.UnitCost +
                        (((mtrdData?.V ?? 0) / currData?.CurrencyRate) + (mtrdData?.W ?? 0)) +
                        (dqcData ?? 0) +
                        (csqcData ?? 0) +
                        (sizeMarkup ?? 0) +
                        (metalUpdatedPrice() ?? 0) +
                        (diaUpdatedPrice() ?? 0) +
                        (colUpdatedPrice() ?? 0)
                      ).toFixed(2)}`}
                    </span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

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
                  {acc && accNo === "1" ? "  PRODUCT DETAILS" : " PRODUCT DETAILS"}
                  <span className='productShowIcon' style={{ fontSize: "24px" }}>
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
                          MetalPurity: <b>{productData?.MetalPurity}</b>
                        </span>
                        {/* <span>
                            <b>MetalWeight</b>: {productData?.MetalWeight}
                          </span> */}
                        <span>
                          GrossWeight:
                          <b>{(
                            productData?.Grossweight +
                            (metalFilterData.length === 0
                              ? 0
                              : metalFilterData[0]?.Weight) +
                            (daimondFilterData.length === 0
                              ? 0
                              : daimondFilterData[0]?.Weight / 5)
                          ).toFixed(2)}</b>
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
                          DiamondWeight:{" "}
                          <b>{daimondFilterData?.length
                            ? (
                              productData?.diamondweight +
                              daimondFilterData[0]?.Weight
                            ).toFixed(2)
                            : productData?.diamondweight}</b>
                        </span>
                        <span>
                          Diamondpcs:{" "}
                          <b>{daimondFilterData?.length
                            ? productData?.diamondpcs +
                            daimondFilterData[0]?.pieces
                            : productData?.diamondpcs}</b>
                        </span>
                        <span>
                          NumberOfDiamonds:{" "}
                          <b>{daimondFilterData?.length
                            ? productData?.diamondpcs +
                            daimondFilterData[0]?.pieces
                            : productData?.diamondpcs}</b>
                        </span>
                      </div>
                      <div className="srFloat">
                        <span>
                          Netwt:{" "}
                          <b>{metalFilterData?.length
                            ? (
                              productData?.netwt +
                              metalFilterData[0]?.Weight
                            ).toFixed(2)
                            : productData?.netwt}</b>
                        </span>
                        <span>
                          DiamondQuality: <b>{productData?.diamondquality}</b>
                        </span>
                        <span>
                          DiamondColorname:{" "}
                          <b>{productData?.diamondcolorname}</b>
                        </span>
                        <span>
                          TotalDiamondWeight: {" "}
                          <b>{daimondFilterData?.length
                            ? (
                              productData?.diamondweight +
                              daimondFilterData[0]?.Weight
                            ).toFixed(2)
                            : productData?.diamondweight}</b>
                        </span>
                        <span>
                          DiamondSetting: <b>{productData?.diamondsetting}</b>
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

        {(designSetList.length !== 0 && showIcateDesign === 1) &&
          <div className='smilingCompleteLookMainWeb' style={{ position: 'relative', marginInline: '10%', display: 'flex', alignItems: 'center', marginBottom: '7%', marginTop: '7%' }}>
            <div className='similiarBrand' style={{ right: '0px', position: 'absolute', display: 'flex', alignItems: 'center', flexDirection: 'column', marginBottom: '100px', marginTop: !(productData?.OriginalImagePath) && '120px' }}>
              <div style={{ marginBottom: '12px' }}>
                <span style={{ fontFamily: 'FreightDisp Pro Medium', color: '#7d7f85', fontSize: '26px' }}>Complete The Look</span>
              </div>
              <div style={{ border: '1px solid #e1e1e1', backgroundColor: 'white', borderRadius: '4px', padding: '30px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
                {
                  designSetList?.slice(0, 3)?.map((dsl, i) => (
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
                          {(i !== designSetList?.slice(0, 3).length - 1) && <div style={{ borderBottom: '1px solid #e1e1e1', position: "absolute", bottom: "-18.5px", left: "0", width: "100%", }}></div>}
                        </div>
                      </div>
                    </>
                  ))
                }
              </div>
            </div>

            <img
              src={`${uploadLogicPath}/${uKey}/Photo_original/designmanagement_designset/${designUniqueNO}/${completeBackImage}`}
              style={{ width: '800px' }}
            />
          </div>
        }

        {(designSetList.length !== 0 && showIcateDesign === 1) &&
          <div className='smilingCompleteLookMainMobile' style={{ position: 'relative', marginInline: '5%', marginBottom: '7%', marginTop: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={`${uploadLogicPath}/${uKey}/Photo_original/designmanagement_designset/${designUniqueNO}/${completeBackImage}`}
                className='smilingCompleteLookMainMobileImg'
              />
            </div>
            <div className='similiarBrand' style={{ display: 'flex', marginBottom: '100px', alignItems: 'center', flexDirection: 'column', marginTop: !(productData?.OriginalImagePath) && '120px' }}>
              <div style={{ margin: '12px 0px 12px 0px' }}>
                <span style={{ fontFamily: 'FreightDisp Pro Medium', color: '#7d7f85', fontSize: '26px' }}>Complete The Look</span>
              </div>
              <div style={{ display: 'flex', width: '100%', overflow: 'auto', gap: '3px', padding: '0px 7px 0px 7px' }}>
                {designSetList?.map((dsl, i) => (
                  <div key={i} style={{ width: '49%' }} onClick={() => handelDesignSet(dsl)}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid rgba(0, 0, 0, 0.04)', padding: '15px', borderRadius: '4px' }}>
                      <div>
                        <img src={!(dsl?.ThumbImagePath) ? notFound : dsl?.imagepath + dsl?.ThumbImagePath.split(",")[0]} alt={""} style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                      </div>
                      <div style={{ marginTop: '15px', textAlign: 'center', height: '40px', overflow: 'hidden' }}>
                        <div style={{ color: '#7D7f85', fontSize: '13px' }}>
                          {dsl?.TitleLine} ({dsl?.designno})
                        </div>
                        <div style={{ fontSize: '14px', color: '#888' }}>
                          {dsl?.description}
                        </div>
                        {/* <div style={{ marginTop: '10px', cursor: 'pointer' }} onClick={() => handelDesignSet(dsl)}>
                            <NavigateNextRoundedIcon />
                          </div> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        }


        {wishlistData?.length !== 0 &&
          <div style={{padding: '5px'}}>
          <div className='recentlyMain'>
            <p style={{ fontSize: '22px',color:'gray', margin: '10px 0px 10px 20px', fontWeight: 600, }}>Recently View</p>
            <div style={{ display: 'flex', width: '100%', overflow: 'auto', gap: '3px', padding: '0px 7px 0px 7px', marginBottom: '7%', }}>
              {wishlistData?.map((dsl, i) => (
                <div key={i} style={{ width: '49%' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid rgb(0 0 0 / 9%)', margin: '5px', borderRadius: '4px' }}>
                    <div>
                      <img src={`${imageURL}/${yKey}/${dsl.DefaultImageName}`} alt={""} style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                    </div>
                    <div style={{ marginTop: '15px', textAlign: 'center', height: '40px', overflow: 'hidden' }}>
                      <div style={{ color: '#7D7f85', fontSize: '13px' }}>
                        {dsl?.TitleLine} ({dsl?.designno})
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
        }

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
        <div style={{ display: 'flex', borderTop: '1px solid rgba(0, 0, 0, 0.06)', position: 'fixed', bottom: '0', background: 'white', width: "100%", height: '7vh', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}>
          <button
            style={{
              width: '50%',
              padding: '10px',
              textAlign: 'center',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600',
              backgroundColor: '#fff',
              color: 'black',
            }}
            onClick={() => setAddWishlistFlag(!addToWishlistFlag)}
          >
            {addToWishlistFlag ? "Remove to Wishlist" : "Add to Wishlist"}
          </button>
          <button
            style={{
              width: '50%',
              padding: '10px',
              textAlign: 'center',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600',
              backgroundColor: 'rgba(255, 159, 0, 0.7)',
              color: 'black',
            }}
            onClick={() => setAddToCartFlag(!addToCartFlag)}
          >
            {addToCartFlag ? "Remove from cart" : "Add to cart"}
          </button>
        </div>
        {/* <button
          style={{
            position: 'fixed',
            bottom: 0,
            height: '8vh',
            width: '100%',
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#f0f0f0',
            color: '#7D7f85',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
            transition: 'background-color 0.3s',
          }}
          onClick={() => setAddToCartFlag(!addToCartFlag)}
        >
          {addToCartFlag ? "REMOVE FROM CART" : "ADD TO CART"}
        </button> */}
      </div>
    </div>
  );
}

export default ProdDetail