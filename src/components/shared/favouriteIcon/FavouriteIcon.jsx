import React, { useEffect, useState } from 'react';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function FavouriteIcon({ isFavourite, isLoggedIn, isRecommended }) {
    const [heartIcon, setHeartIcon] = useState(regularHeart);

    useEffect(() => {
        if (isFavourite) {
            setHeartIcon(faHeart);
        }
    }, [isFavourite]);

    function handleHeartClick() {
        if (!isRecommended) {
            heartIcon === regularHeart ? setHeartIcon(faHeart) : setHeartIcon(regularHeart);
        }
    }

    return (
        <>
            {isLoggedIn && (
                <button
                    type={'button'}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        padding: 0,
                        background: 'transparent',
                        border: 'none',
                    }}
                    onClick={handleHeartClick}
                >
                    <FontAwesomeIcon
                        icon={heartIcon}
                        className={'text-danger'}
                        style={{
                            fontSize: '1.75rem',
                        }}
                    />
                </button>
            )}
        </>
    );
}
