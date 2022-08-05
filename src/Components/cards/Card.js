import React, { useContext } from "react";
import { AuthContext } from "../../context/context";
import "./Card.css";

export default function Card(props) {
  const { role , textColor , hightlightedColor} = useContext(AuthContext)
  return (
    <div
      //   style={}
      className="card_div_product box_shadow_custom"
      style={{backgroundColor: "rgba(255,255,255, 0.1)"}}
    >
      <div style={{ width: "65%" }}>
        <p className="first_para" style ={{color : textColor}}>{props.Heading}</p>
        <p className="second_para" style ={{color : textColor}}>
          {props.Discription}
        </p>
        <p className="third_para" style ={{color : hightlightedColor}}>AED{props.Price}</p>

        {role === 1 &&
          <div
            //   style={}
            className="add_to_cart"
          >
            <div
              onClick={props.onClick}
              style={{
                backgroundColor: hightlightedColor,
                padding: "10px 10px",
                // marginTop: "-40%",
                //   zIndex: "999",
                // transform: "rotate(135deg)",
              }}
            ></div>
          </div>
        }
      </div>
      <div>
        <img
          style={{width:100,height:80 , marginTop: 5}}
          src={props.src}
        />
      </div>

    </div>
  );
}
