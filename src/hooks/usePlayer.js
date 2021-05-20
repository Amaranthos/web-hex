import { useCallback, useState } from "react";
import { CubeCoord } from "utils/coords";

export function usePlayer() {
  const [position, setPosition] = useState(new CubeCoord(0, 0, 0));

  const moveTo = useCallback(
    (position) => {
      console.log(position);
      setPosition(position);
    },
    [setPosition]
  );

  return { position, moveTo };
}
