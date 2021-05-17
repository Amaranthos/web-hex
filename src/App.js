import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Hex } from "components";
import React from "react";

function App() {
  return (
    <Canvas>
      <color attach="background" args={["#171720"]} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <PerspectiveCamera
        makeDefault
        args={[75, 16 / 9, 0.1, 1000]}
        position={[0, 0, 20]}
      />
      <OrbitControls />
      <Hex position={[2, 0, 0]} />
      <Hex position={[0, 0, 0]} />
      <Hex position={[-2, 0, 0]} />
    </Canvas>
  );
}

function useGrid() {}

export { App };
