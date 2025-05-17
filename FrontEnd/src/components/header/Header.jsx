import React from 'react';
import '../../assets/header/header.css';
import SearchBar from './SearchBar';
import HeaderRight from './HeaderRight';
import LogoHeader from './LogoHeader';
import Browse from './Browse';
import MobileHeader from './MobileHeader';
import NavigationBar from './NavigationBar';


function Header() {
    const userExample = {//NOTE: This is sample data, replace API's data here
        username: 'admin',
        password: '123',
        userImage: '/images/defaultImageUser.png'
    }
    return (
        <>
            <div className='desktop-view-nav'>
                {/* for desktop */}
                <NavigationBar/>
                {/* <nav className="navbar navbar-light bg-light pb-3 pt-3 border-bottom">
                    <div className="container-fluid mx-2">
                        <div className="d-flex w-100 align-items-center">
                            <LogoHeader />
                            <Browse />
                            <div className='ms-3'>
                                <SearchBar />
                            </div>
                            <div style={{ marginLeft: 'auto' }}>
                                <HeaderRight />
                            </div>
                        </div>
                    </div>
                </nav> */}

                {/* when already login */}
                {/* <h6 className='text-center mt-3 text-danger'>Sau khi login</h6> */}
                <nav className="navbar navbar-light bg-light pb-3 pt-3 border-bottom">
                    <div className="container-fluid mx-2">
                        <div className="d-flex w-100 align-items-center">
                            <LogoHeader />
                            <Browse />
                            <div className='ms-3'>
                                <SearchBar />
                            </div>
                            <div className='ms-auto'>
                                <HeaderRight user={userExample} />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            {/* <h6 className='text-center mt-3 text-danger'>Navbar cho tablet (nhỏ hơn 1024)</h6> */}
            {/* for mobile */}
            <MobileHeader user={userExample} />
        </>
    )
}

export default Header
