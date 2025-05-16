import React from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faChalkboardTeacher, faChevronDown, faHome, faPhoneSquareAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './SearchBar';
import HeaderRight from './HeaderRight';
import LogoHeader from './LogoHeader';
function MobileHeader({user}) {
    return (
        <>
            <div className='tablet-view-nav'>
                <nav className="navbar navbar-light bg-light border-bottom">
                    <div className="container-fluid">
                        <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu" aria-controls="mobileMenu">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <LogoHeader />
                        <div className="ms-auto">
                            <HeaderRight user={user} />
                        </div>
                    </div>
                </nav>
            </div>
            <div className="offcanvas offcanvas-start text-light offcanvas-menu" tabIndex="-1" id="mobileMenu" aria-labelledby="mobileMenuLabel">
                <div className="offcanvas-header mt-3">
                    <img src='/images/logo_black_bg.png' alt='Logo' className='w-50 offcanvas-title'></img>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <hr className='mb-2' />
                <div className="offcanvas-body px-0">
                    <div className='px-3 mb-4'>
                        <SearchBar />
                    </div>
                    <hr />
                    <ul className="navbar-nav mt-3">
                        <li className="nav-item mb-2">
                            <NavLink to="/" className="nav-link nav-mobile-link" data-bs-dismiss="offcanvas">
                                <FontAwesomeIcon icon={faHome} className='me-2' />
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item mb-2">
                            <NavLink to={"/courses"} className="nav-link nav-mobile-link" data-bs-dismiss="offcanvas">
                                <FontAwesomeIcon icon={faBook} className='me-2' />
                                Courses
                            </NavLink>
                        </li>
                        <li className="nav-item mb-2">
                            <NavLink to="/about" className="nav-link nav-mobile-link" data-bs-dismiss="offcanvas">
                                <FontAwesomeIcon icon={faQuestionCircle} className='me-2' />
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item mb-2">
                            <NavLink to="/contact" className="nav-link nav-mobile-link" data-bs-dismiss="offcanvas">
                                <FontAwesomeIcon icon={faPhoneSquareAlt} className='me-2' />
                                Contact
                            </NavLink>
                        </li>
                        <li className="nav-item mb-2">
                            <NavLink to="/become-instructor" className="nav-link nav-mobile-link" data-bs-dismiss="offcanvas">
                                <FontAwesomeIcon icon={faChalkboardTeacher} className='me-2' />
                                Become an instructor
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MobileHeader