
import React from 'react';
import '.././App.css';
import SignUpForm from '../Components/SignUpForm';

function Signup() {

  return (
    <div className="row" style={{marginBottom:'2px'}}>
      <div className="col-sm-12 col-md-12 col-lg-12" style={{marginBottom: '19%',marginTop:'10px'}}>
        <div className="jumbotron">
          <SignUpForm />
        </div>
      </div>

    </div>
   
  );
}

export default Signup;
