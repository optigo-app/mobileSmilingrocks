import React from 'react'
import './AboutUs.css'
import Header from '../home/Header/Header'
import ContactForm from '../contactForm/ContactForm'
import Footer from '../home/Footer/Footer'
import demo1img from '../../assets/demoImg1.jpg'
import demo2img from '../../assets/demoimg2.jpg'

export default function AboutUs() {
    return (
        <div className='paddingTopMobileSet' style={{ paddingTop: '110px' }}>
            {/* https://cdn.accentuate.io/19336364132/3641674891364/Stocksy_txpdd2f673ddEJ200_Medium_1086442.jpg?1733x1155 */}
            <div>
                <img
                    src="https://cdn.accentuate.io/19336364132/3641674891364/Stocksy_txpdd2f673ddEJ200_Medium_1086442.jpg?1733x1155"
                    alt="..."
                    className="smiling-About-container"
                />
                <div className="smiling-About-container2"></div>
            </div>
            <div className='smining-about-title'>
                <p style={{
                    textAlign: 'center',
                    fontSize: '40px',
                    color: 'white',
                    fontFamily: 'FreightDispProBook-Regular,Times New Roman,serif'
                }}>About Us</p>
            </div>
            <div className='daimondsEveryAbout'>
                <div className='daimondsEveryAboutSub'>
                    <div style={{
                        paddingBlock: '70px'
                    }}>
                        <p style={{
                            textAlign: 'center',
                            fontSize: '15px',
                            fontWeight: 500,
                            fontFamily: 'FreightDispProMedium-Regular,Times New Roman,serif',
                            color: '#7d7f85'
                        }}>#WEARESONASONS</p>
                        <p style={{
                            textAlign: 'center',
                            fontSize: '22px',
                            fontFamily: 'FreightDispProMedium-Regular,Times New Roman,serif',
                            color: '#7d7f85'
                        }}>Spread the Chain of Smile to Everyone from Lab to Home to Community.</p>
                        <p
                            style={{
                                textAlign: 'center',
                                fontSize: '30px',
                                fontFamily: 'FreightDispProMedium-Regular,Times New Roman,serif',
                                color: '#7d7f85'
                            }}>DIAMONDS ARE FOR EVERYONE® .</p>
                    </div>
                    <div className='about-daimondBoxMain'>
                        <div className='about-daimondBox1'>
                            <p style={{ fontSize: '25px', color: '#7d7f85', fontFamily: 'FreightDispProMedium-Regular,Times New Roman,serif' }}>Wear a Smile</p>
                            <p style={{ textAlign: 'center', color: '#7d7f85', fontSize: '13px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel orci porta non pulvinar neque laoreet suspendisse interdum. Risus nullam eget felis eget nunc lobortis mattis. Eleifend quam adipiscing vitae proin sagittis nisl. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Eget dolor morbi non arcu. Id aliquet lectus proin nibh nisl condimentum id venenatis. Massa enim nec dui nunc mattis enim. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Porttitor leo a diam sollicitudin tempor id eu. Id leo in vitae turpis massa sed elementum. Sagittis eu volutpat odio facilisis mauris. Sed vulputate odio ut enim. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in.</p>
                        </div>
                        <div className='about-daimondBox2'>
                            <img src={demo1img} className='about-daimondBox2-image' />
                        </div>
                    </div>

                    <div className='about-daimondBoxMain' style={{ marginTop: '80px' }}>
                        <div className='about-daimondBox2'>
                            <img src={demo2img} className='about-daimondBox2-image' />
                        </div>
                        <div className='about-daimondBox1'>
                            <p style={{ fontSize: '25px', color: '#7d7f85', fontFamily: 'FreightDispProMedium-Regular,Times New Roman,serif' }}>Wear a Smile</p>
                            <p style={{ textAlign: 'center', color: '#7d7f85', fontSize: '13px' }}>Dictum varius duis at consectetur lorem donec massa sapien faucibus. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Sit amet luctus venenatis lectus magna fringilla urna. Aenean et tortor at risus viverra adipiscing. A diam maecenas sed enim ut sem. Faucibus pulvinar elementum integer enim neque volutpat. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Purus sit amet luctus venenatis lectus magna. Nam libero justo laoreet sit amet. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Donec ultrices tincidunt arcu non sodales neque sodales ut. Magna eget est lorem ipsum dolor sit. Eu sem integer vitae justo eget. Integer vitae justo eget magna fermentum iaculis eu non diam.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
