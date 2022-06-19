import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax';
import amogus from "./assets/amogus.png"

function Footer() {
    return (
        <div>

        <ParallaxLayer offset={2.5} speed={1} style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}>
        <div>
            
            <p className="mb-8 text-4xl leading-relaxed">
                Special thanks to our impostors
            </p>
            <img className="px-8" src={amogus} alt="impostors from amongus" />
            <footer class="p-4 rounded-lg shadow md:px-6 md:py-8 ">
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 Kaito. All Rights Reserved.
    </span>
</footer>
        </div>
  
          </ParallaxLayer>


</div>
)
}

export default Footer
