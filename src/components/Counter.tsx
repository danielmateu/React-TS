import {useState} from 'react';

export const Counter = () => {

    const [counter, setCounter] = useState(0);

    const increment = (number:number = 1):void => {
        setCounter(counter + number);
        // console.log(number);
    }

  return (
    <div className="mt-5">
    <h3>Counter - useState</h3>
    <span>Valor: {counter}</span>
    <br/>
    <button
    onClick={() => increment()}
    className="btn btn-outline-primary mt-2">
        suma 1
    </button>
    <button
    onClick={() => increment(2)}
    className="btn btn-outline-primary mt-2">
        suma 2
    </button>
    <button
    onClick={() => setCounter(0)}
    className="btn btn-outline-danger mt-2">
        reset
    </button>
    <hr />
    </div>
  )
}
