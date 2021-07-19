import React, {useState, useEffect} from 'react';
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Identifiant  from '../components/Identifiants';

const Incidents = () =>{

    return (
        <div>
            <Navigation />
            <Logo /> 
            <div className = "incidents" >
                <Identifiant/>
            </div>           
        </div>
       
    );
};

export default Incidents;