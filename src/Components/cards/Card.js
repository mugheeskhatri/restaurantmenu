import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div
      //   style={}
      className="card_div"
    >
      <div style={{ width: "65%" }}>
        <p className="first_para">{props.Heading}</p>
        <p className="second_para">
        {props.Discription}
        </p>
        <p className="third_para">{props.Price}</p>
    
        <div
          //   style={}
          className="add_to_cart"
        >
          <div
         onClick={props.onClick}
            style={{
              backgroundColor: "yellow",
              padding: "50px 50px",
              marginTop: "-40%",
              //   zIndex: "999",
              transform: "rotate(135deg)",
            }}
          ></div>
        </div>
      </div>
      <div>
        <img
          style={{ width: "100px", height: "100px", margin: "0px auto" }}
          src="https://media.istockphoto.com/photos/table-top-view-of-spicy-food-picture-id1316145932?b=1&k=20&m=1316145932&s=170667a&w=0&h=feyrNSTglzksHoEDSsnrG47UoY_XX4PtayUPpSMunQI="
        />
      </div>

    </div>
  );
}
