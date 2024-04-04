import React, { useRef, useState } from 'react'
import './ShopOurInstagram.css'
import { IoClose } from "react-icons/io5";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function ShopOurInstagram() {

    const [showOverlay, setShowOverlay] = useState(false);
    const inputRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // arrows: false,
        // prevArrow: false, 
        // nextArrow: false,
    };


    const toggleOverlay = () => {
        // setShowOverlay(!showOverlay);
    };



    return (
        <div>
            {showOverlay && (
                <>
                    <div className="shopInstaoverlay">
                        <div className="searchClose">
                            <IoClose style={{ height: '50px', width: '50px', color: 'white' }} onClick={toggleOverlay} />
                        </div>
                        <div style={{ width: '1000px', height: '500px' }}>
                            <Slider {...settings}>
                                <div className='overlyBox1'>
                                    <img src='https://cdn.showcasegalleries.io/media/instagram/public-showcase-media.sfo3.digitaloceanspaces.com/18048267676371955.jpg' style={{ height: '500px' }} />
                                    <div className='overlyBox1Content'>
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            paddingInline: '100px'
                                        }}>
                                            NEW COLLECTION LAUNCH! FLOW with the movement within you. <br /><br />
                                            "Being in the FLOW means being aware that the river of life is flowing to us at every moment."<br /><br />Discover more at www.smilingrocks.com<br /><br />
                                            <span class="hashtag">#SmilingRocksCo</span>
                                            <span class="hashtag">#labgrowndiamonds</span>
                                            <span class="hashtag">#jewelry</span>
                                            <span class="hashtag">#finejewelry</span>
                                            <span class="hashtag">#fashionjewelry</span>
                                            <span class="hashtag">#Flow</span>
                                            <span class="hashtag">#hoops</span>
                                            <span class="hashtag">#earrings</span>
                                            <span class="hashtag">#rings</span>
                                            <span class="hashtag">#bracelets</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='overlyBox1'>
                                    <img src='https://cdn.showcasegalleries.io/media/instagram/public-showcase-media.sfo3.digitaloceanspaces.com/17947561016152002.jpg' style={{ height: '500px' }} />
                                    <div className='overlyBox1Content'>
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            paddingInline: '100px'
                                        }}>
                                            NEW COLLECTION LAUNCH! FLOW with the movement within you. <br /><br />
                                            "Being in the FLOW means being aware that the river of life is flowing to us at every moment."<br /><br />Discover more at www.smilingrocks.com<br /><br />
                                            <span class="hashtag">#SmilingRocksCo</span>
                                            <span class="hashtag">#labgrowndiamonds</span>
                                            <span class="hashtag">#jewelry</span>
                                            <span class="hashtag">#finejewelry</span>
                                            <span class="hashtag">#fashionjewelry</span>
                                            <span class="hashtag">#Flow</span>
                                            <span class="hashtag">#hoops</span>
                                            <span class="hashtag">#earrings</span>
                                            <span class="hashtag">#rings</span>
                                            <span class="hashtag">#bracelets</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='overlyBox1'>
                                    <img src='https://cdn.showcasegalleries.io/media/instagram/public-showcase-media.sfo3.digitaloceanspaces.com/18222140416080296.jpg' style={{ height: '500px' }} />
                                    <div className='overlyBox1Content'>
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            paddingInline: '100px'
                                        }}>
                                            NEW COLLECTION LAUNCH! FLOW with the movement within you. <br /><br />
                                            "Being in the FLOW means being aware that the river of life is flowing to us at every moment."<br /><br />Discover more at www.smilingrocks.com<br /><br />
                                            <span class="hashtag">#SmilingRocksCo</span>
                                            <span class="hashtag">#labgrowndiamonds</span>
                                            <span class="hashtag">#jewelry</span>
                                            <span class="hashtag">#finejewelry</span>
                                            <span class="hashtag">#fashionjewelry</span>
                                            <span class="hashtag">#Flow</span>
                                            <span class="hashtag">#hoops</span>
                                            <span class="hashtag">#earrings</span>
                                            <span class="hashtag">#rings</span>
                                            <span class="hashtag">#bracelets</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='overlyBox1'>
                                    <img src='https://cdn.showcasegalleries.io/media/instagram/public-showcase-media.sfo3.digitaloceanspaces.com/17886020417717199.jpg' style={{ height: '500px' }} />
                                    <div className='overlyBox1Content'>
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            paddingInline: '100px'
                                        }}>
                                            NEW COLLECTION LAUNCH! FLOW with the movement within you. <br /><br />
                                            "Being in the FLOW means being aware that the river of life is flowing to us at every moment."<br /><br />Discover more at www.smilingrocks.com<br /><br />
                                            <span class="hashtag">#SmilingRocksCo</span>
                                            <span class="hashtag">#labgrowndiamonds</span>
                                            <span class="hashtag">#jewelry</span>
                                            <span class="hashtag">#finejewelry</span>
                                            <span class="hashtag">#fashionjewelry</span>
                                            <span class="hashtag">#Flow</span>
                                            <span class="hashtag">#hoops</span>
                                            <span class="hashtag">#earrings</span>
                                            <span class="hashtag">#rings</span>
                                            <span class="hashtag">#bracelets</span>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </>
            )
            }
            <div className='ShopInstagrtamMain'>
                <p className='shopinstaMainTitle'>Shop Our Instagram</p>
                <p className='shopinstaMainDesc'>Follow @smilingrocksco and get inspired with photos of our lab-grown diamond jewelry, customized and styled for you!</p>

                <div className='ShopInstagrtamImages'>
                    <div className='shopInimage'>
                        <img src='https://cdn.showcasegalleries.io/media/instagram/public-showcase-media.sfo3.digitaloceanspaces.com/18048267676371955.jpg' className='shopInimage1' onClick={toggleOverlay} />
                    </div>
                    <div className='shopInimage'>
                        <img src='https://cdn.showcasegalleries.io/media/instagram/public-showcase-media.sfo3.digitaloceanspaces.com/17947561016152002.jpg' className='shopInimage2' />
                    </div>
                    <div className='shopInimage'>
                        <img src='https://cdn.showcasegalleries.io/media/instagram/public-showcase-media.sfo3.digitaloceanspaces.com/18222140416080296.jpg' className='shopInimage3' />
                    </div>
                    <div className='shopInimage'>
                        <img src='https://cdn.showcasegalleries.io/media/instagram/public-showcase-media.sfo3.digitaloceanspaces.com/17886020417717199.jpg' className='shopInimage4' />
                    </div>
                </div>

                <div className='ShopInstagrtamImage-mobile'>
                    <div style={{ display: 'flex' }}>
                        <div className='shopInimage'>
                            <img src='https://cdn.showcasegalleries.io/media/instagram/public-showcase-media.sfo3.digitaloceanspaces.com/18048267676371955.jpg' className='shopInimage1' onClick={toggleOverlay} />
                        </div>
                        <div className='shopInimage'>
                            <img src='https://cdn.showcasegalleries.io/media/instagram/public-showcase-media.sfo3.digitaloceanspaces.com/17947561016152002.jpg' className='shopInimage2' />
                        </div>
                    </div>

                    <div style={{ display: 'flex' }}>
                        <div className='shopInimage'>
                            <img src='https://cdn.showcasegalleries.io/media/instagram/public-showcase-media.sfo3.digitaloceanspaces.com/18222140416080296.jpg' className='shopInimage3' />
                        </div>
                        <div className='shopInimage'>
                            <img src='https://cdn.showcasegalleries.io/media/instagram/public-showcase-media.sfo3.digitaloceanspaces.com/17886020417717199.jpg' className='shopInimage4' />
                        </div>
                    </div>
                </div>


            </div>
        </div >
    )
}
