import React from 'react'
import Header from '../home/Header/Header'
import Footer from '../home/Footer/Footer'
import CollectionCard from '../Lookbook/CollectionCard/index'
import './index.css'

const index = () => {

  let demoJson = [
    { label: 'Flora', imgLink: 'https://smilingrocks.com/cdn/shop/files/banner_for_collection_-_flora_1500x.jpg?v=1661834765' },
    { label: 'Skyline', imgLink: 'https://smilingrocks.com/cdn/shop/files/DBvi9sHg_4bacb525-9bb0-421c-ab94-fd9c959a48d0_1500x.jpg?v=1613694191' },
    { label: 'Essentials', imgLink: 'https://smilingrocks.com/cdn/shop/files/essentials_8185a793-d9d6-47df-8470-4c44b56bad89_1500x.jpg?v=1613678997' },
    { label: 'Drizzle', imgLink: 'https://smilingrocks.com/cdn/shop/files/y08MHXBg_1500x.jpg?v=1613694191' },
    { label: 'Bubbly', imgLink: '	https://smilingrocks.com/cdn/shop/files/bubbly-bracelet-bl00418wht_1500x.jpg?v=1613679010' },
    { label: 'My Type', imgLink: 'https://smilingrocks.com/cdn/shop/files/IMG_67491_1500x.jpg?v=1613694191' },
    { label: 'Bridal', imgLink: 'https://smilingrocks.com/cdn/shop/files/IMG_6742_1500x.png?v=1613694181' },
    { label: 'Sparkle', imgLink: 'https://smilingrocks.com/cdn/shop/files/6_1500x.png?v=1613694181' },
    { label: 'Linking Love', imgLink: 'https://smilingrocks.com/cdn/shop/files/Homepage_collection_banners-2_7486a77c-1130-49dc-b5ce-b7c777c43253_1500x.jpg?v=1662716063' },
  ]

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
      <div className='smilingLookBookMain' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            flexDirection: "column",
            color: "white",
            gap: '5px',
            marginTop: '40px'
          }}
          className='mainTitlelookBook'
        >
          <p style={{ fontFamily: "FreightDisp Pro Medium", fontSize: '45px' }}>Lookbook</p>
          <p
            style={{
              fontFamily: "TT Commons, sans-serif",
              fontSize: "13.5px",
              textAlign: "center",
              width: "450px",
              letterSpacing: '1px',
            }}
            className='lookBookMainDesc'
          >
            Sonasons Guide to Style our Lab Grown Diamond Collections!
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            background: 'white',
            // maxWidth:'1690px',
            marginTop: '80px'
          }}
          className='smilingLookBookCardMain'
        >
          <div style={{ width: '100%' }}>
            <div className='smilingLookbookBoxmain' style={{ width: '100%', padding: '85px 85px 60px' }}>
              {
                demoJson.map((dj, index) => (
                  <CollectionCard label={dj.label} imgLink={dj.imgLink} index={index} />
                ))
              }
            </div>
            <hr style={{ marginTop: '-60px' }} />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index