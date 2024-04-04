import React from 'react'
import './Favorites.css'

export default function Favorites() {
    return (
        <div>
            <div className='gorjanaFave1web'>
                <img src='https://www.gorjana.com/cdn/shop/files/Hero_D-2_12.jpg?v=1701379010&width=2800' className='gorjanaFaveImage' />
                <div className='gorjanaFaveBox'>
                    <p style={{
                        fontFamily: 'Freight Big Pro,serif',
                        fontSize: '60px',
                        color: 'white',
                        fontWeight: 400,

                    }}>
                        Forever Favorites
                    </p>
                    <p style={{
                        fontFamily: 'Freight Big Pro,serif',
                        fontSize: '21px',
                        color: 'white',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        marginTop: '-30px',
                        fontWeight: 300
                    }}>Fine jewelry for every style and occasion.</p>
                    <p className='gorjanaFavBoxLink'>Shop File Jewelry</p>
                </div>
            </div>
            <div className='gorjanaFave1Mobile'>
                <img src='https://www.gorjana.com/cdn/shop/files/Hero_M-2_16.jpg?v=1701379034&width=750' className='gorjanaFaveImageMobile' />
                <div className='gorjanaFaveBoxMobile'>
                    <p style={{
                        fontFamily: 'Freight Big Pro,serif',
                        fontSize: '40px',
                        color: 'white',
                        fontWeight: 400,
                        textAlign: 'center'

                    }}>
                        Forever Favorites
                    </p>
                    <p style={{
                        fontFamily: 'Freight Big Pro,serif',
                        fontSize: '18px',
                        color: 'white',
                        marginTop: '-20px',
                        fontWeight: 300
                    }}>Fine jewelry for every style and occasion.</p>
                    <p className='gorjanaFavBoxLinkMobile'>Shop File Jewelry</p>
                </div>
            </div>


            <div className='gorjanaFave2web'>
                <img src='https://www.gorjana.com/cdn/shop/files/SubStory-D_7_303500df-182d-4edd-8eff-a93a1eb284ac.jpg?v=1699567448&width' className='gorjanaFaveImage' />
                <div className='gorjanaFaveBox2'>
                    <p style={{
                        fontFamily: 'Freight Big Pro,serif',
                        fontSize: '60px',
                        color: 'white',
                        fontWeight: 400
                    }}>Holiday Gift Guide</p>
                    <p style={{
                        fontFamily: 'Freight Big Pro,serif',
                        fontSize: '21px',
                        color: 'white',
                        marginTop: '-30px'
                    }}>Find something for everyone on your list, including yourself.</p>
                    <p className='gorjanaFavBoxLink2'>Shop The Gift Guide</p>
                </div>
            </div>
            <div className='gorjanaFave2Mobile'>
                <img src='https://www.gorjana.com/cdn/shop/files/SubStory_M_3.jpg?v=1699487597&width=750' className='gorjanaFaveImageMobile' />
                <div className='gorjanaFaveBox2Mobile'>
                    <p style={{
                        fontFamily: 'Freight Big Pro,serif',
                        fontSize: '40px',
                        color: 'white',
                        fontWeight: 400,
                        textAlign: 'center'

                    }}>Holiday Gift Guide</p>
                    <p  style={{
                        fontFamily: 'Freight Big Pro,serif',
                        fontSize: '18px',
                        color: 'white',
                        marginTop: '-20px',
                        textAlign:'center',
                        fontWeight: 300
                    }}>Find something for everyone on your list, including yourself.</p>
                    <p className='gorjanaFavBoxLink2Mobile'>Shop The Gift Guide</p>
                </div>
            </div>



        </div>
    )
}
