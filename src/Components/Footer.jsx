import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax';
import amogus from "./assets/amogus.png"

function Footer() {
    const loveAndCode = "<3 and </>"
    return (
        <div>

        <ParallaxLayer offset={9} speed={1} style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}>
        <div className="hidden md:block">
            
            <p className="mb-8 text-4xl leading-relaxed">
                Special thanks to our impostors
            </p>
            <img className="px-8" src={amogus} alt="impostors from amongus" />
            <footer class="p-4 rounded-lg shadow md:px-6 md:py-8 ">
    <hr class="my-6 sm:mx-auto border-gray-700 lg:my-8" />
    <span class="block text-sm sm:text-center text-gray-400">© 2022 Kaito. Free and Open Source. Made with {loveAndCode}
    </span>
</footer>
        </div>
  
          </ParallaxLayer>


</div>
)
}

export default Footer
