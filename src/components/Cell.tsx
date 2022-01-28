import { memo } from 'react';

type Props = {
  isAlive: boolean;
  onClick: () => void;
  aliveColor?: string;
  deadColor?: string;
};

export const Cell = memo<Props>(
  ({ isAlive, onClick, aliveColor = '#1e3a8a', deadColor = '#0f172b' }) => {
    const colorStyle = { backgroundColor: isAlive ? aliveColor : deadColor };
    return (
      <div
        style={{
          width: '12px',
          height: '12px',
          flexShrink: 0,
          ...colorStyle,
        }}
        onClick={onClick}
      ></div>
    );
  }
);
