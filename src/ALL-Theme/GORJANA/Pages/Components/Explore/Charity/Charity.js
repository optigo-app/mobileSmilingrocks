import React from 'react'
import './Charity.css'
import Header from '../../home/Header/Header'
import Footer from '../../home/Footer/Footer'

export default function Charity() {
    return (
        <div style={{ fontFamily: 'Freight Big Pro,serif' }}>
            <Header />
            <div className='gorCharityMain'>
                <p style={{ fontSize: '50px', textAlign: 'center', fontFamily: 'Freight Big Pro,serif', fontStyle: 'italic' }}>Giving Back</p>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <p className='gorGivinTopDesc1'>Your support has allowed us the privilege to partner with a number of national and local communities and non profit organizations.</p>
                    <p className='gorGivinTopDesc2'>It is with sincere gratitude that we get to participate with these charities, amplify their messages and support their efforts in serving those in need.</p>
                </div>

                <div className='gorCharityImageBox'>
                    <div className='gorCharityImageBox1'>
                        <img src='https://www.gorjana.com/cdn/shop/files/Charity_LP-Gorjana_Jason_7bcd9ddb-7ed9-4d49-96db-a209bc01b9b4.jpg?v=1689032681&%3Bwidth=1200&em-format=avif&em-width=1200' className='gorCharityImageBox1Img' />
                    </div>
                    <div className='gorCharityImageBox2'>
                        <p style={{ fontSize: '30px', fontFamily: 'Freight Big Pro,serif' }}>Community</p>
                        <p>As co-founders, parents and members of the Laguna Beach community, Gorjana and Jason Reidel have always valued community and the power of paying it forward.</p>
                        <p>Since the beginning, giving back has always been a part of the gorjana brand. As a company with a predominantly female customer base, we're proud to support organizations that contribute to the needs of women, children and families. We are grateful to support community-oriented, local nonprofit organizations such as PTAs, schools, hospitals and sports teams via donations and auction items.</p>
                        <p>If you are ever interested in an auction item or donation for your nonprofit, please fill out our Donation Request Form. While we do our best to support as many nonprofits as we can, please understand that filling out the below form does not guarantee a donation. If you are a donation recipient, our charity team will contact you directly via email.</p>
                        <p>Request A Donation</p>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
                    <p style={{ textAlign: 'center', fontSize: '55px', fontFamily: 'Freight Big Pro,serif', fontStyle: 'italic' }}>Our Partners</p>
                    <p className='gorCharityOurPa1'>We feel privileged to work with organizations that look to bring more awareness, attention and action to worthy causes that directly affect so many women, mothers, sisters, daughters and their families.</p>
                    <p className='gorCharityOurPa2'>On an annual basis, in collaboration with our generous customers, our team actively supports <a href="https://www.bcrf.org/" title="https://www.bcrf.org/"><strong>The Breast Cancer Research Foundation</strong></a>, <a href="https://baby2baby.org/" title="https://baby2baby.org/"><strong>Baby2Baby,</strong></a> <a href="https://dressforsuccess.org/about-us/stories/" title="https://dressforsuccess.org/"><strong>Dress For Success</strong></a>, <a href="https://www.toysfortots.org/" title="https://www.toysfortots.org/"><strong>Toys For Tots</strong></a> and <a href="https://www.kinf.org/" title="https://www.kinf.org/"><strong>Kids In Need Foundation</strong></a>.</p>

                </div>

                <div style={{  marginTop: '50px', textAlign: 'center' }}>
                    <img src='https://www.gorjana.com/cdn/shop/files/bcrf_1.jpg?v=1689113899&%3Bwidth=342&em-format=avif&em-width=342' className='gorAboutFooterIamge' />
                    <img src='https://www.gorjana.com/cdn/shop/files/baby2baby_1.jpg?v=1689113892&%3Bwidth=342&em-format=avif&em-width=342' className='gorAboutFooterIamge' />
                    <img src='https://www.gorjana.com/cdn/shop/files/dressforsuccess_1.jpg?v=1689113885&%3Bwidth=342&em-format=avif&em-width=342' className='gorAboutFooterIamge' />
                    <img src='https://www.gorjana.com/cdn/shop/files/toysfortots_1.jpg?v=1689113878&%3Bwidth=342&em-format=avif&em-width=342' className='gorAboutFooterIamge' />
                    <img src='https://www.gorjana.com/cdn/shop/files/kidsinneed_1.jpg?v=1689113868&%3Bwidth=342&em-format=avif&em-width=342' className='gorAboutFooterIamge' />
                </div>
            </div>
            <div style={{ marginTop: '60px' }}>
                <Footer />
            </div>
        </div>
    )
}
