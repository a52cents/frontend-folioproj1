import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Add.css';

const Update = () => {
  const [car, setCar] = useState({
    title: '',
    description: '',
    price: null,
    cover: null, // Modifier pour gérer le fichier image
  });

  const navigate = useNavigate();
  const location = useLocation();
  const carId = location.pathname.split('/')[2];

  const handleChange = (e) => {
    if (e.target.name === 'cover') {
      // Pour gérer le changement de fichier image
      setCar({ ...car, [e.target.name]: e.target.files[0] });
    } else {
      setCar((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', car.title);
    formData.append('description', car.description);
    formData.append('price', car.price);
    formData.append('image', car.cover); // Ajout du fichier image

    try {
      await axios.put(`https://car-portfolio.onrender.com/cars/${carId}`, formData, {
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
    <div className="form">
      <h1>Update this car</h1>
      <input type="text" placeholder="title" onChange={handleChange} name="title" />
      <input type="text" placeholder="description" onChange={handleChange} name="description" />
      <input type="number" placeholder="price" onChange={handleChange} name="price" />
      <input type="file" onChange={handleChange} name="cover" />

      <button onClick={handleClick}>Update</button>
    </div>
  );
};

export default Update;
