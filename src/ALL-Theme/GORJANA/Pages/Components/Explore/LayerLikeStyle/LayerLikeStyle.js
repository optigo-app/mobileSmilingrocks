import React from 'react'
import './LayerLikeStyle.css'
import Header from '../../home/Header/Header'
import Footer from '../../home/Footer/Footer'

export default function LayerLikeStyle() {


    return (
        <div>
            <Header />
            <p style={{ fontFamily: 'Freight Big Pro,serif', fontSize: '55px', margin: '170px 0px 0px', textAlign: 'center' }}>Layer Like a Stylist</p>
            <p style={{ textAlign: 'center', margin: '0px', fontSize: '15px' }}>Our inviting team of stylists will help you design your look.</p>

            <div className='gorLayerLikeBoxMain'>
                <div className='gorLayerBox1'>
                    <div className='gorLayerSub1Box1'>
                        <div style={{ position: 'relative' }}>
                            <img src='https://www.gorjana.com/cdn/shop/files/SS-1.jpg?v=1703614972&%3Bwidth=1080&em-format=avif&em-width=1080' className='gorLayerBoxImg' />
                            <button className='gorShopTheBtn'>Shop The Look</button>
                        </div>
                        <p className='gorLayerDescTitle'>Spotted in Irvine</p>
                        <p className='gorLayerDesc'>The Classic Diamond Eternity Ring, 14k Gold Lou Helium Statement Ring, Diamond Lou Helium Ring, 14k Gold Parker Ring, Diamond Row Ring and Diamond Pave Signet Ring.</p>
                    </div>
                    <div className='gorLayerSub2Box1'>
                        <div style={{ position: 'relative' }}>
                            <img src='https://www.gorjana.com/cdn/shop/files/SS-3.jpg?v=1703615066&%3Bwidth=1080&em-format=avif&em-width=1080' className='gorLayerBoxImg' />
                            <button className='gorShopTheBtn'>Shop The Look</button>
                        </div>
                        <p className='gorLayerDescTitle'>Spotted in Park City</p>
                        <p className='gorLayerDesc'>The Classic Diamond Eternity Ring, 14k Gold Lou Helium Statement Ring, Diamond Lou Helium Ring, 14k Gold Parker Ring, Diamond Row Ring and Diamond Pave Signet Ring.</p>
                    </div>
                </div>
                <div className='gorLayerBox2'>
                    <div className='gorLayerSub1Box2'>
                        <div style={{ position: 'relative' }}>
                            <img src='https://www.gorjana.com/cdn/shop/files/SS-2.jpg?v=1703615031&%3Bwidth=1080&em-format=avif&em-width=1080' className='gorLayerBoxImg' />
                            <button className='gorShopTheBtn'>Shop The Look</button>
                        </div>
                        <p className='gorLayerDescTitle'>Spotted in Malibu</p>
                        <p className='gorLayerDesc'>The Diamond Bali Flat Back Studs, Diamond 15 mm Hoops, Diamond Drop Pave Huggies, and 14k Gold Classic Huggies.</p>
                    </div>
                    <div className='gorLayerSub2Box2'>
                        <div style={{ position: 'relative' }}>
                            <img src='https://www.gorjana.com/cdn/shop/files/SS-4.jpg?v=1703615085&%3Bwidth=1080&em-format=avif&em-width=1080' className='gorLayerBoxImg' />
                            <button className='gorShopTheBtn'>Shop The Look</button>
                        </div>
                        <p className='gorLayerDescTitle'>Spotted in Palm Desert</p>
                        <p className='gorLayerDesc'>The Classic Diamond Eternity Ring, 14k Gold Rose Ring, Diamond Lou Helium Ring, Diamond Pave Signet Ring 14k Gold Micro Mini Venice Bracelet and Diamond Wilder Bracelet.</p>
                    </div>
                </div>
            </div>

            <div className='gorLayerLikeBoxMain'>
                <div className='gorLayerBox1'>
                    <div className='gorLayerSub1Box1'>
                        <div style={{ position: 'relative' }}>
                            <img src='https://www.gorjana.com/cdn/shop/files/SS-1.jpg?v=1703614972&%3Bwidth=1080&em-format=avif&em-width=1080' className='gorLayerBoxImg' />
                            <button className='gorShopTheBtn'>Shop The Look</button>
                        </div>
                        <p className='gorLayerDescTitle'>Spotted in Irvine</p>
                        <p className='gorLayerDesc'>The Classic Diamond Eternity Ring, 14k Gold Lou Helium Statement Ring, Diamond Lou Helium Ring, 14k Gold Parker Ring, Diamond Row Ring and Diamond Pave Signet Ring.</p>
                    </div>
                    <div className='gorLayerSub2Box1'>
                        <div style={{ position: 'relative' }}>
                            <img src='https://www.gorjana.com/cdn/shop/files/SS-3.jpg?v=1703615066&%3Bwidth=1080&em-format=avif&em-width=1080' className='gorLayerBoxImg' />
                            <button className='gorShopTheBtn'>Shop The Look</button>
                        </div>
                        <p className='gorLayerDescTitle'>Spotted in Park City</p>
                        <p className='gorLayerDesc'>The Classic Diamond Eternity Ring, 14k Gold Lou Helium Statement Ring, Diamond Lou Helium Ring, 14k Gold Parker Ring, Diamond Row Ring and Diamond Pave Signet Ring.</p>
                    </div>
                </div>
                <div className='gorLayerBox2'>
                    <div className='gorLayerSub1Box2'>
                        <div style={{ position: 'relative' }}>
                            <img src='https://www.gorjana.com/cdn/shop/files/SS-2.jpg?v=1703615031&%3Bwidth=1080&em-format=avif&em-width=1080' className='gorLayerBoxImg' />
                            <button className='gorShopTheBtn'>Shop The Look</button>
                        </div>
                        <p className='gorLayerDescTitle'>Spotted in Malibu</p>
                        <p className='gorLayerDesc'>The Diamond Bali Flat Back Studs, Diamond 15 mm Hoops, Diamond Drop Pave Huggies, and 14k Gold Classic Huggies.</p>
                    </div>
                    <div className='gorLayerSub2Box2'>
                        <div style={{ position: 'relative' }}>
                            <img src='https://www.gorjana.com/cdn/shop/files/SS-4.jpg?v=1703615085&%3Bwidth=1080&em-format=avif&em-width=1080' className='gorLayerBoxImg' />
                            <button className='gorShopTheBtn'>Shop The Look</button>
                        </div>
                        <p className='gorLayerDescTitle'>Spotted in Palm Desert</p>
                        <p className='gorLayerDesc'>The Classic Diamond Eternity Ring, 14k Gold Rose Ring, Diamond Lou Helium Ring, Diamond Pave Signet Ring 14k Gold Micro Mini Venice Bracelet and Diamond Wilder Bracelet.</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
