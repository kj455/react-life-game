import { memo } from 'react';
import { defaultOption } from '../const';

type Props = {
  isAlive: boolean;
  size: number;
  onClick: () => void;
  aliveColor?: string;
  deadColor?: string;
};

export const Cell = memo<Props>(
  ({
    isAlive,
    size,
    onClick,
    aliveColor = defaultOption.aliveColor,
    deadColor = defaultOption.deadColor,
  }) => {
    const colorStyle = { backgroundColor: isAlive ? aliveColor : deadColor };
    return (
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          flexShrink: 0,
          ...colorStyle,
        }}
        onClick={onClick}
      ></div>
    );
  }
);
