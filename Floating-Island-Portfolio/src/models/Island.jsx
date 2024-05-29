/* eslint-disable react/no-unknown-property */
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import { a } from '@react-spring/three';
import islandScene from '../assets/3D/island.glb';

export default function Island({ isRotating, setIsRotating, ...props }) {
  const islandRef = useRef();
  const { nodes, materials } = useGLTF(islandScene);
  //access renderer & camera|viewport
  const { gl, viewport } = useThree();

  //use a ref for the last mouse x position
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  //control rotation damping
  const dampingFactor = 0.95;

  // Handle pointer (mouse or touch) down event
  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    //user interaction is via "first-touch-point" or via a "mouse-click"
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  };

  const handlePointerUP = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      //adjusting the rotation based on user interaction
      const delta = (clientX - lastX.current) / viewport.width;

      //adjust the island rotation speed based on the mouse/touch movement
      islandRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      if (!isRotating) setIsRotating(true);
      islandRef.current.rotation.y += 0.01 * Math.PI;
    } else if (e.key === 'ArrowRight') {
      if (!isRotating) setIsRotating(true);
      islandRef.current.rotation.y -= 0.01 * Math.PI;
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      setIsRotating(false);
    }
  };

  //is called on each frame update
  useFrame(() => {
    if (!isRotating) {
      //make the plane move smoother
      rotationSpeed.current *= dampingFactor;

      //stop the rotation if speed is low
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      //slow down the island-rotation to have a smooth rotation
      islandRef.current.rotation.y += rotationSpeed.current;
    } else {
      //When rotating, determine the current stage based on island's orientation
      const rotation = islandRef.current.rotation.y;

      //rotation stays in a "full-circle" in radians
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      //Set the current-stages(like about, ...) based on the orientation
      // switch (true) {
      //   case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
      //     setCurrentStage(4);
      //     break;

      //   case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
      //     setCurrentStage(3);
      //     break;

      //   case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
      //     setCurrentStage(2);
      //     break;

      //   case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
      //     setCurrentStage(1);
      //     break;

      //   default:
      //     setCurrentStage(null);
      // }
    }
  });

  // move the island with "touch" or "mouse"
  useEffect(() => {
    //attach all these elements to the regular DOM
    const canvas = gl.domElement;

    //Add event listeners for pointer and keyboard events
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUP);
    canvas.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    //Remove event listeners when component unmounts
    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointerup', handlePointerUP);
      canvas.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [gl, handlePointerDown, handlePointerUP, handlePointerMove]);

  return (
    <a.group ref={islandRef} {...props}>
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );
}
