import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div className="container my-5">

  <footer className="text-center text-white" style= {{"background-color": "#f1f1f1;"}}>
 
  <div className="container pt-4">
   

  <div className="text-center text-dark p-3" style={{"background-color": "rgba(0, 0, 0, 0.2);"}}>
    © 2020 Copyright:
    <Link className="text-dark" to="https://recipe.com/"> RECIPES.com</Link>
  </div>
  </div>
  </footer>
  </div>
 
    )
}

export default Footer
