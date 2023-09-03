import './App.css';
import { Header } from './components/Header';
import { Display } from './components/Display';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <Display />
      </div>
    </>
  );
}

export default App;
