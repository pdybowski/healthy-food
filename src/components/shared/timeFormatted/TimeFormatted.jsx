import React from 'react';

const TimeFormatted = ({ minutes }) => {
    return (
        <>
            {minutes >= 60 && minutes % 60 !== 0 ? (
                <span>
                    {Math.floor(minutes / 60)} hr {minutes % 60} mins
                </span>
            ) : minutes >= 60 && minutes % 60 === 0 ? (
                <span>{Math.floor(minutes / 60)} hr</span>
            ) : (
                <span>{minutes} mins</span>
            )}
        </>
    );
};

export default TimeFormatted;
