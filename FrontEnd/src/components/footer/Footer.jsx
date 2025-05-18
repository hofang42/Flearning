import React from 'react';
import '../../assets/footer/footer.css';
import QuickLink from './QuickLink';
import DownloadApp from './DownloadApp';
import LogoLeft from './LogoLeft';
import QuickLinkMobile from './QuickLinkMobile';

function Footer() {
    return (
        <footer className="bg-dark text-light pt-5 pb-5 mt-5">
            <div className="container">
                <div className="row align-items-start">
                    {/* Logo & Social */}
                    <LogoLeft/>
                    {/* Top 4 Category */}
                    <QuickLink/>
                    <QuickLinkMobile className='mobile-view'/>
                    {/* Download App */}
                    <DownloadApp/>
                </div>
                <hr className="border-secondary" />
                <div className="row">
                    <div className="col-md-8 text-secondary small">
                        © 2025 - F-Learning. All rights reserved
                    </div>
                    <div className="col-md-4 text-end"></div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;