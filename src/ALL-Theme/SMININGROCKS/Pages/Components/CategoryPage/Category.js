import React, { useEffect, useState } from 'react';
import './Category.css';
import { CommonAPI } from '../../../Utils/API/CommonAPI';
import { CircularProgress } from '@mui/material';

export default function Category() {
    const [imageURL, setImageURL] = useState('');
    const [uKey, setYouKey] = useState('');
    const [availableImages, setAvailableImages] = useState([]);
    const [loadedImages, setLoadedImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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
                    setAvailableImages(response.Data?.rd);
                    checkAvailableImages(response.Data?.rd);
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setIsLoading(false);
            }
        };

        const checkAvailableImages = async (images) => {
            const loaded = await Promise.all(images.map(item => checkImageAvailability(`${imageURL}/${uKey}/categoryimages/${encodeURIComponent(item.collectionname)}-${encodeURIComponent(item.categoryname)}/${encodeURIComponent(item.collectionname)}-${encodeURIComponent(item.categoryname)}.jpg`)));
            setLoadedImages(loaded);
        };

        getCategoryData();
    }, [imageURL]);

    const checkImageAvailability = (imageUrl) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = imageUrl;
        });
    };

    return (
        <div>
            {isLoading && (
                <div className="loader-overlay">
                    <CircularProgress className='loadingBarManage' />
                </div>
            )}
            {availableImages.length === 0 ?
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
                <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '80px' }}>
                    {availableImages.map((item, id) => (
                        <div key={id} className='imagesViewCategoryDiv'>
                            {loadedImages[id] && (
                                <img src={`${imageURL}/${uKey}/categoryimages/${encodeURIComponent(item.collectionname)}-${encodeURIComponent(item.categoryname)}/${encodeURIComponent(item.collectionname)}-${encodeURIComponent(item.categoryname)}.jpg`} alt={`${item.collectionname}-${item.categoryname}`}
                                    className='imagesViewCategory' />
                            )}
                        </div>
                    ))}
                </div>
            }
        </div>
    );
}
