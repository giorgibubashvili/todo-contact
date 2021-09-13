import React, { useRef } from "react";
import {Link} from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
const inputEl = useRef("");
const deleteContactHandler = (id) => {
    props.getContactId(id);
};

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard 
            contact={contact} 
            clickHandler = {deleteContactHandler}
            key={contact.id}
            ></ContactCard>
        );
    });

    const getSearchTerm = () => {
        props.searchKeyword(inputEl.current.value);
    };

    return (
        <div class="main" style={{padding:"50px"}}>
            <h2 style={{display:"flex"}}>
                <h2 style={{marginRight:"auto"}}>Contact List</h2>
                
                <Link to="/add">
                    <button className="ui button blue"
                    >Add Contact</button>
                </Link>
            </h2>
            <div className="ui search">
                <div className="ui icon input">
                    <input 
                    ref={inputEl}
                    type="text" 
                    placeholder="search Contacts" 
                    className="prompt"
                    value={props.term}
                    onChange={getSearchTerm}
                    />
                    <i className="search icon"></i>
                </div>
            </div>
            <div className= "ui celled list"
            >
                {renderContactList/*.lenght > 0 
                ? renderContactList
                : "No Contacts available" */}
            </div>
        </div>
    );
};

export default ContactList;