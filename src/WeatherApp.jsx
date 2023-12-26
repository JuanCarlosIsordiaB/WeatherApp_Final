
import React, { useEffect, useState } from 'react'
import { WeatherForm } from './components/WeatherForm';
import { WeatherMainInfo } from './components/WeatherMainInfo';

const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

export const WeatherApp = () => {

    const [weather, setWeather] = useState(null);

    useEffect(() => {
      document.title = `WeatherApp | ${weather?.location.name ?? ''}`
    }, [weather]);
    

    const loadInfo = async(city) => {

        try {
            const req = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`, {
              referrerPolicy: 'unsafe_url'
            });

            const res = await req.json();

            //Ingresamos la respuesta json a la variable weather
            setWeather(res);
            console.log(weather);

        } catch (error) {
            console.log(error);
            
        }
    }

    const onFindCity = (city) => {
      console.log(`City to find: ${city}`);
      
      setWeather(null);
      loadInfo(city);
    }


  return (

    <div>
        <h1>Weather<span className='color'>App</span></h1>
        {/* form */}
        <WeatherForm onFindCity={onFindCity}/>
        {/* Info */}
        <WeatherMainInfo weather={weather} />
    </div>
  )
}
