import React, { useState } from "react";

const colours = [
  "#003300",
  "#006600",
  "#009900",
  "#00CC00",
  "#336600",
  "#66CC00",
];

export function Hex(props) {
  const [mesh, setMesh] = useState();

  // useEffect(() => {}, [mesh.current]);

  return (
    <group {...props} rotation={[Math.PI / 2, 0, 0]}>
      <mesh ref={(mesh) => setMesh(mesh)}>
        <meshStandardMaterial
          color={colours[Math.floor(Math.random() * colours.length)]}
        />
        <cylinderGeometry args={[1, 1, 1, 6, 1]} />
      </mesh>
      {mesh && (
        <lineSegments geometry={mesh.geometry}>
          <edgesGeometry attach="geometry" args={[mesh.geometry]} />
          <lineBasicMaterial attach="material" color="black" />
        </lineSegments>
      )}
    </group>
  );
}
