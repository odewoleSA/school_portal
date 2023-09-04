import React from 'react';
import slider_1 from '../Static/Images/slider_1_new.jpg';
import slider_2 from '../Static/Images/slider_2_new.jpg';
import slider_3 from '../Static/Images/slider_3_new.jpg';

function SliderImage() {

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

  return (
    <>
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
      </>
  )
}

export default SliderImage
