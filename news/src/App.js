
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='App-side-hero-flex'>
       <Sidebar/>
      <Hero/>
      </div>
    </div>
  );
}

export default App;
