import { Link } from "react-router-dom";
import React from "react"
import "./navBlock.css"
 const NavBlock =()=>{
    return(
        <div className="navblock">
            <Link to="/"><button>Home page</button></Link>
            <Link to="/home"><button>Catalog page</button></Link>
            <Link to="/card"><button>Card page</button></Link>
        </div>
    )
};

export default NavBlock