import React, { useEffect } from 'react'
import Header from '../../../home/Header/Header'
import Footer from '../..'
import banner from '../../../../assets/celebs takeover/c_t_b.jpg'
import hk1 from '../../../../assets/celebs takeover/hk1.jpg'
import hk2 from '../../../../assets/celebs takeover/hk2.jpg'
import hk3 from '../../../../assets/celebs takeover/hk3.jpg'
import nk1 from '../../../../assets/celebs takeover/nk1.jpg'
import nk2 from '../../../../assets/celebs takeover/nk2.jpg'
import nk3 from '../../../../assets/celebs takeover/nk3.jpg'
import km1 from '../../../../assets/celebs takeover/km1.jpg'
import km2 from '../../../../assets/celebs takeover/km2.jpg'
import km3 from '../../../../assets/celebs takeover/hk3.jpg'
import './celebtakeover.css'

export default function CelebTakeOver() {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[])

  return (
    <div>
      <Header />
      <img src={banner} alt={"..."} style={{ width: "100%" }} />
      <div style={{ display: "flex", justifyContent: "center",marginTop:'12px' }}>
        <span className="text-cto"> Celebrity Takeover </span>
      </div>
      <div  style={{marginTop:'25px',marginBottom:"50px"}}>
        <div style={{ display: "felx",justifyContent:'center' }}>
          <span style={{display:'flex',justifyContent:'center',fontSize:'24px',fontWeight:600,margin:'18px 0px 10px 0px'}}>ORNAZ X HIMANSHI KHURANA</span>
          <div style={{display:'flex',justifyContent:'center',gap:'12px'}}>
            <img src={hk1} style={{border:"1px solid #00000020",borderRadius:"4px"}}/>
            <img src={hk2} style={{border:"1px solid #00000020",borderRadius:"4px"}}/>
            <img src={hk3} style={{border:"1px solid #00000020",borderRadius:"4px"}}/>
          </div>
        </div>
        <div style={{ display: "felx",justifyContent:'center' }}>
          <span style={{display:'flex',justifyContent:'center',fontSize:'24px',fontWeight:600,margin:'45px 0px 10px 0px'}}>ORNAZ X HIMANSHI KHURANA</span>
          <div style={{display:'flex',justifyContent:'center',gap:'12px'}}>
            <img src={nk1} style={{border:"1px solid #00000020",borderRadius:"4px"}}/>
            <img src={nk2} style={{border:"1px solid #00000020",borderRadius:"4px"}}/>
            <img src={nk3} style={{border:"1px solid #00000020",borderRadius:"4px"}}/>
          </div>
        </div>
        <div style={{ display: "felx",justifyContent:'center' }}>
          <span style={{display:'flex',justifyContent:'center',fontSize:'24px',fontWeight:600,margin:'45px 0px 10px 0px'}}>ORNAZ X HIMANSHI KHURANA</span>
          <div style={{display:'flex',justifyContent:'center',gap:'12px'}}>
            <img src={km1} style={{border:"1px solid #00000020",borderRadius:"4px"}}/>
            <img src={km2} style={{border:"1px solid #00000020",borderRadius:"4px"}}/>
            <img src={km3} style={{border:"1px solid #00000020",borderRadius:"4px"}}/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
