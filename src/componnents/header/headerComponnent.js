import React, {Component} from 'react';
import MyLink from "../myLink/myLink";
import "./headerComponnent.css";


class Header extends Component {

    render() {
        return (
            <div className="row">
                <div className="col text-center">
                    <ul>
                        <li className="text-center">
                            <MyLink switchTo={this.props.switchTo}/>
                        </li>
                    </ul>
                    <h2 className="text-center"><span>Contact List</span>Created with <i
                        className="fa fa-heart"></i> from me</h2>
                </div>
            </div>
        );
    }
}

export default Header;