import React from 'react';
import '.././App.css';

import Background from '../Static/Images/about_b_3.jpg';
import Admission from '../Static/Images/admission_2.jpg';
import About_img from '../Static/Images/about_3.jpg';

import AboutCard from '../Components/AboutCard';
import AboutCardText from '../Components/AboutCardText';

function About() {

  return (
    <>
    {/* ,backgroundRepeat:'no-repeat' */}
    <div className="row" style={{backgroundImage: 'url(' + Background +')',opacity: '1.0',height: '350px',marginBottom:'20px'}}>
      <div className="col-sm-12 col-md-12 col-lg-12">
        {/* <h4 style={{textAlign:'center',fontSize:'55px',marginTop:'100px',color:'#fff',fontStyle:'bold'}}>About Page</h4> */}
      </div>
     </div> 
     <div className="row" style={{marginBottom:'6%'}}>
      <div className="col-sm-6 col-md-6 col-lg-6 ">
        <div className="jumbotron" style={{height: '100%'}}>
        <p style={{fontSize:'20px',color:'white',fontStyle:'bold'}}>:ABOUT:</p>
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
      <div className="col-sm-6 col-md-6 col-lg-6 ">
        <h2 style={{textAlign:'center'}}>Meet Us</h2>
        <div className="row">
          <ul style={{display: 'flex',listStyle: 'none'}}>
            <AboutCard 
              img_name={About_img}
              img_class='rounded'
              figtext='Fig.0 - name, dept.'
            />
            <AboutCard 
              img_name={About_img}
              img_class='rounded'
              figtext='Fig.1 - name, dept.'
            />
            <AboutCard 
              img_name={About_img}
              img_class='rounded'
              figtext='Fig.2 - name, dept.'
            />
          </ul>
          <ul style={{display: 'flex',listStyle: 'none'}}>
          <AboutCard 
              img_name={About_img}
              img_class='rounded'
              figtext='Fig.3 - name, dept.'
            />
          <AboutCard 
            img_name={About_img}
            img_class='rounded'
            figtext='Fig.4 - name, dept.'
          />
          <AboutCard 
            img_name={About_img}
            img_class='rounded'
            figtext='Fig.5 - name, dept.'
          />
          </ul>
        </div>
      </div>
     </div> 

    </>
  );
}

export default About;
