import React, { useState } from 'react'
import './ShopByFilter.css'
import ImportExportIcon from '@mui/icons-material/ImportExport';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CloseIcon from '@mui/icons-material/Close';
import { BTN_APPLY, BTN_CLEAREALL, SHOP_BY } from '../../../../lib/consts/Strings';
const Collections = [
  {
    id: '0',
    name: 'Mystic'
  },
  {
    id: '1',
    name: 'gift'
  }
]

const Gender = [
  {
    id: '0',
    name: 'Men'
  },
  {
    id: '1',
    name: 'Women'
  }
]

const Metal = [
  {
    id: '0',
    name: 'White Gold'
  },
  {
    id: '1',
    name: 'Rose Gold'
  },
  {
    id: '2',
    name: 'Yellow Gold'
  }
]

const Occasion = [
  {
    id: '0',
    name: 'Fashion'
  },
  {
    id: '1',
    name: 'Fashion'
  },
  {
    id: '2',
    name: 'Fashion'
  },
  {
    id: '3',
    name: 'Fashion'
  }
]

const Price = [
  {
    id: '0',
    price: '50 Thousand - 1 Lakh'
  },
  {
    id: '1',
    price: '50 Thousand - 1 Lakh'
  },
  {
    id: '2',
    price: '50 Thousand - 1 Lakh'
  },
  {
    id: '3',
    price: '50 Thousand - 1 Lakh'
  },
  {
    id: '4',
    price: '50 Thousand - 1 Lakh'
  },
  {
    id: '5',
    price: '50 Thousand - 1 Lakh'
  },
  {
    id: '6',
    price: '50 Thousand - 1 Lakh'
  },
]

const shape = [
  {
    id: '0',
    shape: 'Round'
  },
  {
    id: '1',
    shape: 'Round'
  },
  {
    id: '2',
    shape: 'Round'
  },
  {
    id: '3',
    shape: 'Round'
  },
  {
    id: '4',
    shape: 'Round'
  }, {
    id: '5',
    shape: 'Round'
  },
  {
    id: '6',
    shape: 'Round'
  },
]

const stonType = [
  {
    id: '0',
    name: 'Solitare'
  },
  {
    id: '1',
    name: 'Solitare'
  },
  {
    id: '3',
    name: 'Solitare'
  }

]

