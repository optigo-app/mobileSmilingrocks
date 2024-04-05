// BottomTabNavigation.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

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

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div style={styles.container}>
      <NavLink to="/" style={styles.tab} activeClassName="active" onClick={() => handleTabChange("/")}>
        <FaHome style={activeTab === "/" ? styles.activeIcon : styles.icon} />
        <span style={activeTab === "/" ? styles.activeText : styles.text}>Home</span>
      </NavLink>
      <NavLink to="/Category" style={styles.tab} activeClassName="active" onClick={() => handleTabChange("/aboutUs")}>
        <TbCategoryFilled style={activeTab === "/Category" ? styles.activeIcon : styles.icon} />
        <span style={activeTab === "/Category" ? styles.activeText : styles.text}>Category</span>
      </NavLink>
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

export default HomeTab;
