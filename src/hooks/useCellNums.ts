import { useMemo } from 'react';
import { useWindowSize } from './useWindowSize';

export const useCellNum = ({
  width,
  height,
  size,
}: {
  width?: number;
  height?: number;
  size: number;
}) => {
  const { width: fullWidth, height: fullHeight } = useWindowSize();
  const w = width || fullWidth;
  const h = height || fullHeight;
  const rows = useMemo(() => Math.ceil(h / size), [h]);
  const columns = useMemo(() => Math.ceil(w / size), [w]);

  return {
    rows,
    columns,
  };
};
