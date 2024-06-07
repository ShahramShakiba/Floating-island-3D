/* eslint-disable react/no-unknown-property */
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import { a } from '@react-spring/three';
import islandScene from '../assets/3D/island.glb';
import * as THREE from 'three';

export default function Island({
  isRotating,
  setIsRotating,
  setCurrentStage,
  ...props
}) {
  const islandRef = useRef();
  const { nodes, materials } = useGLTF(islandScene);
  // Access renderer & camera | viewport
  const { gl, viewport, scene } = useThree();

  // Enable shadow mapping in the renderer
  gl.shadowMap.enabled = true;
  gl.shadowMap.type = THREE.PCFSoftShadowMap;

  // Use a ref for the last mouse x position
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  // Control rotation damping
  const dampingFactor = 0.95;

  // Handle pointer |mouse or touch| down event
  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    // User interaction is via "first-touch-point" or via a "mouse-click"
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  };

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      // Calculate the difference between the current and the previous position
      const delta = (clientX - lastX.current) / viewport.width;
      const rotationFactor = e.touches ? 0.003 : 0.015;

      // Adjust the island-rotation-speed based on the mouse/touch movement
      islandRef.current.rotation.y += delta * rotationFactor  * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * rotationFactor  * Math.PI;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      if (!isRotating) setIsRotating(true);
      islandRef.current.rotation.y += 0.01 * Math.PI;
      rotationSpeed.current = 0.0125;
    } else if (e.key === 'ArrowRight') {
      if (!isRotating) setIsRotating(true);
      islandRef.current.rotation.y -= 0.01 * Math.PI;
      rotationSpeed.current = -0.0125;
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      setIsRotating(false);
    }
  };

  // Is called on each frame update for a smooth UX
  useFrame(() => {
    if (!isRotating) {
      // The rotation speed will decrease gradually with each frame update
      rotationSpeed.current *= dampingFactor;

      // Stop the rotation if speed is low
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      // Slow down the island-rotation to have a smooth rotation
      islandRef.current.rotation.y += rotationSpeed.current;
    } else {
      // When rotating, determine the current-stage based on island's orientation
      const rotation = islandRef.current.rotation.y;

      // Rotation stays in a "full-circle" in radians
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current-stages (like about, ...) based on the orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;

        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;

        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;

        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;

        default:
          setCurrentStage(null);
      }
    }
  });

  // Move the island with "touch" or "mouse"
  useEffect(() => {
    // Attach all these elements to the regular-DOM (Canvas)
    const canvas = gl.domElement;

    // Add event listeners for pointer and keyboard events
    canvas.addEventListener('mousedown', handlePointerDown, { passive: false });
    canvas.addEventListener('mouseup', handlePointerUp, { passive: false });
    canvas.addEventListener('mousemove', handlePointerMove, { passive: false });
    canvas.addEventListener('touchstart', handlePointerDown, {
      passive: false,
    });
    canvas.addEventListener('touchend', handlePointerUp, { passive: false });
    canvas.addEventListener('touchmove', handlePointerMove, { passive: false });
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    // Clean up function - remove event listeners when component unmounts
    return () => {
      canvas.removeEventListener('mousedown', handlePointerDown);
      canvas.removeEventListener('mouseup', handlePointerUp);
      canvas.removeEventListener('mousemove', handlePointerMove);
      canvas.removeEventListener('touchstart', handlePointerDown);
      canvas.removeEventListener('touchend', handlePointerUp);
      canvas.removeEventListener('touchmove', handlePointerMove);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [
    gl,
    handlePointerDown,
    handlePointerUp,
    handlePointerMove,
    handleKeyDown,
    handleKeyUp,
  ]);

  return (
    <a.group ref={islandRef} {...props}>
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
        castShadow
        receiveShadow
      />
      <directionalLight
        castShadow
        position={[5, 13, 7.5]}
        intensity={1.9}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-bias={-0.08}
      />
    </a.group>
  );
}
