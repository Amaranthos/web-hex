import React, { useRef } from "react";

export function Hex(props) {
  const mesh = useRef();

  return (
    <mesh {...props} rotation={[Math.PI / 2, 0, 0]} ref={mesh}>
      <meshStandardMaterial color="lime" />
      <cylinderGeometry args={[1, 1, 1, 6, 1]} />
    </mesh>
  );
}
