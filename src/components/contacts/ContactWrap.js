import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import { Parallax } from "react-scroll-parallax";

const ContactWrap = () => {
  return (
    <Parallax className="contact-info-wrapper" translateX={[5, -5]}>
      {/*contact info */}
      <ContactInfo />
      {/*contact form*/}
      <ContactForm />
    </Parallax>
  );
};

export default ContactWrap;
