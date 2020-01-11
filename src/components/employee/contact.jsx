import React from 'react'

function Contact(props) {
    const contact = props.contact
    return (
        <div  >
            <h3 >{contact.name}</h3>
            <div >Phone: {contact.phone}</div>
            <div>Email: {contact.email}</div>
        </div>
    );
}

export default Contact;