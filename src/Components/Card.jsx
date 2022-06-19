import React from 'react'
import Grid from '@mui/material/Grid'


function Card() {
    let people = [{
        name: "Kaito Koruba",
        quote: "Coding is my favorite videogame."
    }, {
        name: "Sidi Ali",
        quote: "Hello world"
    },{
        name: "Sidi Ali",
        quote: "Hello world"
    }]


    return (
<Grid className="px-5 md:px-20" container spacing={1} justify="center" columns={{ xs: 4, sm: 8, md: 12 }}>
  {people.map((item, i) => (
    <Grid item xs={4} sm={4} md={4} key={i}>
        <div className="rounded-lg border h-full border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                      <div class="flex flex-col items-center pb-10 text-center">
                    <img class="mt-6 w-24 h-24 rounded-full shadow-lg" src="https://pbs.twimg.com/profile_images/1440277608466300941/YcDf1maL_400x400.jpg" alt={i}/>
                    <h5 class="mt-3 text-xl font-medium text-gray-900 dark:text-white">{item.name}</h5>
                    <p class="text-sm p-3  text-gray-500 dark:text-gray-400">{item.quote}</p>
                </div>
        </div>
    </Grid>
  ))}
</Grid>
    )
}

export default Card
