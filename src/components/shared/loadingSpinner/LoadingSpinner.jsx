import React from 'react';
import './loadingSpinner.css';

const LoadingSpinner = (props) => {
    return <div className='loader' style={props.style}></div>;
};

export default LoadingSpinner;

// <LoadingSpinner style={loadingStyles} />   // in this way you can use this component with any styles

