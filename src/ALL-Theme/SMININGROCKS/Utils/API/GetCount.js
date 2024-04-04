import { CommonAPI } from "./CommonAPI";


export const GetCount = async() => {



        let CountObj = {};
       
            const storeInit = JSON.parse(localStorage.getItem("storeInit"))
            const Customer_id = JSON.parse(localStorage.getItem("loginUserDetail"));
            const UserEmail = localStorage.getItem("registerEmail")
    
    
    
        let EncodeData = {FrontEnd_RegNo:`${storeInit?.FrontEnd_RegNo}`,Customerid:`${Customer_id?.id}`}
    
        const encodedCombinedValue = btoa(JSON.stringify(EncodeData));
    
        let body = {
            "con":`{\"id\":\"\",\"mode\":\"Getcount\",\"appuserid\":\"${UserEmail}\"}`,
            "f":"onAddToCart-AddToWishList-Reload (cartcount)",
            "p":encodedCombinedValue
            }
    
    
         await CommonAPI(body).then((res)=>{
          if(res?.Data?.rd[0]?.stat_msg === "success"){
            const CountCart = res?.Data?.rd[0]?.cartcount
            const WishCount = res?.Data?.rd[0]?.wishcount
    
            CountObj = { CountCart  ,WishCount }
    
            // setCartCount(CountCart)
            // setWishCount(WishCount)
    
          }
        });
    
        return CountObj


}

