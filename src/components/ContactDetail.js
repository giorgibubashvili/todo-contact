import React from "react";
import { Link } from "react-router-dom";
import userr from "../images/userr.jpg";

const ContactDetail = (props) => {
    const {name, email }= props.location.state.contact;
    return(
        <div className="main" style={{padding:"50px"}}>
            <div className="ui card centered" >
                <div className="image">
                    <img src={userr}alt="user" />
                </div>
                <div className="content" style={{textAlign:"center"}}>
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>
            <div className="ui div centered" style={{display:"flex", justifyContent:"center"}}>
                <Link to="/">
                <button className="ui button red ">
                    Back to Contact List
                </button>
                </Link>
            </div>
        </div>
    );
};

export default ContactDetail ;