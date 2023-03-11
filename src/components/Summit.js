import React, { useEffect } from "react";
import Carousel from "./Carousel";
import CarouselSummit from "./CarouselSummit";
import "./css/Summit.css";
const Summit = () => {
  return (
    <div className="Summit-main">
      <center>
        {" "}
        <div className="heading-summit">GAISA Summit</div>
        <CarouselSummit />
      </center>
    </div>
  );
};

export default Summit;
