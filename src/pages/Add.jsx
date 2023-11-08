import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Add.css'
const Add = () => {

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
    const handleFileChange = (e) => {
        setCar({ ...car, cover: e.target.files[0] });
      };
    
    const handleClick = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('title', car.title);
        formData.append('description', car.description);
        formData.append('price', car.price);
        formData.append('cover', car.cover);
    
        try {
          await axios.post('https://defiant-newt-spacesuit.cyclic.app/cars', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          navigate('/');
        } catch (err) {
          console.log(err);
        }
      };
    
      return (
        <div>
          <h1>Add a new car</h1>
          <form className='form'>
            <input type='text' placeholder='title' onChange={handleChange} name='title' />
            <input type='text' placeholder='description' onChange={handleChange} name='description' />
            <input type='number' placeholder='price' onChange={handleChange} name='price' />
            <input type='file' onChange={handleFileChange} accept='image/*' name='cover' />
    
            <button className='btn' onClick={handleClick}>Add</button>
          </form>
        </div>
      );
    };
    
    export default Add;