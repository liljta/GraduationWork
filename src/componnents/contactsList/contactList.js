import React from 'react';
import ContactItem from '../contactItem/contactItem';
import "./contact-list.css";
import Search from "../search/search";


const ContactLists = ({ContactList, RemoveContact, onFavorite, onAvatar, onSearch}) => {
    const contactItem = ContactList.map((item) => {
        const sex = item.sex === 0 ? 'women' : 'men';
        return(
            <ContactItem onFavorite={() => onFavorite(item.id)} onAvatar={() => onAvatar(item.id)} RemoveContact={() => RemoveContact(item.id)}  key={item.id} id={item.id} vip={item.vip} sex={sex} avatar={item.avatar_id} contactName={item.name} contactDesc={item.description} />
        )
    });

    return(
        <div>
            <Search onSearch={onSearch} />
            <div className="col-md-10 offset-md-1 row-block">
                <ul id="sortable" className="contactList">
                    {contactItem}
                </ul>
            </div>
        </div>

    );
};

export default ContactLists;