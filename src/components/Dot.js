import React, { useState } from "react";

export function Dot(props) {
  return (
    <group {...props}>
      <mesh>
        <meshStandardMaterial color="black" />
        <circleGeometry args={[0.5, 32]} />
      </mesh>
    </group>
  );
}
