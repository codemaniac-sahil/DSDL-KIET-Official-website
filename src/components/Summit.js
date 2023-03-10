import React, { useEffect } from "react";
import Carousel from "./Carousel";
import "./css/Summit.css";
const Summit = () => {
  return (
    <div className="Summit-main">
      <center>
        {" "}
        <div className="heading-summit">GAISA Summit</div>
        <Carousel />
      </center>
    </div>
  );
};

export default Summit;
