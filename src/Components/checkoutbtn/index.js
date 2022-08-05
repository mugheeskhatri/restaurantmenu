import React, { useContext } from "react";
import { AuthContext } from "../../context/context";

//import css

import './checkoutbtn.css'


const Index = (props) => {
    const {hightlightedColor , textColor , backgroundTextColor} = useContext(AuthContext)
 
    

    return(

        <div onClick={props.onClick} className="checkoutbtn_container">
            <button style={{backgroundColor:hightlightedColor,color:backgroundTextColor}} className="checkoutbtn">

                {props.title}
            </button>
        </div>
    )
}


export default Index