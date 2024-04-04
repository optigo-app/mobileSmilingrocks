import React from 'react'
import './Card.css'
import zIndex from '@mui/material/styles/zIndex';

const Card = ({newsimg,newsdesc,newsdate}) => {
  return (
    <div
      style={{
        width: "25%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        padding: "90px 29px 50px",
        border: "1px solid #e1e1e1",
        zIndex:1,
        backgroundColor:'white'
        // position:'absolute'
      }}
      className='smilingPressCardMain'
    >
      <div>
        <img
          src={newsimg}
          alt={""}
          style={{ height: "50px", width: "317.5px", objectFit: "contain",marginBottom:'15px'}}
        />
      </div>
      <div className='smilingPresBoxDesc' style={{ textAlign: "center",width:'302px'}}>
        <p style={{fontSize:'18px',color:'#7d7f85',fontWeight:'500'}}>{newsdesc}</p>
      </div>
      <div>
        <p style={{fontSize:'13px',color:'#7d7f85'}}>{newsdate}</p>
      </div>
      <div>
        <button className="collBtn">read more</button>
      </div>
    </div>
  );
}

export default Card