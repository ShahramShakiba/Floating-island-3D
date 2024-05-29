import { useGLTF } from '@react-three/drei';
import planeScene from '../assets/3D/plane.glb';

export default function Plane({ isRotating, ...props }) {
  const { scene, animation } = useGLTF(planeScene);

  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
}
