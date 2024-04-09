import React from 'react'

export default function WithoutLoginCart() {
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "150px 0px",
                }}
            >
                <p
                    style={{
                        margin: "0px",
                        fontSize: "20px",
                        fontWeight: 500,
                    }}
                >
                    Please First Login...
                </p>
            </div>
        </div>
    )
}
