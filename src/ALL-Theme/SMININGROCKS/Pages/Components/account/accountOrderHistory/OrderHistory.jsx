import React, { useEffect, useState } from "react";
import "./orderhistory.css";
import CircleIcon from "@mui/icons-material/Circle";
import { Accordion, AccordionDetails, AccordionSummary, Box, CircularProgress } from "@mui/material";
import AccountOrderHistory from "../../../jsonFile/account/AccountOrderHistoryApi.json";
import axios from "axios";
import { CommonAPI } from "../../../../Utils/API/CommonAPI";
// import ReactPaginate from 'react-paginate';
const OrderHistory = () => {
  const [orderHistoryData, setOrderHistoryData] = useState([]);
  const [orderDetails, setOrderDetails] = useState([]);
  const [loaderOH, setLoaderOH] = useState(true);
  const [loaderOH2, setLoaderOH2] = useState(true);
  const [orderInfo, setOrderInfo] = useState(false);
  const [ukey, setUkey] = useState('');
  const [image_path, setImagePath] = useState('');

  // const [itemOffset, setItemOffset] = useState(0);
  // const itemsPerPage = 4;
  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  // const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  // const currentItems = AccountOrderHistory?.slice(itemOffset, endOffset);
  // const pageCount = Math.ceil(AccountOrderHistory.length / itemsPerPage);

  const getStatusColor = (orderType) => {
    switch (orderType) {
      case 1:
        return "text-danger";
      case 2:
        return "text-success";
      case 3:
        return "text-primary";
      default:
        return "text-primary"; // Default color
    }
  };
  // const handlePageClick = (event) => {
  //     const newOffset = (event.selected * itemsPerPage) % AccountOrderHistory?.length;
  //     setItemOffset(newOffset);
  // };

  const getData = async () => {
    let storeinit = JSON.parse(localStorage.getItem("storeInit"));
    let loginInfo = JSON.parse(localStorage.getItem("loginUserDetail"));
    const UserEmail = localStorage.getItem("registerEmail");
    setUkey(storeinit?.ukey);
    setImagePath(storeinit?.UploadLogicalPath)
    // setImagePath()

    try {
      let EncodeData = {
        FrontEnd_RegNo: `${storeinit?.FrontEnd_RegNo}`,
        Customerid: `${loginInfo?.id}`,
      };

      const encodedCombinedValue = btoa(JSON.stringify(EncodeData));

      const body_currencycombo = {
        con: `{\"id\":\"Store\",\"mode\":\"CURRENCYCOMBO\",\"appuserid\":\"${UserEmail}\"}`,
        f: "m-test2.orail.co.in (getcategorysize)",
        p: `${encodedCombinedValue}`,
      };

      const response = await CommonAPI(body_currencycombo);

      const CurrencyRate = response?.Data?.rd[0]?.CurrencyRate;

      let EncodeData_order_history = {
        CurrencyRate: `${CurrencyRate}`,
        FrontEnd_RegNo: `${storeinit?.FrontEnd_RegNo}`,
        Customerid: `${loginInfo?.id}`,
      };

      const encodedCombinedValue2 = btoa(
        JSON.stringify(EncodeData_order_history)
      );

      const body_order_history = {
        con: `{\"id\":\"Store\",\"mode\":\"GETORDERHISTORY\",\"appuserid\":\"${UserEmail}\"}`,
        f: "zen (cartcount)",
        p: `${encodedCombinedValue2}`,
      };

      const response2 = await CommonAPI(body_order_history);

      if (response2?.Status === "200") {
        if (response2?.Data?.rd) {
          setOrderHistoryData(response2?.Data?.rd);
          setLoaderOH(false);
        } else {
          setLoaderOH(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = (obj) => {
    setOrderDetails([]);
    if(obj?.TotalQuantity === 0) return ''
    else
    {
        
        setOrderInfo(orderInfo === obj?.id ? null : obj?.id);
        getOrderDetail(obj);
    }
  };

  const getOrderDetail = async (obj) => {
    setLoaderOH2(true)
    setOrderDetails([]);
    let storeinit = JSON.parse(localStorage.getItem("storeInit"));
    let loginInfo = JSON.parse(localStorage.getItem("loginUserDetail"));
    const UserEmail = localStorage.getItem("userEmail");
    try {
     
     
      let EncodeData = {
        FrontEnd_RegNo: `${storeinit?.FrontEnd_RegNo}`,
        Customerid: `${loginInfo?.id}`,
      };

      const encodedCombinedValue = btoa(JSON.stringify(EncodeData));

      const body_currencycombo = {
        con: `{\"id\":\"Store\",\"mode\":\"CURRENCYCOMBO\",\"appuserid\":\"${UserEmail}\"}`,
        f: "m-test2.orail.co.in (getcategorysize)",
        p: `${encodedCombinedValue}`,
      };

      const response = await CommonAPI(body_currencycombo);

      const CurrencyRate = response?.Data?.rd[0]?.CurrencyRate;

      let EncodeData_order_history = {
        orderno: `${obj?.orderno}`,
        isStockPrint: "1",
        CurrencyRate: `${CurrencyRate}`,
        FrontEnd_RegNo: `${storeinit?.FrontEnd_RegNo}`,
        Customerid: `${loginInfo?.id}`,
      };

      const encodedCombinedValue2 = btoa(
        JSON.stringify(EncodeData_order_history)
      );

      const body_order_detail = {
        con: `{\"id\":\"Store\",\"mode\":\"GETORDERHISTORYDETAIL\",\"appuserid\":\"${UserEmail}\"}`,
        f: "zen (cartcount)",
        p: `${encodedCombinedValue2}`,
      };

      const response2 = await CommonAPI(body_order_detail);
      if(response2?.Status === '200') {
          if(response2?.Data?.rd1){
             setOrderDetails(response2?.Data?.rd1);
             setLoaderOH2(false)

          }else{
            setLoaderOH2(true)
          }
      }
    
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="text-center text-secondary w-100 fs-4 fw-bold mt-2 pt-2 pb-2 yourOrderHistory bg_oh">
        Your Order History
      </div>
      {loaderOH ? (
        <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "10px" }}><CircularProgress className='loadingBarManage' /></Box>
      ) : (
        <div className="orderedItems user-select-none">
          {orderHistoryData?.length > 0 ?
            orderHistoryData?.map((e) => {
              return (
                <div className="border orderHistory p-1 px-0 my-4" key={e?.id} onClick={() => handleClick(e)}>
                  <div className=" d-flex w-100 justify-content-between align-items-center p-1 d_block">
                    <div className="w-25 _w50_oh">
                      <div className="d-flex justify-content-start w-100 align-items-center py-2 d_block">
                        <div className="text-secondary fw-bold fs-5 ps-3 pe-5 fs_Small_2">
                          {e?.OrderPrefix}
                          {e?.orderno}
                        </div>
                        <div
                          className={`d-flex align-items-center  ${getStatusColor(e?.b2c_MasterManagement_ProgressStatusId
                          )} fs-5 fs_small fs_Small_2 pad_Setup`}
                          style={{textTransform:'uppercase'}}
                        >
                          <div className="px-2">
                            <CircleIcon sx={{ fontSize: "10px" }} />
                          </div>
                          {e?.b2c_MasterManagement_ProgressStatusName}
                        </div>
                      </div>
                      <div className="py-2 text-secondary ps-3">
                        Date &nbsp;&nbsp;:&nbsp;&nbsp;{" "}
                        <span className="text-danger">{e?.orderEntryDate}</span>
                      </div>
                      <div className="py-2 text-secondary ps-3">
                        items&nbsp;&nbsp; : &nbsp;&nbsp;(
                        <span className="text-danger">{e?.TotalQuantity}</span>)
                      </div>
                    </div>
                    <div className="py-2 pe-5 w-50 d-flex fs_price_oh _color fw-bold center_price px_change">
                      <div
                        dangerouslySetInnerHTML={{ __html: e?.Currencysymbol }}
                      ></div>{" "}
                      <div className="px-1">{e?.orderAmountwithvat}</div>
                    </div>
                  </div>
                  {/* <Accordion sx={{boxShadow:'none'}}>
                            <AccordionSummary>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div>
                                    <div>
                                        <div className=' w-25 _center'><img src="https://www.candere.com/media/jewellery/images/GR00103__1.jpeg" alt="#designimage" className='des_img_aoh'  /></div>
                                        <div className='ps-1 pt-1 text-secondary'>
                                            <div className='fw-bold fs-5'>P-W</div>
                                            <div>A19901</div>
                                            <div>$ 0</div>
                                        </div>
                                    </div>
                                    <div className='pt-2 _end'>
                                        <div className='d-flex justify-content-between align-items-center w-25 fs-4 text-secondary'><div className='w-50'>Total :</div><div className='w-50 _end'>$ 0</div></div>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion> */}
                  <div>
                    <div style={{ height: "10px", cursor: "pointer" }} title="info" className=" border-top" ></div>
                    {orderInfo === e?.id ? (
                      <>
                      {
                        loaderOH2 ? <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "10px" }}><CircularProgress className='loadingBarManage' /></Box> : <div className="p-4 dec_pad">
                        <div className="d-flex flex-wrap align-items-center center_price_2 d_block">
                          {orderDetails?.length > 0 &&
                            orderDetails?.map((el) => {
                              console.log(el);
                              return (
                                <div className="container_order_details ">
                                  <div className="_center_img">
                                    <img
                                      src={`${image_path}/${ukey}/Design_Image/D999EBEDCCMDAwMzQ2Mg==/Red_Thumb/0003462_23102023133214918.jpg`}
                                      alt="#designimage"
                                      className="des_img_aoh"
                                    />
                                  </div>
                                  <div className="ps-1 pt-1 text-secondary">
                                    <div className="fw-bold fs-5 fs_small">{el?.metaltypename} {el?.metalcolorname}</div>
                                    <div>{el?.designno}</div>
                                    <div className="d-flex"><div className="pe-1" dangerouslySetInnerHTML={{__html:e?.Currencysymbol}}></div> {el?.TotalUnitCostWithDiscount}</div>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                        <div className="pt-2 _end">
                          <div className="d-flex justify-content-between align-items-center fs-4 w-25 w25_oh  text-secondary _w50_oh_2 fs_small ">
                            <div className="w-50">Total :</div>
                            <div className="w-50 _end"> <div className="pe-1"
                                  dangerouslySetInnerHTML={{ __html: e?.Currencysymbol }}
                            ></div>{e?.orderAmountwithvat}</div>
                          </div>
                        </div>
                      </div>
                      }
                        
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              );
            }) : <span className="w-100 d-flex justify-content-center align-items-center fs-5">Data Not Present</span>}
        </div>
      )}
      {/* {
            AccountOrderHistory?.length > itemsPerPage && 
            <div className="pagination-container _center mt-2 pt-2">
                <ReactPaginate
                    breakLabel="  .  .  .  "
                    nextLabel="Next"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="Previous"
                    containerClassName="pagination"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    activeClassName="active"
                    previousClassName="page-item previous"
                    nextClassName="page-item next"
                    previousLinkClassName="page-link"
                    nextLinkClassName="page-link"
                />
            </div>
        } */}
    </div>
  );
};

export default OrderHistory;
