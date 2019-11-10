import React, { Component } from "react";
import "./addContact.css";
import {BrowserRouter as Router} from "react-router-dom";


class AddContact extends Component{

    state = {
        name: '',
        desc: '',
        sex: '',
        vip: 0,
    };

    getName = (e) => {
        this.setState({
            name: e.target.value
        })
    };

    getDescription = (e) => {
        this.setState({
            desc: e.target.value
        })
    };

    onSex = (e) => {
        this.setState({
            sex: e.target.value
        })
    };

    onVip = (e) => {
        this.setState({
            vip: e.target.checked
        })
    };

    sendData = (e) => {
        e.preventDefault();
        this.props.addContact(this.state.sex, this.state.vip, this.state.name, this.state.desc);
    };

    render(){

        return(
            <div className = "col-md-10 offset-md-1 row-block">

                <form  onSubmit={this.sendData}>
                    <input type="text" placeholder="Name" className="form-control" onChange={this.getName} />
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="usersex" id="usersex1" onClick={this.onSex} value="0" />
                        <label className="form-check-label" htmlFor="usersex1">
                            Women
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="usersex" id="usersex2" onClick={this.onSex} value="1" />
                        <label className="form-check-label" htmlFor="usersex2">Men</label>
                    </div>
                    <input type="checkbox" className="Vip" onClick={this.onVip} value="1"/> VIP<br />
                    <textarea type="text" placeholder="Description" className="form-control" onChange={this.getDescription} />
                    <button className="btn btn-success" type="submit">New Contact</button>
                </form>

            </div>
        )
    }
}

export default AddContact;