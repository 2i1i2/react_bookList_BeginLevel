import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

function BookList() {
  return (
    <section className="book_container">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="main_book">
      <Image />
      <Title />
      <AutherAndDate />
      <Rating />
      <RemarkSign />
      <LimitedTime />
      <Price className="price"/>
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/71wrQ0bR8+S._AC_UY218_.jpg"
    alt="how to win influcient people"
  />
);

const Title = () => <h4 className="title">How To Win Friends and Influence People</h4>


const AutherAndDate = () => <p className="auther_and_date">by Dale Carnegie | 1 January 2021</p>

const Rating = () => <sapn className="rating">rating</sapn>

const RemarkSign =()=> <p className="paperback">Pageback</p>

const LimitedTime = () => <p className="limited">Limited tim deal</p>

const Price = () => <p className="price"><span className="pd"> ₹89</span> <del>179</del>(50% off)</p>


ReactDOM.render(<BookList />, document.getElementById("root"));
