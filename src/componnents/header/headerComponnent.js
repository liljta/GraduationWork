import React from 'react';
import { Link } from "react-router-dom";
import "./headerComponnent.css";


const Header = () => {
    return(
        <div className="row">
            <div className="col text-center">
            <ul>
                <li className="text-center">


                    <Link  to="/add"><i className="fa fa-mobile"></i>Add new contact </Link>
                </li>
            </ul>
            <h2 className="text-center" ><span>Contact List</span>Created with <i className="fa fa-heart"></i> from me</h2>
            </div>
        </div>
    );
}

export default Header;