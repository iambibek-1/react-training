// Contact.js
import React from "react";
import { Link } from "react-router-dom";
import { contacts } from "./contactData"; 

function Contact() {

  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            ID: <Link to={`${contact.id}`}>{contact.id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contact;
