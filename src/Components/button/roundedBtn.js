import React, { useContext } from "react";
import { AuthContext } from "../../context/context";
import "./button.css"


const RoundedButton = (props) => {
  const {hightlightedColor} = useContext(AuthContext)
  console.log("props ", props)
  return (
    <button onClick={props.onClick} style={{border : `1px solid ${hightlightedColor}` , color : hightlightedColor}} className="rounded-btn">{props.name}</button>

  )
}

export default RoundedButton;