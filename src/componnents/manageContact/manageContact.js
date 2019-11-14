import React, {Component} from "react";
import "./manageContact.css";
import {BrowserRouter as Router} from "react-router-dom";


class ManageContact extends Component {

    state = {
        name: '',
        description: '',
        sex: null,
        vip: 0,
        id: null
    };

    getName = (e) => {
        this.setState({
            name: e.target.value
        })
    };

    getDescription = (e) => {
        this.setState({
            description: e.target.value
        })
    };

    onSex = (e) => {
        this.setState({
            sex: e.target.value
        });
        console.log(this.state.sex)
    };

    onVip = (e) => {
        this.setState({
            vip: e.target.checked
        })
    };

    sendData = (e) => {
        e.preventDefault();
        if (this.props.action === "add") {
            this.props.addContact(this.state.sex, this.state.vip, this.state.name, this.state.description);
        } else {
            this.props.updateContact(this.state);
        }

    };

    componentWillMount() {
        if (this.props.action === "edit") {
            this.setState(this.props.item);
        }
    }

    render() {

        return (
            <div className="col-md-10 offset-md-1 row-block">

                <form onSubmit={this.sendData}>
                    <input type="text" value={this.state.name} placeholder="Name" className="form-control"
                           onChange={this.getName}/>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="usersex1">
                            <input className="form-check-input" type="radio" checked={this.state.sex === "0"}
                                   name="usersex" id="usersex1" onChange={this.onSex} value="0"/> Women
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="usersex2">
                            <input className="form-check-input" type="radio" checked={this.state.sex === "1"}
                                   name="usersex" id="usersex2" onChange={this.onSex} value="1"/> Men</label>
                    </div>
                    <label>
                        <input type="checkbox" checked={this.state.vip ? " checked" : ""} className="Vip"
                               onChange={this.onVip} value="1"/> VIP<br/>
                    </label>
                    <textarea value={this.state.description} placeholder="Description" className="form-control"
                              onChange={this.getDescription}/>
                    <button className="btn btn-success"
                            type="submit">{this.props.action === "edit" ? "Save" : "New"} contact
                    </button>
                </form>

            </div>
        )
    }
}

export default ManageContact;