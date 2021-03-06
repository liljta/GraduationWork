import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Componnents
import Header from "./componnents/header/headerComponnent";
import ContactLists from "./componnents/contactsList/contactList";
import ManageContact from "./componnents/manageContact/manageContact";
import NotFound from "./componnents/noFound/notFound";
import APIClient from "./componnents/APIClient/api";

class App extends React.Component {

    state = {
        List: [],
        findContact: "",
        action: "list",
        editIndex: false,
        searchType: "all"
    };


    RemoveContact = (id) => {
        //console.log("Remove contact => ", id);
        const api = new APIClient();
        api.deleteContact(id)
            .then(responseJson => {
                this.setState((state) => {
                    const index = this.state.List.findIndex((elem) => elem.id === id);
                    //console.log("index", index);

                    const firstPart = this.state.List.slice(0, index);
                    const lastPart = this.state.List.slice(index + 1);
                    const newList = [...firstPart, ...lastPart];

                    return {
                        List: newList
                    }
                })
            })
            .catch(err => console.log(err.message));
    };

    editContact = (id) => {
        this.state.editIndex = this.state.List.findIndex((elem) => elem.id === id);
        this.switchTo('edit');
    };

    updateContact = (contact) => {
        const api = new APIClient();
        api.editContact(contact)
            .then(responseJson => {
                this.setState((state) => {

                    const index = this.state.List.findIndex((elem) => elem.id === contact.id);
                    const newList = this.state.List.slice();
                    newList[index] = responseJson.contact;

                    return {
                        List: newList,
                        action: 'list'
                    }
                });
            })
            .catch(err => console.log(err.message));
    };

    addNewContact = (sex, vip, contactName, contactDesc) => {
        return {
            vip: vip,
            sex: sex,
            avatar_id: Math.ceil(Math.random() * 100),
            name: contactName,
            description: contactDesc
        }
    };

    addContact = (sex, vip, name, description) => {
        const contact = this.addNewContact(sex, vip, name, description);
        const api = new APIClient();

        api.addContact(contact)
            .then(responseJson => {
                this.setState((state) => {
                    const newContactArr = [
                        ...this.state.List,
                        responseJson.contact
                    ];

                    return {
                        List: newContactArr,
                        action: 'list'
                    }
                });
            })
            .catch(err => console.log(err.message));
    };

    onFavorite = (id) => {
        const api = new APIClient();
        const index = this.state.List.findIndex((elem) => elem.id === id);
        const vip = this.state.List[index].vip;
        api.setField(id, {'vip': !vip})
            .then(responseJson => {
            this.setState((state) => {
                const newList = this.state.List.slice();
                newList[index] = responseJson.contact;

                return {
                    List: newList,
                }
            });
        })
            .catch(err => console.log(err.message));
    };

    onAvatar = (id) => {
        const api = new APIClient();
        const index = this.state.List.findIndex((elem) => elem.id === id);
        const ava = Math.ceil(Math.random() * 100);
        //console.log(this.state.List);
        api.setField(id, {avatar_id: ava})
            .then(responseJson => {
                this.setState((state) => {
                    let newList = this.state.List;
                    newList[index] = responseJson.contact;
                    return {
                        List: newList
                    }
                });
            })
            .catch(err => console.log(err.message));
    };


    onSearch = (searchValue, type) => {
        this.setState({
            findContact: searchValue,
            searchType: type
        });
    };

    onShowContact = (items, searchValue) => {

        return items.filter((item) => {
            const searchString = searchValue.toLowerCase();
            let showContact = false;
            if (searchValue.length === 0) {
                showContact = true;
            } else {
                if (item.name.toLowerCase().indexOf(searchString) > -1) {
                    showContact = true;
                }
                if (item.description.toLowerCase().indexOf(searchString) > -1) {
                    showContact = true;
                }
            }
console.log(this.state.searchType);
            if (this.state.searchType === "vip") {
                showContact = showContact && item.vip
            }
            return showContact;
        });
    };

    updateContacts = () => {
        const contacts = new APIClient();
        contacts.getContacts()
            .then(responseJson => {
                //console.log(responseJson);
                this.setState({
                    List: responseJson.contacts
                });
                //console.log(this.state.List);
            })
            .catch(err => console.log(err.message));
    };

    componentDidMount() {
        this.updateContacts();
    }

    switchTo = (component) => {
        //console.log(component);
        this.setState({action: component});
    };



    render() {
        const showContacts = this.onShowContact(this.state.List, this.state.findContact);
        return (
            <section className="row-section">
                <div className="container">

                    <Router>
                        <Header switchTo={this.switchTo} currentAction={this.state.action}/>
                        <Switch>
                            { this.state.action == 'list' &&
                            <Route path="/" exact render={() => <ContactLists ContactList={showContacts}
                                                                              RemoveContact={this.RemoveContact}
                                                                              editContact={this.editContact}
                                                                              onFavorite={this.onFavorite}
                                                                              onAvatar={this.onAvatar}
                                                                              onSearch={this.onSearch} />}/> }
                            { this.state.action == 'add' && <Route path="/" exact render={() => <ManageContact addContact={this.addContact} action="add"/>}/> }
                            { this.state.action == 'edit' && <Route path="/" exact render={() => <ManageContact updateContact={this.updateContact} action="edit" item={this.state.List[this.state.editIndex]}/>}/> }
                            <Route component={NotFound}/>
                        </Switch>
                    </Router>
                </div>
            </section>
        );
    }

}

ReactDOM.render(<App/>, document.getElementById('root'));

