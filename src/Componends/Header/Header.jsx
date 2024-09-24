
import React from "react";
import { Link } from "react-router-dom";

import "./Header.css"


function  Header(){
      return(
        <>
       <ul className="header">
       <li><Link to="/">Home</Link></li>
       <li><Link to="/services">service</Link></li>
       <li><Link to="/projects">project</Link></li>

       </ul>

        </>
      );
}


export default Header;