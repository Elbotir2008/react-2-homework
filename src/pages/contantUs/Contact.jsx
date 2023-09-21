import React from "react";
import "./contant.scss";
import tel3 from "../../assets/img/Tel1.svg";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container flex-class">
        <div className="contact-text">
          <h1>Contact Us</h1>
          <p>
            In dignissim euismod pretium amet enim a eu nam ut urna accumsan
            pellentesque lacus duis pharetra eutortor.
          </p>
          <div className="flex-class contact-flex">
            <button>Get a free quote</button>
            <img src={tel3} alt="Eror" />
            <div className="homFlex-text">
              <span>Call us now</span>
              <h4>(414) 567 - 2109</h4>
            </div>
          </div>
          <h3>Not convinced yet?</h3>
          <p>
            Massa bibendum consectetur maurisid gravida purus, dolor dui amet
            morbi non nunc urna purus diam.
          </p>
          <button className="btnContact">Browse our packages</button>
        </div>
        <div className="contact-form">
          <div className="flex-class myClass">
            <div className="input1">
              <label htmlFor="text1">Full name</label>
              <input type="text" id="text1" />
            </div>
            <div className="input2">
              <label htmlFor="number1">Phone number</label>
              <input type="number" id="number1" />
            </div>
          </div>
          <div className="flex-class myClass">
            <div className="input3">
              <label htmlFor="text2">Address</label>
              <input type="text" id="text2" />
            </div>
            <div className="input4">
              <label htmlFor="text3">Email</label>
              <input type="text" id="text3" />
            </div>
          </div>
          <div className="flex-class myClass">
            <div className="input5">
              <label htmlFor="number2">Requested service</label>
              <input type="number" />
            </div>
            <div className="input6">
              <label htmlFor="date">Day of service</label>
              <input type="date" id="date" />
            </div>
          </div>
          <label htmlFor="textarea" className="labeltextarea">
            Add a note
          </label>
          <textarea id="textarea"></textarea>
          <button type="submit">Submit message</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
