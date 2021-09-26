import React, { useEffect, useState } from 'react';
import Teachers from '../teachers/Teachers';
import './Teacherdb.css';
import Cart from '../cart/Cart';

const TeacherDb = () => {
    const [teachers, setTeachers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./Fakedb.json')
            .then(res => res.json())
            .then(data =>  setTeachers(data));
    }, []);
    const handleAddToCart = (teacher) => {
        const newCart = [...cart,teacher];
        setCart(newCart);
    }

    return (
        <div className="container">
        <div className="institution-container">
        <div className="teacher-container">
             <div className="row">
            {
               teachers.map(teacher => <Teachers
               key={teacher.key}
                teacher = {teacher}
                handleAddToCart={handleAddToCart}
                >
                </Teachers>)
            }
            </div>
        </div>
        <div className="My-cart">
                <Cart cart={cart}></Cart>
            </div>
    </div>
    </div>
    );
};

export default TeacherDb;