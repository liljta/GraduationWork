import React from 'react';
import "./index.css";

class ContactItem extends React.Component {

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
        if (!this.state.clicked) {
            this.setState({
                clicked: true,
                btnContectText: "Clicked",
            })
        } else {
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


    render() {
        //console.log("Item props ", this.props);

        let btnContactName = "btn btn-default";
        if (this.state.clicked) {
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
        return (
            <div className="row" >
                <div className="col-md-8 col-sm-12">
                    <div className="media">
                        <div className="media-left align-self-center">
                            <img className="rounded-circle" src={url} alt="avatar"/>
                        </div>
                        <div className="media-body">
                            <h4>{this.state.contactName}</h4>
                            <p style={Style}> {this.props.contactDesc}</p>

                        </div>
                    </div>
                </div>
                {/*
                <div className="media-right align-self-center" onClick={this.onContactClick}>
                    <button type="button" className="btn btnContactName">{this.state.btnContectText}</button>
                </div>
                 */}
                <div className="col-md-4 col-sm-12 align-self-center text-center">
                    <div className="media-right action-buttons ">
                        {/*
                        <button type="button" className="btn btn-success" onClick={this.onAvatar}>Rand avatar
                        </button>
                        */}
                        <i className="fa fa-refresh fa-2x reload-avatar" title="Random avatar" aria-hidden="true" onClick={this.onAvatar}></i>
                        <i className={starClass} title="VIP Contact"aria-hidden="true" onClick={this.onStar}></i>
                        <i className="fa fa-2x fa-pencil edit" title="Edit Contact" aria-hidden="true"
                           onClick={this.props.editContact}></i>
                        <i className="fa fa-times fa-2x close-btn" title="Delete Contact" aria-hidden="true"
                           onClick={this.props.RemoveContact}></i>
                    </div>
                </div>


            </div>

        )
    }

}

export default ContactItem;