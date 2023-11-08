import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Cars.css'
const Cars = () => {
const [cars, setCars] = useState([])

useEffect(() => {
    const fetchAllCars = async () => {
        try{
            const res = await axios.get("https://defiant-newt-spacesuit.cyclic.app/cars")
            setCars(res.data)
        }catch(err){
            console.log(err)
        }
    }
    fetchAllCars()
},[])

    const handleDelete = async (id) => {
        try{
            const res = await axios.delete(`https://defiant-newt-spacesuit.cyclic.app/cars/`+id)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

  return (
    <>
    <div className='frame'>
        <h1>Cars</h1>
        <button className='btn-link'><Link className="link-update" to='/add'>Ajouter une voiture</Link></button>

        <div className="cars">
            {cars.map((car) => (
                <div className="car"  key={car.idcar} >
                    {car.cover && <img src={`https://defiant-newt-spacesuit.cyclic.app/upload/${car.cover}`} alt="" />}
                    <h2>{car.title}</h2>
                    <p>{car.description}</p>
                    <p>{car.price} €</p>
                    <button className="btn" onClick={() => {handleDelete(car.idcar)}}>Supprimer</button>
                    <button className="btn-link"><Link className="link-update" to={`/update/${car.idcar}`}>Modifier</Link></button>


                </div>
                
                
            ))}
            
        </div>
    </div>
    </>
  )
}

export default Cars