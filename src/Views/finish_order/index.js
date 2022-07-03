import React, { useState } from "react";

//import components
import Header from '../../Components/header'
import Input from '../../Components/inputs/inputText'
import TextArea from '../../Components/inputs/textArea'
import CheckoutBtn from '../../Components/checkoutbtn'
import Timekeeper from 'react-timekeeper';


//import icons


import { RiSendPlaneFill } from "react-icons/ri";


//import css
import './finishorder.css'


const Index = () => {
    const [time, setTime] = useState('12:34pm')
    const hightlitedColor = "yellow"
    const Done= () => {
        return (
            <div>Ayan</div>
        )
    }
    return  (
        <div>

                <Header toggle={true} back={true} title="Finish Order" />
          
                
            <div className="finishorder_main">
                <div>
                    <div className="d-flex justify-content-center mt-4">
                        <p style={{ fontSize: 15, color: "#959596" }}>Order type : Delivery</p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <p style={{ color: "white", fontSize: 20, fontWeight: "500" }}>Your Personal Info</p>
                    </div>
                    <div className="personal_info_section">
                        <Input  label="Name" />
                        <Input label="E-mail" placeholder="Optional" />
                        <Input name ='date'  icon={true} label="Date" placeholder={'Today (23/06/2022)'} />
                        <Input  icon={true} label="Time" placeholder={'Today (23/06/2022)'} />


                        <TextArea label="Address" />
                        <div className="w-100 d-flex justify-content-center mt-4">
                            <button style={{ borderColor: hightlitedColor }} className="location_btn">
                                <span><RiSendPlaneFill color={hightlitedColor} /></span>
                                <span style={{ color: hightlitedColor, marginLeft: 10 }}>Choose Loaction</span>
                            </button>
                        </div>
                    </div>
                    <div className="delivery_time_section">

                    </div>
                </div>
            </div>
            <CheckoutBtn title="PROCEED TO CHECKOUT" />
        </div>
    )
}


export default Index;