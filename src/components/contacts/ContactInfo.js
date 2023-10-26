import React, { Fragment } from "react";
// this component is used to display the left side of the email.
const ContactInfo = () => {
  // change to your data
  const datas = [
    {
      title: "PHONE",
      content: (
        <Fragment>
          + 1-987-654-300 <br />+ 1-923-654-800
        </Fragment>
      ),
    },
    {
      title: "ADDRESS",
      content: (
        <Fragment>
          Some Street BL <br />
          754/18 New York <br />
          United States
        </Fragment>
      ),
    },
    {
      title: "MAIL",
      content: (
        <Fragment>
          hello@yourwebsite.com
          <br />
          support@yourwebsite.com
        </Fragment>
      ),
    },
  ];
  return (
    <ul className="contact-infos">
      {datas.map((data, i) => {
        return (
          <li key={i}>
            <span>{data.title}</span>
            <p>{data.content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactInfo;
