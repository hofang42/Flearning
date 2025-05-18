import React from 'react'
import { Link } from 'react-router-dom'
function LogoHeader() {
    return (
        <>
            <Link to={'/'} className="navbar-brand navbar--brand">
                <img src="/images/Logo.png" alt="" className="logo" />
            </Link>
        </>
    )
}

export default LogoHeader