import React, { Component } from "react";
import { Link } from "react-router-dom";



class MyLink extends Component{

    switchTo = (e) => {
        e.preventDefault();
        this.props.switchTo('add');
    };

    render(){

        return(
            <Link  to="/" onClick={this.switchTo}><i className="fa fa-mobile"></i>Add new contact </Link>
        )
    }
}

export default MyLink;