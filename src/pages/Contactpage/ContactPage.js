import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import ContactForm from "../../components/ContactForm/ContactForm";
import FaqAccordian from "../../components/FaqAccordian/FaqAccordian";
import "./ContactPage.scss";
const ContactPage = () => {
  const contactContainerRef = useRef();
  const { contactPart } = useParams();
  useEffect(() => {
    if (contactPart === "faq") {
      contactContainerRef.current.children[1].scrollIntoView();
    }
    if (contactPart === "talk-to-us") {
      console.log(contactContainerRef.current.children);
      contactContainerRef.current.children[2].scrollIntoView();
    }
    if (contactPart === "info") {
      console.log(contactContainerRef.current.children);
      contactContainerRef.current.children[3].scrollIntoView();
    }
  }, []);
  return (
    <div className="global-container">
      <div className="contact-wrapper">
        <div className="side-header"> Contact</div>
        <div className="contact-container" ref={contactContainerRef}>
          <p>
            We are here to help and love hearing from existing and prospective
            customers alike. If you cannot find the information you are looking
            for in the FAQ below, please contact us via the message box. This
            will beam your inquiry directly to our support team, and will be
            fielded within 24 hours. We may even surprise you and respond much
            quicker.
          </p>
          <div className="faq-container" id="FAQ">
            <h4>FAQ</h4>
            <FaqAccordian />
          </div>
          <ContactForm />
          <div className="our_info_container">
            <div className="our_info_row">
              <div className="our_info_label">Our Email</div>
              <div className="our_info_detail"> abcd@gmail.com </div>
            </div>
            <div className="our_info_row">
              <div className="our_info_label">Our Address</div>
              <div className="our_info_detail">
                Kolkata -74, West Bengal, India
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
