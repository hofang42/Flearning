import React from 'react'
import { Link } from 'react-router-dom'

function DownloadApp() {
    return (
        <>
            <div className="col-md-3 mb-3">
                <h6 className="mb-3">DOWNLOAD OUR APP</h6>
                <div className="mb-2 desktop-view" style={{ width: '60%' }}>
                    <Link href="#" className="d-block mb-2">
                        <img src="/icons/appStore.png" alt="App Store" className='w-100' />
                    </Link>
                    <Link href="#" className="d-block">
                        <img src="/icons/chplay.png" alt="Play Store" className='w-100' />
                    </Link>
                </div>
                <div className='mobile-view'>
                    <div className='row'>
                        <div className='col-6'>
                            <Link href="#" className="d-block mb-2">
                                <img src="/icons/appStore.png" alt="App Store" style={{ width: '100%' }} />
                            </Link>
                        </div>
                        <div className='col-6'>
                            <Link href="#" className="d-block mb-2">
                                <img src="/icons/chplay.png" alt="Play Store" style={{ width: '100%' }} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DownloadApp