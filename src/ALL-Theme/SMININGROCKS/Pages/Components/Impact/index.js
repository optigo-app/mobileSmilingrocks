import React from "react";
import "./index.css";
import i1 from "../../assets/Impact/campaign/banner.webp";
import Campaign from "./campaign/Campaign";
import Header from "../home/Header/Header";
import Explore from "./Explore/Explore";

const index = () => {
  return (
    <>
      <div style={{ paddingTop: '110px' }}>
        <div className="back-img-container">
          <img
            src={
              "https://wallpapers.com/images/featured/tree-background-xgzu0ujdd4khh95j.jpg"
            }
            alt="..."
            className="impact-container"
          />
          <div className="impact-container2"></div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // marginTop: "-55px",
            flexDirection: "column",
            maxWidth: "1680px",
            marginRight: "auto",
            marginLeft: "auto",
          }}
          className="main-front-container"
        >
          <img src="https://www.highspeedtraining.co.uk/hub/wp-content/uploads/2021/07/Class-planting-plants-1.jpg" alt="..." style={{width:'100%'}} />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              color: "white",
              padding: "110px 0 105px",
            }}
            className="quotes-div1"
          >
            <p
              style={{
                fontSize: "42px",
                fontFamily: "FreightDisp Pro Medium",
                textTransform: "capitalize",
                paddingBottom: "15px",
              }}
              className="quotes-div1Title"
            >
              Together We Can Make An Impact
            </p>

            <p
              style={{
                width: "619px",
                textAlign: "center",
                fontSize: "22px",
                fontFamily: "FreightDisp Pro Medium",
              }}
              className="quotes-div1Descript"
            >
              Our purpose is to building a chain of smile through innovative lab
              grown diamonds, sustainable luxury and giving back to the
              community. We aim to spread smiles around the world with your
              contribution. Here's how we're working to make the world a better
              place.
            </p>
          </div>

          <Campaign />

          <div
            style={{
              textAlign: "center",
              width: "620px",
              height: "441px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
            className="quotes-div2"
          >
            <p
              style={{
                fontSize: "26px",
                fontFamily: "FreightDisp Pro Medium",
                color: "white",
                lineHeight: "25px",
                textAlign: 'center'
              }}
              className="quotes-div2Descript"
            >
              “Creating Sonasons has been our dream and life mission as our
              way of spreading smiles around the world and to help make our
              world a better place.”
            </p>
            <p style={{ color: "white" }}>
              <small>
                <i>-Sonasons Founders</i>
              </small>
            </p>
          </div>
          <Explore/>
          
        </div>
      </div>
    </>
  );
};

export default index;
