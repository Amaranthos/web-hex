import React from "react";
import { CubeCoord } from "utils/coords";

const gridRadius = 2;

const GridContext = React.createContext([]);

export function GridProvider({ children }) {
  const grid = React.useRef(generateGrid());

  return (
    <GridContext.Provider value={[grid.current]}>
      {children}
    </GridContext.Provider>
  );
}

export function useGrid() {
  const context = React.useContext(GridContext);
  if (!context) {
    throw new Error("useGrid must be called within a GridProvider");
  }
  const [grid] = context;

  return { grid };
}

function generateGrid() {
  const array = [];
  for (let q = -gridRadius; q <= gridRadius; q++) {
    const r1 = Math.max(-gridRadius, -q - gridRadius);
    const r2 = Math.min(gridRadius, -q + gridRadius);
    for (let r = r1; r <= r2; r++) {
      array.push(new CubeCoord(q, r, -q - r));
    }
  }
  return array;
}
