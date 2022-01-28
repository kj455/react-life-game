import { FC } from 'react';
import { useLifeGame } from '../hooks/useLifeGame';
import { Cell } from './Cell';

export const LifeGameField: FC = () => {
  const { cells, handleClickCell } = useLifeGame();

  return (
    <div style={{ overflow: 'hidden' }}>
      {cells.map((row, i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'row' }}>
          {row.map((cell, j) => (
            <Cell
              key={j}
              isAlive={cell}
              onClick={() => handleClickCell(i, j)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
