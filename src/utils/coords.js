export function CubeCoord(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;

  this.toEvenFlat = function () {
    return OffsetCoord({
      row: this.x,
      col: this.z + (this.x + (this.x & 1)) / 2,
    });
  };
}

export function OffsetCoord({ row, col }) {
  this.row = row;
  this.col = col;
}

export const directions = [
  new CubeCoord(1, -1, 0),
  new CubeCoord(1, 0, -1),
  new CubeCoord(0, 1, -1),
  new CubeCoord(-1, 1, 0),
  new CubeCoord(-1, 0, 1),
  new CubeCoord(0, -1, 1),
];
