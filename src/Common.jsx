import React from 'react';
import mainImage from './images/man.png';
import {NavLink} from 'react-router-dom';

const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg=0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1 className="headingOne">
                                        {props.name} <strong className='brand-name'>BhartiTechnical</strong>
                                    </h1>
                                    <h2 className="my-3 subHeading">
                                        We are team of highly professional and highly skill developers
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink to={props.visitTo} className='btn-get-started'>{props.btnVal}</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={props.imgSrc} className="img-fluid animated" alt="home page image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Common;
