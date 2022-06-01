import React from 'react'
import Navbar from '../navbar/Navbar'
import { Pay } from '../Pay/Pay'
import './Home.css'

const Home = () => {
  return (
    <div className=''>
       <Navbar />
       <Pay />
    </div>
  )
}

export default Home