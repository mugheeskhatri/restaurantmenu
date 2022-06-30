import React from "react";
import "./main_menu.css";
import logo from "../../assets/images/logo-white.png";
import RoundedButton from "../../Components/button/roundedBtn";

//import components
import Header from "../../Components/header";
import Card from "../../Components/cards/Card";

const Index = () => {
  return (
    <div className="welcome-main">
      <Header />
      <div className="container-fluid">
        <div>
          <h5 className="main_menu">Main Menu</h5>
          <h5 className="main_menu_child">
            All your favorites available for delivery & pick-up!
          </h5>
        </div>
        {/* images */}
        <div></div>
        {/* //// */}

        <div>
          <h5 className="main_menu">All Item</h5>
          <h5 className="main_menu_child">Fresh and organic ingredients</h5>
        </div>
        {/* box  */}
        <Card />
      </div>
    </div>
  );
};

export default Index;
