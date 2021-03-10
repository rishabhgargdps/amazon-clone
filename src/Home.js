import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://investorplace.com/wp-content/uploads/2018/03/Amazon-Prime-video-nuimbers-MSN.jpg"
          alt="image not available"
        />
        <div className="home__row">
          <Product
            id="12345"
            title="dolor sit amet consectetur adipisicing elit. Maxime mollitia"
            price={29.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/81vvgZqCskL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="12345"
            title="The lean startup"
            price={29.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/81vvgZqCskL._AC_SY400_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="12345"
            title="The lean startup"
            price={29.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/81vvgZqCskL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="12345"
            title="The lean startup"
            price={29.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/81vvgZqCskL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="12345"
            title="The lean startup"
            price={29.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/81vvgZqCskL._AC_SY400_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="12345"
            title="The lean startup"
            price={29.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/81vvgZqCskL._AC_SY400_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
