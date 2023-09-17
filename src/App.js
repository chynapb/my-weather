import './App.css';
import axios from 'axios';
import { TailSpin } from 'svg-loaders-react';
import { useState } from 'react';
import { Current } from './components/Current';
import { Forecast } from './components/Forecast';

function App() {
  const [data, setData] = useState({});
  const [city, setCity] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const url = `http://api.weatherapi.com/v1/forecast.json?key=67e40025d62146e9afa123331231009&q=${city}&days=6&aqi=no&alerts=no`;

  const getWeather = (event) => {
    if (event.key === 'Enter') {
      setIsLoading(true);
      axios
        .get(url)
        .then((response) => {
          console.log(response.data);
          setData(response.data);
        })
        .catch((error) => {
          if (error) {
            setErrorMsg('Oops! Something went wrong.\n Please try again.');
          }
        });
      setCity('');
      setErrorMsg('');
      setIsLoading(false);
    }
  };

  return (
    <div className='app'>
      <div className='search'>
        <input
          type='text'
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={getWeather}
          placeholder='Enter location...'
        />
      </div>
      <div className='container'>
        {isLoading ? (
          <TailSpin
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ) : (
          <>
            {!errorMsg ? (
              <>
                <Current data={data} />
                <Forecast data={data} />
              </>
            ) : (
              <p className='error'>{errorMsg}</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
