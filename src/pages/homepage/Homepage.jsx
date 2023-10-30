import React from 'react';
import { HeroSection, InfoSection, AboutSection } from './sections';

export function Homepage() {
    return (
        <div className="content">
            <HeroSection />
            <InfoSection />
            <AboutSection />
            {/* <ReservationSection /> */}
        </div>
    )
}