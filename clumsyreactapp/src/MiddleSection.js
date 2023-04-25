import React from 'react';

function MiddleSection() {
    return (
        <div className="section">
            <h1>Middle Section</h1>
            <img src={process.env.PUBLIC_URL + '/clumsyreactapp/public/picture.png'} alt="A picture" />
        </div>
    );
}

export default MiddleSection;
