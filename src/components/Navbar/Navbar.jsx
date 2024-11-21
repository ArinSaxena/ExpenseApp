import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <ul>
                <li><Link to="/">Form</Link></li>
                <li><Link to="/expenses">Expenses</Link></li>
            </ul>
        </nav>
    );
}
 
export default Navbar;