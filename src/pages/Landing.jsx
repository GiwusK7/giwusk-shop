import React from 'react'
import { FeaturedProducts, Hero } from '../components'

import {customFetch} from '../utils'
const url = '/products?featured=true';

export const loader = async () =>{
  const response = await customFetch(url);
   const products =  response.data.data;
   return { products};
 }

const Landing = () => {
  return (
    <div>
      <Hero/>
      <FeaturedProducts/>
    </div>
  )
}

export default Landing


// import React from 'react'
// import {Hero } from '../components'
// import {FeaturedProducts} from '../components'



// const Landing = () => {
//   return (
//     <>
//      <Hero/>
//      <FeaturedProducts/>
//     </>
   
//   )
// }

// export default Landing;