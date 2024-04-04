import React, { useState } from 'react'
import './StoreLocatore.css'
import Header from '../home/Header/Header'
import Footer from '../home/Footer/Footer'

export default function StoreLocatore() {

    const imageData = [
        {
            images: 'https://www.gorjana.com/cdn/shop/files/Bridgeport_9948d2d3-4656-4b13-bcfc-d9e9af2a7263.jpg?v=1693496761&width=352&height=352&crop=center'
        },
        {
            images: 'https://www.gorjana.com/cdn/shop/files/Bridgeport_9948d2d3-4656-4b13-bcfc-d9e9af2a7263.jpg?v=1693496761&width=352&height=352&crop=center'
        },
        {
            images: 'https://www.gorjana.com/cdn/shop/files/Bridgeport_9948d2d3-4656-4b13-bcfc-d9e9af2a7263.jpg?v=1693496761&width=352&height=352&crop=center'
        },
        {
            images: 'https://www.gorjana.com/cdn/shop/files/Bridgeport_9948d2d3-4656-4b13-bcfc-d9e9af2a7263.jpg?v=1693496761&width=352&height=352&crop=center'
        },
        {
            images: 'https://www.gorjana.com/cdn/shop/files/Bridgeport_9948d2d3-4656-4b13-bcfc-d9e9af2a7263.jpg?v=1693496761&width=352&height=352&crop=center'
        },
        {
            images: 'https://www.gorjana.com/cdn/shop/files/Bridgeport_9948d2d3-4656-4b13-bcfc-d9e9af2a7263.jpg?v=1693496761&width=352&height=352&crop=center'
        },
        {
            images: 'https://www.gorjana.com/cdn/shop/files/Bridgeport_9948d2d3-4656-4b13-bcfc-d9e9af2a7263.jpg?v=1693496761&width=352&height=352&crop=center'
        },
        {
            images: 'https://www.gorjana.com/cdn/shop/files/Bridgeport_9948d2d3-4656-4b13-bcfc-d9e9af2a7263.jpg?v=1693496761&width=352&height=352&crop=center'
        },

    ]
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenMidWest, setIsOpenMidWest] = useState(false);
    const [isOpenSouthWest, setIsOpenSouthWest] = useState(false);
    const [isOpenSouthEast, setIsOpenSouthEast] = useState(false);
    const [isOpenNorthEast, setIsOpenNorthEast] = useState(false);

    const toggleList = () => {
        setIsOpen(!isOpen);
    };
    const toggleListMidWest = () => {
        setIsOpenMidWest(!isOpenMidWest);
    };
    const toggleListSouthWest = () => {
        setIsOpenSouthWest(!isOpenSouthWest);
    };
    const toggleListSouthEast = () => {
        setIsOpenSouthEast(!isOpenSouthEast);
    };
    const toggleListNorthEast = () => {
        setIsOpenNorthEast(!isOpenNorthEast);
    };

    return (
        <div>
            <Header />
            <div className='gorStoreMain'>
                <p className='gorStoreMainTitle'>Store Locator</p>

                <div className='gorStoreTopSection'>
                    <div className='gorLosAndleMain'>
                        <p style={{ fontSize: '14px', margin: '0px' }}>Zip Code / City / State</p>
                        <input type='text' placeholder='Los Angeles' className='gorLosAngles' />
                    </div>
                    <div className='gorStoreShowLocMain'>
                        <p style={{ fontSize: '14px', margin: '0px' }}>Show Locations Within</p>
                        <select className='gorStoreShowLoc'>
                            <option>50 miles</option>
                            <option>100 miles</option>
                            <option>150 miles</option>
                            <option>200 miles</option>
                            <option>250 miles</option>
                        </select>
                    </div>
                    <div className='gorStoreFindBtnMain'>
                        <button className='gorStoreFindBtn'>FIND A STORE</button>
                    </div>
                </div>
                <p style={{ textDecoration: 'underline', marginTop: '20px' }}>Use My Current Location</p>

                <p style={{
                    fontFamily: 'Freight Big Pro,serif',
                    fontSize: '30px',
                    marginTop: '90px'
                }}>Browse By Region</p>


                <div style={{ borderBottom: '1px solid', cursor: 'pointer' }}>
                    <p onClick={toggleList} className='gorBrowseTitle'>West <span style={{ fontWeight: 600 }}>{isOpen ? '-' : '+'}</span></p>
                    <div className={`gorStoreBrowmy-list ${isOpen ? 'open' : ''}`}>
                        {
                            imageData.map((data, index) =>
                                <>
                                    <img src={data.images} className='gorBrowImges' />
                                </>
                            )
                        }
                    </div>
                </div>

                <div style={{ borderBottom: '1px solid', cursor: 'pointer' }}>
                    <p onClick={toggleListMidWest} className='gorBrowseTitle'>Midwest <span style={{ fontWeight: 600 }}>{isOpenMidWest ? '-' : '+'}</span></p>
                    <div className={`gorStoreBrowmy-list ${isOpenMidWest ? 'open' : ''}`}>
                        {
                            imageData.map((data, index) =>
                                <>
                                    <img src={data.images} className='gorBrowImges' />
                                </>
                            )
                        }
                    </div>
                </div>

                <div style={{ borderBottom: '1px solid', cursor: 'pointer' }}>
                    <p onClick={toggleListSouthWest} className='gorBrowseTitle'>Southwest <span style={{ fontWeight: 600 }}>{isOpenSouthWest ? '-' : '+'}</span></p>
                    <div className={`gorStoreBrowmy-list ${isOpenSouthWest ? 'open' : ''}`}>
                        {
                            imageData.map((data, index) =>
                                <>
                                    <img src={data.images} className='gorBrowImges' />
                                </>
                            )
                        }
                    </div>
                </div>

                <div style={{ borderBottom: '1px solid', cursor: 'pointer' }}>
                    <p onClick={toggleListNorthEast} className='gorBrowseTitle'>Southeast <span style={{ fontWeight: 600 }}>{isOpenSouthEast ? '-' : '+'}</span></p>
                    <div className={`gorStoreBrowmy-list ${isOpenSouthEast ? 'open' : ''}`}>
                        {
                            imageData.map((data, index) =>
                                <>
                                    <img src={data.images} className='gorBrowImges' />
                                </>
                            )
                        }
                    </div>
                </div>
                <div style={{ borderBottom: '1px solid', cursor: 'pointer' }}>
                    <p onClick={toggleListNorthEast} className='gorBrowseTitle'>Northeast <span style={{ fontWeight: 600 }}>{isOpenNorthEast ? '-' : '+'}</span></p>
                    <div className={`gorStoreBrowmy-list ${isOpenNorthEast ? 'open' : ''}`}>
                        {
                            imageData.map((data, index) =>
                                <>
                                    <img src={data.images} className='gorBrowImges' />
                                </>
                            )
                        }
                    </div>
                </div>

            </div>
            <div style={{marginTop: '60px'}}>

            <Footer />
            </div>
        </div>
    )
}
