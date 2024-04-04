import React, { useRef } from "react";
import "./Cards.css";
import { useDraggable } from "react-use-draggable-scroll";

export const Cards = ({ sallerCardImg, cardTitle, type }) => {

  const ref = useRef();
  const { events } = useDraggable(ref);

  const CardData = () => {
    if (sallerCardImg) {
      return sallerCardImg;
    } else {
      return [];
    }
  };

  const imgClassName = () => {
    if (type === 'celebs') {
      return 'cards-img-celebs';
    }
    else if (type === 'category') {
      return 'cards-img-cat';
    }
    else {
      return "cards-img"
    }
  }

  const cardInnerClassName = () => {
    if (type === 'category') {
      return 'card-inner-container-cate';
    }
    else {
      return 'card-inner-container';
    }
  }

  const imgContainer = () => {
    if (type === 'celebs') {
      return 'img-container-celebs';
    }
    else if (type === 'category') {
      return 'img-container-catogery';
    }
    else {
      return 'img-container';
    }
  }

 

  // const cardsImgTextContainer = () =>{
  //   if(type==='seller'){
  //     return 'cards-img-text-container seller'
  //   }
  //   else{
  //     return 'cards-img-text-container';
  //   }
  // }

  return (
    <div>
        <div
          style={{ height: "auto", marginTop: type === 'celebs' ? '65px' : '80px' }}
        >
          <div className="card-outer-container" >
            <div className="card-header">
              <span className="card-title-text">{cardTitle}</span>
              {(type !== 'celebs' && type !== 'banner') && <span className="card-shopall" style={{ marginRight: type === 'category' ? '10px' : '' }}>Shop All</span>}
            </div>
            <div className='cards-img-text-container' id='scrollable' {...events} ref={ref}>
              {CardData()?.map((data) => (
                <div className={cardInnerClassName()} >
                  <div className={imgContainer()}>
                    <img
                      src={data.prodImg}
                      alt="..."
                      className={imgClassName()}
                    />
                  </div>

                  <div className="card-footer" style={{ marginTop: '10px', fontWeight: '500', fontSize: '14.3px', position: 'relative', zIndex: 1 }}>
                    <font>{data.prodtitle}</font>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>

  );
};
