import React from 'react'
import './Payment.css'


const cartData = [
    {
        id: '1',
        name: 'Brenda',
        ringModel: 'Cushion SI1-J Rings',
        Wight: '4.098 gm',
        Size: '5',
        Qty: '1',
        DeliveryBy: 'Delivery by - 25 Nov',
        oldPrice: '10,000',
        newPrice: '9,99,888',
        save: '12,122,2333',
        imageUrl: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/ARA1183/ARA1183-1-crop-c0-5__0-5-540x540-70.jpg'
    },
    {
        id: '2',
        name: 'Brenda',
        ringModel: 'Cushion SI1-J Rings',
        Wight: '4.098 gm',
        Size: '5',
        Qty: '1',
        DeliveryBy: 'Delivery by - 25 Nov',
        oldPrice: '10,000',
        newPrice: '9,99,999',
        save: '12,122,2333',

        imageUrl: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/ARA1183/ARA1183-1-crop-c0-5__0-5-540x540-70.jpg'
    },

    {
        id: '3',
        name: 'Brenda',
        ringModel: 'Cushion SI1-J Rings',
        Wight: '4.098 gm',
        Size: '5',
        Qty: '1',
        DeliveryBy: 'Delivery by - 25 Nov',
        oldPrice: '10,000',
        newPrice: '9,99,999',
        save: '12,122,2333',
        imageUrl: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/ARA1183/ARA1183-1-crop-c0-5__0-5-540x540-70.jpg'
    },
    {
        id: '4',
        name: 'Brenda',
        ringModel: 'Cushion SI1-J Rings',
        Wight: '4.098 gm',
        Size: '5',
        Qty: '1',
        DeliveryBy: 'Delivery by - 25 Nov',
        oldPrice: '10,000',
        newPrice: '9,99,999',
        save: '1',
        imageUrl: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/ARA1183/ARA1183-1-crop-c0-5__0-5-540x540-70.jpg'
    },
    {
        id: '5',
        name: 'Brenda',
        ringModel: 'Cushion SI1-J Rings',
        Wight: '4.098 gm',
        Size: '5',
        Qty: '1',
        DeliveryBy: 'Delivery by - 25 Nov',
        oldPrice: '10,000',
        newPrice: '9,999',
        save: '1',
        imageUrl: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/ARA1183/ARA1183-1-crop-c0-5__0-5-540x540-70.jpg'
    },
    {
        id: '6',
        name: 'Brenda',
        ringModel: 'Cushion SI1-J Rings',
        Wight: '4.098 gm',
        Size: '5',
        Qty: '1',
        DeliveryBy: 'Delivery by - 25 Nov',
        oldPrice: '10,000',
        newPrice: '9,999',
        save: '1',
        imageUrl: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/ARA1183/ARA1183-1-crop-c0-5__0-5-540x540-70.jpg'
    },

    {
        id: '7',
        name: 'Brenda',
        ringModel: 'Cushion SI1-J Rings',
        Wight: '4.098 gm',
        Size: '5',
        Qty: '1',
        DeliveryBy: 'Delivery by - 25 Nov',
        oldPrice: '10,000',
        newPrice: '9,999',
        save: '1',
        imageUrl: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/ARA1183/ARA1183-1-crop-c0-5__0-5-540x540-70.jpg'
    }, {
        id: '8',
        name: 'Brenda',
        ringModel: 'Cushion SI1-J Rings',
        Wight: '4.098 gm',
        Size: '5',
        Qty: '1',
        DeliveryBy: 'Delivery by - 25 Nov',
        oldPrice: '10,000',
        newPrice: '9,999',
        save: '1',
        imageUrl: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/ARA1183/ARA1183-1-crop-c0-5__0-5-540x540-70.jpg'
    },
    {
        id: '9',
        name: 'Brenda',
        ringModel: 'Cushion SI1-J Rings',
        Wight: '4.098 gm',
        Size: '5',
        Qty: '1',
        DeliveryBy: 'Delivery by - 25 Nov',
        oldPrice: '10,000',
        newPrice: '9,999',
        save: '1',
        imageUrl: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/ARA1183/ARA1183-1-crop-c0-5__0-5-540x540-70.jpg'
    },
    {
        id: '10',
        name: 'Brenda',
        ringModel: 'Cushion SI1-J Rings',
        Wight: '4.098 gm',
        Size: '5',
        Qty: '1',
        DeliveryBy: 'Delivery by - 25 Nov',
        oldPrice: '10,000',
        newPrice: '9,999',
        save: '1',
        imageUrl: 'https://d3d5st4bexye3p.cloudfront.net/__sized__/products/ARA1183/ARA1183-1-crop-c0-5__0-5-540x540-70.jpg'
    },
]
export default function Payment() {
    return (
        <div>
            <header className="checkout__header" style={{
                background: 'white', borderBottom: '1px solid #f6f6f6'
            }} >
                <div style={{ padding: "10px 20px" }}>
                    <img href="/" src="https://d3rodw1h7g0i9b.cloudfront.net/images/ornaz_logo.png" />
                    <h4 style={{ float: 'right', margin: 0, fontSize: '1.3rem' }}>Payment</h4>
                </div>
            </header>
            <div className='paymentMain'>
                <div className='topBar'>
                    <p style={{ marginBottom: "2rem", fontSize: '1.4rem' }}>Pay for order OR894808</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', height: '120px' }} className='mobilePaymentTopBar'>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <label className='radioButton'><input type='radio' name='payment' />Pre-Payment (25%)</label>
                            <label className='radioButton'><input type='radio' name='payment' />Payment</label>
                        </div>
                        <button className="pay_button">PAY NOW
                            <span style={{ fontSize: '13px', letterSpacing: 0 }}>(99999)</span>
                        </button>
                    </div>
                    <div className='mainPaymentCart'>
                        {
                            cartData.map((data, index) =>
                                <div className='paymentCart' >
                                    <img src={data.imageUrl} className='cartImage' alt='...' style={{ padding: '0.8em', margin: '10px', }} />
                                    <div style={{ marginLeft: '10px', width: '100%', display: 'flex', alignSelf: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <p className='cartDetails'>{data.name}</p>
                                            <p className='cartDetails'>{data.ringModel}</p>
                                            <p className='cartDetails'>Wight:{data.Wight}</p>
                                            <p className='cartDetails'>Size:{data.Size}</p>&nbsp;&nbsp;&nbsp;
                                        </div>
                                        <div className='cartDetails' style={{ alignSelf: 'center' }}>
                                            <p className='cartDetails' >Qty:{data.Qty}</p>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <div style={{ display: 'flex', margin: '15px' }}>
                                                <p className='cartDetails' style={{ fontSize: '1rem', marginRight: '10px' }}>₹{data.newPrice}</p>
                                                <p className='cartDetails' style={{ color: 'red', fontSize: '1rem' }}><del>₹{data.oldPrice}</del></p>
                                            </div>
                                            <p className='cartDetails' style={{ fontSize: '0.8rem', color: 'green', position: 'absolute', right: '12px', marginTop: '40px' }}>Save: ₹{data.save}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                    <div className='mobileMainPaymentCart'>
                        {
                            cartData.map((data, index) =>
                                <div className='mobilePaymentCart' >
                                    <img src={data.imageUrl} className='mobilePaymentCartImage' alt='...' />
                                    <div style={{ marginLeft: '10px', width: '100%', display: 'flex', alignSelf: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column' }} className='mobileCartPayment'>
                                            <div style={{ marginLeft: '10px' }}>
                                                <p className='cartDetails' style={{ fontSize: '20px', fontWeight: 600 }}>{data.name}</p>
                                                <div style={{ display: 'flex', }}>
                                                    <p className='cartDetails' style={{ fontSize: '1rem', color: 'black', fontWeight: 500 }}>₹{data.newPrice}</p>&nbsp;&nbsp;&nbsp;
                                                    <p className='cartDetails' style={{ color: 'black', fontSize: '0.9rem' }}><del>₹{data.oldPrice}</del></p>
                                                </div>
                                                <p className='cartDetails' style={{ color: 'green', fontSize: '0.9rem' }}>{data.DeliveryBy}</p>
                                                <p className='cartDetails' style={{ fontSize: '14px' }}>Ring Size - {data.Size}</p>
                                                {/* &nbsp;&nbsp;&nbsp; */}
                                                <div style={{ display: 'flex', }}>
                                                    <p className='cartDetails'>{data.Wight}</p>
                                                    <p className='cartDetails'>{data.ringModel}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>







                    <div style={{
                        border: '1px solid #D5D9D9',
                        marginTop: '15px',
                        borderRadius: '10px',
                        padding: '10px'
                    }}>
                        <div className='totalData bold' style={{ fontSize: '0.9rem' }}>
                            <p style={{ marginTop: '5px', fontSize: '1rem', fontWeight: 500 }}>SubTotal</p>
                            <p style={{ marginTop: '5px', fontSize: '1rem', fontWeight: 700 }}>₹3,33,33,235</p>
                        </div>
                        <div className='totalData'>
                            <p style={{ fontSize: '1rem', marginTop: '5px' }}>Shipping</p>
                            <p style={{ fontSize: '1rem', color: '#44D4D5', marginTop: '5px' }}>₹0.00(FREE)</p>
                        </div>
                        <div className='totalData bold' style={{ fontSize: '0.9rem' }}>
                            <p style={{ marginTop: '5px', fontSize: '1rem' }}>TOTAL</p>
                            <p style={{ marginTop: '5px', fontSize: '1rem', fontWeight: 700 }}>₹75,519.50</p>
                        </div>
                        <div className='totalData' style={{ fontSize: '0.8rem' }}>
                            <p style={{ marginTop: '5px', fontSize: '1rem' }}>Tax (Inclusive)</p>
                            <p style={{ marginTop: '5px', fontSize: '1rem', fontWeight: 700 }}>₹75,519.50</p>
                        </div>
                    </div>
                </div>

            </div>
            <div style={{ textAlign: 'center', marginTop: '30px', borderTop: '1px solid #cecece', }}>
                <p style={{ fontSize: '1rem', fontWeight: '400', margin: '10px' }}>A-26/5, 2nd floor, DLF city phase-1, sector-28, Near DLF Mega Mall, Golf Course Road, Gurgaon, Haryana 122002</p>
                <p style={{ fontSize: '1rem', fontWeight: '400', margin: '0px' }}>@2023 ORNAZ. All Rights Reserved</p>
            </div>
        </div >
    )
}
