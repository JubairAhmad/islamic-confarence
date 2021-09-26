import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faPhone, faUser,  } from '@fortawesome/free-solid-svg-icons'
import './Scholar.css'

const Scholar = (props) => {
    // console.log(props);
    const { name, img, role, salary, country, age } = props.scholar;
    const user = <FontAwesomeIcon icon={faUser } />
    const mobaile = <FontAwesomeIcon icon={faPhone } />
    const mail= <FontAwesomeIcon icon={faMailBulk } />
    



    return (
        <div className='scholar'>
            <img src={img} alt="" />
            <h2>Name: {name}  </h2>
            <p>Age: {age}</p>
            <p>Profession: {role}</p>
            <p>Salary: ${salary}</p>
            <p>Nationality: {country}</p>
            <button onClick={ ()=> props.handleInvitetion(props)}> {user} Invite</button>
            <br />
            <p className='fa-icon'> 
            <a href="#/mobaile">{mobaile}</a>
            <a href="#/mail">{mail}</a>
            </p>
        </div>
    );
};

export default Scholar;