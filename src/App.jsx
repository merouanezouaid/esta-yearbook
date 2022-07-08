import "./App.css";
import React, { useRef } from "react"
import { Parallax } from '@react-spring/parallax';

// import Home from "./Components/Home"
// import Yearbook from "./Components/Yearbook"
// import Footer from "./Components/Footer"
import Spinner from "./Components/assets/Spinner"

const Slider = React.lazy(()=> import("./Components/Slider")) 
const Home = React.lazy(()=> import("./Components/Home")) 
const Yearbook = React.lazy(()=> import("./Components/Yearbook")) 
const Footer = React.lazy(()=> import("./Components/Footer")) 




function App() {
  const ref = useRef();
  return (
    <div className="App">
      <div className="App-content">

      <Parallax pages={10} ref={ref}>

          <React.Suspense fallback={<Spinner/>}>
          <Home/>
            <Slider/>
          <Yearbook/>
          <Footer/>

          </React.Suspense>

      </Parallax>


      </div>
    </div>
  );
}

export default App;
