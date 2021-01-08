import React from 'react';
import {Helmet} from 'react-helmet';

// import '../assets/styles/About.css'
import Carousel from '../components/Carousel';
// import Header from '../components/Header';
import Bibliografia from '../components/Bibliografia'
// import Footer from '../components/Footer'
import logo from '../static/logo.png'
import '../styles/components/Home.css'

const About = () => (
  <>
    <Helmet>
      <title>Zoopply</title>
    </Helmet>
    <div className="containerHome">
      <Carousel />
      <Bibliografia />
    </div>
  </>
)

export default About;