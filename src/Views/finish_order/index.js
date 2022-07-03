import React, { useState } from "react";

//import components
import Header from '../../Components/header'
import Input from '../../Components/inputs/inputText'
import TextArea from '../../Components/inputs/textArea'
import CheckoutBtn from '../../Components/checkoutbtn'
import Timekeeper from 'react-timekeeper';


//import icons

import { GiCheckMark } from "react-icons/gi";
import { RiSendPlaneFill } from "react-icons/ri";


//import css
import './finishorder.css'


const Index = () => {

    const [time, setTime] = useState('12:34pm')
    const hightlitedColor = "yellow";
    const backgroundColor = "#7D141E";
    const textColor = "white"

    const [radioSelected, setRadioSelected] = useState("")

    const radioBtnOptions = [
        "ASAP ~ 30 Minutes", "Later"
    ]
    const Done = () => {
        return (
            <div>Ayan</div>
        )
    }




    return (

        <div>

            <Header toggle={true} back={true} title="Finish Order" />


            <div className="finishorder_main">
                <div>
                    <div className="d-flex justify-content-center mt-4">
                        <p style={{ fontSize: 15, color: "#959596" }}>Order type : Delivery</p>
                    </div>


                    {/* personal info section */}
                    <div className="d-flex justify-content-center">
                        <p className="heading">Your Personal Info</p>
                    </div>
                    <div className="personal_info_section">
                        <Input label="Name" />
                        <Input label="E-mail" placeholder="Optional" />
                        <TextArea label="Address" />
                        <div className="w-100 d-flex justify-content-center mt-4">
                            <button style={{ borderColor: hightlitedColor }} className="location_btn">
                                <span><RiSendPlaneFill color={hightlitedColor} /></span>
                                <span style={{ color: hightlitedColor, marginLeft: 10 }}>Choose Loaction</span>
                            </button>
                        </div>
                    </div>

                    {/* personal info section */}

                    {/* delivery time section */}

                    <div className="delivery_time_section">
                        <div className="d-flex justify-content-center mt-4">
                            <p className="heading">Delivery Time</p>
                        </div>
                        <div className="radio_btn_section">
                            {radioBtnOptions.map((v, i) => {
                                return (
                                    <div onClick={() => setRadioSelected(v)} className="radio_btn d-flex align-items-center">
                                        <div style={{ borderColor: hightlitedColor, backgroundColor: radioSelected === v ? hightlitedColor : "transparent" }} className="icon_sectin">
                                            <GiCheckMark size={10} color={backgroundColor} />
                                        </div>
                                        <div style={{ color: hightlitedColor }} className="label_section">
                                            {v}
                                        </div>
                                    </div>
                                )
                            })}
                            {radioSelected === "Later" ? <div>
                                <Input name='date' icon={true} label="Date" placeholder={'Today (23/06/2022)'} />
                                <Input icon={true} label="Time" placeholder={'Today (23/06/2022)'} />
                            </div> : null}
                        </div>
                    </div>

                    {/* delivery time section */}


                    {/* add note section */}

                    <div className="delivery_time_section pt-4">
                        <div className="d-flex justify-content-center mt-4">
                            <p className="heading">Add a Note</p>
                        </div>
                        <TextArea show="none" placeholder="Optional" />
                    </div>
                    {/* add note section */}


                    {/* agree section */}


                            <div className="d-flex justify-content-center py-5">
                                <div className="agree_text_area">
                                <p style={{color:textColor}} className="agree">
                                By clicking proceed to checkout I agree to FineDine Menu’s <a style={{color:hightlitedColor,textDecoration:"none"}} href="#">Terms of Service</a> and <a style={{color:hightlitedColor,textDecoration:"none"}} href="#">Privacy Policy</a>
                                </p>
                                </div>
                            </div>

                    {/* agree section */}

                </div>
            </div>
            <CheckoutBtn title="PROCEED TO CHECKOUT" />
        </div>
    )
}


export default Index;