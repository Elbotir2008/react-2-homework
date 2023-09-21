import React from "react";
import "./about.scss";
import aboutImg1 from "../../assets/img/aboutCard-img1.svg";
import aboutImg2 from "../../assets/img/aboutCard-img2.svg";
import aboutImg3 from "../../assets/img/aboutCard-img3.svg";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-title">
          <h1>About Us</h1>
          <p>
            Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
            neque nisi felis non ultrices massa id egestas quam velit pretium
            nu.
          </p>
        </div>
        <div className="about-cards flex-class">
          <div className="card">
            <img src={aboutImg1} alt="Eror" />
            <h4>1. Schedule online</h4>
            <p>
              Sagittis nibh scelerisque vitae egetolment vulputate sem elementum
              sed n.
            </p>
          </div>
          <div className="card">
            <img src={aboutImg2} alt="Eror" />
            <h4>2. Pay online easily</h4>
            <p>
              Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet
              at nunc.
            </p>
          </div>
          <div className="card">
            <img src={aboutImg3} alt="Eror" />
            <h4>3. Get your house cleaned</h4>
            <p>
              Nunc maecenas sollicitudin metus tellus mattis sed porttitor
              cursus eleifend.
            </p>
          </div>
        </div>
        <button className="aboutBtn-1">Get a free quote</button>
        <button className="aboutBtn-2">Explore services</button>
      </div>
    </section>
  );
};

export default About;
