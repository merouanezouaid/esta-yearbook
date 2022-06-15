import "./App.css";
import { useRef } from "react"
import { Parallax } from '@react-spring/parallax';

import Home from "./Components/Home"
import Slider from "./Components/Slider"


function App() {
  const ref = useRef();
  return (
    <div className="App">
      <div className="App-content">
      <Parallax pages={2} ref={ref}>

          <Home/>
          <Slider/>


      </Parallax>
      </div>
    </div>
  );
}

export default App;
