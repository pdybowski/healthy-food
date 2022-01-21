import React from 'react';

export function Tags({ tagList }) {
    return (
        <div className='d-flex flex-wrap'>
            {tagList.map((tag) => {
                return (
                    <span key={tag} className='badge bg-primary my-1 me-1'>
                        {tag}
                    </span>
                );
            })}
        </div>
    );
}
