import Home from "./screens/Home";

import {BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Login from "./screens/Login";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Signup from "./screens/Signup";

function App() {
  return (
    <div>
    <Router>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/signup" element={<Signup/>}/>
  
    </Routes>
    </Router>
    </div>
   
  );
}

export default App;
