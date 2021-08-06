import React from 'react'
import './Weather.css'

const Weather = ({data}) => {
    const fahrenheit = Math.round((data.main.temp * 1.8 - 459.67))
    const celsius = Math.round((data.main.temp - 273.15))

    return (
        <div className='weather'>
            <div> 
                <div className='headingTitle'>
                <h1>{data.name} - {data.sys.country}</h1>
                <p className='title'><img src ={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}  alt=''/></p>
                    </div>
                    <div className='overallDescription'>
                        <p className='heading'>{data.weather[0].description}</p>  
                    </div>
               <div className='overallReadings'>
               
                    <div className='temperature'>
                        <div className='titleReading'>Temperature</div>
                        <p>{data.main.temp} °K</p>
                        <p>{fahrenheit} °F</p>
                        <p>{celsius} °C</p>
                    </div>
                        <div className='humidity'>
                            <p className='titleReading'>Humidity</p>
                            <p>{data.main.humidity}</p>
                        </div>
                        <div className='pressure'>
                            <p className='titleReading'>Pressure</p>
                            <p>{data.main.pressure} mmHg</p>
                        </div>
                        <div className ='wind'>
                            <p className='titleReading'>Wind</p>
                            <p>{data.wind.speed} m/s</p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Weather;