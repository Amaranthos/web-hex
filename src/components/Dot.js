import React, { useState } from "react";

export const Dot = React.forwardRef((props, ref) => (
  <group {...props}>
    <mesh ref={ref}>
      <meshStandardMaterial color="black" />
      <circleGeometry args={[0.5, 32]} />
    </mesh>
  </group>
));
