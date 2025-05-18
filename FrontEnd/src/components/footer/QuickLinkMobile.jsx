import React from 'react'
import { Link } from 'react-router-dom'
function QuickLinkMobile() {
    return (
        <>
            <div class="accordion mobile-view mb-3" id="accordionPanelsStayOpenExample" data-bs-theme="dark">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            TOP 4 CATEGORY
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div class="accordion-body">
                            <ul className="nav flex-column">
                                {/* <li className="nav-item nav-item1 mb-2">Development<a href="#" className="nav-link p-0 fw-bold">1800.6616 (8h00 - 22h00)</a></li> */}
                                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0">Development</Link></li>
                                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0">Finance & Accounting</Link></li>
                                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0">Design</Link></li>
                                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0">Business</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            QUICK LINKS
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div class="accordion-body">
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0">About</Link></li>
                                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0">Become Instructor</Link></li>
                                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0">Contact</Link></li>
                                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0">Career</Link></li>                                
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            SUPPORT
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div class="accordion-body">
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0">Help Center</Link></li>
                                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0">FAQs</Link></li>
                                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0">Terms & Condition</Link></li>
                                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </>
    )
}

export default QuickLinkMobile