import React from 'react'
import './TrideBanner.css'

export default function TrideBanner() {
    return (
        <div>
            <div className='gorjanaTrade1Web'>
                <img src='https://www.gorjana.com/cdn/shop/files/Hero_D-2_13.jpg?v=1701993381&width=2800' className='gorjanaFaveImage' />
                <div className='gorjanaTrideBox'>
                    <p style={{
                        fontFamily: 'Freight Big Pro,serif',
                        fontSize: '60px',
                        color: 'white',
                        fontWeight: 400
                    }}>Tried and True </p>
                    <p style={{
                        fontFamily: 'Freight Big Pro,serif',
                        fontSize: '21px',
                        color: 'white',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        marginTop: '-30px',
                        fontWeight: 300
                    }}>Easy-to-style layers you'll love. </p>
                    <p className='gorjanaFavBoxLink'>Shop File Jewelry</p>
                </div>
            </div>

            <div className='gorjanaTrade1Mobile'>
                <img src='https://www.gorjana.com/cdn/shop/files/Hero_M-2_17.jpg?v=1701993404&width=750' className='gorjanaFaveImage' />
                <div className='gorjanaTrideBoxMobile'>
                    <p style={{
                        fontFamily: 'Freight Big Pro,serif',
                        fontSize: '60px',
                        color: 'white',
                        fontWeight: 400
                    }}>Tried and True </p>
                    <p style={{
                        fontFamily: 'Freight Big Pro,serif',
                        fontSize: '18px',
                        color: 'white',
                        marginTop: '-20px',
                        fontWeight: 300
                    }}>Easy-to-style layers you'll love. </p>
                    <p className='gorjanaFavBoxLinkMobile'>Shop File Jewelry</p>
                </div>
            </div>

            
        </div>
    )
}
