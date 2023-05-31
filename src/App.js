import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Dot, Hex } from "components";
import { GridProvider, useGrid, usePlayer } from "hooks";
import React, { useCallback, useRef } from "react";
import { Vector2, Vector3 } from "three";

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
  const dotRef = useRef();

  const movePlayer = useCallback((coord) => {
    moveTo(coord);
  }, []);

  useFrame(({ clock }) => {
    if (dotRef.current) {
      const targetPos = new Vector3(...position.toPhysXY(), 0.01);
      const currentPos = dotRef.current.position;

      if (!targetPos.equals(currentPos)) {
        currentPos.lerp(targetPos, 0.1);
      }
    }
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
      <Dot ref={dotRef} position={[0, 0, 0.01]} />
    </>
  );
}
