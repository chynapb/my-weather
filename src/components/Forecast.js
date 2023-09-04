export const Forecast = () => {
  return (
    <div className='forecast'>
      <h4>4 Day Forecast</h4>
      <img src={'/imgs/sunny.png'} className='forecast-img'></img>
      <img src={'/imgs/partly-cloudy.png'} className='forecast-img'></img>
      <img src={'/imgs/cloudy.png'} className='forecast-img'></img>
      <img src={'/imgs/rain.png'} className='forecast-img'></img>
      <img src={'/imgs/snow.png'} className='forecast-img'></img>
      <img src={'/imgs/partly-cloudy-moon.png'} className='forecast-img'></img>
      <img src={'/imgs/moon.png'} className='forecast-img'></img>
    </div>
  );
};
