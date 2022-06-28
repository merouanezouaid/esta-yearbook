import React, {useEffect, useState} from 'react'
import { ParallaxLayer } from '@react-spring/parallax';
import Grid from '@mui/material/Grid'
import Badge from '@mui/material/Badge'
import Card from './Card'
import Github from './Github'
import Crown from "./assets/crown.svg"



function Yearbook() {
    return (
      <ParallaxLayer offset={1.70} speed={1}>
      <div className="object-cover">
          <p className="mb-8 text-4xl leading-relaxed">
          Yearbook :)
          </p>

          <Grid className="px-5 md:px-20" container justifyContent="center">
            
    <Grid item xs={4} sm={4} md={4} className="teacher">
        <div className="rounded-lg border h-full border-gray-200 shadow-md bg-gray-800">
                      <div class="flex flex-col items-center pb-10 text-center">
          <img className="w-24 h-24 mb-0" src={Crown} alt="hello" />
                    <img class="w-24 h-24 object-cover rounded-full shadow-lg" src="https://i1.rgstatic.net/ii/profile.image/418297607671809-1476741329328_Q512/Mustapha-Amrouch.jpg"/>
                    <h5 class="mt-3 text-xl font-medium text-white">Mustapha Amrouch</h5>
                    <p class="text-sm p-3 text-gray-400">The best teacher in the world</p>
                </div>
        </div>
    </Grid>
</Grid>
            <Card />
          <p className="mt-4 leading-relaxed">
          EST GI Promo 2022 student?<br/>
          <Github />
          </p>
          
      </div>

        </ParallaxLayer>
    )
}

export default Yearbook
