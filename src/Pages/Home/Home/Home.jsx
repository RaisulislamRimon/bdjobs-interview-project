import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Countries from "../Countries/Countries";
import Info from "../Info/Info";
import Partner from "../Partner/Partner";

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Category />
      <Countries />
      <Partner />
    </div>
  );
};

export default Home;
