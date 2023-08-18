import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
    const [sideMenuState, setSideMenuState] = useState("closed");

    return (
        <header className='sticky-header'>
            <div className='header-content'>
                <Link to="/">
                    <div className="logo">
                        <img src="logo192.png" alt="Logo" />
                        <span className="logo-label">Your Website</span>
                    </div>
                </Link>
                <button onClick={() => { setSideMenuState("opened"); disableScroll() }}>
                    <img className="hamburger" src="hamburger.png" alt="Sidemenu" />
                </button>
            </div>
            <Sidemenu sideMenuState={sideMenuState} setSideMenuState={setSideMenuState} />
        </header>
    )
}

function Sidemenu({ sideMenuState, setSideMenuState }) {
    if (sideMenuState === "closed") {
        return null;
    }

    const closeSidemenu = () => {
        setSideMenuState("closed")
        enableScroll();
    }

    return <div className='sidemenu'>
        <div className='sidemenu-close'>
            <button className="close-sidemenu-btn" onClick={closeSidemenu} >
                <img className='close-sidemenu' src="close_sidemenu.png" alt="close sidemenu" />
            </button>
        </div>
        <div className='sidemenu-content'>
            <nav className="nav-container">
                <ul className="nav-list">
                    <li onClick={closeSidemenu}><Link to="/#hero">Hero</Link></li>
                    <li onClick={closeSidemenu}><Link to="/#services">Services</Link></li>
                    <li onClick={closeSidemenu}><Link to="/#about">About</Link></li>
                    <li onClick={closeSidemenu}><Link to="/#reserve">Reserve</Link></li>
                    <li onClick={closeSidemenu}><Link to={"/3d-view"}>3d viwer</Link></li>
                </ul>
            </nav>
        </div>
    </div>
}

function disableScroll() {
    // Get the current page scroll position
    const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft;

    // if any scroll is attempted,
    // set this to the previous value
    window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
    };
}

function enableScroll() {
    window.onscroll = function () { };
}