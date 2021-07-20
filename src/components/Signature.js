import React from 'react';
import signature from "../data/signatures.json";
import { Link , useParams } from "react-router-dom";



const Signature =()=> {

    const { signatureId } = useParams();

    const sign = signature.map(item =>
        <div key={item.id}>
                {item.signature}
        </div>)

        return(

            <div className="signature">{sign[signatureId]}</div>
        );
}
  

export default Signature;