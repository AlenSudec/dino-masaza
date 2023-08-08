import React from "react";
import { Footer, Header } from "../components";
import { AboutSection, ReservationSection, HeroSection, InfoSection } from "../sections";

export function MainLayout() {
    return (
        <div>
            <Header />
            <div className="content">
                <HeroSection />
                <InfoSection />
                <AboutSection />
                <ReservationSection />
            </div>
            <Footer />
        </div>
    )
}