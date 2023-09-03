import './App.css';
import { Display } from './components/Display';
import { Forecast } from './components/Forecast';

function App() {
  return (
    <div className='container'>
      <h1 className='h1'>MyWeather</h1>
      <Display />
      <Forecast />
    </div>
  );
}

export default App;
