import React, { useEffect, useRef, useState } from "react";
import "./BlogHeader.css";
import Drawer from "@mui/material/Drawer";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Divider } from "@mui/material";
import { GrMenu } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import bloglogo from '../../../../../assets/other/blog-logo.png'
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function BlogHeader() {
  const handleClose = () => setOpenDrawer(false);
  const handleShow = () => setOpenDrawer(true);
  const [openDrawer, setOpenDrawer] = useState(false);
  

  window.onscroll= function() {scrollFunction()};

  function scrollFunction() {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
      document.getElementById("headerid").style.height="75px"
      document.getElementById("top-misc").style.top="23px"
    }
    else{
      document.getElementById("headerid").style.height="90px"
      document.getElementById("top-misc").style.top="30px"
    }
  }
  const [searchValue, setSearchValue] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const navigation = useNavigate();
  const inputRef = useRef(null);


  const timer = setTimeout(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, 100); // Delay focusing for 100 milliseconds

  const toggleOverlay = () => {
    clearTimeout(timer)
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
    setShowOverlay(!showOverlay);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleEnterKeyPressed();
    }
  };

  const handleEnterKeyPressed = () => {
    navigation('/SearchResult',{
      state : {
        search : searchValue
      }
    })
  };
  return (
    <div >
      {showOverlay && (
        <>
          <div className="overlay" onClick={toggleOverlay}>
            <div className="searchClose">
              <IoClose style={{ height: '50px', width: '50px' }} />
            </div>
            <input spellcheck="false" onChange={(event) => setSearchValue(event.target.value)} onKeyPress={handleKeyPress} ref={inputRef} className="serachOverly" placeholder="Search the site..."></input>
          </div>
        </>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "90px",
          boxShadow: "0 0 28px rgba(0,0,0,.07)",
          alignItems: "center",
          position: 'fixed',
          width: '100%',
          backgroundColor: 'white',
          zIndex: 1,
          transition:'.25s ease'
        }}
        id='headerid'
      >

        <div>
          {/* <button className="menu-toggle" onClick={handleShow}></button> */}
          <GrMenu onClick={handleShow} className="grMenu"/>
        </div>
        <div>
          <img
            src={bloglogo}
            alt="ORNAZ Blog"
            style={{ maxHeight: "60px",marginRight:'70px'}}
          />
        </div>
        <div>
          <div className="top-misc" id="top-misc">
            <div className="header-social" style={{ height: "auto" }}>
              <a
                href="https://www.facebook.com/ornazjewels/"
                className="facebook"
                target="_blank"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/ORNAZ_com"
                className="twitter"
                target="_blank"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/ornaz_com/"
                className="instagram"
                target="_blank"
              >
                <FaInstagram />
              </a>
            </div>
            <Divider
              orientation="vertical"
              flexItem
              style={{ margin: "0px 15px 0px 15px", backgroundColor: "black" }}
              className="divider-header"
            />
            <div className="header-search-wrap" onClick={toggleOverlay}>
              <a href="#search" className="toggle-search-box">
                <FaSearch />
              </a>
            </div>
          </div>
        </div>
      </div>


      <Drawer
        open={openDrawer}
      // onClose={() => handleClose(false)}
      >
        <div>

          <div style={{ width: "350px", display: 'flex', justifyContent: 'space-between', padding: '30px' }}>
            <img
              src="https://www.ornaz.com/blog/wp-content/uploads/2020/05/10XX5.png"
              style={{ height: "110px", width: "200px" }}
            />
            <IoMdClose style={{ height: '30px', width: '30px', cursor: 'pointer' }} onClick={() => handleClose(false)} />
          </div>

          <div style={{ cursor: 'pointer', marginTop: '10px', marginInline: '20px', paddingLeft: '20px', borderBottom: '1px solid #e8e8e8' }}>
            <p style={{ margin: '0px 0px 8px -20px', fontSize: '13px', }}>HOME</p>
          </div>
          <div style={{ cursor: 'pointer', marginTop: '10px', marginInline: '20px', paddingLeft: '20px', borderBottom: '1px solid #e8e8e8' }}>
            <p style={{ margin: '0px 0px 8px -20px', fontSize: '13px' }}>DIAMOND EDUCATION</p>
          </div>
          <div style={{ cursor: 'pointer', marginTop: '10px', marginInline: '20px', fontSize: '15px', paddingLeft: '20px', borderBottom: '1px solid #e8e8e8' }}>
            <p style={{ margin: '0px 0px 8px -20px', fontSize: '13px' }}>ENGAGEMENT RINGS</p>
          </div>
          <div style={{ cursor: 'pointer', marginTop: '10px', marginInline: '20px', fontSize: '15px', paddingLeft: '20px', borderBottom: '1px solid #e8e8e8' }}>
            <p style={{ margin: '0px 0px 8px -20px', fontSize: '13px' }}>COVID 19</p>
          </div>
          <div style={{ cursor: 'pointer', marginTop: '10px', marginInline: '20px', fontSize: '15px', paddingLeft: '20px', borderBottom: '1px solid #e8e8e8' }}>
            <p style={{ margin: '0px 0px 8px -20px', fontSize: '13px' }}>PROPOSALS</p>
          </div>
          <div style={{ cursor: 'pointer', marginTop: '10px', marginInline: '20px', fontSize: '15px', paddingLeft: '20px', borderBottom: '1px solid #e8e8e8' }}>
            <p style={{ margin: '0px 0px 8px -20px', fontSize: '13px' }}>ETERNITY BANDS</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '50px', marginInline: '20px' }}>
            <div>
              <FaFacebookF style={{ margin: '7px', cursor: 'pointer' }} />
              <FaTwitter style={{ margin: '7px', cursor: 'pointer' }} />
              <FaInstagram style={{ margin: '7px', cursor: 'pointer' }} />
            </div>
            <div>
              <FaSearch style={{ cursor: 'pointer' }} />
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
