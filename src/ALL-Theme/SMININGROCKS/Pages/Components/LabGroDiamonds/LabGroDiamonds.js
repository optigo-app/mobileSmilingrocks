import React from 'react'
import './LabGroDiamonds.css'
import Header from '../home/Header/Header'
import { Colors } from '../../../lib/consts/Colors'
import ContactForm from '../contactForm/ContactForm'
import Footer from '../home/Footer/Footer'

export default function LabGroDiamonds() {
    return (
        <div style={{paddingTop: '110px'}}>
            <div>
                <img
                    src="https://cdn.accentuate.io/19336364132/3641674891364/Stocksy_txpdd2f673ddEJ200_Medium_1086442.jpg?1733x1155"
                    alt="..."
                    className="smiling-LabGrow-container"
                />
                <div className="smiling-LabGrow-container2"></div>
            </div>
            <div className='smining-about-title'>
                <p style={{
                    textAlign: 'center',
                    fontSize: '40px',
                    color: 'white',
                    fontFamily: 'FreightDispProBook-Regular,Times New Roman,serif'
                }}>Lab Grown Diamonds</p>
            </div>
            <div className='labGrowMain'>
                <div style={{ paddingBlock: '50px' }}>
                    <p className='labGrowTopTitle'>ABOUT OUR DIAMONDS</p>
                    <p className='labGrowTopDesc'>Lab-grown diamonds made with a chain of smile.</p>
                </div>
                <div className='labGrowBoxMain'>
                    <div className='labGrowBox1'>
                        <p className='labGrowBox1Title'>Responsible Sourcing & Transparent Journey</p>
                        <p className='labGrowBox1Desc'>Sonasons diamonds are in full compliance with our Transparency, Sustainability and Responsible sourcing. Our lab grown diamonds are sourced from renewable grown diamonds and are grown in our own facility using generic electricity. Our in-house diamond and jewelry manufacturing make our pricing affordable with no middlemen.</p>
                    </div>
                    <div className='labGrowBox2'>
                        <img src='//smilingrocks.com/cdn/shop/files/image_2_7cdd5b1c-4f0c-4ad3-91a4-64e74c8cb787_180x.jpg?v=1613689623 180w,' className='labGrowBoxImages' />
                    </div>
                </div>

                <div className='labGrowBoxMain' style={{ marginTop: '60px' }}>
                    <div className='labGrowBox2'>
                        <img src='//smilingrocks.com/cdn/shop/files/1_forthe_planet_logo_180x.jpg?v=1651112898 180w,' className='labGrowBoxImages' />
                    </div>
                    <div className='labGrowBox1'>
                        <p className='labGrowBox1Title'>1% for the Planet</p>
                        <p className='labGrowBox1Desc'>Sonasons is proud to be a member of the 1% for the Planet and pledges to donate 1% of our loose diamond business revenue to Environmental Causes. We are working charity organizations to support reforestation and wildlife conservation with various partners. Check out our impact page for more information.</p>
                    </div>
                </div>

                <div className='labGrowBoxMain' style={{ marginTop: '60px' }}>
                    <div className='labGrowBox1'>
                        <p className='labGrowBox1Title'>Certified Quality & Laser-Inscribed Diamonds</p>
                        <p className='labGrowBox1Desc'>Our lab-grown diamonds are graded using the standard 4Cs method of assessing diamond quality. We provide International Gemological Institute (IGI) certification for larger diamonds. Identification is important to us and is a representation of our quality mark. We have laser-inscribed Sonasons logo and is only visible under a microscope. Sonasons logo is inscribed on the surface on each diamond as our assurance on excellent quality.</p>
                    </div>
                    <div className='labGrowBox2'>
                        <img src='//smilingrocks.com/cdn/shop/files/1_forthe_planet_logo_180x.jpg?v=1651112898 180w,' className='labGrowBoxImages' />
                    </div>
                </div>

                <div style={{ paddingTop: '70px' }}>
                    <p className='labDrowTableTitle'>Identical to Mined Diamonds in Every Way</p>
                    <div style={{ display: 'flex', overflowX: 'scroll', overflowY: 'scroll', justifyContent: 'center' }}>
                        <table className='labGrowTableMain'>
                            <thead>
                                <tr>
                                    <th className='labGrowTableTH'>Diamonds</th>
                                    <th className='labGrowTableTH'>Lab-Grown Diamond</th>
                                    <th className='labGrowTableTH'>Mined Diamond</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className='labGrowTableDa'>Chemical Composition</th>
                                    <th className='labGrowTableDa'>C</th>
                                    <th className='labGrowTableDa'>C</th>
                                </tr>
                                <tr>
                                    <th className='labGrowTableDa'>Cystalline Structure</th><th className='labGrowTableDa'>CUBIC</th><th className='labGrowTableDa'>CUBIC</th></tr><tr><th className='labGrowTableDa'>Reactive Index</th><th className='labGrowTableDa'>2.42</th><th className='labGrowTableDa'>2.42</th></tr><tr><th className='labGrowTableDa'>Dispersion</th><th className='labGrowTableDa'>0.044</th><th className='labGrowTableDa'>0.044</th></tr><tr><th className='labGrowTableDa'>Hardness</th><th className='labGrowTableDa'>10</th><th className='labGrowTableDa'>10</th></tr><tr><th className='labGrowTableDa'>Density</th><th className='labGrowTableDa'>3.52</th><th className='labGrowTableDa'>3.52</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <p className='labGroTableBottomDesc'>Lab-grown diamonds are diamonds with the same crystal structure, chemical composition, and physical properties as the mined rocks: carbon atoms arranged in a cubic crystal structure. They are grown in labs, with advanced technological processes that stimulate the same conditions under which mined diamonds develop when they form in the mantle, beneath the Earth’s crust. Wonder how Lab-grown Diamonds are made?</p>
                    </div>

                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src='https://cdn.accentuate.cloud/images/2184446052/Growth-process-of-lab-grown-diamond.jpg?v=1585291540401' className='labGroProcessImg' />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button className='labGrowMoreBtn'>KNOW MORE ABOUT LAB GROWN DIAMONDS</button>
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '70px'
                }}>
                    <p style={{ textAlign: 'center' }}>Zenith - The Celebration of Human Spirit and Innovation</p>
                    <img src="https://cdn.accentuate.cloud/images/2184446052/ZENITH-Diamond-painting_Reena-Ahluwalia_Copyright.jpg?v=1650953931950" className='labGrowZenithImg'></img>

                    <p style={{ color: '#7d7f85', width: '60%', textAlign: 'center' }}>Sonasons wants to celebrate the new Era of technological advancement with all of you. Its remarkable to be a part of the new change in our industry. We believe Zenith is the first ever lab-grown diamond painting commissioned to Reena Alhuwalia by Sonasons.</p>
                </div>

                <ContactForm />
                <Footer />
            </div>
        </div>
    )
}
