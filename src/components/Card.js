import React from 'react'

const Card = (props) => {
    return (
        <div>
        
        <div className="card mt-3" style={{"width": "18rem", "maxHeight":"360px"}}>
      <img src={props.imgsrc} style={{height:"150px",objectFit:"fill"}} className="card-img-top" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">{props.foodName}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
        </div>
        
    )
}

export default Card
