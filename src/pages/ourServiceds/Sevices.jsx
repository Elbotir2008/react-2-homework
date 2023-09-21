import React from "react";
import "./servicies.scss";
import servicesImg1 from "../../assets/img/servicesCard-img1.svg";
import servicesImg2 from "../../assets/img/servicesCard-img2.svg";
import servicesImg3 from "../../assets/img/servicesCard-img3.svg";

const Sevices = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="services-title flex-class">
          <h1>Our Services</h1>
          <button>Explore services</button>
        </div>
        <div className="services-cards flex-class">
          <div className="card">
            <img src={servicesImg1} alt="Eror" />
            <h4>House cleaning</h4>
            <p>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
          <div className="card">
            <img src={servicesImg2} alt="Eror" />
            <h4>Office cleaning</h4>
            <p>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
          <div className="card">
            <img src={servicesImg3} alt="Eror" />
            <h4>Industrial cleaning</h4>
            <p>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sevices;
