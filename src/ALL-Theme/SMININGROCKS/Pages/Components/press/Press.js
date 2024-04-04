import React from 'react'
import Header from '../home/Header/Header'
import Card from './pressCard/Card'
import Footer from '../home/Footer/Footer'
import './press.css'

const Press = () => {

  let demoJSON = [
    {
      id: 1,
      newsimg: 'https://smilingrocks.com/cdn/shop/articles/Professional_Jeweller_Logo_ce3c0bbb-8ec3-4cc1-84b4-2c59fb15dad2_medium.png?v=1698980799',
      newsdesc: 'SPECIAL REPORT: How can businesses continue to work in ethical ways?',
      newsdate: 'NOVEMBER 02, 2023'
    },
    {
      id: 2,
      newsimg: 'https://smilingrocks.com/cdn/shop/articles/Forbes_Logo_39a2f15a-5877-4984-9639-ece66cf12be8_medium.png?v=1685956538',
      newsdesc: 'JCK 2023 Presents Global Jewelry Showcase And Sets New Standards In Designer Diversity, Equity And Inclusion',
      newsdate: 'JUNE 05, 2023'
    },
    {
      id: 3,
      newsimg: 'https://smilingrocks.com/cdn/shop/articles/Engagement_101_Logo_medium.png?v=1685414625',
      newsdesc: '101 Engagement Magazine Coverage',
      newsdate: 'MAY 29, 2023'
    },
    {
      id: 4,
      newsimg: 'https://smilingrocks.com/cdn/shop/articles/Daily_Mail_Logo_medium.jpg?v=1683254261',
      newsdesc: `A girl's new best friend! One in three couples shuns natural diamonds in favor of lab-grown stones for their engagement ring - but can you tell the difference?`,
      newsdate: 'MAY 04, 2023'
    },
  ]

  let CardData = []
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < demoJSON.length; j++) {
      CardData.push(demoJSON[j]);
    }
  }

  CardData.push(demoJSON[1], demoJSON[2])

  return (
    <div
      style={{
        backgroundColor: "#c0bbb1",
        height: "100%",
        width: "100%",
        paddingBottom: '100px',
        paddingTop: '110px'
      }}
    >
      <div className='smilingPressTopTitle' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '100px' }}>
        <p style={{ textTransform: 'uppercase', color: 'white', fontSize: '14px', fontWeight: '500' }}>press</p>
        <p style={{ textTransform: 'capitalize',textAlign:'center', color: 'white', fontSize: '40px', fontFamily: "FreightDisp Pro Medium", marginBottom: '120px' }}className='smilingPressTopTitleSub' >Sonasons in the News</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ maxWidth: '1680px', backgroundColor: 'white' }} className='smilingPressBoxMain'>
          <img src={'https://smilingrocks.com/cdn/shop/files/Press_page_1512x.jpg?v=1614293076'} alt={''} style={{ objectFit: 'cover', height: '882.59px', width: '100%' }} className='smilingPressTopImage'/>
          <div className='smilingPressMainSub' style={{ display: 'flex', flexWrap: 'wrap', padding: '0 85px', marginTop: '-70px', }}>
            {
              CardData.map((ci) => (
                <Card newsimg={ci.newsimg} newsdesc={ci.newsdesc} newsdate={ci.newsdate} />
              ))
            }
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Press