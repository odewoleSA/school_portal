import React from 'react';
import '../App.css';

function Nav() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <a className="navbar-brand" href="#">
            SCHL <i className='fa fa-graduation-cap' />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/school_portal">Home</a>
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
            </ul>
        </div>
    </nav>
  );
}

export default Nav;
