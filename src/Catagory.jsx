import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


const Catagory = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("/categories.json")
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.error("Error fetching data:", err));
    }, []);

    return (
        <div>
            <h1 className='font-extrabold text-xl'>All Categories</h1>
            <div className='p-4 flex flex-col gap-2'>
                {categories.map((cat, index) => (
                    <NavLink to={`/category/${cat.id}`} className='btn bg-gray-100 text-gray-700 hover:bg-blue-200' key={index}>{cat.name}</NavLink>
                ))}
            </div>
        </div>
    );
};

export default Catagory;
