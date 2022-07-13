import React, { useContext, useState } from 'react'

//import components
import Header from '../../Components/header'
import Input from '../../Components/inputs/inputText'
import TextArea from '../../Components/inputs/textArea'

import CheckoutBtn from '../../Components/checkoutbtn'
import Timekeeper from 'react-timekeeper'

import PhoneInput from '../../Components/inputs/phoneNumberInput'
import DatePicker from '../../Components/datePicker'
import SubtotalFooter from '../../Components/subtotalFooter'


//import icons

import { GiCheckMark } from 'react-icons/gi'
import { RiSendPlaneFill } from 'react-icons/ri'

//import css
import './finishorder.css'
import { AuthContext } from '../../context/context'

const Index = () => {
  const {textColor ,hightlightedColor  , backgroundTextColor} = useContext(AuthContext)



    const newDate = new Date();
    const currentDate = `${newDate.getFullYear()} / ${newDate.getDate()} / ${newDate.getMonth()}`
    const currentTime = `${newDate.getHours()} : ${newDate.getMinutes()}`
    // form data


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phNumber, setPhNumbber] = useState("")
    const [address, setAddress] = useState("")
    const [date, setDate] = useState(currentDate)
    const [note , setNote] = useState("")
    


    const submit = ()=>{
        const form = {
            name,
            email,
            phNumber,
            address,
            date,
            time,
            note
        }

        console.log(form)

    }


    const [radioSelected, setRadioSelected] = useState("")

    const radioBtnOptions = [
        "ASAP ~ 30 Minutes", "Later"
    ]




  const [time, setTime] = useState('12:34pm')


  return (
    <div>
      <Header toggle={true} back={true} title="Finish Order" />

      <div className="finishorder_main">
        <div>


            {/* <Header toggle={true} back={true} title="Finish Order" /> */}


            <div className="">
                <div>
                    <div className="d-flex justify-content-center mt-4">
                        <p style={{ fontSize: 15, color: textColor }}>Order type : Delivery</p>
                    </div>


                    {/* personal info section */}
                    <div className="d-flex justify-content-center">
                        <p className="heading" style={{color : textColor}}>Your Personal Info</p>
                    </div>
                    <div className="personal_info_section">
                        <Input setState={setName} label="Name" />
                        <Input setState={setEmail} label="E-mail" placeholder="Optional" />
                        <PhoneInput setState={setPhNumbber} label="Phone Number" />
                        <TextArea setState={setAddress} label="Address" />
                        <div className="w-100 d-flex justify-content-center mt-4">
                            <button style={{ borderColor: hightlightedColor }} className="location_btn">
                                <span><RiSendPlaneFill color={hightlightedColor} /></span>
                                <span style={{ color: hightlightedColor, marginLeft: 10 }}>Choose Loaction</span>
                            </button>
                        </div>
                    </div>

                    {/* personal info section */}

                    {/* delivery time section */}

                    <div className="delivery_time_section">
                        <div className="d-flex justify-content-center mt-4">
                            <p className="heading" style={{ color: textColor}}>Delivery Time</p>
                        </div>
                        <div className="radio_btn_section">
                            {radioBtnOptions.map((v, i) => {
                                return (
                                    <div onClick={() => setRadioSelected(v)} className="radio_btn d-flex align-items-center">
                                        <div style={{ borderColor: hightlightedColor, backgroundColor: radioSelected === v ? hightlightedColor : "transparent" }} className="icon_sectin">
                                            <GiCheckMark size={10} color={backgroundTextColor} />
                                        </div>
                                        <div style={{ color: hightlightedColor }} className="label_section">
                                            {v}
                                        </div>
                                    </div>
                                )
                            })}
                            {radioSelected === "Later" ? <div>
                                <Input setState={setTime} name='date' icon={true} label="Time" placeholder={time} />
                                <DatePicker setState={setDate} label="Date Picker" />
                            </div> : null}
                        </div>
                    </div>

                    {/* delivery time section */}


                    {/* add note section */}

                    <div className="delivery_time_section pt-4">
                        <div className="d-flex justify-content-center mt-4">
                            <p className="heading" style ={{color : textColor}}>Add a Note</p>
                        </div>
                        <TextArea setState={setNote} show="none" placeholder="Optional" />
                    </div>
                    {/* add note section */}


                    {/* agree section */}


                    <div className="d-flex justify-content-center py-5">
                        <div className="agree_text_area">
                            <p style={{ color: textColor }} className="agree">
                                By clicking proceed to checkout I agree to FineDine Menu’s <a style={{ color: hightlightedColor, textDecoration: "none" }} href="#">Terms of Service</a> and <a style={{ color: hightlightedColor, textDecoration: "none" }} href="#">Privacy Policy</a>
                            </p>
                        </div>
                    </div>

                    {/* agree section */}

                </div>
            </div>

        </div>
      </div>
            <SubtotalFooter onClick={()=> submit()} title="PROCEED TO CHECKOUT" />
    </div>
  )
}

export default Index
