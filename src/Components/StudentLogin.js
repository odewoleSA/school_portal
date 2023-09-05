import React,{useState} from 'react'
import $ from 'jquery';
// import '../Pages/Home.css';

function StudentLogin() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const togglepwd = () => {
        $(".toggle-password").click(function() {
      
          $(this).toggleClass("fa-eye fa-eye-slash");
          var input = $($(this).attr("toggle"));
          if (input.attr("type") == "password") {
            input.attr("type", "text");
          } else {
            input.attr("type", "password");
          }
        });
      };

  return (
    <>
        <div className="col-sm-4 col-md-4 col-lg-4 ">
            <div className="jumbotron" id="studentLogin">
            <form action="/login" method="POST" id="loginForm" style={{width:'80%',marginLeft: 'auto',marginRight: 'auto',marginTop: '6%'}}> 
                <h4 style={{color:'white',fontWeight:'bold',textAlign:'center' }}>STUDENT LOGIN</h4>
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
                    <button type="submit" className="btn btn-primary btn-block btn-md"><i className="fa fa-user"></i> Login</button>
                    <a href="/forgetpswd" className="btn btn-secondary btn-block btn-md"><i className="fa fa-exclamation-triangle"></i> Forgot Password</a> <br/>
                    {/* <span><a href="/signup" className="btn btn-success btn-sm" >Create New Account</a></span> */}
            </form>
            </div>
        </div>
    </>
  )
}

export default StudentLogin