export default function ShopByFilter() {


  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [isOpenSortBy, setIsOpenSortBy] = useState(false);

  const toggleDrawerFilter = () => {
    setIsOpenFilter(!isOpenFilter);
  };

  const toggleDrawerSortBy = () => {
    setIsOpenSortBy(!isOpenSortBy);
  };

  return (
    <>
      <div className='filterMain'>
        <div className='head'>
          <p style={{ color: 'white', margin: '18px' }}>{SHOP_BY}</p>
          <button className='btnClear'>{BTN_CLEAREALL}</button>
        </div>
        <div style={{ border: '0.1px solid #cecece', height: '50px' }}>
          <p className='totalProduct'>Total Product: (30)</p>
        </div>
        <div className='priceTop'>
          <p style={{ color: '#888', margin: 0 }}>Price</p>
          <div style={{ display: 'flex' }}>
            <input style={{ width: '49%', height: '40px', float: 'left' }} id="id_price_0" type="number" min="0" class="form-control d-inline" placeholder="from" />
            <span style={{ float: 'left' }}> - </span>
            <input style={{ width: '49%', float: 'left' }} id="id_price_1" type="number" min="0" class="form-control d-inline" placeholder="to" />
          </div>
        </div>
        <div className='gender'>
          <p className='checkTitle'>Gender</p>
          {
            Gender.map((data, index) =>
              <div key={index} className='chekBoxOrName'>
                <input type='checkbox' /><p className='checkName'>{data.name}</p>
              </div>
            )
          }
        </div>

        <div className='metal'>
          <p className='checkTitle'>Metal</p>
          {
            Metal.map((data, index) =>
              <div key={index} className='chekBoxOrName'>
                <input type='checkbox' /><p className='checkName'>{data.name}</p>
              </div>
            )
          }
        </div>

        <div className='Occasion'>
          <p className='checkTitle'>Occasion</p>
          {
            Occasion.map((data, index) =>
              <div key={index} className='chekBoxOrName'>
                <input type='checkbox' /><p className='checkName'>{data.name}</p>
              </div>
            )
          }
        </div>

        <div className='price'>
          <p className='checkTitle'>Price</p>
          {
            Price.map((data, index) =>
              <div key={index} className='chekBoxOrName'>
                <input type='checkbox' /><p className='checkName'>{data.price}</p>
              </div>
            )
          }
        </div>

        <div className='shape'>
          <p className='checkTitle'>Shape</p>
          {
            shape.map((data, index) =>
              <div key={index} className='chekBoxOrName'>
                <input type='checkbox' /><p className='checkName'>{data.shape}</p>
              </div>
            )
          }
        </div>

        <div className='stonType'>
          <p className='checkTitle'>Stone Type</p>
          {
            stonType.map((data, index) =>
              <div key={index} className='chekBoxOrName'>
                <input type='checkbox' /><p className='checkName'>{data.name}</p>
              </div>
            )
          }
        </div>
        <div>
          <button className='btnApply'>{BTN_APPLY}</button>
        </div>
      </div>

      <div>
        <React.Fragment >
          <SwipeableDrawer
            anchor="bottom"
            open={isOpenFilter}
            onClose={toggleDrawerFilter}
            
          >
            <div style={{height : '300px'}}>
            <div style={{ height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '30px', border: '1px solid black', borderRadius: '25px', float: 'right', margin: '10px' }} onClick={toggleDrawerFilter}>
                <CloseIcon />
              </div>
              <div className='gender'>
                <p className='checkTitle'>Gender</p>
                {
                  Gender.map((data, index) =>
                    <div key={index} className='chekBoxOrName'>
                      <input type='checkbox' /><p className='checkName'>{data.name}</p>
                    </div>
                  )
                }
              </div>

              <div className='metal'>
                <p className='checkTitle'>Metal</p>
                {
                  Metal.map((data, index) =>
                    <div key={index} className='chekBoxOrName'>
                      <input type='checkbox' /><p className='checkName'>{data.name}</p>
                    </div>
                  )
                }
              </div>

              <div className='Occasion'>
                <p className='checkTitle'>Occasion</p>
                {
                  Occasion.map((data, index) =>
                    <div key={index} className='chekBoxOrName'>
                      <input type='checkbox' /><p className='checkName'>{data.name}</p>
                    </div>
                  )
                }
              </div>

              <div className='price'>
                <p className='checkTitle'>Price</p>
                {
                  Price.map((data, index) =>
                    <div key={index} className='chekBoxOrName'>
                      <input type='checkbox' /><p className='checkName'>{data.price}</p>
                    </div>
                  )
                }
              </div>

              <div className='shape'>
                <p className='checkTitle'>Shape</p>
                {
                  shape.map((data, index) =>
                    <div key={index} className='chekBoxOrName'>
                      <input type='checkbox' /><p className='checkName'>{data.shape}</p>
                    </div>
                  )
                }
              </div>

              <div className='stonType'>
                <p className='checkTitle'>Stone Type</p>
                {
                  stonType.map((data, index) =>
                    <div key={index} className='chekBoxOrName'>
                      <input type='checkbox' /><p className='checkName'>{data.name}</p>
                    </div>
                  )
                }
              </div>
              <div>
                <button className='btnApply'>{BTN_APPLY}</button>
              </div>

            </div>
          </SwipeableDrawer>
        </React.Fragment>

        <React.Fragment >
          <SwipeableDrawer
            anchor="bottom"
            open={isOpenSortBy}
            onClose={toggleDrawerSortBy}
          >
            <div>
              <div style={{ height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '30px', border: '1px solid black', borderRadius: '25px', float: 'right', margin: '10px' }} onClick={toggleDrawerSortBy}>
                <CloseIcon />
              </div>
              <div>
                <p style={{ textAlign: 'center', fontSize: '20px', fontWeight: 600 }}>Sort By</p>
              </div>
              <div className='sortBY'>
                <div>
                  <StarBorderIcon />
                </div>
                <div>
                  <p className='sortFont'>What's New</p>
                </div>
              </div>

              <div className='sortBY'>
                <div>
                  <FavoriteBorderIcon />
                </div>
                <div>
                  <p className='sortFont'>Popular</p>
                </div>
              </div>

              <div className='sortBY'>
                <div>
                  <LocalOfferIcon />
                </div>
                <div>
                  <p className='sortFont'>Discount</p>
                </div>
              </div>

              <div className='sortBY'>
                <div>
                  <ArrowUpwardIcon />
                </div>
                <div>
                  <p className='sortFont'>Price Low to High</p>
                </div>
              </div>

              <div className='sortBY'>
                <div>
                  <ArrowDownwardIcon />
                </div>
                <div>
                  <p className='sortFont'>Price High to Low</p>
                </div>
              </div>
            </div>
          </SwipeableDrawer>
        </React.Fragment>
      </div>

      <div className='filterMobile'>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
          <div style={{ display: 'flex', backgroundColor: 'white', justifyContent: 'space-around', alignItems: 'center', width: '200px', height: '50px', borderRadius: '25px', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px' }}>

            <div style={{ display: 'flex', alignItems: 'center' }} onClick={() => toggleDrawerFilter()}>
              <svg class="icon icon--filters" viewBox="0 0 16 16" fill="#26A6A6" style={{ height: '15px', width: '25px' }}>
                <path fill="" stroke="#26A6A6" d="M0 4h16M0 12h16"></path>
                <circle cx="5" cy="4" r="2" fill="rgb(var(--background))" stroke="#26A6A6" stroke-width="2"></circle>
                <circle cx="11" cy="12" r="2" fill="rgb(var(--background))" stroke="#26A6A6" stroke-width="2"></circle>
              </svg>
              <div dir="auto" style={{ fontWeight: 600 }}>
                Filter
              </div>
            </div>

            <div style={{ display: 'flex', marginTop: '5px' }} onClick={() => toggleDrawerSortBy()}>
              <div>
                <ImportExportIcon />
              </div>
              <div dir="auto" style={{ fontWeight: 600 }}>
                Sort By
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
