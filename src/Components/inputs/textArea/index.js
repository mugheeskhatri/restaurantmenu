import React from "react";


//import css

import '../inputText/input.css'



const Index = (props) => {
    return (
        <div className="input_container">
            <p style={{ color: "white", fontSize: 16 , display: props.show ? props.show : "block" }}>{props.label}</p>
            <div className={props.show != "none" ? "input-field-container" : null}>
                <textarea rows={4}
                    className="input"
                    placeholder={props.placeholder}
                />
            </div>
        </div>
    )
}



export default Index