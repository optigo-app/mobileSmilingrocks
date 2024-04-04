import React, { useState } from 'react'
import './InstaSection.css'
import { FaInstagram } from "react-icons/fa";
import { Box, Modal } from '@mui/material';
import { IoMdClose } from "react-icons/io";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

export default function InstaSection() {

    const InstaImages = [
        {
            id: 1,
            iamge: 'https://media-library.stackla.com/10/shopify-1538490427/2023-12/6579ede364a945a463e6a735/828d0220-99df-11ee-a3a6-7b12bc7e3933.jpg?format=webp'
        },
        {
            id: 2,
            iamge: 'https://media-library.stackla.com/10/shopify-1538490427/2023-12/6579ede3f56d8214b0aae1fb/8462ac80-99df-11ee-8d11-b3ff59c6302f.jpg?format=webp'
        },
        {
            id: 3,
            iamge: 'https://media-library.stackla.com/10/shopify-1538490427/2023-12/6579ede364a945a463e6a736/84801f90-99df-11ee-a4a8-0bb3a85f5541.jpg?format=webp'
        },
        {
            id: 4,
            iamge: 'https://media-library.stackla.com/10/shopify-1538490427/2023-12/6579ede364a945a463e6a737/84654490-99df-11ee-b0ce-b78cd6615212.jpg?format=webp'
        },
        {
            id: 5,
            iamge: 'https://media-library.stackla.com/10/shopify-1538490427/2023-12/657892984528c10b7bb7fc84/80d2f720-9910-11ee-9092-e3ed476e4383.jpg?format=webp'
        },

        {
            id: 6,
            iamge: 'https://media-library.stackla.com/10/shopify-1538490427/2023-12/6578e9d47892d5abf60635de/7fa9bbc0-9944-11ee-a79b-53ded4dd0460.jpg?format=webp'
        },
        {
            id: 7,
            iamge: 'https://media-library.stackla.com/10/shopify-1538490427/2023-12/6579ede364a945a463e6a735/828d0220-99df-11ee-a3a6-7b12bc7e3933.jpg?format=webp'
        },
        {
            id: 8,
            iamge: 'https://media-library.stackla.com/10/shopify-1538490427/2023-12/6579ede3f56d8214b0aae1fc/84877290-99df-11ee-af96-eb84dfa3004e.jpg?format=webp'
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,

        // prevArrow: false, 
        // nextArrow: false,
    };

    const [open, setOpen] = useState(false);
    const [openImage, setOpenImage] = useState('https://media-library.stackla.com/10/shopify-1538490427/2023-12/6578e9d47892d5abf60635de/7fa9bbc0-9944-11ee-a79b-53ded4dd0460.jpg?format=webp')
    const handleOpen = (image) => {
        setOpenImage(image)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div style={{ filter: open && 'blur(10px)' }}>
            <div style={{ marginBlock: '100px' }}>
                <p className='gorInstaTitle'>@gorjana</p>
                <div className='gorInstaMain'>
                    {
                        InstaImages.map((data, index) =>
                            <>
                                <div key={index} className='groInstaImagesMain'>
                                    <img src={data.iamge} className='groInstaImages' onClick={() => handleOpen(data.iamge)} />
                                    <div className='gorInstaIconeMain'>
                                        <FaInstagram style={{ color: 'white', height: '25px', width: '25px' }} />
                                    </div>
                                </div>
                            </>
                        )
                    }

                    {/* <div className='groInstaImagesMain'>
                        <img src='https://media-library.stackla.com/10/shopify-1538490427/2023-12/6578e9d47892d5abf60635de/7fa9bbc0-9944-11ee-a79b-53ded4dd0460.jpg?format=webp' className='groInstaImages' />
                        <div className='gorInstaIconeMain'>
                            <FaInstagram style={{ color: 'white', height: '25px', width: '25px' }} />
                        </div>
                    </div>
                    <div className='groInstaImagesMain'>
                        <img src='https://media-library.stackla.com/10/shopify-1538490427/2023-12/6577a388f4a19ea9810c9ad7/0e6f4e10-9882-11ee-a36d-71a09dbf5f20.jpg?format=webp' className='groInstaImages' />
                        <div className='gorInstaIconeMain'>
                            <FaInstagram style={{ color: 'white', height: '25px', width: '25px' }} />
                        </div>
                    </div>
                    <div className='groInstaImagesMain'>
                        <img src='https://media-library.stackla.com/10/shopify-1538490427/2023-12/6577a388f4a19ea9810c9ad8/0e6fea50-9882-11ee-a36d-71a09dbf5f20.jpg?format=webp' className='groInstaImages' />
                        <div className='gorInstaIconeMain'>
                            <FaInstagram style={{ color: 'white', height: '25px', width: '25px' }} />
                        </div>
                    </div>
                    <div className='groInstaImagesMain'>
                        <img src='https://media-library.stackla.com/10/shopify-1538490427/2023-12/6578e9d47892d5abf60635de/7fa9bbc0-9944-11ee-a79b-53ded4dd0460.jpg?format=webp' className='groInstaImages' />
                        <div className='gorInstaIconeMain'>
                            <FaInstagram style={{ color: 'white', height: '25px', width: '25px' }} />
                        </div>
                    </div>
                    <div className='groInstaImagesMain'>
                        <img src='https://media-library.stackla.com/10/shopify-1538490427/2023-12/6578e9d47892d5abf60635de/7fa9bbc0-9944-11ee-a79b-53ded4dd0460.jpg?format=webp' className='groInstaImages' />
                        <div className='gorInstaIconeMain'>
                            <FaInstagram style={{ color: 'white', height: '25px', width: '25px' }} />
                        </div>
                    </div>
                    <div className='groInstaImagesMain'>
                        <img src='https://media-library.stackla.com/10/shopify-1538490427/2023-12/6577a388f4a19ea9810c9ad7/0e6f4e10-9882-11ee-a36d-71a09dbf5f20.jpg?format=webp' className='groInstaImages' />
                        <div className='gorInstaIconeMain'>
                            <FaInstagram style={{ color: 'white', height: '25px', width: '25px' }} />
                        </div>
                    </div>
                    <div className='groInstaImagesMain'>
                        <img src='https://media-library.stackla.com/10/shopify-1538490427/2023-12/6577a388f4a19ea9810c9ad8/0e6fea50-9882-11ee-a36d-71a09dbf5f20.jpg?format=webp' className='groInstaImages' />
                        <div className='gorInstaIconeMain'>
                            <FaInstagram style={{ color: 'white', height: '25px', width: '25px' }} />
                        </div>
                    </div> */}
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                sx={{
                    outline: 'none',
                    border: 'none',
                    '& .custom-modal': { // Use a more specific selector for the modal and its children
                        border: 'none',
                    },
                }}
                className="custom-modal"
            >
                <Box component={'div'} className='gorInstagramPopup'>

                    <div className='gorinstapopupMain'>

                        <div className='gorInstagramPopupImage'>
                            <img src={openImage} className='gorinstapopupImg' />
                        </div>
                        <div className='gorInstagramPopupDesc'>
                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <IoMdClose onClick={handleClose} style={{ height: '40px', borderRadius: '40px', color: 'white', backgroundColor: '#4d5469', padding: '7px', width: '40px', marginTop: '-15px', marginRight: '-15px', cursor: 'pointer' }} />
                            </div>

                            <div style={{ height: '15.5rem', borderBottom: '1px solid #e4e6ec', marginInline: '20px' }}>
                                <img data-v-42173558="" src="https://content-cdn.stackla.com/3704/6579ede364a945a463e6a736/avatar?width=52&amp;height=52&amp;crop=center" width="52" height="52" />@gorjana

                                <p style={{ marginTop: '10px' }}>13G</p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginInline: '20px' }}>
                                <p>Paseo Shimmer Cuff</p>
                                <p>$110.00</p>
                            </div>
                            <div style={{ marginInline: '10px' }}>
                                <Slider {...settings} >

                                    <div className='gorInstaSliderImageMain'>
                                        <div className='gorInstaSliderImageBox'>
                                            <img src='https://cdn.shopify.com/s/files/1/0015/3849/0427/files/1611-3025-02-G_1_large.jpg?v=1699552645' className='gorInstaSliderImage' />
                                        </div>
                                        <div className='gorInstaSliderImageBox'>
                                            <img src='	https://cdn.shopify.com/s/files/1/0015/3849/0427/files/226-3005-G_1_large.jpg?v=1698767137' className='gorInstaSliderImage' />
                                        </div>
                                        <div className='gorInstaSliderImageBox'>
                                            <img src='https://cdn.shopify.com/s/files/1/0015/3849/0427/files/227-001-G_1_9c7c56d7-a2be-4398-874e-761282984bc9_large.jpg?v=1690277944' className='gorInstaSliderImage' />
                                        </div>
                                    </div>

                                    <div className='gorInstaSliderImageMain'>

                                        <div className='gorInstaSliderImageBox'>
                                            <img src='https://cdn.shopify.com/s/files/1/0015/3849/0427/files/2311-100-61-G_1_ac6ba43d-3865-4d62-af92-0d956aac6e7a_large.jpg?v=1699244864' className='gorInstaSliderImage' />
                                        </div>
                                        <div className='gorInstaSliderImageBox'>
                                            <img src='https://cdn.shopify.com/s/files/1/0015/3849/0427/products/COR23-PROopt02211-103-G-001_large.jpg?v=1692914964' className='gorInstaSliderImage' />
                                        </div>
                                        <div className='gorInstaSliderImageBox'>
                                            <img src='https://cdn.shopify.com/s/files/1/0015/3849/0427/products/2211-203-G_1_large.jpg?v=1690277926' className='gorInstaSliderImage' />
                                        </div>
                                    </div>
                                </Slider>

                                <button style={{
                                    border: 'none',
                                    backgroundColor: '#4d5469',
                                    color: 'white',
                                    height: '50px',
                                    width: '95%',
                                    marginInline: '10px',
                                    fontSize: '15px',
                                    fontWeight: 500,
                                    marginTop: '50px'
                                }}>BUY NOW</button>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}
