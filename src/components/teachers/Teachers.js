import React from 'react';
import './Teachers.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';

    const Teachers = (props) => {
        const { name , Salary, Subject, age,img,profession} = props.teacher;
        // console.log(props.teacher);
        return (
    <div className="teacher col">
        <div className="ms-4" >
            <img src={img} alt="" />
        </div>
            <div className="text-container">
                <h4 >Name: {name}</h4>
                <p><small>Age: {age}</small></p>
                <p>Subject: {Subject}</p>
                <p>Salary: ${Salary}</p>
                <p>Profession: {profession}</p>
                <button
                    onClick={() => props.handleAddToCart(props.teacher)}
                    className="btn btn-primary active"
                    ><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
                    <br />
                    <br />
                    <p><span><FontAwesomeIcon icon={faFacebook} /></span></p>
        </div>
        </div>
        );
    };

export default Teachers;