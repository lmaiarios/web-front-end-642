import { useState } from 'react'
import './Form.css'

function Form(){
    const [name, setName] = useState('')
    const [age, setAge] = useState(18)
    const [employeed, setEmployeed] = useState(false)

    const handleName = event => setName(event.target.value)
    const handleAge = event => setAge(event.target.value)

    const handleSubmit = event => {
        event.preventDefault()

        const data = { name, age, employeed }
        console.log(data)
        //alert('Informações enviadas!')
        setName('')
        setAge(18)
        setEmployeed(false)
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input type="text" value={name} placeholder="Nome" onChange={handleName}/> <br/>
            Idade: <input type="number" value={age} onChange={handleAge}/> <br/>
            Está empregado: <input type="checkbox" checked={employeed} onChange={() => setEmployeed(!employeed)}/> <br/>
            <input type="submit" value="Enviar" />
        </form>
    );
}

export default Form;