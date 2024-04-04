import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { CommonAPI } from '../../../../Utils/API/CommonAPI';
import { Box, CircularProgress, Divider, Drawer, Tab, Tabs, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { CartListCounts, WishListCounts, priceData } from '../../../../../../Recoil/atom';
import { GetCount } from '../../../../Utils/API/GetCount';
import { ToastContainer, toast } from 'react-toastify';



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


export default function Cart({ open, toggleCartDrawer }) {

    const [cartListData, setCartListData] = useState([]);
    const [imageURL, setImageURL] = useState('');
    const [yKey, setYouKey] = useState('');
    const [customerID, setCustomerID] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [isProductCuFlag, setIsProductCuFlag] = useState('');
    const [isMetalCutoMizeFlag, setIsMetalCutoMizeFlag] = useState('');
    const [isDaimondCstoFlag, setIsDaimondCstoFlag] = useState('');
    const [isCColrStoneCustFlag, setIsCColrStoneCustFlag] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [colorData, setColorData] = useState([]);
    const [metalColorData, setMetalColorData] = useState([]);
    const [metalType, setMetalType] = useState([]);
    const [DaimondQualityColor, setDaimondQualityColor] = useState([]);
    const [showDropdowns, setShowDropdowns] = useState(Array(cartListData.length).fill(false));

    const [lastEnteredQuantityIndex, setLastEnteredQuantityIndex] = useState(null);
    const [lastEnteredQuantity, setLastEnteredQuantity] = useState('');
    const [remarks, setRemarks] = useState({});
    const [Mainremarks, setMainRemarks] = useState('');
    const [value, setValue] = React.useState(0);

    const [selectedSize, setSelectedSize] = useState();
    const [selectedMetalType, setSelectedMetalType] = useState({});
    const [selectedMetalColor, setSelectedMetalColor] = useState();
    const [selectedDiamondQualityColor, setSelectedDiamondQualityColor] = useState({});
    const [selectedColorstoneQualityColor, setSelectedColorstoneQualityColor] = useState({});
    const [grandTotal, setGrandTotal] = useState(0);
    const [metalFilterData, setMetalFilterData] = useState([]);
    const [daimondFilterData, setDaimondFiletrData] = useState([]);
    const setCartCount = useSetRecoilState(CartListCounts)
    const setWishCount = useSetRecoilState(WishListCounts)
    const getPriceData = useRecoilValue(priceData);
    const [getAllFilterSizeData, setGetAllFilterSizeData] = useState([]);
    const [allSelectedSizeData, setAllSelectedSizeData] = useState('');
    const [openCustoMizeIndexNumber, setOpenCustoMizeIndexNumber] = useState('');
    const navigation = useNavigate();
    // console.log("selectedMetalType", selectedMetalType)
    // console.log("grandTotal", grandTotal)





    useEffect(() => {
        getCountFunc()
    }, [])

    useEffect(() => {
        if (open) {
            getCartData();
        }
    }, [open]);

    useEffect(() => {
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
    }, [open]);



    const getCountFunc = async () => {
        await GetCount().then((res) => {
            if (res) {
                setCartCount(res.CountCart)
                setWishCount(res.WishCount)
            }
        })

    }

    const getSizeData = async (item, index) => {
        setOpenCustoMizeIndexNumber(index);
        const newShowDropdowns = [...showDropdowns];
        newShowDropdowns[index] = !newShowDropdowns[index];

        for (let i = 0; i < newShowDropdowns.length; i++) {
            if (i !== index) {
                newShowDropdowns[i] = false;
            }
        }
        setShowDropdowns(newShowDropdowns);

        try {
            const storedEmail = localStorage.getItem('registerEmail') || '';
            const storeInit = JSON.parse(localStorage.getItem('storeInit'));
            const { FrontEnd_RegNo } = storeInit;

            const storedData = localStorage.getItem('loginUserDetail') || '0';
            const data = JSON.parse(storedData);
            const customerid = data?.id;
            let autoC = item.autocode
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
                const sizeDropdownData = response.Data.rd;
                setGetAllFilterSizeData(response.Data.rd1)
                const selectElement = document.getElementById(`sizeDropdown_${index}`);
                console.log('sizeDropdownDatasizeDropdownDatasizeDropdownData', sizeDropdownData);
                if (selectElement) {
                    if (sizeDropdownData.length === 0) {
                        selectElement.innerHTML = '';
                        const optionElement = document.createElement('option');
                        optionElement.text = "NO DATA AVAILABEL";
                        selectElement.add(optionElement);
                    } else {
                        setAllSelectedSizeData(response.Data.rd)
                        selectElement.innerHTML = '';
                        sizeDropdownData.forEach(option => {
                            const optionElement = document.createElement('option');
                            optionElement.text = option.sizename;
                            optionElement.value = option.id;
                            selectElement.add(optionElement);
                        });
                    }
                }
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    }

    const handleSave = (index) => {
        const newShowDropdowns = [...showDropdowns];
        newShowDropdowns[index] = false;
        setShowDropdowns(newShowDropdowns);
    }

    const getCartData = async () => {
        try {
            // cartListData.length === 0 && setIsLoading(true);
            cartListData.length === 0 && setIsLoading(true);
            const ImageURL = localStorage.getItem('UploadLogicalPath');
            setImageURL(ImageURL);
            const storeInit = JSON.parse(localStorage.getItem('storeInit'));
            const storedData = localStorage.getItem('loginUserDetail');
            const data = JSON.parse(storedData);
            const customerid = data.id;
            setIsProductCuFlag(storeInit.IsProductWebCustomization);
            setIsMetalCutoMizeFlag(storeInit.IsMetalCustomization);
            setIsDaimondCstoFlag(storeInit.IsDiamondCustomization)
            setIsCColrStoneCustFlag(storeInit.IsCsCustomization)
            setCustomerID(data.id);
            const customerEmail = data.userid;
            setUserEmail(customerEmail);

            const { FrontEnd_RegNo, ukey } = storeInit;
            setYouKey(ukey);

            const combinedValue = JSON.stringify({
                CurrentPage: "1", PageSize: "1000", ukey: `${ukey}`, CurrRate: "1", FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerid}`
            });

            const encodedCombinedValue = btoa(combinedValue);
            const body = {
                "con": `{\"id\":\"\",\"mode\":\"GetCartDetails\",\"appuserid\":\"${customerEmail}\"}`,
                "f": "Header (getCartData)",
                p: encodedCombinedValue
            };
            const response = await CommonAPI(body);

            if (response?.Data) {
                setCartListData(response?.Data?.rd);
                setMainRemarks(response?.Data?.rd[0].OrderRemarks);
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    }

    const handleRemove = async (data) => {
        try {
            setIsLoading(true);
            const storeInit = JSON.parse(localStorage.getItem('storeInit'));
            const { FrontEnd_RegNo } = storeInit;
            const combinedValue = JSON.stringify({
                designno: `${data.designno}`, autocode: `${data.autocode}`, metalcolorid: '0', isSolStockNo: '0', is_show_stock_website: '0', isdelete_all: '0', FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerID}`, cartidlist: ''
            });
            const encodedCombinedValue = btoa(combinedValue);
            const body = {
                "con": `{\"id\":\"Store\",\"mode\":\"removeFromCartList\",\"appuserid\":\"${userEmail}\"}`,
                "f": "myWishLisy (handleRemoveCatList)",
                p: encodedCombinedValue
            };
            const response = await CommonAPI(body);
            if (response.Data.rd[0].stat === 1) {
                getCartData();
                getCountFunc()
            } else {
                alert('Error');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }

    }

    const handleInputChangeMainRemarks = (e) => {
        setMainRemarks(e.target.value)
    }

    const submitMainRemrks = async () => {
        if (!Mainremarks || Mainremarks.trim() === '') {
            alert('Enter a value for remarks.');
        } else {
            try {
                setIsLoading(true);
                const storeInit = JSON.parse(localStorage.getItem('storeInit'));
                const { FrontEnd_RegNo } = storeInit;
                const combinedValue = JSON.stringify({
                    orderremarks: `${Mainremarks}`, FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerID}`
                });
                const encodedCombinedValue = btoa(combinedValue);
                const body =
                {
                    "con": `{\"id\":\"\",\"mode\":\"SAVEORDERREMARK\",\"appuserid\":\"${userEmail}\"}`,
                    "f": "Header (handleMainRemrks)",
                    p: encodedCombinedValue
                };
                const response = await CommonAPI(body);
                if (response.Data.rd[0].stat === 1) {
                    toast.success('Add remark successfully');
                } else {
                    alert('Error');
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setIsLoading(false);
            }
        }
    }

    const handleSubmit = async (index, data) => {
        const remark = remarks[index];
        if (!remark || remark.trim() === '') {
            alert('Enter a value for remarks.');
        } else {

            try {
                setIsLoading(true);
                const storeInit = JSON.parse(localStorage.getItem('storeInit'));
                const { FrontEnd_RegNo } = storeInit;
                const combinedValue = JSON.stringify({
                    designno: `${data.designno}`, autocode: `${data.autocode}`, remarks: `${remark}`, FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerID}`
                });
                const encodedCombinedValue = btoa(combinedValue);
                const body =
                {
                    "con": `{\"id\":\"\",\"mode\":\"SAVEDESIGNREMARK\",\"appuserid\":\"${userEmail}\"}`,
                    "f": "Header (handleSingleRemaksSubmit)",
                    p: encodedCombinedValue
                };
                const response = await CommonAPI(body);
                if (response.Data.rd[0].stat === 1) {
                    // setRemarks(prevRemarks => ({
                    //   ...prevRemarks,
                    //   [index]: ''
                    // }));
                    alert('done');
                } else {
                    alert('Error');
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setIsLoading(false);
            }
        }
    };


    const handleInputChange = (event, index) => {
        let { value } = event.target;
        if (index >= 0 && index < cartListData.length) {
            value = value.replace(/\D|^0+/g, '');
            const updatedCartList = [...cartListData];
            updatedCartList[index] = { ...updatedCartList[index], Quantity: value };
            setCartListData(updatedCartList);
            setLastEnteredQuantityIndex(index);
            setLastEnteredQuantity(value);
        }
    };

    const handleUpdateQuantity = async (num) => {
        if (lastEnteredQuantity.length === 0) {
            alert('enter value first');
        } else {
            try {
                const updatedQuantity = cartListData[lastEnteredQuantityIndex].Quantity;
                const firstItemQuantity = cartListData.length > 0 ? cartListData[0].Quantity : null;
                const storeInit = JSON.parse(localStorage.getItem('storeInit'));
                const { FrontEnd_RegNo } = storeInit;
                const combinedValue = JSON.stringify({
                    designno: `${num}`, Quantity: `${updatedQuantity}`, FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerID}`
                });
                const encodedCombinedValue = btoa(combinedValue);
                const body = {
                    "con": `{\"id\":\"\",\"mode\":\"UpdateQuantity\",\"appuserid\":\"${userEmail}\"}`,
                    "f": "header (handleUpdateQuantity)",
                    p: encodedCombinedValue
                };
                const response = await CommonAPI(body);
                if (response.Data.rd[0].stat === 1) {
                    toast.success('QTY update successfully');
                } else {
                    alert('Error');
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                // Uncomment if needed:
                // setIsLoading(false);
            }
        }
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // useEffect(() => {

    //     let srProductsData = JSON.parse(localStorage.getItem('srProductsData'));

    //     let mtrd = getPriceData?.rd?.filter((ele) =>
    //         ele?.A === srProductsData?.autocode &&
    //         ele?.B === srProductsData?.designno &&
    //         ele?.D === (selectedMetalType)
    //     )
    //     // console.log("metal", mtrd);
    //     let showPrice = 0;
    //     if (mtrd && mtrd.length > 0) {
    //         showPrice = srProductsData?.price - ((srProductsData?.price - srProductsData?.metalrd) + (mtrd[0]?.Z ?? 0));
    //     }
    //     //   let showPrice = srProductsData?.price - ((srProductsData?.price - srProductsData?.metalrd) + (mtrd[0]?.Z ?? 0))
    //     //   console.log("metal price",showPrice);
    //     // setMetalPrice(showPrice)

    //     let diaqcprice = getPriceData?.rd1?.filter((ele) =>
    //         ele.A === srProductsData?.autocode &&
    //         ele.B === srProductsData?.designno &&
    //         ele.H === selectedDiamondQualityColor?.split("_")[0] &&
    //         ele.J === selectedDiamondQualityColor?.split("_")[1]
    //     )
    //     // console.log("diamond ", diaqcprice);

    //     let showPrice1 = 0;
    //     if (diaqcprice && diaqcprice.length > 0) {
    //         showPrice1 = srProductsData?.price - ((srProductsData?.price - srProductsData?.diard1) + (diaqcprice[0]?.S ?? 0));
    //     }
    //     //   let showPrice1 = srProductsData?.price-((srProductsData?.price - srProductsData?.diard1) + (diaqcprice[0]?.S ?? 0))
    //     //   console.log("diamond price",showPrice1);
    //     // setDQCPrice(showPrice1)

    //     let csqcpirce = getPriceData?.rd2?.filter((ele) =>
    //         ele.A === srProductsData?.autocode &&
    //         ele.B === srProductsData?.designno &&
    //         ele.H === selectedColorstoneQualityColor?.split("-")[0] &&
    //         ele.J === selectedColorstoneQualityColor?.split("-")[1]
    //     )
    //     // console.log("colorstone", csqcpirce);

    //     let showPrice2 = 0;
    //     if (csqcpirce && csqcpirce.length > 0) {
    //         showPrice2 = srProductsData?.price - ((srProductsData?.price - srProductsData?.csrd2) + (csqcpirce[0]?.S ?? 0));
    //     }

    //     // console.log({ showPrice, showPrice1, showPrice2 });
    //     let gt = showPrice + showPrice1 + showPrice2;
    //     setGrandTotal(gt ?? 0);
    //     //   let showPrice2 = srProductsData?.price -((srProductsData?.price - srProductsData?.csrd2) + (csqcpirce[0]?.S ?? 0));
    //     //   console.log("colorstone price",showPrice2);
    //     //   setCSQCPrice(showPrice2)

    //     //   let showPriceall = (srProductsData?.price - srProductsData?.metalrd) + (mtrd[0]?.Z ?? 0)

    //     //   console.log({showPrice,showPrice1,showPrice2});
    //     //   let gt = showPrice + showPrice1 + showPrice2;
    //     //   console.log(gt);
    //     //   setGrandTotal(gt)

    // }, [selectedMetalType, selectedDiamondQualityColor, selectedColorstoneQualityColor])

    useEffect(() => {
        cartListData?.forEach((cartData) => {
            let mtrd = getPriceData?.rd?.find((ele) =>
            ele?.A === cartData?.autocode &&
            ele?.B === cartData?.designno &&
            ele?.D === selectedMetalType
            );


            console.log("mtrd", Object.values(Object.fromEntries(Object.entries(selectedMetalType).filter(([key, value]) => key === cartData.autocode))))
            
        })
    }, [selectedMetalType])


    // console.log("selectedMetalType",{selectedMetalType,selectedDiamondQualityColor,selectedColorstoneQualityColor})
    // console.log("cartData",cartListData);
    // console.log("DaimondQualityColor",DaimondQualityColor)

    const handelSize = (selectedId) => {
        const sizeData = allSelectedSizeData.find(item => item.id === parseInt(selectedId));
        if (sizeData) {
            console.log('Selected size:', sizeData.sizename);
            const filteredData = getAllFilterSizeData?.filter(item => item.sizename === sizeData.sizename);
            const filteredDataMetal = filteredData?.filter(item => item.DiamondStoneTypeName === "METAL");
            const filteredDataDaimond = filteredData?.filter(item => item.DiamondStoneTypeName === "DIAMOND");
            setMetalFilterData(filteredDataMetal);
            setDaimondFiletrData(filteredDataDaimond);
        }

    }

    console.log("metalFilterData", metalFilterData)
    console.log("daimondFilterData", daimondFilterData)


    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={(event) => {
                toggleCartDrawer(false)(event);
                handleSave(openCustoMizeIndexNumber);
            }}
            transitionDuration={500}
            sx={{
                "& .MuiDrawer-paper": {
                    width: "40%",
                    maxWidth: "40%",
                },
            }}
            className='cartDrawerMainMobile'
        >
            <ToastContainer />

            {isLoading && (
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        paddingTop: '50%',
                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                        display: 'flex',
                        justifyContent: 'center',
                        zIndex: 1
                    }}
                >
                    <CircularProgress className='loadingBarManage' />
                </div>
            )}
            <div
                style={{
                    position: 'fixed',
                    width: '-webkit-fill-available',
                    backgroundColor: 'white',
                    zIndex: '111'
                }}
            >
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    margin: '10px 20px 0px 0px'
                }}>
                    <CloseIcon onClick={(event) => {
                        toggleCartDrawer(false)(event);
                        handleSave(openCustoMizeIndexNumber);
                    }}
                        style={{ cursor: "pointer", color: "black" }}
                    />
                </div>

                <div>
                    <p style={{
                        fontSize: '30px',
                        textAlign: 'center',
                        fontWeight: 500
                    }}>Your Cart</p>
                </div>

                <div style={{ marginTop: '0px', paddingBottom: '25px' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        // variant="scrollable"
                        // scrollButtons="auto"
                        centered
                        className='smilingCartTabMain'
                    >
                        <Tab label="List View"
                            className='smilingCartTab1Main'
                        />
                        <Tab label="Image View"
                            className='smilingCartTab1Main'
                        />
                    </Tabs>
                </div>
            </div>

            <CustomTabPanel value={value} index={0}>
                <div className='allCartdataMain' >
                    {cartListData?.length === 0 ? !isLoading && (
                        <div className='smilingNoDataCart'>
                            <p style={{ margin: "0px", fontSize: "20px", fontWeight: 500 }}>
                                No Data Available
                            </p>
                            <p>Please First Add To Cart Data</p>
                            <button className='browseBtnMore' onClick={(event) => {
                                toggleCartDrawer(false)(event);
                                navigation('/productpage');
                                handleSave(openCustoMizeIndexNumber);
                            }}>BROWSE OUR COLLECTION</button>

                        </div>
                    ) : (
                        <div>
                            {cartListData?.map((item, index) => (

                                <div key={item.id} className="smiling-cartBoxMain">
                                    <div className='smilingCartMobileMain' style={{ display: 'flex' }}>
                                        <div
                                            style={{
                                                position: "absolute",
                                                right: "35px",
                                                cursor: "pointer",
                                            }}
                                            onClick={() => handleRemove(item)}
                                        >
                                            <CloseIcon />
                                        </div>
                                        <div className='smilingCartImage'>
                                            <img
                                                src={`${imageURL}/${yKey}/${item.DefaultImageName}`}
                                                className="smiling-cartBoxImg"
                                                alt="#"
                                            />
                                        </div>
                                        <div className='smilingCartBox1' style={{ width: "65%", margin: "20px" }}>
                                            <p className='smilingMobileCartDeatil' style={{ margin: '10px 70px 10px 10px' }}>
                                                <span style={{ fontWeight: 600 }}>{item.metalcolorname} {item.metaltypename}</span> with
                                                <span style={{ fontWeight: 600 }}> {item.Rec_NetWeight}</span> with gross wt of
                                                <span style={{ fontWeight: 600 }}> {item.grossweight}</span> including
                                                <span style={{ fontWeight: 600 }}>  {item.totalDiaWt}({item.totaldiamondpcs})</span> of daimonds in
                                                <span style={{ fontWeight: 600 }}> {item.diamondcolor} </span>
                                                {
                                                    item.totalCSWt !== 0 && (
                                                        <>
                                                            and
                                                            <span style={{ fontWeight: 600 }}> {item.totalCSWt}({item.totalcolorstonepcs})</span>
                                                        </>
                                                    )
                                                }
                                                {item.colorstonequality !== "" && (
                                                    <>of CS in <span style={{ fontWeight: 600 }}>
                                                        {item.colorstonequality}({item.colorstonecolor})
                                                    </span></>
                                                )}
                                            </p>

                                            {showDropdowns[index] ? (<div>
                                                <div
                                                    style={{ display: "flex", width: "100%", marginTop: "12px" }}
                                                    className="srcolorsizecarat"
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            width: "49.5%",
                                                        }}
                                                    >
                                                        <label style={{ fontSize: "12.5px", color: "#7d7f85" }}>
                                                            SIZE:
                                                        </label>
                                                        <select
                                                            id={`sizeDropdown_${index}`}
                                                            style={{
                                                                border: "none",
                                                                outline: "none",
                                                                color: "#7d7f85",
                                                                fontSize: "12.5px",
                                                            }}
                                                            onChange={(e) => handelSize(e.target.value)}
                                                        >

                                                        </select>
                                                    </div>
                                                    <Divider
                                                        orientation="vertical"
                                                        flexItem
                                                        style={{
                                                            opacity: 1,
                                                            height: "30px",
                                                            margin: "10px 10px 0px 10px",
                                                        }}
                                                    />
                                                    {isMetalCutoMizeFlag === 1 &&
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                width: "47.5%",
                                                            }}
                                                        >
                                                            <label style={{ fontSize: "12.5px", color: "#7d7f85" }}>
                                                                METAL COLOR:
                                                            </label>
                                                            <select
                                                                value={selectedMetalColor}
                                                                style={{
                                                                    border: "none",
                                                                    outline: "none",
                                                                    color: "#7d7f85",
                                                                    fontSize: "12.5px",
                                                                }}
                                                            >
                                                                {metalColorData.map((colorItem) => (
                                                                    <option key={colorItem.ColorId} value={colorItem.ColorId}>
                                                                        {colorItem.metalcolorname}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>}
                                                </div>
                                                <Divider sx={{ marginTop: '10px', background: '#a9a7a7' }} />
                                                <div
                                                    style={{ display: "flex", width: "100%", marginTop: "12px" }}
                                                    className="srcolorsizecarat"
                                                >
                                                    {isDaimondCstoFlag === 1 && <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            width: "49.5%",
                                                        }}
                                                    >
                                                        <label style={{ fontSize: "12.5px", color: "#7d7f85" }}>
                                                            DAIMOND QUALITY COLOR:
                                                        </label>
                                                        <select
                                                            value={selectedDiamondQualityColor[item?.aotucode] || `${item?.diamondqualityname}_${item?.diamondcolorname}`}
                                                            onChange={(e) => setSelectedDiamondQualityColor({ ...selectedDiamondQualityColor, [item?.autocode]: e.target.value })}
                                                            style={{
                                                                border: "none",
                                                                outline: "none",
                                                                color: "#7d7f85",
                                                                fontSize: "12.5px",
                                                            }}
                                                        // defaultValue={`${item?.colorstonequality}-${item?.colorstonecolorname}`}
                                                        >
                                                            {colorData.map((colorItem) => (
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
                                                        }}
                                                    />
                                                    {isMetalCutoMizeFlag === 1 && <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            width: "49.5%",
                                                        }}
                                                    >
                                                        <label style={{ fontSize: "12.5px", color: "#7d7f85" }}>
                                                            METAL TYPE:
                                                        </label>
                                                        <select
                                                            value={selectedMetalType[item?.autocode] || item?.metal}
                                                            onChange={(e) => setSelectedMetalType({ ...selectedMetalType, [item?.autocode]: e.target.value })}
                                                            style={{
                                                                border: "none",
                                                                outline: "none",
                                                                color: "#7d7f85",
                                                                fontSize: "12.5px",
                                                            }}
                                                        >
                                                            {metalType.map((data, index) => (
                                                                <option key={index} value={data.metalType} selected>
                                                                    {data.metaltype}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>}
                                                </div>
                                                <Divider sx={{ marginTop: '20px', background: '#a9a7a7' }} />
                                                {isCColrStoneCustFlag === 1 && <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        width: "48%",
                                                    }}
                                                >
                                                    <label style={{ fontSize: "12.5px", color: "#7d7f85", marginTop: '10px' }}>
                                                        COLOR STONE QUALITY COLOR:
                                                    </label>
                                                    <select
                                                        value={selectedColorstoneQualityColor[item?.autocode] || `${item?.colorstonequalityname}-${item?.colorstonecolorname}`}
                                                        onChange={(e) => setSelectedColorstoneQualityColor({ ...selectedColorstoneQualityColor, [item?.autocode]: e.target.value })}
                                                        style={{
                                                            border: "none",
                                                            outline: "none",
                                                            color: "#7d7f85",
                                                            fontSize: "12.5px",
                                                        }}
                                                        // defaultValue={`${item?.diamondqualityname}_${item?.diamondcolorname}`}
                                                        defaultValue={`${item?.colorstonequality}-${item?.colorstonecolorname}`}

                                                    >
                                                        {DaimondQualityColor.map((data, index) => (
                                                            <option key={index} value={`${data.Quality}-${data.color}`}>
                                                                {`${data.Quality}-${data.color}`}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>}
                                                <button className="SmilingCustomzeSaveBtn" style={{ marginTop: '10px' }} onClick={() => handleSave(index)}>Save</button>
                                            </div>
                                            ) : (
                                                isProductCuFlag == 1 &&
                                                <div className="addRemkarMain">
                                                    <button className="SmilingAddRemkarBtn" style={{ marginTop: '20px' }} onClick={() => getSizeData(item, index)}>
                                                        Customization
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <p style={{ marginRight: '50px' }}>Price : {item.UnitCost === 0 ? "Not Available" : item.UnitCost} </p>
                                    </div>
                                    <div className='similingCartBotttomMain'>
                                        <div className='smilingQualityMain' style={{ display: "flex", alignItems: 'center', }}>
                                            <input
                                                type="text"
                                                style={{
                                                    border: "0px",
                                                    textAlign: "center",
                                                    outline: "none",
                                                    width: "80px",
                                                    height: '35px',
                                                    border: "1px solid #7d7f85",
                                                }}
                                                maxLength={2}
                                                className='simlingQualityBox'
                                                onClick={(event) => event.target.select()}
                                                inputMode="numeric"
                                                value={item.Quantity}
                                                onChange={(event) => handleInputChange(event, index)}
                                            />
                                            <button className="SmilingUpdateQuantityBtn" onClick={() => handleUpdateQuantity(item.designno)}>QTY</button>
                                        </div>

                                        <div className='smilingAddresingleMobileMain' style={{ display: "flex", alignItems: 'center', marginLeft: '30px' }}>
                                            <textarea
                                                type="text"
                                                placeholder="Enter Remarks..."
                                                value={item.Remarks || ""}
                                                onChange={(e) => {
                                                    const updatedCartListData = [...cartListData];
                                                    updatedCartListData[index].Remarks = e.target.value;
                                                    setCartListData(updatedCartListData);
                                                    setRemarks((prevRemarks) => ({
                                                        ...prevRemarks,
                                                        [index]: e.target.value,
                                                    }));
                                                }}
                                                className="YourCartMainRemkarBoxSingle"
                                            />
                                            <button
                                                onClick={() => handleSubmit(index, item)}
                                                className="SmilingAddSingleRemkarBtn"
                                            >
                                                Add
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <textarea
                                label="Enter Remarks"
                                variant="outlined"
                                placeholder="Enter Order Remark"
                                value={Mainremarks}
                                rows={4}
                                onChange={(e) => handleInputChangeMainRemarks(e)}
                                className="YourCartMainRemkarBox"
                                style={{ marginTop: "30px", paddingLeft: '10px' }}
                            />
                            <div className="addRemkarMain">
                                <button
                                    onClick={submitMainRemrks}
                                    className="SmilingAddRemkarBtn"
                                >
                                    Add Order Remark
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                {cartListData?.length !== 0 && (
                    <div className="placeOrderBtnMain">
                        <button
                            className="placeOrderBtn"
                            onClick={(event) => {
                                toggleCartDrawer(false)(event);
                                navigation('/Delivery');
                                handleSave(openCustoMizeIndexNumber);
                            }}
                        >
                            Place Order
                        </button>
                    </div>
                )}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <div style={{ paddingBottom: "150px", marginTop: '170px' }}>
                    {cartListData?.length === 0 ? !isLoading && (
                        <div className='smilingNoDataCart'>
                            <p style={{ margin: "0px", fontSize: "20px", fontWeight: 500 }}>
                                No Data Available
                            </p>
                            <p>Please First Add To Cart Data</p>

                            <button className='browseBtnMore' onClick={(event) => {
                                toggleCartDrawer(false)(event);
                                navigation('/productpage');
                                handleSave(openCustoMizeIndexNumber);
                            }}>BROWSE OUR COLLECTION</button>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                            {cartListData?.map((item, index) => (
                                <div key={item.id} className="smiling-cartBoxMainImageView">
                                    <div className='smilingCartMobileMain' style={{ display: 'flex' }}>
                                        <img
                                            alt=''
                                            src={`${imageURL}/${yKey}/${item.DefaultImageName}`}
                                            className="smiling-cartBoxImgView"
                                        />
                                    </div>

                                </div>
                            ))}
                            <textarea
                                label="Enter Remarks"
                                variant="outlined"
                                placeholder="Enter Order Remark"
                                value={Mainremarks}
                                rows={4}
                                onChange={(e) => handleInputChangeMainRemarks(e)}
                                className="YourCartMainRemkarBox"
                                style={{ marginTop: "30px", paddingLeft: '10px' }}
                            />
                            <div className="addRemkarMain" style={{ width: '100%', marginTop: '10px' }}>
                                <button
                                    onClick={submitMainRemrks}
                                    className="SmilingAddRemkarBtn"
                                >
                                    Add Order Remark
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                {cartListData?.length !== 0 && (
                    <div className="placeOrderBtnMain">
                        <button
                            className="placeOrderBtn"
                            onClick={(event) => {
                                toggleCartDrawer(false)(event);
                                navigation('/Delivery');
                                handleSave(openCustoMizeIndexNumber);
                            }}
                        >
                            Place Order
                        </button>
                    </div>
                )}
            </CustomTabPanel>


        </Drawer>
    )
}
