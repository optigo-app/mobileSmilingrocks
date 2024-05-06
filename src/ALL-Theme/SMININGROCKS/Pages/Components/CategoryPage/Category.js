import React, { useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { loginState, newMenuData } from '../../../../../Recoil/atom';
import { CommonAPI } from '../../../Utils/API/CommonAPI';
import { useNavigate } from 'react-router-dom';
import { ACCOUNT, LOGIN } from '../../../lib/consts/Strings';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
import SwipeableViews from 'react-swipeable-views';
import './Category.css'

export default function Category() {


    const [islogin, setislogin] = useRecoilState(loginState);
    const [isB2bFlag, setIsB2BFlaf] = useState('');
    const [isOpen, setIsOpen] = useState(true);


    const [menul0data, setMenul0data] = useState([])
    const [menul1data, setMenul1data] = useState([])
    const [menul2data, setMenul2data] = useState([])
    const navigation = useNavigate();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false, // Enable autoplay
        // autoplaySpeed: 3000,
        // prevArrow: false, 
        // nextArrow: false,
    };


    useEffect(() => {
        if (islogin === 'true') {
            
            let data0 = JSON.parse(localStorage.getItem('tempMenu0data')) ?? "";
            let data1 = JSON.parse(localStorage.getItem('tempMenu1data')) ?? "";
            let data2 = JSON.parse(localStorage.getItem('tempMenu2data')) ?? "";
            setMenul0data(data0);
            setMenul1data(data1);
            setMenul2data(data2);

            // getMenuApi()
            const storeInit = JSON.parse(localStorage.getItem('storeInit')) ?? "";
            const { IsB2BWebsite } = storeInit;
            setIsB2BFlaf(IsB2BWebsite);
        }
    }, [islogin])

    // const separateData = (menuData) => {

    //     let tempMenu0data = Array.from(new Set(menuData?.map(item => JSON.stringify({
    //         menuname: item.menuname,
    //         param0dataname: item.param0dataname,
    //         param0dataid: item.param0dataid,
    //         param0name: item.param0name,
    //         param0id: item.param0id
    //     }))))?.map(item => JSON.parse(item));

    //     let tempMenu1data = Array.from(new Set(menuData?.map(item => JSON.stringify({
    //         param1id: item.param1id,
    //         param1name: item.param1name,
    //         param1dataid: item.param1dataid,
    //         param1dataname: item.param1dataname
    //     }))))?.map(item => JSON.parse(item));

    //     let tempMenu2data = Array.from(new Set(menuData?.map(item => JSON.stringify({
    //         param2id: item.param2id,
    //         param2name: item.param2name,
    //         param2dataid: item.param2dataid,
    //         param2dataname: item.param2dataname
    //     }))))?.map(item => JSON.parse(item));

    //     // Update states
    //     localStorage.setItem('tempMenu0data', JSON.stringify(tempMenu0data));
    //     localStorage.setItem('tempMenu1data', JSON.stringify(tempMenu1data));
    //     localStorage.setItem('tempMenu2data', JSON.stringify(tempMenu2data));

    //     islogin === 'true' && setMenul0data(tempMenu0data);
    //     islogin === 'true' && setMenul1data(tempMenu1data);
    //     islogin === 'true' && setMenul2data(tempMenu2data);
    // };

    // const transformData = (data) => {
    //     const transformedData = data?.reduce((acc, item) => {
    //         const existingItem = acc.find(i => i.levelid === item.levelid);
    //         if (existingItem) {
    //             const existingParam1 = existingItem.param1.find(p => p.param1dataid === item.param1dataid);
    //             if (existingParam1) {
    //                 if (item.param2id) {
    //                     const existingParam2 = existingParam1.param2.find(p => p.param2dataid === item.param2dataid);
    //                     if (!existingParam2) {
    //                         existingParam1.param2.push({
    //                             param2id: item.param2id,
    //                             param2name: item.param2name,
    //                             param2dataid: item.param2dataid,
    //                             param2dataname: item.param2dataname
    //                         });
    //                     }
    //                 }
    //             } else {
    //                 const newParam1 = {
    //                     param1id: item.param1id,
    //                     param1name: item.param1name,
    //                     param1dataid: item.param1dataid,
    //                     param1dataname: item.param1dataname,
    //                     menuname: item.menuname, // Include menuname here
    //                     param2: []
    //                 };
    //                 if (item.param2id) {
    //                     newParam1.param2.push({
    //                         param2id: item.param2id,
    //                         param2name: item.param2name,
    //                         param2dataid: item.param2dataid,
    //                         param2dataname: item.param2dataname
    //                     });
    //                 }
    //                 existingItem.param1.push(newParam1);
    //             }
    //         } else {
    //             const newItem = {
    //                 levelid: item.levelid,
    //                 menuname: item.menuname,
    //                 param0dataname: item.param0dataname,
    //                 param0dataid: item.param0dataid,
    //                 param0name: item.param0name,
    //                 param0id: item.param0id,
    //                 param1: []
    //             };
    //             if (item.param1id) {
    //                 const newParam1 = {
    //                     param1id: item.param1id,
    //                     param1name: item.param1name,
    //                     param1dataid: item.param1dataid,
    //                     param1dataname: item.param1dataname,
    //                     menuname: item.menuname, // Include menuname here
    //                     param2: []
    //                 };
    //                 if (item.param2id) {
    //                     newParam1.param2.push({
    //                         param2id: item.param2id,
    //                         param2name: item.param2name,
    //                         param2dataid: item.param2dataid,
    //                         param2dataname: item.param2dataname
    //                     });
    //                 }
    //                 newItem.param1.push(newParam1);
    //             }
    //             acc.push(newItem);
    //         }
    //         return acc;
    //     }, []);

    //     // setFinalData(transformedData);
    // };

    // const getMenuApi = async () => {

    //     const storeInit = JSON.parse(localStorage.getItem("storeInit")) ?? ""
    //     const Customer_id = JSON.parse(localStorage.getItem("loginUserDetail")) ?? ""
    //     // if (storeInit && Customer_id) {
    //     let pData = JSON.stringify({ "FrontEnd_RegNo": `${storeInit?.FrontEnd_RegNo}`, "Customerid": `${Customer_id?.id ?? 0}` })

    //     let pEnc = btoa(pData)

    //     const body = {
    //         con: `{\"id\":\"\",\"mode\":\"GETMENU\",\"appuserid\":\"${Customer_id.userid}"\}`,
    //         f: "onload (GETMENU)",
    //         p: pEnc
    //     }

    //     await CommonAPI(body).then((res) => {
    //         // console.log("getmenuData",res?.Data?.rd)
    //         transformData(res?.Data?.rd)

    //         separateData(res?.Data?.rd)
    //     })
    //     // }
    // }


    const fetchData = () => {
        const value = localStorage.getItem('LoginUser');
        const val = (value === 'true' ? 'true' : 'false')
        setislogin(val);
    };


    useEffect(() => {
        fetchData();
    }, []);


    const toggleList = () => {
        setIsOpen(!isOpen);
    };

    const setNewMenuData = useSetRecoilState(newMenuData)


    const handelNewMenuData = (param) => {
        setNewMenuData(param)
        // setIsDropdownOpen(false)
        // setDrawerShowOverlay(false)
        navigation("/productpage")
    }


    function capitalizeText(text) {
        return text?.toLowerCase()?.split(' ').map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    }

    const [isOpenCollection, setIsOpenCollection] = useState(false);
    const toggleListCollection = () => {
        setIsOpenCollection(!isOpenCollection);
    };

    const [isOpenBouti, setIsOpenBouti] = useState(false);
    const toggleListBouti = () => {
        setIsOpenBouti(!isOpenBouti);
    };


    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className="smlingDraweOverlayNoUnderLine">
            <div className="smlingDraweOverlay ">
                <div
                    style={{
                        display: "flex",
                        margin: "20px",
                    }}
                >

                    {islogin === 'true' && (<div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            width: "20%",
                            justifyContent: "flex-end",
                        }}
                    >
                    </div>
                    )}
                </div>
            </div>
            <TabContext value={value}>
                {islogin === 'true' && <div className='tabMainMenu'>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="primary"
                        indicatorColor="primary"
                        centered
                        className='tabMainSmilingMobile'
                    >
                        <Tab label="FINE JEWELLERY" />
                        <Tab label="COLLECTION" />
                        <Tab label="BOUTIQUE" />
                    </Tabs>
                </div>}

                {islogin !== 'true' && <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '200px' }}>
                    <p style={{ margin: '0px', fontWeight: 500 }}>No Data Available</p>
                    <button style={{
                        height: '35px',
                        width: '150px',
                        backgroundColor: '#e1e1e1',
                        border: 'none',
                        outline: 'none',
                        fontSize: '18px',
                        fontWeight: 500,
                        borderRadius: '5px',
                        marginTop: '5px'
                    }} onClick={() => navigation('/LoginOption')}>Login</button>
                </div>}
                <SwipeableViews
                    index={value}
                    onChangeIndex={handleChangeIndex}
                    enableMouseEvents
                    animateTransitions
                >
                    <TabPanel value={value} index={0} style={{ marginInline: '15%', padding: '0px' }}>
                        <ul className="my-list-fineJewe open">
                            <li style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
                                {
                                    menul0data?.map((md) => (
                                        <span className='menuItemfont' onClick={() => handelNewMenuData({ "label": "param0", "data": md })}>
                                            {capitalizeText(md?.menuname)}
                                        </span>
                                    ))
                                }
                            </li>
                        </ul>
                    </TabPanel>
                    <TabPanel value={value} index={1} style={{ marginInline: '15%', padding: '0px' }}>
                        <ul className="my-list-fineJewe open">
                            <li style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
                                {
                                    menul1data?.map((md) => (
                                        <span className='menuItemfont' onClick={() => handelNewMenuData({ "label": "param1", "data": md })} >
                                            {capitalizeText(md?.param1dataname)}
                                        </span>
                                    ))
                                }
                            </li>
                        </ul>
                    </TabPanel>
                    <TabPanel value={value} index={2} style={{ marginInline: '15%', padding: '0px' }}>
                        <ul className="my-list-fineJewe open">
                            <li style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
                                {
                                    menul2data?.map((md) => (
                                        <span className='menuItemfont' onClick={() => handelNewMenuData({ "label": "param2", "data": md })} >
                                            {capitalizeText(md?.param2dataname)}
                                        </span>
                                    ))
                                }
                            </li>
                        </ul>
                    </TabPanel>
                </SwipeableViews>
            </TabContext>
        </div>
    )
}

















