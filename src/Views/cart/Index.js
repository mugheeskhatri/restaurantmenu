import React, { useContext, useState } from "react";
import "./Index.css";
// import logo from "../../assets/images/logo-white.png";
import { FiFramer } from 'react-icons/fi'
import { IoIosWater } from 'react-icons/io'
import { MdOutlineWaterDrop } from 'react-icons/md'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin5Line } from 'react-icons/ri'
//import components
import Header from "../../Components/header";
import Cart_items from "../../Components/cards/cart_items/Cart_items";
import Input from '../../Components/inputs/inputText/index'
import Button from '../../Components/checkoutbtn/index'
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/context";

const Index = () => {
    const navigation = useNavigate()
    const [counter, setCounter] = useState(1)
  const {hightlightedColor , textColor , backgroundTextColor} = useContext(AuthContext)

    const [cart_items, setCart_items] = useState([
        {
            title: `Chef's Special Salad`,
            price: 'AED 36.00  (AED12.00 x 3)',
            qty: 1
        },
        {
            title: `Chef's Special Salad`,
            price: 'AED 36.00  (AED12.00 x 3)',
            qty: 1
        },
        {
            title: `Chef's Special Salad`,
            price: 'AED 36.00  (AED12.00 x 3)',
            qty: 1
        },
    ])

    const delete_cart = (index) => {
        const filter_array = cart_items.filter((item, ind) => ind !== index)
        setCart_items(filter_array)
    }

    const cart_items_plus_qty = (item, key) => {
        const _inputs = [...cart_items];
        _inputs[key].qty = _inputs[key].qty + 1;
        _inputs[key].key = key;
        setCart_items(_inputs);
    };

    const cart_items_minus_qty = (item, key) => {
        const _inputs = [...cart_items];
        _inputs[key].qty = _inputs[key].qty - 1;
        _inputs[key].key = key;
        setCart_items(_inputs);
    };



    return (
        <div className="welcome-main">
            <Header title={'Cart'} toggle={true} back={true} />

            {cart_items.map((item, index) => {
                return (
                    <div className="card_View">
                        <div style={{ flex: 1, justifyContent: 'space-between' }}>
                            <p className="cart_title" style ={{color : textColor}}>{item.title}</p>
                            <p className="cart_content">{item.price}</p>
                            <div className="d-flex align-items-center counter_view">
                                {item.qty === 1 ?
                                    <AiFillMinusCircle color={hightlightedColor} fontSize={'14px'} style={{ opacity: 0.4 }} />
                                    :
                                    <AiFillMinusCircle onClick={() => cart_items_minus_qty(item.qty, index)} color={hightlightedColor} fontSize={'14px'} />
                                }
                                <p className="counter">{item.qty}</p>
                                <AiFillPlusCircle onClick={() => cart_items_plus_qty(item.qty, index)} color={hightlightedColor} fontSize={'14px'} />
                            </div>
                        </div>
                        <div>
                            <img className="image" src="https://www.foodiesfeed.com/wp-content/uploads/2021/01/hot-shakshuka-819x1024.jpg" />
                            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '5px 5px 5px 5px' }}>

                                <FiEdit onClick={() => navigation('/editcart')} color={textColor} size={15} />
                                <RiDeleteBin5Line onClick={() => delete_cart(index)} color={textColor} size={15} />
                            </div>
                        </div>

                    </div>
                )
            })}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: 'white',
                margin: '20px 10px',
                borderRadius: '5px'
            }}>
                <input placeholder="Enter a promo" className="input_promo"  />
                {/* <Input placeholder='Enter a promo' style={{ backgroundColor: 'white', padding: -50, width: '60%', color: 'red' }} /> */}
                <button className="apply_button" style ={{backgroundColor : hightlightedColor , color : backgroundTextColor}}>Apply</button>
                {/* <Button style={{ }} title ={'Apply'} /> */}
            </div>


            {/* add a note */}
            {/* input */}
            {/* inputend */}

            {/* <Input placeholder={'asdasds'} /> */}
            <Button onClick={() => navigation('/finishorder')} title='Finish Order' />



            {/* <button className="bottom">
    ayan
</button> */}


        </div>
    );
};

export default Index;
