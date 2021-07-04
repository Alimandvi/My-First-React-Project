import React from 'react';
import Common from './Common';
import aboutImg from '../images/img4.jpg'

const About = () => {
    return(
        <>
            <Common 
            content="Welcome to About page of" 
            buttonText="Contact Us" 
            navigateTo="/contact"
            img={aboutImg}/>
        </>
    )
}

export default About;