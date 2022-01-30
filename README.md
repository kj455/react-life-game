# React life game

A React component that renders "Conway's Game of Life".

![lifegame](https://user-images.githubusercontent.com/38521709/151685605-dc13fa60-8e27-441c-8844-f38f9c7b14e9.gif)

## Installation

### npm:

```bash
$ npm install react-life-game
```

### yarn:

```bash
$ yarn add react-life-game
```

## Usage

```jsx
import { LifeGameField } from 'react-life-game';

function App() {
  return (
    <LifeGameField
      option={
        {
          /* option here */
        }
      }
    />
  );
}
```

### Playground

[CodeSandBox](https://codesandbox.io/s/react-life-game-57q0d?file=/src/App.tsx)

### option

| option            | type   | description                                                                                   | default            |
| ----------------- | ------ | --------------------------------------------------------------------------------------------- | ------------------ |
| initialAliveRatio | number | Ratio of living cells in the initial state ([0,1])                                            | 0.1                |
| interval          | number | Time per each generation ([ms])                                                               | 1000               |
| aliveColor        | string | Color of living cells ( can be any color that "css" can accept. i.e. `blue`, `#1e3a8a`, ... ) | #1e3a8a            |
| deadColor         | string | Color of dead cells ( can be any color that "css" can accept. i.e. `blue`, `#1e3a8a`, ... )   | #0f172b            |
| cellSize          | number | Size of cell ([px])                                                                           | 12                 |
| width             | number | Width of the field of game of life                                                            | window.innerWidth  |
| height            | numer  | Height of the field of game of life                                                           | window.innerHeight |
