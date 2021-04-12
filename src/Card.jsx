import React from 'react';
import { NavLink } from 'react-router-dom';
import mainImage from './images/man.png';


const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgSrc} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="/contact" className="btn btn-primary">Get Services</NavLink>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card;
