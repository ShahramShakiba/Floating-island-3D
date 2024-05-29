import { useGLTF } from '@react-three/drei';
import planeScene from '../assets/3D/plane.glb';

export default function Plane() {
  const { scene, animation } = useGLTF(planeScene);

  return (
    <mesh >
      <primitive object={scene} />
    </mesh>
  );
}
