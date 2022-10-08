//import logo from './logo.svg';
import About from "./components/About";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import contextData from "./context/contextData";
import ChangeDarkMode from "./hook/ChangeDarkMode";
function App() {
  const darkModeValue = ChangeDarkMode();

  return (
    <contextData.Provider value={darkModeValue}>
      <>
        {/*<Navbar title = "Music" aboutText="About us"/>*/}
        <Navbar title="Text" />
        <div className="container my-3">
          <Textform heading="Enter your text to analyze below" />
          <About />
        </div>
      </>
    </contextData.Provider>
  );
}

export default App;
