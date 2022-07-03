import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import "./header.css";

const Index = (props) => {
  const [back, setBack] = useState(false);

  return (
    <div className="header-main">
      <div className="w-50">
        {props.back ? (
          <div className="icon-container">
            <IoIosArrowBack color="rgba(255, 255, 255, .3)" size={20} />
          </div>
        ) : null}
      </div>
      <div>
        <p className="heading">
          {props.title}
        </p>
      </div>
      {!props.toggle ?
        <div className="w-50 d-flex justify-content-end">
          <div className="icon-container">
            <BiMenuAltRight color="rgba(255, 255, 255, .3)" size={20} />
          </div>
        </div>
        :
        null
      }

    </div>
  );
};

export default Index;
