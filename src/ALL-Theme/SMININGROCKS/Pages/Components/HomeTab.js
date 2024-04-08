// BottomTabNavigation.js
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { FaHome, FaUser, FaEnvelope } from 'react-icons/fa';
import { FaShoppingCart } from "react-icons/fa";
import { TbCategoryFilled } from "react-icons/tb";
import { useRecoilValue } from 'recoil';
import { CartListCounts, loginState } from '../../../../Recoil/atom';
import { Badge, Tooltip } from '@mui/material';

const HomeTab = () => {
  const [activeTab, setActiveTab] = useState("/");
  const getCartListCount = useRecoilValue(CartListCounts)
  const islogin = useRecoilValue(loginState);
  const location = useLocation();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      {location.pathname == '/productdetail' ?
        <>
          <button
            style={{
              position:'fixed',
              bottom:0,
              height:'8vh',
              width:'100%',
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor:'#f0f0f0',
              color: '#7D7f85',
              border:'none',
              cursor: 'pointer',
              fontWeight:'bold',
              boxShadow:'rgba(0, 0, 0, 0.16) 0px 1px 4px',
              transition: 'background-color 0.3s',
            }}
          >
            Add to cart
          </button>
        </>
        :
        <div style={styles.container}>
          <NavLink to="/" style={styles.tab} activeClassName="active" onClick={() => handleTabChange("/")}>
            <FaHome style={activeTab === "/" ? styles.activeIcon : styles.icon} />
            <span style={activeTab === "/" ? styles.activeText : styles.text}>Home</span>
          </NavLink>
          <NavLink to="/Category" style={styles.tab} activeClassName="active" onClick={() => handleTabChange("/aboutUs")}>
            <TbCategoryFilled style={activeTab === "/Category" ? styles.activeIcon : styles.icon} />
            <span style={activeTab === "/Category" ? styles.activeText : styles.text}>Category</span>
          </NavLink>
    
      {islogin === 'true' ?
        <NavLink to="/CartPage" style={styles.tab} activeClassName="active" onClick={() => handleTabChange("/CartPage")}>
              <Badge
                badgeContent={getCartListCount}
                overlap={"rectangular"}
                color="secondary"
                style={{ marginInline: '10px' }}
              >
                <Tooltip title="Cart">
                  <FaShoppingCart style={activeTab === "/CartPage" ? styles.activeIcon : styles.icon} />
                </Tooltip>
              </Badge>
              <span style={activeTab === "/CartPage" ? styles.activeText : styles.text}>Cart</span>
            </NavLink>
        :
        <NavLink to="/WithoutLoginCart" style={styles.tab} activeClassName="active" onClick={() => handleTabChange("/WithoutLoginCart")}>
          <Badge
            badgeContent={getCartListCount}
            overlap={"rectangular"}
            color="secondary"
            style={{ marginInline: '10px' }}
          >
            <Tooltip title="Cart">
              <FaShoppingCart style={activeTab === "/WithoutLoginCart" ? styles.activeIcon : styles.icon} />
            </Tooltip>
          </Badge>
          <span style={activeTab === "/WithoutLoginCart" ? styles.activeText : styles.text}>Cart</span>
        </NavLink>}


          {islogin === 'true' ?
            <NavLink to="/account" style={styles.tab} activeClassName="active" onClick={() => handleTabChange("/account")}>
              <FaUser style={activeTab === "/account" ? styles.activeIcon : styles.icon} />
              <span style={activeTab === "/account" ? styles.activeText : styles.text}>Account</span>
            </NavLink>
            : <NavLink to="/LoginOption" style={styles.tab} activeClassName="active" onClick={() => handleTabChange("/LoginOption")}>
              <FaUser style={activeTab === "/LoginOption" ? styles.activeIcon : styles.icon} />
              <span style={activeTab === "/LoginOption" ? styles.activeText : styles.text}>Login</span>
            </NavLink>}
        </div>
      }
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: '#f0f0f0',
    height: '60px',
    borderTop: '1px solid #ccc',
  },
  tab: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    flex: 1,
    color: '#666',
  },
  icon: {
    marginBottom: '5px',
    fontSize: '20px',
  },
  activeIcon: {
    color: '#0000ff78',
    fontSize: '20px',
  },
  text: {
    fontSize: '12px',
  },
  activeText: {
    color: '#0000ff78',
    fontWeight: 'bold',
    fontSize: '14px'
  },
};
const buttonStyles = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '12px 20px',
  fontSize: '16px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'background-color 0.3s'
};
const buttonHoverStyles = {
  backgroundColor: '#45a049'
};
const buttonResponsiveStyles = {
  padding: '10px 15px',
  fontSize: '14px'
};

export default HomeTab;
