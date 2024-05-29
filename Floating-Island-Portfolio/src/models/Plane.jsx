import { useAnimations, useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import planeScene from '../assets/3D/plane.glb';

export default function Plane({ isRotating, ...props }) {
  const planeRef = useRef();
  //load scene & animations from plane-model
  const { scene, animations } = useGLTF(planeScene);
  //interact with animations 
  const { actions } = useAnimations(animations, planeRef);

  useEffect(() => {
    if (isRotating) {
      //plays the 'Take 001' animation declared in plane-model
      actions['Take 001'].play();
    } else {
      actions['Take 001'].stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={planeRef}>
      <primitive object={scene} />
    </mesh>
  );
}
