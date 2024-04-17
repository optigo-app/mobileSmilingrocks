import React, { useEffect, useState } from 'react';
import './Category.css';
import { CommonAPI } from '../../../Utils/API/CommonAPI';
import { CircularProgress } from '@mui/material';
import { IoArrowBack } from "react-icons/io5";

export default function Category() {
    const [imageURL, setImageURL] = useState('');
    const [uKey, setYouKey] = useState('');
    const [availableImages, setAvailableImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const checkImageAvailability = async (imageUrl) => {
        try {
            const img = await fetch(imageUrl);
            if (img.ok) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error('Error:', error);
            return false;
        }
    };

    useEffect(() => {
        const getCategoryData = async () => {
            try {
                setIsLoading(true);
                const ImageURL = localStorage.getItem('UploadLogicalPath');
                setImageURL(ImageURL);

                const storeInit = JSON.parse(localStorage.getItem('storeInit'));
                const { FrontEnd_RegNo, ukey } = storeInit;
                setYouKey(ukey);

                const combinedValue = JSON.stringify({
                    FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: localStorage.getItem('LogdinCustomerId') || '0'
                });

                const encodedCombinedValue = btoa(combinedValue);
                const body = {
                    "con": "{\"id\":\"\",\"mode\":\"GETCATEGORY\",\"appuserid\":\"\"}",
                    "f": "Category (getCategory)",
                    "p": encodedCombinedValue
                };

                const response = await CommonAPI(body);
                if (response.Data?.rd) {
                    setTimeout(async () => {
                        const formattedImages = await Promise.all(response.Data.rd.map(async item => {
                            const imageUrl = `${ImageURL}/${ukey}/categoryimages/${encodeURIComponent(item.collectionname)}-${encodeURIComponent(item.categoryname)}/${encodeURIComponent(item.collectionname)}-${encodeURIComponent(item.categoryname)}.jpg`;
                            const isAvailable = await checkImageAvailability(imageUrl);
                            return { ...item, imageURL: imageUrl, isAvailable: isAvailable };
                        }));
                        const filteredImages = formattedImages.filter(item => item.isAvailable);
                        setAvailableImages(filteredImages);
                        setIsLoading(false);
                    }, 100);
                }
            } catch (error) {
                console.error('Error:', error);
            } 
        };

        getCategoryData();

    }, []);

    return (
        <div>
            {isLoading && (
                <div className="loader-overlay">
                    <CircularProgress className='loadingBarManage' />
                </div>
            )}
            <p className="SmiCartListTitle">
                <IoArrowBack style={{height: '25px', width: '25px', marginRight: '10px'}}/>Category
            </p>
            {availableImages.length === 0 && !isLoading ?
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
                </div>
                :
                <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '80px', marginInline: '15px', marginTop: '20px' }}>
                    {availableImages.map((item, id) => (
                        <div key={id} className='imagesViewCategoryDiv'>
                            <img src={item.imageURL} alt={`${item.collectionname}-${item.categoryname}`}
                                className='imagesViewCategory' />
                            <p className='colletioname'>{item.collectionname}</p>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
}
