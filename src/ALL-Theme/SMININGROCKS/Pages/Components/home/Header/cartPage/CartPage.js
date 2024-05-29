import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  CircularProgress,
  Dialog,
  Divider,
  Drawer,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Footer from "../../Footer/Footer";
import {
  CartListCounts,
  WishListCounts,
  colorstoneQualityColorG,
  diamondQualityColorG,
  metalTypeG,
  priceData,
} from "../../../../../../../Recoil/atom";
import { GetCount } from "../../../../../Utils/API/GetCount";
import { CommonAPI } from "../../../../../Utils/API/CommonAPI";
import "./CartPage.css";
import { ToastContainer, toast } from "react-toastify";
import { FiArrowLeft } from "react-icons/fi";
import { IoArrowBack } from "react-icons/io5";
import noData from '../../../../assets/noData.png'


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function CartPage() {
  const [cartListData, setCartListData] = useState([]);
  const [imageURL, setImageURL] = useState("");
  const [yKey, setYouKey] = useState("");
  const [customerID, setCustomerID] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isProductCuFlag, setIsProductCuFlag] = useState("");
  const [isMetalCutoMizeFlag, setIsMetalCutoMizeFlag] = useState("");
  const [isDaimondCstoFlag, setIsDaimondCstoFlag] = useState("");
  const [isCColrStoneCustFlag, setIsCColrStoneCustFlag] = useState("");
  const [currency, setCurrency] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingDrawer, setIsLoadingDrawer] = useState(false);
  const [colorData, setColorData] = useState([]);
  const [metalColorData, setMetalColorData] = useState([]);
  const [metalType, setMetalType] = useState([]);
  const [DaimondQualityColor, setDaimondQualityColor] = useState([]);
  const [showDropdowns, setShowDropdowns] = useState(
    Array(cartListData.length).fill(false)
  );
  const [prodSelectData, setProdSelectData] = useState();
  const [sizeOption, setSizeOption] = useState();
  const [metalFilterData, setMetalFilterData] = useState([]);
  const [daimondFilterData, setDaimondFiletrData] = useState([]);
  const [diaQColOpt, setDiaQColOpt] = useRecoilState(diamondQualityColorG);
  const [cSQopt, setCSQOpt] = useRecoilState(colorstoneQualityColorG);
  const [mtTypeOption, setmtTypeOption] = useRecoilState(metalTypeG);

  const [productData, setProductData] = useState();

  const [cartSelectData, setCartSelectData] = useState();
  const [getAllFilterSizeData, setGetAllFilterSizeData] = useState([]);
  const [sizeData, setSizeData] = useState([]);

  const [mtrdData, setMtrdData] = useState([]);
  const [dqcData, setDqcData] = useState();
  const [csqcData, setCsqcData] = useState();
  const [selectedColor, setSelectedColor] = useState()
  const [getPriceData, setGetPriceData] = useState([])
  const [csqcRate, setCsqcRate] = useState()
  const [csqcSettRate, setCsqcSettRate] = useState()


  const [dialogOpen, setDialogOpen] = useState(false)
  const [dqcSettRate, setDqcSettRate] = useState()
  const [dqcRate, setDqcRate] = useState()
  const [totalValue, setTotlaValue] = useState(0);

  const setCartCount = useSetRecoilState(CartListCounts);
  const setWishCount = useSetRecoilState(WishListCounts);
  //   const getPriceData = useRecoilValue(priceData);
  const [currData, setCurrData] = useState()

  const [isPriceShow, setIsPriceShow] = useState('');


  const handelCurrencyData = () => {
    let currencyData = JSON.parse(localStorage.getItem('CURRENCYCOMBO'));
    let loginData = JSON.parse(localStorage.getItem('loginUserDetail'));
    let storeinit = JSON.parse(localStorage.getItem("storeInit"))
    setIsPriceShow(storeinit.IsPriceShow);

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


  const navigation = useNavigate();
  let currencySymbol = JSON.parse(localStorage.getItem('CURRENCYCOMBO'))

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("getPriceData"))
    setGetPriceData(data)
  }, [])

  useEffect(() => {
    if (cartListData) {
      let totalUnitCost = cartListData.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.UnitCost;
      }, 0);

      setTotlaValue(totalUnitCost);
    }


    if (!cartListData && cartListData.length === 0) {
      setProdSelectData();
      setCartSelectData();
    }

  }, [cartListData])


  const getCountFunc = async () => {
    await GetCount().then((res) => {
      if (res) {
        setCartCount(res.CountCart);
        setWishCount(res.WishCount);
      }
    });
  };

  useEffect(() => {
    if (cartListData && !cartSelectData) {
      setCartSelectData(cartListData[0]);
      getSizeData(cartListData[0]?.autocode);
    }
  }, [cartListData, cartSelectData]);


  useEffect(() => {
    let srProductsData = JSON.parse(localStorage.getItem('srProductsData'));
    const storeInit = JSON.parse(localStorage.getItem('storeInit'));

    let mtrd = getPriceData?.rd?.filter((ele) =>
      storeInit?.IsMetalCustomization === 1
        ?
        ele?.A === cartSelectData?.autocode &&
        ele?.B === cartSelectData?.designno &&
        ele?.D === mtTypeOption
        :
        ele?.A === cartSelectData?.autocode &&
        ele?.B === cartSelectData?.designno

    );


    let showPrice = 0;
    if (mtrd && mtrd.length > 0) {
      // showPrice = srProductsData?.price - ((srProductsData?.price - srProductsData?.metalrd) + (mtrd[0]?.Z ?? 0));
      setMtrdData(mtrd[0])
      // setMetalPrice(mtrd[0]?.Z ?? 0)
    } else {
      setMtrdData([]);
    }

    let diaqcprice = getPriceData?.rd1?.filter((ele) =>
      storeInit?.IsDiamondCustomization === 1
        ?
        ele.A === cartSelectData?.autocode &&
        ele.B === cartSelectData?.designno &&
        ele.H === diaQColOpt?.split("_")[0] &&
        ele.J === diaQColOpt?.split("_")[1]
        :
        ele.A === cartSelectData?.autocode &&
        ele.B === cartSelectData?.designno

    )

    let showPrice1 = 0;
    if (diaqcprice && diaqcprice.length > 0) {
      // showPrice1 = srProductsData?.price - ((srProductsData?.price - srProductsData?.diard1) + (diaqcprice[0]?.S ?? 0));
      let totalPrice = diaqcprice?.reduce((acc, obj) => acc + obj.S, 0)
      let diaRate = diaqcprice?.reduce((acc, obj) => acc + obj.O, 0)
      let diaSettRate = diaqcprice?.reduce((acc, obj) => acc + obj.Q, 0)

      setDqcRate(diaRate)
      setDqcSettRate(diaSettRate)
      setDqcData(totalPrice)
      // setDQCPrice(diaqcprice[0]?.S ?? 0)
    } else {
      setDqcRate(0)
      setDqcSettRate(0)
      setDqcData(0)
    }


    let csqcpirce = getPriceData?.rd2?.filter((ele) =>
      storeInit?.IsCsCustomization === 1
        ?
        ele.A === cartSelectData?.autocode &&
        ele.B === cartSelectData?.designno &&
        ele.H === cSQopt?.split("_")[0] &&
        ele.J === cSQopt?.split("_")[1]
        :
        ele.A === cartSelectData?.autocode &&
        ele.B === cartSelectData?.designno

    );


    let showPrice2 = 0;
    if (csqcpirce && csqcpirce.length > 0) {
      // showPrice2 = srProductsData?.price - ((srProductsData?.price - srProductsData?.csrd2) + (csqcpirce[0]?.S ?? 0));
      let totalPrice = csqcpirce?.reduce((acc, obj) => acc + obj.S, 0)
      let diaRate = csqcpirce?.reduce((acc, obj) => acc + obj.O, 0)
      let diaSettRate = csqcpirce?.reduce((acc, obj) => acc + obj.Q, 0)
      setCsqcData(totalPrice)
      setCsqcRate(diaRate)
      setCsqcSettRate(diaSettRate)
      // setCSQCPrice(csqcpirce[0]?.S ?? 0)
    } else {
      setCsqcData(0)
      setCsqcRate(0)
      setCsqcSettRate(0)
    }

    // let gt = showPrice + showPrice1 + showPrice2;
    // setGrandTotal(gt ?? 0);

  }, [getPriceData, mtTypeOption, diaQColOpt, cSQopt, cartSelectData])


  useEffect(() => {
    setmtTypeOption(cartSelectData?.metal);

    let qualityColor = `${cartSelectData?.diamondquality}_${cartSelectData?.diamondcolor}`;
    setDiaQColOpt(qualityColor);

    let csQualColor = `${cartSelectData?.colorstonequality}_${cartSelectData?.colorstonecolor}`;
    setCSQOpt(csQualColor);

    setSelectedColor(cartSelectData?.metalcolorname)

  }, [cartSelectData])


  useEffect(() => {
    getCountFunc();
  }, []);

  useEffect(() => {
    const currencyCombo = JSON.parse(localStorage.getItem("CURRENCYCOMBO"));
    setCurrency(currencyCombo?.Currencysymbol);
    getCartData();
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("QualityColor"));
    if (storedData) {
      setColorData(storedData);
    }

    const storedData1 = JSON.parse(
      localStorage.getItem("ColorStoneQualityColor")
    );
    if (storedData1) {
      setDaimondQualityColor(storedData1);
    }

    const storedData2 = JSON.parse(localStorage.getItem("MetalTypeData"));
    if (storedData2) {
      setMetalType(storedData2);
    }

    const storedData3 = JSON.parse(localStorage.getItem("MetalColorData"));
    if (storedData3) {
      setMetalColorData(storedData3);
    }
  }, []);

  const handelLocalStorage = () => {
    let localProductData = JSON.parse(localStorage.getItem("srProductsData"));
    setProductData(localProductData);
  };

  useEffect(() => {
    handelLocalStorage();
  }, []);

  const getSizeData = async (item) => {
    try {
      const storedEmail = localStorage.getItem("registerEmail") || "";
      const storeInit = JSON.parse(localStorage.getItem("storeInit"));
      const { FrontEnd_RegNo } = storeInit;

      const storedData = localStorage.getItem("loginUserDetail") || "0";
      const data = JSON.parse(storedData);
      const customerid = data?.id;
      const combinedValue = JSON.stringify({
        autocode: `${item}`,
        FrontEnd_RegNo: `${FrontEnd_RegNo}`,
        Customerid: `${customerid}`,
      });
      const encodedCombinedValue = btoa(combinedValue);
      const body = {
        con: `{\"id\":\"\",\"mode\":\"CATEGORYSIZECOMBO\",\"appuserid\":\"${storedEmail}\"}`,
        f: "index (getSizeData)",
        p: encodedCombinedValue,
      };
      const response = await CommonAPI(body);
      if (response.Data?.rd) {
        setSizeData(response.Data.rd);
        const sizeDropdownData = response.Data.rd;
        setGetAllFilterSizeData(response.Data.rd1);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };




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


  const handleSave = (index) => {
    // Your save logic here
    const newShowDropdowns = [...showDropdowns];
    newShowDropdowns[index] = false;
    setShowDropdowns(newShowDropdowns);
  };

  const getCartData = async () => {
    try {
      // cartListData.length === 0 && setIsLoading(true);
      cartListData.length === 0 && setIsLoading(true);
      const ImageURL = localStorage.getItem("UploadLogicalPath");
      setImageURL(ImageURL);
      const storeInit = JSON.parse(localStorage.getItem("storeInit"));
      const storedData = localStorage.getItem("loginUserDetail");
      const data = JSON.parse(storedData);
      const customerid = data.id;
      setIsProductCuFlag(storeInit.IsProductWebCustomization);
      setIsMetalCutoMizeFlag(storeInit.IsMetalCustomization);
      setIsDaimondCstoFlag(storeInit.IsDiamondCustomization);
      setIsCColrStoneCustFlag(storeInit.IsCsCustomization);
      setCustomerID(data.id);
      const customerEmail = data.userid;
      setUserEmail(customerEmail);

      const { FrontEnd_RegNo, ukey } = storeInit;
      setYouKey(ukey);

      const combinedValue = JSON.stringify({
        CurrentPage: "1",
        PageSize: "1000",
        ukey: `${ukey}`,
        CurrRate: "1",
        FrontEnd_RegNo: `${FrontEnd_RegNo}`,
        Customerid: `${customerid}`,
      });

      const encodedCombinedValue = btoa(combinedValue);
      const body = {
        con: `{\"id\":\"\",\"mode\":\"GetCartDetails\",\"appuserid\":\"${customerEmail}\"}`,
        f: "Header (getCartData)",
        p: encodedCombinedValue,
      };
      const response = await CommonAPI(body);

      if (response?.Data) {
        if (response.Data.rd[0].stat === 0) {
          setCartListData([]);
        } else {
          setCartListData(response?.Data?.rd);
        }
        setMainRemarks(response?.Data?.rd[0].OrderRemarks);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  console.log('cartListDatacartListDatacartListData', cartListData);
  const handleRemove = async (data) => {
    try {
      setIsLoading(true);
      const storeInit = JSON.parse(localStorage.getItem("storeInit"));
      const { FrontEnd_RegNo } = storeInit;
      const combinedValue = JSON.stringify({
        designno: `${data.designno}`,
        autocode: `${data.autocode}`,
        metalcolorid: "0",
        isSolStockNo: "0",
        is_show_stock_website: "0",
        isdelete_all: "0",
        FrontEnd_RegNo: `${FrontEnd_RegNo}`,
        Customerid: `${customerID}`,
        cartidlist: "",
      });
      const encodedCombinedValue = btoa(combinedValue);
      const body = {
        con: `{\"id\":\"Store\",\"mode\":\"removeFromCartList\",\"appuserid\":\"${userEmail}\"}`,
        f: "myWishLisy (handleRemoveCatList)",
        p: encodedCombinedValue,
      };
      const response = await CommonAPI(body);
      if (response.Data.rd[0].stat === 1) {
        await getCartData();
        await getCountFunc();
        let prevIndexofCartList = cartListData?.findIndex((cld) => cld?.autocode === data?.autocode)
        if (prevIndexofCartList === 0) {
          setCartSelectData()
        } else {
          setCartSelectData(cartListData[prevIndexofCartList - 1]);
        }
      } else {
        alert("Error");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const [Mainremarks, setMainRemarks] = useState("");
  const handleInputChangeMainRemarks = (e) => {
    setMainRemarks(e.target.value);
  };
  const submitMainRemrks = async () => {
    if (!Mainremarks || Mainremarks.trim() === "") {
      toast.error("Enter a value for remark.");
    } else {
      try {
        setIsLoading(true);
        const storeInit = JSON.parse(localStorage.getItem("storeInit"));
        const { FrontEnd_RegNo } = storeInit;
        const combinedValue = JSON.stringify({
          orderremarks: `${Mainremarks}`,
          FrontEnd_RegNo: `${FrontEnd_RegNo}`,
          Customerid: `${customerID}`,
        });
        const encodedCombinedValue = btoa(combinedValue);
        const body = {
          con: `{\"id\":\"\",\"mode\":\"SAVEORDERREMARK\",\"appuserid\":\"${userEmail}\"}`,
          f: "Header (handleMainRemrks)",
          p: encodedCombinedValue,
        };
        const response = await CommonAPI(body);
        if (response.Data.rd[0].stat === 1) {
          toast.success("Add remark successfully");
        } else {
          alert("Error");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };


  const [remarks, setRemarks] = useState(cartSelectData?.Remarks || '');
  const handleInputChangeRemarks = (event, index) => {
    let { value } = event.target;
    setRemarks(value);
  };

  const handleSubmit = async (data) => {
    try {
      // setIsLoading(true);
      const storeInit = JSON.parse(localStorage.getItem("storeInit"));
      const { FrontEnd_RegNo } = storeInit;
      const combinedValue = JSON.stringify({
        designno: `${data.designno}`,
        autocode: `${data.autocode}`,
        remarks: `${remarks}`,
        FrontEnd_RegNo: `${FrontEnd_RegNo}`,
        Customerid: `${customerID}`,
      });
      const encodedCombinedValue = btoa(combinedValue);
      const body = {
        con: `{\"id\":\"\",\"mode\":\"SAVEDESIGNREMARK\",\"appuserid\":\"${userEmail}\"}`,
        f: "Header (handleSingleRemaksSubmit)",
        p: encodedCombinedValue,
      };
      const response = await CommonAPI(body);
      if (response.Data.rd[0].stat === 1) {
        await getCartData()
      } else {
        alert("Error");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const [lastEnteredQuantity, setLastEnteredQuantity] = useState(cartSelectData?.Quantity || "");
  useEffect(() => {
    setLastEnteredQuantity(cartSelectData?.Quantity || "");
  }, [cartSelectData]);

  const handleInputChange = (event) => {
    let { value } = event.target;
    // Prevent entering "0" as the first character
    if (value.length === 1 && value === '0') {
      value = '';
    }
    setLastEnteredQuantity(value);
  };


  const handleUpdateQuantity = async (designNo, updatedQuantity) => {

    console.log('dessssssssss', designNo);
    console.log('updateddddd', updatedQuantity);

    try {
      setIsLoadingDrawer(true);
      const storeInit = JSON.parse(localStorage.getItem("storeInit"));
      const { FrontEnd_RegNo } = storeInit;
      const combinedValue = JSON.stringify({
        designno: `${designNo}`,
        Quantity: `${updatedQuantity}`,
        FrontEnd_RegNo: `${FrontEnd_RegNo}`,
        Customerid: `${customerID}`,
      });
      const encodedCombinedValue = btoa(combinedValue);
      const body = {
        con: `{\"id\":\"\",\"mode\":\"UpdateQuantity\",\"appuserid\":\"${userEmail}\"}`,
        f: "header (handleUpdateQuantity)",
        p: encodedCombinedValue,
      };
      const response = await CommonAPI(body);
      if (response.Data.rd[0].stat === 1) {
        await getCartData()
      } else {
        toast.error("Error");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoadingDrawer(false);
    }
  };

  const [value, setValue] = useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleRemoveAllWishList = async () => {
    try {
      setIsLoading(true);
      const storeInit = JSON.parse(localStorage.getItem("storeInit"));
      const { FrontEnd_RegNo } = storeInit;
      const combinedValue = JSON.stringify({
        designno: "",
        autocode: "",
        metalcolorid: "0",
        isSolStockNo: "0",
        is_show_stock_website: "0",
        isdelete_all: "1",
        FrontEnd_RegNo: `${FrontEnd_RegNo}`,
        Customerid: `${customerID}`,
        cartidlist: "",
      });
      const encodedCombinedValue = btoa(combinedValue);
      const body = {
        con: `{\"id\":\"Store\",\"mode\":\"removeFromCartList\",\"appuserid\":\"${userEmail}\"}`,
        f: "myWishLisy (handleRemoveCatList)",
        p: encodedCombinedValue,
      };
      const response = await CommonAPI(body);
      if (response.Data.rd[0].stat === 1) {
        getCartData();
        getCountFunc();
      } else {
        alert("Error");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const prodData = JSON.parse(localStorage.getItem("allproductlist"))
    let isCartData = cartSelectData ? cartSelectData : cartListData[0]

    const finalProdData = prodData.filter(
      (pd) =>
        pd?.designno === isCartData?.designno &&
        pd?.autocode === isCartData?.autocode
    )[0]

    console.log('finaaaaaaaaaaaaaaaaaaaaaaaaaa', finalProdData);
    if (finalProdData) {
      setProdSelectData(finalProdData)
    }
  }, [cartSelectData, cartListData])


  const [sizeMarkup, setSizeMarkup] = useState()

  const handelSize = (data) => {
    const selectedSize = sizeData.find((size) => size.sizename === data)
    if (selectedSize) {
      setSizeMarkup(selectedSize?.MarkUp);
    }
    setSizeOption(data);
    const filteredData = getAllFilterSizeData?.filter(
      (item) => item.sizename === data
    )
    const filteredDataMetal = filteredData?.filter(
      (item) => item.DiamondStoneTypeName === "METAL"
    )
    const filteredDataDaimond = filteredData?.filter(
      (item) => item.DiamondStoneTypeName === "DIAMOND"
    )
    setMetalFilterData(filteredDataMetal)
    setDaimondFiletrData(filteredDataDaimond)
  };


  const decodeEntities = (html) => {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
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
      // if (res?.Message === "Success") {
      //   setCartData(res?.Data?.rd)
      //   setWishData(res?.Data?.rd1)
      // }
    })

  }

  const handleCartUpdate = async () => {
    console.log("save")
    const allproductlist = JSON.parse(localStorage.getItem("allproductlist"));

    const filterProdData = allproductlist?.filter(
      (allpd) =>
        allpd?.autocode === cartListData[0]?.autocode &&
        allpd?.designno === cartListData[0]?.designno
    );

    const storeInit = JSON.parse(localStorage.getItem("storeInit"))
    const UserEmail = localStorage.getItem("registerEmail")
    const Customer_id = JSON.parse(localStorage.getItem("loginUserDetail"));



    let product = filterProdData[0]
    let updatPrice = ((((mtrdData?.V ?? 0) / currData?.CurrencyRate + (mtrdData?.W ?? 0)) +
      (dqcData ?? 0) +
      (csqcData ?? 0) +
      (sizeMarkup ?? 0) +
      (metalUpdatedPrice() ?? 0) +
      (diaUpdatedPrice() ?? 0) +
      (colUpdatedPrice() ?? 0)
    ).toFixed(2) ?? 0)


    console.log('updatPrice', updatPrice);

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
      "AdditionalValWt": `${product?.AdditionalValWt}`,
      "BrandName": `${product?.BrandName ?? ""}`,
      "Brandid": `${product?.Brandid}`,
      "CategoryName": `${product?.CategoryName}`,
      "Categoryid": `${product?.Categoryid}`,
      "CenterStoneId": `${product?.CenterStoneId}`,
      "CenterStonePieces": `${product?.CenterStonePieces}`,
      "CollectionName": `${product?.CollectionName}`,
      "Collectionid": `${product?.Collectionid}`,
      "ColorWiseRollOverImageName": `${product?.ColorWiseRollOverImageName}`,
      "DefaultImageName": `${product?.DefaultImageName}`,
      "DisplayOrder": `${product?.DisplayOrder}`,
      "FrontEnd_OrderCnt": `${product?.FrontEnd_OrderCnt}`,
      "GenderName": `${product?.GenderName}`,
      "Genderid": `${product?.Genderid}`,
      "Grossweight": `${product?.Grossweight}`,
      "InReadyStockCnt": `${product?.InReadyStockCnt}`,
      "IsBestSeller": `${product?.IsBestSeller}`,
      "IsColorWiseImageExists": `${product?.IsColorWiseImageExists ?? 0}`,
      "IsInReadyStock": `${product?.IsInReadyStock}`,
      "IsNewArrival": `${product?.IsNewArrival}`,
      "IsRollOverColorWiseImageExists": `${product?.IsRollOverColorWiseImageExists ?? ""}`,
      "IsTrending": `${product?.IsTrending}`,
      "MasterManagement_labid": `${product?.MasterManagement_labid}`,
      "MasterManagement_labname": "",
      "MetalColorName": `${selectedColor ?? product?.MetalColorName}`,
      "MetalColorid": `${product?.MetalColorid}`,
      "MetalPurity": `${mtTypeOption ? (mtTypeOption?.split(' ')[1]) : product?.MetalPurity}`,
      "MetalPurityid": `${product?.MetalTypeid}`,
      "MetalTypeName": `${mtTypeOption ? mtTypeOption?.split(' ')[0] : product?.MetalTypeName}`,
      "MetalTypeid": `${product?.IsInReadyStock}`,
      "MetalWeight": `${product?.MetalWeight}`,
      "OcassionName": `${product?.OcassionName ?? ""}`,
      "Ocassionid": `${product?.Ocassionid}`,
      "ProducttypeName": `${product?.ProducttypeName}`,
      "Producttypeid": `${product?.Producttypeid}`,
      "RollOverImageName": `${product?.RollOverImageName}`,
      "SubCategoryName": `${product?.SubCategoryName ?? ""}`,
      "SubCategoryid": `${product?.SubCategoryid}`,
      "ThemeName": `${product?.ThemeName ?? ""}`,
      "Themeid": `${product?.Themeid}`,
      "TitleLine": `${product?.TitleLine}`,
      "UnitCost": `${updatPrice ? (updatPrice ?? 0) : (product?.UnitCost ?? 0)}`,
      "UnitCostWithmarkup": (`${(updatPrice ? (updatPrice ?? 0) : (product?.UnitCost ?? 0)) + (product?.markup ?? 0)}`),
      "colorstonecolorname": `${cSQopt ? cSQopt?.split('_')[1] : product?.colorstonecolorname}`,
      "colorstonequality": `${cSQopt ? cSQopt?.split('_')[0] : product?.colorstonequality}`,
      "diamondcolorname": `${diaQColOpt ? diaQColOpt?.split('_')[1] : product?.diamondcolorname}`,
      "diamondpcs": `${product?.diamondpcs}`,
      "diamondquality": `${(diaQColOpt ? diaQColOpt?.split('_')[0] : product?.diamondquality?.split(",")[0])}`,
      "diamondsetting": `${product?.diamondsetting}`,
      "diamondshape": `${product?.diamondshape}`,
      "diamondweight": `${product?.diamondweight}`,
      "encrypted_designno": `${product?.encrypted_designno ?? ""}`,
      "hashtagid": `${product?.Hashtagid ?? ""}`,
      "hashtagname": `${product?.Hashtagname ?? ""}`,
      "imagepath": `${product?.imagepath}`,
      "mediumimage": `${product?.MediumImagePath ?? ""}`,
      "originalimage": `${product?.OriginalImagePath}`,
      "storyline_html": `${product?.storyline_html ?? ""}`,
      "storyline_video": `${product?.storyline_video ?? ""}`,
      "thumbimage": `${product?.ThumbImagePath}`,
      "totaladditionalvalueweight": `${product?.totaladditionalvalueweight}`,
      "totalcolorstoneweight": `${product?.totalcolorstoneweight}`,
      "totaldiamondweight": `${product?.totaldiamondweight}`,
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

    let Data = { "designno": `${cartSelectData?.designno}`, "autocode": `${cartSelectData?.autocode}`, "metalcolorid": 0, "isSolStockNo": 0, "is_show_stock_website": "0", "isdelete_all": 0, "FrontEnd_RegNo": `${storeInit?.FrontEnd_RegNo}`, "Customerid": `${Customer_id?.id}`, "cartidlist": "" }
    console.log('DataDataRemovee', Data);
    let encodedCombinedValue1 = btoa(JSON.stringify(Data))

    const body1 = {
      con: `{\"id\":\"\",\"mode\":\"removeFromCartList\",\"appuserid\":\"${UserEmail}\"}`,
      f: "RemoveFromCartIconClick (removeFromCartList)",
      p: encodedCombinedValue1,
    }

    await CommonAPI(body1).then(async (res) => {
      if (res?.Data?.rd[0]?.stat_msg === "success") {
        // await getCartAndWishListData()
        // getCountFunc()

        const encodedCombinedValue = btoa(JSON.stringify(finalJSON));

        const body = {
          con: `{\"id\":\"\",\"mode\":\"ADDTOCART\",\"appuserid\":\"${UserEmail}\"}`,
          f: "AddToCartIconClick (ADDTOCART)",
          p: encodedCombinedValue,
        };

        await CommonAPI(body).then(async (res) => {
          if (res?.Data?.rd[0]?.msg === "success") {
            await getCartAndWishListData()
            getCountFunc()
            getCartData()
          }
          else {
            console.log("error", res);
          }
        }).catch((error) => {
          console.log("error", error);

        })

      }
    })
  }



  const increment = () => {
    setLastEnteredQuantity(lastEnteredQuantity + 1);
  };

  const decrement = () => {
    setLastEnteredQuantity(lastEnteredQuantity - 1);
  };

  function truncateText(text, maxLength) {
    if (text?.length <= maxLength) {
      return text;
    } else {
      return text?.substr(0, maxLength) + '...';
    }
  }

  // console.log('cartListData', cartListData);
  // console.log('cartSelectData', cartSelectData);
  // console.log('getPriceData', getPriceData);
  // console.log('priceData', ((mtrdData?.V ?? 0) / currData?.CurrencyRate + (mtrdData?.W ?? 0)), (dqcData ?? 0), (csqcData ?? 0), (sizeMarkup ?? 0), (metalUpdatedPrice() ?? 0), (diaUpdatedPrice() ?? 0), (colUpdatedPrice() ?? 0));
  return (
    <>
      <div
        style={{ paddingTop: "0px" }}
      >
        {isLoading && (
          <div className="loader-overlay">
            <CircularProgress className="loadingBarManage" />
          </div>
        )}
        <ToastContainer />

        <div className="smilingCartPageMain">
          <div
            style={{
              width: "-webkit-fill-available",
              backgroundColor: "white",
              zIndex: "111",
            }}
          >
            <p className="SmiCartListTitle">
              <IoArrowBack style={{ height: '25px', width: '25px', marginRight: '10px' }} onClick={() => navigation('/')} />My Cart
            </p>

            {cartListData?.length !== 0 && (
              <div>
                {!dialogOpen && <div className="smiCartPagePlaceOrderBtn">
                  <div>
                    {isPriceShow === 1 && <span
                      style={{
                        fontWeight: "500",
                        fontSize: "18px",
                        color: "black",
                        display: 'flex'
                      }}
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: decodeEntities(
                            currData?.Currencysymbol
                          ),
                        }}
                        style={{ fontFamily: "sans-serif" }}
                      />
                      {totalValue}
                    </span>}
                  </div>
                  <button
                    className="placeOrderCartPageBtnMobile"
                    onClick={(event) => {
                      navigation("/Delivery");
                    }}
                  >
                    Place Order
                  </button>
                </div>}
                <div
                  className="smilingCartPagePlaceOrderBtnMainWeb"
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    margin: "-50px 25px 0px 20px",
                    paddingBottom: "50px",
                  }}
                >
                  <button
                    className="placeOrderCartPageBtn"
                    onClick={(event) => {
                      navigation("/Delivery");
                    }}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            )}
          </div>

          <CustomTabPanel value={value} index={0}>
            <div
              style={{
                paddingInline: "10px",
                display: "flex",


              }}
            >
              <div className="smilingCartDeatilSub2">
                {cartListData?.length === 0 ? (
                  !isLoading && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "170px 0px",
                      }}
                    >
                      <img src={noData} style={{ height: '180px', width: '190px' }} />
                      <p
                        style={{
                          margin: "0px",
                          fontSize: "20px",
                          fontWeight: 500,
                        }}
                      >
                        Your cart is empty!
                      </p>
                      <button
                        className="browseBtnMore"
                        onClick={() => navigation("/productpage")}
                        style={{ marginTop: '15px' }}
                      >
                        Shop now
                      </button>
                    </div>
                  )
                ) : (
                  <div className="mainCartContainer">
                    {!isLoading && (
                      <div className="resproDet">
                        <div
                          className="smilingCartDeatilSub1"
                          style={{
                            display:
                              !prodSelectData && !cartSelectData && "none",
                          }}
                        >
                          <div className="popUpcontainer">
                            <img
                              src={
                                prodSelectData?.imagepath +
                                prodSelectData?.MediumImagePath?.split(",")[0]
                              }
                              style={{
                                border: "1px solid #e1e1e1",
                                borderRadius: "12px",
                                width: "35%",
                              }}
                            />

                            <div style={{ width: '550px' }}>
                              <div
                                style={{
                                  width: "100%",
                                  display: "flex",
                                  flexDirection: "column",
                                  paddingInline: '5%'
                                }}
                                className="srcolorsizecarat"
                              >
                                <div
                                  style={{
                                    fontSize: "30px",
                                    fontFamily: "FreightDisp Pro Medium",
                                    color: "#7d7f85",
                                    lineHeight: "40px",
                                    marginBottom: "14px",
                                    textOverflow: 'ellipsis',
                                    overflow: 'hidden',
                                    whiteSpace: 'none',
                                    height: '40px',
                                    width: '70%'
                                  }}
                                  className="prodTitleLine"
                                >
                                  {prodSelectData?.TitleLine}
                                </div>


                                {isProductCuFlag === 1 && <div
                                  style={{
                                    borderTop: "1px solid #e1e1e1",
                                    marginInline: "-10px",
                                    padding: "20px",
                                  }}
                                >
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                      flexWrap: 'wrap',
                                      marginTop: "12px",
                                    }}
                                  >
                                    {isMetalCutoMizeFlag == 1 && (
                                      <div
                                        style={{
                                          display: "flex",
                                          flexDirection: "column",
                                          width: "45%",
                                        }}
                                      >
                                        <label
                                          style={{
                                            fontSize: "12.5px",
                                            color: "#7d7f85",
                                          }}
                                        >
                                          METAL TYPE:
                                        </label>
                                        <select
                                          style={{
                                            border: "none",
                                            outline: "none",
                                            color: "#7d7f85",
                                            fontSize: "12.5px",
                                          }}
                                          // value={mtTypeOption ?? cartSelectData?.metal}
                                          value={mtTypeOption}
                                          onChange={(e) =>
                                            setmtTypeOption(e.target.value)
                                          }
                                        >
                                          {metalType.map((data, index) => (
                                            <option
                                              key={index}
                                              value={data.metalType}
                                            >
                                              {data.metaltype}
                                            </option>
                                          ))}
                                        </select>
                                      </div>
                                    )}

                                    {isMetalCutoMizeFlag == 1 && (
                                      <div
                                        style={{
                                          display: "flex",
                                          flexDirection: "column",
                                          width: "45%",
                                        }}
                                      >
                                        <label
                                          style={{
                                            fontSize: "12.5px",
                                            color: "#7d7f85",
                                          }}
                                        >
                                          METAL COLOR:
                                        </label>
                                        <select
                                          style={{
                                            border: "none",
                                            outline: "none",
                                            color: "#7d7f85",
                                            fontSize: "12.5px",
                                          }}
                                          value={selectedColor}
                                          onChange={(e) =>
                                            setSelectedColor(e.target.value)
                                          }
                                        >
                                          {metalColorData.map((colorItem) => (
                                            <option
                                              key={colorItem.ColorId}
                                              value={colorItem.metalcolorname}
                                            >
                                              {colorItem.metalcolorname}
                                            </option>
                                          ))}
                                        </select>
                                      </div>
                                    )}


                                    {isDaimondCstoFlag == 1 && (
                                      <div
                                        style={{
                                          display: "flex",
                                          flexDirection: "column",
                                          width: "45%",
                                          marginTop: "30px",
                                        }}
                                      >
                                        <label
                                          style={{
                                            fontSize: "12.5px",
                                            color: "#7d7f85",
                                          }}
                                        >
                                          DAIMOND :
                                        </label>
                                        <select
                                          style={{
                                            border: "none",
                                            outline: "none",
                                            color: "#7d7f85",
                                            fontSize: "12.5px",
                                          }}
                                          value={diaQColOpt}
                                          onChange={(e) =>
                                            setDiaQColOpt(e.target.value)
                                          }
                                        >
                                          {colorData?.map((colorItem) => (
                                            <option
                                              key={colorItem.ColorId}
                                              value={`${colorItem.Quality}_${colorItem.color}`}
                                            >
                                              {`${colorItem.Quality}_${colorItem.color}`}
                                            </option>
                                          ))}
                                        </select>
                                      </div>
                                    )}

                                    {isCColrStoneCustFlag == 1 && (
                                      <div
                                        style={{
                                          display: "flex",
                                          flexDirection: "column",
                                          width: "4%",
                                          marginTop: "20px",
                                        }}
                                      >
                                        <label
                                          style={{
                                            fontSize: "12.5px",
                                            color: "#7d7f85",
                                            marginTop: "10px",
                                          }}
                                        >
                                          COLOR STONE:
                                        </label>
                                        <select
                                          style={{
                                            border: "none",
                                            outline: "none",
                                            color: "#7d7f85",
                                            fontSize: "12.5px",
                                          }}
                                          value={cSQopt}
                                          onChange={(e) =>
                                            setCSQOpt(e.target.value)
                                          }
                                        >
                                          {DaimondQualityColor.map(
                                            (data, index) => (
                                              <option
                                                key={index}
                                                value={`${data.Quality}_${data.color}`}
                                              >
                                                {`${data.Quality}_${data.color}`}
                                              </option>
                                            )
                                          )}
                                        </select>
                                      </div>
                                    )}

                                    {(sizeData?.length !== 0 ||
                                      (productData?.DefaultSize &&
                                        productData.DefaultSize.length !==
                                        0)) && (
                                        <div
                                          style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            width: "45%",
                                            marginTop: "30px",
                                          }}
                                        >
                                          <label
                                            style={{
                                              fontSize: "12.5px",
                                              color: "#7d7f85",
                                            }}
                                          >
                                            SIZE:
                                          </label>
                                          <select
                                            style={{
                                              border: "none",
                                              outline: "none",
                                              color: "#7d7f85",
                                              fontSize: "12.5px",
                                            }}
                                            onChange={(e) =>
                                              handelSize(e.target.value)
                                            }
                                            defaultValue={
                                              productData && productData.DefaultSize
                                                ? productData.DefaultSize
                                                : sizeData.find(
                                                  (size) =>
                                                    size.IsDefaultSize === 1
                                                )?.id
                                            }
                                          >
                                            {sizeData?.map((size) => (
                                              <option
                                                key={size.id}
                                                value={size.sizename} // Pass sizename as value
                                                selected={
                                                  productData &&
                                                  productData.DefaultSize ===
                                                  size.sizename
                                                }
                                              >
                                                {size.sizename}
                                              </option>
                                            ))}
                                          </select>
                                        </div>
                                      )}
                                  </div>
                                </div>}
                              </div>
                              <div
                                style={{
                                  marginTop: "20px",
                                  color: "#7d7f85",
                                  fontSize: "14px",
                                }}
                              >

                                Price :{" "}
                                <span
                                  style={{
                                    fontWeight: "500",
                                    fontSize: "16px",
                                  }}
                                >
                                  {currencySymbol?.Currencysymbol}
                                  {(
                                    cartSelectData?.UnitCost +
                                    (mtrdData?.Z ?? 0) +
                                    (dqcData ?? 0) +
                                    (csqcData ?? 0)
                                  ).toFixed(2)}
                                </span>
                              </div>
                              <div className="similingCartPageBotttomMain">
                                <div
                                  className="smilingQualityMain"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <input
                                    type="text"
                                    style={{
                                      border: "0px",
                                      textAlign: "center",
                                      outline: "none",
                                      width: "80px",
                                      height: "35px",
                                      border: "1px solid #7d7f85",
                                    }}
                                    maxLength={2}
                                    className="simlingQualityBox"
                                    inputMode="numeric"
                                    onClick={(event) => event.target.select()}
                                    value={lastEnteredQuantity}
                                    onChange={(event) => handleInputChange(event)}
                                  />
                                  <button
                                    className="SmilingUpdateQuantityBtn"
                                    onClick={() =>
                                      handleUpdateQuantity(
                                        prodSelectData?.designno
                                      )
                                    }
                                  >
                                    QTY
                                  </button>
                                </div>

                                <div
                                  className="smilingAddresingleMobileMain"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginLeft: "30px",
                                  }}
                                >
                                  <textarea
                                    type="text"
                                    placeholder="Enter Remarks..."
                                    value={remarks}
                                    onChange={(event) =>
                                      handleInputChangeRemarks(event)
                                    }
                                    className="YourCartMainRemkarBoxSingle"
                                  />
                                  <button
                                    onClick={() => handleSubmit(cartSelectData)}
                                    className="SmilingAddSingleRemkarBtn"
                                  >
                                    Add
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {
                      !isLoading && <div className="cartProdSection resCon">
                        <div className="cartProdpart">
                          {cartListData?.map((item, index) => (
                            <div
                              key={item.id}
                              className="smiling-cartPageBoxMain"
                              onClick={() => {
                                setCartSelectData(item);
                                getSizeData(item.autocode)
                                // window.innerWidth <= 1080 && setDialogOpen(true)
                              }}
                            >
                              <div style={{ display: 'flex' }}>
                                <div className="smiling-cartPageBoxMain-imageMain">
                                  <img
                                    src={`${imageURL}/${yKey}/${item.DefaultImageName}`}
                                    alt="#"
                                    className="cartImageShow"
                                  />
                                </div>
                                <div
                                  className="smilingCartBox1"
                                  style={{ padding: "5px" }}
                                >
                                  <p style={{ margin: "10px 0px 5px 0px", fontSize: '12px' }}>
                                    {truncateText(item.TitleLine, 70)}
                                    <span style={{ fontWeight: 500 }}>
                                      - {item.Mastermanagement_CategoryName}({item.designno})
                                    </span>
                                  </p>
                                  {isPriceShow === 1 && <span
                                    style={{
                                      fontWeight: "500",
                                      fontSize: "18px",
                                      color: "black",
                                      display: 'flex'
                                    }}
                                  >
                                    <div
                                      dangerouslySetInnerHTML={{
                                        __html: decodeEntities(
                                          currData?.Currencysymbol
                                        ),
                                      }}
                                      style={{ fontFamily: "sans-serif" }}
                                    />
                                    {
                                      // (((mtrdData?.V ?? 0) /
                                      //     currData?.CurrencyRate +
                                      //     (mtrdData?.W ?? 0)) +
                                      //   (dqcData ?? 0) +
                                      //   (csqcData ?? 0) +
                                      //   (sizeMarkup ?? 0) +
                                      //   (metalUpdatedPrice() ?? 0) +
                                      //   (diaUpdatedPrice() ?? 0) +
                                      //   (colUpdatedPrice() ?? 0)
                                      // ).toFixed(2) ?? 
                                      item?.UnitCost
                                    }
                                  </span>}
                                </div>
                              </div>
                              <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row-reverse' }}>
                                <button className="cartRemoveBtn" onClick={() => handleRemove(item)}>Remove</button>
                                <button className="cartRemoveBtn" style={{ marginInline: '10px' }} onClick={() => { setDialogOpen(true); setCartSelectData(item); }}>Update</button>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* <textarea
                          label="Enter Remarks"
                          variant="outlined"
                          placeholder="Enter Order Remark"
                          value={Mainremarks}
                          rows={4}
                          onChange={(e) => handleInputChangeMainRemarks(e)}
                          className="YourCartPageMainRemkarBox"
                          style={{ marginTop: "30px", width: '300px' }}
                        />
                        <div className="addRemkarMainBottom">
                          <button
                            onClick={submitMainRemrks}
                            className="SmilingAddRemkarBtn"
                            style={{ marginTop: "10px" }}
                          >
                            Add Order Remark
                          </button>
                        </div> */}
                      </div>
                    }
                  </div>
                )}
              </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div style={{ paddingBottom: "150px", marginTop: "10px" }}>
              {cartListData?.length === 0 ? (
                !isLoading && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "150px 0px",
                    }}
                  >
                    <p
                      style={{
                        margin: "0px",
                        fontSize: "20px",
                        fontWeight: 500,
                      }}
                    >
                      No Data Available
                    </p>
                    <p>Please First Add To Cart Data</p>
                    <button
                      className="browseBtnMore"
                      onClick={() => navigation("/productpage")}
                    >
                      BROWSE OUR COLLECTION
                    </button>
                  </div>
                )
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: cartListData?.length > 5 && "center",
                  }}
                >
                  {cartListData?.map((item, index) => (
                    <div key={item.id} className="smiling-cartBoxMainImageView">
                      <div
                        className="smilingCartMobileMain"
                        style={{ display: "flex" }}
                      >
                        <img
                          src={`${imageURL}/${yKey}/${item.DefaultImageName}`}
                          className="smiling-cartPageBoxImgView"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CustomTabPanel>
        </div>
      </div>
      <Dialog
        onClose={() => setDialogOpen(false)}
        open={dialogOpen}
        // fullWidth
        // maxWidth={"xl"}
        fullScreen
      >
        <div style={{ marginTop: "50px" }}>
          {isLoadingDrawer && (
            <div className="loader-overlay">
              <CircularProgress className="loadingBarManage" />
            </div>
          )}

          <div>
            <div
              style={{
                cursor: "pointer",
                position: "absolute",
                left: "20px",
                top: "12px",
                borderRadius: "12px",
              }}
              onClick={() => setDialogOpen(false)}
            >
              <FiArrowLeft style={{ color: "black", height: "30px", width: '30px' }} />
            </div>
          </div>
          <div
            className="smilingCartDeatilSub1"
            style={{ display: !prodSelectData && !cartSelectData && "none" }}
          >
            <div className="popUpcontainer">
              <div style={{ marginInline: '5%', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', width: '90%' }}>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '50%', height: '150px' }}>
                    <img
                      // src={
                      //   prodSelectData?.imagepath +
                      //   prodSelectData?.MediumImagePath?.split(",")[0]
                      // }
                      src={`${imageURL}/${yKey}/${cartSelectData?.DefaultImageName}`}
                      style={{
                        borderRadius: "12px",
                        width: "100%",
                        height: '90%',
                        // objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div style={{ width: '50%' }}>
                    <p
                      style={{
                        fontSize: "14px",
                        fontFamily: "FreightDisp Pro Medium",
                        margin: "10px 0px 5px",
                      }}
                    >
                      {prodSelectData?.TitleLine} <span style={{ fontWeight: 500 }}>- {prodSelectData?.Mastermanagement_CategoryName}({prodSelectData?.designno})</span>
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ border: '1px solid', width: '100px', marginTop: '10px', marginBottom: '15px', marginLeft: '20px' }}>
                    <button
                      onClick={() => {
                        if (lastEnteredQuantity !== 1) {
                          decrement();
                          handleUpdateQuantity(prodSelectData?.designno, lastEnteredQuantity - 1);
                        }
                      }}
                      style={{ backgroundColor: 'transparent', border: 'none', width: '33.33%' }}
                    > -
                    </button>

                    <input type="text" readOnly value={lastEnteredQuantity} style={{ height: '30px', outline: 'none', textAlign: 'center', width: '33.33%', borderRight: '1px solid', borderLeft: '1px solid', borderTop: 'none', borderBottom: 'none' }} />

                    <button
                      onClick={() => {
                        increment();
                        handleUpdateQuantity(prodSelectData?.designno, lastEnteredQuantity + 1);
                      }}
                      style={{ backgroundColor: 'transparent', border: 'none', width: '33.33%' }}
                    >
                      +
                    </button>
                  </div>
                  <span
                    style={{
                      fontWeight: "500",
                      fontSize: "18px",
                      color: "black",
                      display: 'flex',
                      width: "50%"
                    }}
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: decodeEntities(
                          currData?.Currencysymbol
                        ),
                      }}
                      style={{ fontFamily: "sans-serif" }}
                    />
                    {(
                      ((mtrdData?.V ?? 0) /
                        currData?.CurrencyRate +
                        (mtrdData?.W ?? 0)) +
                      (dqcData ?? 0) +
                      (csqcData ?? 0) +
                      (sizeMarkup ?? 0) +
                      (metalUpdatedPrice() ?? 0) +
                      (diaUpdatedPrice() ?? 0) +
                      (colUpdatedPrice() ?? 0)
                    ).toFixed(2) * lastEnteredQuantity}
                  </span>
                </div>
              </div>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  paddingInline: '5%'
                }}
                className="srcolorsizecarat"
              >

                {isProductCuFlag === 1 && <div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      marginTop: "12px",
                    }}
                  >
                    {isMetalCutoMizeFlag == 1 && (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "100%",
                        }}
                      >
                        <label
                          style={{ fontSize: "12.5px", color: "#7d7f85" }}
                        >
                          METAL COLOR:
                        </label>
                        <select
                          style={{
                            outline: "none",
                            color: "#7d7f85",
                            border: "1px solid #e1e1e1",
                            fontSize: "12.5px",
                            height: '35px',
                            paddingInline: '5px'
                          }}
                          value={selectedColor}
                          onChange={(e) => setSelectedColor(e.target.value)}
                        >
                          {metalColorData.map((colorItem) => (
                            <option
                              key={colorItem.ColorId}
                              value={colorItem.metalcolorname}
                            >
                              {colorItem.metalcolorname}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                    {isMetalCutoMizeFlag == 1 && (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "100%",
                          marginTop: '10px'
                        }}
                      >
                        <label
                          style={{ fontSize: "12.5px", color: "#7d7f85" }}
                        >
                          METAL TYPE:
                        </label>
                        <select
                          style={{
                            outline: "none",
                            color: "#7d7f85",
                            border: "1px solid #e1e1e1",

                            fontSize: "12.5px",
                            height: '35px',
                            paddingInline: '5px'
                          }}
                          // value={mtTypeOption ?? cartSelectData?.metal}
                          value={mtTypeOption}
                          onChange={(e) => setmtTypeOption(e.target.value)}
                        >
                          {metalType.map((data, index) => (
                            <option key={index} value={data.metalType}>
                              {data.metaltype}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}


                    {isDaimondCstoFlag == 1 && (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "100%",
                          marginTop: "10px",
                        }}
                      >
                        <label
                          style={{ fontSize: "12.5px", color: "#7d7f85" }}
                        >
                          DAIMOND :
                        </label>
                        <select
                          style={{
                            outline: "none",
                            color: "#7d7f85",
                            border: "1px solid #e1e1e1",

                            fontSize: "12.5px",
                            height: '35px',
                            paddingInline: '5px'
                          }}
                          value={diaQColOpt}
                          onChange={(e) => setDiaQColOpt(e.target.value)}
                        >
                          {colorData?.map((colorItem) => (
                            <option
                              key={colorItem.ColorId}
                              value={`${colorItem.Quality}_${colorItem.color}`}
                            >
                              {`${colorItem.Quality}_${colorItem.color}`}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                    {isCColrStoneCustFlag == 1 && (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "100%",
                          marginTop: "10px",
                        }}
                      >
                        <label
                          style={{
                            fontSize: "12.5px",
                            color: "#7d7f85",
                            marginTop: "10px",
                          }}
                        >
                          COLOR STONE:
                        </label>
                        <select
                          style={{
                            outline: "none",
                            border: "1px solid #e1e1e1",
                            color: "#7d7f85",
                            fontSize: "12.5px",
                            height: '35px',
                            paddingInline: '5px'
                          }}
                          value={cSQopt}
                          onChange={(e) => setCSQOpt(e.target.value)}
                        >
                          {DaimondQualityColor.map((data, index) => (
                            <option
                              key={index}
                              value={`${data.Quality}-${data.color}`}
                            >
                              {`${data.Quality}-${data.color}`}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                    {(sizeData?.length !== 0 ||
                      (productData?.DefaultSize &&
                        productData.DefaultSize.length !== 0)) && (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            marginTop: "10px",
                          }}
                        >
                          <label
                            style={{ fontSize: "12.5px", color: "#7d7f85" }}
                          >
                            SIZE:
                          </label>
                          <select
                            style={{
                              outline: "none",
                              color: "#7d7f85",
                              border: "1px solid #e1e1e1",
                              fontSize: "12.5px",
                              height: '35px',
                              paddingInline: '5px'
                            }}
                            onChange={(e) => handelSize(e.target.value)}
                            defaultValue={
                              productData && productData.DefaultSize
                                ? productData.DefaultSize
                                : sizeData.find(
                                  (size) => size.IsDefaultSize === 1
                                )?.id
                            }
                          >
                            {sizeData?.map((size) => (
                              <option
                                key={size.id}
                                value={size.sizename} // Pass sizename as value
                                selected={
                                  productData &&
                                  productData.DefaultSize === size.sizename
                                }
                              >
                                {size.sizename}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}
                  </div>
                </div>
                }
              </div>
              {/* <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', paddingInline: '5%' }}>
                <span
                  style={{
                    fontWeight: "500",
                    fontSize: "18px",
                    color: "black",
                    display: 'flex'
                  }}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: decodeEntities(
                        currData?.Currencysymbol
                      ),
                    }}
                    style={{ fontFamily: "sans-serif" }}
                  />
                  {(
                    ((mtrdData?.V ?? 0) /
                      currData?.CurrencyRate +
                      (mtrdData?.W ?? 0)) +
                    (dqcData ?? 0) +
                    (csqcData ?? 0) +
                    (sizeMarkup ?? 0) +
                    (metalUpdatedPrice() ?? 0) +
                    (diaUpdatedPrice() ?? 0) +
                    (colUpdatedPrice() ?? 0)
                  ).toFixed(2) * lastEnteredQuantity}
                </span>

              </div> */}

              <div className="similingCartPageBotttomMain">

                <button
                  style={{
                    border: "none",
                    outline: "none",
                    backgroundColor: "#e1e1e1",
                    padding: "6px 60px",
                    borderRadius: "4px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                    onClick={() => { handleCartUpdate(); handleSubmit(cartSelectData); }}
                  >
                    Save
                  </span>
                </button>

              </div>
              <div
                className="smilingAddresingleMobileMain"
                style={{
                  marginLeft: "30px",
                  display: 'flex',
                  flexDirection: 'column',
                  paddingInline: '5%'
                }}
              >
                <textarea
                  type="text"
                  placeholder="Add Remarks..."
                  value={remarks}

                  onChange={(event) => handleInputChangeRemarks(event)}
                  className="YourCartMainRemkarBoxSingle1"
                />
                {/* <button
                  onClick={() => handleSubmit(cartSelectData)}
                  className="SmilingAddSingleRemkarBtn"
                >
                  Add
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
