import React from 'react'
import './celeb.css'
import Header from '../home/Header/Header';
import Footer from '../home/Footer/Footer';
import CelebSlick from './celebslick/CelebSlick';

const Celeb = () => {

    let demoJSON = [
        {
            celebNames: 'gigi hadid',
            celebDesc: 'Met Gala · 1 May 2023',
            celebImages: [
                'https://smilingrocks.com/cdn/shop/files/Gigi_Hadid_1.jpg?v=1683001866',
                'https://smilingrocks.com/cdn/shop/files/Gigi_Hadid_2.jpg?v=1683001878',
                'https://smilingrocks.com/cdn/shop/files/Gigi_Hadid_7.jpg?v=1683001897'
            ]
        },
        {
            celebNames: 'GRAZIANO DI PRIMA',
            celebDesc: 'Pride of Britain Awards · 8 OCT 2022',
            celebImages: [
                'https://smilingrocks.com/cdn/shop/files/15._Graziano_Di_Prima_2.jpg?v=1675751546',
                'https://smilingrocks.com/cdn/shop/files/15._Graziano_Di_Prima_1.jpg?v=1675751546',
            ]
        },
        {
            celebNames: 'SOPHIE HABBOO',
            celebDesc: 'Wonka World Premier - 28 November 2023',
            celebImages: [
                'https://smilingrocks.com/cdn/shop/files/gettyimages-1819381137-2048x2048.jpg?v=1701311360',
                'https://smilingrocks.com/cdn/shop/files/gettyimages-1819850007-2048x2048.jpg?v=1701311361',
                'https://smilingrocks.com/cdn/shop/files/gettyimages-1819381766-2048x2048.jpg?v=1701311360',
                'https://smilingrocks.com/cdn/shop/files/gettyimages-1819278528-2048x2048.jpg?v=1701311360',
                'https://smilingrocks.com/cdn/shop/files/gettyimages-1819189826-2048x2048.jpg?v=1701311361'
            ]
        },
        {
            celebNames: 'JOE LOCKE',
            celebDesc: 'Attitude Award · 12 OCT 2022',
            celebImages: [
                'https://smilingrocks.com/cdn/shop/files/10._Joe_Locke_1.jpg?v=1675752116',
                'https://smilingrocks.com/cdn/shop/files/10._Joe_Locke_2.jpg?v=1675752116',
            ]
        },
        {
            celebNames: 'gigi hadid',
            celebDesc: 'Met Gala · 1 May 2023',
            celebImages: [
                'https://smilingrocks.com/cdn/shop/files/Gigi_Hadid_1.jpg?v=1683001866',
                'https://smilingrocks.com/cdn/shop/files/Gigi_Hadid_2.jpg?v=1683001878',
                'https://smilingrocks.com/cdn/shop/files/Gigi_Hadid_7.jpg?v=1683001897'
            ]
        },
        {
            celebNames: 'GRAZIANO DI PRIMA',
            celebDesc: 'Pride of Britain Awards · 8 OCT 2022',
            celebImages: [
                'https://smilingrocks.com/cdn/shop/files/15._Graziano_Di_Prima_2.jpg?v=1675751546',
                'https://smilingrocks.com/cdn/shop/files/15._Graziano_Di_Prima_1.jpg?v=1675751546',
            ]
        },
        {
            celebNames: 'SOPHIE HABBOO',
            celebDesc: 'Wonka World Premier - 28 November 2023',
            celebImages: [
                'https://smilingrocks.com/cdn/shop/files/gettyimages-1819381137-2048x2048.jpg?v=1701311360',
                'https://smilingrocks.com/cdn/shop/files/gettyimages-1819850007-2048x2048.jpg?v=1701311361',
                'https://smilingrocks.com/cdn/shop/files/gettyimages-1819381766-2048x2048.jpg?v=1701311360',
                'https://smilingrocks.com/cdn/shop/files/gettyimages-1819278528-2048x2048.jpg?v=1701311360',
                'https://smilingrocks.com/cdn/shop/files/gettyimages-1819189826-2048x2048.jpg?v=1701311361'
            ]
        },
        {
            celebNames: 'JOE LOCKE',
            celebDesc: 'Attitude Award · 12 OCT 2022',
            celebImages: [
                'https://smilingrocks.com/cdn/shop/files/10._Joe_Locke_1.jpg?v=1675752116',
                'https://smilingrocks.com/cdn/shop/files/10._Joe_Locke_2.jpg?v=1675752116',
            ]
        },
    ]

    return (
        <>
            <div
                style={{
                    backgroundColor: "#c0bbb1",
                    height: "100%",
                    width: "100%",
                    paddingBottom: "100px",
                    paddingTop: '110px'
                }}
            >
                <div style={{ display: 'flex' }} className='smilingCelebMain'>
                    <div className='smilingCelebMainSub'>
                        <img src={'https://smilingrocks.com/cdn/shop/files/Celebrity_Page_Banner_-_Met_Gala_2023_1680x.jpg?v=1683165587'} alt={''} className='smilingCeleMainTopImage' />
                        <div className='smilingCelebBoxMain' style={{ backgroundColor: 'white' }}>
                            <h1 style={{ fontFamily: 'FreightDisp Pro Medium', color: '#7d7f85', textAlign: 'center', paddingTop: '80px' }}>Celebrities</h1>
                            <div style={{ display: 'flex', margin: '30px 15px', flexWrap: 'wrap' }}>
                                {
                                    demoJSON.map((dj) => (
                                        <CelebSlick dj={dj} />
                                    ))
                                }
                            </div>
                            <Footer />

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Celeb