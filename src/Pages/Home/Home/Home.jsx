import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Countries from "../Countries/Countries";
import Info from "../Info/Info";

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Category />
      <Countries />
    </div>
  );
};

export default Home;
