import React from 'react'
import { Link } from 'react-router-dom'

function QuickLink() {
    return (
        <>

            <div className="col-md-2 mb-4 desktop-view">
                <h6 className="mb-3">TOP 4 CATEGORY</h6>
                <ul className="list-unstyled list-links">
                    <li><Link to="#" className="footer-link text-secondary">Development</Link></li>
                    <li><Link to="#" className="footer-link text-secondary">Finance & Accounting</Link></li>
                    <li><Link to="#" className="footer-link text-secondary">Design</Link></li>
                    <li><Link to="#" className="footer-link text-secondary">Business</Link></li>
                </ul>
            </div>
            {/* Quick Links */}
            <div className="col-md-2 mb-4 desktop-view">
                <h6 className="mb-3">QUICK LINKS</h6>
                <ul className="list-unstyled list-links">
                    <li><Link to="#" className="footer-link text-secondary">About</Link></li>
                    <li><Link to="#" className="footer-link text-secondary">Become Instructor</Link></li>
                    <li><Link to="#" className="footer-link text-secondary">Contact</Link></li>
                    <li><Link to="#" className="footer-link text-secondary">Career</Link></li>
                </ul>
            </div>
            {/* Support */}
            <div className="col-md-2 mb-4 desktop-view">
                <h6 className="mb-3">SUPPORT</h6>
                <ul className="list-unstyled list-links">
                    <li><Link to="#" className="footer-link text-secondary">Help Center</Link></li>
                    <li><Link to="#" className="footer-link text-secondary">FAQs</Link></li>
                    <li><Link to="#" className="footer-link text-secondary">Terms & Condition</Link></li>
                    <li><Link to="#" className="footer-link text-secondary">Privacy Policy</Link></li>
                </ul>
            </div>
        </>
    )
}

export default QuickLink