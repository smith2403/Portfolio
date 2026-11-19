import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Smith } from "./smith";

// measured from your model
const MODEL_HEIGHT = 23.74;
const MODEL_WIDTH = 16.93;
const MODEL_MIN_Y = -0.74;

const Model = () => {
  const { viewport } = useThree();

  // fit by height or width, whichever is the tighter limit
  const s = Math.min(
    (viewport.height * 0.7) / MODEL_HEIGHT,
    (viewport.width * 0.7) / MODEL_WIDTH
  );

  // feet sit 5% above the bottom of the canvas
  const y = -viewport.height / 2 + viewport.height * 0.05 - MODEL_MIN_Y * s;

  return (
    <group scale={s} position={[0, y, 0]} rotation={[0, -Math.PI / 6, 0]}>
      <Smith />
    </group>
  );
};

const HeroExperience = () => (
  <Canvas camera={{ position: [0, 0, 20], fov: 50 }}>
    <ambientLight intensity={0.8} />
    <directionalLight position={[5, 10, 5]} intensity={1.5} />
    <Model />
    <OrbitControls
      enablePan={false}
      enableZoom={false}
      minPolarAngle={Math.PI / 3}
      maxPolarAngle={Math.PI / 2}
    />
  </Canvas>
);

export default HeroExperience;
