import { Divider } from '@mui/material';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import '../blogsearch.css'

export const Widget = (num) =>{

    let widgetTitle =() =>{
        if(num===1){
            return 'RECENT POSTS';
        }
        else if(num===2){
            return 'CATEGORIES'
        }
        else{
            return 'SUBSCRIBE & FOLLOW'
        }
    }

    let widgetItems = () =>{
       if(num===2){
        return (
          <>
            <p className="recent-post-text">
            Covid 19
            </p>
            <Divider
              orientation="horizontal"
              style={{ background: "gray", marginBottom: "14px" }}
            />
            <p className="recent-post-text">Diamond Education</p>
            <Divider
              orientation="horizontal"
              style={{ background: "gray", marginBottom: "14px" }}
            />
            <p className="recent-post-text">
            Engagement Rings
            </p>
            <Divider
              orientation="horizontal"
              style={{ background: "gray", marginBottom: "14px" }}
            />
            <p className="recent-post-text">
            Eternity Bands
            </p>
            <Divider
              orientation="horizontal"
              style={{ background: "gray", marginBottom: "14px" }}
            />
            <p className="recent-post-text">
            Guide
            </p>
            <Divider
              orientation="horizontal"
              style={{ background: "gray", marginBottom: "14px" }}
            />
            <p className="recent-post-text">
            Lifestyle
            </p>
            <Divider
              orientation="horizontal"
              style={{ background: "gray", marginBottom: "14px" }}
            />
            <p className="recent-post-text">
            ORNAZ Stories
            </p>
            <Divider
              orientation="horizontal"
              style={{ background: "gray", marginBottom: "14px" }}
            />
            <p className="recent-post-text">
            Proposals
            </p>
            <Divider
              orientation="horizontal"
              style={{ background: "gray", marginBottom: "14px" }}
            />
            <p className="recent-post-text">
            Uncategorized
            </p>
            <Divider
              orientation="horizontal"
              style={{ background: "gray", marginBottom: "14px" }}
            />
            <p className="recent-post-text">
            Virtual Consultation
            </p>
          </>
        );
       }
       else if(num===1){
        return (
            <>
              <p className="recent-post-text">
                Upgrade your Ring Game This Diwali Sale!
              </p>
              <Divider
                orientation="horizontal"
                style={{ background: "gray", marginBottom: "14px" }}
              />
              <p className="recent-post-text">Celebrating 7 Years Of ORNAZ</p>
              <Divider
                orientation="horizontal"
                style={{ background: "gray", marginBottom: "14px" }}
              />
              <p className="recent-post-text">
                How To Protect Your Engagement Ring During Winters
              </p>
              <Divider
                orientation="horizontal"
                style={{ background: "gray", marginBottom: "14px" }}
              />
              <p className="recent-post-text">
                The Perfect Engagement Ring For Your Zodiac Sign
              </p>
              <Divider
                orientation="horizontal"
                style={{ background: "gray", marginBottom: "14px" }}
              />
              <p className="recent-post-text">
                How to Pack Your Jewellery for Travel
              </p>
            </>
          );
       }
       else{
        return (
            <div style={{display:'flex',justifyContent:'center',marginTop:'28px',gap:'3px'}}>
                <div className='icon-div'>
                <FaFacebookF  style={{color:'#3a589e'}}/>
                </div>
                <div className='icon-div'>
                <FaTwitter style={{color:'#55acee'}}/>
                </div>
                <div className='icon-div'>
                <FaInstagram style={{color:'#5851db'}}/>
                </div>
            </div>
        )
       }
    }

    return (
        <>
        <p className="recent-post">{widgetTitle()}</p>
        {widgetItems()}
        </>
    )
}