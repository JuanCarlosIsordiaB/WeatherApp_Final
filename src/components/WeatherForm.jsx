import React, { useState } from 'react';
import Alert from '@mui/material/Alert';  // Importa el componente Alert


export const WeatherForm = ({onFindCity}) => {

    const [city, setCity] = useState('');
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setCity(e.target.value);
        setError(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(city.length < 3) {
            
            setError(true);
            return;
        }
        onFindCity(city);
        
    }

    

  return (
    <form
        onSubmit={handleSubmit}
    
    >
        <input
            type="text" 
            className='input'
            onChange={handleChange}
        />
        {
            error && (
                <Alert severity="error">This is an error alert — check it out!</Alert>
            )
        }


    </form>
  )
}
