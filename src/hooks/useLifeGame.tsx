import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { Cell } from '../components/Cell';
import { defaultOption } from '../const';
import { Field, LifeGameOption } from '../types';
import { useCellNum } from './useCellNums';

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

const countAliveNeighbors = (arr: Field, i: number, j: number) => {
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
  const next = array.map((row) => row.map((cell) => cell));
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

export function useLifeGame({
  width,
  height,
  cellSize = defaultOption.cellSize,
  interval = defaultOption.interval,
  initialAliveRatio = defaultOption.initialAliveRatio,
  aliveColor = defaultOption.aliveColor,
  deadColor = defaultOption.deadColor,
}: LifeGameOption) {
  const { rows, columns } = useCellNum({ width, height, size: cellSize });
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

  // re-render on window resize
  useLayoutEffect(() => {
    const onResize = () => {
      const rows = Math.ceil(window.innerHeight / cellSize);
      const columns = Math.ceil(window.innerWidth / cellSize);
      setCells(generate2DArrayRandom(rows, columns, initialAliveRatio));
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // calculate next generation periodically
  useEffect(() => {
    const id = setInterval(() => {
      setCells(nextCells(cells));
    }, interval);
    return () => clearInterval(id);
  }, [cells]);

  const renderLifeGame = () => (
    <>
      {cells.map((row, i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'row' }}>
          {row.map((cell, j) => (
            <Cell
              key={j}
              isAlive={cell}
              size={cellSize}
              onClick={() => handleClickCell(i, j)}
              aliveColor={aliveColor}
              deadColor={deadColor}
            />
          ))}
        </div>
      ))}
    </>
  );
  return {
    cells,
    setCells,
    handleClickCell,
    renderLifeGame,
  };
}
