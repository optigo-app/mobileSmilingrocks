import React from 'react'
import BlogHeader from './header/BlogHeader'
import Blog from './Blog/Blog'
import Footer from './blogFooter/Footer'

export default function BlogSection() {
  return (
    <div>
      <div style={{position:"sticky",zIndex:1}}>
        <BlogHeader />
      </div>
      <div style={{position:'relative'}}>
        <Blog/>
        <Footer/>
      </div>

    </div>
  )
}
