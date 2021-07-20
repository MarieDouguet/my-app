import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">
                Incident correlations
            </NavLink>
            <NavLink exact to="incidents" activeClassName="nav-active">
                Incidents
            </NavLink>
            <NavLink exact to="about" activeClassName="nav-active">
                About
            </NavLink>

        </div>
    );
};

export default Navigation;