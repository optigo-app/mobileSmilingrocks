import React, { useEffect, useState } from 'react'
import './Category.css'
import { CommonAPI } from '../../../Utils/API/CommonAPI';


export default function Category() {

    const [CategoryData, setCategoryData] = useState([]);
    const [imageURL, setImageURL] = useState("");
    const [yKey, setYouKey] = useState('');




    useEffect(() => {
        const getCategoryData = async () => {
            try {
                const ImageURL = localStorage.getItem("UploadLogicalPath");
                setImageURL(ImageURL);

                const storedEmail = localStorage.getItem('registerEmail') || '';
                const storedCustomerId = localStorage.getItem('LogdinCustomerId') || '0';

                const storeInit = JSON.parse(localStorage.getItem('storeInit'));
                const { FrontEnd_RegNo, ukey } = storeInit;
                setYouKey(ukey);

                const combinedValue = JSON.stringify({
                    FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${storedCustomerId}`
                });
                const encodedCombinedValue = btoa(combinedValue);
                const body = {
                    "con": "{\"id\":\"\",\"mode\":\"GETCATEGORY\",\"appuserid\":\"\"}",
                    "f": "Category (getCategory)",
                    "p": encodedCombinedValue
                }
                const response = await CommonAPI(body);
                if (response.Data?.rd) {
                    setCategoryData(response.Data?.rd)
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                // setIsLoading(false);
            }
        }

        getCategoryData();
    }, []);

    // {imageURL) /{yKey}/categoryimages / { collectionname } - { categoryname } / { collectionname } - { categoryname }.jpg

        return (
            <div>

                <div>
                    {CategoryData?.map((item, id) => {
                        <div key={id}>
                            <div>

                            </div>
                        </div>
                    })}
                </div>
            </div>
        )
    }
