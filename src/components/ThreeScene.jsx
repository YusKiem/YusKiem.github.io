// // import { useRef, useEffect } from "react";
// // import * as THREE from "three";

// // const ThreeScene = () => {
// //   const mountRef = useRef(null);

// //   useEffect(() => {
// //     // Creation de la scene
// //     const scene = new THREE.Scene();
// //     // Creation du renderer
// //     const renderer = new THREE.WebGLRenderer();
// //     renderer.setClearColor(0xffffff, 1);
// //     renderer.setSize(window.innerWidth, window.innerHeight);

// //     // Attach renderer to the ref div
// //     mountRef.current.appendChild(renderer.domElement);

// //     // Creation de la camera
// //     const camera = new THREE.PerspectiveCamera(
// //       50,
// //       window.innerWidth / window.innerHeight,
// //       1,
// //       10000
// //     );

// //     // La forme de l'objet
// //     const geometry = new THREE.BoxGeometry(1, 1, 1);
// //     // Creation de l'objet
// //     const material = new THREE.MeshNormalMaterial();
// //     const box = new THREE.Mesh(geometry, material);
// //     box.rotation.x = 0.5;
// //     box.rotation.y = 1;
// //     box.rotation.z = 1.5;
// //     box.position.z = -5;
// //     scene.add(box);

// //     // Animation function
// //     const animate = () => {
// //       requestAnimationFrame(animate);
// //       box.rotation.x += 0.01;
// //       box.rotation.y += 0.02;
// //       box.rotation.z += 0.03;
// //       renderer.render(scene, camera);
// //     };

// //     // Start animation
// //     animate();

// //     // Cleanup function
// //     // return () => {
// //     //   mountRef.current.removeChild(renderer.domElement);
// //     // };
// //   }, []);

// //   return <div ref={mountRef} />;
// // };

// // export default ThreeScene;

// // import { Suspense, useRef } from "react";
// // import { Canvas, useThree } from "@react-three/fiber";
// // import { OrbitControls, Preload } from "@react-three/drei";
// // import * as THREE from "three";
// // import CanvasLoader from "./Loader";

// import { useThree } from "@react-three/fiber";
// import * as THREE from "three";
// const ThreeScene = () => {
//   const { scene, gl, camera } = useThree(); // Access the shared WebGL context

//   // La forme de l'objet
//   const geometry = new THREE.BoxGeometry(5, 5, 5);
//   // Creation de l'objet
//   const material = new THREE.MeshNormalMaterial();
//   const box = new THREE.Mesh(geometry, material);
//   box.rotation.x = 0.5;
//   box.rotation.y = 1;
//   box.rotation.z = 1.5;
//   box.position.z = -5;
//   scene.add(box); // Add the box to the shared scene

//   // Animation function
//   const animate = () => {
//     requestAnimationFrame(animate);
//     box.rotation.x += 0.01;
//     box.rotation.y += 0.02;
//     box.rotation.z += 0.03;
//     gl.render(scene, camera); // Render using the shared scene and camera
//   };

//   // Start animation
//   animate();

//   // Cleanup function
//   return () => {
//     scene.remove(box); // Remove the box from the scene on cleanup
//   };
// };

// // const ThreeScene = () => {
// //   const mountRef = useRef(null);

// //   // return (
// //   //   <div ref={mountRef}>
// //   //     {/* <Canvas>
// //   //       <Box />
// //   //     </Canvas> */}
// //   //   </div>
// //   // );

// //   // return (
// //   //   <Canvas
// //   //   // frameloop="demand"
// //   //   // shadows
// //   //   // dpr={[1, 2]}
// //   //   // camera={{ position: [20, 3, 5], fov: 25 }}
// //   //   // gl={{ preserveDrawingBuffer: true }}
// //   //   >
// //   //     <Suspense fallback={<CanvasLoader />}>
// //   //       <OrbitControls
// //   //         enableZoom={false}
// //   //         maxPolarAngle={Math.PI / 2}
// //   //         minPolarAngle={Math.PI / 2}
// //   //       />
// //   //       {/* <Computers isMobile={isMobile} /> */}
// //   //       <Box />
// //   //     </Suspense>

// //   //     <Preload all />
// //   //   </Canvas>
// //   // );
// // };
// export default ThreeScene;
