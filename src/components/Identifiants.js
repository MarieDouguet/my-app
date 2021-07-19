import React from 'react';
import signature from "../data/signatures.json";
import { Link } from "react-router-dom";


const Id =()=> {
    const Identifiants = signature.map(item =>
        <div className ="identifiants" key={item.id}>
            <Link to={`/incidents/${item.id}`} activeClassName="active">
                {item.id}
            </Link>
        </div>)

        return(

            <div>{Identifiants}</div>
        );
}
  

export default Id;