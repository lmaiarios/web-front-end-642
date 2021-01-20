import { useState } from 'react'
import Weather from './Weather'
import './Search.css'

function Search(){
    const [text, setText] = useState('')
    const [city, setCity] = useState('Rio de Janeiro')
    const handleSubmit = e => {
        e.preventDefault()
        setCity(text)
        setText('')
    }
    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <input className="search-field" value={text} onChange={e => setText(e.target.value)} placeholder="Digite uma cidade" />
            </form>
            <Weather city={city} />
        </div>
    )
}

export default Search