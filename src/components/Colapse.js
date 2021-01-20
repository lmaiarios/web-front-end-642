import { useState, useEffect } from 'react'
import Surprise from './Surprise'

function Colapse(){
    const [reaveal, setReaveal] = useState(false)
    useEffect(()=>{
        alert("Componente Colapse atualizou!!")
    }, [reaveal])

    return (
        <div className="colapse">
            <h1>Aperte o botão!</h1>
            <button onClick={()=>setReaveal(!reaveal)}>{reaveal ? 'Esconder' : 'Revelar'}</button>
            { reaveal && <Surprise />}
        </div>
    );
}

export default Colapse