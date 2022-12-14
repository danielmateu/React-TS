import { Counter } from './components/Counter';
import { Usuario } from './components/Usuario';

import { TimerPadre } from './components/TimerPadre';
import { ContadorRed } from './components/ContadorRed';
import { Formulario } from './components/Formulario';


function App() {
  return (
    <>
      <h1>React + Typescript</h1>
      <hr />

      <h2>useState</h2>
      <Counter/>
      <br /><hr />
      <Usuario/>

      <h2>useEffect - useRef</h2>
      <br /><hr />
      <TimerPadre/>

      <h2>useReducer</h2>
      <br /><hr />
      <ContadorRed/>

      <h2>customHooks</h2>
      <br /><hr />
      <Formulario/>

    </>
  );
}

export default App;
