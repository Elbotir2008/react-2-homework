import React from "react";
import "./home.scss";
import homeImg from "../../assets/img/Home-img.svg";
import tel1 from "../../assets/img/Tel1.svg";

const Home = () => {
  return (
    <section className="home-section">
      <div className="container flex-class">
        <div className="home-text">
          <h1>Quality cleaning for your home</h1>
          <p>
            Condimentum mauris sit cursus amet id non neque pharetra nulla
            ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
            aliquet et nulla magna lacus penatibus.
          </p>
          <div className="flex-class home-flex">
            <button>Get a free quote</button>
            <img src={tel1} alt="Eror" />
            <div className="homFlex-text">
              <span>Call us now</span>
              <h4>(414) 567 - 2109</h4>
            </div>
          </div>
        </div>
        <div className="home-img">
          <img src={homeImg} alt="Eror" />
        </div>
      </div>
    </section>
  );
};

export default Home;
