import React from "react";
import { Footer, Header, ScrollToHashElement, WebGiViewer } from "../components";
import { AboutSection, ReservationSection, HeroSection, InfoSection } from "../sections";
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";

let router = createBrowserRouter([
    {
        path: "/",
        Component() {
            return <> <Header /><ScrollToHashElement /><Homepage /><Footer /></>
        }
    },
    {
        path: "/3d-view",
        Component() {
            return <> <Header /><ScrollToHashElement /><ModelViewer /><Footer /></>
        }
    }
])

export function MainLayout() {
    return (
        <div className="main-layout">
            <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
        </div>
    )
}

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

export function ModelViewer() {
    return (
        <div className="content">
            <WebGiViewer />
        </div>
    )
}