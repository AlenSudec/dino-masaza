import React from 'react';

export function Header() {
    return (
        <header className='sticky-header'>
            <div class="logo">
                <img src="logo192.png" alt="Logo" />
                <span class="logo-label">Your Website</span>
            </div>
            <nav class="nav-container">
                <ul class="nav-list">
                    <li><a href="#hero">Hero</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#reserve">Reserve</a></li>
                </ul>
            </nav>
        </header>
    )
}