import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import birdScene from '../assets/3D/bird.glb';

export default function Bird() {
  const { scene, animations } = useGLTF(birdScene);
  const birdRef = useRef();
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions['Take 001'].play();
  }, []);

  useFrame(({ clock, camera }) => {
    //update the Y position simulate the flight path moving in a sin wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.7 + 2 ;

    //move across island
    if (birdRef.current.position.x > camera.position.x + 10) {
      //if bird has moved past the camera, rotate the bird 180 deg
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      //if bird is still within the screen
      birdRef.current.rotation.y = 0;
    }

    //If the bird is still within the camera view
    if (birdRef.current.rotation.y === 0) {
      //move forward
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01; //moves upward on the z-axis to maintain a flight trajectory
    } else {
      //move backward
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  });

  return (
    <mesh ref={birdRef} position={[-8, 15, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  );
}
