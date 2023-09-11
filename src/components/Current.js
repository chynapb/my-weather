export const Current = () => {
  return (
    <div className='current'>
      <div className='left'>
        <div className='city'>
          <p>Dallas, Texas</p>
        </div>
        <div>
          <h1>60°F</h1>
        </div>
        <div>
          <p>Partly cloudy</p>
        </div>
      </div>
      <div className='right'>
        <div>
          <h3>Feels Like</h3>
          <p>63°F</p>
        </div>
        <div>
          <h3>Humidity</h3>
          <p>34%</p>
        </div>
        <div>
          <h3>Wind</h3>
          <p>8 MPH</p>
        </div>
      </div>
    </div>
  );
};
