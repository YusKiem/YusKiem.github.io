import { Suspense, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import * as THREE from "three";
// import ThreeScene from "../ThreeScene";

const ThreeScene = () => {
  const { scene, gl, camera } = useThree(); // Access the shared WebGL context

  // La forme de l'objet
  const geometry = new THREE.BoxGeometry(0.25, 0.25, 0.25);
  // Creation de l'objet
  const material = new THREE.MeshNormalMaterial();
  const box = new THREE.Mesh(geometry, material);
  box.rotation.x = 0.5;
  box.rotation.y = 1;
  box.rotation.z = 1.5;
  box.position.z = -5;
  scene.add(box); // Add the box to the shared scene

  // Animation function
  const animate = () => {
    requestAnimationFrame(animate);
    box.rotation.x += 0.005;
    box.rotation.y += 0.01;
    box.rotation.z += 0.02;
    gl.render(scene, camera); // Render using the shared scene and camera
  };

  // Start animation
  animate();

  // Cleanup function
  // return () => {
  //   scene.remove(box); // Remove the box from the scene on cleanup
  // };
};

// const ThreeScene = () => {
//   const { scene, gl, camera } = useThree();

//   // Define the box geometry and material outside of the animate function
//   const geometry = new THREE.BoxGeometry(0.25, 0.25, 0.25);
//   const material = new THREE.MeshNormalMaterial();
//   const box = new THREE.Mesh(geometry, material);

//   // Set initial rotation and position
//   box.rotation.set(0.5, 1, 1.5);
//   box.position.z = -5;

//   // Add the box to the scene
//   scene.add(box);

//   // Define the animation function
//   const animate = () => {
//     // Update the box rotation
//     box.rotation.x += 0.005;
//     box.rotation.y += 0.01;
//     box.rotation.z += 0.02;

//     // Render the scene
//     gl.render(scene, camera);

//     // Request the next animation frame
//     requestAnimationFrame(animate);
//   };

//   // Start the animation
//   requestAnimationFrame(animate);

//   // Cleanup function to remove the box from the scene
//   return () => {
//     scene.remove(box);
//   };
// };

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="gray" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
      {/* <primitive
        object={ThreeScene.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      /> */}
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ThreeScene isMobile={isMobile} />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
