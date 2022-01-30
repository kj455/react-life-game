export type LifeGameOption = {
  width?: number;
  height?: number;
  cellSize: number;
  interval: number;
  initialAliveRatio: number;
  aliveColor: string;
  deadColor: string;
};

export type Field = boolean[][];
