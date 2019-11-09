import React from 'react';
import {Link} from "react-router-dom";
import "./notFound.css";


const NotFound = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-12 text-center">
                    <img className="fields" src="/assets/img/layers.png" alt="" />
                    <p className="oops">Oops! I think we have something broken... </p>
                    <p className="oops">Can we try again?</p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;