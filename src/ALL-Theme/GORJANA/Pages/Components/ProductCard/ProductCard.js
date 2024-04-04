import React, { useState } from "react";
import "./ProductCard.css";

const ProductCard = ({ productsData, productIndex }) => {
  const [imgFlag, setImgFlag] = useState(false);
  const [imgInx, setImgInx] = useState();

  return (
    
      <div
        style={{
          width: "24.5%",
          transition: "all 0.7s ease",
          position: "relative",
        }}
        onMouseEnter={() => {
          setImgFlag(true);
          setImgInx(productIndex);
        }}
        onMouseLeave={() => setImgFlag(false)}
      >
        <img
          src={productsData.prodImage.x}
          style={{
            width: "100%",
            objectFit: "cover",
            transition: "all 0.7s ease",
            position: "relative",
            zIndex: 0,
          }}
        />

        <img
          src={productsData.prodImage.y}
          style={{
            width: "100%",
            objectFit: "cover",
            transition: "all 0.3s ease",
            position: "absolute",
            zIndex: 1,
            opacity: imgFlag && imgInx === productIndex ? 1 : 0,
            top: "0px",
            left: "0px",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "FreightDisp Pro Medium",
            color: "#565d6d",
            fontSize: "18px",
          }}
        >
          <span>{productsData.prodTitle}</span>
          <span>{productsData.prodPrice}</span>
          <span style={{ color: "#8d9199" }}>More Option</span>
        </div>
      </div>
  );
};

export default ProductCard;
