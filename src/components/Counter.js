import { useState } from 'react'

function Counter(props){
    /* const pessoa = { name: 'Lucas', age: 26 }
    const { name } = pessoa */
    /* const numeros = [10, 20, 30, 40, 50]
    const [ primeiroNumero, segundoNumero, ...resto ] = numeros
    console.log(resto) */

    const [value, setValue] = useState(props.initial_value || 0)

    /* const add = () => setValue(value+1)
    const remove = () => setValue(value-1) */
    const handleChange = change => () => setValue(value+change)
    return (
        <div className="counter">
            <h1>
                Contador: {value} 
            </h1>
            <button onClick={handleChange(1)}>Incrementar</button>
            <button onClick={handleChange(-1)}>Decrementar</button>
            <button onClick={() => setValue(props.initial_value || 0)}>Reset</button>
        </div>
    );
}

export default Counter;