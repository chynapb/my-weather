export const Display = () => {
  return (
    <div className='display'>
      <h3>Current Weather</h3>
      <div className='current-weather'>
        <h1>60°F</h1>
        <img
          src={'/imgs/sunny.png'}
          className='display-img'
          alt='weather'
        ></img>
      </div>
    </div>
  );
};
