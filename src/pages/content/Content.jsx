import React from "react";
import "./content.scss";
import contentImg from "../../assets/img/Content-img.svg";
import tel2 from "../../assets/img/Tel1.svg";

const Content = () => {
  return (
    <section className="content-section">
      <div className="container flex-class">
        <div className="content-img">
          <img src={contentImg} alt="Eror" />
        </div>
        <div className="content-text">
          <h1>Quality cleaning for your home</h1>
          <p>
            Condimentum mauris sit cursus amet id non neque pharetra nulla
            ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
            aliquet et nulla magna lacus penatibus.
          </p>
          <div className="flex-class home-flex">
            <button>Get a free quote</button>
            <img src={tel2} alt="Eror" />
            <div className="homFlex-text">
              <span>Call us now</span>
              <h4>(414) 567 - 2109</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
