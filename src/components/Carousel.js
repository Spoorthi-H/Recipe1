import React from 'react'

const Carousel = () => {
    return (
        <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner" id="carousel">
        <div className='carousel-caption' style={{zIndex:"10"}}>
        <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-success" type="submit">Search</button>
    </form>
        </div>
          <div className="carousel-item active">
            <img src="https://img.freepik.com/free-photo/schezwan-szechwan-hakka-noodles-with-paneer-cottage-cheese-served-bowl-selective-focus_466689-74687.jpg?size=626&ext=jpg&ga=GA1.1.2046461146.1676272461&semt=ais" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://img.freepik.com/free-photo/schezwan-fried-rice-masala-szechuan-rice-is-popular-indo-chinese-food-served-plate-bowl-with-chopsticks-selective-focus_466689-74708.jpg?size=626&ext=jpg&ga=GA1.2.2046461146.1676272461&semt=ais" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?size=626&ext=jpg&ga=GA1.1.2046461146.1676272461&semt=ais" className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
        </div>
    )
}

export default Carousel
