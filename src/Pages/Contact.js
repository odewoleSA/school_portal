import React,{ useState } from 'react';
import '.././App.css';
import './contactPage.css';

import Background from '../Static/Images/contact_b_4.jpg';
import MapsImg from '../Static/Images/maps_img.jfif';
import AboutCardText from '../Components/AboutCardText';
import ContactForm from '../Components/ContactForm';

function Contact() {

  const p_style = {
    textAlign: 'justify',
    lineHeight: '0.8',
    color: 'white'
  };

  return (
    <>
    {/* ,backgroundRepeat:'no-repeat' */}
    <div className="row" style={{backgroundImage: 'url(' + Background +')',backgroundRepeat:'no-repeat',opacity: '0.8',height: '350px',marginBottom:'20px'}}>
      <div className="col-sm-12 col-md-12 col-lg-12">
        {/* <h4 style={{textAlign:'center',fontSize:'55px',marginTop:'100px',color:'#fff',fontStyle:'bold'}}>Contact Page</h4> */}
      </div>
     </div> 
     <div className="row" style={{marginBottom:'55px'}}>
        <div className="col-sm-4 col-md-4 col-lg-4 ">
          <div className="jumbotron" style={{height: '100%'}}>
          <p style={{fontSize:'20px',color:'white',fontStyle:'bold'}}>:Contact Information:</p>
          <AboutCardText 
            text='Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
          />
          <AboutCardText 
            text='Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
          />
          <AboutCardText 
            text='Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
          />
          <AboutCardText 
            text='Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
          />
          </div>
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4">
          <div className="jumbotron" style={{height: '100%'}}>
            <img src={MapsImg} className="rounded" />
          </div>
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4 ">
          {/* <h3 style={{textAlign:'center'}}>:Feedback:</h3> */}
          <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12" id="contactfm">
            <ContactForm />
            </div>
          </div>
        </div>
     </div> 

    </>
  );
}

export default Contact;
