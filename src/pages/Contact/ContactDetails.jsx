import React from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { contacts } from './contactData';



function ContactDetails() {
  const { contactId } = useParams();
  const contact = contacts.find(c => c.id === parseInt(contactId));
  const navigate = useNavigate();
  const handleOkClick = () => {
    navigate("/contact"); 
  };

  if (!contact) {
    return <h2>No contact found with ID: {contactId}</h2>;
  }

  return (
    <div>
      <h1>Contact Details</h1>
      <p><strong>ID:</strong> {contact.id}</p>
      <p><strong>Name:</strong> {contact.name}</p>
      <p><strong>Email:</strong> {contact.email}</p>
      <button onClick={handleOkClick}>OK</button>

    </div>
  );
}

export default ContactDetails;
