import { useReducer } from 'react';

const initialState = {
    contador: 0
}

type ActionType = 
    |{type: 'incrementar'}
    |{type: 'decrementar'}
    |{type: 'custom', payload: number};


export const ContadorReducer = (state: typeof initialState, action: ActionType) => {

    switch (action.type) {
        case 'incrementar':
            return {
                ...state,
                contador: state.contador + 1
            }
        case 'decrementar':
            return { 
                ...state,
                contador: state.contador - 1
            }
        case 'custom':
            return { 
                ...state,
                contador: action.payload
            }


        default:
            return state;
    }

}

export const ContadorRed = () => {

    const [{contador}, dispatch] = useReducer(ContadorReducer, initialState);

    return(
        <>
            <h2>Contador: {contador}</h2>
            <button 
            onClick={() =>dispatch({type: 'incrementar'})}
            className="btn btn-outline-primary">
                +1
            
            </button>
            <button 
            onClick={() =>dispatch({type: 'decrementar'})}
            className="btn btn-outline-primary">
                -1
            </button>
            <button 
            onClick={() =>dispatch({type: 'custom', payload: 10})}
            className="btn btn-outline-danger">
                10
            </button>
        </>
    )
}








// export const ContadorRed = () => {

//     const [state, dispatch] = useReducer(first, second, third)

//     return (
//         <>
//             <h2>Contador: 10</h2>
//         </>
//     )
// }




