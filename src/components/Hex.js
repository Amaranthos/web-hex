import { Text } from "@react-three/drei";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";

const colours = [
  "#006600",
  "#003300",
  "#009900",
  "#00CC00",
  "#336600",
  "#66CC00",
];

export function Hex({ coords, onClick, ...props }) {
  const geometry = useRef(new THREE.CircleBufferGeometry(1, 6));
  const colour = useRef(colours[Math.floor(Math.random() * colours.length)]);

  return (
    <group {...props}>
      <group rotation={[0, 0, Math.PI / 2]}>
        <lineSegments position={[0, 0, 0.01]}>
          <edgesGeometry args={[geometry.current]} />
          <lineBasicMaterial color="black" />
        </lineSegments>
        <mesh geometry={geometry.current} onClick={onClick}>
          <meshStandardMaterial color={colour.current} />
        </mesh>
      </group>
      <Text
        position={[0, 0, 0.1]}
        color="black"
      >{`${coords.x},${coords.y},${coords.z}`}</Text>
    </group>
  );
}
