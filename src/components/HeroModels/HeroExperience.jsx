import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

const HeroExperience = () => {
  const Tablet = useMediaQuery({query: ('(max-width: 1024px)')});
  const Mobile = useMediaQuery({query: ('(max-width: 768px)')}); // to determine if the device is a tablet or mobile
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 35 }}>
      <ambientLight intensity={0.2} color="white" />
      <directionalLight position={[10, 5, 5]} intensity={1} />
      <OrbitControls
        enablePan={false}
        enableZoom={!Tablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <mesh>
        <boxGeometry args={[4, 2, 3]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  );
};

export default HeroExperience;
