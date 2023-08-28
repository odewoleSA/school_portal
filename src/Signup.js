
import { useState } from 'react';
import React from 'react';
import './App.css';

import $ from 'jquery';

function Signup() {

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const togglepwd = () => {

    // alert("Great Shot!");
    $(".toggle-password").click(function() {
  
      $(this).toggleClass("fa-eye fa-eye-slash");
      var input = $($(this).attr("toggle"));
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
  
  }

  return (
    <div className="row" style={{marginBottom:'2px'}}>
      <div className="col-sm-12 col-md-12 col-lg-12" style={{marginBottom: '19%',marginTop:'10px'}}>
        <div className="jumbotron">
          <form action="/login" method="POST" id="loginForm" style={{width:'23%',marginLeft: 'auto',marginRight: 'auto',marginTop: '2%'}}> 
              <h4 style={{color:'white',fontWeight:'bold',textAlign:'center' }}>SIGN UP PAGE</h4>

              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <span class="fa fa-address-book"></span>
                    </span>
                  </div>
                  <input type="text" class="form-control form-control-md" id="fullname" placeholder="Full Name" name="fullname" 
                    value={fullname} onChange={(e) => setFullname(e.target.value)} required />
                  <div class="valid-feedback">Valid.</div>
                  <div class="invalid-feedback">Please fill out this field.</div>
                </div>
	            </div>

              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <span class="fa fa-at"></span>
                    </span>
                  </div>
                  <input type="email" class="form-control form-control-md" id="email" placeholder="Email" name="email" 
                    value={email} onChange={(e) => setEmail(e.target.value)} required />
                  <div class="valid-feedback">Valid.</div>
                  <div class="invalid-feedback">Please fill out this field.</div>
                </div>
              </div>

              <div className="form-group">
                  <div className="input-group">
                      <div className="input-group-prepend">
                          <span className="input-group-text">
                              <span className="fa fa-user"></span>
                          </span>
                      </div>
                      <input type="text" className="form-control form-control-md" id="uname" placeholder="Username" name="uname" 
                        value={username} onChange={(e) => setUsername(e.target.value)} required />
                      <div className="valid-feedback">Valid.</div>
                      <div className="invalid-feedback">Please fill out this field.</div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="input-group">
                      <div className="input-group-prepend">
                          <span className="input-group-text">
                              <span className="fa fa-lock"></span>
                          </span>
                      </div>
                      <input type="password" className="form-control form-control-md" id="pwd" placeholder="Password" name="pswd" 
                        value={password} onChange={(e) => setPassword(e.target.value)} required />
                      <span toggle="#pwd" className="fa fa-fw fa-eye toggle-password" onClick={togglepwd} id="showpswd"></span>
                      <div className="valid-feedback">Valid.</div>
                      <div className="invalid-feedback">Please fill out this field.</div>
                  </div>
                </div>

                <button style={{marginBottom:'15px'}} type="submit" className="btn btn-success btn-block btn-md"><i className="fa fa-user-plus"></i> Signup</button>
                <span style={{color:'#fff'}}>Already have an account? <a href="/login" class="btn btn-primary btn-sm" >Login</a></span>
          </form>
        </div>
      </div>

    </div>
   
  );
}

export default Signup;
