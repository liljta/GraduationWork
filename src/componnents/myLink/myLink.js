import React, { Component } from "react";
import { Link } from "react-router-dom";



class MyLink extends Component{

    state = {
        switchActions: ["add", "list"],
        linkTexts: ["Add new contact", "Back to contact list"],
        screenNum: 0
    };
    switchTo = (e) => {
        e.preventDefault();
        this.props.switchTo(this.state.switchActions[this.state.screenNum]);
        this.setState({
            screenNum: 1 - this.state.screenNum
        })
    };

    render(){

        return(
            <Link  to="/" onClick={this.switchTo}>{this.state.linkTexts[this.state.screenNum]}</Link>
        )
    }
}

export default MyLink;