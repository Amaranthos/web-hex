import { useMemo } from "react";
import { CubeCoord } from "utils/coords";

const gridRadius = 5;

export function useGrid() {
  const grid = useMemo(() => {
    const array = [];
    for (let q = -gridRadius; q <= gridRadius; q++) {
      const r1 = Math.max(-gridRadius, -q - gridRadius);
      const r2 = Math.min(gridRadius, -q + gridRadius);
      for (let r = r1; r <= r2; r++) {
        array.push(new CubeCoord(q, r, -q - r));
      }
    }
    return array;
  }, []);

  return { grid };
}
