import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

function Search({ input: keyword, onChange: setKeyword }) {
    return (
        <div className='input-group mb-3'>
            <div className='form-outline'>
                <input
                    value={keyword}
                    type='search'
                    id='form1'
                    className='form-control'
                    onChange={(e) => setKeyword(e.target.value)}
                />
            </div>
            <button type='button' className='btn btn-primary'>
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
    );
}

export default Search;
