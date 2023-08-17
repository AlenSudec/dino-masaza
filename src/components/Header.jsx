import React, { useState } from 'react';

export function Header() {
    const [sideMenuState, setSideMenuState] = useState("closed");

    return (
        <header className='sticky-header'>
            <div className='header-content'>
                <div className="logo">
                    <img src="logo192.png" alt="Logo" />
                    <span className="logo-label">Your Website</span>
                </div>
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
                    <li onClick={closeSidemenu}><a href="#hero">Hero</a></li>
                    <li onClick={closeSidemenu}><a href="#services">Services</a></li>
                    <li onClick={closeSidemenu}><a href="#about">About</a></li>
                    <li onClick={closeSidemenu}><a href="#reserve">Reserve</a></li>
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