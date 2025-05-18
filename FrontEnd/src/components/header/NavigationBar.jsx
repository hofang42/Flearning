import React from 'react'
import { NavLink } from 'react-router-dom';

function NavigationBar() {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark pt-0">
                <div className="container-fluid">
                    <div className="d-flex">
                        <ul className="navbar-nav me-auto mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link nav--link">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/courses" className="nav-link nav--link">
                                    Courses
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link nav--link">
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link nav--link">
                                    Contact
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/become-instructor" className="nav-link nav--link">
                                    Become an instructor
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavigationBar