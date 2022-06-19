import "./App.css";
import { useRef } from "react"
import { Parallax } from '@react-spring/parallax';

import Home from "./Components/Home"
import Slider from "./Components/Slider"
import Yearbook from "./Components/Yearbook"
import Footer from "./Components/Footer"


function App() {
  const ref = useRef();
  return (
    <div className="App">
      <div className="App-content">
      <Parallax pages={3.2} ref={ref}>

          <Home/>
          <Slider/>
          <Yearbook/>
          <Footer/>


      </Parallax>

      </div>
    </div>
  );
}

export default App;
