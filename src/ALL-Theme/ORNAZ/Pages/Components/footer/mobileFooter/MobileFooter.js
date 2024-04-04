import React, { useState } from 'react'
import './MobileFooter.css'

export default function MobileFooter() {


    const [isOpenOrnazExperince, setIsOrnazExperince] = useState(false);
    const [isOpenWhyOrnaz, setIsWhyOrnaz] = useState(false);
    const [isOpenAllAboutOrnaz, setIsAllAboutOrnaz] = useState(false);
    const [isOpenPolices, setIsPolices] = useState(false);

    const handleJoin = () => {

    }

    const toggleOrnazExperianceList = () => {
        setIsOrnazExperince(!isOpenOrnazExperince);
    };

    const toggleWhyOrnazList = () => {
        setIsWhyOrnaz(!isOpenWhyOrnaz);
    };

    const toggleAllAboutOrnazList = () => {
        setIsAllAboutOrnaz(!isOpenAllAboutOrnaz);
    };

    const togglePolicesList = () => {
        setIsPolices(!isOpenPolices);
    };
    return (
        <div>
            <div className="app-container" style={{ padding: '15px 0px' }}>
                {/* <p class="avernir-small" style={{ textAlign: 'center' }}>
                    Experience our mobile app
                </p> */}
                {/* <div className="app-container-Top" style={{ width: '100%',  display: 'flex' }}>
                        <a target="_blank" href="https://play.google.com/store/apps/details?id=com.ornaz.frontend" style={{ marginRight: '5px' }}>
                            <img src="https://d1idqhwk00c3jv.cloudfront.net/v55/assets/new_homepage/app_link/android.webp" alt="playstore ornaz" height="100%" width="auto" loading="lazy" />
                        </a>
                        <a target="_blank" href="https://apps.apple.com/us/app/ornaz/id1607033942" class="custom-flex-box custom-link app-box" style={{ marginl: '5px' }}>
                            <img src="https://d1idqhwk00c3jv.cloudfront.net/v55/assets/new_homepage/app_link/apple.webp" alt="appstore ornaz" height="100%" width="auto" loading="lazy" />
                        </a>
                    </div> */}
                <div style={{
                    backgroundColor: 'rgb(243, 243, 243)',
                    marginBottom: '20px'
                }}>
                    <p style={{ textAlign: 'center', fontSize: '25px', margin: '0px', fontWeight: 500 }}>Sign Up for Newsletter</p>
                    <div style={{
                        height: '70px',
                        margin: '20px'
                    }}>
                        <input type='text' placeholder='Email' className='footerSignIn' /><button className='joinBtn' onClick={handleJoin}>JOIN</button>
                    </div>

                    <div>
                        <div className='footerMainTitle' onClick={toggleOrnazExperianceList}>
                            <p>ORNAZ Experience</p>
                            <p style={{ marginRight: '20px' }}>{isOpenOrnazExperince ? '-' : '+'}</p>
                        </div>
                        <ul className={`my-SubList ${isOpenOrnazExperince ? 'open' : ''}`} style={{ border: !isOpenOrnazExperince ? '1px solid lightgray' : ' ' }}>
                            <li>
                                <p className='sub-listt-title'>ORNAZ EXPERIENCE</p>
                            </li>
                            <li>
                                <p className='sub-listt-title'>360 DEGREE DISPLAY TECHNOLOGY</p>
                            </li>
                            <li>
                                <p className='sub-listt-title'>DESIGN YOUR OWN ENGAGEMENT RING</p>
                            </li>
                            <li>
                                <p className='sub-listt-title'>BOOK YOUR APPOINTMENT</p>
                            </li>
                            <li>
                                <p className='sub-listt-title'>FREE ENGRAVING</p>
                            </li>
                        </ul>

                        <div className='footerMainTitle' onClick={toggleWhyOrnazList}>
                            <p>Why ORNAZ?</p>
                            <p style={{ marginRight: '20px' }}>{isOpenWhyOrnaz ? '-' : '+'}</p>
                        </div>
                        <ul className={`my-SubList ${isOpenWhyOrnaz ? 'open' : ''}`} style={{ border: !isOpenWhyOrnaz ? '1px solid lightgray' : ' ' }}>
                            <li>
                                <p className='sub-listt-title'>WHY ORNAZ ?</p>
                            </li>
                            <li>
                                <p className='sub-listt-title'>GIA TRAINED EXPERT ASSISTANCE</p>
                            </li>
                            <li>
                                <p className='sub-listt-title'>CERTIFICATION</p>
                            </li>
                            <li>
                                <p className='sub-listt-title'>CRAFTSMANSHIP</p>
                            </li>
                            <li>
                                <p className='sub-listt-title'>QUALITY & VALUE BEYOND 4CS</p>
                            </li>
                        </ul>

                        <div className='footerMainTitle' onClick={toggleAllAboutOrnazList}>
                            <p>All About ORNAZ</p>
                            <p style={{ marginRight: '20px' }}>{isOpenAllAboutOrnaz ? '-' : '+'}</p>
                        </div>
                        <ul className={`my-SubList ${isOpenAllAboutOrnaz ? 'open' : ''}`} style={{ border: !isOpenAllAboutOrnaz ? '1px solid lightgray' : ' ' }}>
                            <li>
                                <p className='sub-listt-title'>ALL ABOUT ORNAZ</p>
                            </li>
                            <li>
                                <p className='sub-listt-title'>ABOUT US</p>
                            </li>
                            <li>
                                <p className='sub-listt-title'>CONTACT US</p>
                            </li>
                            <li>
                                <p className='sub-listt-title'>REFER YOUR FRIENDS</p>
                            </li>
                            <li>
                                <p className='sub-listt-title'>ORNAZ BLOG</p>
                            </li>
                            <li>
                                <p className='sub-listt-title'>CELEB TAKEOVER</p>
                            </li>
                        </ul>

                        <div className='footerMainTitle' onClick={togglePolicesList}>
                            <p>POLICIES</p>
                            <p style={{ marginRight: '20px' }}>{isOpenPolices ? '-' : '+'}</p>
                        </div>
                        <ul className={`my-SubList ${isOpenPolices ? 'open' : ''}`} style={{ border: !isOpenPolices ? '1px solid lightgray' : ' ' }}>
                            <li>
                                <p className='sub-listt-title'>POLICIES</p>
                            </li>
                            <li>
                                <p className='sub-listt-title'>LIFETIME EXCHANGE & BUYBACK</p>
                            </li>
                            <li>
                                <p className='sub-listt-title'>TERMS & CONDITIONS</p>
                            </li>
                            <li>
                                <p className='sub-listt-title'>DELIVERY & SHIPPING</p>
                            </li>
                            <li>
                                <p className='sub-listt-title'>PRIVACY POLICY</p>
                            </li>
                            <li>
                                <p className='sub-listt-title'>FREQUENTLY ASKED QUESTIONS</p>
                            </li>
                        </ul>
                    </div>

                </div>


            </div>
        </div>
    )
}
