import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
function LogoLeft() {
    return (
        <>
            <div className="col-md-3 mb-4">
                <div className="d-flex align-items-center mb-3">
                    <img src="/images/logo_black_bg.png" alt="F-Learning" style={{ width: '75%' }} />
                </div>
                <p className="text-secondary mb-3" style={{ fontSize: 15 }}>
                    Flearning. Empowering your future, one course at a time.
                </p>
                <div className="d-flex gap-2 flex-wrap">
                    <Link to={'#'} className='btn btn-dark social-icon rounded-0'>
                        <FontAwesomeIcon icon={faFacebookF} />
                    </Link>
                    <Link to={'#'} className='btn btn-dark social-icon rounded-0'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                    <Link to={'#'} className='btn btn-dark social-icon rounded-0'>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </Link>
                    <Link to={'#'} className='btn btn-dark social-icon rounded-0'>
                        <FontAwesomeIcon icon={faTwitter} />
                    </Link>
                    <Link to={'#'} className='btn btn-dark social-icon rounded-0'>
                        <FontAwesomeIcon icon={faYoutube} />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default LogoLeft