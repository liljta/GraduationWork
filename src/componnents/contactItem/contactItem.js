import React from 'react';
import "./index.css";

class ContactItem extends React.Component{

    state = {
        clicked: false,
        btnContectText: "Contact Now",
        //avatar: this.props.avatar,
        contactName: this.props.contactName,
    };

    onAvatar = () => {
        this.props.onAvatar();
    };

    onContactClick = () => {
        //console.log("Contact to ", this.props.id);
        if (!this.state.clicked){
            this.setState({
                clicked: true,
                btnContectText: "Clicked",
            })
        }
        else {
            this.setState({
                clicked: false,
                btnContectText: "Contact Now"
            })
        }

    };

    onStar = () => {
        this.props.onFavorite();
    };

    /*componentDidUpdate(prevProps) {
        if(prevProps.avatar !== this.props.avatar) {
            this.setState({avatar: this.props.avatar});
        }
    }*/


    render (){
        //console.log("Item props ", this.props);

        let btnContactName = "btn btn-default";
        if (this.state.clicked){
            btnContactName = "btn btn-danger"
        }


        let vipStatus = this.props.vip;
        let starClass = "fa fa-star-o fa-2x star";
        if (vipStatus) {
            starClass = "fa fa-star fa-2x star"
        }

        const sex = this.props.sex;
        const url = `https://randomuser.me/api/portraits/${sex}/${this.props.avatar}.jpg`;
        const Style = {
            color: this.props.vip ? "Purple" : "SteelBlue",
            cursor: "pointer"
        };
        return(
            <div className="media">
                <div className="media-left align-self-center">
                    <img className="rounded-circle" src={url} />
                </div>
                <div className="media-body">
                    <h4>{this.state.contactName}</h4>
                    <p style={Style}> {this.props.contactDesc}</p>

                </div>
                <div className="media-right align-self-center" onClick={this.onContactClick}>
                    <button type="button" className="btn btnContactName">{this.state.btnContectText}</button>
                </div>
                <div className="media-right align-self-center">
                    <button type="button" className="btn btn-success" onClick={this.onAvatar}>Rand avatar</button>
                </div>
                <div className="media-right align-self-center">
                    <i className={starClass} aria-hidden="true" onClick={this.onStar}></i>
                    <i className="fa fa-times fa-2x close" aria-hidden="true" onClick={this.props.RemoveContact}></i>
                </div>
            </div>
        )
    }
}
export default ContactItem;