import React from "react";
import "./articles.scss";
import box from "../../assets/img/box.svg";
// import box1 from "../../assets/img/Articles-img1.svg";
// import box2 from "../../assets/img/Articles-img2.svg";

const Articles = () => {
  return (
    <section className="articles-section" id="articles">
      <div className="container">
        <div className="articles-title flex-class">
          <h1>Articles & resources</h1>
          <div className="articles-btns">
            <button className="articles-btn1">Get a free quote</button>
            <button className="articles-btn2">Browse articles</button>
          </div>
        </div>
        <div className="articles-body flex-class">
          <div className="card">
            {/* <img src={box1} alt="Eror" /> */}
            <div className="card-text">
              <h4>
                8 best vacuum cleaners to clean any mess for your home in 2022
              </h4>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                quis odio sit sit ac port titor sit males.
              </p>
              <div className="flex-class card-flex">
                <b>Jan 28, 2022</b>
                <img src={box} alt="Eror" />
              </div>
            </div>
          </div>
          <div className="card">
            {/* <img src={box2} alt="Eror" /> */}
            <div className="card-text">
              <h4>
                How to properly disinfect your phone and other electronics
              </h4>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                quis odio sit sit ac port titor sit males.
              </p>
              <div className="flex-class card-flex">
                <b>Feb 1, 2022</b>
                <img src={box} alt="Eror" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
