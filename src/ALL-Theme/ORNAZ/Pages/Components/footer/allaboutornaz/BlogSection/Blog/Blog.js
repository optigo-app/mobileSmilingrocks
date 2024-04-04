import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg1 from '../../../../../assets/blog-banner/blog-slider-big-1.jpg'
import bg2 from '../../../../../assets/blog-banner/blog-slider-big-2.jpeg'
import bg3 from '../../../../../assets/blog-banner/blog-slider-big-3.jpg'
import './blog.css'
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { TfiArrowCircleRight } from "react-icons/tfi";
import ArticalCards from '../articalCards/ArticalCards';
import { Divider, Pagination, PaginationItem } from '@mui/material'
import BlogSearch from '../BlogSearch/BlogSearch';
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';


export default function Blog() {

  const [divFlag, setDivFlag] = useState(false);
  const navigation = useNavigate();


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        className="carousels-div"
        onMouseEnter={() => setDivFlag(true)}
        onMouseLeave={() => setDivFlag(false)}
      // onClick={() => navigation('/ArticleDetailPage')}
      >
        <Carousel
          fade
          indicators={false}
          prevIcon={
            divFlag ? (
              <TfiArrowCircleLeft
                style={{ color: "#ffffff", fontSize: "30px" }}
              />
            ) : (
              ""
            )
          }
          nextIcon={
            divFlag ? (
              <TfiArrowCircleRight
                style={{ color: "#ffffff", fontSize: "30px" }}
              />
            ) : (
              ""
            )
          }

        >
          <Carousel.Item style={{ zIndex: -1, position: 'relative' }}>
            <img src={bg1} alt="First slide" className="slick-img " />
            <Carousel.Caption className="slick-caption">
              <div className="slick-cap-div">
                <div className='slick-cap-inner-div'>
                  <p className="post-cats">
                    DIAMOND EDUCATION / ENGAGEMENT RINGS / GUIDE
                  </p>
                  <p className="entry-title">
                    How To Protect Your Engagement Ring During Winters
                  </p>
                  <p className="date-wrap">OCTOBER 13, 2023</p>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item >

          <Carousel.Item style={{ zIndex: -1, position: 'relative' }}>
            <img src={bg2} alt="First slide" className="slick-img" />
            <Carousel.Caption className="slick-caption">
              <div className="slick-cap-div unique-class">
                <div className='slick-cap-inner-div'>
                  <p className="post-cats">ENGAGEMENT RINGS</p>
                  <p className="entry-title">
                    Upgrade Your Ring Game This Diwali Sale!
                  </p>
                  <p className="date-wrap">NOVEMBER 3, 2023</p>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item style={{ zIndex: -1, position: 'relative' }}>
            <img src={bg3} alt="First slide" className="slick-img" />
            <Carousel.Caption className="slick-caption">
              <div className="slick-cap-div">
                <div className='slick-cap-inner-div'>
                  <p className="post-cats">Engagement Rings</p>
                  <p className="entry-title">
                    The Perfect Engagement Ring For Your Zodiac Sign
                  </p>
                  <p className="date-wrap">October 9, 2023</p>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='bcards-title-container'>
        <div className='bcards-tinner-container'>
          <div className='btc-1'>
            <div style={{ display: 'flex', alignItems: 'center',marginBlock: '30px',marginInline: '5px' }}>
              <Divider orientation="horizontal" style={{ background: 'gray', height: '1px', width: '35%' }}/>
              <p style={{ margin: '0px', fontSize: '18px', width: '25%', textAlign: 'center', marginInline: '15px', fontWeight: 500 }}>LATEST ARTICLES</p>
              <Divider orientation="horizontal" style={{ background: 'gray', height: '1px', width: '33%' }}/>
            </div>
            <div
              className='bcards-div'
            >
              <ArticalCards />
              <ArticalCards />
              <ArticalCards />
              <ArticalCards />
              <ArticalCards />
              <ArticalCards />
              <ArticalCards />
              <ArticalCards />
              <ArticalCards />
              <ArticalCards />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "70px",
              }}
            >
              <Pagination
                count={10}
                renderItem={(item) => (
                  <PaginationItem
                    sx={{
                      "&.Mui-selected": {
                        backgroundColor: '#f7eee9',
                        color: '#000000'
                      }
                    }}
                    slots={{
                      previous: () => {
                        return (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "9px",
                              fontSize: "14px",
                              fontFamily: "Montserrat, sans-serif",
                            }}
                          >
                            <HiOutlineArrowLongLeft />{" "}
                            <p style={{ marginTop: "15px", letterSpacing: '2px' }}>PREV</p>
                          </div>
                        );
                      },
                      next: () => {
                        return (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "9px",
                              fontSize: "14px",
                              fontFamily: "Montserrat, sans-serif",
                            }}
                          >
                            <p style={{ marginTop: "15px", letterSpacing: '2px' }}>NEXT</p>
                            <HiOutlineArrowLongRight />
                          </div>
                        );
                      },
                    }}
                    {...item}
                  />
                )}
              />
            </div>
          </div>
          <div className='btc-2'>
            <BlogSearch />
          </div>
        </div>
      </div>
    </div>
  );
}
