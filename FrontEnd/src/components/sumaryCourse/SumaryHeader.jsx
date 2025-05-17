import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/header/header.css';

function SumaryHeader() {
    return (
        <div className='container-fluid summary-header'>
            <div className='d-flex align-items-center flex-wrap'>
                <div className='d-flex'>
                    <Link to={'#'} className='btn btn-light rounded-circle' style={{ width: '40px', height: '40px' }}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </Link>
                    <div className='ms-3'>
                        <p className='fw-medium mb-2'>Complete Website Responsive Design: from Figma to Webflow to Website Design</p>
                        <div className="desktop-item-view">
                            <div className='d-flex align-items-center'>
                                <img src="/icons/folder.png" alt="" className='mini-icon' />
                                <p className='ms-2 mb-0 text-muted'>6 Sections</p>
                                <img src="/icons/play.png" alt="" className='mini-icon ms-3' />
                                <p className='ms-2 mb-0 text-muted'>202 lecture</p>
                                <img src="/icons/clock.png" alt="" className='mini-icon ms-3' />
                                <p className='ms-2 mb-0 text-muted'>19h37m</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-item-view">
                    <hr className='mt-1' />
                    <div className='d-flex align-items-center '>
                        <img src="/icons/folder.png" alt="" className='mini-icon' />
                        <p className='ms-2 mb-0 text-muted'>6 Sections</p>
                        <img src="/icons/play.png" alt="" className='mini-icon ms-3' />
                        <p className='ms-2 mb-0 text-muted'>202 lecture</p>
                        <img src="/icons/clock.png" alt="" className='mini-icon ms-3' />
                        <p className='ms-2 mb-0 text-muted'>19h37m</p>
                    </div>
                </div>
                <div className='ms-auto mt-3'>
                    <button className='review-course-btn p-2 px-3 mb-2'>
                        View a Review
                    </button>
                    <button className='sign-in-btn p-2 px-3 ms-2'>
                        Next lecture
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SumaryHeader