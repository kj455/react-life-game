import { useState, useCallback, useEffect } from 'react';
import { useCellNum } from './useCellNums';

type Field = boolean[][];

const generate2DArray = (m: number, n: number, val = false): Field => {
  return [...Array(m)].map((_) => Array(n).fill(val));
};

const generate2DArrayRandom = (
  m: number,
  n: number,
  initialAliveRatio: number
): Field => {
  const array = generate2DArray(m, n);
  return array.map((row) =>
    row.map((_) => Math.random() > 1 - initialAliveRatio)
  );
};

const countAliveNeighbors = (arr: Field, i: number, j: number): number => {
  return (
    // prettier-ignore
    Number(arr[i - 1]?.[j - 1] ? true : false) +
    Number(arr[i - 1]?.[j    ] ? true : false) +
    Number(arr[i - 1]?.[j + 1] ? true : false) +
    Number(arr[i    ]?.[j - 1] ? true : false) +
    Number(arr[i    ]?.[j + 1] ? true : false) +
    Number(arr[i + 1]?.[j - 1] ? true : false) +
    Number(arr[i + 1]?.[j    ] ? true : false) +
    Number(arr[i + 1]?.[j + 1] ? true : false)
  );
};

const nextCells = (array: Field): Field => {
  const next = [...array];
  array.forEach((row, i) => {
    row.forEach((currentCell, j) => {
      const neighbors = countAliveNeighbors(array, i, j);
      next[i][j] = currentCell
        ? neighbors === 2 || neighbors === 3
        : neighbors === 3;
    });
  });
  return next;
};

type LifeGameOption = {
  width?: number;
  height?: number;
  interval?: number;
  initialAliveRatio?: number;
};
export function useLifeGame({
  width,
  height,
  interval = 1000,
  initialAliveRatio = 0.1,
}: LifeGameOption = {}) {
  const { rows, columns } = useCellNum();
  const [cells, setCells] = useState(
    generate2DArrayRandom(rows, columns, initialAliveRatio)
  );

  const handleClickCell = useCallback(
    (i: number, j: number) => {
      const cellsCopy = [...cells];
      cellsCopy[i][j] = !cellsCopy[i][j];
      setCells(cellsCopy);
    },
    [cells]
  );

  useEffect(() => {
    const id = setInterval(() => {
      setCells(nextCells(cells));
    }, interval);
    return () => clearInterval(id);
  }, [cells]);

  return {
    cells,
    setCells,
    handleClickCell,
  };
}
