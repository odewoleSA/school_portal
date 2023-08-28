import React from 'react';
import './App.css';

function PageFooter() {

  return (
    <div className="row" style={{background:'rgb(52 58 64)',fontSize:'20px',padding:'20px',marginBottom: '-40px'}}>
        <div className="col-sm-4 col-md-4 col-lg-4">
            <ul className="list-group list-group-horizontal" style={{display: 'flex',listStyle: 'none'}} >
                <li style={{marginRight: '12px'}}><a href="" style={{color:'white'}}>Home</a></li>
                {/* <li className="footer-menu-divider">|</li> */}
                <li style={{marginRight: '12px'}}><a href="" style={{color:'white'}}>Register</a></li>
                {/* <li className="footer-menu-divider">|</li> */}
                <li><a href="" style={{color:'white'}}>Login</a></li>
            </ul>
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4">
            <p className="copyright text-unmuted small" style={{color:'white'}}>Copyright © 2022. All Rights Reserved</p>
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4">
            <ul className="list-group list-group-horizontal" style={{display: 'flex',listStyle: 'none'}} >
                <li style={{marginRight: '12px'}}><span className="fab fa-facebook" style={{color:'white'}}></span></li>
                <li style={{marginRight: '12px'}}><span className="fab fa-twitter" style={{color:'white'}}></span></li>
                <li style={{marginRight: '12px'}}><span className="fab fa-instagram" style={{color:'white'}}></span></li>
                {/* <li style={{marginRight: '12px'}}><span className="fab fa-tiktok" style={{color:'white'}}></span></li> */}
                <li><span className="fab fa-linkedin" style={{color:'white'}}></span></li>
            </ul>
        </div>
        
    </div>
  );

};
export default PageFooter;