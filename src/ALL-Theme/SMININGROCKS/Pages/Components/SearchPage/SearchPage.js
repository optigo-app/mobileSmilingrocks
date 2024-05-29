import React, { useState } from 'react'
import './SearchPage.css'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { searchData } from '../../../../../Recoil/atom';
import { useSetRecoilState } from 'recoil';
import { IoArrowBack } from 'react-icons/io5';
import { PiArrowCounterClockwiseBold } from "react-icons/pi";

export default function SearchPage() {

    const [searchText, setSearchText] = useState(null)

    const navigation = useNavigate();

    const toggleOverlay = () => {
        setSearchText('');
    };



    const setGSearch = useSetRecoilState(searchData);
    
    function searchDataFucn() {
        let ProductApiData2 = JSON.parse(localStorage.getItem("allproductlist"));
        if (ProductApiData2) {
            let searchTextN = searchText?.toLowerCase();
            let data = ProductApiData2.filter((pd) => {
                for (const key in pd) {
                    if (pd.hasOwnProperty(key) && pd[key]?.toString().toLowerCase().includes(searchTextN)) {
                        return true;
                    }
                }
                return false;
            });
            console.log('datadatadata',data);
            if (data?.length > 0) {
                setGSearch(data);
                navigation('/productpage');
            } else {
                setGSearch(ProductApiData2);
                navigation('/productpage');
            }
        } else {
            setGSearch([]);
        }
    }

    return (
        <div>
            <div className='HeaderMainSearch'>
                <IoArrowBack style={{ height: '25px', width: '25px', marginRight: '10px', color: '#7d7f85' }} onClick={() => navigation('/')} />

                <div className="searchPageBoxOnlyHeaderFiexedMain">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchText}
                        autoFocus
                        onChange={(e) => setSearchText(e.target.value)}
                        className="searchBoxOnlyHeaderFiexed"
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                searchDataFucn();
                            }
                        }}
                    />
                    <SearchIcon onClick={searchDataFucn} style={{ color: '#7d7f85' }} />
                </div>
            </div>

            <div>
                <p className='searchTreadingTitle'>TRENDING SEARCHES</p>
                <div className='recenSearchAllMain'>

                    <div className='recentSearchMain'>
                        <PiArrowCounterClockwiseBold style={{ height: '20px', width: '20px', marginRight: '10px', color: '#7d7f85' }} />
                        <p className='menuRecentSearch'>Diamond Ring</p>
                    </div>

                    <div className='recentSearchMain'>
                        <PiArrowCounterClockwiseBold style={{ height: '20px', width: '20px', marginRight: '10px', color: '#7d7f85' }} />
                        <p className='menuRecentSearch'>Diamond Earrings</p>
                    </div>

                    <div className='recentSearchMain'>
                        <PiArrowCounterClockwiseBold style={{ height: '20px', width: '20px', marginRight: '10px', color: '#7d7f85' }} />
                        <p className='menuRecentSearch'>Solitaire Ring</p>
                    </div>

                    <div className='recentSearchMain'>
                        <PiArrowCounterClockwiseBold style={{ height: '20px', width: '20px', marginRight: '10px', color: '#7d7f85' }} />
                        <p className='menuRecentSearch'>Pendants</p>
                    </div>

                    <div className='recentSearchMain'>
                        <PiArrowCounterClockwiseBold style={{ height: '20px', width: '20px', marginRight: '10px', color: '#7d7f85' }} />
                        <p className='menuRecentSearch'>Bangles</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
