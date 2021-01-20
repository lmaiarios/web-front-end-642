import { useState, useEffect } from 'react'
import './Weather.css'
function Weather(props){
    const [info, setInfo] = useState({
        city: props.city,
        description: '',
        icon: null,
        temp: null,
        temp_min: null,
        temp_max: null
    })

    const fetchData = () => {
        const api_key = "5d0b33a3adaa365fb1561a27d2baade8"
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${api_key}&units=metric&lang=pt_br`
        fetch(url)
            .then( res => res.json())
            .then( data =>{
                const description = data.weather[0].description
                const icon = data.weather[0].icon
                const temp = data.main.temp
                const temp_min = data.main.temp_min
                const temp_max = data.main.temp_max

                setInfo({
                    city: props.city,
                    description,
                    icon,
                    temp,
                    temp_min,
                    temp_max
                })
            })
            .catch(err => alert("Ocorreu um erro na busca. Certifique-se de pesquisar uma cidade válida."))
    }
    useEffect(()=>{
        fetchData()
    }, [props.city])
    return (
        <div className='weather-card'>
            <div className="img-container">
                { info.icon && <img src={`http://openweathermap.org/img/wn/${info.icon}@2x.png`} alt="Ícone"></img> }
            </div>
            <div className="info-container">
                <h3>{info.city}</h3>
                <p>Descrição: {info.description}</p>
                <p>Temperatura: {info.temp}C</p>
                <p>Mín.: {info.temp_min}C</p>
                <p>Máx.: {info.temp_max}C</p>
            </div>
        </div>
    );
}

export default Weather