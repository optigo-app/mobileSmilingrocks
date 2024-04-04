import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './ProductList.css'
import filterIcon from '../../assets/filter.svg';
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, Drawer, FormControlLabel, Typography } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ProductList = ({PageType}) => {

    const [filterFlag,setFilterFlag]=useState(false);

    const [pageData,setPageData]=useState({})
    const [pageTitle,setPageTitle]=useState('')



    const productsList=[
        {
            prodImage:{
                x:'https://cdn.shopify.com/s/files/1/0015/3849/0427/files/RE-1811-202-G_1_641d250d-bdec-4856-9232-5c453e35e89c.jpg',
                y:'https://cdn.shopify.com/s/files/1/0015/3849/0427/products/RE-1811-202-G_3.jpg'
            }  ,
            prodTitle:'Bespoke Plate Adjustable Bracelet (gold)',
            prodPrice:'$75',
        },
        {
            prodImage:{
                x:'https://cdn.shopify.com/s/files/1/0015/3849/0427/files/RE-1811-202-G_1_641d250d-bdec-4856-9232-5c453e35e89c.jpg',
                y:'https://cdn.shopify.com/s/files/1/0015/3849/0427/products/RE-1811-202-G_3.jpg'
            }  ,
            prodTitle:'Bespoke Plate Adjustable Bracelet (gold)',
            prodPrice:'$75',
        },
        {
            prodImage:{
                x:'https://cdn.shopify.com/s/files/1/0015/3849/0427/files/RE-1811-202-G_1_641d250d-bdec-4856-9232-5c453e35e89c.jpg',
                y:'https://cdn.shopify.com/s/files/1/0015/3849/0427/products/RE-1811-202-G_3.jpg'
            }  ,
            prodTitle:'Bespoke Plate Adjustable Bracelet (gold)',
            prodPrice:'$75',
        },
        {
            prodImage:{
                x:'https://cdn.shopify.com/s/files/1/0015/3849/0427/files/RE-1811-202-G_1_641d250d-bdec-4856-9232-5c453e35e89c.jpg',
                y:'https://cdn.shopify.com/s/files/1/0015/3849/0427/products/RE-1811-202-G_3.jpg'
            }  ,
            prodTitle:'Bespoke Plate Adjustable Bracelet (gold)',
            prodPrice:'$75',
        },
        {
            prodImage:{
                x:'https://cdn.shopify.com/s/files/1/0015/3849/0427/files/RE-1811-202-G_1_641d250d-bdec-4856-9232-5c453e35e89c.jpg',
                y:'https://cdn.shopify.com/s/files/1/0015/3849/0427/products/RE-1811-202-G_3.jpg'
            }  ,
            prodTitle:'Bespoke Plate Adjustable Bracelet (gold)',
            prodPrice:'$75',
        },
        {
            prodImage:{
                x:'https://cdn.shopify.com/s/files/1/0015/3849/0427/files/RE-1811-202-G_1_641d250d-bdec-4856-9232-5c453e35e89c.jpg',
                y:'https://cdn.shopify.com/s/files/1/0015/3849/0427/products/RE-1811-202-G_3.jpg'
            }  ,
            prodTitle:'Bespoke Plate Adjustable Bracelet (gold)',
            prodPrice:'$75',
        },
        {
            prodImage:{
                x:'https://cdn.shopify.com/s/files/1/0015/3849/0427/files/RE-1811-202-G_1_641d250d-bdec-4856-9232-5c453e35e89c.jpg',
                y:'https://cdn.shopify.com/s/files/1/0015/3849/0427/products/RE-1811-202-G_3.jpg'
            }  ,
            prodTitle:'Bespoke Plate Adjustable Bracelet (gold)',
            prodPrice:'$75',
        },
        {
            prodImage:{
                x:'https://cdn.shopify.com/s/files/1/0015/3849/0427/files/RE-1811-202-G_1_641d250d-bdec-4856-9232-5c453e35e89c.jpg',
                y:'https://cdn.shopify.com/s/files/1/0015/3849/0427/products/RE-1811-202-G_3.jpg'
            }  ,
            prodTitle:'Bespoke Plate Adjustable Bracelet (gold)',
            prodPrice:'$75',
        },
    ]

    const prodCateList=[
        {
            cateTitle:'Necklaces',
            cateImages:'https://www.gorjana.com/cdn/shop/collections/Collection-Banner_Necklaces_1.jpg',
        },
        {
            cateTitle:'Earrings',
            cateImages:'https://www.gorjana.com/cdn/shop/collections/Earrings.jpg',
        },
        {
            cateTitle:'Bracelets',
            cateImages:'https://www.gorjana.com/cdn/shop/collections/Collection-Banner_Bracelets_1.jpg',
        },
        {
            cateTitle:'Rings',
            cateImages:'https://www.gorjana.com/cdn/shop/collections/Collection-Banner_Rings_1.jpg',
        },
        {
            cateTitle:'Charms',
            cateImages:'https://www.gorjana.com/cdn/shop/collections/charms.jpg',
        },
        {
            cateTitle:'The Fine Collection',
            cateImages:'https://www.gorjana.com/cdn/shop/collections/FineJewelry.jpg',
        },
    ]

    const FilterCateList=[
        {
            title:'Category',
            cates:[
                {label:'Necklaces'},
                {label:'Earrings'},
                {label:'Rings'},
                {label:'Bracelets'},
                {label:'Charms'},
            ],
        },
        {
            title:'Metal',
            cates:[
                {label:'Gold plated'},
                {label:'silver plated'},
                {label:'Rose Gold plated'},
            ],
        },
    ]

    
    useEffect(()=>{
        switch (PageType) {
            case 'jewelry':
                setPageData({productsList,prodCateList,FilterCateList})
                setPageTitle('Shop All')
                return;
        
            default:
                setPageData({productsList:[],prodCateList:[],FilterCateList:[]})
                return;
                
        }
    },[PageType])
    
  return (
    <>
      <div style={{ filter: filterFlag && "blur(10px)",backgroundColor: filterFlag && '#f6efe680'}}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <span className="gj_pagetitle">{pageTitle}</span>
        </div>
        <div className="gj_collection_container">
          {pageData.prodCateList?.map((pcl) => (
            <div className="gj_pcl_container">
              <img className="gj_pcl_img" src={pcl.cateImages} alt={""} />
              <span className="gj_pcl_title">{pcl.cateTitle}</span>
            </div>
          ))}
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "30px 0px",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              fontFamily: "Montserrat, sans-serif",
              display: "flex",
              width: "200px",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{ display: "flex", gap: "5px" }}
              onClick={() => setFilterFlag(true)}
            >
              <img src={filterIcon} style={{ width: "24px" }} />
              <span>Filter</span>
            </span>
            <span>251 products</span>
          </div>
          <div>
            {" "}
            sort By:
            <select
              style={{ border: "none", outline: "none", fontWeight: "500" }}
            >
              <option>Sort</option>
              <option>Best Sellers</option>
              <option>Top Match</option>
              <option>New Arrivals</option>
              <option>Price:Low to High</option>
              <option>Price:High to Low</option>
            </select>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          {pageData.productsList?.map((pl, i) => (
            <ProductCard productsData={pl} productIndex={i} />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "40px 0px",
          }}
        >
          <button
            style={{
              background: "none",
              border: "1px solid #283045",
              padding: "10px 25px",
            }}
            className='backToTopBtn'
          >
            BACK TO TOP
          </button>
        </div>
        <div style={{ display: "flex", gap: "80px", justifyContent: "center" }}>
          <div>Previous</div>
          <div>1 of 4</div>
          <div>Next</div>
        </div>
      </div>
      <Drawer
        open={filterFlag}
        onClose={() => {
          setFilterFlag(false);
        }}
        elevation={3}
        sx={{
          "& .MuiBackdrop-root": { backgroundColor: "transparent" },
          zIndex: 1,
        }}
      >
        <div style={{ marginTop: "144px", width: "375px" }}>
          <div style={{ padding: "24px 32px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "32px",
                  fontFamily: "FreightDisp Pro Medium",
                }}
              >
                Filter
              </span>
              <span>
                <CloseRoundedIcon
                  style={{ fontSize: "32px" }}
                  onClick={() => {
                    setFilterFlag(false);
                  }}
                />
              </span>
            </div>
            </div>
          <div style={{ padding: "24px 32px",marginBottom:'70px'}}>
            {pageData.FilterCateList?.map((fcl) => (
              <Accordion
                disableGutters={true}
                elevation={0}
                sx={{ position: "static" }}
                defaultExpanded={true}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{ padding: 0}}
                >
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontFamily: "FreightDisp Pro Medium",
                    }}
                  >
                    {fcl.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{display:'flex',flexDirection:'column'}}>
                    {fcl.cates?.map((fclCates)=>(
                        <FormControlLabel
                                label={fclCates.label}
                                control={
                                <Checkbox disableRipple={true} defaultChecked={false} color="default" />
                            }
                        />
                    ))}
                
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
          <div className='filter_btn_div'>
            <button className='gjbtn gjclear'>
                CLEAR ALL
            </button>
            <button className='gjbtn gjresults'>
                SHOW 251 RESULTS
            </button>
          </div>
        </div>
       
      </Drawer>
    </>
  );
}

export default ProductList