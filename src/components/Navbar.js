import React from 'react'
import { Link,useNavigate} from 'react-router-dom'


const Navbar = () => {
  const navigate = useNavigate();
  const logouthandler=()=>{
    localStorage.removeItem("authToken");
    navigate("/login")
  }
    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">RECIPES</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link className="nav-link active me-1 fs-4" aria-current="page" to="/">Home</Link>
              </li> 
              {(localStorage.getItem("authToken"))?
              <li className="nav-item">
              <Link className="nav-link active me-1 fs-4"  aria-current="page" to="/">My Recipes</Link>
            </li>: ""}
            </ul>
            {!(localStorage.getItem("authToken"))?
            <div className='d-flex'>
            <Link className="btn text-success bg-white mx-1 fs-5"  to="/Login">Login</Link>
            <Link className="btn text-success bg-white mx-1 fs-5" to="/Signup">Signup</Link>
            </div>
               : <div className="btn text-danger bg-white mx-1 fs-5" onClick={logouthandler}>Logout </div>
    }
          </div>
        </div>
      </nav>
       
    )
}

export default Navbar
