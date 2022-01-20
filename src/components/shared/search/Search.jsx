import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

function Search() {
    return (
        <div className='input-group mb-3'>
            <div className='form-outline'>
                <input type='search' id='form1' className='form-control' />
            </div>
            <button type='button' className='btn btn-primary'>
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
    );
}

export default Search;
