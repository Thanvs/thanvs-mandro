import React, { Fragment } from "react";
import SectionBody2 from "../sectionBody/SectionBody2";
//component for providing the content of your service.
const ServiceBottom = () => {
  const datas = [
    {
      title: "Design ",
      content: (
        <Fragment>
          - Tristique amet volutpat nunc euismod mauris ollicitudin est sempe
          <br />
          vulputate id in nullam. Purus tincidunt maga ut turpis eu, eu enim.
          Nisl porttitor elit <br />
          risus velit urnase morbit mauris at proin laoreet lobortis urna
          aliquame.
        </Fragment>
      ),
    },
    {
      title: "Develop ",
      content: (
        <Fragment>
          - Tristique amet volutpat nunc euismod mauris ollicitudin est sempe
          <br />
          vulputate id in nullam. Purus tincidunt maga ut turpis eu, eu enim.
          Nisl porttitor elit <br />
          risus velit urnase morbit mauris at proin laoreet lobortis urna
          aliquame.
        </Fragment>
      ),
    },
    {
      title: "Branding ",
      content: (
        <Fragment>
          - Tristique amet volutpat nunc euismod mauris ollicitudin est sempe
          <br />
          vulputate id in nullam. Purus tincidunt maga ut turpis eu, eu enim.
          Nisl porttitor elit <br />
          risus velit urnase morbit mauris at proin laoreet lobortis urna
          aliquame.
        </Fragment>
      ),
    },
  ];
  return (
    <div className="service-bottom">
      {/*section body component */}
      <SectionBody2 datas={datas} />
    </div>
  );
};

export default ServiceBottom;
