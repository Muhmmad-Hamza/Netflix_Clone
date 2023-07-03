import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
            <Link to="/home"><button className='btn btn-danger'>Go to Home</button></Link>
    </div>
  )
}

export default Home
