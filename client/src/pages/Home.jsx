import React from "react";
import Carousel from "../components/Carousel";
import ShopBy from "../components/ShopBy";
import GenInfo, { Brands } from "../components/GenInfo";
import ProductsPreview from "../components/ProductsPreview";
import { data } from "../helpers/data";

const Home = () => {
  return (
    <div className="max-w-screen-xl xs:w-[95vw] xs:max-w-[95vw] md:w-full mx-auto ">
      <Carousel />
      <GenInfo />
      <Brands />
      <div className="md:w-full md:max-w-full xs:mx-2  sm:mx-auto ">
        <div className="child:ring-white">
          <ShopBy title="Best Sellers" filter="bestSellers" />
          {/* now we call this component wherever we want */}
          <ProductsPreview data={data} />
        </div>
        <div className="child:ring-white">
          <ShopBy title="Top Rated" filter="topRated" />
          {/* even we can call it here - ps: you only want a copy in best sellers section not in Top Rated */}
          {/* <ProductsPreview data={data} /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
