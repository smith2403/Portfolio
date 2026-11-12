
import { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Astronaut = () => {
  const { scene, animations } = useGLTF("/models/smith.glb");
  const { actions, names } = useAnimations(animations, scene);

  useEffect(() => {
    // Hide the cube
    scene.getObjectByName("Cube").visible = false;

    // Play animation
    actions[names[0]]?.play();
  }, [scene, actions, names]);

  return <primitive object={scene} scale={0.5} />;
};

export default Astronaut;
