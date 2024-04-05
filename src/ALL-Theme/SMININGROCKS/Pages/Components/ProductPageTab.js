import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsFilterLeft } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";

const ProductPageTab = () => {
  const [activeTab, setActiveTab] = useState("/");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div style={styles.container}>
      <NavLink to="/" style={styles.tab} activeClassName="active" onClick={() => handleTabChange("/")}>
        <FaFilter style={activeTab === "/" ? styles.activeIcon : styles.icon} />
        <span style={activeTab === "/" ? styles.activeText : styles.text}>Filter</span>
      </NavLink>
      <NavLink to="/aboutUs" style={styles.tab} activeClassName="active" onClick={() => handleTabChange("/aboutUs")}>
        <BsFilterLeft style={activeTab === "/aboutUs" ? styles.activeIcon : styles.icon} />
        <span style={activeTab === "/aboutUs" ? styles.activeText : styles.text}>Short By</span>
      </NavLink>
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

export default ProductPageTab;
