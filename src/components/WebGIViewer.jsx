import React, { useRef, useState, useCallback, forwardRef, useImperativeHandle, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function WebGiViewer() {


    return <Canvas >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <Model />
        {/* <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} /> */}
    </Canvas>
}

function Model() {
    const model = useLoader(GLTFLoader, "Poimandres.gltf");
    return <>
        <primitive object={model.scene} scale={0.5} />
    </>
}

// function Box(props) {
//     const meshRef = useRef(null);

//     const [hovered, setHover] = useState(false)
//     const [active, setActive] = useState(false)

//     useFrame((state, delta) => (meshRef.current.rotation.x += delta));

//     return (
//         <mesh
//             {...props}
//             ref={meshRef}
//             scale={active ? 1.5 : 1}
//             onClick={(event) => setActive(!active)}
//             onPointerOver={(event) => setHover(true)}
//             onPointerOut={(event) => setHover(false)}>
//             <boxGeometry args={[1, 1, 1]} />
//             <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//         </mesh>)
// }