// import React, { useEffect, useState } from 'react';
// import './Category.css';
// import { CommonAPI } from '../../../Utils/API/CommonAPI';
// import { CircularProgress } from '@mui/material';
// import { IoArrowBack } from "react-icons/io5";
// import { useNavigate } from 'react-router-dom';

// export default function Category() {
//     const [imageURL, setImageURL] = useState('');
//     const [uKey, setYouKey] = useState('');
//     const [availableImages, setAvailableImages] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const navigation = useNavigate();

//     const checkImageAvailability = async (imageUrl) => {
//         try {
//             const img = await fetch(imageUrl);
//             if (img.ok) {
//                 return true;
//             } else {
//                 return false;
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             return false;
//         }
//     };

//     useEffect(() => {
//         const getCategoryData = async () => {
//             try {
//                 setIsLoading(true);
//                 const ImageURL = localStorage.getItem('UploadLogicalPath');
//                 setImageURL(ImageURL);

//                 const storeInit = JSON.parse(localStorage.getItem('storeInit'));
//                 const { FrontEnd_RegNo, ukey } = storeInit;
//                 setYouKey(ukey);

//                 const combinedValue = JSON.stringify({
//                     FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: localStorage.getItem('LogdinCustomerId') || '0'
//                 });

//                 const encodedCombinedValue = btoa(combinedValue);
//                 const body = {
//                     "con": "{\"id\":\"\",\"mode\":\"GETCATEGORY\",\"appuserid\":\"\"}",
//                     "f": "Category (getCategory)",
//                     "p": encodedCombinedValue
//                 };

