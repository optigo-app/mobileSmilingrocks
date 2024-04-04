import React, { useEffect, useState } from 'react'
import './SearchResult.css'
import Header from '../home/Header/Header'
import { useLocation } from 'react-router-dom';
import SmilingRock from '../home/smiling_Rock/SmilingRock';
import Footer from '../home/Footer/Footer';

import ring1 from './../../assets/linkingLove/ring1.webp'
import ring1hover from './../../assets/linkingLove/ring1hover.jpg'

export default function SearchResult() {

    const [ring3ImageChange, setRing3ImageChange] = useState(false);
    const location = useLocation();
    const [searchedProducts, setSearchedProducts] = useState([]);

    useEffect(() => {
        const savedProductList = localStorage.getItem('allproductlist');
        if (savedProductList) {
            const productList = JSON.parse(savedProductList);
            // Filter the productList based on designno or ID
            const searchValue = location.state?.searchText;
            const filteredProducts = productList.filter(product => product.designno === searchValue || product.id === parseInt(searchValue));
            setSearchedProducts(filteredProducts);
        }
    }, [location.state?.searchText]);


    const handleMouseEnterRing3 = () => {
        setRing3ImageChange(true)
    }
    const handleMouseLeaveRing3 = () => {
        setRing3ImageChange(false)
    }


    return (
        <div style={{
            backgroundColor: '#c0bbb1',
            paddingTop: '110px'

        }}>
            <p style={{
                fontSize: '40px',
                color: 'white',
                textAlign: 'center',
                fontFamily: 'FreightDispProBook-Regular,Times New Roman,serif',
                paddingBlock: '30px'
            }}>Search Results for "{location.state?.searchText}"</p>
            <div className='smilingSearchResultMain'>
                {searchedProducts.map(product => (
                    <div key={product.id} className='smilingSearchResultBox'>
                        <img src={ring3ImageChange ? ring1hover : ring1} className='smilingSearchResultBoxImages' onMouseEnter={handleMouseEnterRing3} onMouseLeave={handleMouseLeaveRing3} />
                        <p className='smilingSearchResultBoxring1Desc'>{product.TitleLine}</p>
                        <p style={{ fontSize: '12px' }}>{product.MetalColorName} / ${product.UnitCost}</p>
                    </div>
                ))}
                <SmilingRock />
                <Footer />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', paddingBlock: '30px' }}>
                <p style={{ margin: '0px', fontWeight: 500, width: '100px', color: 'white', cursor: 'pointer' }} onClick={() => window.scrollTo(0, 0)}>BACK TO TOP</p>
            </div>
        </div>
    )
}
