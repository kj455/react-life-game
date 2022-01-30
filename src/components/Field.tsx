import { FC } from 'react';
import { defaultOption } from '../const';
import { useLifeGame } from '../hooks/useLifeGame';
import { LifeGameOption } from '../types';

type Props = {
  option?: Partial<LifeGameOption>;
};
export const LifeGameField: FC<Props> = ({ option }) => {
  const opt = { ...defaultOption, ...option };
  const { renderLifeGame } = useLifeGame(opt);

  return (
    <div style={{ overflow: 'hidden', width: '100%', height: '100%' }}>
      {renderLifeGame()}
    </div>
  );
};
