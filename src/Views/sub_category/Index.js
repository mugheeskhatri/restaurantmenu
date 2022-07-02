import React, { useState } from "react";
import "./index.css";

//import components
import Header from "../../Components/header";
import Card from "../../Components/cards/Card";

const card_detial = [
  {
    heading: "Chefs Special Salad",
    discription: `Fresh beetroot salad served with
      crumbled goat cheese, walnuts, and
      tomatoes`,
    price: `AED 15.00 - AED 60.00`,
  },
  {
    heading: `Chef's Special Salad`,
    discription: `Fresh beetroot salad served with
      crumbled goat cheese, walnuts, and
      tomatoes`,
    price: `AED 15.00`,
  },
  {
    heading: `Chef's Special Salad`,
    discription: `Fresh beetroot salad served with
      crumbled goat cheese, walnuts, and
      tomatoes`,
    price: `AED 15.00 - AED 60.00`,
  },
];

const imagesWithContent = [
  {
    url: "https://img.freepik.com/photos-gratuite/delicieux-hamburgers-grilles_62847-14.jpg?w=2000",
    title: "Fast Food",
    discription: `Fresh beetroot salad served with
    crumbled goat cheese, walnuts, and
    tomatoes`,
    product: [
      {
        heading: "Chefs Special Salad",
        discription: `Fresh beetroot salad served with
          crumbled goat cheese, walnuts, and
          tomatoes`,
        price: `AED 15.00 - AED 60.00`,
      },
      {
        heading: `Chef's Special Salad`,
        discription: `Fresh beetroot salad served with
          crumbled goat cheese, walnuts, and
          tomatoes`,
        price: `AED 15.00`,
      },
      {
        heading: `Chef's Special Salad`,
        discription: `Fresh beetroot salad served with
          crumbled goat cheese, walnuts, and
          tomatoes`,
        price: `AED 15.00 - AED 60.00`,
      },
    ],
  },
  {
    url: "https://img.freepik.com/photos-gratuite/delicieux-hamburgers-grilles_62847-14.jpg?w=2000",
    title: "Sushi",
    product: [
      {
        heading: "Chefs Special Salad",
        discription: `Fresh beetroot salad served with
          crumbled goat cheese, walnuts, and
          tomatoes`,
        price: `AED 15.00 - AED 60.00`,
      },
      {
        heading: `Chef's Special Salad`,
        discription: `Fresh beetroot salad served with
          crumbled goat cheese, walnuts, and
          tomatoes`,
        price: `AED 15.00`,
      },
      {
        heading: `Chef's Special Salad`,
        discription: `Fresh beetroot salad served with
          crumbled goat cheese, walnuts, and
          tomatoes`,
        price: `AED 15.00 - AED 60.00`,
      },
    ],
    discription: `Fresh beetroot salad served with
    crumbled goat cheese, walnuts, and
    tomatoes`,
  },
  {
    url: "https://img.freepik.com/photos-gratuite/delicieux-hamburgers-grilles_62847-14.jpg?w=2000",
    title: "Pasta",
    product: [],
    discription: `Fresh beetroot salad served with
    crumbled goat cheese, walnuts, and
    tomatoes`,
  },
  {
    url: "https://img.freepik.com/photos-gratuite/delicieux-hamburgers-grilles_62847-14.jpg?w=2000",
    title: "Maxicam Food",
    product: [],
    discription: `Fresh beetroot salad served with
    crumbled goat cheese, walnuts, and
    tomatoes`,
  },
];

const Index = () => {
  const [index, setIndex] = useState(0);
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
        <div className="image_div">
          {imagesWithContent.map((item, Index) => {
            return (
              <div onClick={() => setIndex(Index)}>
                <img className="images" src={item.url} />
                <p
                  className="img_content"
                  style={{ color: index === Index ? "yellow" : "white" }}
                >
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
        {/* //// */}

        <div>
          <h5 className="main_menu">{imagesWithContent[index].title}</h5>
          <h5 className="main_menu_child">
            {imagesWithContent[index].discription}
          </h5>
        </div>
        {/* box  */}
        {imagesWithContent[index].product.length === 0 ? (
          <p className="no_avaliable">No Items are Available Now!</p>
        ) : (
          card_detial.map((item, Index) => {
            return (
              <div>
                <Card
                  Heading={item.heading}
                  Discription={item.discription}
                  Price={item.price}
                />
              </div>
            );
          })
        )}
        <div>
          <p>
            
          </p>
        </div>
        <p className="powered_by">Powerd by QR Code Menu</p>
      </div>
    </div>
  );
};

export default Index;
