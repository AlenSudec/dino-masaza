import React, { useRef, useState, useCallback, forwardRef, useImperativeHandle, useEffect } from "react";
import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    BloomPlugin,
    GammaCorrectionPlugin,
    addBasePlugins,
    mobileAndTabletCheck
} from "webgi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function WebGiViewer() {
    const canvasRef = useRef(null);

    const setupViewer = useCallback(async () => {
        const viewer = new ViewerApp({
            canvas: canvasRef.current
        });

        const manager = await viewer.addPlugin(AssetManagerPlugin);
        await addBasePlugins(viewer);

        viewer.renderer.refreshPipeline();

        await manager.addFromPath("scene.glb");

    }, [])

    useEffect(() => {
        setupViewer();
    }, [])

    return <div id="webgi-canvas-container" className="webgi-container">
        <canvas id="webgi-canvas" className="webgi-viewer" ref={canvasRef} />
    </div>
}

