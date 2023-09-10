import './App.css';
import { Current } from './components/Current';
import { Forecast } from './components/Forecast';
import { Search } from './components/Search';

function App() {
  return (
    <div className='app'>
      <Search />
      <div className='container'>
        <Current />
        <Forecast />
      </div>
    </div>
  );
}

export default App;
