import React from 'react';
import web from '../images/img3.jpg';
import { NavLink } from 'react-router-dom';
import Common from './Common';

const Home = () => {
    return(
        <>
            <Common 
            content="Grow your business with" 
            buttonText="Get Started" 
            navigateTo="/service"
            img={web}/>
        </>
    )
}

export default Home;