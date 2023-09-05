import React from 'react';
import '.././App.css';
import LoginPageForm from '../Components/LoginPageForm';

function Login() {
  return (
    <div className="row" style={{marginBottom:'55px'}}>
      <div className="col-sm-12 col-md-12 col-lg-12" style={{marginBottom: '19%',marginTop:'10px'}}>
        <div className="jumbotron" id="logindiv">
          <LoginPageForm />
        </div>
      </div>

    </div>
   
  );
}

export default Login;
