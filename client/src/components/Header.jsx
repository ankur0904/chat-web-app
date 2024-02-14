import React from "react";

function Header(props) {
    return (
        <nav className="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
            {/* Div Container */}
            <div className="container">
                <a className="navbar-brand d-md-none" href="/">
                    Chat App
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="#offcanvas" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabindex="-1" id="#offcanvas" aria-labelledby="#offcanvasLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="#offcanvasLabel">Aperture</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav flex-grow-1 justify-content-between">
                            <li className="nav-item"><a className="nav-link" href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" class="bi bi-chat-dots my-icon" viewBox="0 0 16 16">
                                    <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                                    <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2" />
                                </svg>
                                Chat App</a></li>
                            {/* Conditional render the following element */}
                            {props.login && <li className="nav-item"><a className="nav-link" href="/login">Login</a></li>}
                            {props.signup && <li className="nav-item"><a className="nav-link" href="/signup">Signup</a></li>}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;