/// <reference types="react" />
import { Field, LifeGameOption } from '../types';
export declare function useLifeGame({ width, height, cellSize, interval, initialAliveRatio, aliveColor, deadColor, }: LifeGameOption): {
    cells: Field;
    setCells: import("react").Dispatch<import("react").SetStateAction<Field>>;
    handleClickCell: (i: number, j: number) => void;
    renderLifeGame: () => JSX.Element;
};
//# sourceMappingURL=useLifeGame.d.ts.map