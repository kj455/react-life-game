/// <reference types="react" />
declare type Field = boolean[][];
declare type LifeGameOption = {
    width?: number;
    height?: number;
    interval?: number;
    initialAliveRatio?: number;
};
export declare function useLifeGame({ width, height, interval, initialAliveRatio, }?: LifeGameOption): {
    cells: Field;
    setCells: import("react").Dispatch<import("react").SetStateAction<Field>>;
    handleClickCell: (i: number, j: number) => void;
};
export {};
//# sourceMappingURL=useLifeGame.d.ts.map