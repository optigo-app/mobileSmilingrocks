import React, { useEffect, useState } from 'react';
import './Category.css';
import { CommonAPI } from '../../../Utils/API/CommonAPI';

export default function Category() {
    const [CategoryData, setCategoryData] = useState([]);
    const [imageURL, setImageURL] = useState('');
    const [uKey, setYouKey] = useState('');
    const [availableImages, setAvailableImages] = useState([]);

    useEffect(() => {
        const getCategoryData = async () => {
            try {
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

                console.log('API Response:', response);

                if (response.Data?.rd) {
                    const availableImagesArray = await Promise.all(
                        response.Data.rd.map(async (item) => {
                            const imageUrl = `${ImageURL}/${uKey}/categoryimages/${encodeURIComponent(item.collectionname)}-${encodeURIComponent(item.categoryname)}/${encodeURIComponent(item.collectionname)}-${encodeURIComponent(item.categoryname)}.jpg`;
                            console.log('Image URL:', imageUrl);
                            const isAvailable = await checkImageAvailability(imageUrl);
                            return isAvailable ? item : null;
                        })
                    );
                    console.log('Available Images Array:', availableImagesArray);
                    setAvailableImages(availableImagesArray.filter(item => item !== null));
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        getCategoryData();
    }, []);

    async function checkImageAvailability(imageUrl) {
        try {
            const response = await fetch(imageUrl, { method: 'HEAD' });
            return response.ok;
        } catch (error) {
            console.error('Error checking image availability:', error);
            return false;
        }
    }

    return (
        <div>


            {availableImages?.length === 0 ?
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
                            <img src={`${imageURL}/${uKey}/categoryimages/${encodeURIComponent(item.collectionname)}-${encodeURIComponent(item.categoryname)}/${encodeURIComponent(item.collectionname)}-${encodeURIComponent(item.categoryname)}.jpg`} alt={`${item.collectionname}-${item.categoryname}`}
                                className='imagesViewCategory' />
                        </div>
                    ))}
                </div>
            }
        </div>
    );
}
