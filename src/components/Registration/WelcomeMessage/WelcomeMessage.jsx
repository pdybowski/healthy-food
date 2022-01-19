import React from 'react';
import Button from 'react-bootstrap/Button';

const WelcomeMessage = ({ title, text, buttonAction, onClickEvent }) => {
    return (
        <div className='flex flex-column justify-content-around align-items-center'>
            <h2>{title}</h2>
            <p>{text}</p>
            <Button onClick={onClickEvent}>{buttonAction}</Button>
        </div>
    );
};

export default WelcomeMessage;
