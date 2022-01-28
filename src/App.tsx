import { LifeGameField } from './components/Field';
import { useKeyOnResize } from './hooks/useKeyOnResize';

function App() {
  const { key } = useKeyOnResize();

  return <LifeGameField key={key} />;
}

export default App;
