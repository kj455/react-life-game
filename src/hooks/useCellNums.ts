import { useMemo } from 'react';
import { useWindowSize } from './useWindowSize';

const CELL_SIZE = 12; // px

export const useCellNum = () => {
  const { width, height } = useWindowSize();
  const rows = useMemo(() => Math.ceil(height / CELL_SIZE), [height]);
  const columns = useMemo(() => Math.ceil(width / CELL_SIZE), [width]);
  return {
    rows,
    columns,
  };
};
