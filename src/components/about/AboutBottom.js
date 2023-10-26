import React, { Fragment } from "react";
import SectionBody from "../sectionBody/SectionBody";

const AboutBottom = () => {
  // this is the data for the about content
  const data = [
    <Fragment>
      A full stack allaround designer that tristique est placerat in massa
      consectetur <br />
      quisque lobortis vitae faucibus diam ac quam est lorem ipsum. Lorem ipsum
      dolor sit <br />
      amet, consectetur adipiscing elit. Viverra tristique placerat in massa
      consectetur <br />
      quisque. Nunc ac fames lectus in libero aliquet.
    </Fragment>,
    <Fragment>
      Tristique amet volutpat nunc euismod mauris ollicitudin est sempe
      vulputate id in <br />
      nullam.
      <strong>
        <i>
          <u>Purus tincidunt</u>
        </i>
      </strong>
      maga ut turpis eu, eu enim. Nisl porttitor elit risus velit urnase
      <br />
      morbit mauris at proin laoreet lobortis urna aliquame.
    </Fragment>,
  ];
  return (
    <div className="about-bottom">
      {/*this is the section body content for displaying the body of about section*/}
      <SectionBody data={data} />
    </div>
  );
};

export default AboutBottom;
