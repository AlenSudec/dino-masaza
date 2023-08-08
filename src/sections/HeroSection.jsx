import React from 'react';

export function HeroSection() {
    return (
        <section id="hero" class="hero">
            <div class="hero-content">
                <h1>Welcome to Our Website</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at pretium massa.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at pretium massa.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at pretium massa.</p>
                <div class="email-form">
                    <input type="email" placeholder="Enter your email" />
                    <button type="submit">Subscribe</button>
                </div>
            </div>
        </section>
    )
}