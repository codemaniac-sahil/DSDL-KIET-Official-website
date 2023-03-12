import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "./css/Summit.css";
const Summit = () => {
  return (
    <div className="Summit-main">
      <center>
        {" "}
        <div className="heading-summit">GAISA Summit</div>
      </center>

      <div className="corousel">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          autoplay={true}
          loop={true}
        >
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={require("../assets/images/deep-learning.jpeg")} />
          </SwiperSlide>
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={require("../assets/images/machine_learning.jpeg")} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Summit;
