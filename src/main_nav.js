import React from 'react';
import './App.css';

function Nav() {
  return (

    <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center">
        {/* <a className="navbar-brand" href="#">Logo</a> */}

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                        Admission
                    </a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="/new-student">New Student</a>
                    <a className="dropdown-item" href="/returning-student">Returning Student</a>
                </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/contact">Contact</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                        Student Portal
                    </a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="/signup">Sign Up</a>
                    <a className="dropdown-item" href="/login">Log In</a>
                </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/career">Career</a>
                </li>
                {/* <li className="nav-item  btn btn-primary btn-sm">
                    <a className="nav-link" href="#">Sign Up</a>
                </li> */}
            </ul>
        </div>
    </nav>
  );
}

export default Nav;
