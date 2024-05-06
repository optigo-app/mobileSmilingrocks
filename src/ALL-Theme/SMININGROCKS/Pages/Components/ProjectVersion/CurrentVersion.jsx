import React from 'react';

const CurrentVersion = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card w-50">
                <div className="card-body text-center">
                    <span style={{ fontSize: '20px', color: '#7D7f85', fontWeight:'500' }}>Current Version : </span>
                    <span style={{ fontSize: '20px', color: '#7D7f85' }}>R66B1.V6.020520240342</span>
                </div>
            </div>
        </div>
    );
};

export default CurrentVersion;
