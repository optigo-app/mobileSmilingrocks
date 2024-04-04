import React, { useEffect, useState } from 'react'
import Header from '../home/Header/Header'
import './MyWishList.css'
import Footer from '../home/Footer/Footer'
import { CommonAPI } from '../../../Utils/API/CommonAPI'
import { useNavigate } from 'react-router-dom'
import { IoClose } from "react-icons/io5";
import { CircularProgress } from '@mui/material'
import { useSetRecoilState } from 'recoil'
import { CartListCounts, WishListCounts } from '../../../../../Recoil/atom'
import { GetCount } from '../../../Utils/API/GetCount'

export default function MyWishList() {

    const [wishlistData, setWishlistData] = useState([]);
    const [yKey, setYouKey] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [customerID, setCustomerID] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isPriseShow, setIsPriceShow] = useState('');
    const setCartCount = useSetRecoilState(CartListCounts)
    const setWishCount = useSetRecoilState(WishListCounts)
    const navigation = useNavigate();


    const getCountFunc = async () => {
        await GetCount().then((res) => {
            if (res) {
                setCartCount(res.CountCart)
                setWishCount(res.WishCount)
            }
        })

    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                wishlistData.length === 0 && setIsLoading(true);
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
                    wishlistData.length === 0 && setIsLoading(false);
                    setWishlistData(response.Data.rd);
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);


    const handleAddToCart = async (autoCode) => {
        try {
            setIsLoading(true);
            const storeInit = JSON.parse(localStorage.getItem('storeInit'));
            const { FrontEnd_RegNo } = storeInit;
            const combinedValue = JSON.stringify({
                autocodelist: `${autoCode}`, ischeckall: '', FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerID}`
            });
            const encodedCombinedValue = btoa(combinedValue);
            const body = {
                "con": `{\"id\":\"Store\",\"mode\":\"addwishlisttocart\",\"appuserid\":\"${userEmail}\"}`,
                "f": "MyWishLsit(addwishlisttocart)",
                p: encodedCombinedValue
            };
            const response = await CommonAPI(body);
            if (response.Data.rd[0].stat === 1) {
                setWishlistData(prevData => prevData.filter(item => item.autocode !== autoCode));
                getCountFunc();
                navigation('/myWishList')
            } else {
                alert('Error');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    }

    const handleAddAll = async () => {
        try {
            setIsLoading(true);
            const storeInit = JSON.parse(localStorage.getItem('storeInit'));
            const { FrontEnd_RegNo } = storeInit;
            const combinedValue = JSON.stringify({
                autocodelist: '', ischeckall: '1', FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerID}`
            });
            const encodedCombinedValue = btoa(combinedValue);
            const body = {
                "con": `{\"id\":\"Store\",\"mode\":\"addwishlisttocart\",\"appuserid\":\"${userEmail}\"}`,
                "f": "MyWishLsit(addwishlisttocart)",
                p: encodedCombinedValue
            };
            const response = await CommonAPI(body);
            if (response.Data.rd[0].stat === 1) {
                setWishlistData([]);
                getCountFunc();
                navigation('/myWishList')
            } else {
                alert('Error');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    }

    const handleRemoveWichList = async (data) => {
        try {
            setIsLoading(true);
            const storeInit = JSON.parse(localStorage.getItem('storeInit'));
            const { FrontEnd_RegNo } = storeInit;
            const combinedValue = JSON.stringify({
                designlist: `'${data.designno}'`, isselectall: '0', FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerID}`
            });
            const encodedCombinedValue = btoa(combinedValue);
            const body = {
                "con": `{\"id\":\"Store\",\"mode\":\"removeFromWishList\",\"appuserid\":\"${userEmail}\"}`,
                "f": "myWishLisy (handleRemoveWichList)",
                p: encodedCombinedValue
            };
            const response = await CommonAPI(body);
            if (response.Data.rd[0].stat === 1) {
                setWishlistData(prevData => prevData.filter(item => item.designno !== data.designno));
                getCountFunc();
                navigation('/myWishList')
            } else {
                alert('Error');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    }

    const handleRemoveAllWishList = async () => {
        try {
            setIsLoading(true);
            const storeInit = JSON.parse(localStorage.getItem('storeInit'));
            const { FrontEnd_RegNo } = storeInit;
            const combinedValue = JSON.stringify({
                designlist: '', isselectall: '1', FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerID}`
            });
            const encodedCombinedValue = btoa(combinedValue);
            const body = {
                "con": `{\"id\":\"Store\",\"mode\":\"removeFromWishList\",\"appuserid\":\"${userEmail}\"}`,
                "f": "myWishLisy (handleRemoveWichList)",
                p: encodedCombinedValue
            };
            const response = await CommonAPI(body);
            if (response.Data.rd[0].stat === 1) {
                // alert('Remove Success');
                // window.location.reload();
                setWishlistData([]);
                getCountFunc();
                navigation('/myWishList')
            } else {
                alert('Error');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    }

    const handelProductSubmit = (product) => {
        console.log('producrrrrrrrrrrr', JSON.stringify(product));
        // localStorage.setItem("srProductsData", JSON.stringify(product));
        // navigation("/productdetail");
    };


    return (
        <div className='paddingTopMobileSet' style={{
            backgroundColor: '#c0bbb1',
            paddingTop: '110px'
        }}>
            {isLoading && (
                <div className="loader-overlay">
                    <CircularProgress className='loadingBarManage' />
                </div>
            )}
            <div>
                <div className='smiling-wishlist'>
                    <p className='SmiWishListTitle'>Wishlist</p>

                    {wishlistData?.length !== 0 && <div className='smilingListTopButton'>
                        <button className='smiTopClearBtn' onClick={handleRemoveAllWishList}>CLEAR ALL</button>
                        <button className='smiTopAddAllBtn' onClick={handleAddAll}>ADD TO CART ALL</button>
                        <button className='smiTopAddAllBtn' onClick={() => navigation('/productpage')}>Show ProductList</button>
                    </div>}

                    <div className='smiWishLsitBoxMain'>
                        {wishlistData?.length === 0 ? !isLoading &&
                            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <p style={{ margin: '0px', fontSize: '20px', fontWeight: 500 }}>No Data Available</p>
                                <p>Please First Add To Wishlist Data</p>
                                <button className='browseBtnMore' onClick={() => navigation('/productpage')}>BROWSE OUR COLLECTION</button>
                            </div>
                            :
                            wishlistData?.map(item => (
                                <div key={item.id} className='smiWishLsitBox'>
                                    <div style={{ position: 'absolute', right: '20px', top: '5px' }}>
                                        <IoClose style={{ height: '30px', width: '30px', cursor: 'pointer', color: 'rgb(0 0 0 / 66%)' }} onClick={() => handleRemoveWichList(item)} />
                                    </div>
                                    <img src={`${imageURL}/${yKey}/${item.DefaultImageName}`} className='smiWishLsitBoxImge' style={{ cursor: 'pointer' }} alt='Wishlist item' onClick={() => handelProductSubmit(item)} />
                                   
                                    <p className='smiWishLsitBoxDesc1'>{item.designno}</p>
                                    <p className='smiWishLsitBoxDesc2'>{item.mastermanagement_goldtypename} / {item.mastermanagement_goldcolorname} / {item.ActualGrossweight} <br /> {isPriseShow == 1 && <p>$ {item.TotalUnitCost}</p>}</p>
                                    <p className='smiWishLsitBoxDesc3' onClick={() => handleAddToCart(item.autocode)}>ADD TO CART +</p>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
