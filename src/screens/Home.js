import {React,useEffect,useState} from 'react'
//import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
//import Search from '../components/Search'

const Home = () => {
    const [foodcategory, setfoodcategory] = useState([]);      
    const [fooditems, setfooditems] = useState([]);  
    const [search, setsearch] = useState('');    
    
    const loaddata = async ()=>{
        let response = await fetch("http://localhost:5000/api/DisplayData",{
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        }
     } );
     response = await response.json();
    //console.log(response[0],response[1]);
    setfooditems(response[0]);
    setfoodcategory(response[1]);
    }

    useEffect(()=>{
        loaddata();
    },[])

    return (
        <div>
        <div className='row'>
        <Navbar/>
        </div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner" id="carousel">
        <div className='carousel-caption' style={{zIndex:"10"}}>
        <div class="d-flex justify-content-center">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setsearch(e.target.value)}}/>
    { /* <button class="btn btn-success" type="submit">Search</button> */ }
    </div>
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
        <div className='row'>
        <h3 className='text-center'>Recipes</h3>
        </div>
        <div className='container'>
        {
          foodcategory!==[] ?
          foodcategory.map((data)=>{
            return (
                <div className="row mb-3">
                <div key={data._id} className="fs-3 m-3">
                    {data.CategoryName}
                </div><hr />
                {
                fooditems!==[]
                ?
                fooditems.filter(items =>( items.CategoryName === data.CategoryName ) && (items.name.toLowerCase().includes(search.toLowerCase())))
                .map((filteritems)=>{
                    return(
                        <div  key={filteritems._id} className="col-12 col-md-6 col-lg-3">
                        <Card foodName={filteritems.name}
                        imgsrc={filteritems.img}/>
                        </div>
                    )
                }):<div>No such data found</div>
            }
                </div>
                
            )
          })
          
          : <div>**********</div>

        }

       
       
        </div>
          
        <div className='row'>
        <Footer/>
        </div>
          
        </div>
    )
}

export default Home
