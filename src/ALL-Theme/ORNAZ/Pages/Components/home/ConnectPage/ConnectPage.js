import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './connect.css';
import connect from '../../../assets/other/connect.webp'
import respConnect from '../../../assets/responsive Images/resp_connect.webp'

export default function ConnectPage() {

  const navigation = useNavigate();


  const imagesAlternate = () =>{
    if(window.innerWidth<=800){
        return respConnect
    }
    else{
      return connect
    }
  }
  useEffect(() => {
    const handleResize = () => {
      imagesAlternate();
    };
  
    // Attach the event listener when the component mounts
    window.addEventListener('resize', handleResize);
  
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className='main-connect-container' onClick={() => navigation("/jewelleryPage")} >
      <div
        className="slick-main-container"
      >
        <img
          src={imagesAlternate()}
          className='connect-img'
          style={{  width: "1560.47px"}}
        />
      </div>
    </div>
  );
}
