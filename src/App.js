import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Dot, Hex } from "components";
import { GridProvider, useGrid, usePlayer } from "hooks";
import React, { useCallback } from "react";

export function App() {
  return (
    <Canvas>
      <GridProvider>
        <color attach="background" args={["#171720"]} />
        <ambientLight />
        <PerspectiveCamera
          makeDefault
          args={[75, 16 / 9, 0.1, 1000]}
          position={[0, 0, 20]}
        />
        <OrbitControls />
        <World />
      </GridProvider>
    </Canvas>
  );
}

function World() {
  const { grid } = useGrid();
  const { position, moveTo } = usePlayer();
  const worldPosition = React.useRef(position.toPhysXY());

  const movePlayer = useCallback((coord) => {
    console.log(coord);
    moveTo(coord);
  }, []);

  useFrame(() => {
    const direction = worldPosition.current - position.toPhysXY();
  });

  return (
    <>
      {grid.map((coords) => {
        return (
          <Hex
            key={`${coords.x}${coords.y}${coords.z}`}
            position={[...coords.toPhysXY(), 0]}
            onClick={() => movePlayer(coords)}
            coords={coords}
          />
        );
      })}
      <Dot position={[...position.toPhysXY(), 0.55]} />
    </>
  );
}
