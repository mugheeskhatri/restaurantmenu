import React, { useContext, useState } from "react";
import "./main_menu.css";
import logo from "../../assets/images/logo-white.png";
import RoundedButton from "../../Components/button/roundedBtn";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";




//import components
import Header from "../../Components/header";
import Card from "../../Components/cards/Card";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/context";





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
    title: "SALAD",
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
    url: "https://finedine.imgix.net/EkQEL4rnl/0c2ca1b2-0827-4a2a-bfbd-9fef21484dc1.jpg?auto=format,&fit=crop&w=120&h=80",
    title: "SAUCES",
    product: [],
  },
  {
    url: "https://img.freepik.com/photos-gratuite/delicieux-hamburgers-grilles_62847-14.jpg?w=2000",
    title: "3 item",
    product: [],
  },
  {
    url: "https://finedine.imgix.net/EkQEL4rnl/5f248592-d713-4a03-9053-68c161eccfe7.jpg?auto=format,&fit=crop&w=120&h=80",
    title: "4 item",
    product: [],
  },
  {
    url: "https://img.freepik.com/photos-gratuite/delicieux-hamburgers-grilles_62847-14.jpg?w=2000",
    title: "5 item",
    product: [],
  },
  {
    url: "https://finedine.imgix.net/EkQEL4rnl/64b5aa6d-8894-4d19-8a1a-a55ae5eaae6f.jpg?auto=format,&fit=crop&w=120&h=80",
    title: "6 item",
    product: [],
  },
];

const Index = () => {
  const navigation = useNavigate();
  const {hightlightedColor , textColor} = useContext(AuthContext)

  const [index, setIndex] = useState(0);
  const token = "1|5hNVItwOA0FikjYvxSnXcoqQKWg1pROS1SFhHWCv"
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  const categoryApiCall = () => {

    axios.get(
      'http://menu.msac.ae/api/v1/categories',
      config
    ).then((res) => {
      setCategory(res.data.data)
      console.log(res.data.data)
    })
      .catch((e) => {
        console.log(e)
      })
  }
  const productApiCall = (id) => {

    axios.get(
      'http://menu.msac.ae/api/v1/products',
      config
    ).then((res) => {
      const allProducts = res.data.data;
      const filteredProducts = allProducts.filter(product => product.category_id === id)
      console.log('filteredProducts', filteredProducts)
      setShowProducts(filteredProducts)

    })
      .catch((e) => {
        console.log(e)
      })
  }


  useEffect(() => {
    categoryApiCall()
    productApiCall(11)
  }, [])


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


  return (
    <div className="welcome-main">
      <Header />
      <div className="container-fluid">
        <div>
          <h5 className="main_menu" style ={{color : hightlightedColor}}>Main Menu</h5>
          <h5 className="main_menu_child" style ={{color : textColor}}>
            All your favorites available for delivery & pick-up!
          </h5>
        </div>
        {/* images */}
        <div className="w-100">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.

            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            afterChange={(previous, { currentSlide }) => {
            currentSlide < previous ? setIndex(index - 1) : setIndex(index + 1)
          }}
          centerMode={true}

          >
            {imagesWithContent.map((item, Index) => {
              return (
                <div className="main_menu_items" onClick={() => setIndex(Index)}>
                  <div className="nested_container">
                    <img className="images" src={item.url} />
                    <div className="content_section" style={{ borderColor: index === Index ? hightlightedColor : "transparent" }}>
                      <p
                        className="img_content"
                        style={{
                          color: index === Index ? hightlightedColor : textColor,
                        }}
                      >
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

          </Carousel>
        </div>
        {/* //// */}

        <div>
          <h5 className="main_menu" style={{ color: hightlightedColor }}>All Item</h5>
          <h5 className="main_menu_child" style ={{color : textColor}}>Fresh and organic ingredients</h5>
        </div>
        {/* box  */}
        {imagesWithContent[index].product.length === 0 ? (
          <p className="no_avaliable" style ={{color : textColor}}>No Items are Available Now!</p>
        ) : (
          card_detial.map((item, Index) => {
            return (
              <Link style={{ textDecoration: 'none' }} to='/addtocart'>
                <Card
                  Heading={item.heading}
                  Discription={item.discription}
                  Price={item.price}
                  onClick={() => navigation('/addtocart')}
                />
              </Link>
            );
          })
        )}
        <p className="powered_by" style ={{color : textColor}}>Powerd by QR Code Menu</p>
      </div>
    </div>
  );
};

export default Index;