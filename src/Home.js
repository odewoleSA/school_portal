import { useState } from 'react';
import React from 'react';
import './App.css';

import slider_1 from './Static/Images/slider_1_new.jpg';
import slider_2 from './Static/Images/slider_2_new.jpg';
import slider_3 from './Static/Images/slider_3_new.jpg';

import Background from './Static/Images/Background_admission_4.jpg';
import Admission from './Static/Images/admission_2.jpg';

import icon_1 from './Static/Images/col-icon-1.png';
import icon_2 from './Static/Images/col-icon-2.png';
import icon_3 from './Static/Images/col-icon-3.png';

import $ from 'jquery';

function Home() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   alert(`The username you entered was: ${username}`)
  // }

  const imgStyle = {
    width:'1400px',
    height:'448px'
  };

  const sliderimg = {
    marginLeft:'320px',
    align:'center'
  };

  const sliderTxt = {
    // marginLeft:'-620px',
    marginRight:'620px',
    align:'center'
  };

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
    <>
    {/* row 1 */}
    <div className="row">
      <div className="col-sm-8 col-md-8 col-lg-8 ">
        <div id="home_slider" className="carousel slide" data-ride="carousel" style={{border:'6px solid #536d74',borderRadius: '5px'}}>

          <ul className="carousel-indicators">
            <li data-target="#home_slider" data-slide-to="0" className="active"></li>
            <li data-target="#home_slider" data-slide-to="1"></li>
            <li data-target="#home_slider" data-slide-to="2"></li>
          </ul>
          
          <div className="carousel-inner" >
            <div className="carousel-item active">
              <img src={slider_1} alt="slider_1" style={imgStyle} />
              <div className="carousel-caption"  >
                <h3>School Environment</h3>
                <p>Nice and Fast Pace!</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={slider_2} alt="slider_2" style={imgStyle} />
                <div className="carousel-caption">
                  <h3>Management Building</h3>
                  <p>School Admin and Instuctors!</p>
                </div>
            </div>
            <div className="carousel-item">
            <img src={slider_3} alt="slider_3" style={imgStyle} />
              <div className="carousel-caption">
                <h3>Classroom Setup</h3>
                <p>Students Comfortable Learning!</p>
              </div>
            </div>
          </div>

          {/* <a className="carousel-control-prev" href="#home_slider" data-slide="prev" >
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#home_slider" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a> */}
        </div>
      </div>
      <div className="col-sm-4 col-md-4 col-lg-4 ">
        <div className="jumbotron">
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
    </div>
  {/* row 2 */}
  <div className="row" style={{backgroundImage: 'url(' + Background +')',backgroundSize: 'cover', backgroundPosition: 'center center',fontFamily: 'Poppins,sans-serif',margin: '2px 0 2px 0'}}>
    <div className="col-sm-4 col-md-4 col-lg-4">
      <img src={Admission} className="rounded" alt="Apply for Admission" style={{width:'480px',height:'320px'}} />
    </div>
    <div className="col-sm-4 col-md-4 col-lg-4" style={{margin:'30px 0 20px 0'}}>
      <h3 style={{fontSize:'32px',fontWeight:'700',letterSpacing: '0px',textTransform: 'none',color: '#ffffff'}}>Apply for Admission</h3>
      <p style={{fontSize:'25px',fontWeight:'500',fontStyle: 'normal',color: 'rgb(75 135 45)',marginBottom:'20px'}}>2021/2022 Application Now Open</p>
      <p style={{fontSize:'18px',textTransform:'none',color: '#c1d3ff',textAlign:'left',marginBottom:'20px'}}>We don’t just give students an education and <br/> experiences that set them up for success in a career,<br/> we help them succeed in their career to discover a <br/> field they’re passionate about and dare to lead it.</p>
      <a href="#" className="btn btn-info" style={{color: '#ffffff',fontWeight:'bold',fontSize:'16px'}}>Apply Now</a>
    </div>
    <div className="col-sm-4 col-md-4 col-lg-4" style={{margin:'30px 0 20px 0'}}>
      <h3 style={{fontSize:'32px',fontWeight:'700',letterSpacing: '0px',textTransform: 'none',color: '#ffffff'}}>Returning Student</h3>
      <p style={{fontSize:'25px',fontWeight:'500',fontStyle: 'normal',color: 'rgb(75 135 45)',marginBottom:'20px'}}>2021/2022 Academic Session</p>
      <p style={{fontSize:'18px',textTransform:'none',color: '#c1d3ff',textAlign:'left',marginBottom:'20px'}}>We don’t just give students an education and <br/> experiences that set them up for success in a career,<br/> we help them succeed in their career to discover a <br/> field they’re passionate about and dare to lead it.</p>
      <a href="#" className="btn btn-info" style={{color: '#ffffff',fontWeight:'bold',fontSize:'16px'}}>Read More</a>
    </div>
  </div>
  {/* row 3 */}
  <div className="row" style={{backgroundColor: '#1b2945',color: '#ffffff',fontFamily: 'Poppins,sans-serif'}}>
    <div className="col-sm-4 col-md-4 col-lg-4" style={{margin:'35px 0 30px 0'}}>
      <img src={icon_1} />
      <p style={{fontSize: '21px',fontWeight: '700',fontStyle: 'normal',margin:'20px auto 15px auto',textTransform: 'none'}}>Vision</p>
      <p style={{fontSize: '17px',fontWeight: '300',fontStyle: 'normal',marginBottom:'20px',color: '#e6e6e6',textAlign:'left',textTransform: 'none'}}>The Vision of the School is to be the preferred Education University, which will excel in preparing educators who will be leaders in all spheres of…</p>
      <a href="#" style={{color:'#3db166',fontSize:'14px'}}>Read More</a>
    </div>
    <div className="col-sm-4 col-md-4 col-lg-4" style={{margin:'35px 0 30px 0'}}>
      <img src={icon_2} />
      <p style={{fontSize: '21px',fontWeight: '700',fontStyle: 'normal',margin:'20px auto 15px auto',textTransform: 'none'}}>Mission</p>
      <p style={{fontSize: '17px',fontWeight: '300',fontStyle: 'normal',marginBottom:'20px',color: '#e6e6e6',textAlign:'left',textTransform: 'none'}}>Our mission is to enhance the quality of teaching and learning and continuously update the methods and skills of knowledge providers…</p>
      <a href="#" style={{color:'#3db166',fontSize:'14px'}}>Read More</a>
    </div>
    <div className="col-sm-4 col-md-4 col-lg-4" style={{margin:'35px 0 30px 0'}}>
      <img src={icon_3} />
      <p style={{fontSize: '21px',fontWeight: '700',fontStyle: 'normal',margin:'20px auto 15px auto',textTransform: 'none'}}>Our History</p>
      <p style={{fontSize: '17px',fontWeight: '300',fontStyle: 'normal',marginBottom:'20px',color: '#e6e6e6',textAlign:'left',textTransform: 'none'}}>The School: meeting the global needs of the Nation’s educational system. Establishment of institutions is a…</p>
      <a href="#" style={{color:'#3db166',fontSize:'14px'}}>Read More</a>
    </div>
  </div>
  </>

  );
}

export default Home;
