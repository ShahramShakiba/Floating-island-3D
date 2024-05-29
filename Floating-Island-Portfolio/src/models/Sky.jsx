import { useGLTF } from '@react-three/drei';
import skyScene from '../assets/3D/sky.glb';

// Primitive Element
export default function Sky() {
  //load 3D Model
  const sky = useGLTF(skyScene);

  return (
    <mesh>
      <primitive object={sky.scene} />
    </mesh>
  );
}