//                 const response = await CommonAPI(body);
//                 if (response.Data?.rd) {
//                     setTimeout(async () => {
//                         const formattedImages = await Promise.all(response.Data.rd.map(async item => {
//                             const imageUrl = `${ImageURL}/${ukey}/categoryimages/${encodeURIComponent(item.collectionname)}-${encodeURIComponent(item.categoryname)}/${encodeURIComponent(item.collectionname)}-${encodeURIComponent(item.categoryname)}.jpg`;
//                             const isAvailable = await checkImageAvailability(imageUrl);
//                             return { ...item, imageURL: imageUrl, isAvailable: isAvailable };
//                         }));
//                         const filteredImages = formattedImages.filter(item => item.isAvailable);
//                         setAvailableImages(filteredImages);
//                         setIsLoading(false);
//                     }, 100);
//                 }
//             } catch (error) {
//                 console.error('Error:', error);
//             }
//         };

//         getCategoryData();

//     }, []);

//     return (
//         <div>
//             {isLoading && (
//                 <div className="loader-overlay">
//                     <CircularProgress className='loadingBarManage' />
//                 </div>
//             )}
//             <p className="SmiCartListTitle">
//                 <IoArrowBack style={{height: '25px', width: '25px', marginRight: '10px'}} onClick={() => navigation('/')}/>
//                 Category
//             </p>
//             {availableImages.length === 0 && !isLoading ?
//                 <div
//                     style={{
//                         display: "flex",
//                         flexDirection: "column",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         margin: "150px 0px",
//                     }}
//                 >
//                     <p
//                         style={{
//                             margin: "0px",
//                             fontSize: "20px",
//                             fontWeight: 500,
//                         }}
//                     >
//                         No Data Available
//                     </p>
//                 </div>
//                 :
//                 <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '80px', marginInline: '5px', marginTop: '20px' }}>
//                     {availableImages.map((item, id) => (
//                         <div key={id} className='imagesViewCategoryDiv'>
//                             <img src={item.imageURL} alt={`${item.collectionname}-${item.categoryname}`}
//                                 className='imagesViewCategory' />
//                             <p className='colletioname'>{item.collectionname}</p>
//                         </div>
//                     ))}
//                 </div>
//             }
//         </div>
//     );
// }
