import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './Add.css';

const Update = () => {
    const [car, setCar] = useState({
        title: '',
        description: '',
        price: null,
        cover: ''
    });

    const navigate = useNavigate();
    const location = useLocation();
    const carId = location.pathname.split("/")[2];

    const handleChange = (e) => {
        if (e.target.name === 'cover') {
            setCar({ ...car, cover: e.target.files[0] });
        } else {
            setCar({ ...car, [e.target.name]: e.target.value });
        }
    }

    const handleClick = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', car.title);
        formData.append('description', car.description);
        formData.append('price', car.price);
        formData.append('cover', car.cover);

        try {
            await axios.put(`https://defiant-newt-spacesuit.cyclic.app/cars/${carId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            navigate("/");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='form'>
            <h1>Update car</h1>
            <input type="text" placeholder='title' onChange={handleChange} name="title" />
            <input type="text" placeholder='description' onChange={handleChange} name='description' />
            <input type="number" placeholder='price' onChange={handleChange} name='price' />
            <input type="file" onChange={handleChange} name='cover' accept="image/*" />

            <button onClick={handleClick} className='btn'>Update</button>
        </div>
    );
}

export default Update;
