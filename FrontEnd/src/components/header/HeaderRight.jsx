import { faBell, faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { faCog, faShoppingCart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function HeaderRight({ user }) {
    return (
        <>
            <div className='d-flex align-items-center'>
                <button className='btn btn-light rounded-circle icon-btn'>
                    <img src="/icons/bell.png" className='icon' alt="" />
                </button>
                <button className='btn btn-light rounded-circle icon-btn'>
                    <img src="/icons/heart.png" className='icon' alt="" />
                </button>
                <button className='btn btn-light rounded-circle icon-btn'>
                    <img src="/icons/cart.png" className='icon' alt="" />
                </button>

                {user ? (
                    <div className='ms-2 dropdown'>
                        <img
                            src={user.userImage}
                            alt=""
                            className='rounded-circle'
                            style={{ width: '40px', height: '40px', cursor: 'pointer' }}
                            id="userDropdown"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        />
                        <ul className="dropdown-menu dropdown-menu-end fade" aria-labelledby="userDropdown">
                            <li><Link to={'#'} className="dropdown-item dropdown-item-hover"><FontAwesomeIcon icon={faUser} className='me-2' /> Profile</Link></li>
                            <li><Link to={'#'} className="dropdown-item dropdown-item-hover"><FontAwesomeIcon icon={faCog } className='me-2'/>Settings</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link to={'#'} className="dropdown-item dropdown-item-hover"><FontAwesomeIcon icon={faSignOutAlt} className='me-2'/>Logout</Link></li>
                        </ul>
                    </div>
                ) : (
                    <div className='ms-2'>
                        <button className='create-account-btn p-2 px-3 mb-2'>
                            Create account
                        </button>
                        <button className='sign-in-btn p-2 px-3 ms-2'>
                            Sign in
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}

export default HeaderRight