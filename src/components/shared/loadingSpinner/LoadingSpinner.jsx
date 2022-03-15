import React from 'react';
import './loadingSpinner.css';

const LoadingSpinner = (props) => {
    return <div className='loader' style={{ color: props.color }}></div>;
};

export default LoadingSpinner;

//  <LoadingSpinner color='#f2a22c' />   // in this way you can use this component with any color 

