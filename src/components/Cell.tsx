import { memo } from 'react';

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
    aliveColor = '#1e3a8a',
    deadColor = '#0f172b',
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
