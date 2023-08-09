import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div ><nav className="navbar navbar-expand-lg "  style={{backgroundColor:"black "}}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/" style={{ color: 'white' }} > PRO_DEV_1.0_Training</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: 'white' }}>
        <span className="navbar-toggler-icon " style={{ color: 'white' }}></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item" >
            <Link className="nav-link active" style={{ color: 'white' }}  aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About" style={{ color: 'white' }} >About Me</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'white' }} >
                Assignments
            </a>
            <ul className="dropdown-menu" style={{backgroundColor:"black "}}>
              <li><a className="dropdown-item" href='#card1'style={{ color: 'white' }} >Assignment-1</a></li>
              <li><a className="dropdown-item" href="#card2"style={{ color: 'white' }} >Assignment-2</a></li>
              <li><a className="dropdown-item" href="#card3"style={{ color: 'white' }} >Assignment-3</a></li>
              <li><a className="dropdown-item" href="#card4"style={{ color: 'white' }} >Assignment-4</a></li>
              <li><a className="dropdown-item" href="#card5"style={{ color: 'white' }} >Assignment-5</a></li>
              <li><a className="dropdown-item" href="#card6"style={{ color: 'white' }} >Assignment-6</a></li>
            
            </ul>
          </li>
         
        </ul>
        
      </div>
    </div>
  </nav></div>
  )
}
