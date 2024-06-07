import { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
import Island from '../models/Island';
// import rose from '../assets/rose.mp3';
import forest from '../assets/forest.mp3';
import Loader from '../components/Loader';
import HomeInfo from '../components/HomeInfo';
import { soundoff, soundon } from '../assets/icons';

export default function Home() {
  const audioRef = useRef(new Audio(forest));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  //============ Island Screen Size
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -7, -45];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };
  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  //============ Plane Screen Size
  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.8, 0.8, 0.8];
      screenPosition = [0, -2.3, 0];
    } else {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [1, -3.7, -4];
    }

    return [screenScale, screenPosition];
  };
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="relative w-full h-screen">
      <div className="absolute left-0 right-0 z-10 flex items-center justify-center top-28">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? 'cursor-grabbing' : 'cursor-grab'
        } `}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={1} />
          <ambientLight intensity={0.8} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={0.9}
          />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            scale={planeScale}
            position={planePosition}
            rotation={[0, 11, 0.05]}
            isRotating={isRotating}
          />
        </Suspense>
      </Canvas>

      <div className="absolute z-20 bottom-4 max-sm:bottom-20 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="sound"
          className="object-contain w-10 h-10 cursor-pointer sm:w-8 sm:h-8"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  );
}
