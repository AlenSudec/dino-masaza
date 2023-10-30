import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Footer, Header, ScrollToHashElement, WebGiViewer } from "../components";
import { Homepage } from "../pages/homepage";
import { ReservePage } from "../pages/reserve";

let router = createBrowserRouter([
    {
        path: "/",
        Component() {
            return (
                <PageSkeletonWrapper>
                    <ScrollToHashElement />
                    <Homepage />
                </PageSkeletonWrapper>
            )
        }
    },
    {
        path: '/reserve',
        Component() {
            return  (
                <PageSkeletonWrapper>
                    <ReservePage />
                </PageSkeletonWrapper>
            )
        }
    }
    //     {
    //         path: "/3d-view",
    //         Component() {
    //             return <> <Header /><ScrollToHashElement /><ModelViewer /><Footer /></>
    //         }
    //     }
])

export function PageSkeletonWrapper({ children }) {
    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
}

export function MainLayout() {
    return (
        <div className="main-layout">
            <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
        </div>
    )
}

export function ModelViewer() {
    return (
        <div className="content" style={{ height: "650px" }}>
            <WebGiViewer />
        </div>
    )
}