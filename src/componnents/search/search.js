import React from 'react';
import "./search.css";


class Search extends React.Component{

    state = {
        search: "",
        type: "all"
    };

    onSearchInput = (e) =>{
        const findContact = e.target.value;
        this.setState({
            search: findContact
        });
        this.props.onSearch(findContact, this.state.type);
    };

    setSearchType = (type) => {
        this.setState({
            type: type
        });
        this.props.onSearch(this.state.search, type);
    };

    onAllClicked = (e) => {
        this.setSearchType("all");
    };

    onVipClicked = (e) => {
        this.setSearchType("vip");
    };

    render(){
        //console.log("Search component = ", this.props);
        return(
            <div className="col-md-10 offset-md-1 row-block">
                <input type="text" className="form-control searchInput" placeholder="Search..."
                       onChange={this.onSearchInput}
                />
                <button className="btn btn-primary" type="button" onClick={this.onAllClicked}>All</button>
                <button className="btn btn-warning" type="button" onClick={this.onVipClicked}>VIP</button>
            </div>
        )
    }
}

export default Search;