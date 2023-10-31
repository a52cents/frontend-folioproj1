import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Cars.css'
const Cars = () => {
const [cars, setCars] = useState([])

useEffect(() => {
    const fetchAllCars = async () => {
        try{
            const res = await axios.get("https://car-portfolio.onrender.com/cars")
            setCars(res.data)
        }catch(err){
            console.log(err)
        }
    }
    fetchAllCars()
},[])

    const handleDelete = async (id) => {
        try{
            const res = await axios.delete(`https://car-portfolio.onrender.com/cars/`+id)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

  return (
    <>
    <div>
        <h1>Cars</h1>
        <div className="cars">
            {cars.map((car) => (
                <div className="car"  key={car.idcar} >
                    {car.cover && <img src={car.cover} alt="" />}
                    <h2>{car.title}</h2>
                    <p>{car.description}</p>
                    <p>{car.price} €</p>
                    <button className="delete" onClick={() => {handleDelete(car.idcar)}}>Delete</button>
                    <button className="update"><Link to={`/update/${car.idcar}`}>Update</Link></button>


                </div>
                
                
            ))}
            
            <button><Link to='/add'>Add new car</Link></button>
        </div>
    </div>
    </>
  )
}

export default Cars