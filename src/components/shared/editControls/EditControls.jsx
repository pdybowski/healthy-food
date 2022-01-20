import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faList, faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export function EditControls({ isLoggedIn, isOwner }) {
    return (
        <div
            className={`d-flex ${
                isLoggedIn && isOwner ? 'justify-content-around' : 'justify-content-end'
            } mt-1`}
        >
            {isOwner && (
                <Button variant='outline-info'>
                    <FontAwesomeIcon icon={faEdit} />
                </Button>
            )}
            <Button variant='outline-primary'>
                <FontAwesomeIcon icon={faList} />
            </Button>
            {isOwner && (
                <Button variant='outline-danger'>
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
            )}
        </div>
    );
}
