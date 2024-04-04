import React from "react";
import image1 from "../../../assets/staticImg/impact2.jpg";
import image2 from "../../../assets/Impact/campaign/img2.webp";
import image3 from "../../../assets/Impact/campaign/img3.webp";
import image4 from "../../../assets/Impact/campaign/img4.webp";
import edu1 from "../../../assets/Impact/smallogo/edu-logo-1.avif";
import edu2 from "../../../assets/Impact/smallogo/edu-logo-2.avif";
import med1 from "../../../assets/Impact/smallogo/med1.avif";
import med2 from "../../../assets/Impact/smallogo/med2.avif";
import trees1 from "../../../assets/Impact/smallogo/trees1.avif";
import tress2 from "../../../assets/Impact/smallogo/trees2.avif";
import tress3 from "../../../assets/Impact/smallogo/trees3.avif";
import ani from "../../../assets/Impact/smallogo/ani1.avif";
import hat from "../../../assets/Impact/smallicons/gradHat.png";
import leaf from "../../../assets/Impact/smallicons/leaf.png";
import heart from "../../../assets/Impact/smallicons/heart.png";
import paws from "../../../assets/Impact/smallicons/paws.png";
import './impcards.css'

const ImpCards = () => {

  const JsonData = [
    {
      banner: image1,
      icon: hat,
      title: "Education Support",
      descript:
        "Education is the key to a better life.There are many children who lack access to education which can lead to lifelong struggles. Your support will go to charities that provide funding and resources to build schools, provide supplies and more.",
      counter: [
        { a: "11", b: "Yearly Scholarships" },
        { a: "6", b: "Digital Library" },
        { a: "50 Enrolled", b: "in Female-led Skill Training Program" },
      ],
      fund: [{ i: edu1 }, { i: edu2 }]
    },
    {
      banner: "https://img.freepik.com/premium-photo/people-hands-planting-small-tree-sunset-concept-save-earth_34152-3251.jpg",
      icon: leaf,
      title: "Environmental Protection",
      descript:
        "Sonasons has launched a Carbon For Carbon initiative. We are working with NGOs to launch this campaign and research the amount of CO2 produced by one human cycle which will be offset with the amounts of trees that need to be planted to improve the environment impact of unnecessary carbon usage.",
      counter: [
        { a: "", b: "Trees Planted & Clean Up Ocean" },
        { a: "159,619 +", b: "Trees Planted" },
        { a: "37,540", b: "Pounds Ocean Trash Remove" },
      ],
      fund: [{ i: trees1 }, { i: tress2 }, { i: tress3 }]
    },
    {
      banner: "https://media.istockphoto.com/id/1369620254/photo/shot-of-a-doctor-using-a-cotton-ball-on-a-little-girls-arm-while-administering-an-injection.jpg?s=612x612&w=0&k=20&c=1k44-DJxeSdtKIltzVk2tSPs19dW1EO_oeDjvlDsI3g=",
      icon: heart,
      title: "Medical Support",
      descript:
        "More than 400 million people do not have access to essential health services. Your support will go to charities that provide funding and resources to build more hospitals, provide medical supplies and more.",
      counter: [
        { a: "20", b: "Cleft Lip Surgeries" },
        { a: "", b: "" },
        { a: "", b: "" },

      ],
      fund: [{ i: edu2 }, { i: med1 }, { i: med2 }]
    },
    {
      banner: "https://www.shutterstock.com/image-photo/animals-care-protection-mixed-media-260nw-528609712.jpg",
      icon: paws,
      title: "Animal Protection",
      descript:
        "Earth has lost half of its wildlife in the past 40 years. Your support will go to charities that provide resources to restore habitats and protect nature and the extraordinary species that inhabit some of the last wild spaces.",
      counter: [
        { a: "", b: "" },
        { a: "", b: "" },
        { a: "", b: "" },

      ],
      fund: [{ i: ani }]
    },
  ];

  const counterFunc = (num, text, i) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', fontFamily: "TT Commons, sans-serif", marginTop: i === 0 ? '15px' : '0px' }}>
        <span style={{ color: 'black', textAlign: 'center', fontSize: '19px' }}>{num}</span>
        <p style={{ color: '#020202', fontSize: '17px' }}>{text}</p>
      </div>
    )
  }

  return (
    <div style={{ marginTop: "70px" }}>
      <div
        style={{
          padding: "0px 85px 0px",
          display: "flex",
          flexDirection: "column",
          gap: '60px'
        }}
        className="impacrCardMobileMain"

      >
        {JsonData.map((jd, i) => (
          <div
            style={{
              display: "flex",
              flexDirection: i % 2 === 0 ? "row" : "row-reverse",
              width: "100%",
              border: "1px solid #e1e1e1",
            }}
            className="impacrCardMobileMain-sub"

         
            >
            <div className="impacrCardMobile" style={{ width: "50%",textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: 'column',
                  color: '#7d7f85',
                  borderBottom: '1px solid #e1e1e1',
                  paddingBottom: '30px',
                  margin: '0px 60px',
                  height: '75%',
                }}
              >
                <img src={jd.icon} alt={'...'} style={{ margin: '30px 0px 20px 0px' }} />
                <p style={{ fontSize: '26px', fontFamily: "FreightDisp Pro Medium" }}>{jd.title}</p>
                <p style={{ fontSize: '14px', fontFamily: "TT Commons, sans-serif", width: '400px', textAlign: 'center' }} className="impacrCardMobileDesc">
                  {jd.descript}
                </p>
                {jd.counter.map((countData, i) => (
                  counterFunc(countData.a, countData.b, i)
                ))}
              </div>
              <div style={{ display: 'flex', width: '33.33%', alignItems: 'center', padding: '30px 20px', marginLeft: i % 2 === 0 ? '20px' : '60px', height: '25%' }}>
                {jd.fund.map((imgData) => (
                  <img src={imgData.i} alt={'...'} style={{width:'100%'}} />
                ))}
              </div>
            </div>
            <div className="impacrCardImgMobile" style={{ width: "50%" }}>
              <img
                src={jd.banner}
                alt={"..."}
                style={{ objectFit: 'cover',  height: "100%", width: '100%' }}
              />
            </div>
          </div>
        ))

        }
      </div>
    </div>
  );
};

export default ImpCards;
