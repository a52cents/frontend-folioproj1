import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Add.css'
const Update = () => {

    const [car, setCar] = useState({
        title: '',
        description: '',
        price: null,
        cover: ''

    })

    const navigate = useNavigate()    

    const handleChange = (e) => {
        setCar((prev) => ({...prev, [e.target.name]: e.target.value}))
    }
    
    const handleClick = async e => {
        e.preventDefault()
        try{
            await axios.put("https://car-portfolio.onrender.com/cars", car)
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }
    console.log(car)
  return (
    <div className='form'>
        <h1>Add a new car</h1>
        <input type="text" placeholder='title' onChange={handleChange} name="title" />
        <input type="text" placeholder='description' onChange={handleChange} name='description' />
        <input type="number" placeholder='price' onChange={handleChange} name='price' />
        <input type="file" onChange={handleChange} name='cover'/>

        <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Update