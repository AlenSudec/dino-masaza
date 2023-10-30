import React from 'react';

export function InfoSection() {
    return (
        <section id="services" className="info-section">
            <h1>USLUGE</h1>
            <hr/>
            <div className="info-item">
                <div className="info-content">
                    <h2>Service 1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at pretium massa.</p>
                </div>
                <div className="info-image">
                    <img src="placeholder.png" alt='placeholder'/>
                </div>
            </div>
            <div className="info-item">
                <div className="info-image">
                    <img src="placeholder.png" alt='placeholder'/>
                </div>
                <div className="info-content">
                    <h2>Service 2</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at pretium massa.</p>
                </div>
            </div>
            <div className="info-item">
                <div className="info-content">
                    <h2>Service 3</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at pretium massa.</p>
                </div>
                <div className="info-image">
                    <img src="placeholder.png" alt='placeholder'/>
                </div>
            </div>
            <div className="info-item">
                <div className="info-image">
                    <img src="placeholder.png" alt='placeholder'/>
                </div>
                <div className="info-content">
                    <h2>Service 4</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at pretium massa.</p>
                </div>
            </div>
        </section>
    )
}