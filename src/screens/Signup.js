import { React, useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [credentials, setcredentials] = useState({
    name: "",
    location: "",
    email: "",
    password: "",
  });
  const submithandler = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: credentials.name,
        location: credentials.location,
        email: credentials.email,
        password: credentials.password,
      })
      
    });
    const json= await response.json();
    console.log(response)
    console.log(json);
    if(response.status===400)
    {
        alert("Enter valid data")
    }
    if(response.status===404)
    {
      alert("User Already Exists");
    }
    else{
        alert("Data submitted Successfully")
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
            <div className="card-header bg-primary text-white">Sign Up</div>
            <div className="card-body">
              <form onSubmit={submithandler}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    value={credentials.name}
                    onChange={changehandler}
                  />{" "}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Location"
                    name="location"
                    value={credentials.location}
                    onChange={changehandler}
                  />{" "}
                </div>
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
                  <button className="btn btn-primary mr-3">Submit</button>
                  <Link to="/login" className="btn btn-success mr-3">
                    Already a User
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
