import React from 'react';
import './Invitetion.css'

const Invitetion = (props) => {
    const {invitetion}= props;
    console.log(invitetion);
    let total= 0;
    for(const person of invitetion){
        total = total + person.scholar.salary;
    }
    return (
        <div>
            <div>
            <h1>Invitetion</h1>
            <h2>Invited Person:{props.invitetion.length} </h2>
            <h3>Total Salary: ${total}</h3>
            {
                invitetion.map(person => <div className='person-result'>
                    <img src={person.scholar.img} alt="" />
                    <p>{person.scholar.name}</p>

                </div> )
            }
        </div>
        </div>
    );
};

export default Invitetion;