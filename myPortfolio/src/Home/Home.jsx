import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './home.css';

const images = [
  { src: require('../assets/images/new3.jpg'), textColor: 'black' },
  { src: require('../assets/images/new2.jpg'), textColor: 'white' },
  { src: require('../assets/images/new.jpg'), textColor: '#2c3f66' },
  { src: require('../assets/images/new2.jpg'), textColor: 'white' },

];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    pauseOnHover: false
  };

  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        {images.map((img, i) => (
          <div key={i} className="slider-slide">
            <img src={img.src} alt={`Slide ${i + 1}`} className="slider-image" />

            <div className="overlay-text glass-effect" >
              <h1>Slide Title</h1>
              <p>Short description goes here</p>
            </div>

            <div className="corner-glass-box glass-effect2" style={{ color: img.textColor }}>
              <p style={{ fontSize: 'calc(10px + 2vmin)', margin: "2px", fontWeight: 'bold' }}>Hey ! I am,</p>
              <p style={{ fontSize: 'calc(30px + 2vmin)', margin: "2px", fontWeight: 'bold' }}>Darshana Metange</p>
              <p style={{ fontSize: 'calc(10px + 1vmin)', marginTop: "20px" }}>Frontend Developer Who Blends Design, Code & Performance.</p>
              <p style={{ fontSize: 'calc(10px + 1vmin)', marginTop: "20px" }}>I turn ideas into pixel-perfect, performant, and accessible web experiences.</p>

              {/* <p style={{ fontSize: 'calc(10px + 1vmin)', marginTop: "20px" }}> I specialize in building sleek, scalable, and intuitive user interfaces using React, Next.js, MUI, and Tailwind CSS.
                I craft frontend experiences that not only look great but also deliver.</p> */}


            </div>
          </div>
        ))}

      </Slider>

    </div>
  );
};

export default Home;
