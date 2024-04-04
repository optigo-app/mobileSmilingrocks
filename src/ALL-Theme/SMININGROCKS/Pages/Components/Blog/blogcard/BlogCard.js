import React from 'react'
import './blogcard.css'

const BlogCard = ({ dj }) => {

  const { bloghead, blogdate, blogImg } = dj;

  return (
    <div className='smilingBlogImageBoxMain' style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', marginBottom: '80px' }}>
      <p style={{ fontSize: '42px', fontFamily: 'FreightDisp Pro Medium', color: '#7f7d85', cursor: 'pointer' }} className='bloghead'>
        {bloghead}
      </p>
      <p style={{ color: '#7f7d85', marginTop: '15px' }} >
        {blogdate}
      </p>
      <div className='smilingBlogImageMain'>
        <img src={blogImg} alt={''} className='smilingBlogImage' />
      </div>
    </div>
  )
}

export default BlogCard