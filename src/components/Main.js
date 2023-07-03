import React from 'react'
import Card from './Card'
import MoviesData from '../data/Data'



const Main = () => {
  return (
    <div className='outer '>
           <div className='mainpic'>
                
                <img  src='https://res.cloudinary.com/practicaldev/image/fetch/s--K8sVFuCD--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hjukkwcishwdbbo3vp5m.jpeg' className='imagesetting'/>
                <Card abc = {MoviesData}/>
           </div>
    </div>
  )
}

export default Main
