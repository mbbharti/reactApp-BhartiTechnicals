import React from 'react';
import mainImage from './images/laptop.png';
import {NavLink} from 'react-router-dom';
import Common from './Common';


const About = ()=>{
  return (
    <>
      <Common 
            name="Welcome to About Page"
            imgSrc={mainImage}
            btnVal="Contact Now"
            visitTo="/contact" />
    </>
  )
}

export default About;
