import React, { useState, Component } from "react";
import DatePicker from 'react-dater'
import 'react-dater/dist/index.css'
import '../inputs/inputText/input.css'
import { IoIosArrowDown, IoMdTime } from "react-icons/io";



const Index = (props) => {

    const [dates, setDates] = useState({

        checkin: new Date('2022-03-28'),

        checkout: new Date('2022-04-28')

    })
    const [open, setOpen] = useState(false)


    return (
        <div className="input_container">
            <p style={{ color: "white", fontSize: 16, display: props.show ? props.show : "block" }}>{props.label}</p>
            <div className="input-field-container">
                <div>

                </div>
                <div style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <DatePicker

                        dates={dates}

                        setDates={setDates}

                        open={open}

                        setOpen={setOpen}


                    >

                        <button onClick={() => setOpen(!open)}>

                            {dates.checkin && dates.checkin.toDateString()} |{' '}

                            {dates.checkout && dates.checkout.toDateString()}

                        </button>

                    </DatePicker>
                </div>

            </div>
        </div>
    )
}


export default Index;

