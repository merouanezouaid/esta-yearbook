import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax';
import Graduation from './assets/Graduation.gif'



function Slider() {
    return (
<ParallaxLayer offset={0.99} speed={0.5}>
<div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className="mb-8 text-4xl leading-relaxed">
          This class was a very amazing place to meet, learn, work, <s>suffer</s>, enjoy, and have fun together!
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={Graduation}
          />
        </div>
      </div>
        </ParallaxLayer>
    )
}

export default Slider
