import { CommonAPI } from "./CommonAPI";

export const getDesignPriceList = async () => {

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
      "SettingPriceUniqueNo": `${storeInit.PolicyApplyOnName === "Customer Wise Policy" ? loginUserDetail?._SettingPriceUniqueNo : loginUserDetail?.SettingPriceUniqueNo }`,
      "DesignNo": ""
    }

    const encodedCombinedValue = btoa(JSON.stringify(GetPriceReq));

    let body = {
      "con": `{\"id\":\"Store\",\"mode\":\"getdesignpricelist\",\"appuserid\":\"${UserEmail}\"}`,
      "f": "onloadFirstTime (getdesignpricelist)",
      "p": encodedCombinedValue
    }

    await CommonAPI(body).then((res) => {
      localStorage.setItem("getPriceData",JSON.stringify(res?.Data))
    //   setpriceDataApi(res?.Data)
    })

  }