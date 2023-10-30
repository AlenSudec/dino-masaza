// import React from "react";
// import { Canvas, useLoader } from "@react-three/fiber";
// import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// export function WebGiViewer() {

//     return <Canvas
//     >
//         <Model />
//         <PerspectiveCamera makeDefault position={[0, 1, 10]} />
//         <pointLight position={[0, 0, 2]} intensity={10} />
//         <pointLight position={[0, 0, -2]} intensity={10} />
//         <pointLight position={[0, 2, -2]} intensity={10} />
//         <pointLight position={[0, 2, 2]} intensity={10} />
//         <pointLight position={[0, -2, -2]} intensity={10} />
//         <pointLight position={[0, -2, 2]} intensity={10} />
//         <OrbitControls />
//     </Canvas>
// }

// function Model() {

//     const model = useLoader(GLTFLoader, "/scene.gltf");
//     return <>
//         <primitive object={model.scene} scale={0.5} />
//     </>
// }

// // function Box(props) {
// //     const meshRef = useRef(null);

// //     const [hovered, setHover] = useState(false)
// //     const [active, setActive] = useState(false)

// //     useFrame((state, delta) => (meshRef.current.rotation.x += delta));

// //     return (
// //         <mesh
// //             {...props}
// //             ref={meshRef}
// //             scale={active ? 1.5 : 1}
// //             onClick={(event) => setActive(!active)}
// //             onPointerOver={(event) => setHover(true)}
// //             onPointerOut={(event) => setHover(false)}>
// //             <boxGeometry args={[1, 1, 1]} />
// //             <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
// //         </mesh>)
// // }