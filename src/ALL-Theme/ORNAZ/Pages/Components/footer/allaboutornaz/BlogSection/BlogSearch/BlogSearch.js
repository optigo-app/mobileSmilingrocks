import React from 'react'
import './blogsearch.css'
import { FaSearch } from "react-icons/fa";

import { Widget } from './utils/common';

const BlogSearch = () => {
  return (
    <>
      <div
        className='search-container'
      >
        <input
          placeholder="Search The Site..."
          className='search-input'
        />
        <FaSearch className='faicon'/>
      </div>

      <div className='widget-container'>
        {Widget(1)}
        {Widget(2)}
        {Widget(3)}
      </div>
    </>
  );
}

export default BlogSearch