import React, { useState } from 'react'
import './SearchResult.css'
import BlogHeader from '../header/BlogHeader'
import Footer from '../blogFooter/Footer'
import { useLocation } from 'react-router-dom'
import BlogSearch from '../BlogSearch/BlogSearch'
import { FaSearch } from "react-icons/fa";

export default function SearchResult() {
    const location = useLocation();

    const [searchName, setSearchName] = useState(location.state.search)
    const [searchEnter, setSearchEnter] = useState(location.state.search)


    const handleSearch = () => {
        setSearchName(searchEnter)
    }
    return (
        <div>
            <div className='searchwebView'>
                <BlogHeader />
                <div style={{
                    backgroundColor: '#f7f7f7',
                    borderColor: '#eaeaea',
                    position: 'relative',
                    top: '100px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingBlock: '35px'
                }}>
                    <p style={{ color: '#888888', margin: '0px' }}>Search Result</p>
                    <p style={{ margin: '-20px', fontSize: '50px' }}>{searchName}</p>
                </div>
                <div>
                    <div className='searchFoundMain'>
                        <div className='searchFound'>

                            <div style={{ textAlign: 'center' }}>
                                <p style={{ fontSize: '25px' }}>Nothing Found</p>
                            </div>
                            <p>Sorry, but nothing matched your search terms. Please try again with some different keywords.</p>

                            <div
                                style={{
                                    border: "1px solid #ddd",
                                    padding: "8px 12px 12px",
                                    width: "100%",
                                    marginTop: "45px",
                                }}
                            >
                                <input
                                    style={{
                                        border: "none",
                                        outline: "none",
                                        fontSize: "14px",
                                        fontFamily: "Montserrat,sans-serif",
                                        width: "700px",
                                    }}
                                    onChange={(event) => setSearchEnter(event.target.value)}
                                    placeholder="Search The Site..."
                                />
                                <FaSearch style={{ cursor: 'pointer' }} onClick={handleSearch} />
                            </div>
                        </div>
                        <div className='searchSideBar'>
                            <BlogSearch />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            <div className='searchMobileView'>
                <BlogHeader />
                <div>
                    <div style={{
                        backgroundColor: '#f7f7f7',
                        borderColor: '#eaeaea',
                        position: 'relative',
                        top: '100px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        paddingBlock: '35px'
                    }}>
                        <p style={{ color: '#888888', margin: '0px' }}>Search Result</p>
                        <p style={{ margin: '-20px', fontSize: '50px' }}>{searchName}</p>
                    </div>
                    <div style={{ marginInline: '10px' }}>
                        <p style={{ marginTop: '120px', textAlign: 'center', fontSize: '30px' }}>Nothing Found</p>
                        <p style={{ textAlign: 'center' }}>Sorry, but nothing matched your search terms. Please try again with some different keywords.</p>
                        <div
                            style={{
                                border: "1px solid #ddd",
                                padding: "8px 12px 12px",
                                width: "100%",
                                marginTop: "45px",
                            }}
                        >
                            <input
                                style={{
                                    border: "none",
                                    outline: "none",
                                    fontSize: "14px",
                                    fontFamily: "Montserrat,sans-serif",
                                    width: "90%",
                                }}
                                onChange={(event) => setSearchEnter(event.target.value)}
                                placeholder="Search The Site..."
                            />
                            <FaSearch style={{ cursor: 'pointer' }} onClick={handleSearch} />
                        </div>
                    </div>
                    <div style={{ marginInline: '10px' ,marginTop: '70px' }}>
                        <BlogSearch />
                    </div>
                </div>
                <Footer />
            </div>

        </div>
    )
}
