import React from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function TagsEdit(props) {
    return (
        <ReactTags
            {...props}
            classNames={{
                tagInputField: 'form-control my-1',
                tag: 'badge bg-primary my-1 me-1',
                remove: 'ms-1',
            }}
            allowDragDrop={false}
            removeComponent={RemoveButton}
        />
    );
}

function RemoveButton({ className, onRemove }) {
    return (
        <FontAwesomeIcon
            onClick={onRemove}
            className={className}
            icon={faTimes}
            cursor={'pointer'}
        />
    );
}
