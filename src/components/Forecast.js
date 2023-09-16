import moment from 'moment';

export const Forecast = ({ data }) => {
  return (
    // Display 5 day forecast when city entered
    <>
      {data.current && (
        <div className='forecast'>
          <div>
            <h4>{moment(data.forecast.forecastday[1].date).format('ddd')}</h4>
            <img
              src={data.forecast.forecastday[1].day.condition.icon}
              alt='Day 1'
              className='forecast-img'
            />
            <p>{Math.round(data.forecast.forecastday[1].day.avgtemp_f)}°F</p>
          </div>
          <div>
            <h4>{moment(data.forecast.forecastday[2].date).format('ddd')}</h4>
            <img
              src={data.forecast.forecastday[2].day.condition.icon}
              alt='Day 2'
              className='forecast-img'
            />
            <p>{Math.round(data.forecast.forecastday[2].day.avgtemp_f)}°F</p>
          </div>
          <div>
            <h4>{moment(data.forecast.forecastday[3].date).format('ddd')}</h4>
            <img
              src={data.forecast.forecastday[3].day.condition.icon}
              alt='Day 3'
              className='forecast-img'
            />
            <p>{Math.round(data.forecast.forecastday[3].day.avgtemp_f)}°F</p>
          </div>
          <div>
            <h4>{moment(data.forecast.forecastday[4].date).format('ddd')}</h4>
            <img
              src={data.forecast.forecastday[4].day.condition.icon}
              alt='Day 4'
              className='forecast-img'
            />
            <p>{Math.round(data.forecast.forecastday[4].day.avgtemp_f)}°F</p>
          </div>
          <div>
            <h4>{moment(data.forecast.forecastday[5].date).format('ddd')}</h4>
            <img
              src={data.forecast.forecastday[5].day.condition.icon}
              alt='Day 5'
              className='forecast-img'
            />
            <p>{Math.round(data.forecast.forecastday[5].day.avgtemp_f)}°F</p>
          </div>
        </div>
      )}
    </>
  );
};
