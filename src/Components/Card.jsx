import React from 'react'
import Grid from '@mui/material/Grid'

import data from "../data.json"


function Card() {
    // let people = [{
    //     name: "Merouane Zouaid",
    //     picture: "https://pbs.twimg.com/profile_images/1440277608466300941/YcDf1maL_400x400.jpg",
    //     quote: "You are the greatest project you will ever work on."
    // },{
    //     name: "Brahim Elhoube",
    //     picture: "https://i.imgur.com/tN9X2gb.jpeg",
    //     quote: "PHP is the best language in the world :)" 
    // },{
    //     name: "Sidi Ali",
    //     picture: "https://cdn3d.iconscout.com/3d/premium/thumb/graduation-hat-with-certificate-4034005-3337493.png",
    //     quote: "Hello world"
    // }]


    return (
<Grid className="px-5 md:px-20" container spacing={1} justify="center" columns={{ xs: 4, sm: 8, md: 12 }}>
  {data.map((item, i) => (
    <Grid item xs={4} sm={4} md={4} key={i}>
        <div className="rounded-lg border h-full border-gray-200 shadow-md bg-gray-800">
                      <div class="flex flex-col items-center pb-10 text-center">
                    <img class="mt-6 w-24 h-24 object-cover rounded-full shadow-lg" src={item.picture} alt={i}/>
                    <h5 class="mt-3 text-xl font-medium text-white">{item.name}</h5>
                    <p class="text-sm p-3 text-gray-400">{item.quote}</p>
                </div>
        </div>
    </Grid>
  ))}
</Grid>
    )
}

export default Card
