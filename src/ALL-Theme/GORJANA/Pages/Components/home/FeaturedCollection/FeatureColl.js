import React from 'react'
import './FeatureColl.css'

export default function FeatureColl() {
    return (
        <div>
            <p className='gorFutureMainTitleMobile'>Featured</p>
            <div className='gorFetureMain'>
                <div className='gorFetureBox1'>
                    <div>
                        <p className='gorFutureMainTitleWeb'>Featured</p>
                        <img src='https://www.gorjana.com/cdn/shop/files/OffMonth-MasonryGrid-Birthstones.jpg?v=1701379789&%3Bwidth=1200&em-format=avif' className='gorFutureBox1Images' />
                        <p className='gorFutureBoxDesc'>Birthstones</p>
                    </div>
                    <div className='gorFetureBox1Sub'>
                        <img src='https://www.gorjana.com/cdn/shop/files/Feature-Zoey_1.jpg?v=1700154326&%3Bwidth=700&em-format=avif' className='gorFutureBox1Images' />
                        <p className='gorFutureBoxDesc'>Chain Links</p>
                    </div>
                </div>
                <div className='gorFetureBox2'>
                    <div>
                        <img src='https://www.gorjana.com/cdn/shop/files/MasonryGrid-GiftsThatGlitter_1.jpg?v=1701383338&%3Bwidth=1200&em-format=avif' className='gorFetureBox2Images' />
                        <p className='gorFutureBoxDesc'>Holiday Party Layers</p>
                    </div>
                    <div className='gorFetureBox2Sub'>
                        <img src='https://www.gorjana.com/cdn/shop/files/OffMonth-MasonryGrid-Layered-Sets.jpg?v=1701379896&%3Bwidth=1200&em-format=avif' className='gorFetureBox2Images' />
                        <p className='gorFutureBoxDesc'>Layered Sets</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
