import React, { Component } from "react";
import { Link } from "react-router-dom";



class MyLink extends Component{

    actions = ["add", "edit", "list"];
    linkTexts = ["Back to contact list", "Back to contact list", "Add new contact"];

    switchTo = (e) => {
        e.preventDefault();
        let screen = this.props.currentAction === 'list' ? 'add' : 'list';
        this.props.switchTo(screen);
    };

    render(){

        return(
            <Link  to="/" onClick={this.switchTo}>{this.linkTexts[this.actions.indexOf(this.props.currentAction)]}</Link>
        )
    }
}

export default MyLink;
