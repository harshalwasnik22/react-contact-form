import React, { useState, useEffect } from "react";
import { db } from  './firebase';
import { addDoc,collection } from 'firebase/firestore'
import "./App.css"



const App = () => {

  const [name, setName] = useState();
  const [company, setCompany] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState();
  
  const userCollectionRef = collection(db, "contactdata")

  const  handleSubmit = (e) => {
    e.preventDefault();

    document.querySelector('.alert').style.display = 'block';


    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);

    addDoc(userCollectionRef,{
      name: name,
      company: company,
      email: email,
      phone: phone,
      message: message,
    })
    

    setName("");
    setEmail("");
    setMessage("");
    setCompany("");
    setPhone("");
  
  };


  return(
  <div className="container">
      <h1 className="title">Get in Touch</h1>
      <div className="wrapper animated bounceInLeft">
        <div className="contact">
          <h3 className="contact-us">Contact Us</h3>
          <div className="alert">Your message has been sent!</div>
          <form id="contactForm">
            <p className="name-field">
              <label>Name <span>*</span></label>
              <input type="text" placeholder="Name" 
              value={name} onChange={(event) => setName(event.target.value)} required/>
            </p>
            <p className="company-field">
              <label>Company</label>
              <input type="text" placeholder="Company" 
              value={company} onChange={(event) => setCompany(event.target.value)}/>
            </p>
            <p className="email-field">
              <label>Email <span>*</span></label>
              <input type="email" placeholder="Email" 
              value={email} onChange={(event) => setEmail(event.target.value)} required/>

            </p>
            <p className="phone-field">
              <label>Phone</label>
              <input type="text" placeholder="Phone" 
              value={phone} onChange={(event) => setPhone(event.target.value)} />


            </p>
            <p className="message-field full">
              <label>Message</label>
              <textarea placeholder="Message" rows="5" id="message" 
              value={message} onChange={(event) => setMessage(event.target.value)}></textarea>  
            </p>
            <p className="required-field">Required field <span>*</span></p>
            <p className="submit-button">
              <button type="submit" onClick={handleSubmit}>Submit</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
  
}

export default App
