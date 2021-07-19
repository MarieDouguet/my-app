import React from 'react';
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Signature from "../components/Signature"

const Signatures = () => {
    return (
        <div > 
                <Logo />
                <Navigation />
                <div className = "allsignatures">Incident Signature</div>
                <Signature />
        </div>
       
    );
};

export default Signatures;