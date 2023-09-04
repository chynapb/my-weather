import './App.css';
import { Display } from './components/Display';
import { Forecast } from './components/Forecast';
import { Search } from './components/Search';

function App() {
  return (
    <div className='app'>
      <Search />
      <Display />
      <Forecast />
    </div>
  );
}

export default App;
