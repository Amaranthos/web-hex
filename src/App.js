import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Hex } from "components";
import { useGrid } from "hooks";
import React from "react";

const sqrt3 = Math.sqrt(3.0);

export function App() {
  const { grid } = useGrid();

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
      {grid.map((tile) => {
        return (
          <Hex
            key={`${tile.x}${tile.y}${tile.z}`}
            position={[
              sqrt3 * (tile.x + tile.y / 2.0),
              (3.0 / 2.0) * tile.y,
              0,
            ]}
          />
        );
      })}
    </Canvas>
  );
}
