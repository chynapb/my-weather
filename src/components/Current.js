import moment from 'moment/moment';

export const Current = ({ data }) => {
  return (
    // Display weather info when city entered
    <>
      {data.current ? (
        <div className='current'>
          <div className='left'>
            <div>
              <p className='city'>
                {data.location.name}, {data.location.region}
              </p>
            </div>
            <div>
              <h1>{Math.floor(data.current.temp_f)}°F</h1>
              <img
                src={data.current.condition.icon}
                alt='Current'
                className='current-img'
              />
            </div>
            <div>
              <p className='condition'>{data.current.condition.text}</p>
            </div>
            <div>
              <p className='date'>
                {moment(data.location.localtime).format('LLL')}
              </p>
            </div>
          </div>
          <div className='right'>
            <div>
              <p>
                <span className='bold'>High: </span>
                {Math.floor(data.forecast.forecastday[0].day.maxtemp_f)}°F
              </p>
            </div>
            <div>
              <p>
                <span className='bold'>Low: </span>{' '}
                {Math.floor(data.forecast.forecastday[0].day.mintemp_f)}°F
              </p>
            </div>
            <div>
              <p>
                <span className='bold'>Feels Like: </span>{' '}
                {Math.floor(data.current.feelslike_f)}°F
              </p>
            </div>
            <div>
              <p>
                <span className='bold'>Humidity: </span>{' '}
                {Math.floor(data.current.humidity)}%
              </p>
            </div>
            <div>
              <p>
                <span className='bold'>Wind: </span>{' '}
                {Math.floor(data.current.wind_mph)} MPH
              </p>
            </div>
          </div>
        </div>
      ) : (
        // Display welcome message if no city is typed
        <div className='welcome'>
          <p>
            Welcome to MyWeather!
            <br />
            Enter a location to get started.
          </p>
        </div>
      )}
    </>
  );
};
