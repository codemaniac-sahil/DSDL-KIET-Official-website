import React from "react";
import "./css/Blogs.css";
import summit from "../assets/images/summit.png";
function Blogs() {
  return (
    <div className="main-blog">
      <center>
        <div className="text-blog"> Blogs</div>
      </center>
      <div className="inner-blog">
        <div className="blog-image">
          <img src={summit} alt="summit" className="image" />
        </div>
        <div className="blog-content">
          <div className="blog-main-heading">
            <div>GAISA Summit</div>
          </div>
          <div className="blog-2">
            All India Council for Robotics & Automation(AICRA) organized the 3rd
            edition of GAISA, predominantly focusses on delivering great
            insights into AI & Machine Learning in sustainable development.
          </div>
          <div>
            <a className="" href="/summit">
              <div className="blog-button">Explore</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
