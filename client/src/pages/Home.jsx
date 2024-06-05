import React from "react";
import HeaderImg from "../../public/header1.png";
import FooterIng from "../../public/footer2.png";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <div>
        <img className="header-img" src={HeaderImg} alt="header" />
      </div>
      <Hero/>
      <div>
        <img className="header-img" src={FooterIng} alt="header" />
      </div>
    </div>
  );
};

export default Home;
