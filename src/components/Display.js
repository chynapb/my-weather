export const Display = () => {
  return (
    <div className='weather-display'>
      <h3>Current Weather</h3>
      <div className='current-weather'>
        <img
          src={'/imgs/partly-cloudy.png'}
          className='display-img'
          alt='weather'
        ></img>
        <h1>60°F</h1>
      </div>
    </div>
  );
};
