import { Counter } from './components/Counter';
import { Usuario } from './components/Usuario';

import { TimerPadre } from './components/TimerPadre';
import { ContadorReducer } from './components/ContadorReducer';


function App() {
  return (
    <>
      <h1>React + Typescript</h1>
      <hr />

      <h2>useState</h2>
      <Counter/>
      <Usuario/>

      <h2>useEffect - useRef</h2>
      <hr />
      <TimerPadre/>

     <ContadorReducer/>

    </>
  );
}

export default App;
