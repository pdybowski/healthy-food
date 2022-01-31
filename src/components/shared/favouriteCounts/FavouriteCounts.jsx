import React from 'react';

function FavouriteCounts({ children }) {
    return (
        <div
            style={{
                position: 'absolute',
                padding: '0px',
                top: '1rem',
                right: '3rem',
            }}
        >
            {children}
        </div>
    );
}

export default FavouriteCounts;
