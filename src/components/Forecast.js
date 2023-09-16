import moment from 'moment';

export const Forecast = ({ data }) => {
  return (
    // Display 5 day forecast when city entered
    <>
      {data.current && (
        <div className='forecast'>
          <div>
            <h4>{moment(data.forecast.forecastday[1].date).format('ddd')}</h4>
            <p>{Math.round(data.forecast.forecastday[1].day.avgtemp_f)}°F</p>
          </div>
          <div>
            <h4>{moment(data.forecast.forecastday[2].date).format('ddd')}</h4>
            <p>{Math.round(data.forecast.forecastday[2].day.avgtemp_f)}°F</p>
          </div>
          <div>
            <h4>{moment(data.forecast.forecastday[3].date).format('ddd')}</h4>
            <p>{Math.round(data.forecast.forecastday[3].day.avgtemp_f)}°F</p>
          </div>
          <div>
            <h4>{moment(data.forecast.forecastday[4].date).format('ddd')}</h4>
            <p>{Math.round(data.forecast.forecastday[4].day.avgtemp_f)}°F</p>
          </div>
          <div>
            <h4>{moment(data.forecast.forecastday[5].date).format('ddd')}</h4>
            <p>{Math.round(data.forecast.forecastday[5].day.avgtemp_f)}°F</p>
          </div>
        </div>
      )}
    </>
  );
};
