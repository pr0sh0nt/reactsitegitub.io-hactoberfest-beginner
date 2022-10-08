//import logo from './logo.svg';
import About from './components/About';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
    {/*<Navbar title = "Music" aboutText="About us"/>*/}
    <Navbar title="Text"/>
    <div className="container my-3">
    <Textform heading="Enter your text to analyze below"/>
    <About/>
    </div>
   </>
  );
}

export default App;
