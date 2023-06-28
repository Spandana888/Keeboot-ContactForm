import React from 'react';
import './ContactInformation.css';
import { ImFacebook2 } from 'react-icons/im';
import { FaInstagram } from 'react-icons/fa';
import { ImTwitter } from 'react-icons/im';
import { SlLocationPin } from 'react-icons/sl';
import { TfiEmail } from 'react-icons/tfi';
import { FaPhone } from 'react-icons/fa'

const ContactInformation = () => {
  return (
    <React.Fragment>
          <h2>Contact Information</h2>
          <div className="contact">
             <div>
               <SlLocationPin />
               <span>177 Huntington Ave Ste 1703</span>
             </div>
             <div>
               <TfiEmail />
               <span>contact-us@company.com</span>
             </div>
             <div>
                <FaPhone />
                <span>+1-617-555-0108</span>
             </div>
          </div>
          <div className="social-media">
            <span><ImTwitter /></span>
            <span><FaInstagram /></span>
            <span><ImFacebook2 /></span>
          </div>
    </React.Fragment>
  )
}

export default ContactInformation