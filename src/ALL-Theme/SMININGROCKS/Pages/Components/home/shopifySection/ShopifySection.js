import React from 'react'
import image1 from '../../../assets/shopifysection/image1.webp'
import image2 from '../../../assets/shopifysection/image2.webp'
import image3 from '../../../assets/shopifysection/iamge3.webp'
import image4 from '../../../assets/staticImg/founder.jpg'
import image5 from '../../../assets/shopifysection/image5.webp'
import image6 from '../../../assets/shopifysection/image6.webp'
import './shopifySection.css'

export default function ShopifySection() {

    const dataJSON = [
        {
            id: 0,
            Title: 'Haute Couture',
            Decription: 'Revealing the beauty of lab grown diamonds in high jewelry. From the house of inspired designers, each bringing a unique taste in design and excellent quality in craftsmanship. A preview of our stunning atelier designs captivating every moment in time.',
            Link: 'DISCOVER MORE',
            images: "https://media.istockphoto.com/id/1180931397/photo/alluring-woman-dressed-in-a-posh-jewelry-set-of-necklace-ring-and-earrings-elegant-evening.webp?b=1&s=170667a&w=0&k=20&c=b9uxuFgAhUT72UeOPoth99uZDZXq2EZnDksRWqKeGdc="
        },
        {
            id: 1,
            Title: 'Carbon For Carbon',
            Decription: 'Sonasons has launched Carbon For Carbon campaign and is working with charity partners to plant trees and improve the environment impact of unnecessary carbon usage.',
            Link: 'LISTEN NOW',
            images: "https://media.istockphoto.com/id/1340519929/photo/concept-depicting-the-issue-of-carbon-dioxide-emissions-and-its-impact-on-nature-in-the-form.jpg?s=612x612&w=0&k=20&c=6u0Q-VfW1YHp1qPRPXw-_zR3VlyZX-8xGuX6lWbd-rA="
        },
        {
            id: 2,
            Title: 'Sonasons with Celebrities at Red Carpet',
            Decription: 'Celebrities and Top Influencers wearing sustainable lab-grown diamonds jewelry',
            Link: 'DISCOVER',
            images: "https://cdn.shopify.com/s/files/1/0217/9316/files/cannes-2016-day-1-bulgari-naomi-watts.jpg__760x0_q80_crop-scale_subsampling-2_upscale-false_large.jpg?10570023857861206725"
        },
        {
            id: 3,
            Title: 'Meet The Founders',
            Decription: 'The founders of Sonasons have a mission to spread smiles through supporting different charity organizations.',
            Link: 'DISCOVER',
            images: image4
        },
        {
            id: 4,
            Title: 'Featured In',
            Decription: 'Check out the press coverage of Sonasons by top media in the world',
            Link: 'DISCOVER',
            images: "https://qodeinteractive.com/magazine/wp-content/uploads/2019/11/How-to-Add-Featured-Images-to-Your-WordPress-Posts-Featured.jpg"
        },
        {
            id: 5,
            Title: 'Listen To Sonasons Podcast',
            Decription: 'Tune into Sonasons podcast and join the Smiling Community. Here we will share thoughts with guest speakers on jewelry industry and sustainability.',
            Link: 'LISTEN NOW',
            images: "https://media.istockphoto.com/id/1138180728/vector/vector-of-a-smart-phone-and-headphones.jpg?s=612x612&w=0&k=20&c=XKUfukfHOaBOBIcvwBCOsJ9wPJYtgCcAaCRzDFt7kks="
        },
    ]
    return (
        <div>
            {
                dataJSON.map((data, i) => (
                    <div>
                        <div className='shopifyMain'>
                            <div className='shopifyDesc'>
                                <p className='shopifyTitle'>{data.Title}</p>
                                <p className='shopifyDescription'>{data.Decription}</p>
                                <p style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '1px', color: '#7d7f85' }}>{data.Link}</p>
                            </div>
                            <div className='shopifyMainImage'>
                                <img src={data.images} style={{ height: '100%',width:'100%'}} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
