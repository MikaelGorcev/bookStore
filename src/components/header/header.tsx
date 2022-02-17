import { Link } from "react-router-dom";
import React from "react"
import "./header.css"
 const Header =()=>{
    return(
        <div className="headerBlock">
            <p><Link to="/">Home page</Link></p>
            <p><Link to="/home">Catalog page</Link></p>
            <p><Link to="/card">Card page</Link></p>
        </div>
    )
};

export default Header