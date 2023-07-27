import './App.css';
import React from 'react';
import ContactForm from './component/ContactForm/ContactForm';
import ContactInformation from './component/ContactInformation/ContactInformation';

function App() {
  return (
    <React.Fragment>
       <section id="header">
        <h1>Contact Us</h1>
        <p>We love questions and feedback - and we're always happy to help! Here are some ways to conatct us.</p>
       </section>
       <section id="home">
          <section id="contact-form">
            <ContactForm />
          </section>
          <section id="contact-information">
            <ContactInformation />
          </section>
       </section>
    </React.Fragment>
  );
}

export default App;
