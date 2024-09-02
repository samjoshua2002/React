import React from 'react'
import { Link } from 'react-router-dom'
import SimpleSlider from './components/SimpleSlider'


// npm install slick-carousel

function Dashboard() {
  return (
    <div>
      <SimpleSlider/>
      
      <h1>Dashboard</h1>
      <Link to={"/"}>
      <button>Go to Login page</button></Link>
        
    </div>
  )
}

export default Dashboard