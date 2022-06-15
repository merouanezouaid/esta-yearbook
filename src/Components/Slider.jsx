import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax';


function Slider() {
    return (
        <ParallaxLayer offset={1} speed={0.5}>
            
        <div className="titles">
            This class was a very amazing place to learn and meet together
        </div>

        </ParallaxLayer>
    )
}

export default Slider
