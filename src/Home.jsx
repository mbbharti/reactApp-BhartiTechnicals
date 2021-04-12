import React from 'react';
import mainImage from './images/man.png';
import {NavLink} from 'react-router-dom';
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common 
                name="Grow your business with"
                imgSrc={mainImage}
                btnVal="Get Started"
                visitTo="/service" />
        </>
    )
}

export default Home;
