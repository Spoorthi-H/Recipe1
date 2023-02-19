import {React,useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
      let navigate = useNavigate();
        const [credentials, setcredentials] = useState({
          email: "",
          password: "",
        });
        const submithandler = async (e) => {
          e.preventDefault();
          const response = await fetch("http://localhost:5000/api/loginuser", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            })
            
          });
          const json= await response.json();
          console.log(json);
          if(response.status===200)
          {
            localStorage.setItem("authToken",json.authToken)
            console.log(localStorage);
            alert("Login Successful, click ok");
            navigate("/");
          }
          else{
              alert("Enter valid data")
          }
        };
      
        const changehandler = (e) => {
          setcredentials({
            ...credentials,[e.target.name] : e.target.value}
          );
        };
    
    return (
        <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header bg-primary text-white">Login</div>
              <div className="card-body">
                <form onSubmit={submithandler}>
                  
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      value={credentials.email}
                      onChange={changehandler}
                    />{" "}
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Password"
                      type="password"
                      name="password"
                      value={credentials.password}
                      onChange={changehandler}
                    />{" "}
                  </div>
  
                  <br />
                  <div>
                    <button className="btn btn-success mr-3">Submit</button>
                    <Link to="/signup" className="btn btn-primary mr-3">
                      New User
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Login
