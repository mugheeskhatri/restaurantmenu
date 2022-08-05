import React, { useContext, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import "./header.css";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { AuthContext } from "../../context/context";

const Index = (props) => {
  const [back, setBack] = useState(false);
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }
  

  return isOpen ? <>
    <Drawer className='drawer_style' style ={{backgroundColor : 'red'}} open={isOpen} onClose={toggleDrawer} direction='right'>
      <div>

      <div className="header-main">

        <div className="">
          <div className="icon-container-disable">
            <IoIosArrowBack color="rgb(141, 39, 49 , 0.1)" size={20} />
          </div>
        </div>
        <div>
          <p className="heading">
            {props.title}
          </p>
        </div>
        <div onClick={toggleDrawer} className=" d-flex justify-content-end">
          <div className="icon-container">
            <AiOutlineClose color="rgba(255, 255, 255, .3)" size={20} />
          </div>
        </div>
      </div>
      <div style ={{marginTop : '50px'}}>
        <p className="drawer_content"  >Language (EN)</p>
        <p className="drawer_content" style ={{borderBottom : '1px solid #BC2433' , borderTop : '1px solid #BC2433'}}>Track Order</p>
        <p className="drawer_content">Give us a feedback!</p>
      </div>
      </div>

    </Drawer>
  </> : (
    <div className="header-main">

      <div className="">
        {props.back ? (
          <div className="icon-container">
            <IoIosArrowBack color="rgba(255, 255, 255, .3)" size={20} />
          </div>
        ) : <div className="icon-container-disable">
          <IoIosArrowBack color="rgb(141, 39, 49 , 0.1)" size={20} />
        </div>}
      </div>
      <div >
        <p className="heading">
          {props.title}
        </p>
      </div>
      {!props.toggle ?
        <div onClick={toggleDrawer} className=" d-flex justify-content-end">
          <div className="icon-container">
            <BiMenuAltRight color="rgba(255, 255, 255, .3)" size={20} />
          </div>
        </div>
        :
        <div className="icon-container-disable">
          <BiMenuAltRight color="rgb(141, 39, 49 , 0.1)" size={20} />
        </div>
      }

    </div>
  );
};

export default Index;