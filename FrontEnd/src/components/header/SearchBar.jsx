import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function SearchBar() {
    return (
        <>
            <form role='search' className='position-relative'>
                <input type="text" placeholder="What do you want learn..." className="form-control search-input pt-2 pb-2" size="45"
                    style={{ paddingLeft: '12%' }} />
                <button className='search-btn'>
                    <FontAwesomeIcon icon={faSearch} className="position-absolute " />
                </button>
            </form>
            {/* add search suggestion component here*/}
        </>
    )
}

export default SearchBar
