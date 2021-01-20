import { useEffect } from 'react'

function Surprise(){
    useEffect(()=>{
        alert("Componente Surprise nasceu!!")
    }, [])
    
    useEffect(()=>{
        return ()=>alert("Componente Surprise morreu!!")
    }, [])
    return (
        <h2>Surpresa!!!!</h2>
    );
}

export default Surprise;