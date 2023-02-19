import React from 'react'

const Search = () => {
    return (
        
        <div className="container">

        <div className="row height d-flex justify-content-center align-items-center">

        <div className="col col-lg-2">

        <div className="forms-inline">
        
        <input type="text" className="form-control" placeholder="Search Recipe"/>
        </div>

        </div>
       
        <div className='col-md-auto'>
        <div className="forms-inline">
        <button className="btn btn-primary form-control" style={{"width":"10rem;"}}>Search
         </button>
         </div>
       </div>

</div>


          
        </div>
   
        
    );
}

export default Search;
