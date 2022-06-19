import React from 'react'


import { ParallaxLayer } from '@react-spring/parallax';
import Video from "./Video"

function Home() {
    return (
        <ParallaxLayer speed={1}>

        <div className="titles m-5">
            Class of 2022
        </div>
        <Video embedId="moIISeuOL38" />
        
        
        </ParallaxLayer>
    )
}

export default Home
