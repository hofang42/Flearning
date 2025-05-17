import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
function Browse() {
    return (
        <>
            <div className="dropdown dropdown-1">
                <button className="btn btn-light border p-2 px-3" type="button" id="browseDropdown"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Browse
                    <FontAwesomeIcon icon={faChevronDown} className='ms-5' />
                </button>
                <ul className="dropdown-menu" aria-labelledby="browseDropdown">
                    <li><Link to={'#'} className="dropdown-item">All Courses</Link></li>
                    <li><Link to={'#'} className="dropdown-item">Popular</Link></li>
                    <li><Link to={'#'} className="dropdown-item">New</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Browse