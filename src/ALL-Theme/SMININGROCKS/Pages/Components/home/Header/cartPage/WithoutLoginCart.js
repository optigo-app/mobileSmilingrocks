import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function WithoutLoginCart() {

    const navigation = useNavigate();
    
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "250px 0px",
                }}
            >
                <button style={{
                    height: '40px',
                    width: '250px',
                    backgroundColor: '#e1e1e1',
                    border: 'none',
                    outline: 'none',
                    fontSize: '18px',
                    fontWeight : 500,
                    borderRadius: '5px',
                    marginTop: '5px'
                }} onClick={() => navigation('/LoginOption')}>Login & Continue Shopping</button>
            </div>
        </div>
    )
}
