import React, { useEffect, useState } from 'react';
import Invitetion from '../Invitetion/Invitetion';
import Scholar from '../Scholar/Scholar';
import './Scholars.css'

const Scholars = () => {
    const [scholars, setScholars] =useState([]);
    const [invitetion,setInvitetion]=useState([]);
    
    useEffect( ()=>{
        fetch('./motivational.json')
        .then(res=> res.json())
        .then(data=>setScholars(data))
    }  ,[] )

    const  handleInvitetion=scholar =>{
        const newIvitetion=[...invitetion, scholar];
        setInvitetion(newIvitetion);
    }

    return (
        <div className='scholars'>
            <div className="scholar-container">
                {
                    scholars.map(scholar=><Scholar 
                    scholar ={scholar}
                    key={scholar.id}
                    handleInvitetion={handleInvitetion}
                    >

                    </Scholar> )
                }
            </div>

            <div className="invitation-container">
                <Invitetion invitetion={invitetion}></Invitetion>
            </div>
        </div>
    );
};

export default Scholars;