import React from 'react'
import Header from '../home/Header/Header'
import Footer from '../home/Footer/Footer'
import BlogCard from './blogcard/BlogCard'
import './Blog.css'

const Blog = () => {

  let demoJSON =[
    {
        bloghead:'Adding to Heirlooms',
        blogdate:'16 August 2023',
        blogImg:'https://cdn.shopify.com/s/files/1/0021/8444/6052/files/Brides_2048x2048.png?v=1692171128'
    },
    {
        bloghead:'How to Buy a Lab-Grown Diamond Tennis Bracelet?',
        blogdate:'12 August 2021',
        blogImg:'https://cdn.shopify.com/s/files/1/0021/8444/6052/files/Blog_tennis_bracelets.jpg?v=1628790571'
    },
    {
        bloghead:'FIVE THINGS TO LOOK FOR WHEN PRUCHASING A LAB-CREATED DIAMOND BRACELET',
        blogdate:'25 JUNE 2021',
        blogImg:'https://cdn.shopify.com/s/files/1/0021/8444/6052/files/Blog_09310137-c95b-447c-be45-aca1bd6a01d9_2048x2048.jpg?v=1625471728'
    },
    {
        bloghead:'The Rise in Demand for Lab-Grown Diamond Wedding Rings',
        blogdate:'10 APRIL, 2021',
        blogImg:'https://cdn.shopify.com/s/files/1/0021/8444/6052/files/Engagement_Ring_Smiling_Rocks_2048x2048.jpg?v=1618025034'
    },
  ]

  return (
    <div
    style={{
        backgroundColor: "#c0bbb1",
        height: "100%",
        width: "100%",
        paddingBottom:'100px',
        paddingTop: '110px'
      }}
    >
        <div style={{textAlign:'center',margin:'60px 0px',marginBottom:'120px'}}>
            <p style={{fontSize:'40px',fontFamily: 'FreightDisp Pro Medium', color: '#fff'}}>Blog and Style Guide</p>
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',}}>
            <div className='smilingBlogMain'>
                <div>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'90px 30px 32px',flexDirection:'column'}}>
                        <p className='srblog-head' >
                            Sharing our style and looks for lab grown diamond 
                            jewelry collections! A guide for you to find 
                            different ways to stylize your wardrobe with the 
                            latest fashion trends in the lab created diamond 
                            and jewelry world.
                        </p>
                        <div className='smilingBlogMainSub' style={{display:'flex',flexDirection:"column",width:'600px'}}>
                        {
                            demoJSON.map((dj)=>(
                                <BlogCard dj={dj} />
                                ))
                        }
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
       
    </div>
  )
}

export default Blog